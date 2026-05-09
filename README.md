# ai-investment-analyst

A Claude Code plugin marketplace for AI-driven investment research.

Currently hosts a single plugin: **ag-capital-analyst** — a multi-agent investment analysis team that produces buy/sell/hold recommendations with position sizing.

## What's in this repo

```
.
├── .claude-plugin/
│   └── marketplace.json          # Marketplace manifest
├── ag-capital-analyst/           # The plugin
│   ├── .claude-plugin/plugin.json
│   └── skills/ag-capital-analyst/SKILL.md
└── ag-analysis/                  # Sample outputs (DBMF, FTLS)
```

## The ag-capital-analyst plugin

Spawns five analyst subagents in parallel, each pulling live financial data, then routes their signals through a Risk Manager and synthesizes a final recommendation.

| Analyst | Lens |
|---|---|
| Buffett | Moat, intrinsic value, margin of safety |
| Growth | TAM, revenue trajectory, disruption potential |
| Technical | Price action, momentum, support/resistance |
| Fundamentals | Financial statements, ratios, valuation multiples |
| Sentiment | News flow, analyst opinion, social signals |

The Portfolio Manager (the orchestrator) consolidates the five signal reports, hands them to a Risk Manager subagent for risk assessment, and produces a final deliverable with a recommendation, confidence score, price target, position size, and key risks — written for an inexperienced investor.

### Trigger phrases

> "analyze AAPL", "should I buy NVDA", "find undervalued semiconductor companies", "evaluate this ETF"

### Output

Each run produces a folder named `{TICKER} - {Security Name}/` containing:

- `buffett-signal.md`, `growth-signal.md`, `technical-signal.md`, `fundamentals-signal.md`, `sentiment-signal.md`
- `all-signals.md` — consolidated signals
- `risk-assessment.md` — Risk Manager output
- `final-recommendation.md` — final synthesis

In Claude Code, reports are written directly into the user's Obsidian vault so they appear alongside other investment notes. In the Anthropic Agent Skills runtime (Claude.ai), they land under `/home/user/workspace/ag-analysis`. See `ag-analysis/` in this repo for example outputs (DBMF, FTLS).

## Installation (Claude Code)

Add this repo as a marketplace, then install the plugin:

```
/plugin marketplace add arkadiyg/ai-investment-analyst
/plugin install ag-capital-analyst@ai-investment-analyst
```

Once installed, the skill auto-activates whenever you ask Claude Code to analyze a ticker, sector, or investment thesis.

## Recommended data sources

The plugin is tool-agnostic — analysts use whatever live-data tools the runtime exposes (`WebSearch`, `WebFetch`, or MCP servers). It will run with web search alone, but adding a finance data source gives you structured fundamentals, real-time quotes, filings, and ownership data instead of scraped prose. Quality jumps noticeably for the Fundamentals and Technical analysts.

| Source | What it adds |
|---|---|
| **FMP** (Financial Modeling Prep) | Real-time quotes, financial statements, ratios, DCF, analyst estimates, earnings transcripts, 13F holdings, insider trades, technical indicators |
| **Equibles** | SEC filings (with line-level reads), short interest, institutional holdings, congressional/insider trades, CFTC positioning, economic indicators |
| **Perplexity** | Higher-quality web research and sentiment, with citations |

All three are available as hosted connectors in Claude. Open **Settings → Connectors**, search for the source, click **Connect**, and complete the auth flow. Tools appear automatically — no API keys to manage and nothing to run locally.

## Use on Claude.ai

The same skill works as an Anthropic Agent Skill on Claude.ai (Pro / Team / Enterprise). It auto-detects the runtime and writes reports under `/home/user/workspace/ag-analysis` instead of the Obsidian vault path used in Claude Code.

### Install

1. Download the skill file from the latest release:
   [`ag-capital-analyst.md`](https://github.com/arkadiyg/ai-investment-analyst/releases/download/v1.1.0/ag-capital-analyst.md)
2. In Claude.ai, open **Settings → Capabilities → Skills** (the exact path may vary by plan; see the [official Skills setup guide](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) for the current UI flow).
3. Click **Upload skill** (or **Create skill** → **Upload file**) and select the downloaded `ag-capital-analyst.md`.
4. Enable the skill for the workspace or project where you want to use it.

Once enabled, the skill auto-activates when you ask Claude to analyze a ticker, sector, or investment thesis (same trigger phrases as the Claude Code plugin).

## Disclaimer

Output is for research and educational use only. Not investment advice. Live data is pulled from public sources at run time and may be incomplete or stale; verify before acting.
