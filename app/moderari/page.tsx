import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { company } from "../../content/company";
import { Kicker } from "../../components/snap/Kicker";
import {
  HeroTimeline,
  CadenceEngine,
  TriageBuckets,
  RecapObject,
  ReviewObject,
  Heatmap,
  ProgressRing,
  RecurringDeadline,
  OverviewShot,
} from "../../components/moderari/objects";

// Moderari — a bespoke product page (like /wren, not a /snap/ template app).
// Chrome themes on a single green accent; the four Moderari status colors
// (overdue / this-week / on-track / deadline) are functional product signal,
// scoped here as --m-* vars and used only inside the built objects.
const brand = {
  "--color-accent": "#1e6e63",
  "--color-accent-deep": "#155248",
  "--m-overdue": "#bf4a32",
  "--m-soon": "#c68a2a",
  "--m-normal": "#3e9070",
  "--m-deadline": "#3e7cb1",
} as CSSProperties;

export const metadata: Metadata = {
  title: "Moderari — cadence-based portfolio management for Mac & iOS",
  description:
    "Keep every project you run on its own update cadence — overdue, due this week, or on track, at a glance. Native Mac & iOS. Buy once, no subscription, no servers.",
};

/* The Moderari app icon (serif "M." monogram on soft green), squared like an
   app tile with a hairline edge so it reads on white. */
function ModerariMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/moderari/moderari-icon.png"
      alt="Moderari"
      width={size}
      height={size}
      quality={90}
      className="rounded-[6px] border border-[var(--color-line)]"
      style={{ width: size, height: size }}
    />
  );
}

/* Wordmark: "Moderari" with the brand dot in accent — the "M." motif, on-system
   in Space Grotesk rather than the app's serif. */
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      Moderari<span className="text-[var(--color-accent)]">.</span>
    </span>
  );
}

function SectionHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
          {intro}
        </p>
      )}
    </div>
  );
}

/* A feature = mono index + copy on one side, a built object on the other. */
function FeatureRow({
  index,
  title,
  body,
  object,
  flip = false,
}: {
  index: string;
  title: string;
  body: string;
  object: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 border-b border-[var(--color-line)] py-14 sm:grid-cols-2 sm:gap-14">
      <div className={flip ? "sm:order-2" : ""}>
        <div className="code-mono text-[13px] text-[var(--color-accent)]">{index}</div>
        <h3 className="mt-3 text-[22px] font-medium tracking-tight sm:text-[24px]">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
          {body}
        </p>
      </div>
      <div className={flip ? "sm:order-1" : ""}>{object}</div>
    </div>
  );
}

