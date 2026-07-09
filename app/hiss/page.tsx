import type { Metadata } from "next";
import { headers } from "next/headers";
import { HissPage } from "../../components/hiss/HissPage";
import { COPY } from "../../content/hiss-copy";

// Canonical origin is hiss.doie.cc. Middleware redirects doie.cc/hiss/* → here,
// so the metadata canonical always points at the subdomain regardless of how
// the request arrived.
export const metadata: Metadata = {
  title: COPY.en.metaTitle,
  description: COPY.en.metaDescription,
  alternates: { canonical: "https://hiss.doie.cc/" },
  openGraph: {
    title: COPY.en.metaTitle,
    description: COPY.en.metaDescription,
    url: "https://hiss.doie.cc/",
    siteName: "HiSS",
    type: "website",
  },
};

export default async function Page() {
  const hdrs = await headers();
  const host = (hdrs.get("host") || "").toLowerCase();
  const isSubdomain = host.startsWith("hiss.");
  // When served from hiss.doie.cc, the logo link should point at "/" so the
  // URL bar stays subdomain-only. On the fallback doie.cc/hiss it stays /hiss.
  const homeHref = isSubdomain ? "/" : "/hiss";
  return <HissPage lang="en" homeHref={homeHref} />;
}
