import type { AppContent } from "../types";

// EH40 Snap (UK) — chem-safety family. Copy lifted from content-briefs/
// eh40-snap-uk.md (7-argument arc), in the measured house tone. No real
// screenshots yet → hero shows a placeholder; showcase omitted; desktop band
// runs copy-only until Mac captures exist.

export const eh40SnapUk: AppContent = {
  slug: "eh40-snap-uk",
  name: "EH40 Snap (UK)",
  family: "chem-safety",
  category: "Medical / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "UK occupational hygienists, safety managers, and COSHH assessors who check Workplace Exposure Limits and COSHH duties on the job",
  tagline: "Look up UK Workplace Exposure Limits, keep the substances you assess, and export when you need to.",
  pricing: "Free core + one-time Pro unlock",

  hero: {
    badge: "EH40/2005 WEL",
    headline: { lead: "UK Workplace Exposure Limits,", accent: "in one app." },
    subheadline:
      "All 424 EH40 substances on your phone, with STEL, LTEL, notations, and the COSHH duty each one triggers. Search a substance and copy the value, keep the ones your sites run, and export when you need to. No ads, no account.",
    ctaNote: "Free to start · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "424 WEL substances",
    "22 COSHH regs",
    "OGL v3.0 licensed",
    "Works offline",
    "No ads, no subscription",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every WEL in EH40 is free to look up online under the Open Government Licence. The app just makes it easier: search on your phone, copy the value in a tap, run the calculations, keep the substances your sites run, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a substance name, a CAS number, or a formula, and the match comes up. One tap opens the whole picture: LTEL and STEL in ppm and mg/m³, the Sen/Sk/Carc notations, the BMGV where one exists, the COSHH 2002 regulations it triggers, and the GHS codes — each copyable in a tap.",
      },
      {
        title: "Keep the substances you assess",
        body: "You tend to assess the same few dozen substances your plants handle, not all 424. Star the ones you use and group them into collections that match the work — solvent degreasing, welding fume, an isocyanate line, a carcinogen register — so a job's WELs are gathered before you set foot on site.",
      },
      {
        title: "The calculations, alongside the data",
        body: "An 8-hour TWA calculator works your sampled concentrations into a time-weighted average and compares it against the WEL LTEL. A COSHH mixture-rule calculator applies HSE's Schedule 2a additive rule, and a converter flips ppm and mg/m³ at HSE's reference condition — all from the same numeric data. (Pro)",
      },
      {
        title: "Export or print your sets",
        body: "Export any collection, or a TWA or mixture result, to a clean A4 PDF (carrying the HSE EH40 / OGL v3.0 attribution) or CSV — the standard substances for a new assessor, a sheet by the workstation, or the audit record COSHH Regulation 16 expects. With a keyboard and a printer, the desktop makes this easiest. (Pro)",
      },
      {
        title: "Works offline",
        body: "All 424 substances live on the device, so search, favourites, collections, and the calculators keep working without a signal. If a survey turns into a spill or exposure incident, an Emergency Mode tab surfaces the WEL, notations, first-aid and PPE prompts, and an NHS 111 shortcut.",
      },
      {
        title: "Straight from the source",
        body: "Every value comes from HSE's EH40/2005 (4th edition, 2020), used as published — Crown copyright under the Open Government Licence v3.0, with COSHH 2002 and EU CLP/GHS classifications alongside. It's an independent app, not affiliated with HSE or the UK Government.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same EH40 data, and adds what a larger screen, a keyboard, and a printer allow: comparing substances side by side, producing reports, and exporting clean documents.",
    points: [
      {
        title: "A4 PDF and CSV export",
        body: "Export collections, TWA results, and comparisons as print-ready A4 PDFs (with the HSE EH40 / OGL attribution) or CSV — the audit record COSHH Regulation 16 asks you to keep.",
      },
      {
        title: "Compare, side by side",
        body: "Line substances up across LTEL/STEL, notations, BMGV, target organs, and measurement method — impractical on a phone, natural on a wide screen.",
      },
      {
        title: "Keyboard-first",
        body: "A ⌘K command palette, ⌘1–7 tab switching, a native menu bar, and a split view keeping the list and detail on one screen.",
      },
      {
        title: "App themes",
        body: "The four Supporter themes on a screen that stays open all day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Search, the full detail view, Emergency Mode, favourites, and collections are free on iOS — everything you need on site. A one-time, coffee-price unlock (never a subscription, never ads) adds the TWA and COSHH mixture calculators, the unit converter, PDF/CSV export, unlimited favourites and collections, and a set of app themes. It's a way to support development, not a wall.",
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
        body: "Type a name, CAS number, or formula; the answer appears from the on-device index, no connection needed.",
      },
      {
        n: "02",
        title: "Read it — and reckon it",
        body: "See LTEL/STEL, notations, BMGV, COSHH duties, and GHS codes on one screen; run a sampled reading through the TWA or mixture calculator against the WEL.",
      },
      {
        n: "03",
        title: "Make it your set",
        body: "Star the substances your sites run into named collections, and export the set — or the calculation — as a clean A4 PDF or CSV for handover or the COSHH record.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole EH40 table,", accent: "on your phone." },
    body: "EH40 Snap ships the complete HSE EH40/2005 Workplace Exposure Limits with COSHH 2002 cross-references and GHS/CLP classifications — indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "424", label: "EH40 WEL substances" },
      { num: "22", label: "COSHH regs cross-referenced" },
      { num: "332", label: "GHS classifications" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is EH40 Snap free?",
      answer:
        "Yes. Search, the full detail view, Emergency Mode, favourites, and collections — everything you need on site — are free on iOS. A one-time coffee-price unlock (no subscription, no ads) adds the TWA and COSHH mixture calculators, the unit converter, PDF/CSV export, unlimited favourites and collections, and app themes.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. All 424 substances, the COSHH regulations, BMGVs, and GHS data ship inside the app; search, calculators, favourites, and Emergency Mode all work with no signal. It's built for the plant room and the remote survey.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. EH40 Snap makes zero network requests, and your favourites and collections stay on your device — under UK GDPR, there is nothing to transmit.",
    },
    {
      question: "How current is the data?",
      answer:
        "It carries HSE EH40/2005, 4th edition (January 2020) — the current published edition. When HSE issues a new edition, a free bundled update follows; no re-purchase.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone is for fast lookups on the floor; Mac and Windows add browsing the full list on a big screen, side-by-side comparison, and PDF/CSV reports. Same data, different strengths per platform.",
    },
    {
      question: "Does this replace a COSHH assessment?",
      answer:
        "No. EH40 Snap is a fast WEL and COSHH reference and calculator for trained professionals; risk assessment and control decisions still require professional judgement. Confirm first-aid, PPE, and SDS detail against the substance SDS and HSE COSHH essentials.",
    },
  ],

  brand: {
    accent: "#3E8E72",
    accentDeep: "#2F7460",
    monogram: "eh",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "EH40 Snap (UK) — Workplace Exposure Limits in one app",
    description:
      "HSE EH40/2005 Workplace Exposure Limits offline on your phone: 424 substances with LTEL, STEL, notations, COSHH 2002 duties, and GHS codes, plus TWA and mixture calculators. Save collections, export A4 PDF/CSV. Free core, no ads.",
    keywords: [
      "EH40",
      "Workplace Exposure Limits",
      "WEL",
      "COSHH",
      "HSE",
      "occupational hygiene",
      "TWA calculator",
      "EH40 Snap",
    ],
  },
};
