---
name: ppm-risk-review
description: "Family-office-grade due diligence on a Private Placement Memorandum (PPM) or other private-fund offering document. Trigger this skill any time the user references a PPM, OM (offering memorandum), private placement, Reg D 506(b)/506(c), Form D, subscription agreement, LPA, side letter, family office investment memo, CIO memo, sponsor diligence, or asks 'what risks should I surface' about a private investment, even if they do not explicitly ask for a PPM review. Also trigger when the user points at a PDF in a folder named PPM/PPMs/Offerings/Funds/Investments and asks to review or summarize. When the deal folder also contains a link to a YouTube video (e.g. a sponsor webinar or an LP 'deal review'), the skill fetches and cleans the transcript and folds it into the memos as corroborating evidence. Produces three deliverables in the user's selected investing folder, each saved as Markdown (.md) by default: (1) a CIO-grade risk memo, (2) a sponsor diligence questionnaire, and (3) a plain-English summary for non-specialist family members. A Word (.docx) copy of each is produced ONLY when the user explicitly asks for Word/.docx. Do NOT use this skill for public-market equity/credit research, mortgage documents, residential real-estate purchase contracts, or term-sheet drafting from scratch."
license: Internal use only
---

# PPM Risk Review

Turn a private-fund offering document (PPM/OM and any related Form D, marketing deck, subscription agreement) into three sendable deliverables for a family office:

1. **CIO Risk Memo** — bucketed risks and a recommendation
2. **Sponsor Diligence Questionnaire** — written list of items to put back to the sponsor
3. **Plain-English Summary** — for family members who do not work in finance

## When to use

Trigger this skill for any of these prompts (and similar):

- "Analyze the PPM in this folder"
- "What risks would you surface to the CIO on this fund?"
- "Review this private placement and tell me what to ask the sponsor"
- "I'm thinking of investing in [Fund Name] — what should I worry about?"
- "Summarize this fund document for my [parent/spouse/family] who is not a professional investor"

If the user only asks for *one* of the three deliverables, produce just that one. If the user says "do the full review," produce all three.

## Why this skill exists

Family offices see a steady stream of private-fund offering documents. Reading them well takes a long time, and the same risk patterns recur (fee opacity, illiquidity, weak governance, unverified track records, conflict-laden sponsor structures, unrealistic capital plans). This skill encodes a repeatable workflow so each new PPM is reviewed against a consistent rubric and the output reaches the CIO and family decision-makers quickly.

## High-level workflow

