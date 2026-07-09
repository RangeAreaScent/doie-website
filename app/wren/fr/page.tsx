import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.fr.metaTitle,
  description: COPY.fr.metaDescription,
  alternates: { canonical: canonicalFor("fr"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="fr" />;
}
