import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

// Supporter / pricing band (brief arg 7): "core is free, support unlocks
// extras + app themes." The theme accents render as swatches — a quiet
// "free app, support to make it yours" cue. Only rendered when `support` is set.
export function SupportBand({
  support,
}: {
  support: NonNullable<AppContent["support"]>;
}) {
  return (
    <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Kicker>{support.eyebrow}</Kicker>
          <h2 className="mt-5 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[38px]">
            {support.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            {support.body}
          </p>
        </div>

        <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-soft)] p-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
            Free — always
          </div>
          <div className="mt-1.5 text-[15px]">{support.free}</div>

          <div className="mt-7 flex items-baseline gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
              Supporter themes
            </span>
            <span className="font-mono text-[11px] text-[var(--color-accent)]">
              — support to unlock
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            {support.themes.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-2">
                <span
                  className="h-9 w-9 rounded-full border border-black/10"
                  style={{ background: t.hex }}
                  aria-hidden
                />
                <span className="font-mono text-[11px] text-[var(--color-ink-soft)]">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
