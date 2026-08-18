import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  IBM_Plex_Mono,
  IBM_Plex_Sans_KR,
  Barlow_Semi_Condensed,
} from "next/font/google";
import { company } from "../content/company";
import "./globals.css";

// Instrument direction: a characterful grotesk for display/body + a technical
// mono for kickers, data, and numerals. Self-hosted via next/font (no CSP/CDN).
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-plex",
  display: "swap",
});

// Snap wordmark font (Nav.tsx app-name text) — bold-only, semi-condensed
// display face, distinct from the Space Grotesk body/heading font on purpose
// (a logotype, not a heading). Only weight 700 loaded since that's the only
// weight the wordmark uses.
const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-barlow-sc",
  display: "swap",
});

// Hangul fallback for Korean-copy apps (e.g. KOSHA). preload: false so it's
// only fetched when Hangul is actually rendered — non-Korean pages don't pay
// for it. Sits after Space Grotesk / IBM Plex Mono in the CSS var stacks, so
// Latin still uses the primaries and only Hangul falls through to it.
const sansKr = IBM_Plex_Sans_KR({
  // @ts-expect-error — "korean" is a valid IBM Plex Sans KR subset at runtime;
  // next/font's generated types only list the Latin subsets.
  subsets: ["korean"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(company.baseUrl),
  title: {
    default: "DOIE — Small products, each built around one job",
    template: "%s",
  },
  description:
    "DOIE builds small, focused software — a line of reference-lookup apps, a voice recorder, a language tutor, and a tool for tracking the projects you run. Each one is built around a single job.",
  // Defense in depth alongside robots.ts's disallow: a noindex meta tag keeps
  // pages out of results even for crawlers that ignore robots.txt disallow
  // rules. Remove both once the site is ready for a public launch.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${mono.variable} ${sansKr.variable} ${barlowSemiCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
