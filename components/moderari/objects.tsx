// Built feature "objects" for the Moderari page — hairline SVG / HTML diagrams
// in the Instrument direction (near-monochrome, mono labels, flat, no
// shadow/gradient/emoji). Page chrome themes on the single green accent
// (--color-accent); the four Moderari *status* colors are functional product
// signal, scoped as --m-* vars on the page <main> and used only inside objects
// that depict app state (timeline dots, triage buckets, heatmap).

import type { ReactNode } from "react";

const LINE = "var(--color-line)";
const INK = "var(--color-ink)";
const SOFT = "var(--color-ink-soft)";
const ACCENT = "var(--color-accent)";
const OVERDUE = "var(--m-overdue)";
const SOON = "var(--m-soon)";
const NORMAL = "var(--m-normal)";
const DEADLINE = "var(--m-deadline)";

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
   Hero — the signature object: many projects, each on its own lane, read
   against one "Today" line. Dots are due dates (status-colored), the filled
   diamond a hard deadline, the hollow diamond a milestone.
   ──────────────────────────────────────────────────────────────────────── */
export function HeroTimeline() {
  const lanes = [
    { y: 34, name: "Weather app", dots: [{ x: 96, c: OVERDUE }], label: "8d overdue", lx: 96 },
    { y: 74, name: "Tax filing", diamond: 250, label: "deadline", lx: 250 },
    { y: 114, name: "Client / Acme", dots: [{ x: 300, c: SOON }], milestone: 372, label: "due Fri", lx: 300 },
    { y: 154, name: "Newsletter", dots: [{ x: 430, c: NORMAL }], label: "on track", lx: 430 },
  ];
  const TODAY = 232;
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <svg
        viewBox="0 0 480 220"
        className="h-auto w-full"
        role="img"
        aria-label="Four projects on one timeline, each on its own lane, read against today's line: one overdue, one deadline, one due this week, one on track."
      >
        {/* today line */}
        <line x1={TODAY} y1="14" x2={TODAY} y2="196" stroke={ACCENT} strokeDasharray="3 4" />
        <text x={TODAY} y="10" textAnchor="middle" className="code-mono" fontSize="9" fill={ACCENT}>
          TODAY
        </text>
        {lanes.map((l) => (
          <g key={l.name}>
            {/* lane rail */}
            <line x1="12" y1={l.y} x2="468" y2={l.y} stroke={LINE} />
            <text x="12" y={l.y - 9} className="code-mono" fontSize="10" fill={SOFT}>
              {l.name}
            </text>
            {/* due-date dots */}
            {l.dots?.map((d) => (
              <circle key={d.x} cx={d.x} cy={l.y} r="5.5" fill={d.c} />
            ))}
            {/* hard deadline — filled diamond */}
            {l.diamond && (
              <rect
                x={l.diamond - 5}
                y={l.y - 5}
                width="10"
                height="10"
                fill={DEADLINE}
                transform={`rotate(45 ${l.diamond} ${l.y})`}
              />
            )}
            {/* milestone — hollow diamond */}
            {l.milestone && (
              <rect
                x={l.milestone - 4}
                y={l.y - 4}
                width="8"
                height="8"
                fill="none"
                stroke={DEADLINE}
                strokeWidth="1.5"
                transform={`rotate(45 ${l.milestone} ${l.y})`}
              />
            )}
            {/* per-lane status label */}
            <text
              x={l.lx}
              y={l.y + 18}
              textAnchor="middle"
              className="code-mono"
              fontSize="8.5"
              fill={SOFT}
            >
              {l.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {[
          ["Overdue", OVERDUE],
          ["This week", SOON],
          ["On track", NORMAL],
          ["Deadline ◆ · milestone ◇", DEADLINE],
        ].map(([label, c]) => (
          <span key={label} className="flex items-center gap-2">
            <span className="inline-block h-[9px] w-[9px] rounded-full" style={{ background: c }} />
            <Mono className="text-[var(--color-ink-soft)]">{label}</Mono>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Core idea — set two things, everything else is computed (never stored).
   ──────────────────────────────────────────────────────────────────────── */
export function CadenceEngine() {
  return (
    <div className="w-full">
      <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1.1fr]">
        {/* the two inputs you set */}
        <div className="space-y-2">
          {[
            ["Last updated", "9 days ago"],
            ["Cadence", "every 2 weeks"],
          ].map(([k, v]) => (
            <div key={k} className="border border-[var(--color-line)] px-3 py-2.5">
              <Mono className="text-[var(--color-accent)]">You set</Mono>
              <div className="mt-1.5 flex items-baseline justify-between gap-3">
                <span className="text-[13px] text-[var(--color-ink-soft)]">{k}</span>
                <span className="text-[14px] font-medium tracking-tight">{v}</span>
              </div>
            </div>
          ))}
        </div>
        {/* arrow */}
        <div className="hidden items-center justify-center sm:flex">
          <svg viewBox="0 0 60 24" className="w-12" aria-hidden>
            <line x1="0" y1="12" x2="52" y2="12" stroke={LINE} />
            <path d="M52 12 l -8 -5 l 0 10 z" fill={INK} />
          </svg>
        </div>
        {/* computed outputs */}
        <div className="border border-[var(--color-ink)] p-4">
          <Mono className="text-[var(--color-ink-soft)]">Moderari computes</Mono>
          <div className="mt-3 space-y-2.5">
            {[
              ["Next due", "in 5 days", NORMAL],
              ["Status", "on track", NORMAL],
              ["Urgency", "low", SOFT],
            ].map(([k, v, c]) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <span className="text-[13px] text-[var(--color-ink-soft)]">{k}</span>
                <span className="flex items-center gap-2 text-[14px] font-medium tracking-tight">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: c }} />
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        <span className="code-mono text-[var(--color-accent)]">↻</span>{" "}
        Nothing on the right is stored — it&apos;s recomputed every time you open the app, so
        &ldquo;overdue&rdquo; is already correct when you cross midnight.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Triage — the whole portfolio sorted into three buckets, live counts.
   ──────────────────────────────────────────────────────────────────────── */
export function TriageBuckets() {
  const buckets = [
    { n: "3", label: "Overdue", c: OVERDUE, items: ["Weather app", "Invoice · Bolt", "Backup script"] },
    { n: "5", label: "This week", c: SOON, items: ["Client / Acme", "Newsletter", "App Store reply"] },
    { n: "12", label: "On track", c: NORMAL, items: ["Portfolio site", "Tax filing", "Domain renewal"] },
  ];
  return (
    <div className="grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-3">
      {buckets.map((b) => (
        <div key={b.label} className="border-b border-r border-[var(--color-line)] p-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: b.c }} />
            <span className="code-mono text-[18px] font-medium tabular-nums">{b.n}</span>
            <Mono className="text-[var(--color-ink-soft)]">{b.label}</Mono>
          </div>
          <div className="mt-3 space-y-1.5">
            {b.items.map((it) => (
              <div key={it} className="truncate text-[12px] text-[var(--color-ink-soft)]">
                {it}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Weekly Recap — bars of what you touched this week, surfaced for you.
   ──────────────────────────────────────────────────────────────────────── */
export function RecapObject() {
  const days = [
    { d: "M", v: 3 },
    { d: "T", v: 1 },
    { d: "W", v: 4 },
    { d: "T", v: 2 },
    { d: "F", v: 5 },
    { d: "S", v: 0 },
    { d: "S", v: 1 },
  ];
  const max = 5;
  return (
    <div className="w-full">
      <div className="border border-[var(--color-line)] p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-medium tracking-tight">This week</span>
          <Mono className="text-[var(--color-accent)]">16 updates · 4 projects</Mono>
        </div>
        <div className="mt-5 flex items-end justify-between gap-2" style={{ height: 90 }}>
          {days.map((day, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full"
                  style={{
                    height: `${(day.v / max) * 100}%`,
                    minHeight: day.v ? 4 : 1,
                    background: day.v ? NORMAL : LINE,
                  }}
                />
              </div>
              <Mono className="text-[var(--color-ink-soft)]">{day.d}</Mono>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        The app shows you the week before you report it — no export, no tallying by hand.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Review — items gone quiet, gathered so you decide on purpose.
   ──────────────────────────────────────────────────────────────────────── */
export function ReviewObject() {
  const rows = [
    { name: "Side blog", quiet: "untouched 6 weeks" },
    { name: "Prototype · v2", quiet: "review due" },
    { name: "Old landing page", quiet: "untouched 9 weeks" },
  ];
  return (
    <div className="w-full">
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between border border-[var(--color-line)] px-4 py-3"
          >
            <div>
              <div className="text-[14px] font-medium tracking-tight">{r.name}</div>
              <Mono className="text-[var(--color-ink-soft)]">{r.quiet}</Mono>
            </div>
            <div className="flex gap-1.5">
              <span className="border border-[var(--color-line)] px-2 py-1 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Keep
              </span>
              <span className="border border-[var(--color-line)] px-2 py-1 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Archive
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        Keep or pause a project because you chose to — not because it quietly slipped your mind.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Two progress modes — a cadence heatmap and a checklist ring.
   ──────────────────────────────────────────────────────────────────────── */
export function Heatmap() {
  // deterministic scatter, denser toward recent (right)
  const rows = 7;
  const cols = 16;
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const col = Math.floor(i / rows);
    const h = ((i * 2654435761) >>> 0) % 100;
    if (h < 6 + col * 5) return h % 3 === 0 ? 2 : 1;
    return 0;
  });
  return (
    <div
      className="grid w-full max-w-[240px] gap-[3px]"
      style={{ gridTemplateRows: `repeat(${rows}, 1fr)`, gridAutoFlow: "column", gridAutoColumns: "1fr" }}
      aria-hidden
    >
      {cells.map((v, i) => (
        <span
          key={i}
          className="rounded-[2px]"
          style={{
            aspectRatio: "1",
            background:
              v === 2
                ? NORMAL
                : v === 1
                  ? "color-mix(in srgb, var(--m-normal) 45%, var(--color-paper))"
                  : "color-mix(in srgb, var(--color-ink) 7%, transparent)",
          }}
        />
      ))}
    </div>
  );
}

export function ProgressRing({ percent = 62 }: { percent?: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg width="88" height="88" viewBox="0 0 80 80" aria-label={`${percent}% complete`}>
      <circle cx="40" cy="40" r={r} fill="none" stroke={LINE} strokeWidth="7" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke={NORMAL}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(percent / 100) * c} ${c}`}
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="45" textAnchor="middle" className="code-mono" fontSize="14" fill={INK}>
        {percent}%
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Recurring deadline — it rolls forward only when you mark it done.
   ──────────────────────────────────────────────────────────────────────── */
export function RecurringDeadline() {
  return (
    <div className="w-full">
      <svg viewBox="0 0 520 120" className="h-auto w-full" role="img" aria-label="A quarterly deadline rolls forward one quarter only when you mark it done.">
        <line x1="20" y1="70" x2="500" y2="70" stroke={LINE} />
        {[110, 260, 410].map((x, i) => (
          <g key={x}>
            <rect x={x - 6} y="64" width="12" height="12" fill={i === 0 ? OVERDUE : DEADLINE} transform={`rotate(45 ${x} 70)`} />
            <text x={x} y="98" textAnchor="middle" className="code-mono" fontSize="9" fill={SOFT}>
              {["Q1", "Q2", "Q3"][i]}
            </text>
          </g>
        ))}
        {/* mark-done arc from due → next */}
        <path d="M110 54 C 150 26, 220 26, 260 54" fill="none" stroke={ACCENT} strokeDasharray="4 4" />
        <path d="M260 54 l -9 -4 l 3 9 z" fill={ACCENT} />
        <text x="185" y="22" textAnchor="middle" className="code-mono" fontSize="9" fill={ACCENT}>
          MARK DONE
        </text>
      </svg>
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        A missed hard deadline never quietly disappears — it stays overdue (red) until you clear it.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Mac window chrome + built product-shot stand-ins. Monochrome + status
   colors, swappable for real PNGs later (no code change to the page).
   ──────────────────────────────────────────────────────────────────────── */
export function MacWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] drop-shadow-[0_12px_34px_rgba(0,0,0,0.10)]">
      <div className="flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-4 py-2.5">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="inline-block h-[9px] w-[9px] rounded-full border border-[var(--color-ink-soft)]/40" />
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

export function OverviewShot() {
  const groups = [
    { label: "Overdue", c: OVERDUE, rows: [["Weather app", "8d overdue"], ["Backup script", "3d overdue"]] },
    { label: "This week", c: SOON, rows: [["Client / Acme", "due Fri"], ["Newsletter", "due Sun"]] },
    { label: "On track", c: NORMAL, rows: [["Portfolio site", "in 9 days"], ["Tax filing", "in 22 days"]] },
  ];
  return (
    <MacWindow title="Moderari — Overview">
      <div className="grid sm:grid-cols-[140px_1fr]">
        {/* sidebar */}
        <div className="hidden flex-col gap-0.5 border-r border-[var(--color-line)] p-3 sm:flex">
          {["Today", "Overview", "Timeline", "Recap", "Review", "Archive"].map((item) => (
            <div
              key={item}
              className={`px-2.5 py-1.5 text-[12px] ${
                item === "Overview"
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "text-[var(--color-ink-soft)]"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="mt-auto border-t border-[var(--color-line)] pt-3">
            <Mono className="text-[var(--color-ink-soft)]">20 projects</Mono>
          </div>
        </div>
        {/* list */}
        <div className="flex flex-col gap-4 p-5">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.c }} />
                <Mono className="text-[var(--color-ink-soft)]">
                  {g.label} · {g.rows.length}
                </Mono>
              </div>
              <div className="mt-2 space-y-1.5">
                {g.rows.map(([name, meta]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-[var(--color-line)] pb-1.5"
                  >
                    <span className="text-[13px]">{name}</span>
                    <span className="code-mono text-[10px] tracking-[0.06em] text-[var(--color-ink-soft)]">
                      {meta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
}
