import type { Metadata } from "next";
import { WrenPage } from "../../../components/wren/WrenPage";
import { COPY, ALTERNATES, canonicalFor } from "../../../content/wren-copy";

export const metadata: Metadata = {
  title: COPY.ko.metaTitle,
  description: COPY.ko.metaDescription,
  alternates: { canonical: canonicalFor("ko"), languages: ALTERNATES },
};

export default function Page() {
  return <WrenPage lang="ko" />;
}
