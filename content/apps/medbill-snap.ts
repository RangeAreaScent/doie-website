import type { AppContent } from "../types";

// MedBill Snap — standalone, PAID-STANDALONE ($4.99 one-time, no free tier, no
// supporter model). From content-briefs/medbill-snap.md, measured tone. Domain
// differentiator = reverse ICD→DRG routing + the CC/MCC impact calculator.
// backup → provenance. NO SupportBand (the free/supporter framing doesn't apply;
// price lives in the hero note + FAQ, and all themes are simply included with the
// purchase). No screenshots yet → placeholder hero + copy-only desktop band.

export const medbillSnap: AppContent = {
  slug: "medbill-snap",
  name: "MedBill Snap",
  category: "Medical",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Medical billers, inpatient coders, and revenue-cycle staff who look up Place-of-Service codes, HCPCS modifiers, and MS-DRGs — and route ICD-10 diagnoses to the right DRG — many times a day",
  tagline: "Look up POS codes, modifiers, and DRGs, route ICD→DRG, and keep the sets you use.",
  pricing: "$4.99 one-time · no subscription",

  hero: {
    badge: "FY 2026 edition",
    headline: { lead: "POS codes, modifiers, and DRGs,", accent: "in one place." },
    subheadline:
      "POS codes, HCPCS modifiers, and all 770 MS-DRGs on your phone. Search a code and copy it, route an ICD diagnosis to its DRG, and check the CC/MCC weight. No ads, no account.",
    ctaNote: "$4.99 once · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "770 MS-DRGs",
    "213,321 DRG↔ICD mappings",
    "18,432 CC/MCC classes",
    "Works offline",
    "$4.99 once, no subscription",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "These codes are free to look up online. The app just makes it easier: search on your phone, copy the code or detail in a tap, route an ICD diagnosis to its DRG, keep the sets you bill often, and export or print when you need to.",
    items: [
      {
        title: "Search, then copy in a tap",
        body: "Type a POS number, a modifier, a DRG, or a diagnosis, and the matches come up. A segmented picker keeps the four surfaces distinct — POS, Modifier, MS-DRG, and ICD→DRG — so a modifier never gets lost in a pile of diagnosis codes. Copy the code or the full detail line straight to the clipboard for the claim.",
      },
      {
        title: "Route ICD→DRG, and check the weight",
        body: "In ICD→DRG mode, type a principal diagnosis and the app returns the candidate MS-DRG triplet, highest severity first. Open the CC/MCC Impact Calculator, add the secondaries, and each is classified as an MCC, a CC, or neither — then the app routes to the right DRG and shows the baseline-versus-routed weight delta against FY 2026 weights. (Reference only — not the official CMS Grouper.)",
      },
      {
        title: "Keep the codes you bill often",
        body: "Most billing comes down to the same handful of codes, not all 770 DRGs or 47 modifiers. Star them, and group them into collections that match your work — a Telehealth set with POS 02 and its modifiers, a Joint Replacement set with its DRG triplet, a Sepsis routing set — so everything a claim type needs is ready when you open the case.",
      },
      {
        title: "Export or print your sets",
        body: "Turn a collection into a CSV or PDF — the standard POS-plus-modifier combinations for a new coder, a DRG reference sheet by the workstation, a routing set for the biller down the hall. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "The full CMS dataset lives on the device — all 770 MS-DRGs, the 18,432 CC/MCC classifications, and the 213,321 DRG↔ICD mappings — so search, routing, and the CC/MCC calculator keep working without a signal.",
      },
      {
        title: "Straight from the source",
        body: "Every value comes from CMS public-domain data — the Definitions Manual v43.0 and the IPPS Table 5 FY 2026 Final Rule weights — used as published. 770 DRGs, 26 MDCs, 50 POS codes, 47 modifiers. AMA CPT and CPT modifiers are excluded by design.",
      },
    ],
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "More room on Mac and Windows.",
    intro:
      "The desktop app works from the same CMS data, with a keyboard, a bigger screen, and easier export.",
    points: [
      {
        title: "Kind-aware export",
        body: "Export any collection as a CSV or a print-ready PDF, with the columns shaped per item type (POS effective dates, modifier usage, DRG weight/GMLOS/AMLOS/MDC). The headline desktop strength.",
      },
      {
        title: "⌘K command palette",
        body: "Cross-mode search across POS, modifiers, and DRGs at once, with kind chips in the results and a Go-to jump list for every tab.",
      },
      {
        title: "Keyboard-first navigation",
        body: "Global shortcuts (⌘1–5 tabs, ⌘F find, ⌘C/⌘D actions), a native menu bar, and a status strip with the dataset metadata always in view.",
      },
      {
        title: "DRG Browser on a full screen",
        body: "All 770 DRGs across their 26 MDCs, laid out to build large collections fast — plus a split view that remembers your pane width and all four accent themes.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From a code to a routed claim.",
    steps: [
      {
        n: "01",
        title: "Search the code",
        body: "Choose POS, Modifier, MS-DRG, or ICD→DRG, type, and copy what you need in a tap.",
      },
      {
        n: "02",
        title: "Route it and check the weight",
        body: "For inpatient cases, open the CC/MCC calculator to route the DRG and see the weight delta.",
      },
      {
        n: "03",
        title: "Keep it and share it",
        body: "Star the codes you bill daily into claim-type collections, then export any set as a CSV or PDF for the team.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "The CMS billing tables,", accent: "on your phone." },
    body: "MedBill Snap ships the full CMS Definitions Manual v43.0 and Table 5 FY 2026 weights — every DRG, MDC, CC/MCC class, and DRG↔ICD mapping — at about 14.9 MB, entirely on-device. One purchase, no subscription.",
    stats: [
      { num: "770", label: "MS-DRGs, all FY 2026 weights" },
      { num: "213,321", label: "DRG↔ICD routing mappings" },
      { num: "18,432", label: "CC/MCC classifications" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "How much is it?",
      answer:
        "A one-time $4.99 — no subscription, no ads, no account. That single purchase unlocks everything: all POS codes, modifiers, all 770 MS-DRGs, the ICD→DRG routing, the CC/MCC calculator, and all four accent themes, forever.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. The full ~14.9 MB CMS dataset ships inside the app; search, the CC/MCC calculator, favorites, and collections all work with no connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. MedBill Snap makes zero network requests. Your favorites and collections stay on your device.",
    },
    {
      question: "When does the data update?",
      answer:
        "On the CMS fiscal-year cadence: a main MS-DRG refresh around October 1 and minor adjustments around April 1, with the HCPCS modifier set refreshed annually in January. The next window is FY 2027, October 2026.",
    },
    {
      question: "Is the CC/MCC calculator the official CMS Grouper?",
      answer:
        "No. It routes against the full FY 2026 CMS Definitions Manual (v43.0) and Table 5 weights as a fast reference and sanity check, but final grouping still runs through your certified encoder/grouper.",
    },
    {
      question: "Is it on Mac and Windows too?",
      answer:
        "Yes. iPhone for lookups and quick routing on the move; Mac and Windows for browsing all 770 DRGs on a big screen, building collections, and exporting or printing reference sheets for the team.",
    },
  ],

  brand: {
    accent: "#4E86A0",
    accentDeep: "#3C6E86",
    monogram: "mb",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "MedBill Snap — POS codes, modifiers, and DRGs in one app",
    description:
      "POS codes, HCPCS modifiers, and all 770 MS-DRGs with FY 2026 weights — plus reverse ICD→DRG routing and a CC/MCC impact calculator — offline on iPhone, Mac, and Windows. A one-time $4.99, no subscription, no ads.",
    keywords: [
      "MS-DRG",
      "ICD to DRG",
      "CC MCC calculator",
      "place of service codes",
      "HCPCS modifiers",
      "medical billing app",
      "MedBill Snap",
    ],
  },
};
