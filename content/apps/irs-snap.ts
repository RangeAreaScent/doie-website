import type { AppContent } from "../types";

// IRS Snap — standalone (U.S. tax law reference). From content-briefs/irs-snap.md,
// measured tone. Domain differentiator = one index spanning IRC, Treasury regs,
// Forms, and Pubs at once. backup → provenance; arg 7 → SupportBand. No
// screenshots yet → placeholder hero + copy-only desktop band.

export const irsSnap: AppContent = {
  slug: "irs-snap",
  name: "IRS Snap",
  category: "Business / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Tax preparers, CPAs, enrolled agents, and tax attorneys who pull Internal Revenue Code sections, Treasury regs, IRS Forms, and Publications many times a day",
  tagline: "Look up any Code section, copy the citation, and keep the ones you cite — statute, reg, and form in one search.",
  pricing: "Free core (iOS) + one-time supporter unlock",

  hero: {
    badge: "IRC + 26 CFR + Forms + Pubs",
    headline: { lead: "The Code, the regs, the forms,", accent: "in one search." },
    subheadline:
      "The Internal Revenue Code, Treasury regs, IRS Forms, and Publications — over 10,000 entries — on your phone. Search a section, copy the citation the way your memo expects, and keep the ones you cite. No ads, no account.",
    ctaNote: "Free on iOS · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "8,296 IRC + reg provisions",
    "1,036 IRS Forms",
    "978 Publications",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and cite them.",
    intro:
      "The Internal Revenue Code, Treasury regs, Forms, and Pubs are free online — across three different sites with three different search boxes. The app just makes it easier: search all of it in one place, copy the citation in a tap, keep the authority a filing turns on, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a section number, a form number, or a phrase — “199A”, “1099-NEC”, “depreciation” — and the matches come up. One tap copies the citation in the form your memo expects — Bluebook, citation plus heading, or the full body — straight into the return, the memo, or an email to the client.",
      },
      {
        title: "Statute, reg, and form in one search",
        body: "One index spans all three bodies of law at once: the IRC and Treasury regs, the Forms and schedules, and the Publications. A single query surfaces the statute, the reg beneath it, and the form that implements it side by side — so a § 199A question, its reg, and the right form stop being three separate hunts across three government sites.",
      },
      {
        title: "Keep the sections you cite every season",
        body: "You cite the same few dozen provisions every season. Star them onto Favorites and group them into collections that match your practice — Schedule C Clients, S-Corp Setup, § 199A QBI, Depreciation & § 179 — so the statute, the reg, and the Form for an engagement type are together before the client sits down. Cross-link chips jump from a Code section to the reg and the Form that implement it.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a PDF or CSV — the go-to sections for a client type for a new associate, a citation sheet in the engagement file, a QBI research set for the reviewing partner. With a keyboard and a native PDF writer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full IRC, regs, Forms, and Pubs live on the device, so search and every citation format keep working without a signal — handy on a plane, in a courthouse basement, or at a rural client's kitchen table.",
      },
      {
        title: "Straight from the source",
        body: "The IRC comes from the House (uscode.house.gov), the regs from eCFR (ecfr.gov), and the Forms and Pubs from irs.gov — U.S. public-domain material, used as published. Your saved sets are keyed to stable citation IDs, so even the October update to the next tax year keeps them intact. Nothing invented.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app (Tauri + React, native Rust backend) works from the same data, with a wider screen, a keyboard, and easier export.",
    points: [
      {
        title: "Native PDF & CSV export",
        body: "Collections render to a clean, print-ready PDF via a native writer (title, source line, disclaimer, CJK-safe fonts) or to CSV — filing-ready citation sheets for the engagement file. The desktop headline.",
      },
      {
        title: "⌘K command palette",
        body: "A cmdk palette (Code / Recent / Favorites / Go-to / Actions) plus global shortcuts (⌘F search, ⌘C copy, ⌘D favorite, ⌘E export, ⌘1–4 tabs) so a power user never touches the mouse.",
      },
      {
        title: "Split view for cross-referencing",
        body: "A drag-resizable list/detail splitter that keeps the statute list and the section body on screen together, with query tokens highlighted inline in the body.",
      },
      {
        title: "Native menus & bulk actions",
        body: "Real App/File/Edit/View menus with a status bar showing the dataset scope, plus multi-select to move, copy, remove, or export many items at once.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "On iPhone, IRS Snap is free: full search across the IRC, regs, Forms, and Pubs, plus favorites and collections, with no ads and no account. If it saves you an hour a week and you want to support development, a one-time coffee-price unlock (never a subscription) adds unlimited favorites and collections, native PDF/CSV export, and four accent themes to make the app yours. It's a thank-you, not a subscription.",
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
    heading: "From a citation to your practice's library.",
    steps: [
      {
        n: "01",
        title: "Type the citation or the concept",
        body: "A section number, a form, or a phrase; search returns results across IRC, regs, Forms, and Pubs at once.",
      },
      {
        n: "02",
        title: "Copy — Bluebook or full body",
        body: "Tap the copy button and the citation is on your clipboard, ready for the memo, the return, or the client email.",
      },
      {
        n: "03",
        title: "Keep it, group it, export it",
        body: "Star the section into a collection so the statute, reg, and Form for that engagement type are together next season — then export the set as a clean PDF or CSV.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The Code, the regs, the forms,", accent: "on your phone." },
    body: "IRS Snap ships the Internal Revenue Code, Treasury regulations, IRS Forms, and Publications in one 31 MB bundle, indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "8,296", label: "IRC + Treasury reg provisions" },
      { num: "1,036", label: "IRS Forms, schedules & notices" },
      { num: "978", label: "IRS Publications" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is IRS Snap free?",
      answer:
        "Yes, on iPhone: full search across the IRC, Treasury regs, IRS Forms and Publications, plus favorites and collections, with no ads and no account. If you want to support development, a one-time coffee-price Supporter unlock (never a subscription) adds unlimited favorites/collections, PDF/CSV export, and four accent themes.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The entire 31 MB dataset ships inside the app; search, favorites, and collections all work with no connection at all.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. IRS Snap makes zero network requests. Your favorites, collections, and notes stay on your device.",
    },
    {
      question: "How current is the tax law, and how does it update?",
      answer:
        "The dataset is built from the U.S. Code (uscode.house.gov), the eCFR (ecfr.gov), and irs.gov, and refreshes on the annual (October) tax-year cadence — your saved favorites and collections carry over to the new year.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for lookups on the move; Mac and Windows for browsing the full set on a big screen, keyboard-driven search, and exporting or printing your collections.",
    },
    {
      question: "Is this a substitute for professional tax judgment?",
      answer:
        "No. IRS Snap is a fast reference to primary and IRS-published materials for trained tax professionals; the app is not legal or tax advice, and applying the law to a client's facts still requires your professional judgment.",
    },
  ],

  brand: {
    accent: "#4C8E6C",
    accentDeep: "#3B7256",
    monogram: "ir",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "IRS Snap — the Code, regs, and forms in one search",
    description:
      "The Internal Revenue Code, Treasury regs, IRS Forms, and Publications — over 10,000 entries — offline on iPhone, Mac, and Windows. One search spans statute, reg, and form; Bluebook copy, saved collections, PDF/CSV export. Free on iOS, no ads.",
    keywords: [
      "Internal Revenue Code",
      "IRC lookup",
      "Treasury regulations",
      "IRS forms",
      "tax research app",
      "26 USC",
      "IRS Snap",
    ],
  },
};
