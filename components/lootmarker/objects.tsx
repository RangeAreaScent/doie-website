// Hand-built feature "objects" for the Loot Marker page — hairline SVGs that
// diagram what the app does instead of leaning on decorative screenshots.
// Instrument direction: near-monochrome, mono labels, flat, no shadow/
// gradient/emoji. Every color reads through the shared CSS vars.

import type { ReactNode } from "react";

const LINE = "var(--color-line)";
const INK = "var(--color-ink)";
const SOFT = "var(--color-ink-soft)";
const ACCENT = "var(--color-accent)";

function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`code-mono text-[10px] uppercase tracking-[0.12em] ${className}`}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Hero — sign inside a viewfinder, with an accent detection outline landing
   on it. The signature object: "point the phone, the outline lands on the
   sign, and that's the capture." Diamond-oriented because that's the shape
   most photo apps get most wrong.
   ──────────────────────────────────────────────────────────────────────── */
export function HeroFrame() {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <svg
        viewBox="0 0 430 350"
        className="h-auto w-full"
        role="img"
        aria-label="A diamond sign framed inside a viewfinder with an accent detection outline snapping to its edges."
      >
        {/* viewfinder */}
        <rect
          x="30"
          y="30"
          width="370"
          height="290"
          fill="none"
          stroke={LINE}
        />
        {/* viewfinder corner ticks */}
        {[
          [30, 30, 30, 60],
          [30, 30, 60, 30],
          [400, 30, 400, 60],
          [400, 30, 370, 30],
          [30, 320, 30, 290],
          [30, 320, 60, 320],
          [400, 320, 400, 290],
          [400, 320, 370, 320],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={INK}
            strokeWidth="1.5"
          />
        ))}
        {/* crosshair */}
        <line x1="215" y1="145" x2="215" y2="205" stroke={LINE} />
        <line x1="185" y1="175" x2="245" y2="175" stroke={LINE} />

        {/* diamond sign (fill = paper-soft, hairline edge) */}
        <polygon
          points="215,80 320,175 215,270 110,175"
          fill="var(--color-paper-soft)"
          stroke={SOFT}
        />
        {/* inner border ~4px in — mimics traffic sign */}
        <polygon
          points="215,96 305,175 215,254 125,175"
          fill="none"
          stroke={SOFT}
          strokeDasharray="2 3"
        />

        {/* accent detection outline — slightly offset (mimics the auto snap
            landing exactly on the diamond) */}
        <polygon
          points="215,80 320,175 215,270 110,175"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
        />
        {/* four corner dots */}
        {[
          [215, 80],
          [320, 175],
          [215, 270],
          [110, 175],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4.5" fill={ACCENT} />
        ))}

        {/* mono badge — "auto-detected" */}
        <g transform="translate(298, 300)">
          <rect
            x="0"
            y="0"
            width="102"
            height="20"
            fill="var(--color-paper)"
            stroke={ACCENT}
          />
          <text
            x="51"
            y="14"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1"
            fill={ACCENT}
          >
            DIAMOND · 92%
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Feature 01 — the mask + polygon: pixels around a sign resolve to a shape.
   Left: a rough silhouette. Right: the cleaned polygon with 4 handles.
   ──────────────────────────────────────────────────────────────────────── */
export function DetectionMask() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 480 260"
        className="h-auto w-full"
        role="img"
        aria-label="A blob-shaped foreground mask on the left resolves into a clean four-corner polygon on the right."
      >
        {/* left panel — the mask */}
        <rect x="16" y="16" width="200" height="228" fill="none" stroke={LINE} />
        <path
          d="M60 80 Q 55 55, 90 55 L 155 62 Q 195 68, 190 105 L 195 165 Q 200 210, 155 210 L 90 208 Q 55 205, 58 170 Z"
          fill="var(--color-paper-soft)"
          stroke={SOFT}
        />
        {/* speckles suggesting noisy edges */}
        {[
          [72, 68],
          [180, 74],
          [58, 128],
          [199, 140],
          [66, 195],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.6" fill={SOFT} />
        ))}
        <g transform="translate(28, 232)">
          <text
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.3"
            fill={SOFT}
          >
            MASK · U²-NET
          </text>
        </g>

        {/* arrow */}
        <g transform="translate(228, 130)">
          <line x1="0" y1="0" x2="24" y2="0" stroke={INK} />
          <path d="M24 0 l -6 -4 l 0 8 z" fill={INK} />
        </g>

        {/* right panel — resolved polygon */}
        <rect x="264" y="16" width="200" height="228" fill="none" stroke={LINE} />
        {/* clean rectangle-ish */}
        <polygon
          points="292,50 442,64 438,204 296,196"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.6"
        />
        {[
          [292, 50],
          [442, 64],
          [438, 204],
          [296, 196],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4.5" fill={ACCENT} />
            <circle cx={cx} cy={cy} r="9" fill="none" stroke={ACCENT} strokeOpacity="0.35" />
          </g>
        ))}
        <g transform="translate(276, 232)">
          <text
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.3"
            fill={ACCENT}
          >
            POLYGON · 4 CORNERS
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Feature 02 — perspective flatten: tilted quad → upright rectangle.
   Left: a keystoned quad (roof-tilted). Right: the same quad, flat and square.
   ──────────────────────────────────────────────────────────────────────── */
