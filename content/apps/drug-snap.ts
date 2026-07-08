import type { AppContent } from "../types";

// Drug Snap — standalone, iOS-ONLY (no desktop app exists). From
// content-briefs/drug-snap.md, measured tone. Domain differentiator = NDC-aware
// search + DEA-schedule badges. backup → provenance; arg 7 → SupportBand (its
// own theme palette + app icons). No desktop section (deliberate — no desktop
// build). No screenshots yet → placeholder hero. Do NOT headline RxCUI (not
// integrated in the shipping build); lead with name/brand/NDC.

export const drugSnap: AppContent = {
  slug: "drug-snap",
  name: "Drug Snap",
  category: "Medical",
  platforms: ["iOS"],
  minOS: "iOS 18+",
  targetUser:
    "Pharmacy technicians, pharmacists, nurses, and billing/front-desk staff who look up drug names, brands, and NDC numbers dozens of times a shift",
  tagline: "Look up any drug and its NDC, flag controlled substances, and keep the ones you handle.",
  pricing: "Free · one-time supporter unlock",

  hero: {
    badge: "FDA NDC 2026 edition",
    headline: { lead: "Any drug and its NDC,", accent: "in one app." },
    subheadline:
      "The full FDA drug directory — 112,385 products and every NDC — on your phone. Search by name, brand, generic, or NDC, copy what you need, and see the DEA schedule right on the row. No ads, no account.",
    ctaNote: "Free · No ads · No account · iPhone (iOS 18+)",
  },

  trustBar: [
    "112,385 drug products",
    "212,318 NDC packages",
    "DEA schedules flagged",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every NDC and drug name is free to look up online. The app just makes it easier: search on your phone, copy a name or an NDC in a tap, see the DEA schedule at a glance, keep the drugs you handle, and share a list when someone needs it.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a drug name, a brand, a generic, or an NDC, and the matches come up. Drug Snap reads what you typed: a long run of digits routes straight to an NDC lookup, while words go to the drug-name index — the right answer whether you're holding a label or a name. Copy the name, the NDC, or both straight to the clipboard.",
      },
      {
        title: "See the DEA schedule at a glance",
        body: "Controlled substances carry their DEA schedule right on the row — CII, CIII, CIV, CV — color-coded, so the classification is visible before you open the record. It's the context a bare NDC lookup leaves out, right where you scan.",
      },
      {
        title: "Keep the medications you handle every day",
        body: "You don't dispense 112,385 products — you handle the same few dozen, over and over. Star them, and group them into collections that match how you work — Hypertension, Diabetes, Common Antibiotics, Cholesterol — so the drugs for a formulary or a floor are together before you need them. Add a private note to any drug (a strength you always confirm, a look-alike/sound-alike warning, a stocking location).",
      },
      {
        title: "Share your lists",
        body: "Copy any drug, or build a set and hand its members to the people who need them — the standard formulary list for a new technician, a look-alike/sound-alike sheet by the counter, a therapeutic-class group for the floor. Your work leaves the app the way you need it.",
      },
      {
        title: "Works offline",
        body: "The complete 2026 FDA NDC dataset lives on the device, so search, favorites, and notes keep working without a signal — handy in a stockroom with no bars or a rural clinic.",
      },
      {
        title: "Straight from the source",
        body: "Every product and package comes from the U.S. FDA National Drug Code (NDC) Directory — public federal data, used as published. 112,385 products and 212,318 packages from the 2026 edition, updated as a free app update.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "Everything that matters is free: the full FDA drug search, favorites, collections, notes, and DEA-schedule badges, with no ads and no account. Drug Snap makes zero network requests, so your searches stay on your device. If the app saves you time and you want to support development, a one-time coffee-price unlock — “Buy me a coffee” — adds a set of accent-color app themes and alternate app icons to make it yours. Never a subscription, never a paywall in front of the drug data.",
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
    heading: "From a label to your daily set.",
    steps: [
      {
        n: "01",
        title: "Type a drug or an NDC",
        body: "Type a name, brand, generic, or NDC, and the matches come up.",
      },
      {
        n: "02",
        title: "Tap to copy",
        body: "Copy the name, the NDC, or both — with a haptic confirm — ready for the dispensing system or the claim.",
      },
      {
        n: "03",
        title: "Keep it and make it yours",
        body: "Star it, drop it in a collection, add a note. Your daily set is there tomorrow, backed up with your device, and ready to share when someone needs it.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole FDA drug directory,", accent: "on your phone." },
    body: "Drug Snap ships the complete 2026 FDA NDC Directory — every product and package — indexed for full-text search, entirely on-device. No subscription, no downloads.",
    stats: [
      { num: "112,385", label: "FDA drug products" },
      { num: "212,318", label: "NDC packages" },
      { num: "2026", label: "FDA NDC edition" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is Drug Snap free?",
      answer:
        "Yes. The full FDA drug search, favorites, collections, notes, and DEA-schedule badges are free, with no ads and no account. A one-time “Buy me a coffee” Supporter unlock adds premium app themes and alternate app icons — optional support, never a wall in front of the data.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The entire 2026 FDA NDC dataset ships inside the app; search, favorites, collections, and notes all work with no connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. Drug Snap makes zero network requests. Your favorites, collections, and notes stay on your device.",
    },
    {
      question: "Where does the drug data come from, and when does it update?",
      answer:
        "From the U.S. FDA National Drug Code (NDC) Directory — public federal data. Updated editions ship as free app updates; no re-purchase.",
    },
    {
      question: "Is there a Mac or Windows version?",
      answer:
        "Not today. Drug Snap is an iPhone app, built for fast, one-handed lookups at the counter or on the floor.",
    },
    {
      question: "Is this a substitute for clinical or dispensing judgment?",
      answer:
        "No. Drug Snap is a fast reference utility for trained pharmacy and clinical staff. It surfaces FDA NDC data and DEA schedules; verifying the drug, strength, package, and dispensing decision still requires professional judgment and your system of record.",
    },
  ],

  brand: {
    accent: "#4C8E6C",
    accentDeep: "#3B7256",
    monogram: "dr",
  },

  downloads: [{ platform: "iOS", channel: "app-store" }],

  seo: {
    title: "Drug Snap — Any drug and its NDC in one app",
    description:
      "The full FDA NDC Directory offline on iPhone: 112,385 drug products and 212,318 NDC packages, searchable by name, brand, generic, or NDC, with DEA-schedule badges, favorites, collections, and notes. Free, no ads, no account.",
    keywords: [
      "NDC lookup",
      "FDA NDC directory",
      "drug lookup",
      "DEA schedule",
      "pharmacy app",
      "national drug code",
      "Drug Snap",
    ],
  },
};
