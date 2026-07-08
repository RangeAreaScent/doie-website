import type { AppContent } from "../types";

// HCPCS Snap — standalone (medical coding). Tone v2 exemplar (2026-07-06):
// plain and practical, not grand. Centers the everyday jobs — easy search + copy,
// managing your sets, exporting — with the modifier picker as the useful tool.
// Speed ("in 2 seconds") is dropped; offline is one plain feature near the end,
// not the hook. backup → provenance ("Straight from CMS"); arg 7 → SupportBand.

export const hcpcsSnap: AppContent = {
  slug: "hcpcs-snap",
  name: "HCPCS Snap",
  category: "Medical",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Medical billers, coders, DME suppliers, ambulance/NEMT billers, and front-desk staff who look up HCPCS Level II codes and their modifiers",
  tagline: "Look up HCPCS codes and modifiers, keep the sets you use, and export when you need to.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "HCPCS Level II · 2026 edition",
    headline: { lead: "HCPCS codes and their modifiers,", accent: "in one app." },
    subheadline:
      "All 8,727 Level II codes and 384 modifiers on your phone. Search a code, add its modifiers to build a line like E0114-RR-KX, and copy it. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "8,727 codes",
    "384 modifiers",
    "CMS 2026 edition",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "These codes are free to look up online. The app just makes it easier: search on your phone, copy the code or description in a tap, build the billing line with its modifiers, keep the sets you use, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a code, a description like “wheelchair”, or a shorthand like “DME”, and the matches come up — a built-in abbreviation list expands the way billers actually type. Copy the code, the description, or the full billing line straight to the clipboard for the claim.",
      },
      {
        title: "Build the billing line, modifiers included",
        body: "A code without its modifiers won't pay, so the two go together. Open a code, add modifiers, and the line assembles — E0114-RR-KX, ready to copy. All 384 modifiers get their own tab, so you can check what RR or KX means without leaving the app.",
      },
      {
        title: "Keep the codes you bill often",
        body: "Most billing comes down to the same few dozen codes, each with its usual modifiers. Star them, and group them into collections that match your work — Standard DME Rentals, Oxygen Setup, NEMT Runs — with the right modifier pinned to each, so the line is ready when you open it.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a PDF or CSV — each row with the code, its modifier, and a ready-to-paste billing line. Hand a new biller your standard lines, or keep a sheet by the workstation. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full CMS 2026 set lives on the device, so search and the modifier picker keep working without a signal — handy in a billing basement or a warehouse with dead Wi-Fi.",
      },
      {
        title: "Straight from CMS",
        body: "Every code and modifier comes from CMS's HCPCS Level II — public-domain data, used as published. Level II only; no CPT / AMA content.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same data, with a keyboard, a bigger screen, and easier export.",
    points: [
      {
        title: "Keyboard-driven search",
        body: "A full-text search over code and modifier descriptions, with a ⌘K command palette to jump to any search or action.",
      },
      {
        title: "Export to PDF & CSV",
        body: "Each row carries the code, its pinned modifier, and a ready-to-paste billing line.",
      },
      {
        title: "Split-view detail",
        body: "The list and the code detail side by side, so you can browse and compose modifier lines at once.",
      },
      {
        title: "Themes on an all-day screen",
        body: "The four accent themes for a window that stays open through your shift.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Search, the modifier picker, favorites, and collections are free on iPhone, with no ads and no account. If you'd like to support development, a one-time, coffee-price unlock adds unlimited favorites and collections plus a set of accent-color themes. It's a thank-you, not a subscription.",
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
    heading: "From a lookup to a billing line.",
    steps: [
      {
        n: "01",
        title: "Search the code",
        body: "Type a code, a description, or an abbreviation, and copy what you need in a tap.",
      },
      {
        n: "02",
        title: "Add the modifiers",
        body: "Open the code, pick its modifiers, and the billing line assembles — E0114-RR-KX.",
      },
      {
        n: "03",
        title: "Keep it and share it",
        body: "Pin the code and its modifier into a collection, then export the set as a PDF or CSV for the team.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "Every Level II code and modifier,", accent: "on your phone." },
    body: "HCPCS Snap includes the full CMS 2026 Level II set — 8,727 codes and 384 modifiers — searchable on the device. No subscription, no downloads.",
    stats: [
      { num: "8,727", label: "HCPCS Level II codes" },
      { num: "384", label: "Modifiers" },
      { num: "2026", label: "CMS edition" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is HCPCS Snap free?",
      answer:
        "The core — search, the modifier picker, favorites, and collections — is free on iOS, with no ads and no account. A one-time Supporter unlock (coffee price, not a subscription) adds unlimited favorites/collections and accent-color themes. It's support for development, not a paywall.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes. The full CMS 2026 dataset is in the app, so search, the modifier picker, favorites, and collections work without a connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. HCPCS Snap makes no network requests for lookups. Your favorites and collections stay on your device.",
    },
    {
      question: "When do the codes update?",
      answer:
        "CMS publishes HCPCS Level II updates quarterly (January, April, July, October); the app ships the current 2026 edition and refreshes each quarter.",
    },
    {
      question: "Does it include CPT codes?",
      answer:
        "No. HCPCS Snap covers HCPCS Level II only — the CMS public-domain set (DME, drugs, ambulance, supplies). It does not include CPT / AMA Level I codes.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for lookups on the move; Mac and Windows for composing billing lines with a keyboard and printing your collections.",
    },
    {
      question: "Is this a substitute for billing judgment?",
      answer:
        "No. HCPCS Snap is a code- and modifier-lookup utility for trained billing staff; code and modifier selection still requires professional and payer-specific judgment.",
    },
  ],

  brand: {
    accent: "#4E86A0",
    accentDeep: "#3C6E86",
    monogram: "hc",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "HCPCS Snap — HCPCS codes and modifiers in one app",
    description:
      "All 8,727 HCPCS Level II codes and 384 modifiers on iPhone, Mac, and Windows. Search and copy codes, build billing lines like E0114-RR-KX, keep collections, and export to PDF/CSV. Free core, no ads, no account.",
    keywords: [
      "HCPCS",
      "HCPCS Level II",
      "HCPCS modifiers",
      "DME billing",
      "medical billing",
      "HCPCS lookup",
      "HCPCS Snap",
    ],
  },
};
