import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { allApps, getApp, getSiblings } from "../../../content/apps";
import type { Brand } from "../../../content/types";
import { Nav } from "../../../components/snap/Nav";
import { Hero } from "../../../components/snap/Hero";
import { TrustBar } from "../../../components/snap/TrustBar";
import { Features } from "../../../components/snap/Features";
import { Regions } from "../../../components/snap/Regions";
import { ScreenshotShowcase } from "../../../components/snap/ScreenshotShowcase";
import { DesktopBand } from "../../../components/snap/DesktopBand";
import { SupportBand } from "../../../components/snap/SupportBand";
import { HowItWorks } from "../../../components/snap/HowItWorks";
import { DataStats } from "../../../components/snap/DataStats";
import { FAQ } from "../../../components/snap/FAQ";
import { Footer } from "../../../components/snap/Footer";

// Pre-render one static HTML page per app at build time (SSG).
export function generateStaticParams() {
  return allApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: app.seo.title,
    description: app.seo.description,
    keywords: app.seo.keywords,
    openGraph: {
      title: app.seo.title,
      description: app.seo.description,
      type: "website",
    },
  };
}

// Per-app theming: override the default (blue) brand CSS vars with this app's
// brand, scoped to its page wrapper. Components read var(--color-accent) etc.
function brandVars(brand: Brand): CSSProperties {
  const vars: Record<string, string> = {
    "--color-accent": brand.accent,
    "--color-accent-deep": brand.accentDeep,
  };
  if (brand.ink) vars["--color-ink"] = brand.ink;
  if (brand.paperSoft) vars["--color-paper-soft"] = brand.paperSoft;
  return vars as CSSProperties;
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const siblings = getSiblings(app);

  return (
    <main className="min-h-screen" style={brandVars(app.brand)}>
      <Nav name={app.name} monogram={app.brand.monogram} />
      <Hero app={app} />
      <TrustBar items={app.trustBar} />
      <Features features={app.features} />
      {app.regions && <Regions regions={app.regions} />}
      {app.showcase && (
        <ScreenshotShowcase showcase={app.showcase} appName={app.name} />
      )}
      {app.desktop && <DesktopBand desktop={app.desktop} />}
      {app.support && <SupportBand support={app.support} />}
      <HowItWorks howItWorks={app.howItWorks} />
      <DataStats dataStats={app.dataStats} />
      <FAQ faq={app.faq} />
      <Footer app={app} siblings={siblings} />
    </main>
  );
}
