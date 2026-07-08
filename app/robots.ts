import type { MetadataRoute } from "next";
import { company } from "../content/company";

// Disallow crawling while the site is still launch-prep (most apps are
// Coming-soon placeholders, unreviewed copy). Flip `allow` back to "/" once
// store URLs + real screenshots are in for at least the ready apps.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${company.baseUrl}/sitemap.xml`,
  };
}
