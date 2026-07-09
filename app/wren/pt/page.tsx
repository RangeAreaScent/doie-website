import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.pt.metaTitle,
  description: COPY.pt.metaDescription,
  alternates: { canonical: canonicalFor("pt"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="pt" />;
}
