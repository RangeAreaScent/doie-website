"use client";

import { useEffect, useRef, useState } from "react";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

const LINKS = [
  { href: "#apps", label: "Products" },
  { href: "#principles", label: "Principles" },
  { href: "#contact", label: "Contact" },
];

// Company page header navigation. From `sm` up it is the inline link row with a
// Contact button. Below that it is a three-line menu button that opens a
// full-width hairline panel under the header; it closes on a link tap, Escape,
// a tap outside, or when the viewport grows past `sm`.
export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 40rem)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Primary"
        className="hidden items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)] sm:flex"
      >
        <a href="#apps" className={`hover:text-[var(--color-ink)] ${FOCUS}`}>
          Products
        </a>
        <a href="#principles" className={`hover:text-[var(--color-ink)] ${FOCUS}`}>
          Principles
        </a>
        <a
          href="#contact"
          className={`inline-flex min-h-11 items-center rounded-md border border-[var(--color-accent)] px-3.5 text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-white ${FOCUS}`}
        >
          Contact
        </a>
      </nav>

      <div ref={wrap} className="sm:hidden">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex size-11 items-center justify-center rounded-md border border-[var(--color-ink)] text-[var(--color-ink)] ${FOCUS}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Primary"
            className="absolute inset-x-0 top-full border-b border-[var(--color-line)] bg-[var(--color-paper)]"
          >
            <ul role="list" className="mx-auto max-w-[1200px]">
              {LINKS.map((l) => (
                <li key={l.href} className="border-t border-[var(--color-line)] first:border-t-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-14 items-center px-6 font-mono text-[13px] uppercase tracking-[0.12em] text-[var(--color-ink)] ${FOCUS}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
