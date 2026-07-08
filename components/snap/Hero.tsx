import type { AppContent } from "../../content/types";
import { Kicker } from "./Kicker";
import { DownloadButtons } from "./DownloadButtons";
import { HeroPlaceholder } from "./HeroPlaceholder";

export function Hero({ app }: { app: AppContent }) {
  const { hero } = app;

  return (
    <section className="border-b border-[var(--color-line)] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Kicker>{hero.badge}</Kicker>
          <h1 className="mt-6 text-[42px] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[58px] lg:text-[66px]">
            {hero.headline.lead}
            <br />
            <span className="text-[var(--color-accent)]">{hero.headline.accent}</span>
          </h1>
          <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
            {hero.subheadline}
          </p>

          <div id="download" className="mt-9 max-w-lg">
            <DownloadButtons downloads={app.downloads} />
            <div className="mt-4 flex items-center justify-between">
              <p className="code-mono text-[12px] text-[var(--color-ink-soft)]">
                {hero.ctaNote}
              </p>
              <a
                href="#features"
                className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 hover:text-[var(--color-ink)]"
              >
                Features →
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {!hero.heroShot ? (
            <HeroPlaceholder name={app.name} monogram={app.brand.monogram} />
          ) : hero.desktopShot ? (
            <div className="relative w-full max-w-[560px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.desktopShot}
                alt={`${app.name} on Mac`}
                className="w-full drop-shadow-[0_16px_50px_rgba(0,0,0,0.16)]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.heroShot}
                alt={hero.heroShotAlt}
                className="absolute -bottom-6 -right-2 w-[30%] max-w-[150px] drop-shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
              />
            </div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={hero.heroShot}
              alt={hero.heroShotAlt}
              className="w-full max-w-[380px] drop-shadow-[0_12px_40px_rgba(0,0,0,0.12)] lg:max-w-[420px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
