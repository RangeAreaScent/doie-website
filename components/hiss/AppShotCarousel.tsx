"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Screenshot carousel: the visual on the left flanked by hairline chevrons (no
// boxes, no bg — pure chevron marks that nudge on hover, in the Apple / Notion /
// Airbnb style). Description column on the right. Both the visual and the
// description cross-dissolve when the index changes.
//
// Visuals are pre-cropped (status bar and home strip removed, rounded corners,
// transparent background) so they sit directly on the page. Each carries its own
// width/height; the stage has a fixed height and centers whatever aspect ratio.
type Slide = {
  label: string;
  title: string;
  body: string;
  image: string;
  width: number;
  height: number;
};

const SLIDES: Slide[] = [
  {
    label: "Main",
    title: "Press REC. The stamp is already voicing.",
    body:
      "No warm-up. The date, time, and label render in parallel with the mic — the file is stamped by the time you stop.",
    image: "/hiss/screenshots/main.png",
    width: 900,
    height: 1749,
  },
  {
    label: "Backlog",
    title: "Transcripts inline. Search across everything.",
    body:
      "One-line preview under each recording. Tap to play — the box expands to a scrollable 4-line window. Search hits filenames, labels, cities, and transcript text.",
    image: "/hiss/screenshots/backlog.png",
    width: 900,
    height: 1815,
  },
  {
    label: "Transcribe",
    title: "Every word, turned into text on your device.",
    body:
      "Transcription runs on-device, so your audio stays on your iPhone. The transcript sits right under the recording it came from.",
    image: "/hiss/screenshots/transcribe.png",
    width: 900,
    height: 308,
  },
  {
    label: "Share",
    title: "Send it anywhere.",
    body:
      "Export as audio, text, or Markdown, or copy the transcript straight into Obsidian or Notes.",
    image: "/hiss/screenshots/share.png",
    width: 900,
    height: 798,
  },
  {
    label: "Space",
    title: "Less space. Still clear.",
    body:
      "Light AAC files fit more recordings in the same space as Apple's Voice Memos. In a test of 100 one-minute recordings, HiSS used 28 MB against 47 MB.",
    image: "/hiss/screenshots/space.png",
    width: 720,
    height: 1096,
  },
  {
    label: "Settings",
    title: "Pick the voice, the language, the theme.",
    body:
      "Enhanced or Premium iOS voices for the stamp. Stamp language and transcription language chosen independently.",
    image: "/hiss/screenshots/settings.png",
    width: 900,
    height: 1815,
  },
];

/* Round chevron button next to the visual. Visible at rest (hairline ring,
   ink arrow); fills on hover. */
function Chevron({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  const path = dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
  const nudge = dir === "prev" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5";
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous screenshot" : "Next screenshot"}
      className="group grid size-10 shrink-0 place-items-center rounded-full border border-[var(--color-ink-soft)]/45 bg-[var(--color-paper)] text-[var(--color-ink)] transition hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={`transition-transform ${nudge}`}
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const SWIPE_PX = 40;

export function AppShotCarousel() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const busy = useRef(false);
  const startX = useRef<number | null>(null);

  // Cross-dissolve to slide n; ignores input while a change is already running.
  const go = (n: number) => {
    const target = ((n % SLIDES.length) + SLIDES.length) % SLIDES.length;
    if (busy.current || target === i) return;
    busy.current = true;
    setPhase("out");
    window.setTimeout(() => {
      setI(target);
      setPhase("in");
      busy.current = false;
    }, 200);
  };

  const slide = SLIDES[i];
  const opacityCls = phase === "in" ? "opacity-100" : "opacity-0";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
      {/* Left column: chevron ← screenshot → chevron, progress bar underneath */}
      <div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <Chevron dir="prev" onClick={() => go(i - 1)} />

          {/* Swipe left/right on the visual to change slides. */}
          <div
            className={`flex h-[340px] w-[230px] touch-pan-y select-none items-center justify-center transition-opacity duration-200 sm:h-[430px] sm:w-[340px] ${opacityCls}`}
            onPointerDown={(e) => {
              startX.current = e.clientX;
            }}
            onPointerUp={(e) => {
              if (startX.current === null) return;
              const dx = e.clientX - startX.current;
              startX.current = null;
              if (Math.abs(dx) >= SWIPE_PX) go(dx < 0 ? i + 1 : i - 1);
            }}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={slide.width}
              height={slide.height}
              quality={90}
              sizes="(max-width: 640px) 230px, 340px"
              draggable={false}
              className="h-auto max-h-full w-auto max-w-full"
              style={{ filter: "drop-shadow(0 12px 24px rgba(10, 10, 10, 0.22))" }}
            />
          </div>

          <Chevron dir="next" onClick={() => go(i + 1)} />
        </div>

        <div className="mt-5 flex justify-center gap-1.5" role="group" aria-label="Screenshots">
          {SLIDES.map((sl, n) => (
            <button
              key={sl.label}
              onClick={() => go(n)}
              aria-label={`Show ${sl.label}`}
              aria-current={n === i}
              className="group flex h-8 w-10 items-center focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-accent)]"
            >
              <span
                className={`block h-[3px] w-full transition-colors ${
                  n === i
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-ink-soft)]/30 group-hover:bg-[var(--color-ink-soft)]/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right column: progress indicator + title + body */}
      <div className={`transition-opacity duration-200 ${opacityCls}`}>
        <div className="flex items-center gap-3">
          <span className="code-mono text-[13px] text-[var(--color-accent)]">
            {String(i + 1).padStart(2, "0")}
            <span className="text-[var(--color-line)]"> / </span>
            {String(SLIDES.length).padStart(2, "0")}
          </span>
          <span className="code-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
            {slide.label}
          </span>
        </div>
        <h3 className="mt-4 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[30px]">
          {slide.title}
        </h3>
        <p className="mt-4 max-w-lg text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
          {slide.body}
        </p>
      </div>
    </div>
  );
}
