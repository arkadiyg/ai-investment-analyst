# PPM Review Rubric (v2.6)

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

## The first-five-minutes screen (fast-reject before the deep walk)

The full rubric is a walk-every-section discipline, but an allocator's **default answer is always no** — there is always another deal, and a false decline costs a missed deal while a false accept costs wiped capital. Before the deep walk, run a fast-reject pass; a deal that fails here can be declined on a page-one note without spending the full review. Auto-disqualifiers (these are RE-equity defaults — calibrate the numbers to the asset class):

- **Implausible operating efficiency.** An NOI margin above ~65% (expense ratio below ~35%) on operating real estate is not achievable at scale — the underwriting is fabricated or aspirational (ties to §1's expense-ratio check).
- **Exit cap ≤ going-in / current-market cap.** An exit cap at or below the entry cap assumes perpetual compression; it is a spreadsheet lever, not an assumption (see §6.5).
- **No sensitivity analysis at all.** A single deterministic case with no downside sensitivity is marketing, not underwriting.
- **Debt that does not match the business plan.** Loan term/maturity shorter than the hold, floating rate under a multi-year value-add, or a balloon inside the plan window (see §4/§5).
- **No sources-and-uses table** (see §1).
- **Deck is all market, no deal.** When ~80% of the deck sells the *market* (population growth, "path of progress," city accolades) and little describes *this* asset's economics, treat it as a tell — any market looks good on paper. Demand deal-level substance before proceeding.

Passing the screen earns a deal the full walk below; it does not earn it any presumption of quality.

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
- **Yield-on-cost vs. market cap rate (the development spread) — and untrended.** Compute yield-on-cost = stabilized NOI after the business plan ÷ all-in project cost (purchase + closing + capex), then compare it to the current market cap rate for the *stabilized* asset. The gap is the development spread — the value actually created. If yield-on-cost ≈ market cap rate, no value is created no matter how much is spent "making it prettier," and the value-add label is cosmetic. Size the required spread to the risk/capital-intensity of the plan (~200bps for a deep repositioning; ~75bps for a light paint-and-cabinets refresh). **Run it untrended** — at today's achievable rent for the improved unit, not rents inflated 3–4%/yr into years 2–3. A deal that only clears on *trended* rents is riding market growth, not execution.
- **IRR partitioning — cash flow vs. terminal sale.** Decompose the projected return into the share from interim cash flow and the share from the exit. A return ~90% dependent on the terminal sale requires everything (exit cap, rent growth, hold-period liquidity) to break right and is far more fragile than a cash-flow-weighted return — the sale price 5–7 years out is unknowable while operating cash flow is tangible. Report the split; treat a heavily sale-dependent return as a risk finding, not a neutral fact.
- **The six IRR-juicing levers — check each.** The headline "big three" (cash-on-cash, equity multiple, IRR) tell you what you might *earn*, never what you might *lose*. A conservative ~13% IRR can be juiced to ~25% by moving any of six inputs: (1) a lower exit cap, (2) more leverage, (3) a shorter hold, (4) higher rent growth, (5) more aggressive expense treatment, (6) a refinance baked into the base-case model. Interrogate each against §6.5's historical range and §10's market benchmark. A refinance assumed *inside* the underwriting period (distinct from cash-out-refi distributions, which are return of capital) is a return-inflation lever, not a plan.
- **Named downside metrics — breakeven occupancy, economic vacancy, default ratio.** The pro forma should expose what you *lose*, not just what you earn: **breakeven occupancy** (the occupancy floor that covers all operating expenses + debt service — the closer to 100%, the less wiggle room) and **economic vacancy** decomposed into its five parts (physical vacancy, loss-to-lease, concessions, bad debt, and non-revenue/model/down units), not one blended "vacancy" number. For operating deals also check the **default ratio** (tenants in default ÷ total) as a read on property-management quality. A pro forma that hides these behind a single headline vacancy assumption is under-disclosing risk.
- **Rent-affordability sanity check.** Cross-check projected rents against local incomes: a rule of thumb is median household income ÷ 36 (≈ one-third of gross income ÷ 12) as the maximum a typical resident can afford. Projected post-renovation rents materially above that ceiling are aspirational — the demand to support them may not exist at that income level.
- **Exit NOI must reflect the next buyer's taxes.** A common exit-price inflation trick is to compute the sale price off an NOI that ignores the property-tax **reassessment the next buyer will face** — and to ignore the reassessment on *this* buyer at purchase. Confirm both the going-in and exit NOI carry reassessed taxes; an exit built on pre-reassessment NOI overstates the sale price.

## 2. Governance and LP protections

- **Voting.** Class A / LP voting rights — usually none. Check whether LPs can remove the Manager (and on what trigger), amend the LPA, or approve affiliate transactions. "Class B can never remove the Manager" or cause-only removal at a 75% threshold is a structural FATAL for a first-time sponsor.
- **Removal for cause.** "Cause" is often defined extremely narrowly (criminal conviction, Bad Actor disqualification only). Performance, fiduciary breach, gross negligence, and key-person events should ideally trigger removal too.
- **Fiduciary waivers.** Flag full fiduciary-duty waivers and any class structure where a captive affiliate class disclaims fiduciary duty to the investor class.
- **Drag-along / tag-along.** Drag held by the Manager with no LP consent is normal but worth flagging. Tag should be unconditional.
- **Indemnification and exculpation.** Look for the carve-outs (knowing violation of law, willful misconduct, improper personal benefit). Check if indemnification can claw back LP distributions.
- **Side letters / MFN.** Note whether the Manager can grant superior terms secretly and without bound, and whether an MFN is offered. Unbounded secret side letters are FATAL. Watch for the specific mechanism of per-LP "Carry Adjustment" / "Management Fee Adjustment" clauses that let the Manager raise, reduce, or waive a given investor's economics "without the consent of, or notice to, any other Limited Partner" — that is a secret side letter written into the key terms.
- **Illusory safeguards.** A protection the PPM advertises but the LPA nullifies. The classic tell: the PPM conditions affiliate fees or major actions on "Advisory Committee approval," while the LPA's Schedule states "there shall be no advisory committee for this Fund" (or the body is never actually constituted). The same pattern appears with referenced LP consent rights that a later clause waives. Treat a safeguard pointing to a non-existent body as worse than silence — it is affirmatively misleading — and FATAL when it guards a material conflict.
- **Preferred-equity subordination — and quantify what sits ahead of common.** Whether later capital can subordinate Class A in the waterfall. For common equity, compute the share of distributable cash flow that senior debt + preferred equity must be paid *before* common receives anything: e.g., a "conservative" 65% LTV plus a 25% pref raise leaves ~90% of the stack ahead of you. A modest LTV can still leave common deeply subordinated once pref is layered in.
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
- **Cross-entity co-mingling.** For a sponsor running multiple vehicles, check whether fund cash can be co-mingled with — or lent to — the sponsor's other entities. Using one fund's cash to prop up another distressed deal is a recurring fraud mechanism, distinct from the §2 within-deal custody controls; require entity-level segregation and independent verification of it.

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
- **Broken-deal / failed-raise capital treatment.** Read the documents for what happens to already-wired LP capital if the raise falls short or the deal fails to close: is it promptly returned, held (interest-free) for the sponsor's *next* offering, or used to cover the sponsor's unrecoverable pursuit costs? Confirm who absorbs dead-deal expenses (earnest money, legal, third-party reports). Silent or sponsor-favorable treatment — capital retained or repurposed without LP consent — is a NEGOTIABLE-to-FATAL finding, and the risk of loss "if fundraising cannot be completed" belongs in the memo.

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
- **Exit friction — prepayment penalty, yield maintenance, defeasance.** What does it cost to get out early or refinance? A yield-maintenance or defeasance provision can trap the deal in the loan through a downturn and negate a mid-hold refinance the pro forma assumes; a *no-prepayment-penalty* term (e.g., recourse debt that lets the sponsor refinance into agency debt on plan) is a `[STRENGTH]`.
- **Distribution-restricting covenants.** Lender covenants that suspend LP distributions on a DSCR/LTV trigger or sweep cash affect the LP's realized return more than rent-growth assumptions do — read the covenant package for cash-flow sweeps and distribution lockouts, not just default triggers (ties to §6's covenant-call risk).
- **Recourse vs. non-recourse — and recourse as alignment.** Non-recourse is the sponsor's default preference (the asset stands alone; the lender cannot pursue the balance sheet). A sponsor who accepts *recourse* debt to win a lower fixed rate, a longer term, or no prepayment penalty is putting personal balance sheet behind the asset — real skin in the game and a `[STRENGTH]`, not a risk. Bridge/floating-rate non-recourse debt on aggressive assumptions is the opposite end and the single most common path to 100% common-equity loss.
- **Debt-fund-as-LP.** For a debt *fund* (not just a single note), apply the §3 fund-investment parallel track — portfolio LTV and its basis, first-position %, loan-loss reserves, lending latitude, and (for evergreen/semi-liquid funds) redemption-gate fragility in a withdrawal wave. The lender-to-the-fund lens is the deepest form of this; apply it to every debt fund, not just single-note offerings.

