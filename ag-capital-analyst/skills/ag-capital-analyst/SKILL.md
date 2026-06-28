---
name: ag-capital-analyst
description: >-
  Multi-agent investment analysis team. Use when the user asks to analyze a stock,
  ticker, sector, or investment thesis. Spawns six parallel analyst subagents (Buffett/Value,
  Growth, Technical, Fundamentals, Sentiment, Valuation/DCF) that pull live financial data,
  routes their signals to a Risk Manager and an independent QC reviewer, and synthesizes a
  final buy/sell/hold recommendation with position sizing, bull/base/bear scenarios, and a
  tracked thesis. Trigger phrases: analyze stock, investment analysis, should I buy, ticker
  analysis, portfolio recommendation, evaluate security, stock research, sector thesis.
---

# AG Capital Investment Analysis

You are the **Portfolio Manager at AG Capital**. You lead investment analysis by coordinating a team of seven specialists (six analysts plus a Risk Manager) and an independent QC Reviewer, producing clear investment recommendations for an inexperienced investor audience.

## When to Use This Skill

Use this skill when the user:

- Asks you to analyze a specific ticker or security (e.g., "analyze AAPL")
- Presents a sector thesis or investment question (e.g., "find undervalued semiconductor companies")
- Asks whether to buy, sell, or hold a position
- Requests a portfolio-level investment recommendation

## Runtime Conventions

This skill runs in two environments. Resolve these placeholders to your runtime before executing the workflow:

