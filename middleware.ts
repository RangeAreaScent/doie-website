import { NextRequest, NextResponse } from "next/server";

// Subdomain routing.
//
// Some products live under their own subdomain but physically stay in this one
// Next app (single codebase / single Vercel project). Each is served by
// rewriting its subdomain root onto an internal /<slug> route tree, and the old
// apex path 308-redirects to the subdomain so there's one canonical origin:
//
//   hiss.doie.cc/…  → rewrite → /hiss/…   |   doie.cc/hiss/… → 308 → hiss.doie.cc/…
//   wren.doie.cc/…  → rewrite → /wren/…   |   doie.cc/wren/… → 308 → wren.doie.cc/…
//
// - <slug>.doie.cc/<slug>/… passes through unchanged (asset requests already
//   carry the /<slug> prefix, e.g. public/wren/*), so it isn't double-prefixed.
// - _next + api + favicon are excluded by the matcher.
// - A subdomain only resolves once it's added to the Vercel project's domains +
//   a Cloudflare CNAME (DNS only, grey cloud). Until then the apex→subdomain
//   redirect points at a not-yet-live host — harmless (neither product was
//   previously deployed and indexing is OFF).
// - Local dev + Vercel previews (localhost, *.vercel.app) match no rule, so each
//   product stays reachable at its /<slug> path there.

const SUBDOMAINS = ["hiss", "moderari", "wren", "lootmarker"] as const;

export function middleware(request: NextRequest) {
  // Host header, lowercased, port stripped (so local `curl -H "Host: wren.doie.cc"` works).
  const hostname = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // ─── <slug>.doie.cc → internal /<slug> rewrite ─────────────────────
  const sub = SUBDOMAINS.find((s) => hostname.startsWith(`${s}.`));
  if (sub) {
    // Already targeting the tree (asset requests, direct hits) — leave alone.
    if (pathname === `/${sub}` || pathname.startsWith(`/${sub}/`)) {
      return NextResponse.next();
    }
    url.pathname = `/${sub}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // ─── doie.cc/<slug>/* → 308 redirect to <slug>.doie.cc/* ───────────
  // Preserves query. Skips other hosts (staging, previews, localhost).
  if (hostname === "doie.cc" || hostname === "www.doie.cc") {
    const hit = SUBDOMAINS.find((s) => pathname === `/${s}` || pathname.startsWith(`/${s}/`));
    if (hit) {
      const stripped = pathname.replace(new RegExp(`^/${hit}`), "") || "/";
      const target = new URL(stripped, `https://${hit}.doie.cc`);
      target.search = url.search;
      return NextResponse.redirect(target, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals + static files that don't need URL rewriting.
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico).*)"],
};
