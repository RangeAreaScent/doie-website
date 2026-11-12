import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import type { CSSProperties } from "react";
import { company } from "../../content/company";
import { Kicker } from "../snap/Kicker";

// HearLoop: a bespoke product page (not a /snap/ reference app), served at
// hearloop.doie.cc via middleware. Instrument tokens (Space Grotesk, IBM Plex
// Mono, hairlines, mono kickers) with the app's coral as the functional accent.
const APP_STORE_URL = "https://apps.apple.com/app/id6824921411";

const slogan = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" });
const SLOGAN = ["Repeat", "Shadow", "Learn Faster"];

const brand = {
  // Small text uses the darker coral (4.98:1 on white). The brighter app coral
  // (#D9795F, 3.07:1) is only for the large slogan line.
  "--color-accent": "#BE4A33",
  "--color-accent-deep": "#9A3A27",
  "--color-accent-bright": "#D9795F",
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
    b: "Anything else you want to hear again.",
  },
];

const BLOCKS = [
  {
    t: "One sentence at a time",
    items: [
      "Sentences are found for you from the pauses in the speech.",
      "Jump to the previous or next sentence with one big button.",
      "Loop the current sentence as many times as you need.",
    ],
  },
  {
    t: "Shadowing",
    items: [
      "After every sentence, playback waits so you can speak it back.",
      "Auto mode sizes the pause to the sentence you just heard, or pick 3 to 15 seconds.",
      "Turn it on and off in one tap.",
    ],
  },
  {
    t: "Read along",
    items: [
      "The recording is transcribed and the current word is highlighted as it plays.",
      "Transcription runs on your device. Your audio never leaves it. Requires iOS 26 or later, or macOS 26 or later on Mac.",
    ],
  },
  {
    t: "Star the hard ones",
    items: ["Star the hard sentences and practice only those."],
  },
  {
    t: "One hand, one tap",
    items: [
      "Large buttons and haptic feedback, easy to use with one hand.",
      "Keeps playing with the screen locked and in the background.",
      "Car and headphone previous and next buttons jump by sentence.",
    ],
  },
];

/* Real HearLoop app icon (from the App Store listing), with a hairline so the
   light edge holds on the white page. */
function HearLoopMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/hearloop/hearloop-icon.png"
      alt=""
      width={size}
      height={size}
      quality={90}
      className="rounded-md border border-[var(--color-line)]"
      style={{ width: size, height: size }}
    />
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
          <div className="text-right">
            <div className="flex justify-end">
              <Kicker>Sentence repeater · iOS and Mac</Kicker>
            </div>
            <h1
              className={`${slogan.className} mt-6 text-[clamp(52px,18vw,112px)] uppercase leading-[0.9] tracking-[0.005em]`}
            >
              {SLOGAN.map((w, i, arr) => (
                <span
                  key={w}
                  className={`block ${i === arr.length - 1 ? "mt-[0.18em] text-[var(--color-accent-bright)]" : ""}`}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p className="ml-auto mt-8 max-w-xl text-[clamp(20px,2.4vw,26px)] font-medium leading-[1.2] tracking-[-0.02em]">
              Repetition is how you learn. HearLoop makes it effortless.
            </p>
            <p className="ml-auto mt-4 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)]">
              Listen, say it back, play it again until it sticks. HearLoop finds
              the sentences, repeats them and leaves a pause so you can shadow.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-end gap-3">
              {/* Apple's official badges, unmodified. */}
              <a href={APP_STORE_URL} className="inline-flex" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hearloop/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto sm:h-12"
                />
              </a>
              <a href={APP_STORE_URL} className="inline-flex" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hearloop/mac-app-store-badge.svg"
                  alt="Download on the Mac App Store"
                  width={156}
                  height={40}
                  className="h-10 w-auto sm:h-12"
                />
              </a>
            </div>
            <p className="mt-4 font-mono text-[12px] uppercase leading-[1.7] tracking-[0.1em] text-[var(--color-ink-soft)]">
              Free download · No account
              <br />
              Mac: macOS 14 or later
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hearloop/hero-device.png"
              alt="HearLoop player screen: the current sentence highlighted, with speed, repeat, skip and shadowing controls"
              width={1100}
              height={1499}
              priority
              sizes="(min-width: 1024px) 440px, 80vw"
              className="h-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Kicker>Use it for</Kicker>
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
          <Kicker>No account, no ads</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
            No account. No ads. No tracking.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            HearLoop is free. No tracking, no subscription. Your files stay on
            your device, and nothing is uploaded. Transcription uses Apple&rsquo;s
            Speech framework on your device. HearLoop has no server.
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
            © {new Date().getFullYear()} <a href={company.baseUrl} className="transition hover:text-[var(--color-ink)]">{company.legalNameLong}</a> · {company.state}
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