1. **Locate the document.** Look in the folder the user pointed at, or in any subfolder named `PPM`, `PPMs`, `Offerings`, `Funds`, or `Investments` under the user's selected investing folder. If multiple PDFs exist, ask which one.
2. **Extract text.** Use `pdftotext -layout` (poppler) to dump the PDF. PPMs are 40–200 pages of dense text and reading the PDF visually is too slow; the layout-preserved text is sufficient for nearly all analysis.
3. **Ingest any video deal-review transcript.** Scan the deal folder (and its immediate subfolders) for YouTube links — `youtube.com/watch`, `youtu.be/`, `youtube.com/live/` — in any text-like file (`.txt`, `.md`, `.url`, `.webloc`, loose notes); a URL in the user's prompt counts too. **Process every distinct video** (de-duplicate by the 11-character video id; do NOT ask which one). For each, run `bash scripts/fetch_transcript.sh "<url>" "<Source> - Transcript.md" "[Fund legal name]"` to write the raw `Transcript.md` in the deal folder, then author an analytical `<Source> - Summary.md`. Treat the transcript as **corroborating evidence**, not an offering document — see `references/video_transcript_guide.md`. If a video has no captions the script exits 2; skip that video and continue with document-only analysis. If no link is present, skip this step.
4. **Run the rubric.** Walk the document against the rubric in `references/rubric.md` and capture findings against each bucket, reading each through the rubric's three **analytical lenses** — fund counsel, prospective investor, and lender-to-the-fund (the credit lens applies to every fund, not just notes). Always look for what is **missing** as well as what is present — missing fee tables, missing track record, empty exhibits, and missing GP commitment are the highest-signal risks. Where a transcript exists, use it to corroborate findings, capture sponsor on-the-record admissions, and surface new questions — never to override the documents.
5. **External diligence.** Use SEC EDGAR (search by sponsor entity name → look for Form D / D-A) to reconcile the marketed raise to actual capital raised. Use a web search to check for the sponsor's other businesses, regulatory actions, and parallel funds. Note any meaningful gap between marketing and reality.
6. **Benchmark the headline terms against the market.** Calibrate each headline term (fee, carry, GP commitment, leverage, liquidity/gates, pref, valuation frequency, and — for credit funds — loan term and default/loss rate) against a current, fund-subtype-and-size-specific industry benchmark, using `references/benchmarking_sources.md` (ILPA 3.0, PitchBook, Preqin, McKinsey, StepStone — search for the latest editions). Pull "this fund" figures from the §0.5 reconciliation matrix. **Never estimate a benchmark** — if no subtype-specific benchmark exists, state the one used, why, and how it differs, or say "no usable benchmark." This produces the CIO memo's Benchmarking table (rubric §10). Benchmarking calibrates the findings; it does not replace the rubric's judgment.
7. **Draft the three deliverables as Markdown.** Markdown (`.md`) is the default and only required output. Write each deliverable directly as a `.md` file in the user's investing folder, following the drafting style below. The CIO memo includes a **Benchmarking** section (the §10 table) and an **Uncertainty Map** appendix (the §11 grid: Area | Description | Document & Location | Suggested Follow-Up). The Node scripts in `scripts/` remain available as Word templates — they encode the layout, fonts, and bullet-numbering — but are used only when the user asks for a Word copy (see step 8).
   When a transcript exists, fold it into the deliverables: add an **"Independent corroboration (video deal review)"** section to the CIO memo mapping the transcript to the top findings (and re-tally any FATAL/NEGOTIABLE/ASK/STRENGTH counts it changes); add any new ASK items it surfaced to the questionnaire; refresh the plain-English summary only if the video materially changes the lay picture. The per-video `Summary.md` is mirrored to the vault; the bulky `Transcript.md` stays in the deal folder only.
8. **Word (.docx) is optional — produce it only if the user asks.** If (and only if) the user explicitly requests a Word/`.docx` version, build it with the Node scripts in `scripts/`, then regenerate the sibling `.md` from the freshly built `.docx` with `bash scripts/docx2md.sh "<file>.docx" "<file>.md"` so the Word file is the source of truth and the two never drift. The `docx2md.sh` step also validates that the `.docx` parses cleanly. The script wraps `pandoc --wrap=none` (which keeps paragraphs and table cells on one line) and additionally grafts pandoc's own heading styles into a throwaway copy of the `.docx` before converting — without that step, the Node `docx` library's heading styles are not recognized by pandoc and every section title comes through as plain text. The real `.docx` is left untouched. (If you ever convert by hand, plain `pandoc "<file>.docx" --wrap=none -o "<file>.md"` works but loses the `#`/`##` heading markers.) If the user did NOT ask for Word, skip this step entirely.

   **Regenerating Word from an edited Markdown (the reverse direction).** If a `.docx` *already exists* but the `.md` has since been edited directly (e.g., you folded a transcript into the memos, so the `.md` is now the source of truth), do NOT rebuild from the Node script — regenerate the `.docx` from the updated `.md` with pandoc, using the existing `.docx` as the style template: `pandoc "<file>.md" --reference-doc="<file>.docx" -o "/tmp/regen.docx" && mv "/tmp/regen.docx" "<file>.docx"`. The reference-doc carries the house style forward (Calibri, US Letter, 1-inch margins, the `CONFIDENTIAL — FAMILY OFFICE INTERNAL` header, and the `Page X of Y` footer) while taking all content from the `.md`. Write to a temp file and `mv` over the original (pandoc reads the reference fully first, but the temp keeps it clean). Validate with a quick `pandoc "<file>.docx" -t markdown >/dev/null` round-trip before replacing. See `references/templates_guide.md` for details.
