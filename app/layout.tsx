import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans_KR } from "next/font/google";
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
    default: "DOIE — Focused utilities for professionals",
    template: "%s",
  },
  description:
    "DOIE builds single-purpose, ad-free reference apps for professionals in medicine, tax, and workplace safety.",
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
      className={`${grotesk.variable} ${mono.variable} ${sansKr.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
