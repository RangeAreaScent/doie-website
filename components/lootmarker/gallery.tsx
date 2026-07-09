"use client";

import Image from "next/image";
import { useState } from "react";
import { COPY, type Lang } from "../../content/lootmarker-copy";

// Interactive product-shot gallery: crossfaded stack of screenshots with
// prev/next + dot indicators. When real screenshots are available, drop them
// into public/lootmarker/screenshots/ and add entries here. Until then the
// stage renders a hairline placeholder so the layout is faithful.

type Shot = { src: string; w: number; h: number };

const SHOTS: Shot[] = [
  // Placeholder — replace with real screenshots at public/lootmarker/screenshots/*.png
  // { src: "/lootmarker/screenshots/detect.png", w: 1170, h: 2532 },
  // { src: "/lootmarker/screenshots/perspective.png", w: 1170, h: 2532 },
  // { src: "/lootmarker/screenshots/collection.png", w: 1170, h: 2532 },
];

export function LootMarkerGallery({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const [shot, setShot] = useState(0);
  const shots = SHOTS;
  const count = shots.length;
  const maxRatio = count > 0 ? Math.max(...shots.map((s) => s.h / s.w)) : 1.6;
  const caption = c.galCaptions[shot] ?? c.galCaptions[c.galCaptions.length - 1];

  function go(delta: number) {
    if (count < 2) return;
    setShot((s) => (s + delta + count) % count);
  }

  return (
    <div className="w-full">
      <div className="mt-2 flex items-center gap-2 sm:gap-4">
        <NavButton dir="prev" onClick={() => go(-1)} disabled={count < 2} />
        <div
          className="relative min-w-0 flex-1"
          style={{ aspectRatio: `1 / ${maxRatio}` }}
        >
          {count === 0 ? (
            <PlaceholderStage captions={c.galCaptions} />
          ) : (
            shots.map((s, i) => {
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
                  priority={i === 0}
                />
              );
            })
          )}
        </div>
        <NavButton dir="next" onClick={() => go(1)} disabled={count < 2} />
      </div>

      <div className="mt-5 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="max-w-xl text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
          {count > 0 ? caption : c.galCaptions[0]}
        </p>
        <div className="flex items-center gap-3">
          {count > 0 && (
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
          )}
          <span className="code-mono text-[11px] tabular-nums text-[var(--color-ink-soft)]">
            {count > 0
              ? `${String(shot + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`
              : c.galMore}
          </span>
        </div>
      </div>
    </div>
  );
}

// While screenshots aren't wired up: a hairline phone frame + rotating sample
// caption. Keeps the section's rhythm intact for early deploys.
function PlaceholderStage({ captions }: { captions: string[] }) {
  const phoneRatio = 1170 / 2532; // iPhone portrait
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative h-full"
        style={{ aspectRatio: `${phoneRatio}` }}
      >
        <div className="absolute inset-0 rounded-[36px] border border-[var(--color-line)] bg-[var(--color-paper-soft)]" />
        <div className="absolute inset-4 rounded-[28px] border border-[var(--color-line)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="code-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            Screenshots coming
          </span>
          <span className="text-[13px] leading-[1.5] text-[var(--color-ink-soft)]">
            {captions[0]}
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