## 6. Strategy and asset-class risk

- **Cash-flow profile.** Operating income (rents, royalties) vs. pre-cash-flow (raw land, development, build-to-sell, litigation/receivables recoveries). A high pref on pre-cash-flow or binary-outcome assets is structurally demanding — check whether marketing describes binary recoveries as "secured" or "stable."
- **Leverage.** Maximum LTV, recourse vs. non-recourse, cross-default and cross-collateralization — including leverage that exists at the asset or SPE level but is absent from the deck.
- **Guaranties.** Whether the Manager or affiliates provide bad-boy, completion, or repayment guaranties — and whether the Fund indemnifies them out of fund assets in distress.
- **Macro fit.** Is the strategy in or out of favor for the cycle? Compare the implied required gross return (pref + fees + carry + overhead) to current market comparables. Check whether the market thesis is stale (written for conditions that no longer hold) or the sector is in oversupply.
- **Cap-rate spread vs. the risk-free rate.** Compare the going-in cap rate to the 10-year Treasury: the spread is the compensation for taking real-estate risk over risk-free. Historically ~150–250bps by asset class; a cap rate sitting on or near the 10-year means the LP is not paid for the incremental risk — a peaked-market tell that argues for holding cash. This macro compensation gauge complements §6.5 (historical range) and §10 (market terms).
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

### Insurance and catastrophe-risk adequacy

PPMs rarely foreground insurance, yet it is both a live expense-underwriting risk and a coverage risk. Check: does the location carry catastrophe exposure (wind/hail, flood, wildfire, quake) the pro forma's insurance line under-budgets — post-2022 premium spikes have broken multifamily underwriting on their own? Is the property insured to **replacement value or only a loss-limit**? Does the sponsor carry **D&O and E&O** coverage (management-liability gaps expose LPs in a dispute)? An insurance line growing far slower than the market, or an undisclosed insurable-value basis, is an underwriting-integrity finding; uninsurable catastrophe exposure with no pivot is a strategy finding.

### Asset optionality `[STRENGTH]`

An asset with credible alternative uses (powered land for data centers, residential conversion) is *less* risky than one whose only use is the stated plan. Value the optionality, not just the base case — it is a `[STRENGTH]`, and it has rescued otherwise-failing deals.

## The Risk Radar (three variants — §6.5 / §6.6 / §6.7)

The Risk Radar is a spoke-and-zone stress test: plot a deal's assumptions by **mutability zone** (`[LOCKED]` at closing / `[SPONSOR]`-driven / `[MARKET]`-driven) and flag any spoke sitting at the outer (higher-risk) ring. It has **three variants — run the one that matches the underlying asset:**

