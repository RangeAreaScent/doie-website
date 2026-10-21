"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// The company page's app list. From the `sm` breakpoint up it is a plain
// wrapping hairline grid. Below that it becomes a horizontal swipe carousel
// (CSS scroll-snap, one app per page); the only JS is the page dots, which
// track which card is in view and jump to one when tapped.
export function AppCarousel({
  children,
  names,
}: {
  children: ReactNode;
  names: string[];
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;
    const items = Array.from(list.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.intersectionRatio >= 0.6) setActive(items.indexOf(e.target as HTMLElement));
        }
      },
      { root: list, threshold: 0.6 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function goTo(i: number) {
    const el = listRef.current?.children[i] as HTMLElement | undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <>
      <ul
        ref={listRef}
        role="list"
        aria-label="Products"
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:flex-wrap sm:gap-0 sm:overflow-visible sm:border-t sm:border-l sm:border-[var(--color-line)] sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="mt-2 flex items-center justify-center sm:hidden">
        {names.map((n, i) => (
          <button
            key={n}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${n}`}
            aria-current={i === active}
            className="flex h-11 w-6 items-center justify-center"
          >
            <span
              className={`block h-2 rounded-full transition-all motion-reduce:transition-none ${
                i === active
                  ? "w-5 bg-[var(--color-ink)]"
                  : "w-2 bg-[var(--color-ink-soft)]/35"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
