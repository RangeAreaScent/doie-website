import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { company } from "../content/company";
import { Kicker } from "../components/snap/Kicker";
import { AppCarousel } from "../components/company/AppCarousel";

// doie.cc root: the company page. A hairline product grid (direction B from the
// 2026-10 redesign mockups) introduces each product; on phones it becomes a
// swipe carousel, one app per page. Only Snap apps that have actually shipped
// get a card (one each, never the whole catalog; SITE_ARCHITECTURE.md §1, §10).
// Tone v2: plain, short, no em dashes. Anchored on the palette's slate accent
// so the parent brand stays calm.
const brand = {
  "--color-accent": "#39617A",
  "--color-accent-deep": "#2C4B60",
} as CSSProperties;

type Product = {
  name: string;
  group: "pro" | "everyday";
  tag?: string;
  desc: string;
  platform: string;
  status: string;
  live: boolean;
  accent: string;
  icon: string;
  hairline?: boolean;
  href: string;
  linkLabel: string;
  /** Store listing, shown as a small secondary link beside the product-site link. */
  store?: { label: string; href: string };
};

// Green taken from the Snap app icons' stacked tag.
const SNAP_ACCENT = "#4B6350";

// One card per product, each Snap app on its own. `live` fills the status dot;
// products without a store listing yet say so instead of linking to one. Snap
// apps link to their own pages on this site. Copy is written to read like a
// person talking, not a spec sheet.
const products: Product[] = [
  {
    name: "Hangar Snap",
    group: "pro",
    tag: "Snap · Reference database for professionals",
    desc: "The FAA and EASA regulations you check all day, searchable right in the hangar. Copy a citation in a tap, keep the ones for your aircraft, and it all works offline.",
    platform: "iPhone · Mac",
    status: "On the App Store",
    live: true,
    accent: SNAP_ACCENT,
    icon: "/apps/hangar-snap.png",
    hairline: true,
    href: "/snap/hangar-snap",
    linkLabel: "Learn more",
    store: { label: "App Store", href: "https://apps.apple.com/us/app/hangar-snap/id6802700789" },
  },
  {
    name: "Tax Law Snap",
    group: "pro",
    tag: "Snap · Reference database for professionals",
    desc: "The tax law you look up all day, in one app. The US Code, regulations, and IRS forms, plus HMRC manuals for the UK. Search it, copy the citation, and keep the sections you cite often.",
    platform: "iPhone · Mac",
    status: "On the App Store",
    live: true,
    accent: SNAP_ACCENT,
    icon: "/apps/tax-law-snap.png",
    hairline: true,
    href: "/snap/tax-law-snap",
    linkLabel: "Learn more",
    store: { label: "App Store", href: "https://apps.apple.com/us/app/tax-law-snap/id6814816725" },
  },
  {
    name: "HiSS",
    group: "everyday",
    desc: "Every take, already labeled. HiSS says the date, time, and a label out loud at the start of each recording, then writes it all out on your device.",
    platform: "iPhone",
    status: "On the App Store",
    live: true,
    accent: "#F54927",
    icon: "/apps/hiss.png",
    hairline: true,
    href: "https://hiss.doie.cc",
    linkLabel: "hiss.doie.cc",
    store: { label: "App Store", href: "https://apps.apple.com/us/app/hiss-recorder/id6796030377" },
  },
  {
    name: "PasteLight",
    group: "everyday",
    desc: "Take a screenshot and PasteLight quietly compresses it on your clipboard before you paste it into an AI chat. It lives in your menu bar and stays out of the way.",
    platform: "Mac",
    status: "On the Mac App Store",
    live: true,
    accent: "#8A5F00",
    icon: "/apps/pastelight.png",
    href: "https://pastelight.space",
    linkLabel: "pastelight.space",
    store: { label: "Mac App Store", href: "https://apps.apple.com/us/app/pastelight/id6812392844" },
  },
  {
    name: "HearLoop",
    group: "everyday",
    desc: "Practice any recording one sentence at a time. HearLoop finds the sentences, repeats them, and leaves a pause so you can say each one back.",
    platform: "iPhone",
    status: "Coming to the App Store",
    live: false,
    accent: "#F26A5A",
    icon: "/apps/hearloop.png",
    href: "https://hearloop.doie.cc",
    linkLabel: "hearloop.doie.cc",
  },
  {
    name: "mMDd",
    group: "everyday",
    desc: "A Markdown editor that is clean, light, and free. Open a file and write, with themes to match how you like to read.",
    platform: "Mac · Windows",
    status: "On the Mac App Store",
    live: true,
    accent: "#B03A2E",
    icon: "/apps/mmdd.png",
    href: "https://mmdd.doie.cc",
    linkLabel: "mmdd.doie.cc",
    store: { label: "Mac App Store", href: "https://apps.apple.com/us/app/mmdd/id6803640586" },
  },
  {
    name: "The Signal",
    group: "everyday",
    tag: "Economic briefing · Daily, weekly, monthly",
    desc: "Headlines from ten leading economic outlets, boiled down to the signals that matter. See what they all cover, what only one or two noticed, and where they read the same story differently. Free to read, with no ads.",
    platform: "Web",
    status: "Live on the web",
    live: true,
    accent: "#1D1D1B",
    icon: "/apps/the-signal.png",
    hairline: true,
    href: "https://thesignal.cloud",
    linkLabel: "thesignal.cloud",
  },
];

