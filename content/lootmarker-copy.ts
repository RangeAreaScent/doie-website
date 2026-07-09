// All Loot Marker marketing-page prose. English is the source; the scaffolding
// mirrors wren-copy so localizations can be added later by dropping in a new
// COPY[lang] entry. Product names + fixed technical terms (CoreML, U²-Net,
// OpenCV, iCloud, App Store, iOS) stay in English by design.

export type Lang = "en";

export const LANGS: Lang[] = ["en"];

// Loot Marker lives on its own subdomain, lootmarker.doie.cc. The host
// rewrite in middleware.ts maps subdomain-root requests onto the /lootmarker
// route tree. In-page links use the root-relative "/"; metadata URLs must be
// ABSOLUTE (metadataBase is https://doie.cc, so a relative path would resolve
// to the wrong host).
export const SITE = "https://lootmarker.doie.cc";

export const LOCALES: { code: Lang; short: string; label: string; href: string }[] = [
  { code: "en", short: "EN", label: "English", href: "/" },
];

export function hrefFor(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}`;
}

export function canonicalFor(lang: Lang): string {
  return lang === "en" ? `${SITE}/` : `${SITE}/${lang}`;
}

export const ALTERNATES: Record<string, string> = Object.fromEntries(
  LOCALES.map((l) => [l.code, canonicalFor(l.code)]),
);

export type Card = { t: string; b: string };

export type LootMarkerCopy = {
  metaTitle: string;
  metaDescription: string;
  navDownload: string;
  // hero
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  ctaDownload: string;
  ctaHow: string;
  // spec strip
  spec: string[];
  // gallery
  appKicker: string;
  appTitle: string;
  appIntro: string;
  galMore: string;
  galCaptions: string[];
  // the gap
  gapKicker: string;
  gapTitle: string;
  gapIntro: string;
  gapCards: Card[];
  // features
  featKicker: string;
  featTitle: string;
  featIntro: string;
  features: Card[];
  // how it works
  howKicker: string;
  howTitle: string;
  howIntro: string;
  // privacy
  privKicker: string;
  privTitle: string;
  privBody: string;
  // download / CTA
  dlKicker: string;
  dlTitle: string;
  dlBody: string;
  dlDownloadLabel: string;
  dlRequiresLabel: string;
  dlFree: string;
  // footer
  footerTagline: string;
};

const en: LootMarkerCopy = {
  metaTitle: "Loot Marker — a scrapbook for the signs you notice",
  metaDescription:
    "Point at a road sign, a trail marker, a warning notice. Loot Marker isolates it, corrects the perspective, and files it in your scrapbook. On-device, offline, no account.",

  navDownload: "Get on iOS",

  heroKicker: "Sign collection · iOS",
  heroTitleA: "The signs",
  heroTitleB: "worth keeping.",
  heroSub:
    "Take a photo of a sign — any sign. Loot Marker cuts it out, straightens it, and files it into your collection. What you notice becomes a scrapbook, not a camera roll.",
  ctaDownload: "Get on the App Store",
  ctaHow: "How it works",

  spec: [
    "iOS 16+",
    "On-device AI",
    "iCloud sync",
    "No account",
    "Free · premium unlock",
  ],

  appKicker: "The app",
  appTitle: "Point, tap, and it's yours.",
  appIntro:
    "Every shot is auto-detected, straightened, and dropped into the collection you're working on. Swipe through a few captures from the field.",
  galMore: "More shots soon",
  galCaptions: [
    "Auto Detect — the sign is isolated and the shape classified before you've lowered the phone.",
    "Perspective — a tilted diamond becomes an upright diamond, edges sharp, corners clean.",
    "Collection — signs sort themselves into folders you named, filed by shape, tag, and place.",
  ],

  gapKicker: "The gap",
  gapTitle: "A camera roll isn't a collection.",
  gapIntro:
    "Photo apps see rectangles. They don't know a stop sign is an octagon, or that a yield sign is upside-down on purpose. So the crop is wrong, the perspective is wrong, and the sign lives in a scroll that no one ever opens twice.",
  gapCards: [
    {
      t: "Camera roll",
      b: "Rectangular thumbs · wonky angles · buried in dates · no shape memory · every photo re-forgets what you were collecting.",
    },
    {
      t: "Loot Marker",
      b: "Shape-aware detection · one-tap flatten · sorted by collection · filed with place, tag, and theme · designed for revisiting.",
    },
    {
      t: "The difference",
      b: "The app knows what a sign is. Every capture is treated as an artifact, not a snapshot — cut clean, laid flat, and kept.",
    },
  ],

  featKicker: "What it does",
  featTitle: "Four things, well.",
  featIntro:
    "One button in the field. Underneath, an on-device pipeline that treats a sign like a specimen: detected, straightened, catalogued, and displayed like you mean it.",
  features: [
    {
      t: "Auto detect the shape",
      b: "A CoreML segmentation model isolates the sign; OpenCV traces its edges. Rectangle, diamond, circle, triangle, pentagon — hinted by what you picked, corrected against what it sees.",
    },
    {
      t: "Straighten the perspective",
      b: "Four corners, one filter. A diamond leaning off a pole comes back upright, a highway shield keystoned by angle comes back square. No dragging handles, no re-crops.",
    },
    {
      t: "File it in a collection",
      b: "Folders by theme (Trail, Highway, NPS, Vintage…), tags for the fine grain, place and date carried from the shot. Later you search by shape or by trip.",
    },
    {
      t: "Display it like you mean it",
      b: "Card themes — Classic, Trading Card, Holo, Vintage Postcard, Polaroid. A canvas mode to lay a whole trip out. The archive is the interface.",
    },
  ],

  howKicker: "How it works",
  howTitle: "One shot. One second. Kept.",
  howIntro:
    "Frame the sign. The camera captures at full resolution while a small salient-object model runs on the Neural Engine. OpenCV traces the mask, classifies the shape, hands four corners to a perspective filter. What comes back is a straight, tight, transparent-cornered image with the shape kind attached. Nothing leaves the phone.",

  privKicker: "Your data",
  privTitle: "Everything stays on this phone.",
  privBody:
    "Detection runs on-device with a bundled CoreML model — no server ever sees your photos. iCloud sync is optional and end-to-end encrypted through your account. No analytics, no ads, no sign-in. Export a backup file any time you want to move phones or archive a season.",

  dlKicker: "Download",
  dlTitle: "Free to start. Premium when you outgrow thirty.",
  dlBody:
    "Loot Marker is free for the first thirty signs — enough for a trip. A one-time unlock removes the limit and turns on canvas mode, every card theme, and custom labels.",
  dlDownloadLabel: "Download",
  dlRequiresLabel: "Requires",
  dlFree: "Free core · $4.99 one-time unlock",

  footerTagline: "A field notebook for signs",
};

export const COPY: Record<Lang, LootMarkerCopy> = { en };
