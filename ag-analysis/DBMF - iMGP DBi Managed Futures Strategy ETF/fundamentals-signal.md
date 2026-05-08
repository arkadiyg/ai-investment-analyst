## Fundamentals Analyst Signal Report — DBMF

**Signal:** neutral (leaning bullish)
**Confidence:** 62

*Report date: 2026-04-27. All figures sourced from public fund disclosures, Morningstar, ETF.com, ETFDB, ETF Action, and the issuer (iM Global Partners / DBi). Where the fact sheet PDF was not directly retrievable (issuer site returned 403), figures are reconciled across at least two independent third-party sources.*

---

### Security Identification

- **Ticker / Name:** DBMF — iMGP DBi Managed Futures Strategy ETF
- **Issuer / Sub-Adviser:** iM Global Partner Fund Management LLC (issuer); Dynamic Beta investments / DBi (sub-adviser, Andrew Beer & Mathias Mamou-Mani)
- **Type:** Actively-managed, '40-Act ETF (regulated under the Investment Company Act of 1940 — meaning it is a U.S.-registered fund with daily liquidity, daily NAV publication, transparent holdings, and statutory leverage limits, in contrast to a private hedge fund)
- **Inception:** May 8, 2019
- **Listing:** NYSE Arca
- **Category:** Systematic Trend / Managed Futures (Morningstar)
- **AUM:** ~$3.2B as of mid-April 2026 (range $1.99B–$3.36B reported across sources depending on data lag; ETF Action and 24/7 Wall St cite ~$3.2B in April 2026)
- **Expense ratio (net):** 0.85% per year (this is the percentage of fund assets deducted annually to pay management, sub-advisory, and operating fees)
- **Distribution yield (TTM):** ~5.29% trailing-twelve-month / ~5.49% indicated (paid quarterly; "yield" here = annual distributions divided by share price, not a coupon)

