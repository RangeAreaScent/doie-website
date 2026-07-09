import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { company } from "../../content/company";
import { Kicker } from "../snap/Kicker";
import { WrenGallery } from "./gallery";
import { LangSwitch } from "./LangSwitch";
import { COPY, hrefFor, type Lang } from "../../content/wren-copy";
import {
  LoopDiagram,
  HeroRing,
  ForgettingCurve,
  RecastBubble,
  MemoryInject,
  VoiceCost,
  LanguageMatrix,
  ProtocolGrid,
} from "./objects";

// Wren — a bespoke product page (not a /snap/ reference app), rendered by
// /wren (en) and /wren/<lang> for the six translations. All prose comes from
// COPY[lang] in content/wren-copy.ts; the hand-built diagrams in objects.tsx
// keep their English labels by design. Monochrome by intent: the accent is
// ink, so the Instrument motifs read as pure black-on-paper.
const brand = {
  "--color-accent": "#0a0a0a",
  "--color-accent-deep": "#0a0a0a",
} as CSSProperties;

/* The real Wren app icon (hand-drawn wren + "wren" placard), rounded like a
   macOS app tile with a hairline edge so the light icon reads on white. */
function WrenMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/wren/wren-icon.png"
      alt="Wren"
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

export function WrenPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const home = hrefFor(lang);
  return (
    // Root <html> is lang="en" site-wide; mark this subtree so translated
    // content is announced in the right language (nearest lang wins).
    <main lang={lang} className="min-h-screen" style={brand}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2.5">
            <WrenMark />
            <span className="text-[15px] font-medium tracking-tight">Wren</span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-5">
            <LangSwitch lang={lang} />
            <a
              href="#download"
              className="rounded-md border border-[var(--color-ink)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              {c.navDownload}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--color-line)] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Kicker>{c.heroKicker}</Kicker>
              <h1 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
                {c.heroTitleA}
                <br />
                <span className="text-[var(--color-accent)]">
                  {c.heroTitleB}
                </span>
              </h1>
              <p className="mt-7 max-w-md text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
                {c.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-ink)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-paper)] transition hover:brightness-125"
                >
                  {c.ctaDownload}
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                >
                  {c.ctaHow}
                </a>
              </div>
            </div>
            <div className="lg:pl-4">
              <HeroRing />
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

      {/* Product shots — the real app, early */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>{c.appKicker}</Kicker>
              <h2 className="mt-5 text-[26px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[32px]">
                {c.appTitle}
              </h2>
            </div>
            <p className="max-w-xs text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
              {c.appIntro}
            </p>
          </div>
          <WrenGallery lang={lang} />
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.gapKicker} title={c.gapTitle} intro={c.gapIntro} />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {c.gapCards.map((card, i) => (
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

      {/* Features with built objects */}
      <section className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.featKicker} title={c.featTitle} intro={c.featIntro} />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-6xl border-t border-[var(--color-line)]">
          <FeatureRow
            index="01"
            title={c.features[0].t}
            body={c.features[0].b}
            object={<MemoryInject />}
          />
          <FeatureRow
            index="02"
            title={c.features[1].t}
            body={c.features[1].b}
            object={<ForgettingCurve />}
            flip
          />
          <FeatureRow
            index="03"
            title={c.features[2].t}
            body={c.features[2].b}
            object={<RecastBubble />}
          />
          <FeatureRow
            index="04"
            title={c.features[3].t}
            body={c.features[3].b}
            object={<VoiceCost />}
            flip
          />
        </div>
      </section>

      {/* How it works — the loop, expanded */}
      <section
        id="how"
        className="border-b border-t border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.howKicker} title={c.howTitle} intro={c.howIntro} />
          <div className="mt-8">
            <LoopDiagram />
          </div>
        </div>
      </section>

      {/* 8 protocols */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker={c.protoKicker}
            title={c.protoTitle}
            intro={c.protoIntro}
          />
          <div className="mt-12">
            <ProtocolGrid />
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.mlKicker} title={c.mlTitle} intro={c.mlIntro} />
          <div className="mt-12">
            <LanguageMatrix />
          </div>
        </div>
      </section>

      {/* Privacy line */}
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

      {/* Download / CTA */}
      <section id="download" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Kicker>{c.dlKicker}</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
            {c.dlTitle}
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            {c.dlBody}
          </p>
          <div className="mt-9 grid max-w-lg gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] bg-[var(--color-ink)] px-5 py-4 text-[var(--color-paper)]">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] opacity-70">
                  {c.dlDownloadLabel}
                </div>
                <div className="mt-1 text-[15px] font-medium">macOS</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] opacity-70">
                .dmg
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] px-5 py-4">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                  {c.dlRequiresLabel}
                </div>
                <div className="mt-1 text-[15px] font-medium">macOS 26+</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Apple silicon
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
            <WrenMark size={20} />
            <span className="text-[var(--color-ink)]">Wren</span>
            <span className="text-[var(--color-line)]">·</span>
            <span>{c.footerTagline}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span>© DOIE LLC</span>
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
