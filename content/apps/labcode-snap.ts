import type { AppContent } from "../types";

// LabCode Snap — standalone (lab / clinical codes). From
// content-briefs/labcode-snap.md, measured tone. Domain differentiator = every
// code decoded into its six axes. backup → provenance; arg 7 → SupportBand.
// NOTE (trademark): the app brand is "LabCode Snap"; "LOINC" is used only
// nominatively (subtitle/keywords/"LOINC codes"), never as the brand. The
// required Regenstrief attribution + non-affiliation clause live in the legal
// pages / About, not this marketing object. No screenshots yet → placeholder
// hero + copy-only desktop band.

export const labcodeSnap: AppContent = {
  slug: "labcode-snap",
  name: "LabCode Snap",
  category: "Medical",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Lab technicians and result reviewers, medical coders, clinical informaticists, and EHR / HL7 / FHIR interface analysts who pull LOINC codes all day",
  tagline: "Look up LOINC codes, read them decoded into six axes, and keep the panel your lab runs.",
  pricing: "Free core (iOS) + one-time supporter/desktop unlock",

  hero: {
    badge: "LOINC v2.82",
    headline: { lead: "LOINC codes, decoded into six axes,", accent: "in one app." },
    subheadline:
      "All 109,325 LOINC codes on your phone. Search a test, copy the code, and read it broken into all six axes in plain English. No ads, no account.",
    ctaNote: "Free core on iOS · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "109,325 LOINC codes",
    "97,314 active",
    "Six-axis breakdown",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every LOINC code is free to look up online. The app just makes it easier: search on your phone, copy a code in a tap, read it broken into its six axes in plain English, keep the panel your lab runs, and export or print to hand off.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a test name, an abbreviation, or a partial LOINC number, and the matches come up. The ranking is tuned for real lab work: type creatinine and 2160-0 leads, not dialysis-fluid variants; type hba1c and the canonical A1c codes lead. Copy the code, or the code plus its long common name, straight to the clipboard for the LIS, the interface map, or the claim.",
      },
      {
        title: "Read it decoded into six axes",
        body: "A LOINC code isn't one fact, it's six: what's measured, how it's expressed, when, in which specimen, on what scale, by which method. Most lookups hand you a cryptic string — MCnc, Pt, Ser/Plas, Qn — and leave you to decode it. LabCode Snap opens every code to a clean six-axis panel and expands those tokens in plain English, with the status badged and example UCUM units shown. This is the view analysts and coders actually need.",
      },
      {
        title: "Keep the codes your lab runs",
        body: "You don't run 109,325 tests — your lab runs the same few dozen, over and over. Star them, and group them into collections that match how you work — Chemistry Panel, CBC + Diff, Send-Outs, This Interface Build — so the codes for a workflow are together before you need them. On desktop you browse the full class list to assemble those sets fast.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a clean PDF or CSV — the standard codes for a new tech, a reference sheet by the analyzer, an interface-mapping list for the developer down the hall. Every export carries the required LOINC attribution in its footer, so what leaves the app is ready to share as-is. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The complete LOINC v2.82 dataset lives on the device, so search, the six-axis breakdown, favorites, and collections keep working without a signal — handy in a windowless lab or a locked-down clinical network.",
      },
      {
        title: "Straight from the source",
        body: "The data is official LOINC from the Regenstrief Institute, bundled under the Regenstrief license (free, perpetual, commercial use permitted). Codes are shown unmodified with their SHORTNAME and LONG_COMMON_NAME. LOINC® is a registered U.S. trademark of Regenstrief Institute, Inc.; LabCode Snap is an independent app, not affiliated with or endorsed by Regenstrief.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench where reference sets get built.",
    intro:
      "The desktop app works from the same LOINC data, and adds what a wide screen, a keyboard, and native export allow — the surface where you assemble and ship your LOINC reference work, not just a bigger phone.",
    points: [
      {
        title: "Browse by class on a big screen",
        body: "A dedicated Browse tab turns the LOINC CLASS taxonomy (CHEM, HEM/BC, MICRO…) into a grid you can drill into, so you build panel collections by scanning, not just searching.",
      },
      {
        title: "Native PDF & CSV export",
        body: "Native PDF (US Letter, LOINC attribution baked into the footer) and RFC-4180 CSV, so a code set leaves the app ready for the bench binder or the interface spec.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette, tab navigation, a native menu bar, and a resizable list/detail splitter for all-day work.",
      },
      {
        title: "Themes on an all-day screen",
        body: "The same accent themes as iOS, on a window that stays open through your whole shift.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "On iPhone the whole engine is free: search all 109,325 codes, read the six-axis breakdown, star favorites, build and export collections — no ads, no account, no network requests to monetize. If it earns a place in your day, a one-time coffee-price Supporter unlock adds a set of accent-color themes. On Mac and Windows, LabCode Snap is a one-time $4.99 Premium that lifts the free-tier limits to unlimited and adds the same themes. Either way: you pay once, or not at all, and the lookup is always free of ads and tracking.",
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
    heading: "From a test name to your panel.",
    steps: [
      {
        n: "01",
        title: "Type the test",
        body: "Type a name, abbreviation, or LOINC number, and the matches come up, fully offline.",
      },
      {
        n: "02",
        title: "See it decoded",
        body: "Open a code to read its six-axis breakdown in plain English, with status and UCUM units — then tap to copy the code, or code + name, to your clipboard.",
      },
      {
        n: "03",
        title: "Keep it and share it",
        body: "Star the code into a collection so your panel is there tomorrow; export the set as a clean PDF or CSV for the bench, the build, or the team.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole LOINC release,", accent: "on your phone." },
    body: "LabCode Snap ships the complete LOINC v2.82 dataset (Feb 2026), decoded into six axes and indexed for full-text search — about 50 MB, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "109,325", label: "LOINC codes" },
      { num: "97,314", label: "Active codes" },
      { num: "v2.82", label: "LOINC edition (Feb 2026)" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is LabCode Snap really free?",
      answer:
        "On iPhone, yes — the full lookup, the six-axis breakdown, favorites, collections, and export are free, with no ads and no account. An optional one-time Supporter unlock adds accent-color themes. On Mac and Windows it's a one-time $4.99 Premium that lifts the free-tier collection limits and adds themes. No subscriptions, ever.",
    },
    {
      question: "Does it work without internet?",
      answer:
        "Completely. The entire LOINC v2.82 dataset (109,325 codes, ~50 MB) ships in the app; search, the six-axis breakdown, favorites, and collections all work offline.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. LabCode Snap makes no network requests beyond an optional in-app purchase check. Your favorites and collections stay on your device.",
    },
    {
      question: "Is this the official LOINC data, and how does it update?",
      answer:
        "Yes — it's LOINC from Regenstrief Institute, bundled under the Regenstrief license (LOINC® is a registered U.S. trademark of Regenstrief Institute, Inc.; LabCode Snap is an independent app, not affiliated with or endorsed by Regenstrief). LOINC ships roughly twice a year; a free in-app update follows each release — no re-purchase.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for lookups on the move and at the bench; Mac and Windows for browsing the full set on a big screen and printing or exporting your collections.",
    },
    {
      question: "Is this a substitute for professional judgment?",
      answer:
        "No. LabCode Snap is a code-lookup and reference utility for trained lab, coding, and informatics staff; selecting and mapping the correct code still requires professional and regulatory judgment.",
    },
  ],

  brand: {
    accent: "#3E8E72",
    accentDeep: "#2F7460",
    monogram: "la",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  // Required by the Regenstrief LOINC license (GUIDE §19-2): the copyright
  // notice must appear verbatim on the download page + About/Licenses, with the
  // non-affiliation clause. Rendered by Footer + the privacy page.
  attribution: [
    "This material contains content from LOINC (http://loinc.org). LOINC is copyright © Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc.",
    "LabCode Snap is an independent app and is not affiliated with or endorsed by Regenstrief Institute, Inc.",
  ],

  seo: {
    title: "LabCode Snap — LOINC codes decoded into six axes, in one app",
    description:
      "All 109,325 LOINC lab and clinical codes offline on iPhone, Mac, and Windows, each decoded into its six axes in plain English. Save collections, export print-ready PDF/CSV. Free core on iOS, no ads, no account. Not affiliated with Regenstrief.",
    keywords: [
      "LOINC",
      "lab codes",
      "LOINC lookup",
      "observation codes",
      "LIS",
      "HL7 FHIR",
      "LabCode Snap",
    ],
  },
};
