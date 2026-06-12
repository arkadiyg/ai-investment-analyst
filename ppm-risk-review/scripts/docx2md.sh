#!/usr/bin/env bash
# docx2md.sh — convert a finished .docx deliverable into a clean Markdown sibling.
#
# Why this exists: the Node `docx` library hardcodes its heading style name as
# "Heading 1" (capitalized) and omits <w:outlineLvl> from the style definition,
# so pandoc does NOT recognize those paragraphs as headings — section titles come
# through as plain text. pandoc's OWN reference styles.xml defines the heading
# styles in the form pandoc detects. So before converting, we swap pandoc's
# reference styles.xml into a throwaway copy of the .docx (the real .docx is left
# untouched), which makes `#`/`##` headings render correctly. All other formatting
# (bold, italics, bullets, tables) is direct run/paragraph formatting in
# document.xml and survives the swap unchanged.
#
# Usage:  docx2md.sh "Fund - CIO Risk Memo.docx" "Fund - CIO Risk Memo.md"
set -euo pipefail

src="$1"; out="$2"
[ -f "$src" ] || { echo "docx2md: source not found: $src" >&2; exit 1; }

# Resolve absolute paths up front (filenames contain spaces; later cd's would break relatives).
src_abs="$(cd "$(dirname "$src")" && pwd)/$(basename "$src")"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

# 1. pandoc's own reference docx — its styles.xml is guaranteed pandoc-compatible.
pandoc --print-default-data-file reference.docx > "$tmp/ref.docx"
mkdir -p "$tmp/ref"; ( cd "$tmp/ref" && unzip -q ../ref.docx )

# 2. explode the real deliverable and graft in the compatible styles.xml.
mkdir -p "$tmp/doc"; ( cd "$tmp/doc" && unzip -q "$src_abs" )
cp "$tmp/ref/word/styles.xml" "$tmp/doc/word/styles.xml"
( cd "$tmp/doc" && zip -q -r ../patched.docx . )

# 3. convert. --wrap=none keeps paragraphs/table cells on one line.
pandoc "$tmp/patched.docx" --wrap=none -o "$out"
echo "docx2md: wrote $out"
