import type { AppContent } from "../types";

// NAICS Snap — standalone (business classification). From
// content-briefs/naics-snap.md, measured tone. Domain differentiator = the SBA
// size standard shown beside every code. backup → provenance; arg 7 →
// SupportBand. No screenshots yet → placeholder hero + copy-only desktop band.

export const naicsSnap: AppContent = {
  slug: "naics-snap",
  name: "NAICS Snap",
  category: "Business / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Government contractors, grant writers, business-registration and procurement staff, and accountants who pull NAICS codes and check SBA size standards on registration, loan, and bid forms",
  tagline: "Find a NAICS code by what a business does, with the SBA size standard beside it.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "NAICS 2022 edition",
    headline: { lead: "NAICS codes and their size standards,", accent: "in one app." },
    subheadline:
      "The whole 2022 classification on your phone — every six-digit code, its hierarchy, and the SBA size standard — searchable by what a business actually does. Copy the code into the form in a tap. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "~1,000 six-digit codes",
    "20 sectors",
    "SBA size standards built in",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to find them — and keep them.",
    intro:
      "These codes are free on census.gov. The app just makes it easier: search by what a business does, copy the six digits in a tap, see the SBA size standard the form asks for next, keep the codes you assign often, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type what the business actually does — “web design company”, “custom software”, “online clothing store” — and the matches come up. A built-in dictionary of ~110 business shortcuts bridges plain language to the classification's wording, so you don't have to already speak NAICS to find the right code. Copy the six digits straight into the form.",
      },
      {
        title: "The SBA size standard, right beside the code",
        body: "The form doesn't just want the code — it wants the size standard next. Open any result to see its full hierarchy and the SBA size standard together (e.g. 541512 → $34M annual receipts), so you don't hunt a second government site for the number the bid or loan application demands. One lookup, both answers.",
      },
      {
        title: "Keep the codes you assign often",
        body: "You reach for the same few dozen codes: your firm's primary code, your recurring clients' industries, the service lines you bid on. Star them onto Favorites and group them into collections — My Company Codes, Client Portfolio, IT Services Bids — each carrying its sector color and SBA standard, so the codes for a filing are assembled before you open the form.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a PDF or CSV — each entry with the code, title, full hierarchy, and SBA size standard. Hand a new hire your firm's standard codes, attach a client's classification set to a proposal, or open the CSV in Excel to reconcile against a registration spreadsheet. With a keyboard and a file system, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full NAICS 2022 set and every SBA size standard live on the device, so search and browse keep working without a signal — handy at a client's site, a federal-building basement, or on a plane while you prep a proposal.",
      },
      {
        title: "Straight from the source",
        body: "Every code and threshold comes from the U.S. Census Bureau (NAICS 2022) and the SBA Size Standards (effective 2023-03-17) — U.S. public-domain data, used as published. Your saved codes are keyed to plain NAICS strings, so they even survive the 2027 revision. Nothing invented.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same Census and SBA data, with a wider screen, a keyboard, and easier export.",
    points: [
      {
        title: "Native PDF & CSV export",
        body: "Export any collection with each entry carrying code, title, full hierarchy, SBA size standard, and your notes — a print-ready file even where the browser's print won't do.",
      },
      {
        title: "Sector-color browse",
        body: "All twenty NAICS sectors laid out with color coding, drilling sector → subsector → industry group → six-digit, with the grouped sectors (31-33 / 44-45 / 48-49) handled correctly.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette, tab shortcuts, copy/favorite/export shortcuts, full-text search, a native menu bar, and a split view so the code list and detail pane stay side by side all day.",
      },
      {
        title: "Unlimited favorites & themes",
        body: "The Supporter unlock lifts the free-tier capacity limits and adds the four accent themes for the app you keep open beside the forms.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Search, browse, SBA size standards, favorites, and collections are free on iPhone, with no ads and no account. If the app saves you time and you want to support development, a one-time coffee-price unlock (about $4.99, never a subscription) adds a set of accent-color themes; on desktop it also lifts the free-tier capacity limits to unlimited. It's a thank-you, not a subscription.",
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
    heading: "From a description to your own set.",
    steps: [
      {
        n: "01",
        title: "Describe the business",
        body: "Type what the company actually does; the matching six-digit codes stream in as you type, offline.",
      },
      {
        n: "02",
        title: "Check the code and size standard",
        body: "Open a result to see its hierarchy and the SBA size standard (e.g. 541512 → $34M), then tap to copy the code into your form.",
      },
      {
        n: "03",
        title: "Keep it and export it",
        body: "Star the codes you reuse into collections — your firm, your clients, your bid lines — then export the set as a clean PDF or CSV to hand off, print, or file.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole classification,", accent: "on your phone." },
    body: "NAICS Snap ships the complete NAICS 2022 classification and every SBA size standard, indexed for full-text search in a 6.7 MB file, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "~1,000", label: "NAICS 2022 six-digit codes" },
      { num: "2022", label: "Census edition (next 2027)" },
      { num: "SBA", label: "Size standards, beside every code" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is NAICS Snap free?",
      answer:
        "Yes. Search, browse, SBA size standards, favorites, and collections are free on iOS, with no ads and no account. A one-time Supporter unlock (about $4.99, never a subscription) adds accent-color themes; on desktop it also lifts the free capacity limits to unlimited. It's a way to support development, not a paywall.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The entire NAICS 2022 classification and every SBA size standard ship inside the app in a 6.7 MB file; search, browse, favorites, and collections all work with no connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. NAICS Snap makes zero network requests for lookups. Your favorites and collections stay on your device; nothing is tracked or sold.",
    },
    {
      question: "How and when does the data update?",
      answer:
        "NAICS is revised on a five-year cycle by the Census Bureau — the next revision is 2027 — and the SBA publishes new size standards occasionally. Updates ship as a free app update; your saved codes carry over because they're keyed by code.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for finding a code on the move; Mac and Windows for browsing all twenty sectors on a wide screen and exporting print-ready PDF/CSV reference sets.",
    },
    {
      question: "Does this replace official classification guidance?",
      answer:
        "No. NAICS Snap is a fast lookup tool for the public-domain Census and SBA data; the official self-assignment of a NAICS code and its size-standard determination still rest with you and the relevant agency.",
    },
  ],

  brand: {
    accent: "#7C8A2E",
    accentDeep: "#63711F",
    monogram: "na",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "NAICS Snap — NAICS codes and SBA size standards in one app",
    description:
      "The complete NAICS 2022 classification offline on iPhone, Mac, and Windows: search by what a business does, see the SBA size standard beside every code, save collections, and export print-ready PDF/CSV. Free core, no ads, no account.",
    keywords: [
      "NAICS",
      "NAICS 2022",
      "NAICS code lookup",
      "SBA size standards",
      "government contracting",
      "business classification",
      "NAICS Snap",
    ],
  },
};
