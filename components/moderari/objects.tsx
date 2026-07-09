// Built feature "objects" for the Moderari page — hairline SVG / HTML diagrams
// in the Instrument direction (near-monochrome, mono labels, flat, no
// shadow/gradient/emoji). Page chrome themes on the single green accent
// (--color-accent); the four Moderari *status* colors are functional product
// signal, scoped as --m-* vars on the page <main> and used only inside objects
// that depict app state (timeline dots, triage buckets, heatmap).
//
// Every object takes a `lang` prop and keeps its own en/ko labels inline, so
// the /moderari and /moderari/ko routes share one component tree.

import type { ReactNode } from "react";

export type Lang = "en" | "ko";

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
   against one "Today" line.
   ──────────────────────────────────────────────────────────────────────── */
export function HeroTimeline({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      today: "TODAY",
      lanes: ["Weather app", "Tax filing", "Client / Acme", "Newsletter"],
      labels: ["8d overdue", "deadline", "due Fri", "on track"],
      legend: ["Overdue", "This week", "On track", "Deadline ◆ · milestone ◇"],
    },
    ko: {
      today: "오늘",
      lanes: ["날씨 앱", "세금 신고", "Client / Acme", "뉴스레터"],
      labels: ["8일 지연", "마감", "금요일", "정상"],
      legend: ["지연", "이번 주", "정상", "마감 ◆ · 마일스톤 ◇"],
    },
  }[lang];
  const lanes = [
    { y: 34, name: t.lanes[0], dots: [{ x: 96, c: OVERDUE }], label: t.labels[0], lx: 96 },
    { y: 74, name: t.lanes[1], diamond: 250, label: t.labels[1], lx: 250 },
    { y: 114, name: t.lanes[2], dots: [{ x: 300, c: SOON }], milestone: 372, label: t.labels[2], lx: 300 },
    { y: 154, name: t.lanes[3], dots: [{ x: 430, c: NORMAL }], label: t.labels[3], lx: 430 },
  ];
  const TODAY = 232;
  const legendColors = [OVERDUE, SOON, NORMAL, DEADLINE];
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <svg viewBox="0 0 480 220" className="h-auto w-full" role="img" aria-label="Timeline of four projects, each on its own lane, read against today.">
        <line x1={TODAY} y1="14" x2={TODAY} y2="196" stroke={ACCENT} strokeDasharray="3 4" />
        <text x={TODAY} y="10" textAnchor="middle" className="code-mono" fontSize="9" fill={ACCENT}>
          {t.today}
        </text>
        {lanes.map((l) => (
          <g key={l.name}>
            <line x1="12" y1={l.y} x2="468" y2={l.y} stroke={LINE} />
            <text x="12" y={l.y - 9} className="code-mono" fontSize="10" fill={SOFT}>
              {l.name}
            </text>
            {l.dots?.map((d) => (
              <circle key={d.x} cx={d.x} cy={l.y} r="5.5" fill={d.c} />
            ))}
            {l.diamond && (
              <rect x={l.diamond - 5} y={l.y - 5} width="10" height="10" fill={DEADLINE} transform={`rotate(45 ${l.diamond} ${l.y})`} />
            )}
            {l.milestone && (
              <rect x={l.milestone - 4} y={l.y - 4} width="8" height="8" fill="none" stroke={DEADLINE} strokeWidth="1.5" transform={`rotate(45 ${l.milestone} ${l.y})`} />
            )}
            <text x={l.lx} y={l.y + 18} textAnchor="middle" className="code-mono" fontSize="8.5" fill={SOFT}>
              {l.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {t.legend.map((label, i) => (
          <span key={label} className="flex items-center gap-2">
            <span className="inline-block h-[9px] w-[9px] rounded-full" style={{ background: legendColors[i] }} />
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
export function CadenceEngine({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      youSet: "You set",
      inputs: [["Last updated", "9 days ago"], ["Cadence", "every 2 weeks"]],
      computes: "Moderari computes",
      outputs: [["Next due", "in 5 days"], ["Status", "on track"], ["Urgency", "low"]],
      caption: "Nothing on the right is stored — it's recomputed every time you open the app, so “overdue” is already correct when you cross midnight.",
    },
    ko: {
      youSet: "당신이 입력",
      inputs: [["마지막 업데이트", "9일 전"], ["주기", "2주마다"]],
      computes: "Moderari가 계산",
      outputs: [["다음 예정일", "5일 후"], ["상태", "정상"], ["긴급도", "낮음"]],
      caption: "오른쪽은 저장되지 않습니다 — 앱을 열 때마다 다시 계산되니, 자정을 넘겨도 '지연'이 이미 정확합니다.",
    },
  }[lang];
  const outColors = [NORMAL, NORMAL, SOFT];
  return (
    <div className="w-full">
      <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1.1fr]">
        <div className="space-y-2">
          {t.inputs.map(([k, v]) => (
            <div key={k} className="border border-[var(--color-line)] px-3 py-2.5">
              <Mono className="text-[var(--color-accent)]">{t.youSet}</Mono>
              <div className="mt-1.5 flex items-baseline justify-between gap-3">
                <span className="text-[13px] text-[var(--color-ink-soft)]">{k}</span>
                <span className="text-[14px] font-medium tracking-tight">{v}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden items-center justify-center sm:flex">
          <svg viewBox="0 0 60 24" className="w-12" aria-hidden>
            <line x1="0" y1="12" x2="52" y2="12" stroke={LINE} />
            <path d="M52 12 l -8 -5 l 0 10 z" fill={INK} />
          </svg>
        </div>
        <div className="border border-[var(--color-ink)] p-4">
          <Mono className="text-[var(--color-ink-soft)]">{t.computes}</Mono>
          <div className="mt-3 space-y-2.5">
            {t.outputs.map(([k, v], i) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <span className="text-[13px] text-[var(--color-ink-soft)]">{k}</span>
                <span className="flex items-center gap-2 text-[14px] font-medium tracking-tight">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: outColors[i] }} />
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
        <span className="code-mono text-[var(--color-accent)]">↻</span> {t.caption}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Triage — the whole portfolio sorted into three buckets, live counts.
   ──────────────────────────────────────────────────────────────────────── */
export function TriageBuckets({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      buckets: [
        { n: "3", label: "Overdue", c: OVERDUE, items: ["Weather app", "Invoice · Bolt", "Backup script"] },
        { n: "5", label: "This week", c: SOON, items: ["Client / Acme", "Newsletter", "App Store reply"] },
        { n: "12", label: "On track", c: NORMAL, items: ["Portfolio site", "Tax filing", "Domain renewal"] },
      ],
    },
    ko: {
      buckets: [
        { n: "3", label: "지연", c: OVERDUE, items: ["날씨 앱", "인보이스 · Bolt", "백업 스크립트"] },
        { n: "5", label: "이번 주", c: SOON, items: ["Client / Acme", "뉴스레터", "앱스토어 답변"] },
        { n: "12", label: "정상", c: NORMAL, items: ["포트폴리오 사이트", "세금 신고", "도메인 갱신"] },
      ],
    },
  }[lang];
  return (
    <div className="grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-3">
      {t.buckets.map((b) => (
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
export function RecapObject({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: { title: "This week", stat: "16 updates · 4 projects", days: ["M", "T", "W", "T", "F", "S", "S"], caption: "The app shows you the week before you report it — no export, no tallying by hand." },
    ko: { title: "이번 주", stat: "16회 업데이트 · 4개 프로젝트", days: ["월", "화", "수", "목", "금", "토", "일"], caption: "보고하기 전에 앱이 이번 주를 먼저 보여줍니다 — 내보내기도, 손으로 세는 일도 없이." },
  }[lang];
  const vals = [3, 1, 4, 2, 5, 0, 1];
  const max = 5;
  return (
    <div className="w-full">
      <div className="border border-[var(--color-line)] p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-medium tracking-tight">{t.title}</span>
          <Mono className="text-[var(--color-accent)]">{t.stat}</Mono>
        </div>
        <div className="mt-5 flex items-end justify-between gap-2" style={{ height: 90 }}>
          {vals.map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                <div className="w-full" style={{ height: `${(v / max) * 100}%`, minHeight: v ? 4 : 1, background: v ? NORMAL : LINE }} />
              </div>
              <Mono className="text-[var(--color-ink-soft)]">{t.days[i]}</Mono>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{t.caption}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Review — items gone quiet, gathered so you decide on purpose.
   ──────────────────────────────────────────────────────────────────────── */
export function ReviewObject({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      rows: [
        { name: "Side blog", quiet: "untouched 6 weeks" },
        { name: "Prototype · v2", quiet: "review due" },
        { name: "Old landing page", quiet: "untouched 9 weeks" },
      ],
      keep: "Keep",
      archive: "Archive",
      caption: "Keep or pause a project because you chose to — not because it quietly slipped your mind.",
    },
    ko: {
      rows: [
        { name: "사이드 블로그", quiet: "6주 방치" },
        { name: "프로토타입 · v2", quiet: "리뷰 도래" },
        { name: "옛 랜딩 페이지", quiet: "9주 방치" },
      ],
      keep: "유지",
      archive: "보관",
      caption: "조용히 잊혀서가 아니라, 당신이 선택했기에 유지하거나 멈추는 겁니다.",
    },
  }[lang];
  return (
    <div className="w-full">
      <div className="space-y-2">
        {t.rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between border border-[var(--color-line)] px-4 py-3">
            <div>
              <div className="text-[14px] font-medium tracking-tight">{r.name}</div>
              <Mono className="text-[var(--color-ink-soft)]">{r.quiet}</Mono>
            </div>
            <div className="flex gap-1.5">
              <span className="border border-[var(--color-line)] px-2 py-1 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                {t.keep}
              </span>
              <span className="border border-[var(--color-line)] px-2 py-1 code-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                {t.archive}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{t.caption}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Two progress modes — a cadence heatmap and a checklist ring.
   ──────────────────────────────────────────────────────────────────────── */
export function Heatmap() {
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
      <circle cx="40" cy="40" r={r} fill="none" stroke={NORMAL} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${(percent / 100) * c} ${c}`} transform="rotate(-90 40 40)" />
      <text x="40" y="45" textAnchor="middle" className="code-mono" fontSize="14" fill={INK}>
        {percent}%
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Recurring deadline — it rolls forward only when you mark it done.
   ──────────────────────────────────────────────────────────────────────── */
export function RecurringDeadline({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: { markDone: "MARK DONE", caption: "A missed hard deadline never quietly disappears — it stays overdue (red) until you clear it." },
    ko: { markDone: "완료 표시", caption: "놓친 하드 마감은 조용히 사라지지 않습니다 — 지울 때까지 지연(빨강)으로 남습니다." },
  }[lang];
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
        <path d="M110 54 C 150 26, 220 26, 260 54" fill="none" stroke={ACCENT} strokeDasharray="4 4" />
        <path d="M260 54 l -9 -4 l 3 9 z" fill={ACCENT} />
        <text x="185" y="22" textAnchor="middle" className="code-mono" fontSize="9" fill={ACCENT}>
          {t.markDone}
        </text>
      </svg>
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{t.caption}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Mac window chrome + built product-shot stand-in. Swappable for real PNGs.
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

export function OverviewShot({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      title: "Moderari — Overview",
      nav: ["Today", "Overview", "Timeline", "Recap", "Review", "Archive"],
      active: "Overview",
      count: "20 projects",
      groups: [
        { label: "Overdue", c: OVERDUE, rows: [["Weather app", "8d overdue"], ["Backup script", "3d overdue"]] },
        { label: "This week", c: SOON, rows: [["Client / Acme", "due Fri"], ["Newsletter", "due Sun"]] },
        { label: "On track", c: NORMAL, rows: [["Portfolio site", "in 9 days"], ["Tax filing", "in 22 days"]] },
      ],
    },
    ko: {
      title: "Moderari — 오버뷰",
      nav: ["오늘", "오버뷰", "타임라인", "회고", "리뷰", "보관함"],
      active: "오버뷰",
      count: "20개 프로젝트",
      groups: [
        { label: "지연", c: OVERDUE, rows: [["날씨 앱", "8일 지연"], ["백업 스크립트", "3일 지연"]] },
        { label: "이번 주", c: SOON, rows: [["Client / Acme", "금요일"], ["뉴스레터", "일요일"]] },
        { label: "정상", c: NORMAL, rows: [["포트폴리오 사이트", "9일 후"], ["세금 신고", "22일 후"]] },
      ],
    },
  }[lang];
  return (
    <MacWindow title={t.title}>
      <div className="grid sm:grid-cols-[140px_1fr]">
        <div className="hidden flex-col gap-0.5 border-r border-[var(--color-line)] p-3 sm:flex">
          {t.nav.map((item) => (
            <div
              key={item}
              className={`px-2.5 py-1.5 text-[12px] ${
                item === t.active ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : "text-[var(--color-ink-soft)]"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="mt-auto border-t border-[var(--color-line)] pt-3">
            <Mono className="text-[var(--color-ink-soft)]">{t.count}</Mono>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5">
          {t.groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.c }} />
                <Mono className="text-[var(--color-ink-soft)]">
                  {g.label} · {g.rows.length}
                </Mono>
              </div>
              <div className="mt-2 space-y-1.5">
                {g.rows.map(([name, meta]) => (
                  <div key={name} className="flex items-center justify-between border-b border-[var(--color-line)] pb-1.5">
                    <span className="text-[13px]">{name}</span>
                    <span className="code-mono text-[10px] tracking-[0.06em] text-[var(--color-ink-soft)]">{meta}</span>
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
