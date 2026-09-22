import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the file-tracing root to this project — a parent-directory lockfile
  // (~/package-lock.json) otherwise makes Next infer the wrong workspace root.
  outputFileTracingRoot: __dirname,
  // Next 15.3+ gates the per-image `quality` prop behind an allowlist (default
  // [75]). The Wren product screenshots are text-heavy UI, so serve them at a
  // near-lossless 90 (still optimized → WebP/AVIF + responsive resize).
  images: {
    qualities: [75, 90],
  },
  // Tax Snap renamed to Tax Law Snap (2026-09-22) and IRS Snap folded into it
  // as the US region. The native iOS app's AppLinks.privacyPolicy and its
  // already-live App Store Connect "Privacy Policy URL" both hardcode the old
  // /snap/tax-snap/privacy path, so these redirects keep that link working
  // without needing a new app build.
  async redirects() {
    return [
      {
        source: "/snap/tax-snap/:path*",
        destination: "/snap/tax-law-snap/:path*",
        permanent: true,
      },
      {
        source: "/snap/irs-snap/:path*",
        destination: "/snap/tax-law-snap/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
