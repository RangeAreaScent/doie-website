import Link from "next/link";
import type { AppContent } from "../../content/types";
import { AppIcon } from "./AppIcon";
import { SiblingLinks } from "./SiblingLinks";

export function Footer({
  app,
  siblings,
}: {
  app: AppContent;
  siblings: AppContent[];
}) {
  const base = `/snap/${app.slug}`;
  return (
    <footer className="px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <SiblingLinks siblings={siblings} />
        <div className="flex w-full flex-col items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] sm:flex-row">
          <div className="flex items-center gap-2.5">
            <AppIcon monogram={app.brand.monogram} size={20} />
            <span>
              © {new Date().getFullYear()} {app.name} ·{" "}
              <Link href="/" className="hover:text-[var(--color-ink)]">
                DOIE
              </Link>
            </span>
          </div>
          <div className="flex gap-7">
            <Link href={`${base}/privacy`} className="hover:text-[var(--color-ink)]">
              Privacy
            </Link>
            <Link href={`${base}/terms`} className="hover:text-[var(--color-ink)]">
              Terms
            </Link>
            <Link href={`${base}/support`} className="hover:text-[var(--color-ink)]">
              Support
            </Link>
          </div>
        </div>

        {app.attribution && app.attribution.length > 0 && (
          <div className="w-full border-t border-[var(--color-line)] pt-6 font-sans text-[11px] normal-case leading-[1.6] tracking-normal text-[var(--color-ink-soft)]">
            {app.attribution.map((line, i) => (
              <p key={i} className={i > 0 ? "mt-2" : undefined}>
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
