#!/bin/bash
# Extract text from a PPM PDF for analysis.
# Usage: extract_pdf.sh <input.pdf> <output.txt>
#
# Prefers `pdftotext -layout` (poppler) — layout-preserved text is what the
# rubric expects to walk. If poppler is missing it is installed automatically
# when possible; otherwise the script falls back to a pure-Python `pypdf`
# extraction (no layout preserved) so it still works off the Cowork sandbox.

set -e

if [ $# -lt 2 ]; then
  echo "Usage: $0 <input.pdf> <output.txt>" >&2
  exit 1
fi

INPUT="$1"
OUTPUT="$2"

if [ ! -f "$INPUT" ]; then
  echo "Input not found: $INPUT" >&2
  exit 1
fi

run_pdftotext() {
  pdftotext -layout "$INPUT" "$OUTPUT"
  echo "Extracted $(wc -l < "$OUTPUT") lines to $OUTPUT (pdftotext -layout)"
}

# 1. Preferred path: poppler already present.
if command -v pdftotext >/dev/null 2>&1; then
  run_pdftotext
  exit 0
fi

# 2. Best-effort auto-install of poppler (non-fatal).
echo "pdftotext not found; attempting to install poppler..." >&2
if command -v brew >/dev/null 2>&1; then
  brew install poppler >/dev/null 2>&1 || true
elif command -v apt-get >/dev/null 2>&1; then
  sudo apt-get install -y poppler-utils >/dev/null 2>&1 || true
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y poppler-utils >/dev/null 2>&1 || true
fi

if command -v pdftotext >/dev/null 2>&1; then
  run_pdftotext
  exit 0
fi

# 3. Fallback: pure-Python extraction via pypdf (layout NOT preserved).
echo "poppler unavailable; falling back to pypdf (layout not preserved)." >&2
if ! python3 -c "import pypdf" >/dev/null 2>&1; then
  python3 -m pip install -q pypdf >/dev/null 2>&1 || {
    echo "Could not install pypdf. Install poppler-utils (preferred) or pypdf manually." >&2
    exit 1
  }
fi

python3 - "$INPUT" "$OUTPUT" <<'PY'
import sys
from pypdf import PdfReader
inp, outp = sys.argv[1], sys.argv[2]
reader = PdfReader(inp)
with open(outp, "w") as fh:
    for page in reader.pages:
        fh.write((page.extract_text() or "") + "\n")
print(f"Extracted {len(reader.pages)} pages to {outp} (pypdf fallback — no layout)")
PY