**What the fund does in plain English:** DBMF tries to mimic the *aggregate* trades of the largest trend-following hedge funds ("CTAs" — Commodity Trading Advisors, the institutional managers who run systematic futures strategies) by reverse-engineering their recent returns. The DBi team runs a regression — internally branded the "Dynamic Beta Engine" — on the trailing 60 days of the **SG CTA Index** (Société Générale's benchmark of the 20 largest trend-following managed futures programs; reconstituted annually). The regression infers what a representative CTA is currently *long* or *short* across roughly 10 highly liquid futures contracts (S&P 500, EAFE/MSCI, Russell 2000, U.S. 10Y Note, U.S. 2Y Note, German Bund, EUR, JPY, AUD, crude oil, gold). The ETF then implements those inferred positions directly. The investment thesis is that **trend-following exposure is a "beta" that can be replicated cheaply**, capturing ~80% of the hedge-fund index return without paying the typical 2-and-20 hedge fund fee load.

---

### Profitability Metrics (translated to risk-adjusted return)

For a managed futures ETF, "profitability" is not gross margin — it is *risk-adjusted return* and *behavior in a balanced portfolio*. Definitions:

- **Sharpe ratio:** annualized excess return over the risk-free rate (T-bill yield), divided by annualized volatility (standard deviation of returns). Higher is better. A Sharpe above 1.0 is generally considered good for a liquid alts strategy; above 1.5 is excellent.
- **Sortino ratio:** like Sharpe but only penalizes *downside* volatility (the standard deviation of negative returns). Better measure when returns are skewed.
- **Alpha:** return *not* explained by exposure to standard risk factors (e.g., stocks, bonds). Positive alpha = manager skill; near-zero alpha for a "beta replicator" is expected and acceptable if cheap.
- **Capture ratio:** percentage of an index's up-month or down-month return the fund captures. "Up capture 95% / down capture 70%" would be ideal asymmetry.

**DBMF metrics (cross-source, multi-window):**

| Metric | DBMF | KMLM | CTA (Simplify) | Notes |
|---|---|---|---|---|
| Trailing 12-month return | ~+27.3% | n/a | n/a | strong 2025 trend year |
| YTD 2026 (through Apr 8) | +8% | n/a | n/a | resilient during Q1-26 equity drawdown |
| Since-inception CAGR | ~9.1% | comparable | lower | ~6-yr track record |
| Sharpe ratio (recent windows) | 1.87 → 2.31 | 1.54–1.77 | 0.55 | DBMF leads peer group |
| Realized vol (recent) | ~11.9% (multi-yr); ~3.5% (recent quiet period) | ~14.6% / ~4.9% | ~10.8% | DBMF runs lower vol than KMLM |
| Tracking vs SG CTA Index (since inception) | **+~300 bps/yr outperformance** | n/a | n/a | net of 0.85% fee — meaningful |
| Tracking vs SG CTA Index (2024) | **–500 bps** | n/a | n/a | replication slippage |
| Tracking vs SG CTA Index (2025) | **–500 bps** | n/a | n/a | second consecutive year of underperformance |

**Interpretation:** DBMF has the best Sharpe ratio in its peer group, a strong long-run track record of beating the index it replicates by ~3% per year *net* of fees, and held up during the early-2026 equity sell-off (when most "diversifiers" failed). However, **two consecutive years of ~500 bps tracking underperformance versus the SG CTA Index (2024 and 2025) is a yellow flag** — it suggests the Dynamic Beta Engine is having trouble keeping up with how the underlying CTAs are evolving (possibly more dispersion among managers, faster strategy shifts, or the model's 60-day lookback being too slow). A bullish counter is that the 2025 calendar comp coincided with a difficult environment for trend overall (the SG CTA Index itself was down ~8.4% YTD by mid-2025).

---

### Growth Metrics

For an ETF, "growth" = AUM trajectory, NAV/total-return CAGR, and distribution growth.

- **AUM trajectory:** $3.2B as of April 2026, up from sub-$100M at end-2020. Net new flows (creation activity, i.e. new shares issued in exchange for cash) of approximately:
  - 5-year cumulative net flows: ~$3.43B
  - 3-year cumulative: ~$2.55B
  - 1-year: ~$2.03B
  - January 2026: ~$34M, representing ~1.53% of AUM in a single month — DBMF was the *single largest contributor* to managed-futures category inflows that month.
- **NAV CAGR (since inception):** ~9.1% per year on a total-return basis (price appreciation + reinvested distributions). For context, this beats the U.S. 60/40 portfolio over the same window with materially negative correlation in 2022 (when 60/40 fell ~17%, DBMF rose ~21%) — that 2022 episode is the single most important data point in DBMF's growth story.
- **Distribution yield/composition:** ~5.29–5.49% trailing yield, paid quarterly. Last ex-dividend date: Dec 30, 2025 ($1.66/share TTM total).
  - *Caveat:* For futures-based ETFs, distributions are *not* recurring "income" in the bond-coupon sense — they are required pass-throughs of realized capital gains on Section 1256 contracts (see Cash Flow Quality section). The dollar amount is volatile year-to-year and tracks performance.

**Interpretation:** The growth picture is unambiguously positive. DBMF is *the* dominant ETF in its category (more AUM than KMLM, CTA, FMF, WTMF combined in most months), still gathering net inflows, and has compounded at a respectable single-digit rate over six years while providing crisis-period diversification.

---

### Balance Sheet / Exposure Health

For an ETF, the "balance sheet" is the holdings sheet plus the off-balance-sheet derivative exposure.

**Structural design (from prospectus and DBi commentary):**
- DBMF holds U.S. Treasury bills and short-duration cash equivalents as **collateral** (typically 80–95% of NAV in cash/T-bills — these earn the prevailing money-market rate, currently a meaningful ~4–5%, which is an important component of total return)
- The fund then takes **long and short positions in roughly 10 highly liquid futures contracts** to express its replicated CTA exposure. Notional exposure (face value of futures contracts) typically runs ~150–250% of NAV, which is moderate by managed-futures standards
- 15.9% of assets are reported as "domestic stock" by some screens — this is misleading; it reflects the way certain data vendors classify equity-index futures collateral, not direct stock holdings
- Top 10 "holdings" = ~55–85% of the portfolio depending on whether T-bills are included; the underlying *positions* are concentrated in <15 line items, which is by design

**Typical asset-class exposure buckets** (ranges across recent factsheets):
- Equity index futures (S&P 500, MSCI EAFE, Russell 2000): long or short, +/- 0–80% of NAV notional
- Rates (U.S. 10Y, U.S. 2Y, Bund): long or short, +/- 0–150% notional (rates is usually the biggest book)
- FX (EUR, JPY, AUD, etc.): long or short, +/- 0–100% notional
- Commodities (crude, gold): smaller book, +/- 0–40% notional

**'40-Act constraints (regulatory guardrails):**
- Daily liquidity, daily NAV, transparent holdings published daily
- Statutory derivatives risk-management requirements under SEC Rule 18f-4 (the rule that governs how '40-Act funds can use derivatives — DBMF runs as a "limited derivatives user" or full Rule 18f-4 risk program with VaR limits)
- No use of margin loans or cross-collateralized counterparty leverage of the kind hedge funds use; all futures cleared on regulated exchanges (CME, CBOT, ICE) via a futures commission merchant
- Cannot hold more than 15% in illiquid securities

**Interpretation:** Exposure structure is clean and well-regulated. The use of cash-margined exchange-traded futures means **no counterparty credit risk of the kind that bit prime-broker-dependent hedge funds in 2008**. The cash collateral earning T-bill yield is a structural tailwind in the current rate environment — an underappreciated component of DBMF's Sharpe.

---

### Cash Flow Quality

"Cash flow" for an ETF translates to *distribution sustainability* and *tax character*.

- **Distribution composition:** DBMF's distributions are predominantly *short-term and long-term capital gains* from realized futures P&L, plus modest *ordinary income* from T-bill collateral interest. Historically there has been very little, if any, **return of capital** ("ROC" — distributions that exceed earnings, effectively returning your own money to you and reducing your cost basis; ROC is generally a yellow flag because it flatters yield without being true income). DBMF's strong historical performance has meant distributions have been earned, not manufactured.
- **Section 1256 / "60/40 tax treatment":** This is the single biggest cash-flow-quality positive. Under U.S. IRC §1256, regulated futures contracts (which is what DBMF trades) are **marked-to-market at year-end and taxed as if 60% long-term capital gains and 40% short-term capital gains, regardless of how long they were actually held.** For a top-bracket taxable U.S. investor, this blends to roughly a 27% effective federal rate vs. 37% on ordinary income — a meaningful structural tax advantage versus, say, a high-yield bond fund with similar headline yield. Note: the *ETF* receives this treatment internally; the investor receives a 1099-DIV with capital-gain distributions plus, on year-end mark-to-market pass-throughs, the favorable character. Interest income on T-bill collateral remains ordinary.
- **Sustainability:** Distribution dollar levels are *inherently lumpy* — they track realized P&L. Investors should not extrapolate the 5%+ trailing yield as a steady-state coupon; in flat or losing years (2023 was approximately flat), distributions can be much smaller. This is a mismatch in expectations many retail investors fail to model.
- **Cash-flow-quality verdict:** High quality (real earned distributions, tax-advantaged), but **volatile** (do not rely on it for fixed income).

---

### Valuation Assessment

For an ETF there is no P/E to discount; "valuation" = *fee paid per unit of value delivered.*

- **DBMF expense ratio:** 0.85% — moderately above the active-ETF average (~0.50%) but **dramatically below** the comparable hedge-fund product (typical CTA hedge funds charge 1.5–2% management + 15–20% performance, blending to ~3–6% all-in in good years).
- **Peer comparison (managed-futures ETFs):**
  - DBMF — 0.85%
  - KMLM (KFA Mount Lucas Index Strategy) — 0.92%
  - CTA (Simplify Managed Futures Strategy) — 0.78% (lowest)
  - WTMF (WisdomTree Managed Futures) — 0.65% (cheapest, but historically weakest performer)
  - FMF (First Trust Managed Futures) — ~0.95%
  - **SDMF** (Simplify DBi CTA Managed Futures Index ETF) — *new launch (Nov 2025) — an index-based DBMF clone that explicitly threatens DBMF on fee* (likely ~0.50–0.65% range; this is a competitive-moat risk for DBMF).
- **Traditional CTA mutual funds** (e.g., AQR Managed Futures, AHLT, AlphaSimplex): expense ratios 1.20–1.85%; DBMF is half the cost.
- **Fee per unit of Sharpe:** Using DBMF's recent multi-year Sharpe of ~1.87 and 0.85% fee → ~0.45% fee per unit of Sharpe. KMLM at 1.77 / 0.92% → ~0.52%. CTA at 0.55 / 0.78% → ~1.42%. **DBMF is the best value on a fee-per-Sharpe basis** among the major peers, though SDMF will likely take that crown in 2026 if it executes.

**Interpretation:** Valuation is fair, not cheap. The 0.85% fee is *justified* by track record but *not protected* — the launch of SDMF (a near-clone at lower cost) in November 2025 is a real fee-compression threat over the next 24 months. DBMF will likely need to either (a) demonstrate that active discretion at the margin adds the ~300 bps of long-run alpha, or (b) cut fees.

---

### Earnings/Quality Notes (Strategy & Replication)

This is the heart of evaluating DBMF — the question is whether the **replication** approach is high quality.

**The defining feature:** DBMF does *not* run a proprietary trend-following model in the traditional sense (i.e., it doesn't have its own moving-average crossovers or breakout signals across 100+ markets). Instead, DBi runs a **factor regression** of the recent 60-day return of the SG CTA Index against a basket of ~10 liquid futures, and infers what positions a representative CTA must currently be holding to have produced those returns. The ETF then puts on those positions. This is "beta replication," not alpha generation.

**Strengths of this approach:**
1. **Fee compression** — replication is cheap to run, hence 0.85% vs. 3%+ for the underlying hedge funds.
2. **Diversification of manager risk** — instead of betting on one CTA being right, DBMF approximates the *average* of 20 large CTAs, smoothing idiosyncratic manager mistakes.
3. **Tax efficiency** — futures-based ETF wrapper + Section 1256 treatment.
4. **Liquidity** — daily creation/redemption; tight bid/ask; no gates or lockups.
5. **Alpha vs. the hedge-fund index itself** — net-of-fee outperformance of ~300 bps/yr since inception is partly the fee differential and partly disciplined position sizing.

**Weaknesses / risks of this approach:**
1. **Stale-data / lag risk** — the 60-day regression *reacts to past CTA positioning*, so when underlying managers pivot, DBMF's positions shift only after enough new data has accumulated. In sharp regime changes (e.g., the 2024–2025 inflation/rate-pivot environment), this lag has cost ~500 bps/year vs. the SG CTA Index for two consecutive years. If this widens further, the entire thesis weakens.
2. **Reduced market coverage** — 10 contracts vs. CTAs' 50–100+ markets means DBMF cannot capture trends in niche commodities, EM rates, or single-stock futures.
3. **Crowding risk** — as DBMF AUM grows toward $3B+, plus a clone (SDMF) launching, the same handful of contracts may see slippage on rebalance days.
4. **Key-person risk** — Andrew Beer is the public face of the strategy; departure would be a meaningful concern. The model is systematic so day-to-day execution wouldn't break, but the brand and conviction live with him.
5. **Tracking transparency:** DBi publishes monthly commentary and the factsheet shows attribution; transparency is **above industry average for liquid alts**, but the proprietary regression weights are not disclosed.

**Earnings-quality verdict:** **Above-average for the alternative-ETF universe.** The strategy is honest about what it is (a replicator, not an alpha-trend-follower), the track record validates the long-run thesis, and the wrapper is investor-friendly. The two-year tracking-error pattern is the main quality concern — worth monitoring in 2026 fact sheets to see if it narrows.

---

### Signal Summary

- **Profitability (translated):** Strong. Sharpe leads peer group; long-run alpha vs. SG CTA Index of +300 bps/yr.
- **Growth:** Strong. Category-leading AUM, still gathering inflows, dominant share of managed-futures ETF flow.
- **Balance sheet/exposures:** Healthy. Clean, exchange-cleared, '40-Act-constrained, T-bill-collateralized.
- **Cash flow quality:** Good. Tax-advantaged 60/40 §1256 character; distributions earned not manufactured; but lumpy year to year.
- **Valuation:** Fair, with a **fee-compression threat** from SDMF (Nov 2025 launch).
- **Earnings/strategy quality:** Above-average, with a **two-year tracking-error yellow flag** vs. the index it replicates.

**Net signal: NEUTRAL with bullish tilt.** Confidence 62. DBMF is the highest-quality vehicle in a structurally useful asset class (managed futures provided uncorrelated returns in 2022 and again in early 2026's equity drawdown), but it is no longer a "no-brainer cheapest-best" — SDMF and continued tracking slippage are real headwinds. Appropriate as a 5–10% sleeve in a balanced portfolio for crisis diversification, not as a standalone alpha bet.

---

### Sources

- [Morningstar — DBMF Quote (April 2026)](https://www.morningstar.com/etfs/arcx/dbmf/quote)
- [ETF.com — DBMF page](https://www.etf.com/DBMF)
- [ETFDB — DBMF profile](https://etfdb.com/etf/DBMF/)
- [iMGP DBi Managed Futures Strategy ETF — issuer page](https://imgpfunds.com/im-dbi-managed-futures-strategy-etf/)
- [DBMF Fact Sheet — Dec 31, 2025 (issuer PDF)](https://imgpfunds.com/wp-content/uploads/pdfs/holdings/DBMF_FACTSHEETS_EN.pdf)
- [DBMF Q4 2024 Institutional Deck](https://imgpfunds.com/wp-content/uploads/2025/01/iMGP-DBi-Managed-Futures-Strategy-ETF-Q4-24.pdf)
- [DBMF January 2025 Monthly Update — Andrew Beer](https://imgpfunds.com/wp-content/uploads/2025/02/DBMF-Jan-2025-Monthly-Video-Update-1.pdf)
- [DBMF May 2025 Update with Andrew Beer](https://imgpfunds.com/imgp-dbi-managed-futures-strategy-etf-update-with-andrew-beer-may-2025/)
- [DBMF October 2025 Update with Andrew Beer](https://imgpfunds.com/imgp-dbi-managed-futures-strategy-etf-update-with-andrew-beer-october-2025/)
- [Stock Analysis — DBMF holdings & dividend history](https://stockanalysis.com/etf/dbmf/)
- [Stock Analysis — DBMF Dividend History](https://stockanalysis.com/etf/dbmf/dividend/)
- [Yahoo Finance — DBMF performance history](https://finance.yahoo.com/quote/DBMF/performance/)
- [PortfoliosLab — DBMF vs. KMLM comparison](https://portfolioslab.com/tools/stock-comparison/DBMF/KMLM)
- [PortfoliosLab — CTA vs. DBMF comparison](https://portfolioslab.com/tools/stock-comparison/CTA/DBMF)
- [ETFDB — DBMF vs. KMLM head-to-head](https://etfdb.com/tool/etf-comparison/DBMF-KMLM/)
- [Picture Perfect Portfolios — Best Managed Futures ETF](https://pictureperfectportfolios.com/whats-the-best-managed-futures-etf-dbmf-vs-kmlm-vs-cta/)
- [WantFi — 5 Managed Futures ETF Reviews](https://wantfi.com/invest-in-managed-futures-etf-dbmf-kmlm-cta-review.html)
- [ETF Action — DBMF Drives Managed Futures Inflows (Jan 2026)](https://www.etfaction.com/dbmf-drives-managed-futures-inflows-in-shifting-market/)
- [ETF Express — Simplify launching index-based DBMF clone (SDMF, Nov 2025)](https://etfexpress.com/2025/11/17/simplify-set-to-launch-index-based-dbmf-clone/)
- [Simplify — SDMF fund page](https://www.simplify.us/etfs/sdmf-simplify-dbi-cta-managed-futures-index-etf)
- [24/7 Wall St — Managed futures ETFs that made money in early-2026 equity drawdown (April 10, 2026)](https://247wallst.com/investing/2026/04/10/the-3-managed-futures-etfs-that-made-money-while-the-sp-500-crashed/)
- [Terms.law — Section 1256 Contracts Tax Treatment](https://terms.law/Trading-Legal/guides/section-1256-contracts.html)
- [Roundhill Investments blog — Return of Capital Distributions in ETFs](https://blog.roundhillinvestments.com/roc-distributions-in-etfs)
- [Composer — DBMF performance metrics](https://www.composer.trade/etf/DBMF)