- **§6.5 (equity / pro forma)** — offerings with an LP-facing operating projection (RE equity, value-add, development).
- **§6.6 (credit)** — private debt funds and note programs (the LP is a creditor to the GP; there is no single pro forma).
- **§6.7 (land)** — land funds with no stabilized cash flow (land banking, entitlement, horizontal/lot development, builder land-banking; the appreciation sleeve of farmland/timber).

Pick by asset: a fund that entitles then builds runs §6.7 for the land phase and §6.5 for the vertical pro forma; a land-collateralized note program runs §6.6 (note structure) borrowing §6.7's asset-side spokes; a concentrated RE-debt fund runs §6.6 plus §6.5's collateral spokes. Common discipline across all three: **2+ outer-ring spokes → escalate one tier**; market-zone spokes carry the **orientation principle** (assuming you outperform the historical / through-cycle norm in perpetuity is the high-risk position); numeric bands are **illustrative defaults to override** with subtype data; **never estimate** — cite source + vintage or say "no usable series." Each variant sits *on top of* its qualitative buckets as the quantitative stress test, the way §6.5 sits on top of §6.

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

## 6.6 Credit-fund Risk Radar (the credit variant)

**Run instead of §6.5** when the offering is a private debt fund — senior direct lending, mezzanine, RE bridge/transitional, specialty/ABL, a credit interval fund / BDC, fund-of-loans, evergreen income fund, or a fixed-coupon note program (run both only on a true equity+debt hybrid). The equity Radar plots one asset's pro forma; almost none of that maps to a credit fund — *the fund is the deal*, and the LP is a creditor to the **GP**, not to any borrower. A credit LP loses through a different mechanism, and the spokes target it:

> Permanent loss when **borrowers default**, AND the **manager can't work them out**, AND the **collateral cushion is gone** (effective LTV through 100%), AND/OR the fund is a **forced seller** (a leverage margin call or a redemption run against illiquid loans). Income stops when the **coupon was never a real spread** (funded from proceeds / interest reserve / ROC).

**Inclusion criterion:** a spoke earns a place only if it can **independently impair LP capital or durably trap/halt income** — not merely lower net yield (return-reducers live in §1/§10). **Orientation:** *reaching for yield is the high-risk position; assuming benign credit conditions persist is the market-side high-risk position* — benchmark the **gross asset yield** against the subtype norm; above-norm = outer ring.

**Subtype calibration (read before any threshold — illustrative; calibrate via `benchmarking_sources.md`):**

| Outer-ring band | Senior corporate DL | RE bridge / transitional | Mezz / subordinate | Distressed / special-sits |
|---|---|---|---|---|
| Portfolio LTV | > 65% | > 75% (watch **ARV** basis) | > 85% attach | run on **basis & recovery** |
| Borrower coverage (DSCR / debt yield) | < 1.3× | < 1.2× | < 1.1× | pre-cash-flow |
| Fund leverage | > 2× (BDC) | > 1.5× | > 1× | > 1× |
| Single-name concentration | > 5% | > 8% | > 8% | > 10% (deliberate) |

**Mezz rule:** for a mezzanine/pref fund, outer-ring seniority is *expected* — a knowingly-accepted, priced risk, not a kill shot. The kill shot is **undisclosed** subordination (a "senior secured" note silently behind a bank line), never disclosed mezzanine.

**The 19 spokes, by mutability zone.** Outer = higher risk. ⚠ = single-spoke kill shot. † = garbage-in gate.

*Zone 1 — Locked at commitment (weight heaviest; walk or accept):*

| # | Spoke | Outer (higher risk) | Inner |
|---|---|---|---|
| 1 | Manager cycle-tested lending record | < 1 full credit cycle; never a realized loss | 2+ cycles, *disclosed realized* losses **and** recoveries |
| 2 | Workout / special-servicing capacity | none / fully outsourced; no REO/foreclosure experience | dedicated in-house, cycle-tested recoveries |
| 3 | Seniority in the fund's stack ⚠ | a "senior" instrument **silently behind** a warehouse/repo line = effectively mezz | top of the stack, no facility ahead of LPs (*disclosed* mezz ≠ this) |
| 4 | Coupon-funding structure ⚠ | coupon *can* be paid from raise proceeds / interest reserve / new investors | structurally fundable only from a covered book spread |
| 5 | Verification & transparency † | manager-marked NAV, no independent valuer, no audit, **no loan tape** | independent valuation + annual audit + full per-loan tape |
| 6 | OA lending-latitude ceiling | OA *permits* high LTV/ARV, unsecured, any asset, related-party loans regardless of the deck | OA *binds* the GP to the marketed strategy. **Plot the ceiling, not the practice.** |

*Zone 2 — Manager-driven (within the OA ceiling; monitor / negotiate):*

| # | Spoke | Outer | Inner |
|---|---|---|---|
| 7 | Collateral coverage (LTV + basis + lien + recourse) | > subtype band, on ARV, 2nd-lien/unsecured sleeve, non-recourse | < band on current value, ~all first-lien, recourse |
| 8 | Borrower debt-service coverage (DSCR / debt yield) | < subtype band; **breaches at +200bps** floating | comfortable cushion under +200bps |
| 9 | Borrower / sector / geography concentration | top name / sector / MSA > band | granular, diversified |
| 10 | Fund-level leverage (leverage-on-leverage) | > band, **MTM/margin triggers**, facility renewal/pull risk | unlevered/modest; committed/termed, no MTM triggers |
| 11 | Underwriting & covenant quality | standards loosening to deploy — cov-lite, add-backs over vintages | consistent discipline; maintenance covenants |
| 12 | Self-dealing / captive lending | GP lends to its own projects/affiliates, material %, not arm's-length | none, or disclosed/arm's-length/LPAC-approved/capped |
| 13 | Distribution quality (cash NII vs ROC vs PIK) | distributions **> cash NII** (ROC), fat **PIK %**, cumulative-pref arrears compounding | 100% cash NII with a spillover cushion |
| 14 | Liquidity & duration | evergreen redemptions, **maturities after the redemption window**, no gate-duration cap | closed-end matched, or committed backstop + hard gate cap |

