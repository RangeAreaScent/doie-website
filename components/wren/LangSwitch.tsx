"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LOCALES, type Lang } from "../../content/wren-copy";

// Top-right language switcher for the Wren page. Seven locales don't fit the
// inline "EN / KO" strip used on Moderari, so this is a compact dropdown: a
// mono trigger showing the current locale, opening a hairline menu of sibling
// routes. Instrument-styled (mono, --color-line hairlines, no shadow-card).
export function LangSwitch({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === lang) ?? LOCALES[0];

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="text-[var(--color-ink)]">{current.short}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className={`transition ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 6l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-[168px] border border-[var(--color-line)] bg-[var(--color-paper)]"
        >
          {LOCALES.map((l) => {
            const active = l.code === lang;
            return (
              <Link
                key={l.code}
                href={l.href}
                hrefLang={l.code}
                role="menuitem"
                aria-current={active ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-6 border-b border-[var(--color-line)] px-4 py-2.5 text-[13px] transition last:border-b-0 ${
                  active
                    ? "bg-[var(--color-paper-soft)] text-[var(--color-ink)]"
                    : "text-[var(--color-ink-soft)] hover:bg-[var(--color-paper-soft)] hover:text-[var(--color-ink)]"
                }`}
              >
                <span className="font-medium">{l.label}</span>
                <span className="code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                  {l.short}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
