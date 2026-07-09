// All HiSS marketing-page prose. Rendered by components/hiss/HissPage.tsx.
// Source language is English. Product / technical names stay in English by
// design: WhisperKit, Whisper Tiny/Base/Small/Large Turbo, Enhanced,
// Premium, AAC, TTS, iCloud, Markdown, CSV.

export type Lang = "en";

export const LANGS: Lang[] = ["en"];

export function hrefFor(_: Lang): string {
  return "/hiss";
}

export const ALTERNATES: Record<string, string> = {
  en: "/hiss",
};

type Copy = {
  // Meta
  metaTitle: string;
  metaDescription: string;

  // Nav
  navDownload: string;

  // Hero
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  ctaDownload: string;
  ctaHow: string;

  // Spec strip
  spec: string[];

  // Product shots
  appKicker: string;
  appTitle: string;
  appIntro: string;

  // What's different — 4 cards
  diffKicker: string;
  diffTitle: string;
  diffIntro: string;
  diffCards: { t: string; b: string }[];

  // Features — 4 rows with objects
  featKicker: string;
  featTitle: string;
  featIntro: string;
  features: { t: string; b: string }[];

  // How it works
  howKicker: string;
  howTitle: string;
  howIntro: string;

  // Multilingual
  mlKicker: string;
  mlTitle: string;
  mlIntro: string;

  // Export
  exKicker: string;
  exTitle: string;
  exIntro: string;

  // The Stamp (light section)
  stampKicker: string;
  stampTitle: string;
  stampBody: string;
  stampPoints: { t: string; b: string }[];

  // Use Cases
  useKicker: string;
  useTitle: string;
  useIntro: string;
  useCases: { t: string; b: string }[];

  // Premium
  premKicker: string;
  premTitle: string;
  premIntro: string;
  premBenefits: { t: string; b: string; badge?: string }[];
  premFree: string;

  // Privacy
  privKicker: string;
  privTitle: string;
  privBody: string;

  // Download
  dlKicker: string;
  dlTitle: string;
  dlBody: string;
  dlDownloadLabel: string;
  dlRequiresLabel: string;
  dlFree: string;

  // Footer
  footerTagline: string;
};