*Zone 3 — Market-driven (mean-reverts; hedge / size down / accept) — orientation: assuming today's benign credit conditions persist is the outer ring:*

| # | Spoke | Outer (higher risk) |
|---|---|---|
| 15 | Default-frequency cycle | underwriting below the strategy's through-cycle average ("zero losses" = hasn't met a downturn) |
| 16 | Recovery/severity & collateral-value cycle | above-historical recovery assumed; collateral at peak / low caps → reversion raises *effective* LTV (the §6.5 bridge) |
| 17 | Credit-spread / gross-yield vs. cycle | tight spread / cycle-low yield = risk underpriced; a high advertised yield in a tight market = reaching down the spectrum |
| 18 | Lending-cycle / capital-abundance vintage | peak-abundance vintage — terms liberalizing, GP pressured to deploy |
| 19 | Base-rate & refinancing / takeout window | floating borrowers + a near-term **maturity wall** + a tight refi market ("extend and pretend") |

*(6 locked / 8 manager / 5 market — in credit, far more risk sits in manager skill and fund structure than market beta, the inverse of the equity radar.)*

**How to score.** (1) Pull values vs. the subtype benchmark (loan tape, fee/facility docs, §0.5); cite source + vintage. (2) Plot & zone-tag each outer-ring spoke. (3) **Two single-spoke kill shots — page-one and FATAL on their own:** **#4** coupon payable from proceeds = the note-program Ponzi marker (FATAL pending proof of a covered spread); **#3 undisclosed** subordination. (4) **Garbage-in gate (#5):** manager-marked NAV with no loan tape → mark every asset-side input unverified, lower confidence (the way §0's authenticity gate reframes a review). (5) **Stacked credit stress (centerpiece):** defaults hit the through-cycle peak AND collateral falls X% AND a redemption wave or facility margin call hits *simultaneously* — compute the LP's principal loss and whether distributions survive; a book that passes each shock alone but fails the stack is the forced-seller blow-up. (6) Otherwise 2+ outer-ring → escalate one tier; carry knowingly-accepted outer-ring risks (e.g., disclosed mezz) into the "Knowingly Accepted Risks" memo section. *(Validated retrospectively against five credit funds — DLP, CL Fund 3, Origin, CCLFX, CELFX — the spoke that lights up matched each memo's kill-shot cell.)*

## 6.7 Land-fund Risk Radar (the land variant)

**Run instead of §6.5/§6.6** when the underlying asset is **land with no stabilized cash flow** — land banking, entitlement plays, horizontal/lot development, builder land-banking / lot-option programs, and the appreciation sleeve of farmland/timber. Land produces **no income** — the entire return is **terminal appreciation minus carry**, and the asset bleeds cash every year it is held. The LP loses through a mechanism neither the equity nor the credit radar models:

> Permanent loss when the **entitlement fails or drags** past the underwritten timeline, AND **carry exhausts the reserves** (forcing a capital call into a weak market), AND the **land loan matures with no buyer and no committed takeout**, AND the **cycle turns** — so the fund is a **forced seller of the highest-beta asset at its trough.** Or the thesis was never real: **basis above residual land value going in**, or **"distributions" paid on a no-income asset from capital / new subscriptions.**

