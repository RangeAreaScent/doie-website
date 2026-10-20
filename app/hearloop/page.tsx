import type { Metadata } from "next";
import { headers } from "next/headers";
import { HearLoopPage } from "../../components/hearloop/HearLoopPage";

// Canonical origin is hearloop.doie.cc; middleware 308s doie.cc/hearloop/* here.
const TITLE = "HearLoop: review speech audio one sentence at a time";
const DESCRIPTION =
  "HearLoop splits speech recordings into sentences by their silences. Go back a sentence, repeat it, pause to shadow it aloud, and follow the transcript. On iPhone and Apple Watch, all on your device.";

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