export const COPY: Record<Lang, Copy> = {
  en: {
    metaTitle: "HiSS — Voice memos with context, on-device.",
    metaDescription:
      "A voice recorder that speaks the date, time, and label into every take — then transcribes on-device with Whisper. Light AAC files. No account.",

    navDownload: "Download",

    heroKicker: "iOS · Voice recorder",
    heroTitleA: "Every take,",
    heroTitleB: "already labeled.",
    heroSub:
      "HiSS speaks the date, time, and label into the start of every recording, then transcribes it on-device. Light AAC files, no account, no cloud round-trip.",
    ctaDownload: "Get it on iOS",
    ctaHow: "How it works",

    spec: [
      "iOS 16+",
      "AAC · 22 kHz · 32 kbps",
      "≈ 140 KB / 30 s",
      "On-device transcription",
      "No account",
      "No analytics",
    ],

    appKicker: "The app",
    appTitle: "A voice memo with a stamp baked in.",
    appIntro:
      "The date, year, time, and label are spoken into the file itself. Weeks later, you don't need the filename — the recording tells you when and what it was.",

    diffKicker: "What makes it different",
    diffTitle: "The plain voice recorder, upgraded quietly.",
    diffIntro:
      "Every feature earns its place. No gradients, no glow, no signup. Just the parts a voice memo actually needs — plus a few that turn a folder of clips into a searchable archive.",
    diffCards: [
      {
        t: "Spoken stamps, in the audio",
        b: "Date · year · time · label are TTS-rendered into the head of the file. No manual labeling later.",
      },
      {
        t: "Transcription, on device",
        b: "Whisper runs locally. Pick Tiny · Base · Small · Large Turbo. English, Korean, Japanese, Chinese, more.",
      },
      {
        t: "Multiple export formats",
        b: "Audio, plain text, Markdown for Obsidian/Notion, CSV for spreadsheets and databases.",
      },
      {
        t: "Light and private",
        b: "≈ 140 KB per 30 s. No account, no analytics, nothing leaves the phone. Interruptions auto-save.",
      },
    ],

    featKicker: "Features",
    featTitle: "Built like an instrument, not an app you swipe past.",
    featIntro:
      "The whole app follows one rule — every screen must answer a real recording question. Duration. Label. Location. Language. Model. Nothing decorative.",
    features: [
      {
        t: "Instant capture with stamped context",
        b: "Press REC. The date, time, and label are spoken into the start of the file while the mic is already recording. No warm-up, no dialog.",
      },
      {
        t: "Transcripts you can trust, in your language",
        b: "WhisperKit runs locally — no network call, no OpenAI account. Force English, Korean, Japanese, or Chinese for accuracy, or let it auto-detect. Long recordings save partial results if anything interrupts.",
      },
      {
        t: "Voices in your language, not just English",
        b: "The stamp speaks your device language automatically, using downloaded Enhanced or Premium iOS voices. Korean, Japanese, Chinese, and English are all first-class.",
      },
      {
        t: "Export as audio, text, Markdown, or CSV",
        b: "Multi-select, then pick a format. Markdown drops straight into Obsidian, Bear, or Notion with frontmatter and tags. CSV opens in Numbers or imports into a database.",
      },
    ],

    howKicker: "How it works",
    howTitle: "One tap. The rest is baked in.",
    howIntro:
      "The stamp is rendered while the mic is capturing — no serial dialog. Everything merges to a single AAC file, then transcription runs in the background if you want it to.",

    mlKicker: "Languages",
    mlTitle: "Speaks and hears your language.",
    mlIntro:
      "Auto-detect uses the device locale. Or force a language for the TTS stamp and the transcription independently — helpful when your device is Korean but you're recording an English lecture.",

    exKicker: "Export",
    exTitle: "Take the recording — and its text.",
    exIntro:
      "Long-press to enter multi-select, pick a format. Audio is the m4a itself; the text formats include metadata and transcripts side-by-side.",

    stampKicker: "The stamp",
    stampTitle: "Filename dies. The voice doesn't.",
    stampBody:
      "You choose what gets voiced — Date, Year, Time, Label. HiSS speaks it into the first second of the file. Rename it, move it, hand it to someone in a year — the recording still tells you when it was, what it was for, and where it happened. No metadata to lose.",
    stampPoints: [
      { t: "You choose", b: "Toggle Date / Year / Time / Label per session." },
      { t: "In the audio", b: "The stamp is baked into the .m4a, not the file metadata." },
      { t: "Review by ear", b: "Skim months of memos in seconds — the stamp is the anchor." },
    ],

    useKicker: "Use cases",
    useTitle: "For people who log by voice.",
    useIntro:
      "The stamp turns voice memos into a scannable timeline. Light AAC files (~140 KB per 30 s) make daily use guilt-free — a year of hourly notes fits comfortably on your phone.",
    useCases: [
      {
        t: "Hourly work logs",
        b: "Speak once an hour about what happened. The time stamp becomes the timeline; the transcript becomes the diary.",
      },
      {
        t: "Fieldwork",
        b: "Observations with real-time and city name baked in — no manual timestamping, no writing while gloved or muddy.",
      },
      {
        t: "Research notes",
        b: "Interview snippets, lab observations, half-formed hypotheses. Later, search by phrase across the whole archive.",
      },
      {
        t: "Travel",
        b: "Turn Location on — the city gets stamped into every clip. Retrace a trip by sound months after you're home.",
      },
      {
        t: "Everyday",
        b: "≈ 140 KB per 30 s. Record freely — a full year of daily memos fits in under 50 MB.",
      },
    ],

    premKicker: "Premium · $4.99",
    premTitle: "One tap unlocks the extras.",
    premIntro:
      "The core is free forever — every recording feature, every Whisper model, TTS stamps in every language, and audio + plain-text export. Premium is the polish and the two exports that plug into your notes and data workflows.",
    premBenefits: [
      {
        t: "Three additional themes",
        b: "Mono · Iris · Ember. Alternate personalities for the same instrument.",
      },
      {
        t: "Markdown export",
        b: "One tap into Obsidian, Bear, or Notion — YAML frontmatter, H2 sections, blockquote transcripts, per-recording tags.",
      },
      {
        t: "CSV export",
        b: "Date, time, label, location, filename, transcript — one row per recording, ready for Numbers, Excel, or a database.",
      },
      {
        t: "iCloud Sync",
        b: "Your recordings and transcripts on every device signed into your Apple ID.",
        badge: "Coming soon",
      },
    ],
    premFree: "One-time $4.99. No subscription. No account.",

    privKicker: "Privacy",
    privTitle: "Nothing leaves the phone unless you share it.",
    privBody:
      "Recordings live in the app's own storage. Transcription runs locally via WhisperKit — no network call, no OpenAI account, no telemetry. If a phone call or alarm interrupts a session, the file is saved up to that point automatically.",

    dlKicker: "Download",
    dlTitle: "HiSS — Life Recorder for iOS.",
    dlBody:
      "iOS 16 and later. Optimized for Apple Neural Engine. The core is free; premium unlocks themes, Markdown / CSV export, and iCloud sync.",
    dlDownloadLabel: "Download",
    dlRequiresLabel: "Requires",
    dlFree: "Free · Premium $4.99 one-time",

    footerTagline: "Voice memos with context, on-device.",
  },
};
