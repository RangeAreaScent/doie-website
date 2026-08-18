import type { AppContent } from "../types";

// Hangar Snap — region-picker app (FAA / EASA in one app, each with its own tabs).
// From content-briefs/hangar-snap.md. Both datasets are bundled (~91 MB), no
// region pack download. Measured tone. backup → provenance; arg 7 → SupportBand.
// Per-region content lives in the Regions section. No screenshots yet →
// placeholder hero + copy-only desktop band.
// Renamed from Aero Snap (slug: aero-snap) 2026-08-18 — never indexed or
// linked from a store, so a straight slug change, no redirect needed.

export const hangarSnap: AppContent = {
  slug: "hangar-snap",
  name: "Hangar Snap",
  category: "Reference / Utilities",
  platforms: ["iOS", "macOS", "Windows"],
  minOS: "iOS 18+",
  targetUser:
    "US A&P mechanics, IAs, owners/operators, and DERs checking FAA ADs, 14 CFR, TCDS, and ACs — and European Part-66 engineers, Part-145 organisations, and CAMO staff pulling EASA Easy Access Rules, CS-XX, and TCDS",
  tagline: "Look up the FAA and EASA regs you check all day — and keep the ones for your aircraft.",
  pricing: "Free core + one-time supporter unlock",

  hero: {
    badge: "FAA + EASA · 2026 edition",
    headline: { lead: "FAA and EASA regs,", accent: "in the hangar." },
    subheadline:
      "FAA Airworthiness Directives, 14 CFR, TCDS and Advisory Circulars — or EASA Easy Access Rules, CS-XX, Part-66 and TCDS — searchable in the hangar. Pick your authority, copy a citation in a tap, and keep the regs for your tails. No ads, no account.",
    ctaNote: "FAA + EASA · Free core · No ads · No account · iPhone, Mac & Windows",
  },

  trustBar: [
    "9,408 FAA directives",
    "507 EASA rule sections",
    "2 authorities, one app",
    "Works offline",
    "No ads, no account",
  ],

  features: {
    eyebrow: "Why an app",
    heading: "A simpler way to look them up — and keep them.",
    intro:
      "Every FAA AD and every EASA Easy Access Rule is free to pull up online — in a browser tab, or a long PDF that has to render before you can scroll to 145.A.50. The app just makes it easier: search on the shop floor, copy a citation in a tap, keep the regs for your tails, and export when you need to.",
    items: [
      {
        title: "Search, then copy the citation in a tap",
        body: "Type a make/model, an AD number, an ATA chapter, a 14 CFR citation, an EASA section ID, a Part, or any word in the body, and the matches come up. Open an entry for its effective date, applicability, and supersede chain; where the EU carries them, AMC and GM sit inline under the requirement. One tap copies the number, the citation, or the whole entry into a logbook, an 8130, or a CRS.",
      },
      {
        title: "Keep the regs for your aircraft",
        body: "You don't manage 9,408 directives or 507 sections — you manage the handful that hit the airframes on your line. Star them onto Favorites and group them into collections that match how you work — a per-tail “My Aircraft” set that auto-matches applicable ADs by make and model, or folders like N12345 annual, Fleet recurring ADs, B1.1 privileges — with a compliance tick on each entry and a note for the method of compliance or the next due interval.",
      },
      {
        title: "Export or print your sets",
        body: "Export any Favorites list or folder as a clean PDF (US-Letter or A4) or an RFC-4180 CSV — the recurring ADs for a type, the standard sections for an approval scope, a compliance sheet for the aircraft binder, or a status list for the owner before the annual. With a keyboard and a printer, the desktop makes this easiest.",
      },
      {
        title: "One index, either authority",
        body: "The two regulators publish genuinely different documents, so each region carries its own tabs and content — AD · FAR · AC · TCDS for the FAA, EASA Rules · CS · Part-66 · TCDS for EASA. Pick your authority and the whole app becomes it; work across both and switch in two taps, favorites and collections following you.",
      },
      {
        title: "Works offline",
        body: "The full dataset for your region lives on the device, so search, favorites, and collections keep working without a signal in the hangar or out on the ramp.",
      },
      {
        title: "Straight from the source",
        body: "US data is FAA ADs (Federal Register), 14 CFR (eCFR), TCDS (DRS), and Advisory Circulars — public domain works of the US Government; EU data is EASA Easy Access Rules and TCDS, reused under Commission Decision 2011/833/EU. Hangar Snap is not affiliated with the FAA or EASA; every entry links back to the controlled source.",
      },
    ],
  },

  regions: {
    eyebrow: "Regions",
    heading: "One app, your authority.",
    intro:
      "Hangar Snap covers both the FAA (US) and EASA (EU) worlds in one app. On first launch you pick your authority; you can switch anytime in Settings. This isn't a country swap where the same tabs show different rows — the two authorities publish genuinely different document types, so each region has its own tabs. Both datasets are bundled, ~91 MB combined, so there's nothing extra to download.",
    items: [
      {
        code: "US — FAA",
        name: "United States (FAA)",
        authority: "FAA",
        size: "~86 MB",
        license: "US Government works, public domain (17 U.S.C. § 105)",
        note: "Tabs: AD · FAR · AC · TCDS. Browse the corpus by ATA chapter or manufacturer, or jump straight to every Emergency AD.",
        stats: [
          { value: "9,408", label: "Airworthiness Directives (+9,814 applicability rows)" },
          { value: "1,022", label: "sections of 14 CFR" },
          { value: "779", label: "Advisory Circulars (+ 62 TCDS)" },
        ],
      },
      {
        code: "EU — EASA",
        name: "European Union (EASA)",
        authority: "EASA",
        size: "~4.78 MB",
        license: "Reused under Commission Decision 2011/833/EU",
        note: "Tabs: EASA Rules · CS · Part-66 · TCDS. AMC inline on 251 sections, GM on 178. EASA ADs are bi-weekly and intentionally not bundled — check those live.",
        stats: [
          { value: "507", label: "Easy Access Rules sections (all 9 Parts)" },
          { value: "22", label: "CS-XX certification specs" },
          { value: "93", label: "verified TCDS (+ 13/22 Part-66)" },
        ],
      },
    ],
    footnote:
      "Both datasets ship on-device — pick a home authority, or switch in two taps if you fly and wrench across both regulators.",
  },

  desktop: {
    eyebrow: "On the desktop",
    heading: "The workbench where the compliance sheet gets made.",
    intro:
      "The desktop port (Tauri 2, native macOS + Windows) is built around a split-pane — list left, detail right — for working a stack of entries without losing your place, and adds real workbench muscle the phone can't.",
    points: [
      {
        title: "Browse the whole corpus",
        body: "A Browse tab filters the US corpus by ATA chapter, by manufacturer, or straight to every Emergency AD, and walks the EU corpus down the full EASA Parts tree — ideal for scoping a type or an inspection area you don't have an exact number for.",
      },
      {
        title: "Native PDF & CSV export",
        body: "A native Save dialog writing paginated US-Letter / A4 PDF and RFC-4180 CSV for any Favorites list or collection — the compliance sheets and hand-off lists that actually get filed.",
      },
      {
        title: "Keyboard-first power use",
        body: "⌘F jumps to search; ⌘1–⌘7 to the region's tabs; ⌘N starts a collection; a native menu bar and a system-wide global hotkey plus tray icon summon the window from any app.",
      },
      {
        title: "Bulk-build collections",
        body: "Tick multiple entries in Search and add them to a folder in one action; pin any entry to a folder from its detail header — plus the four Supporter themes on an all-day screen.",
      },
    ],
  },

  support: {
    eyebrow: "Pricing",
    heading: "Core is free. Support is a choice.",
    body: "The whole point — search, lookup across your region's regs, favorites, collections, notes, and export — is free on iOS, with no ads and no account. If Hangar Snap saves you real time, a one-time coffee-price unlock (never a subscription, never ads) adds power features plus four accent-color app themes — and on iPhone, four matching alternate app icons. The same one-time unlock applies on Mac and Windows. The app makes zero tracking requests either way.",
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
    heading: "From an authority to your compliance set.",
    steps: [
      {
        n: "01",
        title: "Pick your authority",
        body: "On first launch, choose FAA (US) or EASA (EU); the app loads that region's dataset and tabs. Switch anytime in Settings.",
      },
      {
        n: "02",
        title: "Search the way you think",
        body: "By make/model, AD number, ATA chapter, citation, section ID, Part, or full text; results stream in offline, with AMC/GM inline where EASA carries them. Copy the number, citation, or full entry into your logbook or CRS.",
      },
      {
        n: "03",
        title: "Build your compliance set",
        body: "Star the entries for your tails or approval scope into a “My Aircraft” or folder collection with compliance ticks and notes, then export a clean PDF or CSV to file or hand off.",
      },
    ],
  },

  dataStats: {
    heading: { lead: "Both regulators,", accent: "on your phone." },
    body: "Hangar Snap bundles the full FAA corpus and the full EASA corpus on-device — ~91 MB combined, indexed for full-text search. Pick a home authority; switch anytime. No subscription, no download.",
    stats: [
      { num: "9,408", label: "FAA Airworthiness Directives" },
      { num: "507", label: "EASA rule sections (9 Parts)" },
      { num: "2", label: "Authorities in one app" },
      { num: "0", label: "Network requests" },
    ],
  },

  faq: [
    {
      question: "Does it cover both FAA and EASA?",
      answer:
        "Both, in one app. On first launch you pick your authority — FAA (US) or EASA (EU) — and can switch anytime. Each region has its own tabs and content: US shows ADs, 14 CFR, ACs, and TCDS; EU shows EASA Easy Access Rules (with AMC/GM inline), CS-XX, Part-66, and TCDS. Both datasets are bundled, so nothing extra to download.",
    },
    {
      question: "Is Hangar Snap free?",
      answer:
        "Yes — the core is free on iOS: search across your region's regs, plus favorites, collections, notes, and export, with no ads and no account. A one-time coffee-price Supporter unlock adds power features, four accent-color themes, and matching app icons. The same one-time unlock applies on Mac and Windows.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Completely. Both regions' datasets — the full FAA corpus (~86 MB) and the full EASA corpus (~4.78 MB), ~91 MB combined — ship inside the app. Search, favorites, and collections all work with no signal, in any hangar, on any stand.",
    },
    {
      question: "What data do you collect?",
      answer:
        "None. Hangar Snap makes zero tracking or analytics requests. Your favorites, collections, notes, and compliance ticks stay on your device. The only outbound connections are ones you trigger — opening a source link, or activating a Supporter unlock.",
    },
    {
      question: "How current is the data, and when does it update?",
      answer:
        "It ships as a stamped snapshot per region — the US corpus (dataset v1, June 2026) and the EU corpus tracking EASA Easy Access Rules Major Revisions. Refreshed editions land as free in-app updates. Note that EASA ADs are issued bi-weekly and are intentionally not bundled — check those live at ad.easa.europa.eu; every entry links back to the controlled source.",
    },
    {
      question: "Is this a substitute for the official record or an IA's judgment?",
      answer:
        "No. Hangar Snap is an offline lookup and organization tool for trained aviation-maintenance professionals. Airworthiness determinations, method-of-compliance calls, and return-to-service decisions still require the controlled FAA / EASA documents and qualified judgment. Every entry links back to its source.",
    },
  ],

  brand: {
    accent: "#39617A",
    accentDeep: "#2C4B60",
    monogram: "ha",
  },

  downloads: [
    { platform: "iOS", channel: "app-store" },
    { platform: "macOS", channel: "mac-app-store" },
    { platform: "Windows", channel: "microsoft-store" },
  ],

  seo: {
    title: "Hangar Snap — FAA and EASA regs in one app",
    description:
      "FAA ADs, 14 CFR, TCDS and ACs — or EASA Easy Access Rules, CS-XX, Part-66 and TCDS — offline in one app on iPhone, Mac, and Windows. Pick your authority; per-tail AD matching, compliance sets, PDF/CSV export. Free core, no ads. Not affiliated with the FAA or EASA.",
    keywords: [
      "airworthiness directives",
      "FAA AD lookup",
      "EASA Easy Access Rules",
      "14 CFR",
      "Part-66",
      "aviation maintenance app",
      "Hangar Snap",
    ],
  },
};
