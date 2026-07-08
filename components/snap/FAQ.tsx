import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";

export function FAQ({ faq }: { faq: AppContent["faq"] }) {
  return (
    <section id="faq" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Kicker>Questions</Kicker>
        <h2 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
          Frequently asked.
        </h2>

        <div className="mt-10 border-t border-[var(--color-line)]">
          {faq.map((f) => (
            <details key={f.question} className="group border-b border-[var(--color-line)] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium tracking-tight">
                {f.question}
                <span className="code-mono text-[18px] text-[var(--color-accent)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
