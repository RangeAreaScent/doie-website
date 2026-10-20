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

const STEPS = [
  {
    t: "Import",
    b: "Bring in a speech recording from the Files app or the share sheet. Podcasts, lectures, interviews, language lessons.",
  },
  {
    t: "Split",
    b: "HearLoop finds the silences and cuts the recording into sentences, so every sentence is its own unit.",
  },
  {
    t: "Loop",
    b: "Jump to the previous or next sentence, repeat the current one, and read along with the word being spoken highlighted.",
  },
];

const FEATURES = [
  {
    t: "Sentence by sentence",
    b: "Skip back one sentence instead of scrubbing a timeline. Repeat it as many times as you need.",
  },
  {
    t: "Shadowing pause",
    b: "A silent gap after each sentence, so you can say it aloud before the next one starts.",
  },
  {
    t: "Star sentences",
    b: "Mark the sentences worth coming back to and find them again later.",
  },
  {
    t: "Live transcript",
    b: "Follow the transcript with the current word highlighted as it plays.",
  },
  {
    t: "Background and car controls",
    b: "Keeps playing with the screen off. The previous and next buttons in your car move by sentence.",
  },
  {
    t: "Apple Watch remote",
    b: "The watch app controls the iPhone: previous, next, and repeat from your wrist.",
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
            <a href="#how" className="hidden hover:text-[var(--color-ink)] sm:inline">
              How it works
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
            <Kicker>iPhone · Apple Watch · Audio player</Kicker>
            <h1 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[56px]">
              Review speech audio, one sentence at a time.
            </h1>
            <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)]">
              HearLoop splits a recording into sentences by its silences. Go back one
              sentence, repeat it, pause to say it aloud, and read the transcript as
              it plays. Everything happens on your device.
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

      <section id="how" className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Kicker>How it works</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Import, split, loop.
          </h2>
          <div className="mt-10 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.t} className="border-b border-r border-[var(--color-line)] p-8">
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-[20px] font-medium tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {s.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Kicker>Features</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Built for repeating what you hear.
          </h2>
          <div className="mt-10 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="border-b border-r border-[var(--color-line)] p-8">
                <h3 className="text-[18px] font-medium tracking-tight">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {f.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Kicker>Privacy</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            Your audio stays on your device.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            You import the files, and nothing is uploaded anywhere. Transcription uses
            Apple&rsquo;s Speech framework on your device, and HearLoop has no server.
            There is no account, no analytics, no ads, and no third-party SDKs.
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
