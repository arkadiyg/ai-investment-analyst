#!/bin/bash
# Fetch and clean a YouTube transcript for a deal-review video.
# Usage: fetch_transcript.sh <youtube_url> <output.md> [deal_name]
#
# Pulls English captions only (no media download) via yt-dlp, cleans the
# rolling-duplication that auto-captions produce, chunks the text at ~30s
# intervals with [hh:mm:ss] timestamps, and writes a Transcript.md with a
# YAML front-matter header. This is the raw source record — the analytical
# Summary.md and the memo updates are authored separately by the skill.
#
# The transcript is corroborating evidence, NOT an offering document: it is
# the sponsor in their own words plus third-party commentary, and is trusted
# below the PPM/LPA/subscription documents.

set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <youtube_url> <output.md> [deal_name]"
  exit 1
fi

URL="$1"
OUTPUT="$2"
DEAL="${3:-}"

# yt-dlp is the only external dependency. Prefer a PATH binary; fall back to
# the python module; if neither is present, try a --user pip install (python3
# is assumed present in the sandbox, same as poppler/pandoc for the sibling
# scripts) and invoke the freshly installed module.
ytdlp() {
  if command -v yt-dlp >/dev/null 2>&1; then
    yt-dlp "$@"
  else
    python3 -m yt_dlp "$@"
  fi
}

if ! command -v yt-dlp >/dev/null 2>&1 && ! python3 -c 'import yt_dlp' >/dev/null 2>&1; then
  echo "yt-dlp not found — installing via pip..." >&2
  # Try the install strategies in order: plain (works inside a venv), --user
  # (works on a bare system python), then --break-system-packages (PEP 668).
  installed=""
  for opt in "" "--user" "--break-system-packages"; do
    # shellcheck disable=SC2086
    if python3 -m pip install --quiet $opt yt-dlp >&2 2>/dev/null; then
      installed="yes"; break
    fi
  done
  if [ -z "$installed" ]; then
    echo "Could not install yt-dlp. Install it manually: pip install yt-dlp (or: brew install yt-dlp)" >&2
    exit 1
  fi
fi

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

# 1. Metadata for the YAML header (one line, pipe-delimited; no media download).
META="$(ytdlp --skip-download --no-warnings \
  --print "%(title)s|%(channel)s|%(upload_date)s|%(duration_string)s|%(id)s" \
  "$URL" 2>/dev/null | head -1 || true)"
TITLE="${META%%|*}"; REST="${META#*|}"
CHANNEL="${REST%%|*}"; REST="${REST#*|}"
UPLOAD="${REST%%|*}"; REST="${REST#*|}"
DURATION="${REST%%|*}"; VIDEO_ID="${REST##*|}"
[ -n "$TITLE" ] || TITLE="(unknown title)"
[ -n "$CHANNEL" ] || CHANNEL="(unknown channel)"
# YYYYMMDD -> YYYY-MM-DD when present
if [ "${#UPLOAD}" = "8" ]; then
  PUBLISHED="${UPLOAD:0:4}-${UPLOAD:4:2}-${UPLOAD:6:2}"
else
  PUBLISHED="(unknown)"
fi

# 2. Captions only. Try uploaded subs first, then auto-captions; json3 is the
#    cleanest machine-readable format (vtt is the fallback).
ytdlp --skip-download --no-warnings \
  --write-subs --write-auto-subs \
  --sub-langs "en.*,en" --sub-format "json3/vtt/best" \
  -o "$WORKDIR/cap.%(ext)s" "$URL" >/dev/null 2>&1 || true

