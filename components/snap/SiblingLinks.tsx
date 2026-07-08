import Link from "next/link";
import type { AppContent } from "../../content/types";

// Footer row of same-family apps (SITE_ARCHITECTURE.md §6). Renders nothing
// when the app has no siblings, so it's safe to always include.
export function SiblingLinks({ siblings }: { siblings: AppContent[] }) {
  if (siblings.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-[var(--color-ink-soft)]">
      <span className="opacity-70">Also from this series:</span>
      {siblings.map((s) => (
        <Link
          key={s.slug}
          href={`/snap/${s.slug}/`}
          className="hover:text-[var(--color-ink)]"
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}
