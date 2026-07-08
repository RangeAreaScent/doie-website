import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

// Screens are shown as provided — the source shots are pre-cropped to a "top
// peek" (bottom of the phone runs off), so we don't crop or fade them here.
export function ScreenshotShowcase({
  showcase,
  appName,
}: {
  showcase: NonNullable<AppContent["showcase"]>;
  appName: string;
}) {
  return (
    <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Kicker>{showcase.eyebrow}</Kicker>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {showcase.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {showcase.shots.map((s, i) => (
            <div key={s.caption} className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={`${appName} ${s.caption} screen`}
                className="w-full max-w-[360px]"
              />
              <div className="mt-6 flex items-center gap-2 code-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
                <span className="text-[var(--color-ink)]">{s.caption}</span>
              </div>
              <p className="mt-2 max-w-[260px] text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
