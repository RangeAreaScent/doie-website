import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import type { CSSProperties } from "react";
import { company } from "../../content/company";
import { Kicker } from "../snap/Kicker";
import { COPY, type Lang } from "../../content/hiss-copy";
import {
  StampFlow,
  TranscribeQuality,
  LanguageMatrix,
  ExportGrid,
  PipelineDiagram,
} from "./objects";
import { AppShotCarousel } from "./AppShotCarousel";

// HiSS — a bespoke product page (not a /snap/ reference app). Standalone
// route at /hiss. Follows the Instrument aesthetic — Space Grotesk + IBM
// Plex Mono, hairline rules, mono kickers — but with HiSS orange as the
// functional accent, matching the app's own REC button color.
const brand = {
  "--color-accent": "#F54927",
  "--color-accent-deep": "#C33818",
} as CSSProperties;

// Hero slogan face: condensed all-caps, matching the App Store header art.
const slogan = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" });

const APP_STORE_URL = "https://apps.apple.com/app/hiss-recorder/id6796030377";

/* Real HiSS icon — squared full-bleed, macOS-tile rounded with hairline. */
function HissMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/hiss/hiss-icon.png"
      alt="HiSS"
      width={size}
      height={size}
      quality={90}
      className="rounded-[6px] border border-[var(--color-line)]"
      style={{ width: size, height: size }}
    />
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
        <div className="code-mono text-[13px] text-[var(--color-accent)]">
          {index}
        </div>
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

