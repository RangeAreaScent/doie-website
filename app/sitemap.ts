import type { MetadataRoute } from "next";
import { company } from "../content/company";
import { allApps } from "../content/apps";

// Lists every app page for crawlers. This is a search-engine file, not a
// user-facing catalog — consistent with the "no unified catalog" decision
// (SITE_ARCHITECTURE.md §9).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.baseUrl;

  const staticPages = ["", "/privacy", "/terms", "/support"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.3,
  }));

  const appPages = allApps.flatMap((app) => {
    const root = `${base}/snap/${app.slug}`;
    return [
      { url: `${root}/`, changeFrequency: "monthly" as const, priority: 0.8 },
      { url: `${root}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
      { url: `${root}/terms`, changeFrequency: "yearly" as const, priority: 0.2 },
      { url: `${root}/support`, changeFrequency: "yearly" as const, priority: 0.2 },
    ];
  });

  return [...staticPages, ...appPages];
}
