import type { AppContent, Family } from "../types";
import { icdSnap } from "./icd-snap";
import { nioshSnap } from "./niosh-snap";
import { eh40SnapUk } from "./eh40-snap-uk";
import { welSnapAu } from "./wel-snap-au";
import { ioelvSnapEu } from "./ioelv-snap-eu";
import { koshaSnapKr } from "./kosha-snap-kr";
import { codeSnap } from "./code-snap";
import { hcpcsSnap } from "./hcpcs-snap";
import { naicsSnap } from "./naics-snap";
import { dotSnap } from "./dot-snap";
import { labcodeSnap } from "./labcode-snap";
import { irsSnap } from "./irs-snap";
import { ehsSnap } from "./ehs-snap";
import { drugSnap } from "./drug-snap";
import { medbillSnap } from "./medbill-snap";
import { taxSnap } from "./tax-snap";
import { tariffSnap } from "./tariff-snap";
import { aeroSnap } from "./aero-snap";

// The registry — the real source of truth for which apps exist (the table in
// SITE_ARCHITECTURE.md §7 is just a snapshot). Add an app by importing its
// AppContent object and dropping it into this array.
const registry: AppContent[] = [
  icdSnap,
  nioshSnap,
  eh40SnapUk,
  welSnapAu,
  ioelvSnapEu,
  koshaSnapKr,
  codeSnap,
  hcpcsSnap,
  naicsSnap,
  dotSnap,
  labcodeSnap,
  irsSnap,
  ehsSnap,
  drugSnap,
  medbillSnap,
  taxSnap,
  tariffSnap,
  aeroSnap,
];

/** slug → AppContent, for O(1) route lookups. */
const bySlug = new Map(registry.map((app) => [app.slug, app]));

/** All apps, insertion order. Used by sitemap.ts and generateStaticParams. */
export const allApps: AppContent[] = registry;

export function getApp(slug: string): AppContent | undefined {
  return bySlug.get(slug);
}

/**
 * Sibling apps in the same family, excluding the given slug. Empty when the
 * app has no family (SITE_ARCHITECTURE.md §6).
 */
export function getSiblings(app: AppContent): AppContent[] {
  if (!app.family) return [];
  return registry.filter(
    (a) => a.family === app.family && a.slug !== app.slug,
  );
}

export type { AppContent, Family };
