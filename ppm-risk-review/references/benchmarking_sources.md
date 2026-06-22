# Benchmarking Sources

A risk memo says *what* is wrong with a deal; benchmarking says *how far* from market it is. After
the rubric is walked and the headline terms are pinned down, calibrate each one against a **current,
fund-subtype-and-size-specific** industry benchmark and present the result in a table in the CIO memo
(see SKILL.md). The point is context for the CIO: a 1.5% management fee reads very differently once
the reader knows the market is 1.0–1.5%, and a 9% pref reads differently once the reader knows where
the market sits for that strategy.

This complements — it does not replace — the rubric. A term can be perfectly *market* and still be a
FATAL finding for other reasons (e.g., a market-rate fee paid to a captive affiliate that owes no
fiduciary duty). Benchmarking calibrates; the rubric judges.

## The discipline (read first)

- **Search for the current, specific benchmark.** Use the fund's actual subtype (mezzanine vs. senior
  direct lending vs. real-estate bridge; value-add vs. core RE equity; buyout vs. growth) and size
  band. Do not anchor on a generic "private equity" number when the fund is real-estate private
  credit.
- **Never estimate or assume a benchmark.** If a subtype-specific benchmark is not available, use the
  closest one and **state explicitly**: (1) the benchmark used, (2) why it was selected, (3) how it
  differs from the ideal. If nothing usable exists, say so in the table row — do not invent a number.
- **Cite the source and its vintage** in the table (e.g., "PitchBook Q1 2025," "ILPA Principles 3.0").
  A benchmark with no date is not a benchmark.
- **Prefer the most recent data.** A 2021 fee survey does not describe a 2026 market. Flag stale
  sources rather than relying on them.
- **Comparison column is a verdict, not a number.** Each row ends in "within range / above market /
  below market," and — because below-market is sometimes investor-*friendly* (no carry, low fee, high
  GP commitment, conservative leverage) and sometimes a red flag (a below-market default rate that is
  simply too young to be real) — say which it is for the investor.

## Authoritative sources

- **ILPA Principles 3.0** — the reference for GP/LP alignment: management-fee basis (committed vs.
  invested vs. NAV), carried-interest waterfall (deal-by-deal vs. whole-fund), GP commitment,
  fee offsets, key-person and removal terms, reporting/valuation cadence. Best for *governance and
  alignment* benchmarks.
- **PitchBook** — quarterly Global Private Market / Private Fund Strategies reports and the private-
  credit/real-estate lending notes. Best for *fundraising scale, fees, returns, and dry-powder*
  context by strategy.
- **Preqin** — fund-terms-and-conditions and private-debt/real-estate reports. Best for *liquidity
  terms, lock-ups, gates, default and loss rates*, and investor-appetite context.
- **McKinsey Global Private Markets Review** (annual) — macro context: leverage norms, sector
  performance, valuation environment, the cycle the strategy is being raised into.
- **StepStone SPI (Private Markets) benchmarks** — where available, GP-commitment and structure
  benchmarks by strategy and vintage.

If you have web access, search for the latest edition of each (titles and quarters change yearly).
If a paywalled figure is only available second-hand, cite the secondary source and note it.

## What to benchmark, and where the number comes from

| Metric | Typical benchmark frame | Best source(s) |
|---|---|---|
| Target / net return | strategy + risk band (levered vs. unlevered) | PitchBook, Preqin |
| Management fee (rate + basis) | committed vs. invested vs. NAV, by strategy | ILPA 3.0, PitchBook |
| Carried interest + hurdle | deal-by-deal vs. whole-fund; pref level | ILPA 3.0 |
| GP commitment | % of fund, by strategy/size | ILPA 3.0, StepStone SPI |
| Leverage | LTV / turns of equity typical for the asset | McKinsey, PitchBook |
| Liquidity (lock-up, gates, redemption) | open-end vs. closed-end norms | Preqin |
| Preferred return / hurdle | strategy-specific pref level | ILPA 3.0, PitchBook |
| Valuation frequency / oversight | NAV cadence, independent vs. internal | ILPA 3.0 |
| Loan term / duration (credit) | typical tenor for the lending strategy | PitchBook, Preqin |
| Default / loss rate (credit) | realized loss bands for the strategy | Preqin |

## The benchmarking table format (goes in the CIO memo)

| Metric | This Fund | Industry Benchmark | Source | Comparison |
|---|---|---|---|---|
| [metric] | [from the documents] | [from the benchmark] | [e.g., PitchBook Q1 2025] | [within range / above / below market — and whether that favors the investor] |

Pull "This Fund" values straight from the rubric work (and the cross-document reconciliation matrix —
use the controlling document's figure, and note if documents disagree). Below-market terms that favor
the investor (no carry, low fee, high GP commitment, conservative leverage) should also be tagged
`[STRENGTH]` in the memo body; above-market extraction feeds the FATAL/NEGOTIABLE findings.
