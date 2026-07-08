import type { AppContent } from "../types";

// Tariff Snap — region-picker app (US HTS/Schedule B · UK Trade Tariff in one
// app). From content-briefs/tariff-snap.md. Domain differentiator = the exact
// duty Calculator (one of the six feature cards). Per-region coverage lives in
// the Regions section. Measured tone. backup → provenance; arg 7 → SupportBand.
// No screenshots yet → placeholder hero + copy-only desktop band.

export const tariffSnap: AppContent = {
  slug: "tariff-snap",
  name: "Tariff Snap",
  category: "Business / Reference",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "Customs brokers, importers and exporters, and trade-compliance staff classifying goods and costing duty against the US tariff schedule or the UK Trade Tariff",
  tagline: "Look up tariff codes, cost the duty exactly, and keep the codes you ship — US or UK.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "US HTS + UK Trade Tariff · 2026 edition",
    headline: { lead: "Tariff codes and a duty calculator,", accent: "US or UK." },
    subheadline:
      "The full US tariff schedule and the UK Trade Tariff in one app — pick your region, search the codes, copy one for the entry in a tap, and cost the duty exactly. Keep the codes your accounts ship, and export when you need to. No ads, no account.",
    ctaNote: "Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "43,131 tariff codes",
    "920,357 UK duty rates",
    "Exact duty calculator",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to classify — and cost — a shipment.",
    intro:
      "Every tariff line and every duty rate is free to look up — on the USITC and Census sites in the US, on GOV.UK in the UK. The app just makes it easier: search on your phone, copy a code in a tap, cost the duty exactly, keep the codes your accounts ship, and export when you need to.",
    items: [
      {
        title: "Search, then copy the code in a tap",
        body: "Type a description, a partial code, or a chapter shortcut, and the matches come up. Type digits and it prefix-matches the code; type words — “whisky”, “laptop”, “trainers”, “e-bike” — and it runs full-text over the descriptions and the full ancestor breadcrumb. One tap copies the code for the entry or the CDS declaration.",
      },
      {
        title: "Cost the duty exactly",
        body: "Tariff Snap has a real duty Calculator, not a rate list. Enter the value and it computes duty with decimal-precise math, so $1,234.56 × 2.5% lands on exactly $30.86. In the US it shows General / Special / Column 2 side by side and layers in the Merchandise Processing Fee and Harbor Maintenance Fee for an estimated landed total; in the UK it works out third-country duty, a preferential rate, and UK VAT. When a rate is compound, it says so plainly.",
      },
      {
        title: "Keep the codes you ship often",
        body: "Most work comes back to the same few dozen codes, for the same accounts. Star them onto Favorites and group them into collections that match how you work — Client A – Apparel, Auto Parts, Section 301 Watch, whisky exports, textiles under the TCA — with a per-code note for an internal SKU or a ruling reference.",
      },
      {
        title: "Export or print your sets",
        body: "Export any set as a clean CSV that opens straight in Excel (UTF-8 BOM) or a print-ready PDF. The calculator exports too — work out the duty and export the whole calculation as a one-page report. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "Works offline",
        body: "Your region's full dataset lives on the device, so search, the duty calculator, favorites, and collections keep working without a signal.",
      },
      {
        title: "Straight from the source",
        body: "US data is from the USITC (Harmonized Tariff Schedule) and the US Census Bureau (Schedule B) — U.S. public domain; UK data is from HMRC / DBT (UK Trade Tariff) under the Open Government Licence v3.0. Tariff Snap is an independent utility, not affiliated with or endorsed by any government body. Every item is keyed by its code string, so your saved sets survive a schedule update.",
      },
    ],
  },

  regions: {
    eyebrow: "Regions",
    heading: "One app, your tariff region.",
    intro:
      "Tariff Snap covers two tariff regions in one app. On first launch you pick your region — US Tariff (HTS / Schedule B) or UK Trade Tariff — and the app downloads just that region's data pack; switch, or add the other, any time from Settings. Search, the calculator, collections, and export are the same in both; the dataset and a handful of region-specific views change.",
    items: [
      {
        code: "US",
        name: "United States",
        authority: "USITC + US Census",
        size: "~28 MB",
        license: "U.S. public domain (USITC HTS + Census Schedule B)",
        note: "Schedule B export cross-link · duty Calculator with MPF + HMF and an estimated landed total.",
        stats: [
          { value: "26,530", label: "HTS 2026 (Rev. 7) import codes" },
          { value: "9,731", label: "Schedule B export codes" },
          { value: "3", label: "duty columns (General / Special / Col 2)" },
        ],
      },
      {
        code: "UK",
        name: "United Kingdom",
        authority: "HMRC / DBT",
        size: "89 MB",
        license: "Open Government Licence v3.0 (snapshot v4.0.1519)",
        note: "Countries & measures view · UK VAT calculator · Northern Ireland / Windsor mode (categorisation populates as HMRC's feed allows).",
        stats: [
          { value: "16,601", label: "declarable commodity codes" },
          { value: "920,357", label: "duty rates (369 countries)" },
          { value: "21", label: "HS sections · 7 measure types" },
        ],
      },
    ],
    footnote:
      "A device only carries the region(s) it picks — a US-only device never downloads the UK dataset, and vice versa.",
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench where deliverables get made.",
    intro:
      "The desktop app (a native Tauri build) works from the same region data, and is where classification work becomes shareable output — not a bigger phone.",
    points: [
      {
        title: "Whole-chapter browsing",
        body: "Open an entire HTS chapter or the full UK commodity list and skim it on a full screen; Search, Favorites, Calculator, Browse, and Lists each get room a phone can't spare.",
      },
      {
        title: "Native PDF & CSV export",
        body: "Export any collection to a print-ready PDF or an Excel-friendly CSV; in the UK region the duty-calculation PDF is one-page A4 with an HMRC / OGL v3.0 footer. The desktop headline.",
      },
      {
        title: "Keyboard-first power use",
        body: "A ⌘K command palette to jump to any code, tab, or region mode; ⌘1–5 tabs, ⌘C copy, ⌘D favorite, ⌘E export, with a native menu bar as the shortcut cheatsheet.",
      },
      {
        title: "The full calculator on a keyboard",
        body: "US General / Special / Column 2 with MPF + HMF, or UK third-country / preferential + VAT — fast to key when you're pricing shipments all day.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The heart of Tariff Snap is free: full search across your region's codes, the duty Calculator, code details, favorites, collections, and notes — no ads, no account, no network calls to monetize. If it earns a place in your day, a one-time coffee-price unlock (a Supporter purchase on iOS; a one-time in-app purchase on desktop) lifts the collection limits and adds a set of accent-color app themes. Never a subscription, never a wall in front of the classification work — support is a thank-you, not a toll.",
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
    heading: "From a description to a costed entry.",
    steps: [
      {
        n: "01",
        title: "Pick your region, then search",
        body: "Choose US or UK on first launch (the pack downloads once, then it's offline). Type a description, a code, or a chapter shortcut; the right codes appear as you type.",
      },
      {
        n: "02",
        title: "Classify and cost",
        body: "Open the code for its rates and region detail, then send it to the Calculator for exact duty — plus MPF + HMF in the US, or preferential rate + UK VAT in the UK.",
      },
      {
        n: "03",
        title: "Keep it and hand it off",
        body: "Star the code into a client collection with a note, and export the set — or the calculation — as a clean CSV or PDF, so tomorrow it's already there and the team (or the client) gets a copy.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "Two tariff schedules,", accent: "on your phone." },
    body: "Tariff Snap ships the full US HTS plus Schedule B, or the entire UK Trade Tariff, as an offline region pack indexed for full-text search. One app, two regions — download only the one you work in.",
    stats: [
      { num: "43,131", label: "Tariff codes (US + UK)" },
      { num: "920,357", label: "UK duty rates" },
      { num: "2", label: "Regions in one app" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Which regions does Tariff Snap cover, and how do I switch?",
      answer:
        "Two regions today: the US (HTS + Schedule B) and the UK (UK Trade Tariff). You pick one on first launch and only that region's data pack downloads; you can switch — or add the other — any time from Settings, and it downloads on demand. A US-only device never carries the UK data, and vice versa.",
    },
    {
      question: "Is Tariff Snap really free?",
      answer:
        "Yes. Full search across your region's codes, the duty calculator, favorites, collections, and notes are free, with no ads and no account. A one-time Supporter unlock (iOS) or in-app purchase (desktop) is optional — it lifts collection limits and adds app themes, and it's support, not a wall.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. Your region's full dataset ships inside the app (~28 MB for the US, 89 MB for the UK); search, the calculator, favorites, collections, and export all work with zero connection.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. Tariff Snap makes zero network requests for its core work; your favorites, collections, and notes stay on your device.",
    },
    {
      question: "How current is the tariff data, and how does it update?",
      answer:
        "The US pack ships the USITC HTS 2026 (Rev. 7) schedule and Census Schedule B; the UK pack ships HMRC snapshot v4.0.1519 (refreshed roughly quarterly, and after a Budget, a new FTA, or an anti-dumping change). Updates ship free, and because saved items are keyed by code, your favorites and collections carry straight over.",
    },
    {
      question: "Is this a substitute for a customs ruling or professional judgment?",
      answer:
        "No. Tariff Snap is a classification and duty-estimation utility for trained trade professionals. Final classification, duty liability, and admissibility still require professional judgment and, where needed, a binding ruling (a CBP ruling in the US; HMRC advice in the UK).",
    },
  ],

  brand: {
    accent: "#7C8A2E",
    accentDeep: "#63711F",
    monogram: "tf",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "Tariff Snap — Tariff codes and a duty calculator in one app, US or UK",
    description:
      "The full US tariff schedule (HTS + Schedule B) and the UK Trade Tariff in one app — pick your region, fully offline on iPhone, Mac, and Windows. Exact duty calculator (MPF/HMF or preferential + VAT), saved collections, PDF/CSV export. Free core, no ads.",
    keywords: [
      "HTS code lookup",
      "Schedule B",
      "UK Trade Tariff",
      "duty calculator",
      "customs classification",
      "commodity code",
      "Tariff Snap",
    ],
  },
};
