// Built feature "objects" for the Wren page — hairline SVG / HTML diagrams that
// explain the app's mechanics instead of screenshots. Instrument-direction:
// near-monochrome, mono labels, flat, no shadow/gradient/emoji. Every color
// reads through the shared CSS vars (--color-ink / -line / -accent / -ink-soft),
// so the page's monochrome scope themes them.

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
   1. The managed loop — the signature object.
   Same input, different response, because state persists between sessions.
   ──────────────────────────────────────────────────────────────────────── */
export function LoopDiagram() {
  const nodes = [
    { t: "01", label: "Talk", sub: "Daily conversation" },
    { t: "02", label: "Capture", sub: "Recasts · takeaway" },
    { t: "03", label: "Cards", sub: "Auto-generated" },
    { t: "04", label: "Recall", sub: "Due cards injected" },
  ];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl">
        <svg
          viewBox="0 0 640 150"
          className="h-auto w-full"
          role="img"
          aria-label="The daily learning loop: talk, capture, cards, recall, and back to talk."
        >
          {/* connecting rail */}
          <line x1="112" y1="56" x2="528" y2="56" stroke={LINE} />
          {[112, 250, 388, 528].map((x, i) => (
            <g key={x}>
              <line x1={x} y1="56" x2={x} y2={i % 2 ? 24 : 88} stroke={LINE} />
              <circle cx={x} cy="56" r="3.5" fill={INK} />
            </g>
          ))}
          {/* return arc — the whole point: it loops back */}
          <path
            d="M528 56 C 588 56, 588 130, 320 130 C 52 130, 52 56, 112 56"
            fill="none"
            stroke={ACCENT}
            strokeDasharray="4 4"
          />
          <path d="M112 56 l 9 -5 l 0 10 z" fill={ACCENT} />
        </svg>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-4">
        {nodes.map((n) => (
          <div
            key={n.t}
            className="border-b border-r border-[var(--color-line)] p-4"
          >
            <Mono className="text-[var(--color-accent)]">{n.t}</Mono>
            <div className="mt-2 text-[15px] font-medium tracking-tight">
              {n.label}
            </div>
            <div className="mt-1 text-[13px] leading-snug text-[var(--color-ink-soft)]">
              {n.sub}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        <span className="code-mono text-[var(--color-accent)]">↻</span>{" "}
        Yesterday feeds today. The dashed return is the difference — a plain chat
        starts over every time.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   1b. Hero ring — the loop as an icon: four stages around a persistent core.
   ──────────────────────────────────────────────────────────────────────── */
export function HeroRing() {
  const CX = 215;
  const CY = 175;
  const R = 118;
  const nodes = [
    { n: "01", label: "Talk", x: CX, y: CY - R, anchor: "middle" as const, dx: 0, dy: -16 },
    { n: "02", label: "Capture", x: CX + R, y: CY, anchor: "start" as const, dx: 16, dy: 4 },
    { n: "03", label: "Cards", x: CX, y: CY + R, anchor: "middle" as const, dx: 0, dy: 24 },
    { n: "04", label: "Recall", x: CX - R, y: CY, anchor: "end" as const, dx: -16, dy: 4 },
  ];
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <svg
        viewBox="0 0 430 350"
        className="h-auto w-full"
        role="img"
        aria-label="A loop of four stages — talk, capture, cards, recall — around a persistent core that carries over between sessions."
      >
        <circle cx={CX} cy={CY} r={R} fill="none" stroke={LINE} />
        {/* accent quarter-arc + arrowhead: the clockwise flow */}
        <path
          d={`M${CX} ${CY - R} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          stroke={ACCENT}
        />
        <path d={`M${CX + R} ${CY} l -5 -9 l 10 2 z`} fill={ACCENT} />
        {/* nodes */}
        {nodes.map((nd) => (
          <g key={nd.n}>
            <circle cx={nd.x} cy={nd.y} r="5" fill={INK} />
            <circle cx={nd.x} cy={nd.y} r="9" fill="none" stroke={LINE} />
            <text
              x={nd.x + nd.dx}
              y={nd.y + nd.dy}
              textAnchor={nd.anchor}
              className="code-mono"
              fontSize="11"
              fill={INK}
              fontWeight="500"
            >
              {nd.label}
            </text>
            <text
              x={nd.x + nd.dx}
              y={nd.y + nd.dy + (nd.label === "Talk" ? -12 : 13)}
              textAnchor={nd.anchor}
              className="code-mono"
              fontSize="9"
              fill={SOFT}
            >
              {nd.n}
            </text>
          </g>
        ))}
        {/* core */}
        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          className="code-mono"
          fontSize="10"
          fill={ACCENT}
          letterSpacing="1.5"
        >
          ↻ STATE
        </text>
        <text
          x={CX}
          y={CY + 12}
          textAnchor="middle"
          className="code-mono"
          fontSize="9"
          fill={SOFT}
        >
          carries over
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   1c. Mac window chrome + a built "Daily Talk" product shot.
   A rendered stand-in for a real screenshot: monochrome, on-brand, swappable
   for a PNG later. Traffic-light dots are kept hairline (monotone).
   ──────────────────────────────────────────────────────────────────────── */
export function MacWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] drop-shadow-[0_12px_34px_rgba(0,0,0,0.10)]">
      <div className="flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-4 py-2.5">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block h-[9px] w-[9px] rounded-full border border-[var(--color-ink-soft)]/40"
            />
          ))}
        </span>
        <span className="code-mono flex-1 text-center text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          {title}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function DailyTalkShot() {
  return (
    <MacWindow title="Wren — Daily Talk">
      <div className="grid sm:grid-cols-[150px_1fr]">
        {/* sidebar */}
        <div className="hidden flex-col gap-0.5 border-r border-[var(--color-line)] p-3 sm:flex">
          {["Today", "Daily Talk", "Review", "Vocabulary", "Growth"].map(
            (item) => (
              <div
                key={item}
                className={`px-2.5 py-1.5 text-[12px] ${
                  item === "Daily Talk"
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "text-[var(--color-ink-soft)]"
                }`}
              >
                {item}
              </div>
            ),
          )}
          <div className="mt-auto border-t border-[var(--color-line)] pt-3">
            <Mono className="text-[var(--color-ink-soft)]">5 cards due</Mono>
          </div>
        </div>
        {/* conversation */}
        <div className="flex flex-col gap-3 p-5">
          <div className="max-w-[85%] self-start border border-[var(--color-ink)] px-3.5 py-2.5">
            <p className="text-[13px] leading-snug">
              That sounds intense.{" "}
              <span className="bg-[var(--color-accent)]/12 px-1 underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                You&apos;ve been swamped this week
              </span>{" "}
              — what&apos;s driving it?
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="border border-[var(--color-line)] px-1.5 py-0.5 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                key · swamped
              </span>
            </div>
          </div>
          <div className="max-w-[85%] self-end border border-[var(--color-line)] px-3.5 py-2.5">
            <p className="text-[13px] leading-snug text-[var(--color-ink-soft)]">
              Yes, I have many work and few time this week.
            </p>
          </div>
          <div className="max-w-[85%] self-start border border-[var(--color-ink)] px-3.5 py-2.5">
            <p className="text-[13px] leading-snug">
              Got it —{" "}
              <span className="bg-[var(--color-accent)]/12 px-1 underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                a lot of work and little time
              </span>
              . Which deadline is closest?
            </p>
          </div>
          <div className="self-start">
            <span className="code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
              [ corrections ] &nbsp;much / many · countable nouns
            </span>
          </div>
          {/* input bar */}
          <div className="mt-2 flex items-center gap-2 border border-[var(--color-line)] px-3 py-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            <span className="flex-1 text-[12px] text-[var(--color-ink-soft)]">
              Speak, or type your reply…
            </span>
            <Mono className="text-[var(--color-ink-soft)]">⌘⏎</Mono>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   2. Forgetting curve — HLR half-life scheduling.
   Recall probability decays, each review flattens the next decay.
   ──────────────────────────────────────────────────────────────────────── */
export function ForgettingCurve() {
  return (
    <svg
      viewBox="0 0 520 240"
      className="h-auto w-full"
      role="img"
      aria-label="A memory half-life curve: recall decays, and each review resets it to a slower decay."
    >
      {/* axes */}
      <line x1="44" y1="20" x2="44" y2="196" stroke={LINE} />
      <line x1="44" y1="196" x2="500" y2="196" stroke={LINE} />
      {/* threshold */}
      <line x1="44" y1="150" x2="500" y2="150" stroke={LINE} strokeDasharray="3 4" />
      {/* three decay arcs, each starting higher/flatter after a review */}
      <path d="M44 40 C 120 96, 150 150, 190 150" fill="none" stroke={SOFT} />
      <path d="M190 34 C 300 92, 320 150, 360 150" fill="none" stroke={SOFT} />
      <path d="M360 30 C 470 80, 490 132, 500 150" fill="none" stroke={INK} />
      {/* review markers where the curve resets up */}
      {[190, 360].map((x) => (
        <g key={x}>
          <line x1={x} y1="150" x2={x} y2={x === 190 ? 34 : 30} stroke={ACCENT} />
          <circle cx={x} cy={x === 190 ? 34 : 30} r="3.5" fill={ACCENT} />
        </g>
      ))}
      <text x="52" y="34" className="code-mono" fontSize="9" fill={SOFT}>
        RECALL
      </text>
      <text x="410" y="168" className="code-mono" fontSize="9" fill={SOFT}>
        REVIEW DUE
      </text>
      <text x="196" y="26" className="code-mono" fontSize="9" fill={ACCENT}>
        REVIEW
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   3. Recast — the implicit correction, shown as a chat exchange.
   ──────────────────────────────────────────────────────────────────────── */
export function RecastBubble() {
  return (
    <div className="w-full space-y-3">
      <div className="flex justify-end">
        <div className="max-w-[80%] border border-[var(--color-line)] px-4 py-3">
          <Mono className="text-[var(--color-ink-soft)]">You</Mono>
          <p className="mt-1.5 text-[15px] leading-snug">
            Yesterday I go to the meeting.
          </p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="max-w-[80%] border border-[var(--color-ink)] px-4 py-3">
          <Mono className="text-[var(--color-ink-soft)]">Wren</Mono>
          <p className="mt-1.5 text-[15px] leading-snug">
            Oh, you{" "}
            <span className="bg-[var(--color-accent)]/12 box-decoration-clone px-1 font-medium underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              went to the meeting yesterday
            </span>{" "}
            — how did it go?
          </p>
        </div>
      </div>
      <p className="pt-1 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        No red pen. The corrected form is folded back into a natural reply and
        captured for review — the recast technique.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   4. Active recall — due cards injected into the next conversation.
   ──────────────────────────────────────────────────────────────────────── */
export function MemoryInject() {
  const cards = ["wrap my head around", "push back on", "off the top of my head"];
  return (
    <div className="w-full">
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-2">
          {cards.map((c) => (
            <div
              key={c}
              className="flex items-center justify-between border border-[var(--color-line)] px-3 py-2"
            >
              <span className="text-[13px]">{c}</span>
              <Mono className="text-[var(--color-accent)]">DUE</Mono>
            </div>
          ))}
        </div>
        <div className="hidden justify-center sm:flex">
          <svg viewBox="0 0 60 24" className="w-14" aria-hidden>
            <line x1="0" y1="12" x2="52" y2="12" stroke={LINE} />
            <path d="M52 12 l -8 -5 l 0 10 z" fill={INK} />
          </svg>
        </div>
        <div className="border border-[var(--color-ink)] p-4">
          <Mono className="text-[var(--color-ink-soft)]">
            Next session prompt
          </Mono>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
            Wren seeds these three into the tutor's context, so they resurface in
            natural conversation — right when you're about to forget them.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   5. Local voice — cost of speech tokens: cloud vs on-device.
   ──────────────────────────────────────────────────────────────────────── */
export function VoiceCost() {
  return (
    <div className="w-full">
      <div className="space-y-5">
        <div>
          <div className="flex items-baseline justify-between">
            <Mono className="text-[var(--color-ink-soft)]">
              Cloud speech API
            </Mono>
            <Mono className="text-[var(--color-ink-soft)]">metered</Mono>
          </div>
          <div className="mt-2 h-3 w-full bg-[var(--color-paper-soft)]">
            <div className="h-3 w-full bg-[var(--color-ink)]" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <Mono className="text-[var(--color-ink)]">
              Wren · on-device
            </Mono>
            <Mono className="text-[var(--color-accent)]">0 tokens</Mono>
          </div>
          <div className="mt-2 h-3 w-full bg-[var(--color-paper-soft)]">
            <div className="h-3 w-[2px] bg-[var(--color-accent)]" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        Whisper and Kokoro run on your Mac. Speech never spends a subscription
        quota or an API token — only the text turns do.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   6. Multilingual X→en — one English tutor, explained in each native language.
   ──────────────────────────────────────────────────────────────────────── */
export function LanguageMatrix() {
  const rows = [
    { code: "KR", name: "한국어", gloss: "설명·복습·관리" },
    { code: "ES", name: "Español", gloss: "explicación nativa" },
    { code: "PT", name: "Português", gloss: "explicação nativa" },
    { code: "JA", name: "日本語", gloss: "母語で解説" },
    { code: "FR", name: "Français", gloss: "dans ta langue" },
    { code: "IT", name: "Italiano", gloss: "nella tua lingua" },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-3">
        {rows.map((r) => (
          <div
            key={r.code}
            className="border-b border-r border-[var(--color-line)] p-4"
          >
            <div className="flex items-center gap-2">
              <Mono className="text-[var(--color-accent)]">{r.code}</Mono>
              <span className="text-[15px] font-medium tracking-tight">
                {r.name}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[12px] text-[var(--color-ink-soft)]">
              <span className="code-mono">→ EN</span>
              <span className="text-[var(--color-line)]">·</span>
              <span>{r.gloss}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        The English tutor is shared. What changes is the language you're managed
        in — glosses, review, and interference-error coaching tuned to how your
        native language transfers into English.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   7. The eight protocols of Daily Talk — a labeled mono grid.
   ──────────────────────────────────────────────────────────────────────── */
export function ProtocolGrid() {
  const items = [
    ["i+1", "Comprehensible input one notch above your level"],
    ["Modeled output", "Seeds phrasal verbs and idioms you can reuse"],
    ["Recasting", "Reformulates your errors instead of red-penning them"],
    ["Question variety", "Cycles follow-ups so you produce more"],
    ["Follow the thread", "Digs into what you actually said"],
    ["Anti-avoidance", "Engineers openings for structures you dodge"],
    ["Affective filter", "Manages the fear of sounding wrong"],
    ["Active recall", "Weaves your due cards in invisibly"],
  ];
  return (
    <div className="grid grid-cols-1 gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
      {items.map(([t, d], i) => (
        <div
          key={t}
          className="border-b border-r border-[var(--color-line)] p-5"
        >
          <div className="flex items-baseline gap-3">
            <Mono className="text-[var(--color-accent)]">
              {String(i + 1).padStart(2, "0")}
            </Mono>
            <span className="text-[15px] font-medium tracking-tight">{t}</span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
            {d}
          </p>
        </div>
      ))}
    </div>
  );
}
