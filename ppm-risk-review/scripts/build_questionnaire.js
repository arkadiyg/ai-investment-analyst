const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, BorderStyle, PageNumber, Footer, Header
} = require('docx');

const H1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
const H2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const Body = (text) => new Paragraph({ children: [new TextRun(text)], spacing: { after: 120 } });
const QItem = (text) => new Paragraph({ numbering: { reference: "qnumbers", level: 0 }, children: [new TextRun(text)], spacing: { after: 100 } });
const Sub = (text) => new Paragraph({ numbering: { reference: "subletters", level: 0 }, children: [new TextRun(text)], spacing: { after: 60 } });

const titleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "SPONSOR DUE-DILIGENCE QUESTIONNAIRE", bold: true, size: 32 })],
  spacing: { after: 120 },
});
const subtitleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "Allied American Land Fund LLC", size: 26, bold: true })],
  spacing: { after: 240 },
});

const headerLine = (label, value) => new Paragraph({
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
  headerLine("To", "Allied Management LLC, attn: Investor Relations"),
  headerLine("From", "[Family Office Name], Investment Committee"),
  headerLine("Date", "May 3, 2026"),
  headerLine("Re", "Information requested in connection with potential subscription to Allied American Land Fund LLC (PPM dated September 6, 2024)"),
  ruleP,

  Body("Thank you for sharing the Confidential Private Placement Memorandum dated September 6, 2024 for Allied American Land Fund LLC. As part of our internal review process, we would appreciate written responses to the questions below before our investment committee can advance further. Where the requested item is already addressed in a written document (LPA, side-letter form, audited financial, etc.), please attach the document and reference the relevant section."),

  H1("1. Economics and Fee Structure"),
  QItem("Please provide the complete fee schedule, including: (a) asset management fee (rate and basis — committed, called, NAV); (b) acquisition fee; (c) disposition fee; (d) any financing, refinancing, or guaranty fees payable to the Manager or its affiliates; (e) carried interest / Class M sharing ratio above the 15% preferred return; (f) cap or scope of operating-expense reimbursements payable to the Manager or affiliates."),
  QItem("Please provide a worked net-to-LP example at gross IRR scenarios of 0%, 10%, 15%, and 20%, illustrating the cash flows and timing of all fees, the preferred return, and any catch-up or carry."),
  QItem("Please confirm the Manager's GP commitment, in dollars and as a percentage of total committed capital, and how it is funded (cash vs. fee waiver)."),
  QItem("Please describe any related-party services provided to the Company by Manager affiliates (development management, brokerage, property management, marketing, legal, etc.), the basis on which their fees are set, and how those fees compare to third-party market rates."),

  H1("2. Track Record and Financial Information"),
  QItem("Please provide audited prior-fund financial statements and an audited or independently-verified prior-fund track record by vintage, including: (a) DPI, TVPI, gross IRR, net IRR; (b) realized vs. unrealized splits; (c) write-downs and write-offs; (d) any deals that did not achieve entitlement, regardless of outcome."),
  QItem("Please provide the name and contact for the third-party fund administrator and the audit firm engaged for Allied American Land Fund LLC."),
  QItem("Please provide the most recent unaudited statement of net assets and capital account statement for the Fund."),

  H1("3. Capital Raising and Deployment Status"),
  QItem("As of the most recent month-end, please provide: (a) total capital committed; (b) total capital called; (c) total capital deployed into Properties; (d) number and identity of investors; (e) reconciliation to the most recent SEC Form D filing."),
  QItem("Please reconcile the $120,000,000 targeted raise stated in the PPM against actuals reported in the Form D / D-A filings (most recent D/A reflects approximately $2.555M raised across 16 investors as of April 15, 2025)."),
  QItem("Please provide a current asset-level inventory: parcels owned, basis, current appraised value, debt outstanding, lender, loan-to-value, recourse status, and projected exit timing."),

  H1("4. Business Plan and Exhibit A"),
  QItem("Please deliver the full Company Business Overview as a fixed exhibit to the PPM (as opposed to a periodically-updated InvestNext portal), including the underwriting model, sources and uses, target geographies, target hold periods, and exit assumptions."),
  QItem("Please describe how the $7,600,000 \"Deal Acquisition Cost (Marketing and Advertising)\" line in Use of Proceeds is spent, and what portion (if any) flows to VestRight or any sponsor-affiliated educational or marketing business."),
  QItem("Please clarify the $55M of \"redeployed\" capital referenced in footnote 3 of the Use of Proceeds — its source, intended use, and reconciliation to the $120M Sources figure."),

  H1("5. Conflicts of Interest"),
  QItem("Please describe the relationship and deal-allocation policy between Allied American Land Fund LLC, Allied Land Fund II (referenced on alliedlandfund.com), any other Allied-sponsored vehicles, and any direct investments held by Mr. Bjugan, the Manager, or its affiliates."),
  QItem("Please describe how investors are sourced and what percentage of current and prospective LPs come from the VestRight customer base or other sponsor-affiliated educational programs. Please attach copies of marketing collateral used in general solicitation under Rule 506(c)."),
  QItem("Please describe the side-letter program: typical terms granted, types of investor that receive them, and whether the Fund is willing to grant a most-favored-nations (MFN) right."),
  QItem("Please describe the Manager's policy regarding preferred-equity capital that may subordinate Class A holders, including any consent rights existing investors would have."),

  H1("6. Governance and LP Protections"),
  QItem("Please confirm whether the Manager would expand the \"cause\" definition for removal to include gross negligence, willful breach of fiduciary duty, material breach of the LPA, and a key-person event tied to Mr. Bjugan."),
  QItem("Please confirm whether the Manager would constitute a Limited Partner Advisory Committee (LPAC) with affiliate-transaction approval rights."),
  QItem("Please describe the Manager's policy on independent valuation: who computes AUM (the redemption-gate denominator), how often, by what methodology, and whether a third-party valuation agent is engaged."),
  QItem("Please confirm whether the Manager will commit to deliver Schedule K-1s by March 15 each year, and the procedure if delivery is delayed."),

  H1("7. Liquidity and Redemption"),
  QItem("Please provide the historical redemption-request volume (number of requests, dollar amounts, and percentage of AUM by quarter), and confirm whether any redemption request has been gated, deferred, or partially fulfilled."),
  QItem("Please confirm that the redemption price (invested capital + accrued unpaid pref) is the only liquidity outcome available to investors and that there is no mechanism by which a Class A holder shares in unrealized appreciation."),
  QItem("Please describe how the Manager would handle a \"run on the gate\" — multiple simultaneous redemption requests at or near the 10% AUM cap — including any pro-rata mechanic."),

  H1("8. Leverage, Guaranties, and Insurance"),
  QItem("Please provide the Fund's current and target leverage policy (LTV at the asset and Fund level), recourse status, and any cross-collateralization or cross-default provisions across properties."),
  QItem("Please disclose all guaranties (full or partial, completion, repayment, non-recourse \"bad-boy\") provided by the Fund, the Manager, or affiliates to third-party lenders, and the indemnification mechanics."),
  QItem("Please describe the insurance program (general liability, property, builders' risk, environmental) and any uninsured or underinsured exposures known to the Manager."),

  H1("9. Tax Structure"),
  QItem("Please confirm the Fund's expected positions on UBTI for tax-exempt LPs and ECI / FIRPTA for non-U.S. LPs, and whether any blocker structures are available."),
  QItem("Please describe any contemplated REIT election, REIT subsidiary, or other material tax-structure change, including investor consent rights."),
  QItem("Please confirm whether the Manager will commit to use commercially reasonable efforts to qualify for the \"Fractions Rule\" at the Fund level."),

  H1("10. Regulatory, Legal, and Reputational"),
  QItem("Please confirm whether the Manager, the Sponsor, or any of their principals or affiliates have been subject to any of the following in the past ten years: (a) SEC, FINRA, or state-securities enforcement; (b) civil litigation related to securities, real estate, or fiduciary matters; (c) criminal proceedings; (d) bankruptcy or assignment for the benefit of creditors; (e) regulatory investigations not yet resolved."),
  QItem("Please provide a list of material litigation, claims, or threatened claims involving the Fund, the Manager, the Sponsor, or any of their affiliates, including any disputes with prior fund investors or counterparties."),
  QItem("Please confirm whether any principal would be a \"Bad Actor\" under Rule 506(d) but for a waiver, and disclose any pre-September 23, 2013 events that would otherwise be reportable."),

  H1("Closing"),
  Body("Please direct responses to [primary diligence contact, email, secure file-transfer location]. Where confidential information cannot be provided in writing, we are happy to schedule a call subject to a mutual non-disclosure agreement. We anticipate that complete responses will allow us to either advance to a deeper review or to provide you with a final decline within 21 calendar days of receipt."),
  Body("Thank you for your time and cooperation."),
  Body(" "),
  Body("[Signature block / Name / Title / Family Office]"),
];

const doc = new Document({
  creator: "Arkadiy Goykhberg",
  title: "Allied American Land Fund — Sponsor Diligence Questionnaire",
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
      { reference: "qnumbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "subletters",
        levels: [{ level: 0, format: LevelFormat.LOWER_LETTER, text: "%1)", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }] },
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
        children: [new TextRun({ text: "CONFIDENTIAL", size: 16, color: "808080", italics: true })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Allied American Land Fund — Sponsor DDQ  |  Page ", size: 16, color: "808080" }),
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
  const out = "/sessions/elegant-stoic-thompson/mnt/Investing/Allied American Land Fund - Sponsor Diligence Questionnaire.docx";
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, buf.length, "bytes");
});