const proProducts = products.filter((p) => p.group === "pro");
const everydayProducts = products.filter((p) => p.group === "everyday");

const principles = [
  {
    label: "Focus",
    title: "The tools you use again and again.",
    body: "Our apps are for the tools people rely on every day, whether it is their profession or a part of daily life. We focus on making each one a little more convenient.",
  },
  {
    label: "Approach",
    title: "Start from what is actually needed.",
    body: "We look closely at what we, and the professionals we build for, need from a tool. Then we design the interface around that.",
  },
  {
    label: "Belief",
    title: "Small improvements add up.",
    body: "A small gain in a tool used every day becomes a large one over time. For the people who depend on it, that is a real difference.",
  },
];

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

/* A real app icon. Decorative: the app name always sits next to it. The size
   comes in as classes so it can change at the phone breakpoint. */
function AppIcon({
  src,
  className,
  hairline = false,
}: {
  src: string;
  className: string;
  hairline?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={256}
      height={256}
      quality={90}
      className={`shrink-0 rounded-[22%] ${hairline ? "border border-[var(--color-line)]" : ""} ${className}`}
    />
  );
}

function Status({
  accent,
  live,
  children,
}: {
  accent: string;
  live: boolean;
  children: ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink)]">
      <span
        aria-hidden
        className="h-2 w-2 shrink-0 rounded-full border-[1.5px]"
        style={{ borderColor: accent, background: live ? accent : "transparent" }}
      />
      {children}
    </span>
  );
}

// Phone: each card is a bordered page in the swipe carousel. From `sm`: a cell
// of the shared hairline grid. Scroll-reveal is sm+ only (see globals.css).
const CARD =
  "reveal group relative flex min-w-0 flex-col gap-[22px] border border-[var(--color-line)] p-6 transition-colors hover:bg-[var(--color-paper-soft)] motion-reduce:transition-none max-sm:shrink-0 max-sm:grow-0 max-sm:basis-[86%] max-sm:snap-center sm:border-0 sm:border-r sm:border-b sm:p-8";

function AccentBar({ accent }: { accent: string }) {
  return (
    <span
      aria-hidden
      className="absolute -top-px -left-px h-[3px] w-10 transition-[width] duration-300 group-hover:w-[calc(100%+2px)] motion-reduce:transition-none"
      style={{ background: accent }}
    />
  );
}

const LINK_CLASS = `text-[12px] font-medium text-[var(--color-ink)] underline decoration-2 underline-offset-[6px] after:absolute after:inset-0 ${FOCUS}`;

function CardLink({ product: p }: { product: Product }) {
  const body = (
    <>
      {p.linkLabel}{" "}
      <span
        aria-hidden
        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
      >
        →
      </span>
    </>
  );
  return p.href.startsWith("/") ? (
    <Link href={p.href} className={LINK_CLASS} style={{ textDecorationColor: p.accent }}>
      {body}
    </Link>
  ) : (
    <a href={p.href} className={LINK_CLASS} style={{ textDecorationColor: p.accent }}>
      {body}
    </a>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "/support" },
      { label: "Hangar Snap", href: "/snap/hangar-snap/support" },
      { label: "Tax Law Snap", href: "/snap/tax-law-snap/support" },
      { label: "HearLoop", href: "https://hearloop.doie.cc/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/#contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = `inline-flex min-h-11 items-center text-[15px] sm:min-h-9 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] ${FOCUS}`;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <li className={`${CARD} sm:min-h-[320px] sm:flex-[1_1_440px]`}>
      <AccentBar accent={p.accent} />
      <div className="flex items-start justify-between gap-4 max-sm:flex-col">
        <AppIcon src={p.icon} hairline={p.hairline} className="size-16 max-sm:size-28" />
        <Status accent={p.accent} live={p.live}>
          {p.status}
        </Status>
      </div>
      <div>
        {p.tag && (
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
            {p.tag}
          </p>
        )}
        <h3 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] max-sm:text-[32px]">
          {p.name}
        </h3>
        <p className="mt-3 max-w-[46ch] text-pretty text-[15px] leading-[1.6] text-[var(--color-ink-soft)] max-sm:text-[16px]">
          {p.desc}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
        <span>{p.platform}</span>
        <span className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {p.store && (
            <a
              href={p.store.href}
              className={`relative z-10 inline-flex min-h-11 items-center underline decoration-[var(--color-line)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-ink)] hover:decoration-current ${FOCUS}`}
            >
              {p.store.label} <span aria-hidden className="ml-1">↗</span>
            </a>
          )}
          <CardLink product={p} />
        </span>
      </div>
    </li>
  );
}