export default function ModerariPage() {
  return (
    <main className="min-h-screen" style={brand}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/moderari" className="flex items-center gap-2.5">
            <ModerariMark />
            <Wordmark className="text-[15px] font-medium tracking-tight" />
          </Link>
          <a
            href="#buy"
            className="rounded-md border border-[var(--color-ink)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            Buy
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--color-line)] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Kicker>Portfolio management · macOS + iOS</Kicker>
              <h1 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
                Every project,
                <br />
                <span className="text-[var(--color-accent)]">on its own clock.</span>
              </h1>
              <p className="mt-7 max-w-md text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
                Moderari keeps every project you run — apps, side businesses, clients —
                on its own update cadence. Open it and know in ten seconds what&apos;s
                overdue, what&apos;s due this week, and what can safely wait.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#buy"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-ink)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-paper)] transition hover:brightness-125"
                >
                  Buy for $4.99
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                >
                  How it works
                </a>
              </div>
            </div>
            <div className="lg:pl-4">
              <HeroTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:justify-between">
          {[
            "macOS + iOS native",
            "Offline-first",
            "No account",
            "One-time purchase",
            "iCloud sync",
          ].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              {s}
              {i < arr.length - 1 && (
                <span className="hidden text-[var(--color-line)] sm:inline">/</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Product shot — the real app, early */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>The app</Kicker>
              <h2 className="mt-5 text-[26px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[32px]">
                Grey until something needs you.
              </h2>
            </div>
            <p className="max-w-xs text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
              Everything grouped by status — overdue, due this week, on track — with a
              live count in each header. Calm by default; color only where it&apos;s a signal.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <OverviewShot />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="The gap"
            title="The tools you tried aren't built for this."
            intro="You're not running one big project with a team. You're running many small ones, each on a different rhythm — a weekly app update here, a quarterly filing there, a client every two weeks. The hard part was never a single deadline. It's keeping twenty different clocks in your head at once."
          />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {[
              { t: "To-do apps", b: "Flat lists of tasks. They don't tell you which project is quietly drifting out of rhythm." },
              { t: "Kanban / Gantt", b: "Built for one team project with dependencies — not a portfolio of many, each on its own clock." },
              { t: "Calendars", b: "Show fixed dates, not “it's been too long since I touched this.” Cadence is the whole point." },
            ].map((c, i) => (
              <div key={c.t} className="border-b border-r border-[var(--color-line)] p-8">
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-[18px] font-medium tracking-tight">{c.t}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core idea */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="The core idea"
            title="Tell it the rhythm. It does the math."
            intro="For each project you set just two things — when you last touched it, and how often it needs attention. Moderari computes the rest: the next due date, whether it's overdue, how urgent it is, when it's time for a review. Nothing is tracked by hand, so nothing goes stale."
          />
          <div className="mt-12">
            <CadenceEngine />
          </div>
        </div>
      </section>

      {/* Features with built objects */}
      <section className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="What it does"
            title="A portfolio view nothing else gives you."
            intro="The same data, seen through the lens each moment needs — the day's agenda, the whole timeline, the week in review."
          />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-6xl border-t border-[var(--color-line)]">
          <FeatureRow
            index="01"
            title="Today — start here"
            body="Just what's overdue or due today, most urgent first. Handle one and you're done in thirty seconds. When nothing's pressing, it simply reads 'all clear' — no forced ritual, glance and close."
            object={<TriageBuckets />}
          />
          <FeatureRow
            index="02"
            title="Timeline — the big picture"
            body="Every project on one fixed, scrollable time axis. Due dates as colored dots, hard deadlines as filled diamonds, milestones as hollow ones. Scan twenty projects — and their whole journeys — in a single glance."
            object={<HeroTimeline />}
            flip
          />
          <FeatureRow
            index="03"
            title="Weekly Recap — your Monday ritual"
            body="The app shows you what changed this week — how many updates, across which projects — before you export anything. A review ritual that isn't a chore."
            object={<RecapObject />}
          />
          <FeatureRow
            index="04"
            title="Review — decide on purpose"
            body="Surfaces projects that have gone too long untouched, so you decide keep / pause / archive deliberately — instead of letting them fade by neglect."
            object={<ReviewObject />}
            flip
          />
        </div>
      </section>

      {/* Two progress modes */}
      <section className="border-b border-t border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="Progress"
            title="A rhythm, or a finish line."
            intro="Pick whichever fits each project. Both draw only the computed value — never a number you maintain by hand."
          />
          <div className="mt-12 grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <div className="border-b border-r border-[var(--color-line)] p-8">
              <div className="flex items-baseline gap-3">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">01</span>
                <h3 className="text-[20px] font-medium tracking-tight">Cadence</h3>
              </div>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                For things you tend to on a regular rhythm. A mini heatmap shows recent
                activity; one tap of &ldquo;Mark updated&rdquo; keeps it going and rolls the next date forward.
              </p>
              <div className="mt-6">
                <Heatmap />
              </div>
            </div>
            <div className="border-b border-r border-[var(--color-line)] p-8">
              <div className="flex items-baseline gap-3">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">02</span>
                <h3 className="text-[20px] font-medium tracking-tight">Checklist</h3>
              </div>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                For work with a finish line. Check items off and the ring fills to match —
                completion you can read at a glance, computed from the list.
              </p>
              <div className="mt-6">
                <ProgressRing percent={62} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — daily flow */}
      <section id="how" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="How it works"
            title="One loop, every day."
            intro="The two inputs carry the everyday. This is the whole rhythm of using it — nothing to configure."
          />
          <div className="mt-12 grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Open Today", "Just what's overdue or due today. Handle one, and you're done."],
              ["Mark updated", "Once you've dealt with something, one tap rolls the next date forward. Add a line to your activity log."],
              ["Glance at Recap", "Once a week, see what you moved and where things stand — surfaced for you."],
              ["Tidy with Review", "Now and then, keep or pause the projects that have gone quiet."],
            ].map(([t, b], i) => (
              <div key={t} className="border-b border-r border-[var(--color-line)] p-6">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[16px] font-medium tracking-tight">{t}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-ink-soft)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the basics */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="Beyond the basics"
            title="More when you need it. None of it required."
            intro="The two inputs cover the everyday. When a project is more involved, these are waiting."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-1 gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
              {[
                ["Importance, not just urgency", "Pin what matters even when it isn't pressing — pinned items rise to their own section, so “important but not urgent” never gets buried."],
                ["One project, many dates", "Add milestones — Draft, Review, Final — each with its own date, apart from the project's rhythm. They line up as hollow diamonds on the Timeline."],
                ["Calendar & Reminders", "Push an item's next date to Calendar or Reminders, in a dedicated “Moderari” list, carrying its notes and tags. Tap it there to deep-link back."],
                ["An honest record", "Backdate a project already in flight; skip a cycle you're deliberately passing without faking the heatmap. A streak counts the cycles you've kept."],
                ["Flat tags, light nest", "Tag freely — no folder trees. Nest with a slash when you want a little structure: pick Client and every Client/Acme comes with it."],
                ["Handle many at once", "Multi-select in Overview, then Pin, Mark updated, or Archive the whole set in one move — the weekly tidy-up."],
              ].map(([t, b]) => (
                <div key={t} className="border-b border-r border-[var(--color-line)] p-5">
                  <h3 className="text-[15px] font-medium tracking-tight">{t}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">{b}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="code-mono text-[13px] text-[var(--color-accent)]">Deadlines that come back</div>
              <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                Quarterly taxes, annual renewals. Turn on a deadline&apos;s repeat, and one
                &ldquo;Mark done&rdquo; rolls it to the next occurrence — only when it&apos;s actually due.
              </p>
              <div className="mt-6">
                <RecurringDeadline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Kicker>Your data</Kicker>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[34px]">
              Everything stays on your devices.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
              Projects live in local storage and sync through your own iCloud — no account
              to make, no Moderari server holding your data. Export any project, or your
              whole portfolio, to Markdown, PDF, or calendar (.ics) anytime. Leaving is
              always an option, which is why you won&apos;t want to.
            </p>
          </div>
        </div>
      </section>

      {/* Buy / CTA */}
      <section id="buy" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Kicker>Buy once</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            Stop holding twenty clocks in your head.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            One universal purchase for Mac, iPhone, and iPad. No subscription, no servers —
            which is exactly why there&apos;s no monthly bill to pass to you.
          </p>
          <div className="mt-9 grid max-w-lg gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] bg-[var(--color-ink)] px-5 py-4 text-[var(--color-paper)]">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] opacity-70">
                  One-time
                </div>
                <div className="mt-1 text-[15px] font-medium">$4.99 · App Store</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] opacity-70">
                Universal
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] px-5 py-4">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                  Requires
                </div>
                <div className="mt-1 text-[15px] font-medium">macOS + iOS</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Apple silicon
              </span>
            </div>
          </div>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
            No subscription · no account · your data exports anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2.5 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
          <span className="flex items-center gap-2.5">
            <ModerariMark size={20} />
            <Wordmark className="text-[var(--color-ink)] normal-case tracking-tight" />
            <span className="text-[var(--color-line)]">·</span>
            <span>Cadence-based portfolio management</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span>© {company.legalName}</span>
            <span className="text-[var(--color-line)]">·</span>
            <span className="normal-case">Moderari — Latin, &ldquo;to guide.&rdquo;</span>
            <span className="text-[var(--color-line)]">·</span>
            <a
              href={`mailto:${company.supportEmail}`}
              aria-label="Email support"
              className="inline-flex items-center transition hover:text-[var(--color-ink)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 7.5 L12 13 L20 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
