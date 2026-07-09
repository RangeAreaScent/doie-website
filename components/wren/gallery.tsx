"use client";

import Image from "next/image";
import { useState } from "react";
import { COPY, type Lang } from "../../content/wren-copy";

// Interactive product-shot gallery: a chip per language example, and left/right
// navigation through that language's 2–3 real screenshots. Screenshots already
// carry their own macOS window chrome + shadow (transparent PNGs), so they sit
// directly on the paper — no extra frame. Data-driven: add a language example
// by adding an entry + PNGs under public/wren/screenshots/. The visible caption
// + "more languages" chrome are localized to the page language via COPY[lang];
// galCaptions[] is keyed to the shots[] order.

type Shot = { src: string; w: number; h: number };
type Gallery = { code: string; label: string; shots: Shot[] };

const GALLERIES: Gallery[] = [
  {
    code: "KO",
    label: "한국어",
    shots: [
      { src: "/wren/screenshots/ko-daily-talk.png", w: 2264, h: 1622 },
      { src: "/wren/screenshots/ko-session-notes.png", w: 2328, h: 1882 },
      { src: "/wren/screenshots/ko-vocabulary.png", w: 2328, h: 1882 },
    ],
  },
];

export function WrenGallery({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const [gi, setGi] = useState(0);
  const [shot, setShot] = useState(0);
  const g = GALLERIES[gi];
  const shots = g.shots;
  const count = shots.length;
  // The tallest shot fixes the stage box so crossfading between shots of
  // different aspect ratios never shifts layout — shorter shots just get
  // invisible white margin (white-on-white paper).
  const maxRatio = Math.max(...shots.map((s) => s.h / s.w));
  // Localized caption for the current shot; fall back to the last one if a
  // gallery ever carries more shots than the copy dict lists captions for.
  const caption = c.galCaptions[shot] ?? c.galCaptions[c.galCaptions.length - 1];

  function go(delta: number) {
    setShot((s) => (s + delta + count) % count);
  }
  function pick(i: number) {
    setGi(i);
    setShot(0);
  }

  return (
    <div className="w-full">
      {/* language chips */}
      <div className="flex flex-wrap items-center gap-2">
        {GALLERIES.map((gal, i) => {
          const active = i === gi;
          return (
            <button
              key={gal.code}
              type="button"
              onClick={() => pick(i)}
              aria-pressed={active}
              className={`code-mono px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] transition ${
                active
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "border border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              }`}
            >
              {gal.code} · {gal.label}
            </button>
          );
        })}
        <span className="code-mono ml-auto hidden text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:inline">
          {c.galMore}
        </span>
      </div>

      {/* stage — all shots stacked in a fixed-ratio box, crossfaded on opacity
          for a smooth dissolve with zero layout shift. Optimized at q90 (see
          next.config images.qualities): WebP/AVIF + responsive resize,
          near-lossless for these text-heavy UI shots. */}
      <div className="mt-6 flex items-center gap-2 sm:gap-4">
        <NavButton dir="prev" onClick={() => go(-1)} disabled={count < 2} />
        <div
          className="relative min-w-0 flex-1"
          style={{ aspectRatio: `1 / ${maxRatio}` }}
        >
          {shots.map((s, i) => {
            const active = i === shot;
            return (
              <Image
                key={s.src}
                src={s.src}
                alt={active ? caption : ""}
                aria-hidden={active ? undefined : true}
                fill
                quality={90}
                sizes="(max-width: 1024px) 92vw, 960px"
                className="object-contain transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
                style={{ opacity: active ? 1 : 0 }}
                priority={gi === 0 && i === 0}
              />
            );
          })}
        </div>
        <NavButton dir="next" onClick={() => go(1)} disabled={count < 2} />
      </div>

      {/* caption + counter */}
      <div className="mt-5 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="max-w-xl text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
          {caption}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Screenshot ${i + 1}`}
                onClick={() => setShot(i)}
                className={`h-[6px] w-[6px] rounded-full transition ${
                  i === shot
                    ? "bg-[var(--color-ink)]"
                    : "bg-[var(--color-line)] hover:bg-[var(--color-ink-soft)]"
                }`}
              />
            ))}
          </div>
          <span className="code-mono text-[11px] tabular-nums text-[var(--color-ink-soft)]">
            {String(shot + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous screenshot" : "Next screenshot"}
      className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] transition hover:border-[var(--color-ink)] disabled:opacity-30 disabled:hover:border-[var(--color-line)]"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d={dir === "prev" ? "M10 3 L5 8 L10 13" : "M6 3 L11 8 L6 13"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