CAP=""
for f in "$WORKDIR"/*.json3 "$WORKDIR"/*.vtt; do
  [ -e "$f" ] && { CAP="$f"; break; }
done

if [ -z "$CAP" ]; then
  echo "No English captions available for $URL — skipping transcript." >&2
  exit 2
fi

RETRIEVED="$(date +%F)"

# 3. Clean + chunk. json3 and vtt are both handled by the same python helper:
#    de-duplicate the rolling caption window, then bucket text into ~30s
#    windows keyed by start time.
BODY="$(CAP="$CAP" python3 <<'PY'
import json, os, re, sys

cap = os.environ["CAP"]
CHUNK_MS = 30_000

def hhmmss(ms):
    s = ms // 1000
    return f"{s//3600:02d}:{(s%3600)//60:02d}:{s%60:02d}"

# (start_ms, text) finalized lines
lines = []

def push(ms, text):
    text = re.sub(r"\s+", " ", text).strip()
    if not text:
        return
    if lines:
        prev_ms, prev = lines[-1]
        # rolling auto-captions re-render the growing line; collapse exact
        # repeats and prefix-growth into the latest version.
        if text == prev or prev.endswith(text):
            return
        if text.startswith(prev):
            lines[-1] = (prev_ms, text)
            return
    lines.append((ms, text))

if cap.endswith(".json3"):
    data = json.load(open(cap, encoding="utf-8"))
    for ev in data.get("events", []):
        segs = ev.get("segs")
        if not segs:
            continue
        push(ev.get("tStartMs", 0), "".join(s.get("utf8", "") for s in segs))
else:  # vtt
    ts = re.compile(r"(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s+-->")
    cur_ms = 0
    buf = []
    for raw in open(cap, encoding="utf-8"):
        line = raw.rstrip("\n")
        m = ts.search(line)
        if m:
            if buf:
                push(cur_ms, " ".join(buf)); buf = []
            h, mi, s, ms = map(int, m.groups())
            cur_ms = ((h*60+mi)*60+s)*1000+ms
            continue
        if line.strip() in ("", "WEBVTT") or line.strip().isdigit():
            continue
        if "-->" in line or line.startswith(("Kind:", "Language:", "NOTE")):
            continue
        clean = re.sub(r"<[^>]+>", "", line).strip()  # strip inline word timings
        if clean:
            buf.append(clean)
    if buf:
        push(cur_ms, " ".join(buf))

# bucket into ~30s windows
out = []
bucket_start = None
bucket_text = []
def flush():
    if bucket_text:
        out.append(f"[{hhmmss(bucket_start)}] " + " ".join(bucket_text))
for ms, text in lines:
    if bucket_start is None:
        bucket_start = (ms // CHUNK_MS) * CHUNK_MS
    if ms >= bucket_start + CHUNK_MS:
        flush()
        bucket_start = (ms // CHUNK_MS) * CHUNK_MS
        bucket_text = []
    bucket_text.append(text)
flush()
print("\n\n".join(out))
PY
)"

if [ -z "$BODY" ]; then
  echo "Captions found but produced no usable text for $URL." >&2
  exit 2
fi

# 4. Write Transcript.md with the YAML header. deal/participants are left for
#    the skill to fill from its own analysis (the script cannot infer them).
{
  echo "---"
  echo "type: source-transcript"
  echo "deal: ${DEAL:-TODO — fill deal legal name}"
  echo "source: YouTube — ${TITLE}"
  echo "url: ${URL}"
  echo "video_id: ${VIDEO_ID}"
  echo "channel: ${CHANNEL}"
  echo "published: ${PUBLISHED}"
  echo "duration: \"${DURATION}\""
  echo "participants: TODO — fill from transcript"
  echo "captions: YouTube captions (English), cleaned/de-duplicated"
  echo "retrieved: ${RETRIEVED}"
  echo "---"
  echo
  echo "# Transcript — ${TITLE}"
  echo
  echo "*Captions cleaned, de-duplicated, and chunked at ~30-second intervals. Timestamps are [hh:mm:ss]. Speaker attribution is approximate (auto-captions do not reliably attribute speakers).*"
  echo
  echo "$BODY"
} > "$OUTPUT"

echo "Wrote transcript ($(wc -l < "$OUTPUT") lines) to $OUTPUT"
