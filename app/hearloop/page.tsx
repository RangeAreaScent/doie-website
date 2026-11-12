import type { Metadata } from "next";
import { headers } from "next/headers";
import { HearLoopPage } from "../../components/hearloop/HearLoopPage";

// Canonical origin is hearloop.doie.cc; middleware 308s doie.cc/hearloop/* here.
const TITLE = "HearLoop: Sentence Repeater";
const DESCRIPTION =
  "Got a recording you want to learn from? HearLoop splits it into sentences, repeats each one and pauses so you can say it back. No account, no ads.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://hearloop.doie.cc/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://hearloop.doie.cc/",
    siteName: "HearLoop",
    type: "website",
  },
};

export default async function Page() {
  const host = ((await headers()).get("host") || "").toLowerCase();
  const homeHref = host.startsWith("hearloop.") ? "/" : "/hearloop";
  return <HearLoopPage homeHref={homeHref} />;
}
