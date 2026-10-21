import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "DOIE: everyday tools, made a little easier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ICONS = [
  "hangar-snap",
  "tax-law-snap",
  "hiss",
  "pastelight",
  "hearloop",
  "mmdd",
  "the-signal",
];

// Words are laid out one by one so the word gap stays even in the rendered image.
const HEADLINE = ["Everyday tools,", "made a little easier."];

// The renderer measures "little" wider than it draws it (Space Grotesk tt pair),
// which leaves a visible hole before the next word; pull the next word back.
const LITTLE_FIX = -16;

const INK = "#0a0a0a";
const INK_SOFT = "#52514c";
const LINE = "#e6e6e2";

const dataUri = (mime: string, buf: Buffer) =>
  `data:${mime};base64,${buf.toString("base64")}`;

// Home page share card (1200x630). Content stays inside an 80px safe margin so
// the 2:1 crops some platforms apply do not touch it.
export default async function OpenGraphImage() {
  const root = process.cwd();
  const [regular, medium, logo, ...icons] = await Promise.all([
    readFile(path.join(root, "assets/fonts/SpaceGrotesk-Regular.ttf")),
    readFile(path.join(root, "assets/fonts/SpaceGrotesk-Medium.ttf")),
    readFile(path.join(root, "public/brand/doie-logo.svg")),
    ...ICONS.map((n) => readFile(path.join(root, `public/apps/${n}.png`))),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 80px",
          fontFamily: "Space Grotesk",
          color: INK,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUri("image/svg+xml", logo)} width={121} height={56} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {HEADLINE.map((line) => (
              <div key={line} style={{ display: "flex", columnGap: 20 }}>
                {line.split(" ").map((w, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", marginRight: w === "little" ? LITTLE_FIX : 0 }}
                  >
                    {w}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              fontWeight: 400,
              color: INK_SOFT,
            }}
          >
            Focused apps for the jobs you do every day.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {icons.map((buf, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={ICONS[i]}
                src={dataUri("image/png", buf)}
                width={64}
                height={64}
                alt=""
                style={{ borderRadius: 14, border: `1px solid ${LINE}` }}
              />
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 500, color: INK_SOFT }}>
            doie.cc
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: regular, weight: 400, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