9. **Save outputs to the user's investing folder.** Use the file names below — the `.md` for each deliverable always, plus the `.docx` only when Word was requested, plus any `Transcript.md`/`Summary.md`. Do NOT save to the temporary outputs folder only — the user must be able to open these from their cloud-synced folder.
10. **Update the pipeline summary.** Append this review to `ppm-pipeline-summary.md` (see "Updating the pipeline summary" below). Do this on every completed review so the running log stays current. Note in the row when a video transcript was ingested and what it corroborated.
11. **Reply with `computer://` links and a one-paragraph summary** of the headline risks and the recommendation, then stop. Do not explain the documents at length in chat — the documents are the deliverable.

## Output file names

Always use this exact pattern (replace `[Fund Name]` with the fund's legal name). The `.md` is always produced; the `.docx` is produced only when the user asked for Word. When both exist they share the same base name:

- `[Fund Name] - CIO Risk Memo.md` (and `.docx` only if Word was requested)
- `[Fund Name] - Sponsor Diligence Questionnaire.md` (and `.docx` only if Word was requested)
- `[Fund Name] - Plain-English Summary.md` (and `.docx` only if Word was requested)

Save them in the same folder the user pointed at (so they live next to the PPM).

When a video transcript was ingested, also save (named after the source, not the fund — one pair per video):

- `[Source] - [Title] ([Date]) - Transcript.md` — raw cleaned transcript, deal folder only (do not mirror to the vault)
- `[Source] - [Title] ([Date]) - Summary.md` — analytical summary, mirrored to the vault

e.g. `Sunrise Capital - PassivePockets Deal Review (2026-03-19) - Transcript.md`.

## Rubric, in one paragraph

The full rubric lives in `references/rubric.md`. The short version: read every bucket through three lenses (fund counsel, prospective investor, lender-to-the-fund), then walk the document for **(1)** documentation deficiencies (missing fees, missing exhibits, unverified financials, loose use of proceeds), **(2)** governance (voting, removal, drag/tag, indemnification, counsel conflicts, side letters, preferred-equity subordination), **(3)** liquidity (lock-ups, redemption gates, valuation mechanics, distribution discretion, pref-only economics, redemption-run/asset-liability mismatch), **(4)** strategy/asset-class fit, **(5)** sponsor and track record (registration status, audited prior funds, GP commitment, parallel funds, marketing channel), and **(6)** tax (phantom income, K-1 timing, UBTI/ECI, REIT election rights). Then reconcile the marketed raise to SEC Form D actuals, and **benchmark the headline terms against current market** (rubric §10; `references/benchmarking_sources.md`).

## Drafting style

For the **CIO memo**: terse, bucketed, with a recommendation up front. Lead with what is missing from the document — that is usually more material than what it says. Keep it under ~10 pages. Family-office CIOs do not want a recap; they want risks they can act on. Include a **Benchmarking** section (the §10 table calibrating headline terms against cited market sources) and close with an **Uncertainty Map** appendix (the §11 grid: Area | Description | Document & Location | Suggested Follow-Up). Name positive features explicitly too — `[STRENGTH]` tags and below-market, investor-friendly benchmark rows are part of an honest memo, not just the risks.

**Interpretation discipline (all deliverables).** Do not present possibilities, conditional clauses, or discretionary provisions as certainties. If a provision is vague, optional, or subject to the Manager's discretion, say so and use cautious language ("may," "could," "appears to," "subject to Manager discretion") — then push it to the Uncertainty Map and the questionnaire. Flag any assumption forced by missing or unclear data, and when a conclusion rests on limited information, say so plainly. Cite the document and section for every specific provision (e.g., "LPA §3.2," "PPM p. 17").

For the **sponsor questionnaire**: written as a polite letter from the family office to the Manager's IR contact. Numbered questions, grouped by topic, no editorializing. The questionnaire's job is to extract information, not to argue. Aim for 25–35 well-targeted questions.

For the **plain-English summary**: short paragraphs, no jargon, with a glossary at the end. Frame the rich-text concepts using everyday analogies (e.g., "a 'preferred return' is the minimum rent the fund owes you before the manager takes a cut"). The audience is an intelligent layperson — usually a family member with basic business background but no private-funds experience.

## Tools the skill uses

- `pdftotext -layout <pdf> <txt>` — text extraction (poppler-utils, already installed in the Cowork sandbox)
- `scripts/fetch_transcript.sh <youtube_url> <output.md> [deal_name]` — video transcript fetch + clean. Wraps `yt-dlp` (auto-installs it via `pip` if missing), pulls English captions only (no media download), de-duplicates auto-caption rolling text, chunks at ~30s with `[hh:mm:ss]` timestamps, and writes a `Transcript.md` with a YAML header. Exit 2 = no captions (skip, continue document-only). See `references/video_transcript_guide.md`.
- `node` + `docx` — Word document generation. Install with `npm install docx` in the working directory, then run the build scripts. Do NOT install globally.
- `scripts/docx2md.sh <file>.docx <file>.md` — Markdown generation. Wraps `pandoc --wrap=none` and fixes pandoc's failure to recognize the Node `docx` library's heading styles (it swaps pandoc's own reference `styles.xml` into a throwaway copy of the `.docx` so `#`/`##` headings render). Requires `pandoc` (already installed in the Cowork sandbox). Run once per deliverable after the `.docx` is built.
- SEC EDGAR full-text search via available MCP tools, or `https://efts.sec.gov/LATEST/search-index?q=` if no MCP is connected. The Form D filings are public and free.
- Web search for sponsor reputation, parallel funds, regulatory actions — and for current industry **benchmarks** (ILPA Principles 3.0, PitchBook, Preqin, McKinsey Global Private Markets, StepStone SPI; see `references/benchmarking_sources.md`).

## How to use the bundled scripts

`scripts/build_cio_memo.js`, `scripts/build_questionnaire.js`, and `scripts/build_plain_memo.js` are working Node templates for the Word (`.docx`) output. They are used **only when the user asks for a Word copy** — the default Markdown deliverables are written directly, not built from these scripts. Keep the templates in place; they are the canonical Word layout. To use them on a new fund (Word requested):

1. Copy the script into the working directory.
2. Edit the `children` array at the top with the new fund's facts (sponsor, vehicle, strategy, headline economics) and the bucketed findings.
3. Edit the output path at the bottom of the script (the line that calls `fs.writeFileSync`) to point at the user's investing folder for *this* fund.
4. Run with `node build_cio_memo.js` (etc.).
5. Generate the Markdown sibling and validate in one step: `bash scripts/docx2md.sh "<file>.docx" "<file>.md"`. Write the `.md` next to the `.docx` (same base name) in the user's investing folder — this is a deliverable, not a throwaway. A clean conversion also confirms the `.docx` parses. (The build scripts must create section titles with real heading styles — `new Paragraph({ heading: HeadingLevel.HEADING_1, ... })` — not bold body text, or the Markdown will have no `#` headings.)

The scripts use `Calibri 11pt`, US Letter page size, 1-inch margins, navy/blue heading color, and a confidential-stamp header — these settings have been tested across Word, Word for Mac, and Google Docs.

## Updating the pipeline summary

After every completed review, update the running pipeline log so the family office has one place to see every offering screened and why each was declined or advanced. The file lives at the root of the user's Obsidian investing vault as `ppm-pipeline-summary.md` (if it does not exist yet, create it from the structure below).

On each review:

1. **Append a row** to the "At a Glance" table with the next sequential number: `# | Offering (legal name) | Date (YYYY-MM-DD) | Type | Investment Thesis (one line) | Decision (✅ / ⚠️ / ❌ Declined) | Primary Kill Shot (the 1–3 findings that drove the call, semicolon-separated)`. Make the **Offering** cell a markdown link to that fund's folder — a `file://` URL with the absolute, URL-encoded host path (spaces → `%20`; encode trailing spaces in folder names too) — so the row links straight to the deal's documents.
2. **Bump the header line** — the date stamp and both counts (e.g., `*Last updated: 2026-06-12 · 20 offerings reviewed · 20 declined*`).
3. **Refresh the Pattern Analysis tallies** — add the new offering's number to every structural-red-flag and sponsor-integrity line it matches (no Form D, captive affiliate, marketing-contradicts-PPM, GP-set NAV, undated/template, misattributed track record, etc.), and increment the Asset Class Distribution count for its asset class.
4. **Update the Verdict** line (the "N for N declined" count and any shift in the dominant failure mode).

Keep the entry terse — it is an index row, not a summary of the memo. The per-offering detail lives in the three deliverables and in project memory. Match the existing wording conventions so the table stays scannable.

## Anti-patterns to avoid

- **Do not paraphrase the PPM into a long executive summary.** The CIO has already seen the PPM; the value-add is judgment about risks, not a recap. If you find yourself writing "The fund seeks to invest in…", delete that paragraph.
- **Do not soft-pedal disclosure gaps.** Missing fees, empty exhibits, and unverified track records are the most material findings in a PPM review and should appear at the top of the memo, not buried.
- **Do not invent fees, IRR figures, or sponsor history.** If the PPM does not state a fee, write "the PPM does not state the fee." If the prior-fund track record is not audited, say so. The questionnaire is the place to extract missing facts, not the memo.
- **Do not estimate a benchmark.** The Benchmarking table is only as good as its sources. If a current, subtype-specific benchmark cannot be found, state the closest one used, why, and how it differs — or write "no usable benchmark." Never type a market figure you cannot cite, and always include the source and its vintage.
- **Do not present discretionary or conditional clauses as certainties.** "The Manager may waive the gate" is not "investors can redeem." Use cautious language for anything optional or subject to discretion, and route the ambiguity to the Uncertainty Map and the questionnaire rather than resolving it in the sponsor's favor.
- **Do not use bullet lists in the plain-English summary's narrative sections.** Family-member readers do better with short paragraphs; reserve bullets for the numbered concern list and the glossary.
- **Do not save final outputs only to the temporary outputs folder.** They must live in the user's selected investing folder so they are visible and cloud-synced.

## Example invocation

User: *"Review the PPM for [Fund Name] in /Investing/PPMs/[Fund Name] and tell me what risks I should surface to the CIO."*

Claude (this skill triggered): extracts the PDF, ingests any YouTube deal-review transcript found in the folder, walks the rubric through the three lenses, runs SEC EDGAR + web sponsor checks, benchmarks the headline terms against current market sources, and produces (Markdown by default; the CIO memo carries a Benchmarking table and an Uncertainty Map appendix):

- `/Investing/PPMs/[Fund Name]/[Fund Name] - CIO Risk Memo.md`
- `/Investing/PPMs/[Fund Name]/[Fund Name] - Sponsor Diligence Questionnaire.md`
- `/Investing/PPMs/[Fund Name]/[Fund Name] - Plain-English Summary.md`

Then replies with `computer://` links and a one-paragraph headline of the most material risks and the recommendation. If a YouTube link was in the folder, a `[Source] - … - Transcript.md` and `[Source] - … - Summary.md` are produced too, and the CIO memo carries an "Independent corroboration (video deal review)" section. If the user had asked for Word (e.g. *"…and give me Word versions"*), a `.docx` sibling of each deliverable is produced alongside the `.md`.
