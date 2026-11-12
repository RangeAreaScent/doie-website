// App-icon tile. Monogram + accent gradient (which comes from the brand CSS
// vars set on the page wrapper), so it re-themes per app automatically. When the
// app has an official icon, that image is shown instead (with a hairline so a
// light icon holds its edge on the white page).

import Image from "next/image";

export function AppIcon({
  monogram,
  icon,
  size = 32,
}: {
  monogram: string;
  icon?: string;
  size?: number;
}) {
  if (icon) {
    return (
      <Image
        src={icon}
        alt=""
        width={size}
        height={size}
        quality={90}
        className="rounded-[22%] border border-[var(--color-line)]"
        style={{ width: size, height: size }}
      />
    );
  }
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
