import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

// Dedicated Mac/Windows band: heading, a side-by-side row of Mac-window shots
// (no captions), then the desktop-only functions as horizontal columns.
// Only rendered when an app provides `desktop` (iOS-only apps skip it).
export function DesktopBand({
  desktop,
}: {
  desktop: NonNullable<AppContent["desktop"]>;
}) {
  return (
    <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Kicker>{desktop.eyebrow}</Kicker>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {desktop.heading}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[var(--color-ink-soft)]">
            {desktop.intro}
          </p>
        </div>

        {desktop.shots && desktop.shots.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {desktop.shots.map((s) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="w-full rounded-lg drop-shadow-[0_14px_44px_rgba(0,0,0,0.13)]"
              />
            ))}
          </div>
        )}

        <div className="mt-14 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {desktop.points.map((p, i) => (
            <div
              key={p.title}
              className="border-b border-r border-[var(--color-line)] p-6"
            >
              <div className="code-mono text-[13px] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-[16px] font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
