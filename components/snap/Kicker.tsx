import type { ReactNode } from "react";

// Mono, uppercase, letterspaced section label with a small accent marker.
// The instrument-direction replacement for the old colored eyebrow.
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="kicker flex items-center gap-2.5">
      <span
        aria-hidden
        className="inline-block h-[7px] w-[7px] bg-[var(--color-accent)]"
      />
      {children}
    </p>
  );
}
