import { AppIcon } from "./AppIcon";

// Branded stand-in for the hero visual on apps that have no real screenshots
// yet. Themes to the app's accent; clearly a placeholder, not a fake screen.
export function HeroPlaceholder({
  name,
  monogram,
}: {
  name: string;
  monogram: string;
}) {
  return (
    <div
      className="flex aspect-[5/4] w-full max-w-[520px] flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--color-line)]"
      style={{
        background: "color-mix(in srgb, var(--color-accent) 5%, var(--color-paper))",
      }}
    >
      <AppIcon monogram={monogram} size={60} />
      <div className="text-center">
        <div className="text-[18px] font-medium tracking-tight">{name}</div>
        <div className="mt-1.5 code-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
          Screenshots coming soon
        </div>
      </div>
    </div>
  );
}
