import type { AppContent } from "../types";

// IOELV Snap (EU) — chem-safety family. From content-briefs/ioelv-snap-eu.md,
// measured house tone. No real screenshots yet → placeholder hero, no showcase,
// copy-only desktop band. IOELV-unique angle: multilingual (DE/FR/IT/ES) search.

export const ioelvSnapEu: AppContent = {
  slug: "ioelv-snap-eu",
  name: "IOELV Snap (EU)",
  family: "chem-safety",
  category: "Medical / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "EU occupational hygienists, industrial-hygiene consultants, and EHS managers who check IOELV/BOELV limits, CMR status, and member-state OELs across borders",
  tagline: "Look up EU exposure limits in any EU language, keep the substances you check, and export when you need to.",
  pricing: "Free core + one-time Supporter unlock",

  hero: {
    badge: "IOELV · BOELV · CMR",
    headline: { lead: "EU exposure limits,", accent: "in one app." },
    subheadline:
      "IOELV, BOELV, CMR category, and member-state OELs for 187 substances on your phone. Search a substance — in any EU language — and copy the value, keep the ones you check, and export when you need to. No ads, no account.",
    ctaNote: "Free to start · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "187 substances",
    "49 CMR substances",
    "27 member states",
    "Works offline",
    "No ads, no subscription",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every EU exposure limit is law, so all of it is free to look up online — EUR-Lex, ECHA, twenty-seven national OEL portals. The app just makes it easier: search on your phone in any EU language, copy the value in a tap, keep the substances you check, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a substance name, a CAS number, an EC number, or a formula, and the match comes up. Each hit opens to the three tiers in regulatory order — IOELV, BOELV, and STEL, in ppm and mg/m³ — with the CMR category, CLP H-statements, notations, and the exact source Directive, each copyable in a tap.",
      },
      {
        title: "Search in any EU language",
        body: "A German drum reads Benzol, a French SDS reads Benzène, an Italian register reads Benzene, a Spanish label reads Benceno — all the same substance. IOELV Snap indexes DE/FR/IT/ES synonyms with diacritic-folding search, so a foreign label resolves to the right EU entry.",
      },
      {
        title: "The substances you check, kept together",
        body: "You tend to check the same few dozen substances your plants use, not all 187. Star the ones you use and group them into collections that match the work — solvent degreasing, an isocyanate line, a CMR watchlist, a foundry survey — so a site's substances are together before you walk in.",
      },
      {
        title: "Export or print your sets",
        body: "Export any collection — or a Compare table, a TWA calculation, or an auto-filled EU SDS draft — as a clean PDF or CSV, each carrying the EUR-Lex / EU Open Data attribution. Hand a site team the substances in scope, or attach the limits to a monitoring report. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The complete 187-substance dataset lives on the device — every limit tier, the CMR classifications, the CLP statements, and the member-state OEL links — so search keeps working without a signal. An Emergency tab surfaces first-aid, PPE, and the EU-wide 112 line offline.",
      },
      {
        title: "Straight from the source",
        body: "Every value comes from the EU IOELV/BOELV/CMR Directives via EUR-Lex, used as published under the EU Open Data Directive 2019/1024, with member-state OELs shown as links to the national authority. It's an independent app, not affiliated with ECHA or the European Commission.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same EU data, and adds what a larger screen, a keyboard, and a printer allow: comparing substances side by side, drafting SDS documents, and exporting reports.",
    points: [
      {
        title: "Compare, side by side",
        body: "Line up to four substances and read their IOELV/BOELV/STEL/CMR values in parallel columns — the fast way to scope a survey or reconcile a mixed process line.",
      },
      {
        title: "PDF, CSV, and SDS drafts",
        body: "Export Compare tables, collections, TWA calculations, and auto-filled 16-section EU SDS drafts to PDF or CSV — each with EUR-Lex attribution, an auditable deliverable.",
      },
      {
        title: "Keyboard-first",
        body: "A ⌘K command palette, an eight-tab rail (Search · Compare · TWA · Convert · SDS · Favorites · Collections · Settings), a resizable split view, and native macOS menus.",
      },
      {
        title: "App themes",
        body: "The four Supporter accent themes on a window that stays open all day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Search, the full 3-tier limits detail, the Emergency tab, multilingual synonym search, favourites, and collections are free on iOS — with no ads and no account. A one-time, coffee-price Supporter unlock (never a subscription, never a wall) adds a set of accent themes and premium app icons to make the app yours. Payment is support, not a paywall.",
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
    heading: "From a lookup to your own reference.",
    steps: [
      {
        n: "01",
        title: "Search the substance",
        body: "Type the name, CAS, EC number, or formula in EN/DE/FR/IT/ES; the on-device index returns the substance instantly.",
      },
      {
        n: "02",
        title: "Read all three tiers",
        body: "See IOELV, BOELV, and STEL side by side in ppm and mg/m³, with CMR category, CLP statements, and the source Directive; check the member-state OEL for where you are.",
      },
      {
        n: "03",
        title: "Keep it, and export it clean",
        body: "Star the substances your sites handle into collections you recall offline, then export a set — or a Compare table or SDS draft — as a print-ready PDF or CSV.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "Every EU tier and OEL,", accent: "on your phone." },
    body: "IOELV Snap ships the EU IOELV, BOELV, and CMR limits with member-state OELs across 27 states and multilingual synonyms — indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "187", label: "EU substances" },
      { num: "49", label: "CMR substances" },
      { num: "957", label: "Member-state OEL rows" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is IOELV Snap free?",
      answer:
        "Yes. Search, the full 3-tier limits detail, the Emergency tab, multilingual search, favourites, and collections are all free on iOS, with no ads and no account. A one-time coffee-price Supporter unlock adds accent themes and premium app icons — one purchase, not a subscription.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. All 187 substances, every limit tier, and the CMR/CLP data ship inside the app; search, favourites, collections, and the TWA and unit-conversion tools all work with no signal.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. IOELV Snap has no analytics, no account, and no tracking; your favourites and collections stay on your device (GDPR by design).",
    },
    {
      question: "How do the limits update?",
      answer:
        "Free updates land as the EU amends its Directives — semi-annual bundles, plus an EUR-Lex push for supporters. When a new CMR Directive amendment is adopted, the affected substances are folded in; no re-purchase.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone is for lookups in the field; Mac and Windows add browsing the full set, comparing substances side by side, and generating PDF/CSV reports and SDS drafts. Same data, different strengths per platform.",
    },
    {
      question: "Is this a substitute for professional judgement?",
      answer:
        "No. IOELV Snap is a limits-lookup and calculation tool; exposure assessment and compliance decisions still require a qualified occupational hygienist. Member-state OELs are shown as links to the national authority.",
    },
  ],

  brand: {
    accent: "#7C8A2E",
    accentDeep: "#63711F",
    monogram: "io",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "IOELV Snap (EU) — EU exposure limits in one app",
    description:
      "EU IOELV, BOELV, and CMR limits with member-state OELs, offline on your phone: 187 substances across 27 states, with multilingual (EN/DE/FR/IT/ES) search and TWA tools. Save collections, export PDF/CSV. Free core, no ads.",
    keywords: [
      "IOELV",
      "BOELV",
      "EU exposure limits",
      "OEL",
      "CMR",
      "occupational hygiene",
      "EUR-Lex",
      "IOELV Snap",
    ],
  },
};
