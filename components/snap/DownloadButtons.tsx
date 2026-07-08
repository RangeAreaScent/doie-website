import type { Download } from "../../content/types";
import { AppleLogo } from "./AppleLogo";
import { WindowsLogo } from "./WindowsLogo";

// Equal-width platform badges (grid). The first (primary) platform gets an
// accent-tinted fill; the rest are hairline-outlined — lighter than three solid
// black blocks. A missing url renders as "Coming soon".

const PLATFORM_SHORT: Record<Download["platform"], string> = {
  iOS: "iPhone",
  macOS: "Mac",
  Windows: "Windows",
  Android: "Android",
};

// Coming-soon badges show the short platform name (fits the equal-width column
// without truncating). Once a url exists, the badge names the actual store.
function labels(d: Download): { top: string; bottom: string } {
  if (!d.url) return { top: "Coming soon", bottom: PLATFORM_SHORT[d.platform] };
  switch (d.channel) {
    case "app-store":
      return { top: "Download on", bottom: "App Store" };
    case "mac-app-store":
      return { top: "Download on", bottom: "Mac App Store" };
    case "microsoft-store":
      return { top: "Get it from", bottom: "Microsoft Store" };
    case "play-store":
      return { top: "Get it on", bottom: "Google Play" };
    case "direct":
      return { top: "Download for", bottom: PLATFORM_SHORT[d.platform] };
  }
}

function Logo({ platform }: { platform: Download["platform"] }) {
  return platform === "Windows" ? <WindowsLogo /> : <AppleLogo />;
}

export function DownloadButtons({ downloads }: { downloads: Download[] }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${downloads.length}, minmax(0, 1fr))` }}
    >
      {downloads.map((d, i) => {
        const { top, bottom } = labels(d);
        const primary = i === 0;
        return (
          <a
            key={`${d.platform}-${d.channel}`}
            href={d.url ?? "#download"}
            aria-label={`${bottom} — ${top}`}
            className={
              "flex items-center gap-2.5 rounded-lg px-4 py-3 transition " +
              (primary
                ? "bg-[var(--color-accent)] text-white hover:brightness-110"
                : "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]")
            }
          >
            <span className={primary ? "text-white" : "text-[var(--color-ink)]"}>
              <Logo platform={d.platform} />
            </span>
            <span className="min-w-0 leading-tight">
              <span
                className={
                  "code-mono block truncate text-[10px] uppercase tracking-[0.12em] " +
                  (primary ? "text-white/75" : "text-[var(--color-ink-soft)]")
                }
              >
                {top}
              </span>
              <span className="block truncate text-[14px] font-medium">{bottom}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
