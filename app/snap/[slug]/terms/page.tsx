import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allApps, getApp } from "../../../../content/apps";
import { appTerms } from "../../../../content/legal";
import { LegalShell } from "../../../../components/legal/LegalShell";

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
  return { title: `${app.name} — Terms of Use` };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const doc = appTerms(app);
  return (
    <LegalShell
      {...doc}
      backLabel={`Back to ${app.name}`}
      backHref={`/snap/${app.slug}/`}
    />
  );
}
