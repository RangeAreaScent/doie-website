import type { AppContent } from "../types";

// WEL Snap (AU) — chem-safety family. From content-briefs/wel-snap-au.md,
// measured house tone. No real screenshots yet → placeholder hero, no showcase,
// copy-only desktop band.

export const welSnapAu: AppContent = {
  slug: "wel-snap-au",
  name: "WEL Snap (AU)",
  family: "chem-safety",
  category: "Medical / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Australian occupational hygienists, WHS managers, and workplace-air-monitoring officers who check chemical exposure limits on-site",
  tagline: "Look up Australia's Workplace Exposure Limits, keep the substances you monitor, and export when you need to.",
  pricing: "Free core + one-time Supporter unlock",

  hero: {
    badge: "WEL List 2025",
    headline: { lead: "Australia's Workplace Exposure Limits,", accent: "in one app." },
    subheadline:
      "All 631 Safe Work Australia WEL substances on your phone, with TWA, STEL, and Peak. Search a substance and copy the value, keep the ones your sites run, and export when you need to. No ads, no account.",
    ctaNote: "Free to start · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "631 WEL substances",
    "1,727 WHS sections",
    "CC BY 4.0 licensed",
    "Works offline",
    "No ads, no subscription",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "The WEL list is a public standard, free to look up online. The app just makes it easier: search on your phone, copy the value in a tap, run the calculations, keep the substances your sites run, and export or print when you need to — through the WES→WEL changeover and after.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a substance name, a CAS number, a formula, or an old WES abbreviation, and the match comes up. TWA, STEL, and Peak in ppm and mg/m³, the notations, footnotes, and the previous WES value on one screen, each copyable in a tap. Old spelling or new — 'sulphide' or 'sulfide', 'WES' or 'WEL' — all find the same row.",
      },
      {
        title: "Keep the substances you monitor",
        body: "You tend to monitor the same handful of substances across your sites, not all 631. Star the ones you use and group them into folders that match the work — a spray booth, solvent handling, welding fume, silica sites — so a job's substances are gathered before you walk in.",
      },
      {
        title: "The calculations, alongside the data",
        body: "A TWA calculator works out an 8-hour time-weighted average from your sampling intervals, an AU mixture-rule calculator tells you whether a combined exposure passes, and a converter flips ppm and mg/m³ — auto-filling molecular weight for 487 substances. Read the measurement next to the limit in one place. (Supporter)",
      },
      {
        title: "Export or print your sets",
        body: "Export any collection — substances, limits, and calculator results — as a clean A4 PDF or CSV to attach to a monitoring report, hand to a site manager, or print for the noticeboard. With a keyboard and a printer, the desktop makes this easiest. (Supporter)",
      },
      {
        title: "Works offline",
        body: "The whole dataset lives on the device — 631 substances and 1,727 WHS sections — so search, favourites, collections, and the calculators keep working without a signal. If a release or incident happens, an Emergency tab surfaces first-aid and PPE guidance offline.",
      },
      {
        title: "Straight from the source",
        body: "Every value comes from Safe Work Australia's WEL List (May 2025), used as published — CC BY 4.0 — with the WHS Act and Regulations alongside. It's an independent app, not affiliated with or endorsed by Safe Work Australia, the Commonwealth, or any state authority.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same WEL data, and adds what a larger screen, a keyboard, and a printer allow: searching the regulations in full, comparing across states, and producing reports.",
    points: [
      {
        title: "Deeper search into the regulations",
        body: "Search the full text of all 1,727 WHS Act and Regulation sections — not just their titles — and read a long clause on a wide screen with the list beside it. Rows tag Definition / Penalty / Note.",
      },
      {
        title: "A4 PDF and CSV export",
        body: "Export a collection, a TWA result, an SDS draft, or a single WHS section as a clean A4 PDF or CSV, re-attributed to the source — turning a lookup into a report.",
      },
      {
        title: "State-variance compare",
        body: "The WHS model law is federal, but enforcement varies by state; put the eight state and territory regulators side by side to see who applies what. (Supporter)",
      },
      {
        title: "Keyboard-first",
        body: "A ⌘K command palette, ⌘1–8 tab switching, a native menu bar, and a split view keeping the list and detail on one screen.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Search, substance detail, the Emergency tab, favourites, collections, and the WHS browser are free on iOS — the things you need in the field. A one-time, coffee-price Supporter unlock (never a subscription, never ads) adds the TWA and mixture calculators, the unit converter, PDF/CSV export, the state-variance compare view, and a set of app themes. It's a thank-you, not a wall.",
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
    heading: "From a lookup to your own field set.",
    steps: [
      {
        n: "01",
        title: "Search a substance",
        body: "Type a name, CAS, formula, or WES/WEL abbreviation; the limit appears instantly, offline, on-device.",
      },
      {
        n: "02",
        title: "Check and calculate",
        body: "Read TWA / STEL / Peak, then run the 8-hour TWA or the mixture rule against your sampling data.",
      },
      {
        n: "03",
        title: "Keep it and hand it over",
        body: "Group the substances your sites run into your own collections, and export them clean as an A4 PDF or CSV for the monitoring report.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole WEL list,", accent: "on your phone." },
    body: "WEL Snap ships the complete Safe Work Australia WEL List with the WHS Act and Regulations and air-monitoring methods — indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "631", label: "WEL substances" },
      { num: "33", label: "Non-threshold carcinogens" },
      { num: "1,727", label: "WHS Act & Reg sections" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is WEL Snap free?",
      answer:
        "Yes. Search, substance detail, the Emergency tab, favourites, collections, and the WHS browser are all free on iOS. A one-time coffee-price Supporter unlock (a one-off, not a subscription, and never ads) adds the TWA and mixture calculators, the unit converter, PDF/CSV export, the state-variance compare, and app themes.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. All 631 substances and 1,727 WHS sections ship inside the app, so search, calculators, and favourites work with no signal. It's built for the monitoring site.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. WEL Snap makes zero network requests, and your favourites and collections stay on your device (Privacy Act 1988 / APP compliant).",
    },
    {
      question: "What happens when WES becomes WEL on 1 December 2026?",
      answer:
        "WEL Snap is built for the changeover: it carries the current WEL limits, flags the 26 new and 39 removed substances, shows the previous WES value alongside each limit, and finds a substance whether you type its old or new name.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone is for fast lookups at the monitoring point; Mac and Windows add full-text search of the regulations, side-by-side state comparison, and PDF/CSV reports. Same data, different strengths per platform.",
    },
    {
      question: "Is this a substitute for professional judgement?",
      answer:
        "No. WEL Snap is a limit-lookup and calculation tool; workplace-air assessment and control still require an occupational hygienist's judgement.",
    },
  ],

  brand: {
    accent: "#BE6F27",
    accentDeep: "#9C591C",
    monogram: "we",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "WEL Snap (AU) — Australia's Workplace Exposure Limits in one app",
    description:
      "The Safe Work Australia WEL List offline on your phone: 631 substances with TWA, STEL, and Peak limits, WHS regulations, and TWA and mixture calculators. Built for the WES→WEL changeover. Save collections, export A4 PDF/CSV. Free core, no ads.",
    keywords: [
      "WEL",
      "Workplace Exposure Limits",
      "Safe Work Australia",
      "WES",
      "WHS",
      "occupational hygiene",
      "TWA calculator",
      "WEL Snap",
    ],
  },
};
