// App-icon tile. Monogram + accent gradient (which comes from the brand CSS
// vars set on the page wrapper), so it re-themes per app automatically.

export function AppIcon({
  monogram,
  size = 32,
}: {
  monogram: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-[22%] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] text-white shadow-sm"
      style={{ width: size, height: size }}
    >
      <span
        className="font-bold"
        style={{
          fontFamily: "var(--font-barlow-sc)",
          fontSize: size * 0.42,
          letterSpacing: "-0.02em",
        }}
      >
        {monogram}
      </span>
    </div>
  );
}
