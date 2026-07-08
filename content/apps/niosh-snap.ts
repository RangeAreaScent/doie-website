import type { AppContent } from "../types";

// NIOSH Snap — chem-safety family. Copy lifted from the founder-reviewed brief
// at content-briefs/niosh-snap.md (7-argument persuasive arc). Numbers are the
// brief's verified figures: 644 chemicals, 114 carcinogens, 1.9 MB SQLite.
//
// NOTE: screenshots are branded PLACEHOLDERS (screenshots/*.svg) — replace with
// real captures before launch; no code change needed (same paths).

export const nioshSnap: AppContent = {
  slug: "niosh-snap",
  name: "NIOSH Snap",
  family: "chem-safety",
  category: "Medical / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "U.S. industrial hygienists, EHS and safety managers, air-monitoring technicians, lab safety officers, and first responders",
  tagline: "Look up NIOSH exposure limits, keep the chemicals you use, and run the numbers on the spot.",
  pricing: "Free core + one-time Supporter unlock",

  hero: {
    badge: "NIOSH Pocket Guide · 2026 edition",
    headline: { lead: "The NIOSH Pocket Guide,", accent: "on your phone." },
    subheadline:
      "All 644 chemicals with their RELs, IDLHs, PPE, and first aid on your phone. Search a name or a CAS number, copy what you need, and run a TWA against the limit — right there. No ads, no account.",
    heroShot: "/snap/niosh-snap/screenshots/search.png",
    heroShotAlt:
      "NIOSH Snap search screen showing chemical results with carcinogen badges",
    desktopShot: "/snap/niosh-snap/screenshots/desktop.png",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "644 chemicals",
    "114 carcinogens flagged",
    "TWA calculator",
    "Works offline",
    "No ads, no subscription",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every REL, IDLH, and first-aid line is already free on the CDC's NIOSH Pocket Guide site. The app just makes it easier: search on the floor, copy what you need in a tap, run the numbers on the spot, keep the chemicals you use, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a name, a CAS number, or a formula like C6H6, and the match comes up as you type. Open the full card — REL, PEL, IDLH, carcinogen class, target organs, PPE, and first aid — and copy any value straight to the clipboard.",
      },
      {
        title: "Run the numbers, alongside the data",
        body: "A built-in TWA calculator turns field measurements into an 8-hour average and compares it against the REL and PEL. A mixture calculator applies OSHA's additive rule, and a unit converter handles ppm and mg/m³ — the measurement, the limit, and the result in one place.",
      },
      {
        title: "Keep the chemicals you use",
        body: "You work with the same few dozen substances, not all 644. Star the ones you use and group them into collections that match your sites — a degreasing line, a set of regulated carcinogens, a confined-space watch list — so a job's chemicals are together before you reach the floor. A dedicated Emergency tab keeps IDLH, flash point, and first-aid steps within reach, with Poison Control a tap away.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a clean, print-ready file — a standard-chemical list for a new technician, a sheet for the sampling station, or a job list for the crew. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "All 644 chemicals live on the device, so search, the calculators, favorites, and the Emergency tab keep working without a signal — handy below grade, inside a tank, or on a remote site.",
      },
      {
        title: "Straight from the source",
        body: "Every value comes from the CDC's NIOSH Pocket Guide, augmented with the OSHA 1910.1003 carcinogen list — public-domain data, used as published. 114 chemicals are flagged as carcinogens (NIOSH, OSHA, or both); nothing is invented, and nothing is left out.",
      },
    ],
  },

  showcase: {
    eyebrow: "See it in action",
    heading: "The screens you'll use most.",
    shots: [
      {
        src: "/snap/niosh-snap/screenshots/emergency.png",
        caption: "Emergency",
        desc: "IDLH, flash point, and first-aid steps in large high-contrast type, with Poison Control one tap away.",
      },
      {
        src: "/snap/niosh-snap/screenshots/twa.png",
        caption: "TWA calculator",
        desc: "Drop in field measurements and check them against the NIOSH REL and OSHA PEL — Safe, At limit, or Over.",
      },
      {
        src: "/snap/niosh-snap/screenshots/collections.png",
        caption: "Collections",
        desc: "Group the chemicals a job needs into a saved set you can pull up in one tap.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same NIOSH data, and adds what a larger screen, a keyboard, and a printer allow: comparing chemicals side by side, running the calculators, and exporting clean documents.",
    shots: [
      {
        src: "/snap/niosh-snap/screenshots/desktop-compare.png",
        alt: "NIOSH Snap Compare view on macOS: two chemicals side by side across ~20 properties, with PDF and CSV export",
        caption: "Compare up to 4 chemicals across ~20 properties, then export the table to PDF or CSV.",
      },
      {
        src: "/snap/niosh-snap/screenshots/desktop-twa.png",
        alt: "NIOSH Snap TWA calculator on macOS with an 8-hour result and one-tap Export PDF",
        caption: "The TWA calculator with one-tap PDF export and a clear Safe / At-limit / Over verdict.",
      },
    ],
    points: [
      {
        title: "Compare 4 chemicals side by side",
        body: "A 4-slot table across ~20 properties to weigh substitutes or line up a job's chemicals. The phone shows one card; the desktop shows four columns.",
      },
      {
        title: "A GHS SDS writer — desktop only",
        body: "Draft a full 16-section Safety Data Sheet with NIOSH data auto-filled and GHS pictograms inferred, then export to PDF. The headline feature the phone doesn't have.",
      },
      {
        title: "Export to PDF & CSV",
        body: "TWA reports, SDS documents, compare tables, and collections export to clean PDFs and CSVs. Lookup becomes a deliverable.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette, native menus with ⌘1–7 tab shortcuts, and an adjustable split view with the results list and detail pane on one screen.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Everything you need on the floor — search, the full detail card, the Emergency tab, the TWA and mixture calculators, the unit converter, favorites, and collections — is free on iPhone. If you want to keep development going, a one-time, coffee-price unlock (never a subscription, never ads) adds app themes and alternate icons; on Mac and Windows the same Supporter key also lifts the free save limits. Payment isn't a wall — it's a way to say thanks.",
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
    heading: "From a lookup to your own library.",
    steps: [
      {
        n: "01",
        title: "Search the chemical",
        body: "Type a name, CAS number, or formula; the match comes up with the full NIOSH card.",
      },
      {
        n: "02",
        title: "Read it — or run the numbers",
        body: "Check the REL, PEL, IDLH, and PPE; holding a measurement? Drop it into the TWA calculator and see it against the limit right there.",
      },
      {
        n: "03",
        title: "Keep it and share it",
        body: "Star the chemicals your site uses into Collections so they're ready tomorrow, and export or print a clean reference sheet for the crew.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole Pocket Guide,", accent: "on your phone." },
    body: "NIOSH Snap includes the complete NIOSH Pocket Guide plus OSHA 1910.1003 carcinogens, searchable on the device — 1.9 MB in all. No subscription, no downloads.",
    stats: [
      { num: "644", label: "Pocket Guide chemicals" },
      { num: "114", label: "Carcinogens flagged" },
      { num: "3", label: "Limits shown (REL·PEL·IDLH)" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is NIOSH Snap free?",
      answer:
        "Yes. Search, the full chemical detail, the Emergency tab, the TWA and mixture calculators, the unit converter, favorites, and collections are all free on iOS. If you want to support development, a one-time coffee-price unlock adds app themes and alternate icons (and on Desktop, lifts the free save limits) — no subscription, no ads.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. All 644 chemicals ship inside the app; search, the calculators, favorites, and the Emergency tab all work with no connection. It's built for the confined space and the remote site.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. Your favorites, collections, and notes stay on your device; the app makes no network requests for your data.",
    },
    {
      question: "When does the data update?",
      answer:
        "The NIOSH Pocket Guide is revised irregularly by the CDC; when it changes, a free bundled update follows — no re-purchase. The current bundle reflects the NPG's last CDC revision date, shown in Settings.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone is for the fast lookup and the emergency on the floor; Desktop (Mac + Windows) adds side-by-side comparison, a GHS SDS writer, and PDF/CSV export. Same data, different strengths per platform.",
    },
    {
      question: "Is this a substitute for professional judgment?",
      answer:
        "No. NIOSH Snap is a lookup-and-calculation tool for trained hygiene and safety professionals; exposure assessment, control decisions, and emergency response still require qualified human judgment.",
    },
  ],

  brand: {
    accent: "#39617A",
    accentDeep: "#2C4B60",
    monogram: "ni",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "NIOSH Snap — the NIOSH Pocket Guide in one app",
    description:
      "The NIOSH Pocket Guide on your phone: 644 chemicals with REL, PEL, IDLH, PPE, and first aid, plus a built-in TWA calculator. Search and copy values, keep collections, and export to PDF/CSV. Free core, no ads, no subscription.",
    keywords: [
      "NIOSH Pocket Guide",
      "exposure limits",
      "IDLH",
      "REL PEL",
      "TWA calculator",
      "industrial hygiene",
      "chemical safety app",
      "NIOSH Snap",
    ],
  },
};
