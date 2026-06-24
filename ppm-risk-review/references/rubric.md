# PPM Review Rubric (v2.3)

A repeatable checklist for evaluating a private-fund offering document at family-office quality. Walk every section even if a finding is "not applicable" — explicitly noting absence is itself useful.

Classify every finding into one of three severity tiers as you go:

- **FATAL** — deal cannot clear IC without remediation (e.g., undisclosed fees, no Form D after a closing, fabricated/misattributed track record, fund is a captive lender to the sponsor).
- **NEGOTIABLE** — fixable via side letter, amendment, or sponsor concession (e.g., removal-for-cause definition, MFN, K-1 timing).
- **ASK** — gap that belongs in the sponsor questionnaire, not the memo's conclusion.

The memo recommendation should follow mechanically from the tier counts: any FATAL → decline pending remediation.

**Carry the tiers into the memo, visibly.** Tag every finding heading in the CIO memo with its tier label (`[FATAL]` / `[NEGOTIABLE]` / `[ASK]`, plus `[STRENGTH]` for points in the deal's favor), give a one-line legend, and print a tally near the top (e.g., "four FATAL, three NEGOTIABLE, six ASK, one STRENGTH"). The reader should be able to see the recommendation falling out of the counts without reading the prose. Note when a NEGOTIABLE item only stays negotiable if a related FATAL is cured first (e.g., an adjustable carry is negotiable only once governance is restored) — flag that dependency rather than scoring it in isolation.

**Also tag every finding with its mutability zone** — `[LOCKED]` / `[SPONSOR]` / `[MARKET]` (see the Mutability lens below) — alongside the tier. The recommendation should weigh the zone mix: three irreversible `[LOCKED]` FATALs argue "walk away," while three `[SPONSOR]` FATALs argue "negotiate remediation." Do not add a separate deal-killer/return-reducer tag; when a finding is a structural fragility that can wipe out capital (vs. merely lowering returns), say so in the finding text and let it drive the tier.

## Analytical lenses (apply all three to every bucket below)

The buckets are *topics*; these are the *viewpoints* you read each topic from. A finding often looks
benign from one lens and alarming from another — run all three before scoring.

- **Fund counsel.** Legal structure, exemption coherence, fiduciary duties and their waivers,
  indemnification and exculpation, enforceability of the operative terms, which document controls in
  a conflict. (Drives §1, §2, §7.)
- **Prospective investor.** Risk, unclear or discretionary terms, alignment, and anything that hits
  *return, control, or liquidity* — plus the investor-friendly features worth a `[STRENGTH]` tag.
  (Drives every bucket.)
- **Lender to the fund.** Read the fund as if you were extending *it* credit — even for a pure equity
  vehicle. Ask: what is the funding/redemption-run risk (committed liquidity facility vs. best-efforts
  redemptions)? Is there an asset–liability / duration mismatch (short investor liquidity against
  long, illiquid assets)? How enforceable is the collateral, and how clean are the default/foreclosure
  mechanics? What is current cash utilization, and does anything strain the ability to honor
  obligations? This lens is the one most often skipped on equity funds and is where redemption-run and
  duration risk surface. (Drives §4, §5, §6.)
- **Mutability.** Sort each risk by whether it is *locked at closing* (irreversible — sponsor quality,
  purchase price/cap), *sponsor-driven* (the GP can change it post-close — debt, expenses, capital
  stack), or *market-driven* (mean-reverts — exit cap, rents, supply). Weight irreversible risks most
  heavily, and treat any market-driven assumption held at a historic extreme as a reversion risk. This
  lens drives §6.5 and supplies the `[LOCKED]`/`[SPONSOR]`/`[MARKET]` zone tag carried on every finding.

The "Lender to the fund" lens applies to **all** funds; the §5 debt branch is the deepest form of it,
for offerings whose security is actually a note.

**Accredited ≠ astute.** Accreditation is a *permission, not a competence credential* — the definition
now covers roughly a fifth of US households. The investor's accredited status permits the investment;
it does not certify the investment is sound. Do not outsource judgment to the accreditation check;
supplying the competence accreditation does not is exactly this rubric's job.

## 0. Document authenticity gate (run FIRST — a fail here changes the whole review)

Before analyzing terms, verify this is a real, complete, current offering:

- **Dated.** Is the PPM dated? A blank "Dated: ___" or undated document is disqualifying on its own. Check the date is current — a PPM more than ~18 months old with no supplement is stale.
- **Placeholders.** Search for bracketed or template text: "[Auditor]", "[Administrator]", "[Fund Name]", "TBD", obvious mail-merge artifacts. Named service providers that are blank or generic indicate a template that was never finished.
- **Drafter.** Who prepared the document? Securities counsel of record (named, verifiable firm) vs. an online template platform (LexisNexis forms, Savvi, PaperOS, "PPM generator" services) vs. drafted in-house by the sponsor. Template/in-house drafting is not automatically fatal but predicts every other deficiency.
- **Exhibits attached.** Are the exhibits listed in the table of contents actually in the document? "All exhibits missing" or "see investor portal" means the operative terms are mutable and outside the offering.
- **Document set complete.** PPM + LPA/Operating Agreement + subscription agreement (+ note, if a debt offering). Review what's missing as hard as what's present.
- **Service providers real and engaged.** Verify the named auditor, administrator, and counsel exist and (where checkable) actually serve this fund. A claimed SEC-RIA registration must be confirmed on IAPD — a false registration claim is fatal and reportable.

If this gate fails, the review's framing shifts from "analyze the terms" to "verify this is a real offering," and the memo should say so on page one.

## 0.5 Cross-document reconciliation matrix

Build a literal table — one row per term, one column per document (PPM, LPA, subscription agreement, note, marketing deck, Form D, cover letter):

| Term | PPM | LPA | Sub Agmt | Note | Deck | Form D |
|---|---|---|---|---|---|---|
| Rate / preferred return | | | | | | |
| Total fee load | | | | | | |
| Target raise | | | | | | |
| Minimum investment | | | | | | |
| Term / maturity | | | | | | |
| Security / collateral | | | | | | |
| GP/sponsor commitment | | | | | | |
| Sales compensation | | | | | | |

Any contradiction across documents is at minimum NEGOTIABLE and usually FATAL — a sponsor that cannot keep its own rate consistent across the PPM, the note, and the deck either has no counsel review or is telling different stories to different audiences. Also confirm the deck describes **this** offering and not a sibling fund.

Extend the matrix with a **Marketing-Claim** column and reconcile *adjectives*, not just terms: "never issued a capital call" (may mean the GP subordinated LPs via pref rather than face a call); "conservative" / "first-position only" against the OA's actual latitude (e.g., "up to 90% LTV, no collateral" permitted while the deck says "conservative bridge lending"); and puffery — "low-risk," "stable," "asset-backed," "capital preservation," "risk mitigation" — flag every instance and require the deck to quantify it. For every bull data-claim, ask what the *bear* reading of the same data is (record deliveries cited as "strong demand" while a supply glut looms).

## 1. Documentation deficiencies (often the most material findings)

- **Fee table.** Look for a clear table with: management fee (rate + basis), acquisition fee, disposition fee, financing/refinancing fee, carried interest %, hurdle/catch-up structure, and the cap on operating-expense reimbursements. **A PPM that mentions "Carried Interest" / "Asset Management Fee" / "Sharing Ratio" without specifying the rate is a major red flag** — the LP cannot model net returns.
- **Aggregate fee load — compute it, don't just note it.** Sum all upfront fees (organizational, O&O, acquisition, construction/development-management, placement) as a percentage of the target raise, and annual fees as a drag on NAV. Then compute the implied gross return needed to clear the pref after the load. Disclosed-but-confiscatory (e.g., 20%+ day-one load, or a single fee equal to half the raise) is as fatal as undisclosed.
- **Use of proceeds funding its own coupon.** If offering proceeds fund an interest reserve or pay the preferred return on earlier capital, quantify what percentage of the raise pays its own coupon. This is the classic note-program fraud marker; anything material goes on page one.
- **Exhibits and supporting documents.** Verify the Business Overview / Investment Strategy / Sources-and-Uses exhibit is in the document, not deferred to an external portal.
- **GP commitment.** Look for a dollar amount and percentage of total commitments — and reconcile against marketing claims ("GP is largest investor" in a cover letter vs. "GP not required to commit capital" in the LPA is a FATAL contradiction).
- **Audited financials and track record.** Note whether prior-fund returns are audited or "internally prepared by affiliates," and whether *any* third-party verification was performed. An unaudited loan tape is not a track record.
- **Sources and Uses.** Reconcile the math. Be alert to unusually large marketing lines, unspecified "operating costs" exceeding 10% of the raise, or footnoted "redeployed capital" that does not appear in Sources.
- **Counsel.** Almost always represents the Manager; investors typically waive conflicts. Standard but not benign.
- **Math-integrity check.** Stated returns (CoC, ROI, IRR, equity multiple) must tie to the cash-flow schedule, which must tie to the rent roll and operating-expense assumptions. **CoC/ROI shown with no IRR or equity multiple is a flag** — a deck once showed only CoC and ROI because the IRR (2.5%) was incompatible with the narrative. Reconcile the stated return % to the dollar math ("110% over 5 years = 2.5% IRR, stated as 101% ROI" does not tie). Catch accounting errors in the PPM itself: vacancy listed as a *positive* number; line items gross rather than net of standard adjustments; expense ratios 30%+ below industry norms with no justification. Check the **renovation budget vs. rent lift** (is the per-unit reno cost consistent with the achievable rent delta in the submarket?) and the **vacancy schedule vs. business plan** (if renovations span Y1–Y3, vacancy must be modeled in each reno year, not just Y1).
- **Return-presentation integrity.** Require a *defined exit and a time-weighted IRR*. Treat distributions sourced from a **cash-out refinance as return of capital**, not yield. In any track record, separate **luck (an early exit into a favorable market, cap compression) from skill** — a doubled IRR off an early exit is not evidence of execution.

## 2. Governance and LP protections

- **Voting.** Class A / LP voting rights — usually none. Check whether LPs can remove the Manager (and on what trigger), amend the LPA, or approve affiliate transactions. "Class B can never remove the Manager" or cause-only removal at a 75% threshold is a structural FATAL for a first-time sponsor.
- **Removal for cause.** "Cause" is often defined extremely narrowly (criminal conviction, Bad Actor disqualification only). Performance, fiduciary breach, gross negligence, and key-person events should ideally trigger removal too.
- **Fiduciary waivers.** Flag full fiduciary-duty waivers and any class structure where a captive affiliate class disclaims fiduciary duty to the investor class.
- **Drag-along / tag-along.** Drag held by the Manager with no LP consent is normal but worth flagging. Tag should be unconditional.
- **Indemnification and exculpation.** Look for the carve-outs (knowing violation of law, willful misconduct, improper personal benefit). Check if indemnification can claw back LP distributions.
- **Side letters / MFN.** Note whether the Manager can grant superior terms secretly and without bound, and whether an MFN is offered. Unbounded secret side letters are FATAL. Watch for the specific mechanism of per-LP "Carry Adjustment" / "Management Fee Adjustment" clauses that let the Manager raise, reduce, or waive a given investor's economics "without the consent of, or notice to, any other Limited Partner" — that is a secret side letter written into the key terms.
- **Illusory safeguards.** A protection the PPM advertises but the LPA nullifies. The classic tell: the PPM conditions affiliate fees or major actions on "Advisory Committee approval," while the LPA's Schedule states "there shall be no advisory committee for this Fund" (or the body is never actually constituted). The same pattern appears with referenced LP consent rights that a later clause waives. Treat a safeguard pointing to a non-existent body as worse than silence — it is affirmatively misleading — and FATAL when it guards a material conflict.
- **Preferred-equity subordination.** Whether later capital can subordinate Class A in the waterfall.
- **Manager-only options.** Call options, forced-redemption rights, or conversion rights (e.g., REIT conversion) exercisable unilaterally by the Manager — these cap the LP's outcome at the Manager's discretion.

### Capital-stack constraints (the stack is not fixed at close)

The single most common path to common-equity wipeout. Check whether the OA lets the GP — **without LP consent** — issue pref equity in lieu of a capital call; issue a senior share class to fund a call (diluting non-participants); add junior/mezz debt; or subordinate common under rescue capital. Capture the **non-participation dilution ratio**, any hard cap on senior/pref issuance, and whether the GP has actually done this in prior deals (check sibling Form Ds and trade press). A deal can exit "successfully" and still wipe common equity if the stack was re-ordered ahead of it.

### Custody and controls

Third-party escrow vs. wires to a GP-controlled deal account (third-party escrow is *not* the norm in private syndications — flag the structural default and ask what segregation exists instead); dual-authorization on withdrawals above a threshold; external audit of the deal account; segregation of duties among principals (one principal with sole signing authority let a fraud run unchecked); and a key-person trigger on principal departure. For **solo-GP deals, single signing authority is a FATAL-level concern** (ties to §7's solo-vs-team risk).

## 3. Conflicts and captive structures (follow the money)

This is its own bucket because it is the single most common decline pattern:

- **Ultimate counterparty.** Who actually receives the LP's capital? If the fund lends to, buys from, or finances an affiliate of the sponsor, the "fund" is a captive financing vehicle for the sponsor's operating business. Ask: would this capital deployment exist but for the affiliation?
- **Fee layers.** Count every layer between the LP and the underlying asset (feeder → master → operator each taking fees). Verify all layers are disclosed, not just the top one.
- **Cross-fund allocation.** A sponsor running multiple concurrent vehicles feeding one pooling entity, or Fund I/II/III raising simultaneously, has real (not hypothetical) allocation conflicts. Note whether the LPA addresses allocation methodology at all.
- **Affiliated service providers.** Transfer agents, administrators, placement platforms, construction managers, property managers, loan servicers owned by the sponsor — list each and its compensation.
- **Affiliate transactions.** Pre-approved, disclosed, subject to LPAC review, or unilaterally permitted?

### Fund-investment parallel track (when the offering is a fund, not a direct deal)

When the LP invests in a fund rather than a direct syndication, *the fund is the deal* and the GP's selection / servicing / workout capacity is the diligence target — "investing in the bank is not the same as being the bank." Check: fund-level leverage (leverage on leverage); self-dealing latitude (can the GP lend to / invest in its own projects "per the documents"?); loan-tape / holdings transparency and cadence (or are the holdings undisclosed?); the **permitted** (not "typical") max LTV / min DSCR / collateral floor and the exception clauses that allow deviation; for debt funds, the **portfolio's average and max LTV and its basis** (current value vs. ARV vs. capitalization) and the **first-position %**; loan-loss reserves vs. the strategy's benchmarked default/loss rate; geography concentration limits; cumulative-pref arrears incentives (catch-up pressure → riskier loans); gating triggers and any cap on gating duration (an evergreen "marriage with no divorce"); key-person provisions; and lending-cycle position (a fund raised at peak capital abundance is riskier than the same fund raised at scarcity).

## 4. Liquidity and capital mechanics

- **Open-ended / evergreen vs. closed-end.** Open-ended funds shift control over return-of-capital timing to the Manager.
- **Lock-up.** Note duration.
- **Redemption gates.** Percentage cap; fund-wide or per-investor; reset frequency; Manager override discretion.
- **Distribution discretion.** Mandatory pref vs. "at the Manager's discretion." Discretion turns the pref into an aspiration.
- **NAV and valuation mechanics.** Third-party valuation agent, or Manager-computed "in good faith"? Manager-set NAV that also serves as the redemption-gate denominator is a structural conflict.
- **Redemption price formula.** If redemption price = invested capital + accrued unpaid pref, the pref is the LP's **maximum** outcome, not a floor — 100% of upside goes to the sponsor or a captive class. This is the most overlooked structural issue and belongs on page one whenever true.
- **Put/redemption funding.** If LPs hold a future put right (e.g., year-5), is it funded or merely promised?
- **Transfer rights.** Almost always restricted; note unusual conditions.
- **Redemption-run and asset–liability mismatch (lender lens).** Read the liquidity terms as a creditor would: if investors can redeem on short notice while the assets are long and illiquid, what happens in a redemption wave? Is there a *committed* liquidity facility behind the redemption right, or only best-efforts cash? An evergreen fund offering quarterly liquidity against multi-year loans or development assets, with no committed backstop, carries duration risk that the gates merely defer — surface it even when the gate language is "market."
- **Capital-call risk — bridge or black hole?** Is a capital call contemplated in the OA, and what are the dilution/penalty mechanics for a non-participating LP? Thin reserves against a thin DSCR/expense cushion are the usual trigger. A capital call does not by itself mean the GP is irresponsible — evaluate each on amount, use of funds, viability after the infusion, dilution ratio, alternatives considered (rescue capital, pref, mezz), and the GP's own co-funding. Trace how project-life cash flow converts to LP return vs. loss, not just the headline multiple.
- **Break-even rate vs. rate-cap gap.** For floating-rate deals with a cap: at what rate does DSCR hit 1.0×? The break-even rate must be ≥ 100–200bps *below* the cap, under simultaneous NOI stress — if break-even ≈ cap, the deal is structurally designed to fail the moment the cap is hit (one total loss had break-even 4%, cap 6%; NOI rose 35%, debt rose 60%, equity went to zero).

## 5. Debt instruments (run this branch when the security is a note, not an LP interest)

- **Secured or unsecured.** If unsecured: say so in the first line of the memo. What stands between the investor and sponsor default?
- **Subordination.** To what? Bank debt, other note classes, future borrowings?
- **Collateral and perfection.** Is a security interest granted, and is it perfected? Run a UCC search on the issuer and the named collateral.
- **Trustee / indenture.** Is there a trustee, an indenture, any covenant package — or a bare bilateral note?
- **Guaranties.** Personal or corporate guaranties — and the guarantor's actual capacity (a guarantor with an outstanding multi-million-dollar judgment is anti-collateral).
- **Coupon coverage.** What cash flow services the coupon today, and is any of it offering proceeds (see §1)?
- **Rate consistency.** The note's stated rate must match the PPM and deck (see §0.5).
- **Upside split.** On a fixed-coupon note, the sponsor keeps 100% of upside. Make that explicit for the IC.
- **Hedge specification.** If the deal carries a rate cap, swap, or collar, the PPM must specify instrument type, strike/cap level, notional, tenor, counterparty, and mark-to-market — "hedging is in place" is insufficient. A rate cap is not a rate lock: even capped, the effective rate can run well above underwriting, so stress the deal at **cap-level rates, not current rates** (see the §4 break-even-vs-cap gap).
- **Debt-fund-as-LP.** For a debt *fund* (not just a single note), apply the §3 fund-investment parallel track — portfolio LTV and its basis, first-position %, loan-loss reserves, lending latitude, and (for evergreen/semi-liquid funds) redemption-gate fragility in a withdrawal wave. The lender-to-the-fund lens is the deepest form of this; apply it to every debt fund, not just single-note offerings.

## 6. Strategy and asset-class risk

- **Cash-flow profile.** Operating income (rents, royalties) vs. pre-cash-flow (raw land, development, build-to-sell, litigation/receivables recoveries). A high pref on pre-cash-flow or binary-outcome assets is structurally demanding — check whether marketing describes binary recoveries as "secured" or "stable."
- **Leverage.** Maximum LTV, recourse vs. non-recourse, cross-default and cross-collateralization — including leverage that exists at the asset or SPE level but is absent from the deck.
- **Guaranties.** Whether the Manager or affiliates provide bad-boy, completion, or repayment guaranties — and whether the Fund indemnifies them out of fund assets in distress.
- **Macro fit.** Is the strategy in or out of favor for the cycle? Compare the implied required gross return (pref + fees + carry + overhead) to current market comparables. Check whether the market thesis is stale (written for conditions that no longer hold) or the sector is in oversupply.
- **Concentration.** Single-asset, single-sponsor, single-geography, single-counterparty exposure.
- **Projected-return marketing vs. underwriting.** Prominent target IRR/ROI figures splashed across the deck (e.g., "22–28% IRR / 86–110% ROI") for a blind-pool or pre-cash-flow strategy, with no supporting underwriting, comparable transactions, or basis in the offering documents, is a marketing-vs-reality finding — not a return assumption you can rely on. Flag the projection, push the underwriting (assumed timelines, approval probabilities, exit pricing, comps) into the questionnaire, and never let a deck IRR migrate into the memo as if it were diligenced. Be doubly skeptical when the same materials describe a speculative, illiquid, binary-outcome asset as "low-risk," "stable," "asset-backed," or "capital preservation."

### Stacked stress test

The pro forma must show performance under interest-rate + cap-rate + vacancy + OpEx shocks *simultaneously*, not one at a time. A deal that survives any single shock but dies under stacked stress is structurally fragile (a "conservative" 20%-vacancy break-even that ignored the other layers; NOI +35% with debt +60% = 100% equity loss). Execution cannot save a structurally fragile deal.

### Cycle position (two cycles)

Where are we in the two cycles that matter: (1) the **supply/demand** cycle (deliveries vs. absorption in the submarket) and (2) the **liquidity** cycle (the lending environment — rates, availability, terms)? A deal raised at peak optimism in both, or one that could not have been financed in a normal-rate environment, is structurally suspect regardless of terms. Tag `[MARKET]`.

### Development and construction risk (ground-up deals)

Permitting-timeline risk (municipal delays are the norm, not the exception), soil/environmental surprises, supply-chain exposure, inspection and utility/electrification delays — and reserves sized to *interest-rate* stress, not just lease-up stress (one deal's 11 months of reserves covered only 12 months because debt interest, not lease-up, was the drain).

### Covenant-call risk

A lender can **call a performing loan** on a DSCR or LTV covenant breach when a value decline raises the effective LTV — current payments do not protect you. Confirm the LTV **basis** (purchase price vs. ARV; a high-ARV-basis loan finances value not yet recognized), and for floating-rate debt remember the killer is the rate *moving*, not its level at close. Flag the covenant package, the breach triggers, and the cure period.

### Anchor-tenant / single-counterparty risk

A business plan that depends on a single anchor tenant — especially a seller-leaseback where the seller can walk — has a different risk profile than a multi-tenant deal, and is rarely surfaced as such in PPMs. Treat it as a deal-killer when the plan has no viable pivot.

### Asset optionality `[STRENGTH]`

An asset with credible alternative uses (powered land for data centers, residential conversion) is *less* risky than one whose only use is the stated plan. Value the optionality, not just the base case — it is a `[STRENGTH]`, and it has rescued otherwise-failing deals.

## 6.5 Pro-forma vs. historical-range stress test (the Risk Radar)

Run this **only when the offering includes a pro forma or projected operating model** (most RE equity / value-add / development; partial for debt funds). Skip it for registered interval funds, pure note programs, and other offerings with no LP-facing operating projection — and note that it was skipped and why. After terms are pinned (§0.5) and before current-market benchmarking (§10), plot every pro-forma assumption against its ~50-year historical range for the deal's submarket and asset class. A deal whose assumptions cluster at the outer edge of that range is structurally fragile regardless of how it compares to *current* comparables — the market reverts to the mean. §10 benchmarks against today; §6.5 benchmarks against history; in a peaked market §10 says "within market" while §6.5 says "at the outer edge of history" — the combination is the signal. Adapted from Christine Kwasny's Risk Radar (*Net Zero is a Win* / PassivePockets, 2026), tested retrospectively against five prior deals.

**Inclusion criterion.** A metric earns a spoke only if it can *kill a deal*, not merely reduce returns. Fee drag is excluded here (it makes you poorer; it does not cause insolvency) — it lives in §1/§10.

**The 17 spokes, by mutability zone.** The numeric bands below are *illustrative multifamily defaults* — starting points only. Override with submarket- and asset-specific data every time, and do not apply them to non-RE-equity offerings.

*Zone 1 — Locked at closing (walk or accept):*

| Spoke | Higher risk (outer) | Lower risk (inner) |
|---|---|---|
| GP tenure *as a team* | < 5 yrs | 20+ yrs |
| GP expertise fit (strategy + asset + submarket) | off-strategy / out-of-submarket | on both |
| GP "cockroaches" (litigation / regulatory / failed deals) | **any** credible negative mark | clean |
| Purchase (going-in) cap rate | < 4% | > 6% |

*Zone 2 — Sponsor-driven (monitor / negotiate):*

| Spoke | Higher risk | Lower risk |
|---|---|---|
| Debt term | freely floating | fixed through hold |
| DSCR (life-of-project) | 1.2–1.5× | 2.0–2.5× |
| LTV (state the basis) | > 70% | < 60% — and LTV-on-ARV is riskier than on purchase price |
| Expense ratio vs industry avg | **below** avg (counterintuitive) | at/above avg |
| Reserves (months DS at stress) | minimal | 12+ months at +200bps |
| Senior layers ahead of you | many / GP can add more | few / capped |
| Waterfall alignment | straight split, no pref | pref + catch-up + clawback |

*Zone 3 — Market-driven (hedge / accept) — the orientation principle:* for all six, **assuming you will outperform the historical average in perpetuity is the high-risk position.** The test is not "is this number achievable?" but "is it sustainable against the historical range?"

| Spoke | Higher risk |
|---|---|
| Assumed exit cap rate | below avg (requires compression) |
| New deliveries % assumed to persist | low supply assumed to continue |
| Absorption assumed | above avg in perpetuity |
| Income / rental rate | above market avg |
| Income growth YoY | above historical avg |
| Vacancy | below market avg |

**How to score.** (1) For each spoke, gather the pro-forma value and the historical high/low/avg for this submarket + asset class — pull the historical series with available tools/web data (don't take the deck's numbers); cite source + vintage; never estimate (say "no usable series" if absent). (2) Plot the value; flag any spoke at the outer ring and tag it by zone (`[LOCKED]`/`[SPONSOR]`/`[MARKET]`). (3) **If 2+ spokes sit at the outer ring simultaneously, escalate the recommendation one tier** — a deal can be fragile even when each single assumption looks "achievable." (4) For market-driven spokes, require the GP to justify any outperformance with a concrete, evidenced mechanism — not "we're better operators." (5) Pull any outer-ring assumption into the Uncertainty Map (§11) and the questionnaire.

**Two cross-references.** The waterfall spoke is the *inverse* of the §4 pref-as-ceiling check: §6.5 flags the **absence** of a pref (straight split → no obligation to return LP capital before promote = misalignment); §4 flags pref-*as-ceiling* (capping LP upside). Both directions are real. And §6.5 does not replace §10 (current-market terms) or §6 (qualitative strategy) — it is the historical-range quantitative test that sits between them.

## 7. Sponsor, principals, and track record

- **Registration status.** RIA (state or SEC), ERA, or neither — and **verify any claimed registration on IAPD**. A false claim is fatal and reportable.
- **Exemption coherence.** Does the claimed Investment Company Act exemption match the subscription documents? A 3(c)(7) wrapper requires Qualified Purchaser reps; their absence means the exemption fails. Likewise 506(b) vs. 506(c): does the verification procedure match the exemption claimed?
- **Public profile.** Look up the sponsor's other businesses. A sponsor whose primary public business is education / coaching / a "guru" platform raises a coach-promoter concern; a sponsor whose primary business is construction, payments, or fintech-platform operation (i.e., anything other than investment management) means the fund is a sideline or a captive.
- **Principal-level checks — not just the entity.** For each named principal: state and county court dockets, foreclosure and judgment searches, UCC filings, personal bankruptcies, prior failed deals, personal guaranties outstanding. The entity is usually clean because it's new; the principals are where the history lives.
- **Operational footprint.** Sanity-check the business address (registered agent vs. real office vs. residential/rental address), web-domain age, and stated employee count. Subscription checks mailed to a house are a finding.
- **Track-record attribution — three questions.** (1) Same *entity*? (Team members' records at prior employers are not the fund's.) (2) Same *team*? (3) Same *strategy*? (An operator's storage record does not cover retail conversion; a sponsor's own operating contracts are not originated loans.) "First-time fund with experienced-sounding marketing" is the most common dodge.
- **Operating-company-affiliate dodge.** A specific, common variant of the attribution problem: a brand-new fund GP is presented as the "private-equity arm" / "capital arm" of an established (often family) operating business, and the deck borrows the operating company's decades-long, deal-by-deal *gross* brokerage/development record as if it were the fund's net-of-fee performance. It usually fails all three questions: different entity (operating co ≠ fund GP), the operator who earned the record may not even be named in the PPM's management exhibit (often only the capital-raiser is), and an own-account development/brokerage record is not a record of managing outside LP money in a pooled fund. Demand fund-level, net-of-fee, third-party-verified returns; treat the operating company's self-reported deal sheet as marketing, not a track record. Always EDGAR-search the principal and any prior same-name fund vehicle — a sibling fund that raised $0 sits directly behind a "first time / proven track record" claim.
- **Prior and parallel funds.** Number of vehicles, vintages, sizes, status, audited or not; simultaneous raises create allocation conflicts (§3).
- **Litigation, regulatory action, "Bad Actor" history.** BBB, FINRA BrokerCheck, IAPD, state securities regulators, and web search.

### GP co-invest vs. promote ratio

Compute GP co-investment (% of total capitalization) against GP promote (carried-interest %). A few points of spread is normal; **co-invest < 1% with promote ≥ 15% is a structural misalignment** — escalate to FATAL or a mandatory ASK with a documented explanation (one fraud case ran < 0.05% co-invest against a 20% promote).

### Extended-team tenure

Check not just GP-principal tenure but the tenure of the **execution ecosystem** — architect, general contractor, property manager, key vendors. Long-standing relationships reduce execution risk; a newly assembled team is a risk factor even when the principals are experienced.

### Solo GP vs. team — two-sided risk

A *solo* GP carries succession **and** fraud risk (one person signing checks, no oversight) — for solo GPs, dual-signature requirements on deal accounts are FATAL-level (ties to §2 custody). A *team* carries partnership-breakup risk ("principals divorced"); check how long they have actually worked together and whether that includes a downturn.

### Cross-portfolio distress check

Search CMBS servicer reports, deed-in-lieu filings, and trade press for distress on the GP's *other* deals — a sponsor can be visibly distressed across its portfolio *during* a raise in data a family office can access even when retail LPs cannot.

### The "Roaches" rule

**One credible negative mark is a stop sign, not a data point.** A spotless record is the best predictor of reliable service; where one verified red flag surfaces (litigation, regulatory action, a soured prior deal), assume there are more you cannot see and raise the bar accordingly — do not average it away.

## 8. EDGAR / Form D reconciliation (do all five checks, not just the first)

1. **Existence and timing.** A Form D must be filed within 15 days of first sale. **No Form D on EDGAR despite a closing that already occurred is a Reg D compliance failure** — a different and worse finding than a slow raise.
2. **Raise vs. target.** Compare actual capital raised and investor count to the marketed offering size. A target 50× actual is failing or aspirational; $0 raised contradicting "successful prior funds" claims is FATAL.
3. **Amendments.** A Form D/A is required annually for continuous offerings. A stale, never-amended filing means either the offering died or compliance lapsed.
4. **Sales compensation (Item 12).** Reconcile disclosed recipients and amounts against marketed finder/commission tiers. Marketing tiers exceeding the PPM's stated cap, or paid to unregistered finders, are findings.
5. **All sponsor entities.** Search EDGAR by principal and sponsor name, not just the fund's CIK. Sibling vehicles' Form Ds reveal the sponsor's real fundraising history (and contradictions with marketing claims like "our third successful fund").

Also check state blue-sky filings where practical.

## 9. Tax exposure

- **Phantom income.** Note explicit phantom-income disclosures.
- **K-1 timing.** Commitment (or lack thereof) to deliver K-1s before April 15.
- **UBTI / ECI.** Material for tax-exempt and non-U.S. investors; note Fractions Rule / VCOC / REOC commitments.
- **REIT election.** Whether the Manager can convert mid-fund without LP consent.
- **Marketing tax claims vs. mechanics.** Verify any tax pitch against the actual rules — e.g., a depreciation/loss pitch to passive LPs that omits IRC §469 passive-activity-loss limits, or unverified bonus-depreciation and QOZ claims. A tax benefit the typical investor cannot actually use is a marketing misrepresentation.
- **State filings.** Note multi-state filing burden and whether composite returns are filed.

## 10. Benchmarking calibration (calibrate the headline terms against market)

The rubric judges; this step **calibrates**. After the terms are pinned down, compare each headline
term against a current, fund-subtype-and-size-specific industry benchmark and present the result as a
table in the CIO memo. Full source list and discipline in `references/benchmarking_sources.md`.

Benchmark at least: target/net return, management fee (rate + basis), carried interest + hurdle, GP
commitment, leverage, liquidity (lock-up/gates), preferred return, valuation frequency, and — for
credit funds — loan term and default/loss rate. Table format:

| Metric | This Fund | Industry Benchmark | Source | Comparison |
|---|---|---|---|---|
| [metric] | [from the documents] | [from the benchmark] | [e.g., PitchBook Q1 2025] | [within range / above / below market — and whether that favors the investor] |

Discipline: pull "This Fund" from the §0.5 reconciliation matrix (controlling document's figure; note
disagreements); use the fund's *specific* subtype; **never estimate a benchmark** — if a subtype
benchmark is unavailable, state the benchmark used, why, and how it differs, or say "no usable
benchmark." Cite each source with its vintage. Below-market terms that favor the investor (no carry,
low fee, high GP commitment, conservative leverage) also earn a `[STRENGTH]` tag; above-market
extraction feeds the FATAL/NEGOTIABLE findings. Calibration never overrides the rubric: a *market*
fee paid to a captive affiliate that owes no fiduciary duty is still a finding.

## 11. Uncertainty map (what's ambiguous, where, and what to ask)

Close the analysis with a scannable, citation-anchored grid of every place the documents are vague,
silent, conflicting, or interpretation-dependent. It is the internal companion to the outward sponsor
questionnaire: the questionnaire is the polite letter to IR; the uncertainty map is the IC's at-a-
glance index of open risk. Goes as an appendix table in the CIO memo:

| Area of Uncertainty | Description | Document & Location | Suggested Follow-Up |
|---|---|---|---|
| [topic] | [what is vague / missing / conflicting] | [e.g., LPA §5.4, p. 17] | [the clarification or question for the manager] |

Anchor every row to a specific document and section/page. Anything material here should also be
mirrored as an `[ASK]` in the memo body and as a numbered question in the sponsor questionnaire.

## 12. Post-close monitoring protocol

The highest-signal failure modes in the deal corpus surfaced *after* funds were collected, in the
**reports** — not the PPM. This section is the protocol the LP adopts as a condition of investing, plus
the reporting/audit rights to demand pre-close. For registered '40-Act funds much of this is supplied
by the Investment Company Act apparatus — note that and scope down.

**Pre-close, confirm the documents grant:** quarterly reporting (rent roll / loan tape, T-12, P&L,
balance sheet, cash-flow waterfall, capex, narrative) within ~60 days of quarter-end; audited annual
financials within ~120 days of year-end; and LP audit / information rights. Absence of these
reporting/audit commitments is itself a finding.

**Report-content red flags (any one → LP letter to the sponsor):**

- Narrative-over-numbers — performance described without the standard financial package.
- Period-over-period figures that do not tie.
- Cadence slip > 30 days with no credible explanation; any gap > 1 quarter is a FATAL-level signal.
- **Distribution-vs-NOI mismatch** — distributions exceeding free cash flow mean they are funded from
  reserves or new capital, not operations. This is the test that exposed the Ripley fraud.

**Closing-delay monitoring.** A deal-modification or closing delay > 60 days *after* funds are
collected should trigger a demand for return of funds, not passive acceptance (the Nightingale fraud
window).

**Memo output.** Add a "Post-close monitoring commitments" line to the CIO memo stating the cadence the
LP expects, the red flags it will watch, and the action it will take — signaling the IC is not passive
post-close.

## Findings that should always go on page one of the CIO memo

1. The fee structure is undisclosed — or fully disclosed and quantified, with the aggregate load computed and a worked example.
2. The business plan is delivered as a formal exhibit to the PPM (or it is not).
3. The pref is the LP's maximum outcome, not a floor (or the LP shares in upside).
4. A Form D exists, was filed on time, and reconciles to the marketed raise and closing status (or it does not).
5. Key economics (rate, fees, target, security) are consistent across every document in the set (or they contradict).
6. The fund is not a captive financing vehicle for the sponsor's affiliates (or it is, and every fee layer is mapped).
7. The track record belongs to this entity, this team, and this strategy (or it does not).
8. For notes: the instrument is secured and perfected (or it is unsecured, stated in the first line).
9. The sponsor's primary business is investment management (or something else).
10. The headline economics (fee, carry, pref, GP commitment, leverage, liquidity) sit within, above, or below current market — benchmarked against a cited source (§10).
11. The pro-forma assumptions sit within their historical range, not clustered at the outer edge (or they do not) — Risk Radar §6.5; 2+ outer-ring spokes signal structural fragility regardless of current-market benchmarking. *(Only when the offering carries a pro forma.)*
12. The break-even interest rate is at least 100–200bps below the rate cap (or the deal is structurally designed to fail at the cap).
13. The OA does not let the GP change the capital stack without LP consent (or it does — pref/senior-class issuance, added debt, rescue-capital subordination).
14. A post-close monitoring protocol exists or the LP is adopting one (cadence, content baseline, red-flag triggers, action plan).

If any of these flips negative, the deal is unlikely to clear a family-office IC without remediation. Two or more: decline. (Benchmarking calibrates the others — an above-market term hardens a finding; a below-market, investor-friendly term is a `[STRENGTH]`, not a pass on the rest.)

---

## Changelog

- **v2.3 (2026-06-23)** — Integrated *Net Zero is a Win* / The Debrief (Christine Kwasny — the Risk Radar, ten deal autopsies, and the Heuristics pro-forma series) plus the PassivePockets Risk Radar interview. (1) **§6.5 Pro-forma vs. historical-range stress test** — the 17-spoke Risk Radar across three mutability zones, the orientation principle (for market-driven spokes, assuming perpetual outperformance of the historical average is the high-risk position), and the "must be able to kill a deal" inclusion criterion; numeric bands are illustrative RE-equity defaults to override with submarket data, and the section runs only when the offering carries a pro forma. (2) **§12 Post-close monitoring protocol** — reporting/audit rights to demand pre-close and the report-content red flags (esp. the distribution-vs-NOI mismatch test) that surfaced the corpus's frauds. (3) Extensions: **§0.5** marketing-claim reconciliation; **§1** math-integrity + return-presentation integrity (defined exit + IRR, ROI-vs-IRR reconciliation, refi-as-ROC, luck-vs-skill); **§2** capital-stack constraints + custody/controls; **§3** fund-investment parallel track; **§4/§5** break-even-vs-rate-cap gap + hedge spec + capital-call bridge/black-hole + debt-fund-as-LP; **§6** stacked stress, two-cycle position, development risk, covenant-call risk, anchor-tenant, asset optionality; **§7** co-invest-vs-promote ratio, extended-team tenure, solo-vs-team risk, cross-portfolio distress, the "Roaches" one-mark rule. (4) A **Mutability** analytical lens and a per-finding `[LOCKED]`/`[SPONSOR]`/`[MARKET]` zone tag (no separate deal-killer/return-reducer tag — that distinction lives in the §6.5 inclusion criterion and the finding text). (5) An **"Accredited ≠ astute"** preface guardrail; a **"Knowingly Accepted Risks"** CIO-memo section and a confidentiality/NDA operational note both added in SKILL.md. (6) Four new page-one findings (11–14). §6.5 stress-tests assumptions, §10 benchmarks terms — both complement the rubric's judgment, neither replaces it.
- **v2.2 (2026-06-22)** — Adopted four ideas from the Kirkland Capital Group "AI Due Diligence Prompt for Private Fund Investors": (1) an **Analytical-lenses** preface — read every bucket through Fund Counsel / Prospective Investor / **Lender-to-the-fund** viewpoints, the last applied to all funds (not just notes), with redemption-run and asset–liability-mismatch questions folded into §4; (2) **§10 Benchmarking calibration** — calibrate headline terms against current, cited industry benchmarks (ILPA 3.0, PitchBook, Preqin, McKinsey, StepStone; see `benchmarking_sources.md`) in a memo table, with a never-estimate discipline; (3) **§11 Uncertainty map** — a citation-anchored appendix grid of ambiguous/missing/conflicting terms, companion to the questionnaire; (4) a tenth page-one finding (headline economics benchmarked vs. market). Our authenticity gate, reconciliation matrix, and external-diligence posture are retained — benchmarking calibrates, it does not replace the rubric's judgment.
- **v2.1 (2026-06-12)** — Lessons folded in from the Lansing Land Development Fund I review: (1) carry the FATAL/NEGOTIABLE/ASK/STRENGTH tiers into the memo as visible per-finding labels with a legend and tally, and flag NEGOTIABLE-items whose status depends on curing a related FATAL; (2) §2 — added the per-LP "Carry/Management-Fee Adjustment" secret-side-letter mechanism and the "illusory safeguard" pattern (PPM cites an advisory committee/approval the LPA nullifies); (3) §7 — added the "operating-company-affiliate dodge" (new fund GP borrowing an affiliated operating business's gross deal record) and the reminder to EDGAR-search for a prior same-name fund vehicle that raised $0; (4) §6 — added "projected-return marketing vs. underwriting" (deck IRR/ROI with no documentary basis, especially when paired with "low-risk" framing of a binary asset).
- **v2** — Added the document-authenticity gate (§0), cross-document reconciliation matrix (§0.5), conflicts/captive bucket (§3), debt-instrument branch (§5), the five-check EDGAR reconciliation (§8), and the page-one findings list.
