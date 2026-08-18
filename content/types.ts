// AppContent — the single data object that drives one /snap/<slug>/ page.
//
// Based on SITE_ARCHITECTURE.md §5, extended with the fields the shared
// components actually render (trustBar, showcase, dataStats). Every page is
// assembled from one of these objects; nothing app-specific is hardcoded in
// the components. New app onboarding = fill out one file in content/apps/.

export type Platform = "iOS" | "macOS" | "Windows";

// How a build is distributed — drives the CTA badge (logo + label) in Hero.
export type DownloadChannel =
  | "app-store" // iOS App Store
  | "mac-app-store" // Mac App Store
  | "microsoft-store" // Microsoft Store
  | "direct" // direct .dmg / .exe download from doie.cc
  | "play-store"; // Google Play (future)

export interface Download {
  platform: Platform | "Android";
  channel: DownloadChannel;
  /** Store/download URL. Undefined → the badge renders as "Coming soon". */
  url?: string;
}

export type Family =
  | "tax-snap"
  | "chem-safety"
  | "hangar-snap"
  | "tariff-snap";

export interface Brand {
  /** Hex, drives --color-accent (primary CTA / links / eyebrows). */
  accent: string;
  /** Hex, drives --color-accent-deep (gradient end / hover). */
  accentDeep: string;
  /** Hex, drives --color-ink (primary text / dark CTA / DataStats panel). */
  ink?: string;
  /** Hex, drives --color-paper-soft (alternating section backgrounds). */
  paperSoft?: string;
  /** 2-char lowercase monogram shown in the app icon tile (e.g. "ic"). */
  monogram: string;
}

export interface HeroHeadline {
  /** First line(s), rendered in ink. */
  lead: string;
  /** Trailing phrase, rendered in the accent gradient. */
  accent: string;
}

export interface Screenshot {
  /** Absolute path under /public, e.g. /snap/icd-snap/screenshots/search.png */
  src: string;
  caption: string;
  desc: string;
}

export interface AppContent {
  // --- identity -------------------------------------------------------------
  slug: string; // "icd-snap"
  name: string; // "ICD Snap"
  family?: Family;
  category: string; // "Medical"
  platforms: Platform[];
  minOS?: string; // "iOS 18+"
  targetUser: string; // one line
  tagline: string; // core value, one line
  pricing: string; // "Free · No ads" etc.

  // --- hero -----------------------------------------------------------------
  hero: {
    badge: string; // pill above the headline, e.g. "ICD-10-CM 2026 · Fully offline"
    headline: HeroHeadline;
    subheadline: string;
    /** Path to the phone hero screenshot. Omit → hero shows a branded placeholder. */
    heroShot?: string;
    heroShotAlt?: string;
    /** Optional Mac-window shot. Present → hero shows an iPhone + Mac composite. */
    desktopShot?: string;
    ctaNote: string; // fine print under the CTA, e.g. "Free · No ads · iPhone (iOS 18+)"
  };

  // --- sections -------------------------------------------------------------
  trustBar: string[]; // short stat chips, e.g. "98,147 codes"
  features: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; body: string }[]; // 4–6 (rendered with a mono index)
  };
  /**
   * Optional screenshot strip. Show only screens the hero doesn't already
   * carry — e.g. the differentiator screen + the "make it yours" (collections)
   * screen. Omit to rely on the hero composite + desktop band alone.
   */
  showcase?: {
    eyebrow: string;
    heading: string;
    shots: Screenshot[]; // 2–3
  };
  /**
   * Optional "Regions" band for region-picker apps (tax / tariff / hangar) — an
   * in-app region selector rendered as a tab strip plus a per-region card
   * (authority, key dataset numbers, region-specific features, pack size,
   * license). Omit for single-region apps (the section won't render).
   */
  regions?: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: {
      code: string; // short tab label, e.g. "UK" or "US — FAA"
      name: string; // full region name, e.g. "United Kingdom"
      authority: string; // e.g. "HMRC"
      stats: { value: string; label: string }[]; // 3 key numbers (kept uniform)
      note?: string; // region-specific feature line
      size?: string; // pack size, e.g. "40.58 MB"
      license?: string; // short license label
    }[];
    footnote?: string; // e.g. "Coming as regions: Singapore, Hong Kong, India."
  };
  /**
   * Optional dedicated desktop (Mac/Windows) band — a Mac-window shot plus
   * desktop-specific points. Omit for iOS-only apps (the section won't render).
   */
  desktop?: {
    eyebrow: string;
    heading: string;
    intro: string;
    /** Mac-window shots shown side-by-side. Optional — omit until real captures exist. */
    shots?: { src: string; alt: string; caption: string }[];
    points: { title: string; body: string }[]; // 2–4
  };
  /**
   * Optional supporter / pricing band with theme swatches (brief arg 7).
   * Omit for paid-standalone apps that don't use the supporter model.
   */
  support?: {
    eyebrow: string;
    heading: string;
    body: string;
    free: string; // free tier, e.g. "System · Light · Dark"
    themes: { name: string; hex: string }[]; // supporter accent swatches
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: { n: string; title: string; body: string }[]; // 3
  };
  dataStats: {
    heading: HeroHeadline; // lead line (ink) + accent second line (muted)
    body: string;
    stats: { num: string; label: string }[]; // 4
  };
  faq: { question: string; answer: string }[]; // 5–6 (section header is generic)

  // --- presentation & links -------------------------------------------------
  brand: Brand;
  /** One CTA badge per entry, in display order. First is the primary platform. */
  downloads: Download[];
  /**
   * Optional legal attribution / data-source notice — e.g. a required upstream
   * copyright + non-affiliation clause (LabCode Snap must carry the LOINC /
   * Regenstrief notice on its download page and About/Licenses). Each string is
   * one paragraph. Rendered as small print in the page Footer and as a
   * "Data source & attribution" section on the app's privacy page.
   */
  attribution?: string[];

  // --- store metadata (App Store Connect marketing/support URLs point here) -
  seo: {
    title: string; // <title> / OG title
    description: string; // meta / OG description
    keywords: string[];
  };
}
