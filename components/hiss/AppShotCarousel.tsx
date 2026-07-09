"use client";

import { useState } from "react";
import Image from "next/image";

// Single-phone carousel: screenshot on the left flanked by hairline chevrons
// (no boxes, no bg — pure chevron marks that nudge on hover, in the Apple /
// Notion / Airbnb style). Description column on the right. Both the image and
// the description cross-dissolve when the index changes.
//
// When real screenshots land, add `image: "/hiss/screenshots/<file>.png"`
// to the matching slide.
type Slide = {
  label: string;
  title: string;
  body: string;
  image?: string;
};

const SLIDES: Slide[] = [
  {
    label: "Main",
    title: "Press REC. The stamp is already voicing.",
    body:
      "No warm-up. The date, time, and label render in parallel with the mic — the file is stamped by the time you stop.",
    image: "/hiss/screenshots/main.png",
  },
  {
    label: "Backlog",
    title: "Transcripts inline. Search across everything.",
    body:
      "One-line preview under each recording. Tap to play — the box expands to a scrollable 4-line window. Search hits filenames, labels, cities, and transcript text.",
  },
  {
    label: "Settings",
    title: "Pick the model, the voice, the language.",
    body:
      "Whisper Tiny · Base · Small · Large Turbo. Enhanced or Premium iOS voices. Stamp language and transcription language chosen independently.",
  },
];

/* Elegant chevron — no border, no bg. Vertically centered next to the
   screenshot. Nudges toward its direction on hover. */
function Chevron({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  const path = dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
  const nudge = dir === "prev" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5";
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous screenshot" : "Next screenshot"}
      className="group grid h-16 w-10 place-items-center text-[var(--color-line)] transition hover:text-[var(--color-ink)]"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={`transition-transform ${nudge}`}
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function AppShotCarousel() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  const step = (dir: 1 | -1) => {
    setPhase("out");
    window.setTimeout(() => {
      setI((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
      setPhase("in");
    }, 200);
  };

  const slide = SLIDES[i];
  const opacityCls = phase === "in" ? "opacity-100" : "opacity-0";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
      {/* Left column: chevron ← screenshot → chevron */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Chevron dir="prev" onClick={() => step(-1)} />

        <div
          className={`relative aspect-[9/19.5] w-[220px] border border-[var(--color-line)] bg-[var(--color-paper-soft)] transition-opacity duration-200 sm:w-[260px] ${opacityCls}`}
        >
          {slide.image ? (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 220px, 260px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="code-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                  Screenshot
                </div>
                <div className="mt-2 text-[14px] font-medium">{slide.label}</div>
              </div>
            </div>
          )}
        </div>

        <Chevron dir="next" onClick={() => step(1)} />
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
