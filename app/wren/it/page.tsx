import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.it.metaTitle,
  description: COPY.it.metaDescription,
  alternates: { canonical: canonicalFor("it"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="it" />;
}
