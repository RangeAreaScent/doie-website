import type { Metadata } from "next";
import { WrenPage } from "../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.en.metaTitle,
  description: COPY.en.metaDescription,
  alternates: { canonical: canonicalFor("en"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="en" />;
}
