---
name: ppm-risk-review
description: "Family-office-grade due diligence on a Private Placement Memorandum (PPM) or other private-fund offering document. Trigger this skill any time the user references a PPM, OM (offering memorandum), private placement, Reg D 506(b)/506(c), Form D, subscription agreement, LPA, side letter, family office investment memo, CIO memo, sponsor diligence, or asks 'what risks should I surface' about a private investment, even if they do not explicitly ask for a PPM review. Also trigger when the user points at a PDF in a folder named PPM/PPMs/Offerings/Funds/Investments and asks to review or summarize. Produces three deliverables in the user's selected investing folder, each saved in BOTH Word (.docx) and Markdown (.md) format: (1) a CIO-grade risk memo, (2) a sponsor diligence questionnaire, and (3) a plain-English summary for non-specialist family members. Do NOT use this skill for public-market equity/credit research, mortgage documents, residential real-estate purchase contracts, or term-sheet drafting from scratch."
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
3. **Run the rubric.** Walk the document against the rubric in `references/rubric.md` and capture findings against each bucket. Always look for what is **missing** as well as what is present — missing fee tables, missing track record, empty exhibits, and missing GP commitment are the highest-signal risks.
4. **External diligence.** Use SEC EDGAR (search by sponsor entity name → look for Form D / D-A) to reconcile the marketed raise to actual capital raised. Use a web search to check for the sponsor's other businesses, regulatory actions, and parallel funds. Note any meaningful gap between marketing and reality.
5. **Draft the three deliverables.** Use the Node scripts in `scripts/` as starting points; they encode the layout, fonts, and bullet-numbering that work reliably across Word and Google Docs.
6. **Produce a Markdown copy of each deliverable.** After each `.docx` is built, convert it to a sibling `.md` with the bundled `scripts/docx2md.sh` (`bash scripts/docx2md.sh "<file>.docx" "<file>.md"`). The Word file is the source of truth; the Markdown is generated from it so the two never drift. This both creates the Markdown deliverable and validates that the `.docx` parses cleanly. The script wraps `pandoc --wrap=none` (which keeps paragraphs and table cells on one line) and additionally grafts pandoc's own heading styles into a throwaway copy of the `.docx` before converting — without that step, the Node `docx` library's heading styles are not recognized by pandoc and every section title comes through as plain text. The real `.docx` is left untouched. (If you ever convert by hand, plain `pandoc "<file>.docx" --wrap=none -o "<file>.md"` works but loses the `#`/`##` heading markers.)
7. **Save outputs to the user's investing folder.** Use the file names below — both the `.docx` and the `.md` for each deliverable. Do NOT save to the temporary outputs folder only — the user must be able to open these from their cloud-synced folder.
8. **Update the pipeline summary.** Append this review to `ppm-pipeline-summary.md` (see "Updating the pipeline summary" below). Do this on every completed review so the running log stays current.
9. **Reply with `computer://` links and a one-paragraph summary** of the headline risks and the recommendation, then stop. Do not explain the documents at length in chat — the documents are the deliverable.

## Output file names

Always use this exact pattern (replace `[Fund Name]` with the fund's legal name). Each deliverable is saved twice — once as Word, once as Markdown with the same base name:

- `[Fund Name] - CIO Risk Memo.docx` and `[Fund Name] - CIO Risk Memo.md`
- `[Fund Name] - Sponsor Diligence Questionnaire.docx` and `[Fund Name] - Sponsor Diligence Questionnaire.md`
- `[Fund Name] - Plain-English Summary.docx` and `[Fund Name] - Plain-English Summary.md`

Save them in the same folder the user pointed at (so they live next to the PPM).

## Rubric, in one paragraph

The full rubric lives in `references/rubric.md`. The short version: walk the document for **(1)** documentation deficiencies (missing fees, missing exhibits, unverified financials, loose use of proceeds), **(2)** governance (voting, removal, drag/tag, indemnification, counsel conflicts, side letters, preferred-equity subordination), **(3)** liquidity (lock-ups, redemption gates, valuation mechanics, distribution discretion, pref-only economics), **(4)** strategy/asset-class fit, **(5)** sponsor and track record (registration status, audited prior funds, GP commitment, parallel funds, marketing channel), and **(6)** tax (phantom income, K-1 timing, UBTI/ECI, REIT election rights). Then reconcile the marketed raise to SEC Form D actuals.

## Drafting style

For the **CIO memo**: terse, bucketed, with a recommendation up front. Lead with what is missing from the document — that is usually more material than what it says. Keep it under ~10 pages. Family-office CIOs do not want a recap; they want risks they can act on.

For the **sponsor questionnaire**: written as a polite letter from the family office to the Manager's IR contact. Numbered questions, grouped by topic, no editorializing. The questionnaire's job is to extract information, not to argue. Aim for 25–35 well-targeted questions.

For the **plain-English summary**: short paragraphs, no jargon, with a glossary at the end. Frame the rich-text concepts using everyday analogies (e.g., "a 'preferred return' is the minimum rent the fund owes you before the manager takes a cut"). The audience is an intelligent layperson — usually a family member with basic business background but no private-funds experience.

## Tools the skill uses

- `pdftotext -layout <pdf> <txt>` — text extraction (poppler-utils, already installed in the Cowork sandbox)
- `node` + `docx` — Word document generation. Install with `npm install docx` in the working directory, then run the build scripts. Do NOT install globally.
- `scripts/docx2md.sh <file>.docx <file>.md` — Markdown generation. Wraps `pandoc --wrap=none` and fixes pandoc's failure to recognize the Node `docx` library's heading styles (it swaps pandoc's own reference `styles.xml` into a throwaway copy of the `.docx` so `#`/`##` headings render). Requires `pandoc` (already installed in the Cowork sandbox). Run once per deliverable after the `.docx` is built.
- SEC EDGAR full-text search via available MCP tools, or `https://efts.sec.gov/LATEST/search-index?q=` if no MCP is connected. The Form D filings are public and free.
- Web search for sponsor reputation, parallel funds, regulatory actions.

## How to use the bundled scripts

`scripts/build_cio_memo.js`, `scripts/build_questionnaire.js`, and `scripts/build_plain_memo.js` are working Node templates. To use them on a new fund:

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
- **Do not use bullet lists in the plain-English summary's narrative sections.** Family-member readers do better with short paragraphs; reserve bullets for the numbered concern list and the glossary.
- **Do not save final outputs only to the temporary outputs folder.** They must live in the user's selected investing folder so they are visible and cloud-synced.

## Example invocation

User: *"Review the PPM for [Fund Name] in /Investing/PPMs/[Fund Name] and tell me what risks I should surface to the CIO."*

Claude (this skill triggered): extracts the PDF, walks the rubric, runs SEC EDGAR + web sponsor checks, and produces:

- `/Investing/PPMs/[Fund Name]/[Fund Name] - CIO Risk Memo.docx` (+ `.md`)
- `/Investing/PPMs/[Fund Name]/[Fund Name] - Sponsor Diligence Questionnaire.docx` (+ `.md`)
- `/Investing/PPMs/[Fund Name]/[Fund Name] - Plain-English Summary.docx` (+ `.md`)

Then replies with `computer://` links and a one-paragraph headline of the most material risks and the recommendation.
