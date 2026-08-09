import type { AppContent } from "../types";

// ICD Snap — standalone (medical coding). Rebuilt from the founder-reviewed
// brief at content-briefs/icd-snap.md (7-argument persuasive arc), in the
// measured tone calibrated on NIOSH. Numbers are the brief's verified figures:
// 98,147 ICD-10-CM codes, 74,714 billable, FY 2026 edition. Per the series
// rule, the brief's "backup" argument is replaced with a data-provenance card.
// iOS screenshots are real; no Mac captures yet → copy-only desktop band.

export const icdSnap: AppContent = {
  slug: "icd-snap",
  name: "ICD Snap",
  category: "Medical",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Medical billers, coders, front-desk staff, medical assistants, and private-practice clinicians who pull ICD-10-CM codes many times a day",
  tagline: "Look up ICD-10-CM codes, keep the ones you use, and print them when you need to.",
  pricing: "Free · No ads · No account",

  hero: {
    badge: "ICD-10-CM 2026 edition",
    headline: { lead: "The ICD-10-CM codebook,", accent: "in one app." },
    subheadline:
      "All 98,147 codes from the 2026 edition on your phone. Search a diagnosis or a partial code, copy it in a tap, and keep the few dozen you use close at hand. No ads, no account.",
    heroShot: "/snap/icd-snap/screenshots/search.png",
    heroShotAlt:
      "ICD Snap search screen showing live ICD-10 results as you type",
    ctaNote: "Free · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "98,147 codes",
    "74,714 billable",
    "FY 2026 edition",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every ICD-10-CM code is already free to look up online. The app just makes it easier: search on your phone, copy the code or its description in a tap, keep the few dozen you use, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a diagnosis or a partial code and the matches come up as you type. Copy the code on its own, or the code with its description, straight to the clipboard for the EHR, the superbill, or the chart note.",
      },
      {
        title: "Keep the codes you use",
        body: "You code the same few dozen diagnoses over and over, not all 98,147. Star them onto Favorites, and group them into collections that match how you work — Diabetes Follow-up, Annual Physical, Pre-Op, Well-Child — so a visit type's codes are already together before the patient sits down.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a clean, print-ready list — the standard codes for a new hire, a sheet beside the workstation, or a visit-type set for the coder down the hall. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Free, and free that stays clean",
        body: "ICD Snap is free, with no ads and no account. It makes no network requests, so there's nothing to monetize and nothing to leak — it costs you nothing, and it costs your patients' data nothing either.",
      },
      {
        title: "Works offline",
        body: "The full FY 2026 set lives on the device, so search, favorites, and collections keep working without a signal — handy in a basement billing office, a rural clinic, or a locked-down exam room.",
      },
      {
        title: "Straight from the source",
        body: "Every code comes from the CMS/CDC ICD-10-CM release — U.S. public-domain data, used as published. 98,147 codes, 74,714 of them billable, from the FY 2026 edition; nothing is invented, and nothing is left out.",
      },
    ],
  },

  showcase: {
    eyebrow: "See it in action",
    heading: "The screens you'll use most.",
    shots: [
      {
        src: "/snap/icd-snap/screenshots/detail.png",
        caption: "Detail",
        desc: "The full classification at a glance — chapter, block, and category — with one-tap copy.",
      },
      {
        src: "/snap/icd-snap/screenshots/favorites.png",
        caption: "Favorites",
        desc: "Star the codes you reach for daily so they sit one tap away, sorted however you like.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same ICD-10-CM data, and adds what a larger screen, a keyboard, and a printer allow: browsing the full code set at a glance, building collections quickly, and exporting clean reference sheets for the team.",
    points: [
      {
        title: "Browse the whole set on a big screen",
        body: "See the full tabular list rather than one result at a time — scan a chapter, scroll a category, and build a set fast without typing each code exactly.",
      },
      {
        title: "Assemble collections quickly",
        body: "Put together visit-type sets with a keyboard and a full screen; the collections you build on the Mac are the same ones waiting on the phone.",
      },
      {
        title: "Export and print for the team",
        body: "Turn a collection into a clean PDF or a printed sheet — hand a new hire your clinic's standard codes, or leave a reference beside the workstation.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From a lookup to your own library.",
    steps: [
      {
        n: "01",
        title: "Type the diagnosis",
        body: "Open ICD Snap and start typing a diagnosis or a partial code; the matches come up as you type.",
      },
      {
        n: "02",
        title: "Tap to copy",
        body: "Tap the copy button and the code is on your clipboard, ready to paste.",
      },
      {
        n: "03",
        title: "Paste, or keep it",
        body: "Paste into your EHR and move on, or star the code into a collection so it's already there tomorrow.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The whole codebook,", accent: "on your phone." },
    body: "ICD Snap includes the complete 2026 ICD-10-CM dataset, searchable on the device. No subscription, no downloads.",
    stats: [
      { num: "98,147", label: "ICD-10-CM codes" },
      { num: "74,714", label: "Billable codes" },
      { num: "2026", label: "FY edition" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Is ICD Snap really free?",
      answer:
        "Yes. The full app is free, with no ads and no account. If optional Pro features arrive later, everything on this page stays free.",
    },
    {
      question: "Does it work without internet?",
      answer:
        "Completely. The entire ICD-10-CM 2026 dataset ships in the app; search, favorites, and collections all work offline — including in basements, planes, and rural clinics.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. ICD Snap makes zero network requests. Your favorites and collections stay on your device.",
    },
    {
      question: "When do the codes update?",
      answer:
        "A free update lands each October when CMS releases the new fiscal-year codes — no re-purchase, and no re-download of the whole app to get them.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for lookups on the move; Mac and Windows for browsing the full set on a big screen and printing your collections. Same data, different strengths per platform.",
    },
    {
      question: "Is this a substitute for clinical judgment?",
      answer:
        "No. ICD Snap is a code-lookup utility for trained billing and clinical staff; code selection still requires clinical and regulatory judgment.",
    },
  ],

  brand: {
    accent: "#C15F52",
    accentDeep: "#A34A3F",
    monogram: "ic",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    {
      platform: "macOS",
      channel: "direct",
      url: "https://github.com/RangeAreaScent/ICD-Snap-Desktop/releases/download/v1.0.2/ICD.Snap_1.0.2_universal.dmg",
    },
    {
      platform: "Windows",
      channel: "direct",
      url: "https://github.com/RangeAreaScent/ICD-Snap-Desktop/releases/download/v1.0.2/ICD.Snap_1.0.2_x64-setup.exe",
    },
  ],

  seo: {
    title: "ICD Snap — the ICD-10-CM codebook in one app",
    description:
      "All 98,147 ICD-10-CM 2026 codes on iPhone, Mac, and Windows. Search and copy codes, keep favorites and collections, and export print-ready reference sets. Free, no ads, no account.",
    keywords: [
      "ICD-10",
      "ICD-10-CM",
      "medical billing",
      "ICD-10 lookup",
      "ICD-10 2026",
      "iPhone ICD app",
      "ICD Snap",
    ],
  },
};
