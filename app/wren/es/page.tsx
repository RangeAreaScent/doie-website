import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.es.metaTitle,
  description: COPY.es.metaDescription,
  alternates: { canonical: canonicalFor("es"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="es" />;
}
