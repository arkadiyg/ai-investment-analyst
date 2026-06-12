#!/bin/bash
# Extract text from a PPM PDF for analysis.
# Usage: extract_pdf.sh <input.pdf> <output.txt>
# Layout-preserved text is what the rubric expects to walk.

set -e

if [ $# -lt 2 ]; then
  echo "Usage: $0 <input.pdf> <output.txt>"
  exit 1
fi

INPUT="$1"
OUTPUT="$2"

if ! command -v pdftotext >/dev/null 2>&1; then
  echo "pdftotext not found. Install poppler-utils." >&2
  exit 1
fi

pdftotext -layout "$INPUT" "$OUTPUT"
echo "Extracted $(wc -l < "$OUTPUT") lines to $OUTPUT"
