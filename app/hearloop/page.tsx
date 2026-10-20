import type { Metadata } from "next";
import { headers } from "next/headers";
import { HearLoopPage } from "../../components/hearloop/HearLoopPage";

// Canonical origin is hearloop.doie.cc; middleware 308s doie.cc/hearloop/* here.
const TITLE = "HearLoop: repeat, shadow, learn faster";
const DESCRIPTION =
  "Turn any recording into practice. HearLoop splits speech into sentences, repeats them and adds shadowing pauses for you. Simple, effective and free.";

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