export function HissPage({
  lang,
  homeHref = "/hiss",
}: {
  lang: Lang;
  /**
   * Path the header logo navigates to. On hiss.doie.cc this should be "/"
   * (the subdomain root); on doie.cc/hiss it stays "/hiss". The page.tsx
   * entry decides based on the incoming Host header.
   */
  homeHref?: string;
}) {
  const c = COPY[lang];
  const home = homeHref;

  return (
    <main lang={lang} className="min-h-screen" style={brand}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2.5">
            <HissMark />
            <span className="text-[15px] font-medium tracking-tight">HiSS</span>
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--color-ink)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            {c.navDownload}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--color-line)] px-6 pt-10 pb-12 sm:pt-24 sm:pb-20">
        {/* Two columns at every width. Type, spacing and the panel scale with this
            container (cqw) so phones keep the same slogan | panel composition. */}
        <div className="mx-auto max-w-6xl [container-type:inline-size]">
          <div className="grid grid-cols-[1fr_1.05fr] items-start gap-x-[clamp(12px,3cqw,64px)]">
            <div className="text-right">
              <h1
                className={`${slogan.className} text-[clamp(34px,12.5cqw,116px)] uppercase leading-[0.9]`}
              >
                {c.heroSlogan.map((w, i, arr) => (
                  <span
                    key={w}
                    className={`block ${i === arr.length - 1 ? "mt-[0.18em] text-[var(--color-accent)]" : ""}`}
                  >
                    {w}
                  </span>
                ))}
              </h1>
              <p className="mt-[clamp(14px,2.6cqw,32px)] font-mono text-[clamp(9px,1.05cqw,12px)] uppercase leading-[1.5] tracking-[0.1em] text-[var(--color-accent)] sm:tracking-[0.18em]">
                <span
                  aria-hidden
                  className="mr-[0.8em] inline-block h-[7px] w-[7px] bg-[var(--color-accent)]"
                />
                {c.heroKicker}
              </p>
              <p className="mt-2 text-[clamp(15px,2.43cqw,28px)] font-medium leading-[1.15] tracking-[-0.02em]">
                {c.heroTitleA} {c.heroTitleB}
              </p>
              <div className="mt-[clamp(14px,3cqw,36px)] flex flex-wrap items-center justify-end gap-[clamp(6px,1cqw,12px)]">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  {/* Apple's official badge, unmodified. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hiss/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto sm:h-12"
                  />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-[clamp(10px,1.7cqw,20px)] py-[clamp(8px,1.1cqw,12px)] code-mono text-[clamp(10px,1.1cqw,13px)] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                >
                  {c.ctaHow}
                </a>
              </div>
            </div>
            {/* Slogan cap-height sits ~0.052em below its line box; offset so the panel top meets the letters. */}
            <div className="mt-[calc(clamp(34px,12.5cqw,116px)*0.052)]">
              <Image
                src="/hiss/hero-panel.png"
                alt="HiSS recorder screen with duration, stamp and label keys"
                width={1200}
                height={1556}
                priority
                quality={90}
                sizes="(min-width: 1024px) 460px, 48vw"
                className="ml-auto h-auto w-full max-w-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:justify-between">
          {c.spec.map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              {s}
              {i < arr.length - 1 && (
                <span className="hidden text-[var(--color-line)] sm:inline">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* App shots — carousel */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <Kicker>{c.appKicker}</Kicker>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[32px]">
              {c.appTitle}
            </h2>
          </div>
          <AppShotCarousel />
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.useKicker}
            title={c.useTitle}
            intro={c.useIntro}
          />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
            {c.useCases.map((u, i) => (
              <div
                key={u.t}
                className="border-b border-r border-[var(--color-line)] p-6"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[16px] font-medium tracking-tight">
                  {u.t}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {u.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's different — 4 cards */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.diffKicker}
            title={c.diffTitle}
            intro={c.diffIntro}
          />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {c.diffCards.map((card, i) => (
              <div
                key={card.t}
                className="border-b border-r border-[var(--color-line)] p-8"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                  {card.t}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {card.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Stamp — light section, deepens the core value prop */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.stampKicker}
            title={c.stampTitle}
            intro={c.stampBody}
          />
          <div className="mt-10 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {c.stampPoints.map((p, i) => (
              <div
                key={p.t}
                className="border-b border-r border-[var(--color-line)] p-6"
              >
                <div className="code-mono text-[13px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[16px] font-medium tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with objects */}
      <section className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.featKicker}
            title={c.featTitle}
            intro={c.featIntro}
          />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-6xl border-t border-[var(--color-line)]">
          <FeatureRow
            index="01"
            title={c.features[0].t}
            body={c.features[0].b}
            object={<StampFlow />}
          />
          <FeatureRow
            index="02"
            title={c.features[1].t}
            body={c.features[1].b}
            object={<TranscribeQuality />}
            flip
          />
          <FeatureRow
            index="03"
            title={c.features[2].t}
            body={c.features[2].b}
            object={<LanguageMatrix />}
          />
          <FeatureRow
            index="04"
            title={c.features[3].t}
            body={c.features[3].b}
            object={<ExportGrid />}
            flip
          />
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="border-b border-t border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.howKicker}
            title={c.howTitle}
            intro={c.howIntro}
          />
          <div className="mt-12">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.premKicker}
            title={c.premTitle}
            intro={c.premIntro}
          />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            {c.premBenefits.map((b, i) => (
              <div
                key={b.t}
                className="border-b border-r border-[var(--color-line)] bg-[var(--color-paper)] p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="code-mono text-[13px] text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {b.badge && (
                    <span className="code-mono border border-[var(--color-line)] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                      {b.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                  {b.t}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">
                  {b.b}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 code-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
            {c.premFree}
          </p>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Kicker>{c.privKicker}</Kicker>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[34px]">
              {c.privTitle}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
              {c.privBody}
            </p>
          </div>
        </div>
      </section>

      {/* Download */}
      <section
        id="download"
        className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Kicker>{c.dlKicker}</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {c.dlTitle}
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            {c.dlBody}
          </p>
          <div className="mt-9 grid max-w-lg gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-r border-[var(--color-line)] bg-[var(--color-ink)] px-5 py-4 text-[var(--color-paper)] transition hover:brightness-125"
            >
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] opacity-70">
                  {c.dlDownloadLabel}
                </div>
                <div className="mt-1 text-[15px] font-medium">iOS</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] opacity-70">
                App Store
              </span>
            </a>
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] px-5 py-4">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                  {c.dlRequiresLabel}
                </div>
                <div className="mt-1 text-[15px] font-medium">iOS 16+</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                iPhone
              </span>
            </div>
          </div>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
            {c.dlFree}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2.5 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
          <span className="flex items-center gap-2.5">
            <HissMark size={20} />
            <span className="text-[var(--color-ink)]">HiSS</span>
            <span className="text-[var(--color-line)]">·</span>
            <span>{c.footerTagline}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span>© <a href={company.baseUrl} className="transition hover:text-[var(--color-ink)]">DOIE LLC</a></span>
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
