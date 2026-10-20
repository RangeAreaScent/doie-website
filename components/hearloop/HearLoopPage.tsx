import Link from "next/link";
import type { CSSProperties } from "react";
import { company } from "../../content/company";
import { Kicker } from "../snap/Kicker";

// HearLoop: a bespoke product page (not a /snap/ reference app), served at
// hearloop.doie.cc via middleware. Instrument tokens (Space Grotesk, IBM Plex
// Mono, hairlines, mono kickers) with a calm teal as the functional accent.
const brand = {
  "--color-accent": "#2F7F86",
  "--color-accent-deep": "#235F65",
} as CSSProperties;

const USES = [
  {
    t: "Language learning",
    b: "Listen, repeat and shadow native speech.",
  },
  {
    t: "Interview practice",
    b: "Replay your answers and polish how you say them.",
  },
  {
    t: "Lectures, talks and meetings",
    b: "Review what matters, sentence by sentence.",
  },
  {
    t: "Anything else",
    b: "Anything you want to hear again and again until it sticks.",
  },
];

const BLOCKS = [
  {
    t: "Repeat, automatically",
    items: [
      "Sentences are found for you from the pauses in the speech.",
      "Jump to the previous or next sentence with one big button.",
      "Loop the current sentence as many times as you need.",
    ],
  },
  {
    t: "Shadowing made easy",
    items: [
      "After every sentence, playback waits so you can speak it back.",
      "Auto mode sizes the pause to the sentence you just heard, or pick 3 to 15 seconds.",
      "Turn it on and off in one tap.",
    ],
  },
  {
    t: "Read along",
    items: [
      "See the transcript with the current word highlighted as it plays.",
      "Transcription runs on your device. Your audio never leaves your iPhone. Requires iOS 26 or later.",
    ],
  },
  {
    t: "Star what matters",
    items: ["Star the hard sentences and practice only those."],
  },
  {
    t: "Made for real life",
    items: [
      "Large buttons and haptic feedback, easy to use with one hand.",
      "Keeps playing with the screen locked and in the background.",
      "Car and headphone previous and next buttons jump by sentence.",
      "Apple Watch remote for play, pause, previous and next, so you can repeat sentences from your wrist.",
    ],
  },
];

const BARS = [
  6, 14, 22, 12, 28, 18, 9, 0, 0, 0, 10, 24, 30, 16, 26, 12, 0, 0, 0, 8, 20, 28, 14,
  22, 10, 0, 0, 0, 12, 26, 18, 30, 9,
];

function HearLoopMark({ size = 26 }: { size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-md bg-[var(--color-accent)] text-white"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 16 16" fill="none">
        <path
          d="M2 8h1.5M5 5v6M8 3v10M11 5.5v5M13.5 8H14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* A built stand-in for the app, drawn from the real behavior: a waveform cut
   into sentences by silence, and a transcript with the current word marked. */
function PlayerObject() {
  return (
    <div
      className="w-full max-w-[420px] border border-[var(--color-line)] bg-[var(--color-paper)]"
      role="img"
      aria-label="Illustration: a waveform split into sentences, with the transcript and the current word highlighted"
    >
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3 code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
        <span>Sentence 3 / 12</span>
        <span className="text-[var(--color-accent)]">Repeat ×2</span>
      </div>
      <div className="flex h-[88px] items-center gap-[3px] px-4">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="w-[5px] shrink-0 rounded-full"
            style={{
              height: h === 0 ? 2 : h,
              background:
                h === 0
                  ? "var(--color-line)"
                  : i > 9 && i < 17
                    ? "var(--color-accent)"
                    : "#c9c9c4",
            }}
          />
        ))}
      </div>
      <div className="space-y-2 border-t border-[var(--color-line)] px-4 py-4 text-[15px] leading-[1.5]">
        <p className="text-[var(--color-ink-soft)]">
          Most people do not notice it at first.
        </p>
        <p className="text-[var(--color-ink)]">
          The{" "}
          <span className="bg-[var(--color-accent)] px-1 text-white">trick</span>{" "}
          is to hear it again, slowly.
        </p>
        <p className="text-[var(--color-ink-soft)]">
          Then say it out loud before it moves on.
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-[var(--color-line)] code-mono text-[11px] uppercase tracking-[0.1em]">
        {["Prev", "Repeat", "Next"].map((l, i) => (
          <span
            key={l}
            className={`py-3 text-center text-[var(--color-ink-soft)] ${i < 2 ? "border-r border-[var(--color-line)]" : ""}`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HearLoopPage({ homeHref = "/" }: { homeHref?: string }) {
  const prefix = homeHref === "/" ? "" : homeHref;
  return (
    <main className="min-h-screen" style={brand}>
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={homeHref} className="flex items-center gap-2.5">
            <HearLoopMark />
            <span className="text-[15px] font-medium tracking-tight">HearLoop</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
            <a href="#features" className="hidden hover:text-[var(--color-ink)] sm:inline">
              Features
            </a>
            <Link href={`${prefix}/support`} className="hover:text-[var(--color-ink)]">
              Support
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-[var(--color-line)] px-6 pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Kicker>iPhone · Audio player</Kicker>
            <h1 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[56px]">
              Repetition is how you learn. HearLoop makes it effortless.
            </h1>
            <p className="mt-6 font-mono text-[14px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Repeat. Shadow. Learn faster.
            </p>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)]">
              Practice any recording by repeating it sentence by sentence while you
              read along. HearLoop finds the sentences, repeats them, and adds
              shadowing pauses for you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-md border border-[var(--color-line)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Coming to the App Store
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Free download · No account
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PlayerObject />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Kicker>Perfect for</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Any recording you want to practice.
          </h2>
          <div className="mt-10 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {USES.map((u, i) => (
              <div key={u.t} className="border-b border-r border-[var(--color-line)] p-8">
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-[18px] font-medium tracking-tight">{u.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {u.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Kicker>Features</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Built for repeating what you hear.
          </h2>
          <div className="mt-10 border-t border-[var(--color-line)]">
            {BLOCKS.map((blk, i) => (
              <div
                key={blk.t}
                className="grid gap-2 border-b border-[var(--color-line)] py-8 sm:grid-cols-[88px_1fr] sm:gap-8"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[20px] font-medium tracking-tight">{blk.t}</h3>
                  <ul className="mt-3 max-w-2xl space-y-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                    {blk.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Kicker>Simple, private and free</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            No account. No ads. No tracking.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            No subscription either. Your files stay on your device, and nothing is
            uploaded anywhere. Transcription uses Apple&rsquo;s Speech framework on
            your device, and HearLoop has no server.
          </p>
          <Link
            href={`${prefix}/privacy`}
            className="mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 hover:text-[var(--color-ink)]"
          >
            Read the privacy policy →
          </Link>
        </div>
      </section>

      <footer className="px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] sm:flex-row">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} {company.legalNameLong} · {company.state}
          </span>
          <div className="flex gap-7">
            <Link href={`${prefix}/privacy`} className="hover:text-[var(--color-ink)]">
              Privacy
            </Link>
            <Link href={`${prefix}/support`} className="hover:text-[var(--color-ink)]">
              Support
            </Link>
            <a
              href={`mailto:${company.supportEmail}`}
              className="hover:text-[var(--color-ink)]"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
