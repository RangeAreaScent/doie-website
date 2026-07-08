"use client";

import { useState } from "react";
import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

// Region selector for region-picker apps (tax / tariff / aero): a mono tab
// strip picks a region, and a hairline card shows that region's authority, key
// dataset numbers, region-specific note, pack size, and license. Client
// component because the tab selection is interactive. Only rendered when an app
// provides `regions`.
export function Regions({
  regions,
}: {
  regions: NonNullable<AppContent["regions"]>;
}) {
  const [active, setActive] = useState(0);
  const region = regions.items[active];

  return (
    <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Kicker>{regions.eyebrow}</Kicker>
          <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {regions.heading}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[var(--color-ink-soft)]">
            {regions.intro}
          </p>
        </div>

        {/* Region selector — mono tab strip */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Regions"
        >
          {regions.items.map((r, i) => {
            const on = i === active;
            return (
              <button
                key={r.code}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={
                  "code-mono px-4 py-2 text-[13px] tracking-[0.04em] transition-colors " +
                  (on
                    ? "bg-[var(--color-accent)] text-[var(--color-paper)]"
                    : "border border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]")
                }
              >
                {r.code}
              </button>
            );
          })}
        </div>

        {/* Active region card — hairline grid */}
        <div className="mt-8 border-t border-l border-[var(--color-line)]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-b border-r border-[var(--color-line)] px-7 py-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                {region.authority}
              </div>
              <div className="mt-1 text-[21px] font-medium tracking-tight">
                {region.name}
              </div>
            </div>
            {region.size && (
              <div className="code-mono text-[13px] text-[var(--color-ink-soft)]">
                {region.size} · offline
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-3">
            {region.stats.map((s) => (
              <div
                key={s.label}
                className="border-b border-r border-[var(--color-line)] px-7 py-6"
              >
                <div className="code-mono text-[24px] tracking-[-0.01em] text-[var(--color-ink)]">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[13px] leading-[1.45] text-[var(--color-ink-soft)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {(region.note || region.license) && (
            <div className="border-b border-r border-[var(--color-line)] px-7 py-5">
              {region.note && (
                <p className="text-[15px] leading-[1.55]">{region.note}</p>
              )}
              {region.license && (
                <p className="mt-1.5 code-mono text-[12px] text-[var(--color-ink-soft)]">
                  {region.license}
                </p>
              )}
            </div>
          )}
        </div>

        {regions.footnote && (
          <p className="mt-5 flex items-start gap-2.5 text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
            <span
              aria-hidden
              className="mt-[7px] inline-block h-[6px] w-[6px] shrink-0 bg-[var(--color-accent)]"
            />
            {regions.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
