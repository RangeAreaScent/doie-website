import type { AppContent } from "../types";

// Tax Law Snap — region-picker app. From content-briefs/tax-law-snap.md. Value
// prop is region-agnostic (shared shell); per-region coverage lives in the
// Regions section. Measured tone. backup → provenance; arg 7 → SupportBand.
// No sibling row (regions live inside). No screenshots yet → placeholder hero
// + copy-only desktop band.
// Renamed from Tax Snap (slug: tax-snap) 2026-09-22 — a redirect from the old
// slug is in next.config.mjs since the native iOS app's AppLinks.privacyPolicy
// and its live App Store Connect Privacy Policy URL both still hardcode the
// old /snap/tax-snap/privacy path.
// 2026-09-22: IRS Snap folded in as the US region (its standalone
// content/apps/irs-snap.ts is retired, redirected to this page). First
// release phased to US + UK only (founder decision 2026-09-21) — AU, CA, NZ,
// and IE are parked (code/data preserved in the app, not user-visible yet),
// not "coming soon" in the SG/HK/IN sense. See the iOS repo's
// Tax-Snap/PARKED_REGIONS.md for exact status per region.

export const taxLawSnap: AppContent = {
  slug: "tax-law-snap",
  name: "Tax Law Snap",
  category: "Finance / Business",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "US CPAs, enrolled agents, tax preparers, and tax attorneys working the Internal Revenue Code, 26 CFR, and IRS forms — and UK accountants, tax advisers, and bookkeepers working HMRC statutes, manuals, and rates. More jurisdictions are planned as future regions in the same app.",
  tagline: "Look up tax statutes, manuals, rulings, and rates for your jurisdiction — and keep the ones you use.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "US · UK · 2026 edition",
    headline: { lead: "Tax statutes, manuals, rulings, and rates,", accent: "for your jurisdiction." },
    subheadline:
      "Statutes, tax-authority manuals, rulings, and rate tables for the jurisdiction you work in — searchable on your phone. Copy a citation in a tap, keep the sources you cite often, and export when you need to. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "2 jurisdictions in one app",
    "37,000+ sources across both",
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
        title: "Citations, formatted per region",
        body: "The copy format follows the jurisdiction — a Bluebook-style citation, or the section plus heading, or the full body, for a US Code section or a Treasury reg; OSCOLA in the UK — copied correctly in a tap, ready for the memo, the return, or the client email.",
      },
      {
        title: "Export or print your sets",
        body: "Export any set — or a single statute, guidance page, or rate — as a clean PDF, or a whole collection as CSV for your working papers. Hand a new joiner the standard sources for a client, or keep a topic set close. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full dataset for your region lives on the device, so search and citations keep working without a signal.",
      },
      {
        title: "Straight from the source",
        body: "US data comes from the US Code (uscode.house.gov), the eCFR (ecfr.gov), and irs.gov — public domain. UK data is legislation.gov.uk + gov.uk, reused under the Open Government Licence v3.0. Tax Law Snap is an independent app, not affiliated with the IRS or HMRC (or, for future regions, the ATO, the CRA, IRD, or Revenue.ie).",
      },
    ],
  },

  regions: {
    eyebrow: "Regions",
    heading: "One app, the jurisdiction you work in.",
    intro:
      "Tax Law Snap covers two jurisdictions in one app, with more on the way. Pick your region and carry just that region pack — a UK user never downloads the US data, and vice versa. Switch any time from the in-app region selector; the app is the same everywhere, and only the data, the authority, and a couple of region-specific touches change.",
    items: [
      {
        code: "US",
        name: "United States",
        authority: "IRS",
        size: "31 MB",
        license: "Public domain (US Code + eCFR + irs.gov)",
        note: "One index spans the Code, the regs, the forms, and the guidance.",
        stats: [
          { value: "8,296", label: "IRC + Treasury reg provisions" },
          { value: "1,036", label: "IRS Forms, schedules & notices" },
          { value: "978", label: "IRS Publications" },
        ],
      },
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
    ],
    footnote:
      "Coming as regions, inside the same app and selector — no new download or purchase: Australia, Canada, New Zealand, and Ireland, with Singapore, Hong Kong, and India further out.",
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
        title: "Keyboard-first power use",
        body: "A ⌘K command palette, ⌘1–6 tab shortcuts, ⌘F/⌘C/⌘D, and a native menu bar — built for a tool you touch hundreds of times a day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The core of Tax Law Snap — search across every Act, Code section, and manual, the detail views, favourites, collections, and PDF/CSV export — is free on iPhone, in every region. The work you need in front of a client costs nothing. If you want to support development, a one-time coffee-price unlock (never a subscription, never ads) adds a set of accent-colour app themes and matching app icons. On Mac and Windows the app is a one-time licence. Payment is support, not a wall.",
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
        body: "Choose your region (US · UK, with more on the way) and download its pack once; from then on it's fully offline. Switch any time from the selector.",
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
    body: "Tax Law Snap ships each jurisdiction as its own offline region pack — statutes, tax-authority manuals, rulings, and years of rate tables, indexed for full-text search. One app; regions live inside.",
    stats: [
      { num: "2", label: "Jurisdictions in one app" },
      { num: "37,000+", label: "Sources across both" },
      { num: "1", label: "App (regions inside)" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Which countries does Tax Law Snap cover?",
      answer:
        "Two jurisdictions ship today: the US (IRS — the Internal Revenue Code, 26 CFR, Forms, and Publications) and the UK (HMRC — statutes, manuals, and rates). Australia, Canada, New Zealand, and Ireland are planned as future regions inside the same app — not separate downloads.",
    },
    {
      question: "Can I use more than one jurisdiction?",
      answer:
        "Yes. Tax Law Snap is one app, and you can download more than one region pack. A practitioner working across, say, the US and the UK can carry both. Your favourites and collections are kept per region.",
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
        "None. Tax Law Snap makes zero network requests. Your favourites, collections, and notes stay on your device.",
    },
    {
      question: "How current is the data, and is it on Mac and Windows?",
      answer:
        "Each region refreshes on its own cadence — the US dataset annually each October, the UK dataset each quarter after the relevant Budget or Finance Act — no re-purchase. iPhone is for lookups on the move; Mac and Windows add full-text search inside manual bodies and print-ready PDF/CSV export.",
    },
    {
      question: "Is this a substitute for professional tax advice?",
      answer:
        "No. Tax Law Snap is a reference tool for trained professionals; it reproduces public-sector information under each authority's licence and is not affiliated with the IRS or HMRC (or, for future regions, the ATO, the CRA, IRD, or Revenue.ie). Specific matters still require a qualified adviser's judgement.",
    },
  ],

  brand: {
    accent: "#618B3F",
    accentDeep: "#4E7231",
    monogram: "tl",
  },

  downloads: [
    { platform: "iOS", channel: "app-store", url: "https://apps.apple.com/us/app/tax-law-snap/id6814816725" },
    { platform: "macOS", channel: "mac-app-store", url: "https://apps.apple.com/us/app/tax-law-snap/id6814816725" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "Tax Law Snap — Tax statutes, manuals, rulings, and rates in one app",
    description:
      "The Internal Revenue Code, 26 CFR, IRS Forms and Publications, and HMRC statutes, manuals, and rates — one app, pick your region, fully offline on iPhone, Mac, and Windows. More jurisdictions coming. Per-region citations, saved collections, PDF/CSV export. Free core, no ads.",
    keywords: [
      "tax lookup",
      "tax legislation",
      "Internal Revenue Code",
      "IRC lookup",
      "HMRC manuals",
      "tax research app",
      "Tax Law Snap",
    ],
  },
};
