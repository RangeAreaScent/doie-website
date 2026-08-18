import { AppIcon } from "./AppIcon";

export function Nav({ name, monogram }: { name: string; monogram: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <AppIcon monogram={monogram} size={26} />
          <span
            className="text-[16px] font-bold tracking-tight"
            style={{ fontFamily: "var(--font-barlow-sc)" }}
          >
            {name}
          </span>
        </a>
        <nav className="hidden gap-8 font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)] sm:flex">
          <a href="#features" className="hover:text-[var(--color-ink)]">
            Features
          </a>
          <a href="#how" className="hover:text-[var(--color-ink)]">
            How it works
          </a>
          <a href="#faq" className="hover:text-[var(--color-ink)]">
            FAQ
          </a>
        </nav>
        <a
          href="#download"
          className="rounded-md border border-[var(--color-ink)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-ink)] hover:text-white"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
