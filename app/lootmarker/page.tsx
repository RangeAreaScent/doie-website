import type { Metadata } from "next";
import { LootMarkerPage } from "../../components/lootmarker/LootMarkerPage";
import { COPY, ALTERNATES, canonicalFor } from "../../content/lootmarker-copy";

export const metadata: Metadata = {
  title: COPY.en.metaTitle,
  description: COPY.en.metaDescription,
  alternates: { canonical: canonicalFor("en"), languages: ALTERNATES },
};

export default function Page() {
  return <LootMarkerPage lang="en" />;
}