export function PerspectiveFlatten() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 480 240"
        className="h-auto w-full"
        role="img"
        aria-label="A keystoned quadrilateral on the left is rectified into an upright rectangle on the right."
      >
        {/* left — tilted */}
        <rect x="16" y="16" width="200" height="208" fill="none" stroke={LINE} />
        <polygon
          points="60,70 178,52 190,180 48,168"
          fill="var(--color-paper-soft)"
          stroke={SOFT}
        />
        {/* inside band */}
        <line x1="70" y1="100" x2="178" y2="86" stroke={SOFT} />
        <line x1="70" y1="145" x2="178" y2="131" stroke={SOFT} />
        <g transform="translate(28, 214)">
          <text
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.3"
            fill={SOFT}
          >
            AS SHOT
          </text>
        </g>

        {/* arrow */}
        <g transform="translate(228, 120)">
          <line x1="0" y1="0" x2="24" y2="0" stroke={INK} />
          <path d="M24 0 l -6 -4 l 0 8 z" fill={INK} />
        </g>

        {/* right — flat */}
        <rect x="264" y="16" width="200" height="208" fill="none" stroke={LINE} />
        <rect
          x="292"
          y="50"
          width="144"
          height="152"
          fill="var(--color-paper-soft)"
          stroke={ACCENT}
          strokeWidth="1.6"
        />
        <line x1="292" y1="88" x2="436" y2="88" stroke={ACCENT} />
        <line x1="292" y1="164" x2="436" y2="164" stroke={ACCENT} />
        <g transform="translate(276, 214)">
          <text
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.3"
            fill={ACCENT}
          >
            RECTIFIED
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Feature 03 — collection grid: tiles filed into folders. The scrapbook
   thumbnail — every capture takes its slot.
   ──────────────────────────────────────────────────────────────────────── */
export function CollectionGrid() {
  const tiles: { s: "rect" | "diamond" | "circle" | "triangle" | "pentagon" | "plate"; c?: string }[] = [
    { s: "rect" },
    { s: "diamond", c: "y" },
    { s: "circle" },
    { s: "triangle" },
    { s: "rect" },
    { s: "diamond" },
    { s: "plate" },
    { s: "circle", c: "y" },
    { s: "pentagon" },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-px border-t border-l border-[var(--color-line)]">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="relative aspect-square border-b border-r border-[var(--color-line)] bg-[var(--color-paper-soft)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ShapeGlyph
                s={t.s}
                accent={t.c === "y"}
              />
            </div>
            <span className="absolute left-1.5 top-1.5 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
        <span>Trail · 12</span>
        <span className="text-[var(--color-line)]">/</span>
        <span>Highway · 34</span>
        <span className="text-[var(--color-line)]">/</span>
        <span>Vintage · 7</span>
      </div>
    </div>
  );
}

function ShapeGlyph({
  s,
  accent = false,
}: {
  s: "rect" | "diamond" | "circle" | "triangle" | "pentagon" | "plate";
  accent?: boolean;
}) {
  const stroke = accent ? ACCENT : INK;
  const w = 46;
  switch (s) {
    case "rect":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <rect x="6" y="10" width="34" height="26" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <polygon points="23,4 42,23 23,42 4,23" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "circle":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <circle cx="23" cy="23" r="19" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <polygon points="23,4 42,40 4,40" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "pentagon":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <polygon points="23,4 42,19 34,42 12,42 4,19" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    case "plate":
      return (
        <svg width={w} height={w} viewBox="0 0 46 46" aria-hidden>
          <rect x="4" y="16" width="38" height="14" rx="2" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   Feature 04 — canvas board: freeform arrangement with alignment guides.
   The archive-as-poster: your season, laid out.
   ──────────────────────────────────────────────────────────────────────── */
export function CanvasBoard() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 480 260"
        className="h-auto w-full"
        role="img"
        aria-label="A canvas with several sign tiles arranged freely, showing alignment guides where two tiles snap to a shared edge."
      >
        <rect x="12" y="12" width="456" height="236" fill="var(--color-paper-soft)" stroke={LINE} />

        {/* alignment guides — the "snap" pattern */}
        <line x1="130" y1="12" x2="130" y2="248" stroke={ACCENT} strokeDasharray="3 4" />
        <line x1="12" y1="140" x2="468" y2="140" stroke={ACCENT} strokeDasharray="3 4" />

        {/* tiles */}
        {/* rect */}
        <rect x="46" y="38" width="84" height="60" fill="var(--color-paper)" stroke={INK} />
        <text x="52" y="52" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1" fill={SOFT}>
          01 · RECT
        </text>
        {/* diamond */}
        <g transform="translate(220,68) rotate(45)">
          <rect x="-30" y="-30" width="60" height="60" fill="var(--color-paper)" stroke={INK} />
        </g>
        {/* circle */}
        <circle cx="360" cy="70" r="34" fill="var(--color-paper)" stroke={INK} />
        {/* plate */}
        <rect x="70" y="164" width="120" height="46" fill="var(--color-paper)" stroke={INK} />
        <text x="76" y="180" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1" fill={SOFT}>
          06 · PLATE
        </text>
        {/* triangle */}
        <polygon points="290,204 340,204 315,164" fill="var(--color-paper)" stroke={INK} />
        {/* small rect */}
        <rect x="380" y="164" width="60" height="46" fill="var(--color-paper)" stroke={INK} />

        {/* snap indicator */}
        <g transform="translate(126, 96)">
          <circle cx="4" cy="4" r="4" fill={ACCENT} />
        </g>
        <g transform="translate(126, 138)">
          <circle cx="4" cy="4" r="4" fill={ACCENT} />
        </g>
      </svg>
      <div className="mt-4 flex items-center gap-3 code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Snap · ±3pt
        </span>
        <span className="text-[var(--color-line)]">/</span>
        <span>Drag · pinch · rotate</span>
      </div>
    </div>
  );
}
