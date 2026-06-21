# Using the Bundled Build Scripts

The `scripts/` directory contains three working Node templates that produce Word documents matching the family-office house style:

- `build_cio_memo.js` — CIO Risk Memo
- `build_questionnaire.js` — Sponsor Diligence Questionnaire
- `build_plain_memo.js` — Plain-English Summary

> **Word is optional.** The default deliverables are Markdown (`.md`), written directly. Run these build scripts only when the user explicitly asks for a Word (`.docx`) copy. The templates are kept in place either way.

They are intentionally redacted/edited as templates: the *layout* is generic, but the *content* references one specific fund (Allied American Land Fund) as a worked example. To use them on a new fund:

## Setup

```bash
mkdir -p /tmp/ppm-build && cd /tmp/ppm-build
cp <skill_path>/scripts/build_cio_memo.js .
cp <skill_path>/scripts/build_questionnaire.js .
cp <skill_path>/scripts/build_plain_memo.js .
npm install docx
```

## Editing each template

In each script, the `children = [...]` array near the top is the document content. Replace:

1. **Header lines** — sponsor name, date, "Re:" line.
2. **Section 1 (Summary)** — vehicle, sponsor, strategy, headline economics.
3. **Section findings** — replace each bullet with the specific finding for the fund being reviewed. Keep the bucketed structure (Documentation / Governance / Liquidity / Strategy / Sponsor / Tax) — it is the rubric.
4. **Bottom of file** — the line `const out = "..."` at the bottom of `Packer.toBuffer().then()`. Change it to the user's investing folder for *this* fund.

## Style choices baked in (do not change)

- US Letter page size (`12240 x 15840` DXA) with 1-inch margins.
- Calibri 11pt body, headings in navy `1F3864` / blue `2E75B6`.
- Bullets via `LevelFormat.BULLET` numbering reference (never unicode `•`).
- Footer with `Page X of Y`; right-aligned italic confidential header.
- `WidthType.DXA` everywhere — never `PERCENTAGE` (Google Docs breaks).

## Validation

After running the script, validate the output parses cleanly:

```bash
pandoc "<output>.docx" -o /tmp/check.md && head -40 /tmp/check.md
```

If pandoc errors, the .docx is malformed. The most common cause is a `TextRun` accidentally constructed with an array instead of a string — check the children of any `Paragraph` that uses `RichBody([...])`.

## Output paths

Always save the three deliverables in the same folder as the source PPM, alongside it. Do not save them to a temporary outputs folder — the user must be able to open them from their cloud-synced filesystem. After saving, return `computer://` links in chat.
