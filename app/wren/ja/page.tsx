import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.ja.metaTitle,
  description: COPY.ja.metaDescription,
  alternates: { canonical: canonicalFor("ja"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="ja" />;
}
