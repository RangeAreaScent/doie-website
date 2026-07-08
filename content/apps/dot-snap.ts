import type { AppContent } from "../types";

// DOT Snap — standalone (trucking / DOT compliance). From
// content-briefs/dot-snap.md, measured tone. Domain differentiator = the
// offline Hours-of-Service calculator. backup → provenance; arg 7 → SupportBand.
// Desktop is a shipped v1.0.0. No screenshots yet → placeholder hero +
// copy-only desktop band.

export const dotSnap: AppContent = {
  slug: "dot-snap",
  name: "DOT Snap",
  category: "Reference / Business",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Commercial truck drivers, HazMat haulers, fleet safety managers, and DOT-compliance officers who reach for 49 CFR sections, UN numbers, and Hours-of-Service math on the road",
  tagline: "Look up 49 CFR sections and UN numbers, keep the ones you use, and plan your hours.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "49 CFR · 2026 edition",
    headline: { lead: "49 CFR sections, UN numbers, and your hours,", accent: "in one app." },
    subheadline:
      "The 49 CFR sections a driver actually references — HMR, FMCSA, Hours of Service — plus the whole Hazardous Materials Table. Search a citation or a UN number, copy it, and work out your hours. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "2,059 CFR sections",
    "2,480 hazmat entries",
    "HOS calculator",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "These sections are free to look up online. The app just makes it easier: search on your phone, copy a citation or a UN number in a tap, work out your Hours of Service, keep the sections you use, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a citation, a keyword, or a UN number, and the matches come up. One bar covers both: type 395.3 and you get the reg; type UN1203 (or just 1203, or gasoline) and you get the placard entry. Trucking shorthand — HOS, CDL, DVIR — expands the way drivers type. Copy the citation or the full section text straight to the clipboard.",
      },
      {
        title: "Plan your Hours of Service",
        body: "Hours of Service is the one rule you can't just look up — you have to do the math. The built-in HOS calculator (built on § 395.3) turns your driving, on-duty, and cycle hours into remaining drive time, the 14-hour window, weekly cycle left, and your next 30-minute break, with a plain Safe / Approaching / Must-rest banner. Your ELD stays authoritative, and DOT Snap records nothing.",
      },
      {
        title: "Keep the sections you check every run",
        body: "You don't reference 2,059 sections — you reach for the same few dozen, load after load. Star them, and group them into collections that match how you haul — Pre-Trip Inspection, HazMat Run, HOS Rules, Roadside Stop — with regulations and UN entries side by side in the same set, so everything a job needs is together before you roll.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a clean CSV or a print-ready PDF — hand a new driver the standard sections for your fleet, drop a HazMat reference sheet in the cab, or send a safety manager the exact citations behind a violation. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full 49 CFR subset and Hazardous Materials Table live on the device, so search, placard colors, and the HOS calculator keep working without a signal — handy at a remote truck stop or a basement compliance office.",
      },
      {
        title: "Straight from the source",
        body: "Every section and placard comes from 49 CFR via eCFR (U.S. Government) — public-domain data, captured as a quarterly snapshot with the date shown in Settings. Because item IDs are stable across updates, your saved sections and placards survive each refresh.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench — and it's shipping now.",
    intro:
      "DOT Snap Desktop is a released app — v1.0.0, live since May 2026 as a macOS universal DMG and a Windows MSI/EXE. It works from the same 49 CFR data, and adds what a keyboard, a wide screen, and native export allow.",
    points: [
      {
        title: "Export & print",
        body: "Turn any collection into a clean CSV (opens in Numbers/Excel) or a print-ready PDF: fleet onboarding sheets, HazMat cab references, the exact citations behind a violation.",
      },
      {
        title: "Browse the whole catalog",
        body: "A two-level drill-down — category grid → every section in citation order — makes building big reference sets fast in a way a phone can't.",
      },
      {
        title: "Keyboard-first power use",
        body: "A native menu bar with a full View menu, ⌘F to jump straight to search, and ⌘1–⌘6 to switch tabs, with the results list and the detail pane open side by side.",
      },
      {
        title: "Themes on an all-day screen",
        body: "The four Supporter accent themes on a window that stays open through the shift.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The lookups, the full Hazardous Materials Table, and the Hours-of-Service calculator are free — no ads, no account, no network calls to monetize. If DOT Snap earns a spot in your cab and you want to support development, a one-time $4.99 unlock (the price of a truck-stop coffee, never a subscription) lifts the collection caps and adds a set of accent-color themes. Lead with what's free — the unlock is a thank-you, not a wall.",
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
    heading: "From a lookup to your runs.",
    steps: [
      {
        n: "01",
        title: "Search or scan",
        body: "Type a citation, a keyword, or a UN number; regulations and hazmat entries come up together, sectioned, fully offline.",
      },
      {
        n: "02",
        title: "Confirm or calculate",
        body: "Open the section and copy the text, check a placard's hazard class — or run your hours through the HOS calculator to see what's left in your day.",
      },
      {
        n: "03",
        title: "Keep it and share it",
        body: "Star what you use into collections that match your runs; on desktop, export any set as a clean CSV or PDF for the fleet.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The sections a driver uses,", accent: "on your phone." },
    body: "DOT Snap ships the 49 CFR sections a driver actually references plus the whole Hazardous Materials Table — 9.8 MB, entirely on-device, from a quarterly eCFR snapshot. No subscription, no downloads.",
    stats: [
      { num: "2,059", label: "49 CFR sections (HMR + FMCSA)" },
      { num: "2,480", label: "Hazardous Materials Table entries" },
      { num: "9.8 MB", label: "Entire dataset, offline" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Do I have to pay?",
      answer:
        "No. The lookups, the full Hazardous Materials Table, and the Hours-of-Service calculator are free — no ads, no account. If you want to support development, a one-time $4.99 unlock adds accent-color themes and lifts the favorites/collections caps. It's a thank-you, not a subscription and not a wall.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The entire 49 CFR subset and hazmat table — 9.8 MB — ships inside the app. Search, favorites, placard colors, and the HOS calculator all run with zero connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. DOT Snap makes zero network requests. Your favorites, collections, and the hours you type into the calculator stay on your device and are never transmitted.",
    },
    {
      question: "How current is the data, and when does it update?",
      answer:
        "It's a quarterly snapshot of eCFR (49 CFR, U.S. public domain); the snapshot date is shown in Settings, and a refreshed dataset ships with app updates. Your saved sections survive the refresh.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes — the desktop app is live now (v1.0.0, macOS + Windows). iPhone for lookups on the road; Mac or Windows for browsing the full catalog on a big screen and exporting print-ready reference sheets.",
    },
    {
      question: "Is this a substitute for an ELD or for compliance judgment?",
      answer:
        "No. DOT Snap is a reference and planning tool for trained drivers and compliance staff. The HOS calculator is a planning aid — your ELD and official duty status remain authoritative — and DOT Snap does not record or transmit your hours.",
    },
  ],

  brand: {
    accent: "#BE6F27",
    accentDeep: "#9C591C",
    monogram: "do",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "DOT Snap — 49 CFR sections, UN numbers, and HOS in one app",
    description:
      "The 49 CFR sections a driver references — HMR, FMCSA, Hours of Service — plus the whole Hazardous Materials Table, offline on iPhone, Mac, and Windows. Built-in HOS calculator, saved collections, PDF/CSV export. Free core, no ads.",
    keywords: [
      "49 CFR",
      "hours of service",
      "HOS calculator",
      "hazmat table",
      "UN number lookup",
      "DOT compliance",
      "DOT Snap",
    ],
  },
};
