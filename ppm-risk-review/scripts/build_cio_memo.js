const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, BorderStyle, PageNumber, Footer, Header
} = require('docx');

// Helpers
const P = (children, opts = {}) => new Paragraph({ children, ...opts });
const R = (text, opts = {}) => new TextRun({ text, ...opts });
const H1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
const H2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const Body = (text) => new Paragraph({ children: [new TextRun(text)], spacing: { after: 120 } });
const Bullet = (children) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, children, spacing: { after: 80 } });
const NumItem = (children) => new Paragraph({ numbering: { reference: "numbers", level: 0 }, children, spacing: { after: 80 } });
const B = (text) => new TextRun({ text, bold: true });
const I = (text) => new TextRun({ text, italics: true });
const T = (text) => new TextRun(text);

const titleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "CIO RISK MEMORANDUM", bold: true, size: 32 })],
  spacing: { after: 120 },
});
const subtitleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "Allied American Land Fund LLC — Risk Review", size: 26, bold: true })],
  spacing: { after: 240 },
});

const header = (label, value) => new Paragraph({
  spacing: { after: 60 },
  children: [
    new TextRun({ text: `${label}: `, bold: true }),
    new TextRun(value),
  ],
});

const ruleP = new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "888888", space: 1 } },
  spacing: { after: 240 },
  children: [new TextRun(" ")],
});