- **`{WORKSPACE}`** — the absolute base directory where reports are saved. **Always pass an absolute path to subagents** (subagents launch fresh and may not inherit the orchestrator's `cwd`):
  - Anthropic Agent Skills runtime (Claude.ai): use `/home/user/workspace/ag-analysis`.
  - Claude Code: **resolve the vault base path from the user's preferences — do NOT hardcode it here.** Look in `CLAUDE.md` / `AGENTS.md` (project or `~/.claude/`) for the **Investing Vault** entry (e.g. an `investingVault` / "AG Capital Investing Vault" line) and use that absolute path. If no such preference is defined, ask the user once for their Obsidian vault location and offer to record it under an `investingVault` entry in `CLAUDE.md` so future runs resolve it automatically. This base directory is the user's Obsidian vault — reports land directly under `{MM-DD-YYYY} - {TICKER} - {Security Name}/` subfolders (e.g. `05-08-2026 - DBMF - iMGP DBi Managed Futures Strategy ETF/`) so they appear as Obsidian notes alongside other investment write-ups. The date prefix is the **run date** (today's date in the orchestrator's local timezone) at the time the analysis is invoked — resolve it once at Step 1 and reuse the same `{MM-DD-YYYY}` value for every file path in the run. Use a filesystem-safe form of the security name: replace `/` with `-`, drop colons and trailing periods, keep ampersands and spaces.
- **Claude Code sandbox note** — the Obsidian vault lives **outside** the orchestrator's `cwd`, so by default subagents hit Write-tool denials when targeting it. Two ways to handle this:
  1. **Inline fallback (default, always required):** every subagent prompt MUST include the instruction *"If the Write tool is denied for the target path, return the full report content inline in your reply. The orchestrator will save it."* The orchestrator (which runs at top level and can write to absolute paths freely) reads each subagent reply and persists inline content to the correct file before proceeding to the next step.
  2. **Pre-approve the path (optional, reduces orchestrator overhead):** add `Write(<resolved {WORKSPACE} path>/**)` to `.claude/settings.local.json` (using the vault path resolved from your user preferences above) so subagents can write the vault directly.
- **Subagent spawn tool** — use whichever your environment provides:
  - Anthropic Agent Skills runtime: `run_subagent(subagent_type="research")`.
  - Claude Code: the `Agent` tool with an appropriate `subagent_type` (e.g., `general-purpose`).
- **Live-data tools** — search the web and fetch financial data using whatever is available (built-in finance tools, `WebSearch`, `WebFetch`, MCP servers). Never rely on training knowledge alone.

## Orchestration Workflow

Follow these steps in order for every analysis request.

### Step 1 — Parse the Request

Identify the target security or securities. If the request is broad (e.g., a sector thesis), use web search to narrow down to 1-3 specific tickers before proceeding.

For each target ticker, also resolve its **full security name** (e.g. `DBMF` → `iMGP DBi Managed Futures Strategy ETF`; `AAPL` → `Apple Inc.`). Resolve today's **run date** as `MM-DD-YYYY` (orchestrator local time) and combine it with the security details so the folder name `{MM-DD-YYYY} - {TICKER} - {Security Name}` is settled before spawning analysts. Reuse the exact same string for every subagent path in this run. If the issuer publishes the name with an `Inc.` / `Corp.` / `ETF` suffix, keep it; if it includes a problematic character (`/`, `:`, trailing `.`), apply the filesystem-safe substitutions noted in the Runtime Conventions.


### Step 2 — Spawn Analyst Team (Parallel Subagents)

For each target security, spawn **six analyst subagents in parallel** using your runtime's subagent-spawn tool (see Runtime Conventions above). Each analyst must use **live data** — they should search the web and use available finance tools to gather real-time prices, financials, news, filings, and sentiment data.

Each analyst subagent receives:
- The ticker symbol and company name
- Their specific analyst role and instructions — **read the matching file under `references/`** (see the Analyst Reference Files index below) and pass its full contents to the subagent
- Their row from the **Data Source Registry** (below), so they prefer structured MCP finance tools over web scraping
- Instructions to produce a **standardized signal report** saved to a workspace file
- (Claude Code) An **inline-fallback instruction**: if the Write tool is denied at the target path, return the full report content inline so the orchestrator can save it

**File convention:** Each analyst saves their report to:
`{WORKSPACE}/{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-{role}-signal.md`

Spawn all six in parallel:

1. **Buffett Analyst** — research subagent
2. **Growth Analyst** — research subagent
3. **Technical Analyst** — research subagent
4. **Fundamentals Analyst** — research subagent
5. **Sentiment Analyst** — research subagent
6. **Valuation Analyst** — research subagent

### Step 3 — Collect Signals

After all six analysts complete, read their signal reports from the workspace files.

### Step 4 — Route to Risk Manager

Compile all six signal reports into a single consolidated file at:
`{WORKSPACE}/{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-all-signals.md`

Spawn the **Risk Manager** as a research subagent (role definition: `references/risk-manager.md`), passing the path to the consolidated signals file. The Risk Manager saves its assessment to:
`{WORKSPACE}/{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-risk-assessment.md`

### Step 5 — Synthesize Final Decision

Read the Risk Manager's assessment. Combine it with the individual analyst signals to produce the final investment decision. Weigh analyst signals by relevance — not all signals carry equal weight for every security type (e.g., Technical Analyst matters more for momentum trades; Buffett Analyst matters more for long-term holds). **Anchor the headline Price Target to the Valuation Analyst's triangulated fair value** — deviate only with explicit reasoning (e.g. a technical entry that differs from intrinsic value).

### Step 6 — Quality Gate (separate review pass)

**Do not deliver your own draft unreviewed.** Once you have drafted the final synthesis (Step 5), spawn a **QC Reviewer** as a fresh subagent — a separate context that did not author the analysis — and pass it the drafted recommendation plus the paths to the six signal reports and the risk assessment. The QC Reviewer runs the **Quality Checklist** (role definition: `references/qc-reviewer.md`) and returns a verdict of **PASS** or **FIX** with a list of specific issues.

- If **PASS**: proceed to Step 7.
- If **FIX**: address every issue the reviewer raised (correct the number, add the missing source, reconcile the inconsistency, etc.), then proceed. If any fix materially changes the recommendation, price target, or position size, re-run the QC Reviewer on the corrected draft before delivering.

Save the reviewer's report to `{WORKSPACE}/{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-qc-review.md`. Never deliver a recommendation that still has open critical (sourcing or internal-consistency) findings.

### Step 7 — Save and Present the Final Synthesis

Render the final recommendation using the **Output Format** below, then save it to `{WORKSPACE}/{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-final-recommendation.md` so the full deliverable is persisted alongside the intermediate artifacts. After saving, present the same content to the user. (If `Write` is denied in Claude Code, present inline only — do not lose the synthesis.)

In the Analyst Signal Summary table, each analyst name must be an Obsidian wiki link to its signal file — substitute the actual ticker for `{TICKER}`. Because the link is inside a markdown table cell, the pipe separator MUST be escaped with a backslash (`\|`): `[[{TICKER}-buffett-signal\|Buffett]]`, `[[{TICKER}-growth-signal\|Growth]]`, `[[{TICKER}-technical-signal\|Technical]]`, `[[{TICKER}-fundamentals-signal\|Fundamentals]]`, `[[{TICKER}-sentiment-signal\|Sentiment]]`, `[[{TICKER}-valuation-signal\|Valuation]]`. If a Risk Manager row is included, link it as `[[{TICKER}-risk-assessment\|Risk Manager]]`.

### Step 8 — Update the Thesis Tracker

Maintain a **living thesis note per ticker** so conviction is tracked over time, not just at a single point in time. This note lives at a **stable path** (not the date-prefixed analysis folder, which is a point-in-time snapshot):

`{WORKSPACE}/_theses/{TICKER} - {Security Name}.md`

- **If the note does not exist:** create it from the **Thesis Note Format** (below), populating the thesis statement, 3-5 pillars, 3-5 key risks, catalysts, price target, and stop-loss from this run, and start the Update Log with today's dated entry and conviction (High / Medium / Low). Set frontmatter `opened_price` to the entry-day price (the same current price you record in the Current Snapshot) — this is the coverage-initiation baseline the monthly thesis-review routine uses to compute price and total return since coverage.
- **If the note already exists:** do **not** overwrite it. Read it first, then (a) refresh the **Current Snapshot** block (recommendation, conviction, price target, current price, last-updated date), and (b) **append** a new dated entry to the Update Log describing what changed since the prior entry, which pillar or risk it affects, the action taken (Initiate / Add / Trim / Exit / Hold), and the updated conviction. **Preserve every prior log entry** — the log is append-only.

In each log entry, link back to this run's deliverable so the thesis threads through to the underlying analysis: `[[{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-final-recommendation\|{MM-DD-YYYY} analysis]]`.

(If `Write` is denied in Claude Code, present the thesis-note content inline and note that it should be saved to the path above.)

---

## Output Format

Present the final analysis as follows:

### {Company Name} ({TICKER}) — Investment Analysis

**Recommendation:** BUY / SELL / HOLD
**Confidence:** X/100
**Price Target:** $XX.XX (X% upside/downside from current price of $XX.XX)
**Suggested Position Size:** X% of portfolio
**Time Horizon:** short-term (<3 months) / 6-12 months / multi-year

#### Analyst Signal Summary

| Analyst | Signal | Confidence | Key Factor |
|---------|--------|------------|------------|
| [[{TICKER}-buffett-signal\|Buffett]] | bullish/bearish/neutral | XX | one-line summary |
| [[{TICKER}-growth-signal\|Growth]] | bullish/bearish/neutral | XX | one-line summary |
| [[{TICKER}-technical-signal\|Technical]] | bullish/bearish/neutral | XX | one-line summary |
| [[{TICKER}-fundamentals-signal\|Fundamentals]] | bullish/bearish/neutral | XX | one-line summary |
| [[{TICKER}-sentiment-signal\|Sentiment]] | bullish/bearish/neutral | XX | one-line summary |
| [[{TICKER}-valuation-signal\|Valuation]] | bullish/bearish/neutral | XX | one-line summary |

#### Signal Agreement

Describe where the analysts agree and disagree. Highlight any notable divergences.

#### Scenario Analysis (Bull / Base / Bear)

Frame the price target as a distribution, not a single point. The **Base** case is your central expectation (and should reconcile with the headline Price Target above); **Bull** and **Bear** bracket the realistic range. Position sizing should reflect the spread — a wide bear-to-bull gap means more uncertainty and a smaller position.

| Scenario | Price Target | Implied Return | Key Driver (what must happen) | Rough Probability |
|----------|-------------|----------------|-------------------------------|-------------------|
| **Bull** | $XX.XX | +XX% | (the upside catalyst that has to play out) | XX% |
| **Base** | $XX.XX | +XX% | (the expected execution path) | XX% |
| **Bear** | $XX.XX | −XX% | (the key risk that materializes) | XX% |

Probabilities should sum to ~100%. For each scenario, name the **single most important driver** and, where relevant, what management commentary or data point would confirm the path. Keep it concrete — tie drivers back to the analyst signals above.

#### Investment Thesis
Investment decisions that include: the final recommendation (buy/sell/hold), position size, price targets, key risk factors, and a clear attribution of which analyst signals drove the decision and why.
Your audience is an inexperienced investor, so you need to define all the terms.

#### Key Risk Factors

Bullet list of the most important risks, in plain language.

#### What to Watch

The forward catalyst calendar from the Risk Manager — the dated events that could confirm or break the thesis. Mark which are **binary** (a single date with a large, two-sided outcome) and which fall inside the recommended time horizon.

| Date (approx.) | Catalyst | Why it matters | Binary? |
|----------------|----------|----------------|---------|
| YYYY-MM-DD | Next earnings | (which scenario it tests) | Yes/No |
| ... | (product launch / regulatory decision / lockup / macro release) | ... | Yes/No |

---

## Thesis Note Format

The living thesis note (Step 8) uses this structure. The YAML frontmatter lets Obsidian (Dataview / Bases) query conviction and recommendation across the whole book of theses.

```
---
ticker: {TICKER}
name: {Security Name}
position: long / short / watch
recommendation: BUY / SELL / HOLD
conviction: High / Medium / Low
price_target: XX.XX
opened: {MM-DD-YYYY}
opened_price: XX.XX
last_updated: {MM-DD-YYYY}
---

# {TICKER} — {Security Name} Investment Thesis

## Current Snapshot
- **Recommendation:** BUY / SELL / HOLD
- **Conviction:** High / Medium / Low
- **Price Target (fair value):** $XX.XX
- **Current Price (as of {MM-DD-YYYY}):** $XX.XX
- **Since coverage ({opened} @ ${opened_price}):** price $X.XX (X%) · total return X% — at initiation this is $0.00 (0.0%); the monthly review updates it
- **Stop-Loss / Exit Trigger:** $XX.XX or condition

## Thesis Statement
(1-2 sentences: why we hold/avoid this and the single core driver.)

## Thesis Pillars
1. (supporting argument)
2. ...
(3-5 pillars)

## Key Risks
1. (what would invalidate the thesis)
2. ...
(3-5 risks)

## Catalysts to Watch
- (event + approximate date)

## Update Log
### {MM-DD-YYYY} — Conviction: High/Medium/Low — Action: Initiate/Add/Trim/Exit/Hold
- **What changed:** (new development since the prior entry, or "Initiated coverage")
- **Thesis impact:** strengthens / weakens / neutralizes — pillar/risk #N
- **Source:** [[{MM-DD-YYYY} - {TICKER} - {Security Name}/{TICKER}-final-recommendation\|{MM-DD-YYYY} analysis]]
```

---

## Data Source Registry

Prefer **structured financial-data MCP tools** over web search whenever they are connected — they return cleaner, more current, and more citable data than scraping articles. Web search (`WebSearch`/`WebFetch`) is the **fallback** when no MCP tool covers the need or no finance MCP server is connected.

When spawning each analyst (Step 2), include the matching row below in its prompt so it knows which tools to reach for first. Tool names are the canonical ones from common finance MCP servers (**Equibles**, **FMP**, **Financialdatasets.ai**, **AlphaVantage**); the exact namespaced names depend on which servers are connected in the runtime, so match by tool name and fall back gracefully if a server is absent.

| Analyst | Primary MCP tools (prefer) | Fallback |
|---------|----------------------------|----------|
| **Buffett / Value** | `GetFinancialStatement`, `GetFinancialFact`, `GetValuationMultiples`, `GetBuybackPrograms`, `GetInsiderOwnership`, `GetExecutiveCompensation`; FMP `discountedCashFlow`, `statements`, `analyst` | Web search for management commentary, capital-allocation history |
| **Growth** | `GetRevenueBreakdown`, `GetGuidance`, `GetFinancialFact`; Financialdatasets.ai `get_segmented_financials`, `get_kpi_metrics`; FMP `analyst` (estimates) | Web search for TAM, market-size, competitive landscape |
| **Technical** | `GetStockPrices`, `GetLatestPrices`, `GetBollingerBands`, `GetAverageTrueRange`, `GetStochasticOscillator`, `GetOnBalanceVolume`; FMP `chart`, `quote`, `technicalIndicators` | Web search for chart-pattern reads (verify price per the price-verification step) |
| **Fundamentals** | `GetFinancialStatement`, `GetValuationMultiples`, `GetFinancialFact`, `CompareFinancialFact`, `GetGoingConcernStatus`; Financialdatasets.ai `get_financial_metrics`, `get_income_statement`, `get_balance_sheet`, `get_cash_flow_statement` | Web search for peer comps, analyst estimates |
| **Sentiment** | `GetInsiderTransactions`, `GetTopBuyersSellers`, `GetFundsHoldingStock`, `GetTopHolders`, `GetShortInterest`, `GetShortInterestSnapshot`, `GetShortVolume`, `GetShortSqueezeScores`, `GetCongressionalTrades`, `GetExecutiveChanges`, `GetInvestorRelationsNews`; FMP `news`, `insiderTrades`, `senate`, `form13F`; X (Twitter) API if connected | Web search for news flow, analyst rating changes, retail/social sentiment |
| **Valuation** | `GetFinancialStatement`, `GetValuationMultiples`, `GetFinancialFact`, `CompareFinancialFact`; FMP `discountedCashFlow`, `statements`, `quote` (beta/shares), `analyst` (consensus estimates); Financialdatasets.ai `get_financial_metrics`, `get_cash_flow_statement` | Web search for beta, peer set, treasury (risk-free) rate |
| **Risk Manager** | `GetVixHistory`, `GetPutCallRatios`, `GetShortSqueezeScores`, `GetCftcPositioning`, `GetEconomicIndicator`, `GetEarningsCallEvent`, `GetInvestorRelationsEvents`, `GetEconomicCalendar`; FMP `quote` (beta), `commitmentOfTraders`, `economics`, `calendar` | Web search for macro backdrop, sector risk, scheduled catalysts |

**Rule for every analyst:** when a data point comes from an MCP tool, cite the tool name and the as-of date in the **Sources** section (e.g. `Equibles GetShortInterest, settlement 2026-05-30`). When it comes from the web, cite the URL. Never present a number without a traceable source.

---

## Analyst Reference Files

Each role's full instructions live in a dedicated file under `references/`. When dispatching a subagent, **read its reference file and pass the full contents** to that subagent (along with the ticker/company, its Data Source Registry row, and the inline-fallback instruction). Keeping the role prompts out of this file keeps the orchestrator lightweight — the detail loads only when a role is actually dispatched.

| Role | When dispatched | Reference file |
|------|-----------------|----------------|
| Buffett / Value Analyst | Step 2 | `references/buffett-analyst.md` |
| Growth Analyst | Step 2 | `references/growth-analyst.md` |
| Technical Analyst | Step 2 | `references/technical-analyst.md` |
| Fundamentals Analyst | Step 2 | `references/fundamentals-analyst.md` |
| Sentiment Analyst | Step 2 | `references/sentiment-analyst.md` |
| Valuation Analyst | Step 2 | `references/valuation-analyst.md` |
| Risk Manager | Step 4 | `references/risk-manager.md` |
| QC Reviewer | Step 6 | `references/qc-reviewer.md` |

Every role writes for an inexperienced investor, defines terms in plain language, and ends its report with a **Sources** section.

---

## Important Notes

- **Audience:** All output is for an inexperienced investor. Avoid jargon without explanation. When you use a financial term, briefly define it in parentheses.
- **Live data is required:** Every analyst must search for current data. Do not rely solely on training knowledge.
- **Signal weighting:** As Portfolio Manager, you decide how much weight each analyst signal gets. A mature value stock leans on Buffett and Fundamentals; a high-growth tech stock leans on Growth and Technical. Explain your weighting in the final thesis.
- **Thesis tracker is append-only:** When updating an existing thesis note (Step 8), never overwrite or delete prior Update Log entries — read, refresh the snapshot, and append. The log's value is the conviction trail over time.
- **Disclaimers:** End every analysis with: *"This analysis is for educational purposes only and is not financial advice. Always consult a qualified financial advisor before making investment decisions."*