**Inclusion criterion:** a spoke earns a place only if it can independently impair capital or strand the fund (force a loss sale, blow the basis, trap capital) — not merely lower IRR (return-reducers live in §1/§10), except where fees on a no-income asset are a structural drain (#12). **Orientation:** *assuming land appreciates smoothly — or merely holds — across a multi-year, timeline-slipping hold is the high-risk position*; land has the highest cyclical beta of any real asset (fell 50–80% in 2007–11; recovers last).

**Subtype calibration (illustrative defaults — land thresholds are softer/thinner than income-RE; timelines slip 1.5–2×; never estimate a comp):**

| Outer-ring band | Pre-dev land bank | Entitlement play | Horizontal / lot dev | Builder land-bank / option |
|---|---|---|---|---|
| Value lift from | path-of-growth + time | the **entitlement vote** | infrastructure + finished-lot premium | option fee + takedown markup |
| Land residual ratio (basis ÷ supportable residual) | > 0.85 | > 0.85 | > 0.80 | markup-driven |
| Leverage (LTV) | > 35% raw | > 25% (binary) | > 50% incl. horizontal | > 50% |
| Loan maturity vs. hold | any maturity **inside** the hold | inside entitlement window | inside dev window | inside takedown schedule |
| Counterparty protection | exit-buyer breadth | n/a | finished-lot demand | **option deposit ≥ ~10% non-refundable** (thin vs. a 30–50% drop) |

**Builder land-bank rule:** the non-refundable option deposit (often ~10%) is the LP's only protection and is thin against a 30–50% land decline; in a downturn the builder forfeits and walks. Plot deposit adequacy + builder credit, not the marketed takedown IRR. **Farmland/timber:** score the lease/harvest income under §6.5/§6.6 and the land-appreciation sleeve here — don't let a real ag coupon launder a speculative appreciation bet.

**The 19 spokes, by mutability zone.** Outer = higher risk. ⚠ = single-spoke kill shot. † = garbage-in gate. Weighting **7 locked / 6 sponsor / 6 market** — land is won or lost at acquisition, with an unusually heavy exogenous cycle overlay.

*Zone 1 — Locked at closing (you make your money going in; walk or accept):*

| # | Spoke | Outer (higher risk) | Inner |
|---|---|---|---|
| 1 | Going-in basis vs. residual land value ⚠ | basis **above** residual (finished value − vertical cost − builder margin − carry); a growth-story premium for dirt — unrecoverable | basis at a **discount** to residual, leaving margin for delay |
| 2 | "Distributions" / pref on a no-income asset ⚠ | a current pref / monthly distribution on land with no real interim income → ROC or new-subscription money; often paired with redemption-at-capital / auto-cancellation → **bond-like capped upside, full equity downside, no security** | nothing until sale, **or** distributions traced to *verified* interim income (ag / billboard / cell / solar lease) |
| 3 | Land-loan / fund-term vs. realistic entitlement-to-exit | matures **before** a realistic entitlement-plus-sale timeline, recourse, no committed takeout — gap bridged by uncommitted future calls | unlevered, or termed past the exit with committed extension + defined takeout |
| 4 | Negative-carry runway / reserves funded at closing | reserves cover **less than** the hold; carry funded by hoped-for raises/sales | reserves cover the full hold **+ a 1.5–2× buffer** |
| 5 | Entitlement status at entry | bought **unentitled**, underwritten to **entitled** value — return rides a future vote | bought entitled / finished lots |
| 6 | What you actually bought (title / access / physical) | no recorded access, wetlands / floodplain / species / environmental, no water rights, severed minerals, unbuildable topography | clean title, recorded access, no encumbrances, water rights intact |
| 7 | Single-parcel / single-jurisdiction concentration | 1–3 parcels, one corridor, one planning authority — one vote = the whole fund | diversified across parcels, jurisdictions, corridors |

*Zone 2 — Sponsor-driven (skill & execution; monitor / negotiate):*

| # | Spoke | Outer | Inner |
|---|---|---|---|
| 8 | Entitlement-execution record in THIS jurisdiction | first time through this planning commission; "cockroaches" — prior denials, lawsuits, abandoned entitlements | repeatedly entitled here; named approvals delivered |
| 9 | Valuation / appraisal integrity † | NAV on **as-if-entitled / as-if-developed** appraisals that assume the thesis; manager-selected appraiser; thin comps | independent **as-is** appraisal, real comps; thesis upside disclosed not booked |
| 10 | Negative-carry management & interim-income capture | no plan to offset carry; the hold just bleeds | monetizes the hold (ag / grazing / billboard / cell / solar lease); appeals assessments |
| 11 | Exit-strategy specificity & buyer universe | "sell to a developer" / "the city will want it" — no named buyer, thin universe | a contracted builder takedown or a defined credit-worthy buyer list |
| 12 | Fee load vs. a no-cash-flow asset | acq + AM-on-committed + disposition fees compounding to a large share of capital (≈14% on a 7-yr, 2%/yr hold before any appreciation) | modest, milestone- / sale-weighted; AM on invested not committed |
| 13 | Self-dealing / related-party land sourcing | sponsor/affiliate **sold the land into the fund** at a markup — easiest asset to flip in (thin comps) | third-party, or disclosed / independently-appraised / LPAC-approved |

*Zone 3 — Market-driven (land has the HIGHEST beta; hedge / size down / accept) — orientation: assuming smooth appreciation across a slipping hold is the outer ring:*

| # | Spoke | Outer (higher risk) |
|---|---|---|
| 14 | Land-price cycle position & highest-beta drawdown | buying mid/late-cycle, underwriting smooth appreciation; no stress for the 50–80% peak-to-trough leg |
| 15 | Entitlement / political & regulatory regime | moratoria, downzoning, impact-fee hikes, water/sewer limits, environmental litigation, NIMBY ballot measures |
| 16 | Homebuilder demand / absorption cycle | the buyer (homebuilder) is long land or pulling back → takedown stretches for years, killing IRR at the target price |
| 17 | Interest-rate & terminal-discount regime | rates up hit land three ways — carry up, the discount on a long-dated no-income terminal value up, builder demand down |
| 18 | Path-of-growth / migration & infrastructure cycle | the metro's growth path (jobs, migration, planned highway/utility) has shifted away from the parcel |
| 19 | Construction-cost cycle (the residual bridge) | land is the residual; rising vertical/horizontal costs compress land value even when home prices hold |

*(7 locked / 6 sponsor / 6 market.)*

**How to score.** (1) Pull values vs. the subtype benchmark (residual-land math, the carry/reserve schedule, the loan-maturity-vs-timeline gap, the appraisal basis, §0.5); cite source + vintage. (2) Plot & zone-tag. (3) **Two single-spoke kill shots — page-one and FATAL on their own:** **#2** a pref/distribution on a no-income asset = funded from capital / new money (the land-fund Ponzi marker; the **primary** land kill shot — it fired on all five in-vault land funds); **#1** basis above residual land value (magnitude-FATAL unless a contracted, near-certain entitlement lift covers the gap). (4) **Garbage-in gate (#9):** as-if appraisals with no independent as-is support → mark every appreciation-based input unverified. (5) **Stacked carry-and-cycle stress (centerpiece):** entitlement slips 18–24 months AND carry reserves exhaust AND the land loan matures AND builder/buyer demand evaporates AND rates rise — *all at once* (the 2007–11 land story); compute the LP's loss and whether the fund can hold rather than sell at the trough. (6) Otherwise 2+ outer-ring → escalate one tier; carry knowingly-accepted outer-ring risks into the "Knowingly Accepted Risks" memo section. *(Validated retrospectively against five in-vault land funds — Allied American, Lansing, Texas Triangle, Blu Onx, BigStar — all DECLINE, the spoke that lights up matching each memo's kill-shot cell.)*

## 7. Sponsor, principals, and track record

- **Registration status.** RIA (state or SEC), ERA, or neither — and **verify any claimed registration on IAPD**. A false claim is fatal and reportable.
- **Exemption coherence.** Does the claimed Investment Company Act exemption match the subscription documents? A 3(c)(7) wrapper requires Qualified Purchaser reps; their absence means the exemption fails. Likewise 506(b) vs. 506(c): does the verification procedure match the exemption claimed?
- **Public profile.** Look up the sponsor's other businesses. A sponsor whose primary public business is education / coaching / a "guru" platform raises a coach-promoter concern; a sponsor whose primary business is construction, payments, or fintech-platform operation (i.e., anything other than investment management) means the fund is a sideline or a captive. Relatedly, a GP holding an unrelated full-time W-2 job is a dedication flag — asset-managing a multi-million-dollar pool is itself a full-time job, and a part-time sponsor cannot give the role the attention (or claim the real-estate-professional tax posture) it demands.
- **Principal-level checks — not just the entity.** For each named principal: state and county court dockets, foreclosure and judgment searches, UCC filings, personal bankruptcies, prior failed deals, personal guaranties outstanding. The entity is usually clean because it's new; the principals are where the history lives.
- **Operational footprint.** Sanity-check the business address (registered agent vs. real office vs. residential/rental address), web-domain age, and stated employee count. Subscription checks mailed to a house are a finding.
- **Track-record attribution — three questions.** (1) Same *entity*? (Team members' records at prior employers are not the fund's.) (2) Same *team*? (3) Same *strategy*? (An operator's storage record does not cover retail conversion; a sponsor's own operating contracts are not originated loans.) "First-time fund with experienced-sounding marketing" is the most common dodge.
- **Style drift / asset-class pivot to chase the cycle.** A sponsor whose proven record is in one asset class now raising in a different one to follow the cycle (e.g., a multifamily operator now running an SMB/"business roll-up" fund) fails the "same strategy?" test hard — cyclical investing rewards patience and staying within an edge, not running through a brick wall into an unfamiliar space. Treat the pivot as a track-record gap, and probe the specific key-person risk of the new class (in operating-company roll-ups, the acquired firm's manager walking once the owner is bought out).
- **Operating-company-affiliate dodge.** A specific, common variant of the attribution problem: a brand-new fund GP is presented as the "private-equity arm" / "capital arm" of an established (often family) operating business, and the deck borrows the operating company's decades-long, deal-by-deal *gross* brokerage/development record as if it were the fund's net-of-fee performance. It usually fails all three questions: different entity (operating co ≠ fund GP), the operator who earned the record may not even be named in the PPM's management exhibit (often only the capital-raiser is), and an own-account development/brokerage record is not a record of managing outside LP money in a pooled fund. Demand fund-level, net-of-fee, third-party-verified returns; treat the operating company's self-reported deal sheet as marketing, not a track record. Always EDGAR-search the principal and any prior same-name fund vehicle — a sibling fund that raised $0 sits directly behind a "first time / proven track record" claim.
- **Prior and parallel funds.** Number of vehicles, vintages, sizes, status, audited or not; simultaneous raises create allocation conflicts (§3).
- **Litigation, regulatory action, "Bad Actor" history.** BBB, FINRA BrokerCheck, IAPD, state securities regulators, and web search.

### GP co-invest vs. promote ratio

Compute GP co-investment (% of total capitalization) against GP promote (carried-interest %). A few points of spread is normal; **co-invest < 1% with promote ≥ 15% is a structural misalignment** — escalate to FATAL or a mandatory ASK with a documented explanation (one fraud case ran < 0.05% co-invest against a 20% promote). Also confirm the co-invest is **real outside cash, not recycled fees** — "skin in the game" actually funded by the acquisition fee (the GP's own fee cycled back in as its "commitment") is not alignment; ask the source of the GP's contribution.

### Extended-team tenure

Check not just GP-principal tenure but the tenure of the **execution ecosystem** — architect, general contractor, property manager, key vendors. Long-standing relationships reduce execution risk; a newly assembled team is a risk factor even when the principals are experienced. When management is **third-party**, interview the PM directly, ask who else they manage for, and call those owners — the PM is often the true driver of the P&L. And when a sponsor with a good record enters a **new market**, it usually means a **new PM**: discount the track record accordingly, since the boots-on-the-ground team is unproven there.

### Solo GP vs. team — two-sided risk

A *solo* GP carries succession **and** fraud risk (one person signing checks, no oversight) — for solo GPs, dual-signature requirements on deal accounts are FATAL-level (ties to §2 custody). A *team* carries partnership-breakup risk ("principals divorced"); check how long they have actually worked together and whether that includes a downturn.

### Cross-portfolio distress check

Search CMBS servicer reports, deed-in-lieu filings, and trade press for distress on the GP's *other* deals — a sponsor can be visibly distressed across its portfolio *during* a raise in data a family office can access even when retail LPs cannot.

### The "Roaches" rule

**One credible negative mark is a stop sign, not a data point.** A spotless record is the best predictor of reliable service; where one verified red flag surfaces (litigation, regulatory action, a soured prior deal), assume there are more you cannot see and raise the bar accordingly — do not average it away.

### Character and bad-news behavior (the qualitative sponsor test)

"We've never made a good deal with a bad person." Character is the single hardest thing to verify and the highest in importance — quantitative checks do not capture it. Add these behavioral probes to the questionnaire and the reference calls:

- **"Tell me about your worst deal."** How a sponsor discusses failure is more revealing than how they discuss success. Evasion, blame-shifting, or an unblemished "never had one" (over a real track record) is itself a flag.
- **Show me how you communicated bad news to LPs.** Ask for an actual past LP letter delivering bad news. How — and how promptly — a sponsor tells investors when something goes wrong is the ultimate character test and predicts §12 post-close behavior.
- **Has the sponsor ever been an LP?** A GP who has wired capital and lost control of it has empathy for the LP seat; its absence is a (soft) alignment gap.
- **Off-list references, not just the sponsor's list.** Reach past the curated reference list — LP communities and forums surface investors with first-hand bad experiences the sponsor will not volunteer.
- **The three-reference ask (Ryan Gibson framework).** When you do take the sponsor's references, structure the ask: (1) a referral from the sponsor's **worst** deal — then ask that investor how the sponsor handled it; (2) an investor in **≥75%** of the sponsor's deals — ask why they keep coming back; (3) an investor who invested **once and did not return** — ask why. The one-and-done reference is the highest-signal and the one sponsors never volunteer.
- **Early communication predicts later communication.** Latency, evasiveness, or disorganization while the sponsor is still courting your capital is the *best* it will ever be — investor-relations quality only degrades once the money is wired and the deal hits turbulence. Treat slow or incomplete pre-investment responsiveness as a data point, and be wary of the inverse: unsolicited cold-calls pressuring you to invest or add capital — a solid deal sells itself.
- **Do not outsource diligence to another LP's conviction.** A respected LP's endorsement is not diligence — in one total-loss fraud the deal had been vouched for by a sophisticated LP who also missed it. Borrowed conviction is the inverse of the "Roaches" rule: a clean endorsement does not offset your own unanswered questions.

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
- **Marketing tax claims vs. mechanics.** Verify any tax pitch against the actual rules — e.g., a depreciation/loss pitch to passive LPs that omits IRC §469 passive-activity-loss limits, or unverified bonus-depreciation and QOZ claims. A tax benefit the typical investor cannot actually use is a marketing misrepresentation. More broadly, do not let the tax tail wag the dog: a deal justified primarily by depreciation/write-offs whose standalone cash flow and equity multiple are weak is, at best, a wash — the economics must stand without the tax benefit.
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
- **Transparency withdrawal / "adversarial" reframing.** Previously-provided reporting (loan tapes, promised audits, LTV/portfolio data) that quietly stops arriving — and a sponsor who, when pressed, reframes routine diligence requests as "adversarial" or casts prior transparency as "a courtesy" rather than a right — is a live get-out signal, especially in a debt fund with redemption features where monitoring is the only lever left. Ongoing due diligence does not stop at the wire; treat a shift in the sponsor's *willingness to be seen* as more telling than any single number.

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
11. The deal's assumptions sit within their historical / through-cycle range, not clustered at the outer ring — run the Risk Radar variant that matches the asset (**§6.5** equity/pro-forma, **§6.6** credit, **§6.7** land); 2+ outer-ring spokes signal structural fragility regardless of current-market benchmarking, and a single kill-shot spoke (coupon-funded-from-proceeds or undisclosed subordination; a pref/distribution on a no-income land asset) is itself page-one and FATAL.
12. The break-even interest rate is at least 100–200bps below the rate cap (or the deal is structurally designed to fail at the cap).
13. The OA does not let the GP change the capital stack without LP consent (or it does — pref/senior-class issuance, added debt, rescue-capital subordination).
14. A post-close monitoring protocol exists or the LP is adopting one (cadence, content baseline, red-flag triggers, action plan).
15. Real value is created — the untrended yield-on-cost clears the market cap rate by a risk-appropriate development spread, and the projected return is not ~90% dependent on the terminal sale (§1). A deal that only works on trended rents, cap-rate compression, or the exit is riding the market, not execution.

If any of these flips negative, the deal is unlikely to clear a family-office IC without remediation. Two or more: decline. (Benchmarking calibrates the others — an above-market term hardens a finding; a below-market, investor-friendly term is a `[STRENGTH]`, not a pass on the rest.)

---

## Changelog

- **v2.6 (2026-07-01)** — Folded in the PassivePockets LP library (Steve Suh, *Avoiding Rookie Passive Investing Mistakes*; the PP *Questions to Ask a Sponsor*, *Syndications Cheat Sheet*, *Key Metrics Glossary*, and *PPM Reference Guide*). The Kirkland Capital "AI Due Diligence Prompt" in the same folder was already integrated at v2.2. Retail-LP portfolio behavior (networking, tribes, reduced minimums, diversification timing) was intentionally excluded as below the document-review altitude. New/sharpened: **§1** named downside metrics (breakeven occupancy, five-part economic vacancy, default ratio), a rent-affordability sanity check (median income ÷ 36), and exit-NOI-must-reflect-reassessed-taxes; **§2** quantify the cash-flow share paid to senior debt + pref ahead of common (65% LTV + 25% pref ≈ 90% ahead of you); **§4** broken-deal / failed-raise capital treatment (what happens to wired capital if the raise falls short or the deal dies, and who eats dead-deal costs); **§6** a new "Insurance and catastrophe-risk adequacy" subsection (replacement vs. loss-limit basis, D&O/E&O, post-2022 premium-spike underwriting risk); **§7** Ryan Gibson's three-reference ask (worst-deal referral, ≥75%-repeat investor, one-and-done investor), early-communication-predicts-later-communication (and the cold-call-pressure inverse), GP co-invest must be real cash not recycled acquisition fees, a full-time-sponsor dedication check, and third-party-PM diligence (interview the PM; discount the record in a new market/new PM); **§9** the "don't let the tax tail wag the dog" principle (economics must stand without the tax benefit).
- **v2.5 (2026-07-01)** — Folded in LP-craft lessons from Paul Shannon's *Both Sides of the Table* (Passive Pockets interview, 2026). (1) A **first-five-minutes fast-reject screen** ahead of the deep walk — the default-answer-is-no posture plus concrete auto-DQ heuristics (implausible NOI margin > 65%, exit cap ≤ entry cap, no sensitivity analysis, debt not matching the plan, no sources-and-uses, "deck is all market, no deal"). (2) **§1** value-creation tests — untrended **yield-on-cost vs. market cap rate (the development spread)**, **IRR partitioning** (cash-flow vs. terminal-sale share), and the **six IRR-juicing levers** (exit cap, leverage, hold, rent growth, expense treatment, refinance-in-model). (3) **§5** debt additions — exit friction (prepayment/yield-maintenance/defeasance), distribution-restricting covenants, and recourse-debt-as-alignment `[STRENGTH]`. (4) **§6** cap-rate spread vs. the 10-year Treasury (~150–250bps risk compensation). (5) **§7** a "Character and bad-news behavior" subsection (worst-deal probe, bad-news LP letters, has-the-GP-been-an-LP, off-list references, don't-outsource-diligence-to-another-LP's-conviction) and a **style-drift / asset-class-pivot** flag. (6) **§3** cross-entity co-mingling as a distinct fraud mechanism. (7) **§12** a transparency-withdrawal / "adversarial"-reframing behavioral trigger (ongoing DD does not stop at the wire, esp. redemption-featured debt funds). (8) New page-one finding 15 (real value creation: development spread clears, return not sale-dependent).
- **v2.4 (2026-06-24)** — Extended the Risk Radar into a **three-variant family**. Added a shared §6.5–6.7 preamble (pick the variant by underlying asset; common zones / orientation / never-estimate discipline) and two new variants. **§6.6 Credit-fund Risk Radar** — 19 spokes (6 locked / 8 manager / 5 market) targeting the credit loss mechanism (default × workout × collateral × forced-seller, plus coupon-funding integrity); two single-spoke kill shots (coupon-funded-from-proceeds; undisclosed subordination), a verification/garbage-in gate, distribution-quality (NII/ROC/PIK), and a stacked-credit-stress centerpiece; validated retrospectively against five credit funds (DLP, CL Fund 3, Origin, CCLFX, CELFX). **§6.7 Land-fund Risk Radar** — 19 spokes (7 locked / 6 sponsor / 6 market) for land with no stabilized cash flow (basis / carry / entitlement / terminal-liquidity, not occupancy/rent/cap-rate); two kill shots (a pref/distribution on a no-income asset — the primary; basis-above-residual-land-value), an as-if-appraisal garbage-in gate, the builder-takedown/deposit rule, and a stacked carry-and-cycle stress; validated retrospectively against five in-vault land funds (Allied American, Lansing, Texas Triangle, Blu Onx, BigStar — all DECLINE, the spoke that lights up matching each memo's kill-shot cell). Page-one finding 11 generalized to "run the variant that matches the asset," with the credit/land single-spoke kill shots elevated to page-one/FATAL.
- **v2.3 (2026-06-23)** — Integrated *Net Zero is a Win* / The Debrief (Christine Kwasny — the Risk Radar, ten deal autopsies, and the Heuristics pro-forma series) plus the PassivePockets Risk Radar interview. (1) **§6.5 Pro-forma vs. historical-range stress test** — the 17-spoke Risk Radar across three mutability zones, the orientation principle (for market-driven spokes, assuming perpetual outperformance of the historical average is the high-risk position), and the "must be able to kill a deal" inclusion criterion; numeric bands are illustrative RE-equity defaults to override with submarket data, and the section runs only when the offering carries a pro forma. (2) **§12 Post-close monitoring protocol** — reporting/audit rights to demand pre-close and the report-content red flags (esp. the distribution-vs-NOI mismatch test) that surfaced the corpus's frauds. (3) Extensions: **§0.5** marketing-claim reconciliation; **§1** math-integrity + return-presentation integrity (defined exit + IRR, ROI-vs-IRR reconciliation, refi-as-ROC, luck-vs-skill); **§2** capital-stack constraints + custody/controls; **§3** fund-investment parallel track; **§4/§5** break-even-vs-rate-cap gap + hedge spec + capital-call bridge/black-hole + debt-fund-as-LP; **§6** stacked stress, two-cycle position, development risk, covenant-call risk, anchor-tenant, asset optionality; **§7** co-invest-vs-promote ratio, extended-team tenure, solo-vs-team risk, cross-portfolio distress, the "Roaches" one-mark rule. (4) A **Mutability** analytical lens and a per-finding `[LOCKED]`/`[SPONSOR]`/`[MARKET]` zone tag (no separate deal-killer/return-reducer tag — that distinction lives in the §6.5 inclusion criterion and the finding text). (5) An **"Accredited ≠ astute"** preface guardrail; a **"Knowingly Accepted Risks"** CIO-memo section and a confidentiality/NDA operational note both added in SKILL.md. (6) Four new page-one findings (11–14). §6.5 stress-tests assumptions, §10 benchmarks terms — both complement the rubric's judgment, neither replaces it.
- **v2.2 (2026-06-22)** — Adopted four ideas from the Kirkland Capital Group "AI Due Diligence Prompt for Private Fund Investors": (1) an **Analytical-lenses** preface — read every bucket through Fund Counsel / Prospective Investor / **Lender-to-the-fund** viewpoints, the last applied to all funds (not just notes), with redemption-run and asset–liability-mismatch questions folded into §4; (2) **§10 Benchmarking calibration** — calibrate headline terms against current, cited industry benchmarks (ILPA 3.0, PitchBook, Preqin, McKinsey, StepStone; see `benchmarking_sources.md`) in a memo table, with a never-estimate discipline; (3) **§11 Uncertainty map** — a citation-anchored appendix grid of ambiguous/missing/conflicting terms, companion to the questionnaire; (4) a tenth page-one finding (headline economics benchmarked vs. market). Our authenticity gate, reconciliation matrix, and external-diligence posture are retained — benchmarking calibrates, it does not replace the rubric's judgment.
- **v2.1 (2026-06-12)** — Lessons folded in from the Lansing Land Development Fund I review: (1) carry the FATAL/NEGOTIABLE/ASK/STRENGTH tiers into the memo as visible per-finding labels with a legend and tally, and flag NEGOTIABLE-items whose status depends on curing a related FATAL; (2) §2 — added the per-LP "Carry/Management-Fee Adjustment" secret-side-letter mechanism and the "illusory safeguard" pattern (PPM cites an advisory committee/approval the LPA nullifies); (3) §7 — added the "operating-company-affiliate dodge" (new fund GP borrowing an affiliated operating business's gross deal record) and the reminder to EDGAR-search for a prior same-name fund vehicle that raised $0; (4) §6 — added "projected-return marketing vs. underwriting" (deck IRR/ROI with no documentary basis, especially when paired with "low-risk" framing of a binary asset).
- **v2** — Added the document-authenticity gate (§0), cross-document reconciliation matrix (§0.5), conflicts/captive bucket (§3), debt-instrument branch (§5), the five-check EDGAR reconciliation (§8), and the page-one findings list.
