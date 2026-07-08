import type { AppContent } from "../types";

// EHS Snap — standalone (OSHA/MSHA safety reference). From
// content-briefs/ehs-snap.md, measured tone. Domain differentiator = automatic
// cross-linking (a reg surfaces its LOIs; a chemical carries its NIOSH limits).
// backup → provenance; arg 7 → SupportBand. No screenshots yet → placeholder
// hero + copy-only desktop band.

export const ehsSnap: AppContent = {
  slug: "ehs-snap",
  name: "EHS Snap",
  category: "Business / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "EHS managers, safety officers, industrial hygienists, mine-safety staff, and compliance consultants who pull OSHA 29 CFR 1910, MSHA 30 CFR, and OSHA Letters of Interpretation many times a day",
  tagline: "Look up OSHA and MSHA standards with their letters and limits attached, and keep the ones you cite.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "29 CFR 1910 + 30 CFR + OSHA LOI",
    headline: { lead: "OSHA and MSHA standards, their letters, and their limits,", accent: "in one app." },
    subheadline:
      "Every 29 CFR 1910 section, all of MSHA's 30 CFR, and 4,223 OSHA Letters of Interpretation. Search a standard, copy the citation, and see its related letters and exposure limits without a second search. No ads, no account.",
    ctaNote: "Free · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "2,176 CFR sections",
    "4,223 OSHA letters",
    "677 NIOSH chemicals",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "These standards, letters, and limits are free to look up online. The app just makes it easier: search on your phone, copy a citation in a tap, see a standard's related letters and exposure limits without a second search, keep the ones you cite, and export or print to hand off.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a standard number, a keyword, or an abbreviation your team uses — LOTO, HAZCOM, PEL, IDLH, SCBA — and the matches come up. A segmented filter row narrows the field: All · OSHA · MSHA · LOI · Chemicals. Copy the citation, or citation plus heading, straight to the clipboard for the report, the JHA, or the email to the site super.",
      },
      {
        title: "See its letters and limits, cross-linked",
        body: "A citation rarely stands alone. Opening a regulation surfaces its related Letters of Interpretation, and a chemical card carries its NIOSH PEL, TWA, STEL, and IDLH limits right there — the HAZWOPER argument and the exposure number settled without a second search. That cross-linking is what a bare government portal doesn't give you.",
      },
      {
        title: "Keep the standards you cite every day",
        body: "You don't work all 2,176 CFR sections — you reach for the same few dozen: lockout/tagout, hot work, confined spaces, fall protection, respiratory PELs. Star them, and group them into collections that match how you run the site — Lockout/Tagout, Hot Work, Confined Space Entry, Respiratory Protection — so every citation for an audit or a toolbox talk is together before you walk out.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a clean, print-ready PDF or a CSV — the standard citations for a new hygienist, a reference sheet by the permit board, a chemical-exposure summary for an audit file. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full dataset — every 29 CFR 1910 and 30 CFR section, the OSHA LOI archive, and the NIOSH Pocket Guide chemicals — lives on the device, so search keeps working without a signal, whether you're underground in a coal mine or in a plan-review room with the Wi-Fi locked down.",
      },
      {
        title: "Straight from the source",
        body: "Every standard, letter, and chemical comes from eCFR.gov, OSHA.gov, and CDC NIOSH — U.S. public-domain data, captured as a quarterly snapshot and used as published. EHS Snap is an unofficial reference; the eCFR and official agency publications remain authoritative.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench where deliverables get made.",
    intro:
      "The desktop app works from the same standards, and adds what a wide screen, deeper indexes, and a printer allow — the surface where reference sets get built, searched deeply, and turned into paper.",
    points: [
      {
        title: "Deeper, full-text search",
        body: "Full-text search runs across the bodies of every regulation, LOI, and chemical entry via desktop FTS indexes — not just titles.",
      },
      {
        title: "Native PDF & CSV export",
        body: "Export any collection as a formatted PDF (with a “N regulations — 29 CFR 1910 + 30 CFR + OSHA LOI” header) or a CSV, ready for audit files and team handouts.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette across regulations, LOIs, chemicals, favorites, and filters; ⌘1–3 tab shortcuts; a native menu bar; and a draggable split view.",
      },
      {
        title: "Themes on an all-day screen",
        body: "The four Supporter accent themes on a screen that stays open next to your reporting tools all day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The heart of EHS Snap — offline search across every standard, favorites, and collections — is free on iOS, with no ads and no account. If you want to support development, a one-time coffee-price unlock (never a subscription, never ads) adds power features plus a set of accent-color themes to make the app yours. The app makes zero network requests, so there's nothing to monetize and nothing to leak. Payment is support, not a wall.",
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
    heading: "From a standard to your audit file.",
    steps: [
      {
        n: "01",
        title: "Search the standard",
        body: "Type a section number, a keyword, or an abbreviation (LOTO, PEL, IDLH); results stream in across OSHA, MSHA, LOIs, and chemicals.",
      },
      {
        n: "02",
        title: "Copy or cross-check",
        body: "Tap to copy the citation and heading, or open it to see its related Letters of Interpretation and exposure limits — no extra search.",
      },
      {
        n: "03",
        title: "Build your set and take it out",
        body: "Star it into a collection (Lockout/Tagout, Hot Work) so it's ready tomorrow, then export the whole set as a clean PDF or CSV for the audit file or the crew.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "OSHA, MSHA, and the letters,", accent: "on your phone." },
    body: "EHS Snap ships all of 29 CFR 1910 and 30 CFR, the OSHA LOI archive, and the NIOSH Pocket Guide — about 42 MB, indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "2,176", label: "CFR sections (OSHA + MSHA)" },
      { num: "4,223", label: "OSHA Letters of Interpretation" },
      { num: "677", label: "NIOSH chemicals (PEL/TWA/STEL/IDLH)" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is EHS Snap free?",
      answer:
        "Yes. Offline search across every standard, favorites, and collections are free on iOS, with no ads and no account. An optional one-time Supporter unlock (coffee price, never a subscription) adds power features and app themes if you'd like to support development.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The full dataset — all of 29 CFR 1910, 30 CFR, the OSHA LOI archive, and the NIOSH Pocket Guide, about 42 MB — ships in the app. Search, favorites, and collections all work with no signal.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. EHS Snap makes zero network requests. Your favorites and collections stay on your device.",
    },
    {
      question: "How current are the standards, and when do they update?",
      answer:
        "The bundle is captured from eCFR.gov, OSHA.gov, and CDC NIOSH and refreshed on a quarterly cadence (CFR + LOI), with an annual refresh of the NIOSH chemical data — no re-purchase to get updates.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for citing standards on the move; Mac and Windows for browsing the full set on a big screen, running full-text search inside document bodies, and exporting or printing your collections.",
    },
    {
      question: "Is this an official OSHA/MSHA source or a substitute for professional judgment?",
      answer:
        "No. EHS Snap is an unofficial reference utility built from public-domain government data for trained EHS professionals; the eCFR and official agency publications remain authoritative, and compliance decisions still require professional judgment.",
    },
  ],

  brand: {
    accent: "#C15F52",
    accentDeep: "#A34A3F",
    monogram: "eh",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "EHS Snap — OSHA & MSHA standards, letters, and limits in one app",
    description:
      "Every 29 CFR 1910 section, all of MSHA's 30 CFR, 4,223 OSHA Letters of Interpretation, and 677 NIOSH chemicals — offline on iPhone, Mac, and Windows. Auto cross-linking, saved collections, PDF/CSV export. Free core, no ads, no account.",
    keywords: [
      "OSHA 29 CFR 1910",
      "MSHA 30 CFR",
      "OSHA letters of interpretation",
      "EHS compliance",
      "safety standards app",
      "industrial hygiene",
      "EHS Snap",
    ],
  },
};
