import Link from "next/link";
import type { CSSProperties } from "react";
import { company } from "../content/company";
import { Kicker } from "../components/snap/Kicker";

// doie.cc root — the company page. Names each product line but does NOT list
// Snap's full 18-app catalog (SITE_ARCHITECTURE.md §1, §10) — a plain company
// introduction, contact, and legal info. Tone v2 (plain, not grand). Anchored
// on the palette's slate accent so the parent brand stays calm and cohesive
// with the app pages.
const brand = {
  "--color-accent": "#39617A",
  "--color-accent-deep": "#2C4B60",
} as CSSProperties;

// One entry per shipped product line, in ship order. The "Our projects"
// section renders this list plus a filled/open square per entry (see below) —
// add a new line here and both update together, no manual square-counting.
const projects = [
  {
    num: "01",
    name: "Snap.",
    body: "Snap is the name for a line of apps that each do one job: take a body of reference material — a code set, a set of rules — that a professional needs on hand, and put it on their phone, searchable and organized around how they actually use it. The fields differ: medicine, tax, workplace safety, aviation, and others we're still adding. The shape stays the same.",
  },
  {
    num: "02",
    name: "HiSS.",
    body: "HiSS is a voice recorder for iOS that speaks the date, time, and a label into the start of every take, then transcribes it on-device. Built for anyone who records constantly and doesn't want to sort it out later.",
    href: "https://hiss.doie.cc",
    linkLabel: "hiss.doie.cc",
  },
  {
    num: "03",
    name: "Wren.",
    body: "Wren is a management layer for learning a language with Claude on the Mac — session memory, spaced-repetition cards, and on-device speech, running on your own Claude plan.",
    href: "https://wren.doie.cc",
    linkLabel: "wren.doie.cc",
  },
  {
    num: "04",
    name: "Moderari.",
    body: "Moderari is a portfolio-management app for Mac and iOS. It keeps every project you run — apps, side businesses, clients — on its own update cadence, so a glance tells you what's overdue, what's due this week, and what can wait.",
    href: "https://moderari.doie.cc",
    linkLabel: "moderari.doie.cc",
  },
];

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
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <Kicker>
              {company.legalName} · {company.state}
            </Kicker>
            <h1 className="mt-6 max-w-3xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
              A handful of small products, each built around one job.
            </h1>
            <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
              DOIE is a small software company. We build a line of
              reference-lookup apps, a voice recorder, a language tutor for
              the Mac, and a tool for keeping every project you run on its own
              update schedule. Different jobs, one approach: find something
              small and specific, and build it properly.
            </p>
          </div>

          {/* A tone study on the brand slate — one hue, stepped light to dark.
              Decorative; hidden on small screens to keep the mobile hero plain. */}
          <div aria-hidden className="hidden lg:grid lg:grid-cols-4 lg:gap-3">
            {[
              "#eaeff2",
              "#d3dfe5",
              "#aec2cd",
              "#84a2b1",
              "#5d8698",
              "#4e86a0",
              "#39617a",
              "#2c4b60",
            ].map((tone, i) => (
              <div
                key={tone}
                className="h-16 w-16 rounded-lg"
                style={{ background: tone, marginTop: i % 2 ? 28 : 0 }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {[
              {
                title: "Ordinary jobs, a fresh angle",
                body: "We rarely go looking for a brand-new problem. Most of what we build starts as something plain and necessary — a lookup, a recording, a lesson, a list of projects — and the work is finding our own way to do it.",
              },
              {
                title: "A little easier, for everyone",
                body: "Every interface we build is aimed at the same small target: make one part of someone's day a bit more convenient. That's a modest goal on purpose — it's also the whole point.",
              },
              {
                title: "Small differences, our own style",
                body: "A small difference in how something works can add up to real convenience over time. Finding that difference, and shaping it into something distinctly ours, is the engineering we actually do.",
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
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-2xl">
              <Kicker>Why we build</Kicker>
              <h2 className="mt-5 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
                The interface is the work.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
                DOIE stands for Dynamics Of Interface Engineering. Underneath
                every app we make is the same belief: a better interface changes
                more than it looks like it should. Most of the friction people
                deal with all day — a clunky lookup, a form that fights you, a
                tool built once and never touched again — isn't a hard problem.
                It's just one nobody got around to fixing. We got around to it.
              </p>
            </div>
            {/* Small tone-study echo of the hero motif. */}
            <div
              aria-hidden
              className="hidden shrink-0 grid-cols-2 gap-2 pt-2 sm:grid"
            >
              {["#d3dfe5", "#84a2b1", "#4e86a0", "#2c4b60"].map((tone) => (
                <span
                  key={tone}
                  className="h-9 w-9 rounded-[5px]"
                  style={{ background: tone }}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--color-line)]">
            {[
              {
                title: "Room to improve, everywhere",
                body: "We don't think an idea is too small to build, or a field too specialized to improve. A two-tap fix and a workflow one profession leans on all day get the same amount of attention from us. Most tools like that were built once, a long time ago, by someone who's since moved on — we think they're worth a second look.",
              },
              {
                title: "Careful, not greedy",
                body: "We'd rather build a few things well than take on everything at once. Spread thin, quality is the first thing that goes — and quality is the point. So we grow slowly, one problem at a time, and try to actually finish what we start before starting the next thing.",
              },
              {
                title: "A better day for whoever's using it",
                body: "The people we build for are usually specialists — in a field with its own codes, its own rules, its own way of doing things — and their tools are often the last thing anyone thought to improve. If what we build makes one part of someone's day a little easier, that's the whole point. Enough of that, across enough fields, is what a better environment looks like to us.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="grid gap-2 border-b border-[var(--color-line)] py-8 sm:grid-cols-[88px_1fr] sm:gap-8"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[18px] font-medium tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Kicker>Our projects</Kicker>

          <div className="mt-7 space-y-12">
            {projects.map((p) => (
              <div key={p.num}>
                <div className="flex items-baseline gap-4">
                  <span className="code-mono text-[15px] text-[var(--color-accent)]">
                    {p.num}
                  </span>
                  <h2 className="text-[26px] font-medium tracking-tight sm:text-[32px]">
                    {p.name}
                  </h2>
                </div>
                <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {p.body}
                </p>
                {p.href && (
                  <a
                    href={p.href}
                    className="mt-3 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 hover:text-[var(--color-ink)]"
                  >
                    {p.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
            Four lines so far. We're working on what comes after them.
          </p>
          {/* One filled square per shipped line, plus a couple open ones —
              derived from `projects` so this never needs manual recounting. */}
          <div aria-hidden className="mt-6 flex gap-2">
            {projects.map((p) => (
              <span
                key={p.num}
                className="h-4 w-4 rounded-[3px] bg-[var(--color-accent)]"
              />
            ))}
            {[0, 1].map((i) => (
              <span
                key={`open-${i}`}
                className="h-4 w-4 rounded-[3px] border border-[var(--color-line)]"
              />
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
