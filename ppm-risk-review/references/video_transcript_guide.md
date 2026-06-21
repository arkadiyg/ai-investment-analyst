# Ingesting Video Deal-Review Transcripts

Some deal folders contain a link to a YouTube video — most often a third-party
"LP deal review" or a sponsor webinar in which the manager presents the fund and
answers questions on the record. These are valuable: the sponsor's own words,
plus independent LP commentary, often surface admissions and red flags the
written offering documents soft-pedal. This guide is the mechanical companion to
the "Video transcript ingestion" step in `SKILL.md`.

## Trust level (read this first)

A transcript is **corroborating evidence, not an offering document.** It is
trusted *below* the PPM, LPA, subscription agreement, and Form D. Use it to:

- confirm or undercut findings the documents already support;
- capture sponsor statements made on the record (especially admissions about
  liquidity, valuation, fees, and terms not spelled out in the PPM);
- generate new questions for the sponsor questionnaire.

Never let a transcript *override* the documents. If the video contradicts the
PPM, that contradiction is itself a finding — flag it, don't resolve it in the
sponsor's favor.

## How the link is detected

Scan the deal folder (and its immediate subfolders) for `youtube.com/watch`,
`youtu.be/`, or `youtube.com/live/` URLs in any text-like file — `.txt`, `.md`,
`.url`, `.webloc`, or loose notes. A URL pasted into the user's prompt counts too.

**Process every distinct video found** — de-duplicate by the 11-character video
id (the `v=` value, or the `youtu.be/<id>` path), then run the fetch once per
unique id. Do not ask the user which one to use.

## Fetching and cleaning

```bash
bash scripts/fetch_transcript.sh "<youtube_url>" "<output Transcript.md>" "[deal legal name]"
```

The script wraps `yt-dlp` (auto-installs it via `pip` if absent) and:

1. pulls English captions only — uploaded subs first, then auto-captions — with
   no media download (`--skip-download`);
2. prefers the `json3` caption format (clean JSON; `vtt` is the fallback);
3. removes the rolling-window duplication auto-captions produce (each line is
   re-rendered as it grows — the cleaner collapses exact repeats and prefix
   growth into the final version);
4. chunks the text into ~30-second windows tagged `[hh:mm:ss]`;
5. writes a `Transcript.md` with a YAML front-matter header.

Exit codes: `0` success; `2` when the video has no English captions (skip the
transcript and continue with document-only analysis); `1` on a hard tooling
failure (yt-dlp missing and uninstallable).

The script fills the mechanical header fields it can read (title, channel,
published date, duration, video id, retrieved date). It leaves `deal:` (unless
passed as the 3rd argument) and `participants:` as `TODO` — fill those from your
own analysis after the fetch.

## Outputs (two files per video)

### `<Source> - Transcript.md` — raw source, deal folder only

The script's output. Keep it in the deal folder (the source tree); do **not**
mirror it to the Obsidian vault — it is bulky and unanalyzed. Header schema:

```yaml
---
type: source-transcript
deal: <fund legal name>
source: YouTube — <video title>
url: <full url>
video_id: <11-char id>
channel: <channel>
published: <YYYY-MM-DD>
duration: "<h:mm:ss>"
participants: <presenter; LP panel; host>
captions: YouTube captions (English), cleaned/de-duplicated
retrieved: <YYYY-MM-DD>
---
```

### `<Source> - Summary.md` — analytical, mirrored to vault

You author this (the script does not). A ~1-page analytical read: what the video
is, the sponsor's pitch in their own words, the LP panel's likes/dislikes and
disposition, and — most important — a "How it informs the review" section that
ties each transcript point back to the CIO memo's findings. This file *is*
mirrored to the vault alongside the deal's overview note.

Name both files after the source, not the fund, e.g.
`Sunrise Capital - PassivePockets Deal Review (2026-03-19) - Transcript.md` and
`... - Summary.md`.

## Folding the transcript into the deliverables

- **CIO memo** — add an "Independent corroboration (video deal review)" section
  that maps the transcript to the memo's top findings. Re-tally any FATAL /
  NEGOTIABLE / ASK / STRENGTH counts the section changes.
- **Sponsor questionnaire** — add any new ASK items the video surfaced (e.g., a
  tax claim made on the call whose limits went unmentioned).
- **Plain-English summary** — refresh only if the video materially changes the
  lay picture.
- **Pipeline summary + vault overview note** — mention that a transcript was
  ingested and what it corroborated.

When multiple videos exist, each gets its own Transcript.md + Summary.md, and the
CIO memo's corroboration section covers all of them.
