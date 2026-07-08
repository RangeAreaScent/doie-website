import type { AppContent } from "../../content/types";

export function DataStats({ dataStats }: { dataStats: AppContent["dataStats"] }) {
  return (
    <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[38px]">
            {dataStats.heading.lead}{" "}
            <span className="text-[var(--color-ink-soft)]">
              {dataStats.heading.accent}
            </span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            {dataStats.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 border-t border-l border-[var(--color-line)] sm:grid-cols-4">
          {dataStats.stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-r border-[var(--color-line)] px-5 py-7"
            >
              <div className="code-mono text-[38px] font-medium leading-none tracking-tight text-[var(--color-ink)] sm:text-[46px]">
                {s.num}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-[0.1em] text-[var(--color-ink-soft)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