const children = [
  titleP,
  subtitleP,
  header("To", "Chief Investment Officer"),
  header("From", "Arkadiy Goykhberg, Senior Investment Analyst"),
  header("Date", "May 3, 2026"),
  header("Re", "Allied American Land Fund LLC — PPM dated September 6, 2024"),
  header("Recommendation", "DECLINE pending sponsor responses to questionnaire (see appendix)"),
  ruleP,

  H1("1. Summary of the Opportunity"),
  P([
    B("Sponsor: "), T("Allied Development / Allied Management LLC (Scottsdale, AZ); founder Cody Bjugan."),
  ]),
  P([
    B("Vehicle: "), T("Wyoming LLC; evergreen Reg D 506(c) offering with general solicitation; PPM dated September 6, 2024."),
  ]),
  P([
    B("Strategy: "), T("Acquire raw or undeveloped land, then \"entitle, land bank, develop, and/or\" wholesale to other developers; explicit \"double-closing\" / wholesaling contemplated."),
  ]),
  P([
    B("Headline economics: "), T("$1 per Class A unit; $100,000 minimum; 15% non-compounding cumulative preferred return paid quarterly at the Manager's discretion; no equity participation above the pref; all upside accrues to the Manager via 100 Class M units."),
  ]),
  Body("On the documents and economics as written, this is a high-risk, sponsor-favorable, structurally weak vehicle marketed primarily to retail accredited investors. The disclosure and governance baseline is below institutional standard for a family-office allocation, and the economics for the LP are capped at 15% with full downside. I would defer any allocation pending the diligence items in the appendix."),

  H1("2. Documentation Deficiencies — Material and Fixable Only by the Sponsor"),
  Body("The PPM is unusual in what it does not contain, and these gaps are themselves the most important risks."),
  Bullet([B("No quantified fees. "), T("The PPM references \"Asset Management Fees,\" \"Carried Interest,\" \"Sharing Ratio,\" and reimbursements \"for operational costs and expenses\" of the Manager and its affiliates, but never specifies the rates. The 15% pref tells investors what they are owed; the document never tells them what the Manager takes. Net returns to the LP cannot be modeled from this PPM.")]),
  Bullet([B("Exhibit A is empty. "), T("The Company Business Overview — the section the PPM repeatedly cross-references for the business plan and sources/uses — is replaced by one sentence directing the investor to an InvestNext investor portal that is \"periodically updated.\" The central business plan is therefore off-document, mutable at the sponsor's discretion, and not part of the offering memorandum the investor signs.")]),
  Bullet([B("Unverified financials. "), T("The PPM concedes that financial information comes from third parties and \"the Manager and the Company have not independently verified\" any of it. No audited financials, no audited prior-fund track record, and no GP commitment is disclosed. Past performance disclaimers note prior results are \"internally prepared by affiliates\" and \"not audited.\"")]),
  Bullet([B("Loose Use of Proceeds. "), T("Of the $120M target raise, only $90M (75%) is allocated to \"Investment Capital.\" $7.6M is earmarked for \"Deal Acquisition Cost (Marketing and Advertising)\" — an unusually high marketing line — plus $16.4M of \"Operating Costs\" and $6M of reserves. A footnote separately discloses an additional $55M of \"redeployed\" capital over four years that does not appear in Sources, which obscures the true asset base.")]),

  H1("3. Governance Is Severely Investor-Unfriendly"),
  Bullet([B("No voting rights. "), T("Class A holds 0% voting and 0% sharing ratio. All voting and economics above the pref sit with the Manager's 100 Class M units.")]),
  Bullet([B("Manager cannot be removed except for narrowly defined \"cause\" "), T("(moral-turpitude conviction or Bad Actor disqualification). Performance, breach of fiduciary duty, and gross negligence are not removal triggers.")]),
  Bullet([B("Drag-along "), T("lets the Manager force investors into a sale with no Class A approval; "), B("tag-along "), T("is conditional on the Manager's exercise.")]),
  Bullet([B("Indemnification and exculpation "), T("of the Manager from anything short of \"improper personal financial benefit, willful failure to deal fairly… knowing violation of law, or willful misconduct.\" Indemnification can be satisfied by clawing back distributions previously made to investors.")]),
  Bullet([B("Counsel (Kelley Clarke PC) represents the Manager and the Company; "), T("investors expressly waive conflicts. No independent counsel reviewed the deal for investors.")]),
  Bullet([B("Manager-Company agreements were not negotiated at arm's length "), T("(the PPM admits this).")]),
  Bullet([B("Side letters and preferred equity. "), T("The Manager may grant other investors superior rights and may subordinate existing investors to later preferred-equity capital, with no consent required.")]),

  H1("4. Liquidity and Capital-Call Mechanics Are Weak"),
  Bullet([B("Evergreen, open-ended raise "), T("with the Manager able to keep capital indefinitely; subscriptions are \"irrevocable upon subscription.\"")]),
  Bullet([B("Redemption "), T("is allowed after one year and fulfilled within 360 days, but is "), B("subject to a 10% AUM gate "), T("that resets annually. In stressed conditions the gate will close immediately and the Manager has unilateral discretion to refuse beyond it. There is no NAV mechanism specified and no third-party valuation agent — the Manager itself computes AUM \"in good faith.\"")]),
  Bullet([B("Distributions are at Manager's \"sole discretion,\" "), T("including the quarterly pref. The pref is cumulative but unfunded; investors are paid when the Manager decides.")]),
  Bullet([B("Redemption price = invested capital + accrued unpaid pref. "), T("That structurally means investors do not benefit from any unrealized appreciation in the land portfolio while still bearing all of the downside if assets impair. The 15% pref is therefore the maximum investor outcome, not a floor.")]),
  Bullet([B("No public market, no transfer rights without Manager consent and counsel opinion. "), T("Practically illiquid for the life of the fund.")]),

  H1("5. Strategy and Asset-Class Risk"),
  Bullet([B("Land banking and wholesaling are speculative, capital-intensive, and pre-cash-flow. "), T("Raw land generates no operating income and incurs carrying costs (taxes, insurance, entitlement spend). A 15% per-annum pref accruing on capital that is not generating cash is highly demanding: the underlying assets must compound at a meaningfully higher rate than 15% to fund pref + Manager fees + carry + corporate overhead.")]),
  Bullet([B("Leverage up to 70–80% of fair market value "), T("is contemplated; cross-default and cross-collateralization are permissible. The Manager (or affiliates) may also provide repayment, completion, or non-recourse \"bad-boy\" guaranties — the Company indemnifies them out of fund assets, creating a structural conflict in distress scenarios.")]),
  Bullet([B("Entitlement risk is binary and political. "), T("Zoning, entitlement, eminent-domain, environmental, and ADA exposures are real and can extend timelines well beyond the \"approximately 18-month deal cycle\" cited in a footnote.")]),
  Bullet([B("Macro fit is poor for a 15% hurdle. "), T("Higher-for-longer rates, builder margin compression, slower entitlement throughput in growth markets, and softening single-family land comps all argue against the pricing. The PPM's own description that \"the U.S. real estate market… is in the midst of or recovering from a severe recession\" is dated language that does not match current conditions and should be tested.")]),

  H1("6. Sponsor and Track-Record Risk"),
  Bullet([B("No regulatory cover. "), T("Manager is not a registered investment adviser; the Company is not registered under the 1940 Act. Investors lose Advisers Act and Investment Company Act protections.")]),
  Bullet([B("No independent verification of track record. "), T("The PPM concedes \"no party has been or will be retained to perform due diligence on… the Manager, or any of its affiliates.\"")]),
  Bullet([B("Sponsor's primary public business is education marketing. "), T("Cody Bjugan operates VestRight, a $9K–$16K paid coaching program teaching land-entitlement investing, and is a podcast and seminar personality. Reg D 506(c) general solicitation combined with a captive education audience creates an obvious channel risk that the investor base may overlap with course customers — the precise pattern the SEC has flagged in coach-promoter cases. We should test how investors are sourced.")]),
  Bullet([B("Form D actuals diverge sharply from the marketed raise. "), T("Per SEC EDGAR (CIK 0002038765), as of the most recent Form D/A (filed April 15, 2025), the fund had raised approximately $2.555M from 16 investors versus a $120M targeted offering — about 2% of target after roughly five months of sales. Either the raise is failing or the $120M figure is aspirational; either way, the Use of Proceeds capital plan as stated does not reflect reality.")]),
  Bullet([B("A \"Fund II\" already exists "), T("per allieddev.com marketing. The PPM's competing-fund and time-allocation conflicts are not theoretical — the sponsor is already operating parallel vehicles. Allocation of deal flow between Fund I, Fund II, and the Manager's own account is unaddressed.")]),

  H1("7. Tax Exposure"),
  Bullet([B("Phantom income "), T("is explicitly possible — investors may owe tax in years they receive no cash distribution.")]),
  Bullet([B("K-1 timing risk "), T("disclosed; the sponsor \"may not\" deliver K-1s before March 15, increasing extension and penalty risk.")]),
  Bullet([B("UBTI / ECI "), T("likely for tax-exempt and non-U.S. investors. The Manager has no obligation to minimize UBTI and the Company is unlikely to qualify as VCOC/REOC for ERISA plan-asset relief.")]),
  Bullet([B("REIT election. "), T("The PPM contemplates a possible REIT election or REIT feeder mid-fund — material tax structure changes can be made without investor consent.")]),

  H1("8. Bottom Line"),
  Body("This looks like a single-promoter, evergreen, fee-opaque, illiquid, pref-only land-banking vehicle with weak governance, marketed via general solicitation by an operator whose principal public footprint is a paid education business. The strategy can work for the right sponsor and the right cycle, but the disclosure and governance baseline here is below institutional standard for a family-office allocation, and the economics for the LP are capped at 15% with full downside, which is a difficult risk/reward at current rates. I recommend deferring any allocation pending sponsor responses to the diligence questionnaire delivered separately."),

  H1("Appendix — Sources Consulted"),
  Bullet([T("PPM for Allied American Land Fund LLC, dated September 6, 2024 (PDF, 68 pages, on file).")]),
  Bullet([T("SEC EDGAR — Allied American Land Fund LLC Form D and D/A filings (CIK 0002038765); most recent D/A filed April 15, 2025.")]),
  Bullet([T("Allied Development corporate site (allieddev.com) and Allied Land Fund investor site (alliedlandfund.com).")]),
  Bullet([T("VestRight (vestright.com) — sponsor-affiliated education business.")]),
  Bullet([T("Better Business Bureau profiles for Allied Development (Phoenix, AZ) and VestRight.")]),
  Bullet([T("Public LinkedIn profile of Cody Bjugan.")]),
];

const doc = new Document({
  creator: "Arkadiy Goykhberg",
  title: "Allied American Land Fund LLC — CIO Risk Memo",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: "1F3864" },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Calibri", color: "2E75B6" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "CONFIDENTIAL — FAMILY OFFICE INTERNAL", size: 16, color: "808080", italics: true })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Allied American Land Fund — CIO Risk Memo  |  Page ", size: 16, color: "808080" }),
          new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "808080" }),
          new TextRun({ text: " of ", size: 16, color: "808080" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: "808080" }),
        ],
      })] }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = "/sessions/elegant-stoic-thompson/mnt/Investing/Allied American Land Fund - CIO Risk Memo.docx";
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, buf.length, "bytes");
});
