import type { AppContent } from "../types";

// Code Snap — standalone (U.S. law / legal reference). Lifted from the
// founder-reviewed brief at content-briefs/code-snap.md (7-argument arc), in the
// measured tone calibrated on NIOSH/ICD. Per the series rule, the brief's
// "backup" argument is replaced with a data-provenance card, and arg 7 (pricing)
// becomes the SupportBand rather than a feature card. No screenshots yet →
// placeholder hero + copy-only desktop band. Supporter model adds a 5th theme
// ("Classical Law" navy-and-gold), the domain signature.

export const codeSnap: AppContent = {
  slug: "code-snap",
  name: "Code Snap",
  category: "Reference / Business",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Paralegals, legal assistants, compliance officers, law students, attorneys, and policy researchers who pull statute and regulation sections — and cite them — many times a day",
  tagline: "Look up U.S. law, copy it Bluebook-ready, and keep the sections you cite.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "USC + CFR · 2026 edition",
    headline: { lead: "The U.S. Code and the CFR,", accent: "in one app." },
    subheadline:
      "All 86,874 sections of the United States Code and the CFR on your phone. Search a citation, copy it in the Bluebook format the memo expects, and keep the sections a matter turns on. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "86,874 provisions",
    "54 USC + 5 CFR titles",
    "4 Bluebook formats",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and cite them.",
    intro:
      "These sections are free to read online. The app just makes it easier: search a citation on your phone, copy it Bluebook-ready in a tap, keep the sections a matter turns on, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a citation, a section number, or a plain phrase, and the matches come up. It reads the way lawyers type — “26 USC 501”, “29 C.F.R. § 1910.132”, or an acronym like FLSA or ADA all resolve to the right provision. Copy the section straight to the clipboard for the brief.",
      },
      {
        title: "Bluebook citation, four formats",
        body: "One tap copies the provision in the form the memo expects — Short, Bluebook, Bluebook with an excerpt, or the full text — ready to paste into the draft, with an optional current-year toggle.",
      },
      {
        title: "Keep the sections your matter turns on",
        body: "You return to the same few dozen provisions, per matter and per practice area. Star them onto Favorites and group them into collections that match how you work — § 501(c)(3) Exemption, OSHA PPE, Rule 10b-5, FLSA Overtime — with a note on any provision. On the desktop you browse the full USC → CFR → Title → section hierarchy to assemble those sets.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a PDF or CSV — the full text, your notes, and proper citations in each row. Hand a summer associate the governing sections, keep a compliance checklist beside the audit binder, or send a reg set to co-counsel. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full USC and CFR set lives on the device, so search and every citation format keep working without a signal — handy in a deposition room, a courthouse basement, or a plane.",
      },
      {
        title: "Straight from the source",
        body: "The U.S. Code comes from the House (uscode.house.gov) and the CFR from eCFR (ecfr.gov / GPO) — U.S. federal public-domain law, used as published. 86,874 provisions across 54 USC titles and five core CFR titles; nothing invented, and nothing paraphrased.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same USC and CFR data, with a keyboard, a wider screen, and easier export.",
    points: [
      {
        title: "Browse the full hierarchy",
        body: "A dedicated Browse tab: pick USC or CFR, drill Title → section, and assemble matter sets far faster than you can on a phone.",
      },
      {
        title: "Native PDF & CSV export",
        body: "Generate clean, print-ready PDF and CSV reports of any collection, complete with full text, your notes, and citations — the export headline, and it lives here.",
      },
      {
        title: "Bluebook, four formats",
        body: "Copy the exact citation form your court or house style expects — Short, Bluebook, Bluebook + excerpt, or full text — with an optional current-year toggle, from a screen that stays open beside your draft.",
      },
      {
        title: "Unlimited favorites & every theme",
        body: "The one-time desktop license lifts the free-tier caps and unlocks every accent theme, including Classical Law, on an all-day research surface.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The lookup, the Bluebook citations, favorites, and collections are free on iPhone, with no ads and no account. If Code Snap saves you time and you'd like to support its development, a one-time coffee-price unlock (a small tip on iOS, a one-time license on Mac and Windows) adds a set of accent-color themes — including the navy-and-gold Classical Law — and, on desktop, unlimited favorites and collections. It's a thank-you, not a subscription.",
    free: "System · Light · Dark",
    themes: [
      { name: "Nectarine", hex: "#D7897F" },
      { name: "Pêche", hex: "#F9B95C" },
      { name: "Menthe", hex: "#96C7B3" },
      { name: "Lagune", hex: "#6398A9" },
      { name: "Classical Law", hex: "#C9A961" },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From a citation to your own library.",
    steps: [
      {
        n: "01",
        title: "Type a citation or a phrase",
        body: "“26 USC 501”, “1910.132”, “FLSA”, or the problem in plain words; on-device search returns the section instantly.",
      },
      {
        n: "02",
        title: "Copy it Bluebook-ready",
        body: "Pick Short, Bluebook, Bluebook + excerpt, or full text, and it's on your clipboard, formatted for the memo.",
      },
      {
        n: "03",
        title: "Keep it, group it, export it",
        body: "Star the section into a matter collection so it's there tomorrow, then export the whole set as a clean PDF or CSV for the team.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The U.S. Code and the CFR,", accent: "on your phone." },
    body: "Code Snap ships the complete United States Code and five core CFR titles, indexed for full-text search — 165 MB, entirely on-device. No subscription, no incremental downloads.",
    stats: [
      { num: "86,874", label: "USC + CFR provisions" },
      { num: "59", label: "Titles indexed (54 USC + 5 CFR)" },
      { num: "4", label: "Bluebook formats, one tap" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is Code Snap free?",
      answer:
        "The core is free: search, Bluebook citations, favorites, and collections, with no ads and no account. If you want to support development, a one-time coffee-price unlock (a small tip on iOS, a one-time license on Mac and Windows) adds accent-color themes — and, on desktop, unlimited favorites and collections. No subscription, ever.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The entire USC + CFR dataset — 86,874 provisions, 165 MB — ships inside the app; search, favorites, collections, and every citation format work with no connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None for lookups. Code Snap makes zero network requests to search or cite; your favorites, collections, and notes stay on your device. The optional desktop license activation is the only network call, and only when you choose to unlock.",
    },
    {
      question: "Are the citations Bluebook-correct, and how current is the law?",
      answer:
        "Citations render in four formats (Short, Bluebook, Bluebook + excerpt, full text) with an optional current-year toggle. The USC data comes from the House (uscode.house.gov) and the CFR from eCFR/GPO — USC refreshes quarterly and CFR daily upstream, delivered as free in-app data updates.",
    },
    {
      question: "Which CFR titles are included, and is it on Mac and Windows?",
      answer:
        "The full U.S. Code (54 titles) plus five high-demand CFR titles: 12 (Banks), 17 (Securities), 21 (Food & Drugs), 26 (Tax), and 29 (Labor/OSHA). iPhone for citing on the move; Mac and Windows for browsing the full hierarchy, building matter collections, and exporting PDF/CSV.",
    },
    {
      question: "Is this legal advice, or a substitute for a lawyer's judgment?",
      answer:
        "No. Code Snap is a statute- and regulation-lookup utility for trained legal and compliance professionals; interpreting and applying the law still requires professional judgment. Always confirm against the official source for a filing.",
    },
  ],

  brand: {
    accent: "#618B3F",
    accentDeep: "#4E7231",
    monogram: "co",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "Code Snap — the U.S. Code and CFR in one app",
    description:
      "The United States Code and the CFR offline on iPhone, Mac, and Windows: search and copy 86,874 provisions, with four Bluebook citation formats, favorites, collections, and print-ready PDF/CSV export. Free core, no ads, no account.",
    keywords: [
      "US Code",
      "CFR",
      "Bluebook citation",
      "statute lookup",
      "legal research app",
      "USC offline",
      "Code Snap",
    ],
  },
};
