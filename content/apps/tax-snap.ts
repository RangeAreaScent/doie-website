import type { AppContent } from "../types";

// Tax Snap — region-picker app (UK · AU · CA · NZ · IE in one app). From
// content-briefs/tax-snap.md. Value prop is region-agnostic (shared shell);
// per-region coverage lives in the NEW Regions section. Measured tone. backup →
// provenance; arg 7 → SupportBand. No sibling row (regions live inside).
// No screenshots yet → placeholder hero + copy-only desktop band.

export const taxSnap: AppContent = {
  slug: "tax-snap",
  name: "Tax Snap",
  category: "Finance / Business",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Accountants, tax advisers, and bookkeepers across the UK, Australia, Canada, New Zealand, and Ireland who pull statutes, tax-authority guidance, rulings, and rate tables many times a day",
  tagline: "Look up tax statutes, manuals, rulings, and rates for your jurisdiction — and keep the ones you use.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "UK · AU · CA · NZ · IE · 2026 edition",
    headline: { lead: "Tax statutes, manuals, rulings, and rates,", accent: "for your jurisdiction." },
    subheadline:
      "Statutes, tax-authority manuals, rulings, and rate tables for the jurisdiction you work in — searchable on your phone. Copy a citation in a tap, keep the sources you cite often, and export when you need to. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "5 jurisdictions in one app",
    "60,000+ sources across packs",
    "Per-region citations",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "These sources are free to read online. The app just makes them easier to work with: search on your phone, copy the citation in a tap, keep the handful you cite often, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy the citation in a tap",
        body: "Type a section number, a manual or ruling ID, or a plain-English topic, and the matches come up. Statute bodies render in place; a guidance page opens with its authority page ID intact. One tap copies the citation — formatted the way your jurisdiction expects — ready for a file note or an advice letter.",
      },
      {
        title: "Keep the sources you cite often",
        body: "Most work comes back to the same few dozen sources. Star them onto Favourites and group them into collections that match how you work — one per client, one per recurring question, one per return type — so the statutes, guidance pages, and rates for a matter sit together.",
      },
      {
        title: "Citations and calculators, per region",
        body: "The citation format follows the jurisdiction — OSCOLA in the UK, AGLC4 in Australia, the McGill Guide in Canada, NZLSG in New Zealand, and OSCOLA Ireland in Ireland — copied correctly in a tap. And where a region needs the maths, the calculators are built in: income-tax, FBT, and super in AU; GST/HST, CPP+EI, and RRSP in CA; GST, bright-line, and KiwiSaver in NZ.",
      },
      {
        title: "Export or print your sets",
        body: "Export any set — or a single statute, guidance page, or rate — as a clean PDF, or a whole collection as CSV for your working papers. Hand a new joiner the standard sources for a client, or keep a topic set close. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full dataset for your region lives on the device, so search, citations, and the calculators keep working without a signal.",
      },
      {
        title: "Straight from the source",
        body: "Every value is public-sector information reused under each region's licence — legislation.gov.uk + gov.uk (OGL v3.0), the ATO and legislation.gov.au, Justice Laws + CRA, legislation.govt.nz + IRD, and the Irish Statute Book + Revenue. Tax Snap is an independent app, not affiliated with HMRC, the ATO, the CRA, IRD, or Revenue.ie.",
      },
    ],
  },

  regions: {
    eyebrow: "Regions",
    heading: "One app, the jurisdiction you work in.",
    intro:
      "Tax Snap covers five jurisdictions in one app. Pick your region and carry just that region pack — a UK user never downloads the AU data, and vice versa. Switch any time from the in-app region selector; the app is the same everywhere, and only the data, the authority, and a couple of region-specific touches change.",
    items: [
      {
        code: "UK",
        name: "United Kingdom",
        authority: "HMRC",
        size: "40.58 MB",
        license: "Open Government Licence v3.0",
        note: "OSCOLA citations.",
        stats: [
          { value: "10,920", label: "Act sections (11 Acts + Schedules)" },
          { value: "16,470", label: "HMRC manual pages (10 manuals)" },
          { value: "222", label: "rate rows (2017-18 → 2026-27)" },
        ],
      },
      {
        code: "AU",
        name: "Australia",
        authority: "ATO",
        size: "44 MB",
        license: "Public domain (legislation.gov.au) + CC BY 4.0 (ATO)",
        note: "AGLC4 citations · income-tax, FBT & super-cap calculators.",
        stats: [
          { value: "8,967", label: "statute sections (10 Acts)" },
          { value: "2,207", label: "rulings & determinations (15 series)" },
          { value: "5,985", label: "guidance pages (+ 390 forms)" },
        ],
      },
      {
        code: "CA",
        name: "Canada",
        authority: "CRA",
        size: "41.5 MB",
        license: "Open Government Licence – Canada 2.0",
        note: "Bilingual EN/FR · McGill Guide citations · GST/HST, CPP+EI & RRSP calculators.",
        stats: [
          { value: "19,257", label: "statute provisions (ITA · ETA · CPP · EI)" },
          { value: "250", label: "rate rows (Federal + 10 provinces + 3 territories)" },
          { value: "22", label: "CRA Folios (+ 189 guidance entries)" },
        ],
      },
      {
        code: "NZ",
        name: "New Zealand",
        authority: "IRD",
        size: "57 MB",
        license: "CC BY 4.0 / Crown copyright",
        note: "NZLSG citations · GST, bright-line & KiwiSaver calculators.",
        stats: [
          { value: "4,931", label: "statute sections (ITA · TAA · GST · KiwiSaver)" },
          { value: "969", label: "Tax Information Bulletins" },
          { value: "960", label: "IRD rulings (7 series)" },
        ],
      },
      {
        code: "IE",
        name: "Ireland",
        authority: "Revenue.ie",
        size: "17 MB",
        license: "PSI Re-use Regulations 2005 / EU Open Data Directive",
        note: "OSCOLA Ireland citations · PPSN auto-masking.",
        stats: [
          { value: "12,793", label: "statute provisions (4 consolidated Acts)" },
          { value: "1,453", label: "Revenue eBriefs (2021–2026)" },
          { value: "1,164", label: "Tax and Duty Manuals" },
        ],
      },
    ],
    footnote:
      "Coming as regions, inside the same app and selector — no new download or purchase: Singapore, Hong Kong, and India.",
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench where the file gets built.",
    intro:
      "The desktop app works from the same region data, and adds what a wide screen, deeper indexes, and a printer allow — the surface where the deliverable gets made, not a bigger phone.",
    points: [
      {
        title: "Deeper, full-text search",
        body: "Full-text search runs across the manual bodies, not just titles, with list and detail side by side in split-view.",
      },
      {
        title: "Native PDF & CSV export",
        body: "Export any statute, guidance page, or rate as a print-ready PDF, and a whole client collection as PDF or CSV for your working papers.",
      },
      {
        title: "Calculators that export",
        body: "Where a region ships calculators (AU, CA, NZ), work out the figure and save the whole calculation as a one-click PDF.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette, ⌘1–6 tab shortcuts, ⌘F/⌘C/⌘D, and a native menu bar — built for a tool you touch hundreds of times a day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The core of Tax Snap — search across every Act and manual, the detail views, favourites, and collections — is free on iPhone, in every region. The work you need in front of a client costs nothing. If you want to support development, a one-time coffee-price unlock (never a subscription, never ads) adds the power features — calculators, export, citation tools — and a set of accent-colour app themes. On Mac and Windows the app is a one-time licence. Payment is support, not a wall.",
    free: "System · Light · Dark",
    themes: [
      { name: "Nectarine", hex: "#D7897F" },
      { name: "Pêche", hex: "#F9B95C" },
      { name: "Menthe", hex: "#96C7B3" },
      { name: "Lagune", hex: "#6398A9" },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From a jurisdiction to your practice reference.",
    steps: [
      {
        n: "01",
        title: "Pick your jurisdiction",
        body: "Choose your region (UK · AU · CA · NZ · IE) and download its pack once; from then on it's fully offline. Switch any time from the selector.",
      },
      {
        n: "02",
        title: "Search the source",
        body: "Type a section, a manual/ruling ID, or a topic; the answer surfaces instantly from the on-device index, citation included.",
      },
      {
        n: "03",
        title: "Keep and export",
        body: "Star what you reach for and file it in a client collection you can recall any time — then export it as a clean PDF or CSV when the file needs it.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "Every source for your jurisdiction,", accent: "on your phone." },
    body: "Tax Snap ships each jurisdiction as its own offline region pack — statutes, tax-authority manuals, rulings, and years of rate tables, indexed for full-text search. One app; regions live inside.",
    stats: [
      { num: "5", label: "Jurisdictions in one app" },
      { num: "60,000+", label: "Sources across all packs" },
      { num: "1", label: "App (regions inside)" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Which countries does Tax Snap cover?",
      answer:
        "Five jurisdictions in one app: the UK, Australia, Canada, New Zealand, and Ireland. Each ships as its own region pack with that country's statutes, tax-authority guidance, rulings, and rates. Singapore, Hong Kong, and India are planned as future regions inside the same app — not separate downloads.",
    },
    {
      question: "Can I use more than one jurisdiction?",
      answer:
        "Yes. Tax Snap is one app, and you can download more than one region pack. A practitioner working across, say, Australia and New Zealand can carry both. Your favourites and collections are kept per region.",
    },
    {
      question: "How do I switch regions?",
      answer:
        "From the in-app region selector — pick the jurisdiction and the whole app (search, browse, citations, rates) reflects it. No new app to install, no re-purchase.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. Every region pack ships its full dataset inside the app; search, favourites, and collections all work with no signal.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. Tax Snap makes zero network requests. Your favourites, collections, and notes stay on your device (and in Ireland, PPSN references are masked).",
    },
    {
      question: "How current is the data, and is it on Mac and Windows?",
      answer:
        "Each region refreshes with free updates on its own tax calendar — after the relevant Budget and Finance Act — no re-purchase. Every region is on iPhone, Mac, and Windows: iPhone for lookups on the move; desktop for full-text search inside manual bodies, calculators, and print-ready PDF/CSV export.",
    },
    {
      question: "Is this a substitute for professional tax advice?",
      answer:
        "No. Tax Snap is a reference tool for trained professionals; it reproduces public-sector information under each region's licence and is not affiliated with HMRC, the ATO, the CRA, IRD, or Revenue.ie. Specific matters still require a qualified adviser's judgement.",
    },
  ],

  brand: {
    accent: "#618B3F",
    accentDeep: "#4E7231",
    monogram: "ta",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "Tax Snap — Tax statutes, manuals, rulings, and rates in one app",
    description:
      "Statutes, tax-authority manuals, rulings, and rates for the UK, Australia, Canada, New Zealand, and Ireland — one app, pick your region, fully offline on iPhone, Mac, and Windows. Per-region citations and calculators, saved collections, PDF/CSV export. Free core, no ads.",
    keywords: [
      "tax lookup",
      "tax legislation",
      "HMRC manuals",
      "ATO rulings",
      "CRA folios",
      "tax research app",
      "Tax Snap",
    ],
  },
};
