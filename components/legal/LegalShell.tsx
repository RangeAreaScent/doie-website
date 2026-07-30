import Link from "next/link";
import type { ReactNode } from "react";

export interface LegalSection {
  heading: string;
  /** Each string renders as its own paragraph. */
  paragraphs: string[];
}

// Minimal document shell shared by every privacy / terms / support page,
// for both per-app and company-level legal pages.
export function LegalShell({
  title,
  updated,
  backLabel,
  backHref,
  intro,
  sections,
  children,
}: {
  title: string;
  updated: string;
  backLabel: string;
  backHref: string;
  intro?: string;
  sections: LegalSection[];
  /** Optional extra content rendered between the intro and the sections — e.g. the support page's mail tool. */
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href={backHref}
          className="text-[14px] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
        >
          ← {backLabel}
        </Link>
        <h1 className="mt-6 text-[34px] font-semibold tracking-tight sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-[var(--color-ink-soft)]">
          Last updated {updated}
        </p>
        {intro && (
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            {intro}
          </p>
        )}

        {children}

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-[20px] font-semibold tracking-tight">
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-[15px] leading-[1.65] text-[var(--color-ink-soft)]"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
