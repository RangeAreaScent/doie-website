import Link from "next/link";
import type { CSSProperties } from "react";
import { company } from "../content/company";
import { Kicker } from "../components/snap/Kicker";

// doie.cc root — the company page. Intentionally does NOT list every app
// (SITE_ARCHITECTURE.md §1, §10): a plain introduction, contact, and legal
// info only. Tone v2 (plain, not grand). Anchored on the palette's slate accent
// so the parent brand stays calm and cohesive with the app pages.
const brand = {
  "--color-accent": "#39617A",
  "--color-accent-deep": "#2C4B60",
} as CSSProperties;

function Wordmark() {
  return (
    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[var(--color-accent)] text-white">
      <span className="code-mono text-[11px] font-medium tracking-tight">do</span>
    </span>
  );
}

export default function CompanyHome() {
  return (
    <main className="min-h-screen" style={brand}>
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Wordmark />
            <span className="text-[15px] font-medium tracking-tight">DOIE</span>
          </Link>
          <a
            href={`mailto:${company.supportEmail}`}
            className="rounded-md border border-[var(--color-accent)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-accent)] hover:text-white"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="border-b border-[var(--color-line)] px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-4xl">
          <Kicker>
            {company.legalName} · {company.state}
          </Kicker>
          <h1 className="mt-6 max-w-3xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
            Small, focused apps for the codes and rules you look up all day.
          </h1>
          <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
            We make single-purpose reference apps for professionals — in
            medicine, tax, and workplace safety. Each one puts a body of codes or
            rules on your phone: search it, copy what you need, and keep the set
            you use. No ads, no account.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {[
              {
                title: "One job each",
                body: "A single body of codes or rules per app — no feature bloat, no dashboards to configure.",
              },
              {
                title: "Search, copy, keep",
                body: "Look something up, copy it in a tap, and organize the handful you use into your own collections. Works offline, too.",
              },
              {
                title: "No ads, no account",
                body: "No tracking, no ads, no sign-in. What you do in the app stays on your device.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="border-b border-r border-[var(--color-line)] p-8"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 text-[20px] font-medium tracking-tight">
                  {c.title}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Kicker>Contact</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Questions, feedback, or partnership inquiries.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            We read every message.
          </p>
          <a
            href={`mailto:${company.supportEmail}`}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 code-mono text-[14px] text-white transition hover:brightness-110"
          >
            {company.supportEmail}
          </a>
        </div>
      </section>

      <footer className="px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] sm:flex-row">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} {company.legalNameLong} · {company.state}
          </span>
          <div className="flex gap-7">
            <Link href="/privacy" className="hover:text-[var(--color-ink)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-ink)]">
              Terms
            </Link>
            <Link href="/support" className="hover:text-[var(--color-ink)]">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
