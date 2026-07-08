import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

export function Features({ features }: { features: AppContent["features"] }) {
  return (
    <section id="features" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Kicker>{features.eyebrow}</Kicker>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {features.heading}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[var(--color-ink-soft)]">
            {features.intro}
          </p>
        </div>

        <div className="mt-14 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f, i) => (
            <div
              key={f.title}
              className="border-b border-r border-[var(--color-line)] p-7"
            >
              <div className="code-mono text-[13px] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
