const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, BorderStyle, PageNumber, Footer, Header
} = require('docx');

const H1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
const Body = (text) => new Paragraph({ children: [new TextRun(text)], spacing: { after: 160 } });
const RichBody = (runs) => new Paragraph({ children: runs, spacing: { after: 160 } });
const Bullet = (text) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun(text)], spacing: { after: 100 } });
const B = (text) => new TextRun({ text, bold: true });
const T = (text) => new TextRun(text);

const titleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "What I Found in the Allied Land Fund Documents", bold: true, size: 32 })],
  spacing: { after: 120 },
});
const subtitleP = new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "A plain-English summary of the risks", size: 24, italics: true, color: "666666" })],
  spacing: { after: 280 },
});

const ruleP = new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "888888", space: 1 } },
  spacing: { after: 240 },
  children: [new TextRun(" ")],
});

const children = [
  titleP,
  subtitleP,

  H1("What this fund is, in one paragraph"),
  Body("Allied American Land Fund is a private real-estate fund based in Scottsdale, Arizona. It collects money from wealthy individuals and uses it to buy raw, undeveloped land. The plan is then to either get the land approved for development (called \"entitlement\"), hold it until prices rise, or quickly resell it to a builder. Investors are promised a 15% per year return — but only if and when the manager decides to pay it. There is no public stock to buy or sell; once your money goes in, it is hard to get out."),

  H1("How the deal is set up"),
  Bullet("You put in at least $100,000 and receive \"Class A\" units. Class A units do not vote and do not own a piece of any profits above the 15% promised return. All upside above 15% goes to the manager."),
  Bullet("The fund is \"evergreen,\" meaning it never has to end. The manager controls when (or whether) you ever get your money back."),
  Bullet("You can ask for your money back after one year, but the manager has up to a year to pay you, and only up to 10% of the fund's total assets can be paid out per year. If everyone asks at once, you wait."),
  Bullet("If the fund is sold, the manager can force you to sell with them whether you want to or not (\"drag-along\")."),
  Bullet("The manager cannot be removed except for a serious crime conviction. Bad performance, careless management, and even breaking duties to investors are not enough to fire them."),

  H1("The biggest concerns I have"),

  RichBody([B("1. The document does not say what the manager gets paid. "), T("This is unusual and serious. The 68-page memorandum mentions \"asset management fees,\" \"carried interest,\" and \"reimbursements\" repeatedly, but never tells you the percentages. You cannot calculate what return you would actually keep. A normal private fund document would put these numbers in a clear table on page two.")]),
  Body("More plainly: imagine signing up for a credit card where the interest rate is left blank and the bank says they will fill it in later at their discretion. You would not sign that card. This document does the same thing."),

  RichBody([B("2. The business plan is missing. "), T("The memorandum keeps pointing to an \"Exhibit A — Company Business Overview.\" When you turn to that exhibit, it is one sentence telling you to log into a web portal where the plan is \"periodically updated.\" That means the plan is not part of what you sign — and it can be changed at any time without your consent.")]),

  RichBody([B("3. The 15% return is a ceiling, not a floor. "), T("Most private real-estate funds work like this: the investor gets paid a preferred return (the \"pref\") first, and then the investor and manager share any remaining profit. Here, the investor never shares in the upside. The most you can ever earn is 15% per year. But you take all of the downside if the land loses value. That is a poor risk-reward trade in any market, and especially this one.")]),

  RichBody([B("4. The fund is raising far less than it claims to want. "), T("The memorandum says it is targeting $120,000,000. The most recent SEC filing shows only about $2.5 million raised, from 16 investors, after roughly five months of fundraising. That is about 2% of the goal. Either the offering is failing or the $120M figure was never realistic.")]),

  RichBody([B("5. The sponsor's main business is selling courses. "), T("Cody Bjugan, the founder, runs an education company called VestRight that charges $9,000 to $16,000 to teach people how to invest in raw land. He uses podcasts, seminars, and \"masterminds\" to promote it. The same company is now offering investments to the same audience. That overlap is the kind of arrangement the SEC has flagged as a recurring problem in coach-promoter cases. We do not know yet whether his investors are mostly his course customers, but we should ask before we put money in.")]),

  RichBody([B("6. The track record cannot be checked. "), T("The memorandum admits that no one has independently verified the manager's claims of past success. There are no audited prior-fund returns. The lawyer who drafted the document represents the fund and the manager, not the investors — and you waive your right to object to that.")]),

  RichBody([B("7. You owe taxes even if you get no cash. "), T("Real-estate partnerships often generate \"phantom income\" — taxable profit on paper that you have not received in cash. You may owe the IRS in years when nothing has been distributed to you. The fund also says it may not be able to send your tax form (K-1) by the normal April deadline.")]),

  RichBody([B("8. The fund can take on a lot of debt. "), T("The fund is allowed to borrow up to 70–80% of the value of its land, and one missed loan payment can trigger problems across multiple properties at once. The manager is not personally on the hook for these loans — the fund is. That means the manager has less skin in the game than you do.")]),

  H1("How I would describe this in one line"),
  Body("It is a single-promoter, fee-opaque, illiquid, capped-upside land fund whose primary marketing channel is the founder's own paid education business. The strategy can work, but as written this deal is too sponsor-favorable for our family office to consider until they answer specific questions and improve the terms."),

  H1("What I am recommending"),
  Bullet("Decline the investment in its current form."),
  Bullet("Send a written list of questions to the sponsor (delivered separately as a Word document)."),
  Bullet("Re-evaluate only if and when the sponsor provides specific fee numbers, audited prior-fund results, an actual business plan as part of the offering documents, and stronger investor protections (independent valuation, the ability to remove the manager for cause beyond crime convictions, an MFN clause on side letters, and clarity on how investors are sourced)."),

  H1("Glossary of terms used above"),
  Bullet("PPM (Private Placement Memorandum): the long legal document a private fund hands to potential investors. It is supposed to disclose all material risks and terms."),
  Bullet("Accredited investor: someone who legally qualifies to invest in private deals because of income or net worth thresholds set by the SEC."),
  Bullet("Preferred return / pref: a fixed percentage promised to investors before the manager takes any profit. Here it is 15% per year. \"Cumulative\" means it stacks up over time if it is not paid; \"non-compounding\" means it does not earn interest on itself."),
  Bullet("Carried interest / carry: the share of profits the manager earns above the preferred return. The percentage is not disclosed in this document."),
  Bullet("Drag-along right: a clause that lets the majority owner force minority owners to sell at the same time. Here, the manager has it; you do not."),
  Bullet("Side letter: a separate written deal with one investor giving them better terms than other investors get. Common in private funds; we would normally ask for an MFN (most-favored-nations) clause to ensure we get any better terms granted to anyone else."),
  Bullet("Form D: a short SEC filing private funds must submit when they sell securities. It tells the SEC how much they have raised and from how many investors. We use it to fact-check what the fund tells us."),
  Bullet("UBTI / ECI / FIRPTA: tax categories that can hit retirement accounts and foreign investors when private real-estate funds borrow money or sell U.S. property. They generate unexpected tax bills."),
  Bullet("REIT election: a tax structure choice that real-estate funds sometimes make. It changes how income is reported and taxed and can be done without your consent in this fund."),
];

const doc = new Document({
  creator: "Arkadiy Goykhberg",
  title: "Allied American Land Fund — Plain-English Summary",
  styles: {
    default: { document: { run: { font: "Calibri", size: 24 } } }, // 12pt body for readability
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Calibri", color: "1F3864" },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
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
        children: [new TextRun({ text: "Family Notes — for discussion only", size: 16, color: "808080", italics: true })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Allied American Land Fund — Plain-English Summary  |  Page ", size: 16, color: "808080" }),
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
  const out = "/sessions/elegant-stoic-thompson/mnt/Investing/Allied American Land Fund - Plain-English Summary.docx";
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, buf.length, "bytes");
});
