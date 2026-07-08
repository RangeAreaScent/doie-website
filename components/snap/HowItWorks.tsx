import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

export function HowItWorks({ howItWorks }: { howItWorks: AppContent["howItWorks"] }) {
  return (
    <section
      id="how"
      className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Kicker>{howItWorks.eyebrow}</Kicker>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {howItWorks.heading}
          </h2>
        </div>

        <ol className="mt-14 grid border-t border-[var(--color-line)] md:grid-cols-3 md:border-l">
          {howItWorks.steps.map((s) => (
            <li
              key={s.n}
              className="border-b border-[var(--color-line)] p-8 md:border-r"
            >
              <div className="code-mono text-[13px] text-[var(--color-accent)]">
                {s.n}
              </div>
              <h3 className="mt-4 text-[20px] font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