function ProductGroup({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: Product[];
}) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-[20px] font-medium tracking-tight">{title}</h3>
      <p className="mb-6 mt-1.5 max-w-[60ch] text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
        {intro}
      </p>
      <AppCarousel names={items.map((p) => p.name)}>
        {items.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </AppCarousel>
    </div>
  );
}

export default function CompanyHome() {
  return (
    <main className="min-h-screen" style={brand}>
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <Link href="/" className={`flex min-h-11 items-center ${FOCUS}`}>
            <Image
              src="/brand/doie-logo.svg"
              alt="DOIE"
              width={1377}
              height={637}
              priority
              className="h-8 w-[69px] shrink-0"
            />
          </Link>
          <nav
            aria-label="Primary"
            className="flex items-center gap-5 font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)] sm:gap-7"
          >
            <a href="#apps" className={`hidden hover:text-[var(--color-ink)] sm:inline ${FOCUS}`}>
              Products
            </a>
            <a href="#principles" className={`hidden hover:text-[var(--color-ink)] sm:inline ${FOCUS}`}>
              Principles
            </a>
            <a
              href="#contact"
              className={`inline-flex min-h-11 items-center rounded-md border border-[var(--color-accent)] px-3.5 text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-white ${FOCUS}`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-[72px]">
        <Kicker>{company.legalName}</Kicker>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <h1 className="min-w-0 flex-[3_1_560px] text-balance text-[clamp(2.5rem,1.4rem+4.2vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.03em]">
            Everyday tools, made a little easier.
          </h1>
          <p className="min-w-0 max-w-[420px] flex-[2_1_320px] text-pretty text-[17px] leading-[1.55] text-[var(--color-ink-soft)]">
            Focused apps for the jobs you do every day. We engineer better
            interfaces, so the work gets more efficient and daily life a little
            more convenient.
          </p>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-[1200px] scroll-mt-20 px-6 pb-16 sm:px-8 sm:pb-24">
        <h2 className="sr-only">Products</h2>
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-8">
          <Kicker>Products</Kicker>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:hidden">
            Swipe to browse →
          </p>
        </div>

        <ProductGroup
          title="Reference for professionals"
          intro="The Snap apps are searchable reference databases for the sources professionals check every day."
          items={proProducts}
        />
        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
          More Snap apps are on the way, across medicine, workplace safety, and
          other fields.
        </p>

        <ProductGroup
          title="Everyday tools"
          intro="Focused apps and sites for the things you do again and again."
          items={everydayProducts}
        />
      </section>

      <section
        id="principles"
        className="scroll-mt-20 border-y border-[var(--color-line)] bg-[var(--color-paper-soft)]"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <div className="min-w-0 flex-[1_1_320px] lg:max-w-[420px]">
              <Kicker>Why we build</Kicker>
              <h2 className="mt-5 text-balance text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.02em]">
                Built for the work you do every day.
              </h2>
              <p className="mt-5 text-pretty text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
                DOIE makes software for ordinary, repeated jobs. We pay attention
                to the details, because that is where a tool gets easier to use.
              </p>
            </div>
            <dl className="min-w-0 flex-[2_1_480px] border-t border-[var(--color-line)]">
              {principles.map((c) => (
                <div
                  key={c.label}
                  className="grid gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-7 sm:grid-cols-[120px_1fr]"
                >
                  <dt className="code-mono pt-1 text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                    {c.label}
                  </dt>
                  <dd>
                    <h3 className="text-[20px] font-medium tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                      {c.body}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-8 px-6 py-16 sm:px-8 sm:py-24">
          <div className="min-w-0 flex-[1_1_420px]">
            <Kicker>Contact</Kicker>
            <h2 className="mt-5 max-w-[20ch] text-balance text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.02em]">
              Questions, feedback, or partnership inquiries.
            </h2>
            <p className="mt-4 text-[16px] text-[var(--color-ink-soft)]">
              We read every message.
            </p>
          </div>
          <a
            href={`mailto:${company.contactEmail}`}
            className={`inline-flex min-h-12 items-center rounded-lg bg-[var(--color-accent)] px-6 code-mono text-[14px] font-medium text-white transition hover:brightness-110 ${FOCUS}`}
          >
            {company.contactEmail}
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                  {col.title}
                </h2>
                <ul
                  role="list"
                  className={`mt-3 grid gap-x-8 ${col.title === "Products" ? "grid-cols-2" : ""}`}
                >
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <p className="mt-10 border-t border-[var(--color-line)] pt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
            © {new Date().getFullYear()} {company.legalNameLong} · GA, USA
          </p>
        </div>
      </footer>
    </main>
  );
}
