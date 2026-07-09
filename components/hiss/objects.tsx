// Hand-built diagrams for the HiSS marketing page. Each object is a flat SVG,
// no shadow-lift, no glow, no gradient text — the Instrument aesthetic. What
// makes them "HiSS" is that they mimic the K.O. II hardware motifs the app is
// built around: LED display grids, dot matrix, pixel counters, waveform bars.
//
// Palette:
// - stroke / labels: var(--color-ink) and var(--color-ink-soft)
// - accent (points that matter): var(--color-accent)  — HiSS orange
// - LED green kept as a hardware call-out (#39FF14 muted) only inside
//   simulated displays, never for chrome or type.

const LED = "#39FF14";
const LED_MUTED = "#8BB893";
const DISPLAY_BG = "#0A0A0A";

/* ─────────────────────────────────────────────────────────────
   HeroRecording — a dark device panel that reads as the app itself.
   Reduced waveform + the app's minimal STAMP/LABEL pill-button motif
   (rounded rects with tiny LED indicators) + baked-in metadata +
   transcript below. Static composition (no animation).
   ─────────────────────────────────────────────────────────── */
export function HeroRecording() {
  const waveform = [4, 6, 5, 8, 10, 9, 6, 8, 11, 10, 7, 5, 4, 6, 8, 5, 3, 5, 7, 5, 3];

  const stampButtons = [
    { label: "DATE", on: true },
    { label: "YEAR", on: true },
    { label: "TIME", on: true },
    { label: "LABEL", on: false },
  ];
  const labelButtons = [
    { char: "A", sub: "mood", on: false },
    { char: "B", sub: "idea", on: false },
    { char: "C", sub: "log", on: true },
    { char: "D", sub: "note", on: false },
  ];

  const CARD_BG = "#0F0F10";
  const BTN_BG = "#1E1E20";
  const BTN_BORDER = "#2A2A2C";
  const DIVIDER = "#2A2A2C";

  return (
    <svg
      viewBox="0 0 540 400"
      className="w-full max-w-[540px]"
      aria-hidden
    >
      {/* Dark card frame — reads as the app device */}
      <rect
        x="0.5" y="0.5" width="539" height="399"
        rx="14"
        fill={CARD_BG}
        stroke="var(--color-ink)"
      />

      {/* Top strip — filename + duration */}
      <circle cx="22" cy="24" r="4" fill="var(--color-accent)" />
      <text
        x="34" y="28"
        fill="#B8B8B4"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="0.08em"
      >
        REC_20260630_1547_A_LOG_Seoul_01.m4a
      </text>
      <text
        x="518" y="28" textAnchor="end"
        fill={LED} fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.08em"
      >
        0:30
      </text>

      {/* Compact waveform */}
      <g transform="translate(24, 46)">
        {waveform.map((h, i) => (
          <rect
            key={i}
            x={i * 24}
            y={16 - h}
            width="4"
            height={h * 2}
            fill={LED}
            opacity="0.85"
          />
        ))}
      </g>

      {/* STAMP header + buttons */}
      <text
        x="24" y="102"
        fill="#6A6A66" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.24em"
      >
        STAMP
      </text>
      {stampButtons.map((b, i) => {
        const x = 24 + i * 124;
        return (
          <g key={b.label}>
            <rect
              x={x} y={112}
              width="112" height="46" rx="8"
              fill={BTN_BG} stroke={BTN_BORDER}
            />
            {/* LED dot */}
            <circle
              cx={x + 10} cy={122}
              r="3"
              fill={b.on ? LED : "#2A2A2C"}
            />
            <text
              x={x + 56} y={143} textAnchor="middle"
              fill="#E0E0DC" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.14em"
            >
              {b.label}
            </text>
          </g>
        );
      })}

      {/* LABEL header + buttons */}
      <text
        x="24" y="192"
        fill="#6A6A66" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.24em"
      >
        LABEL
      </text>
      {labelButtons.map((b, i) => {
        const x = 24 + i * 124;
        return (
          <g key={b.char}>
            <rect
              x={x} y={202}
              width="112" height="46" rx="8"
              fill={BTN_BG} stroke={BTN_BORDER}
            />
            <circle
              cx={x + 10} cy={212}
              r="3"
              fill={b.on ? LED : "#2A2A2C"}
            />
            <text
              x={x + 56} y={228} textAnchor="middle"
              fill="#E0E0DC" fontFamily="var(--font-mono)" fontSize="14" letterSpacing="0.1em"
            >
              {b.char}
            </text>
            <text
              x={x + 56} y={241} textAnchor="middle"
              fill="#6A6A66" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em"
            >
              {b.sub}
            </text>
          </g>
        );
      })}

      {/* Divider */}
      <line
        x1="24" y1="278" x2="516" y2="278"
        stroke={DIVIDER}
      />

      {/* TRANSCRIPT */}
      <text
        x="24" y="302"
        fill="#6A6A66" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.24em"
      >
        TRANSCRIPT
      </text>
      {/* LANG chip */}
      <rect
        x="440" y="288"
        width="76" height="20"
        fill="var(--color-accent)"
      />
      <text
        x="478" y="302" textAnchor="middle"
        fill="var(--color-paper)"
        fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.14em"
      >
        LANG · EN
      </text>
      <text x="24" y="326" fill="#E0E0DC" fontFamily="var(--font-sans)" fontSize="14">
        {'"Voice memo test — the stamp bakes the'}
      </text>
      <text x="24" y="346" fill="#E0E0DC" fontFamily="var(--font-sans)" fontSize="14">
        date, time, and label straight into the file,
      </text>
      <text x="24" y="366" fill="#E0E0DC" fontFamily="var(--font-sans)" fontSize="14">
        then Whisper writes the transcript."
      </text>
    </svg>
  );
}

/* Kept as a fallback in case we want the K.O. II display again later. */
export function HeroDevice() {
  const heights = [
    3, 5, 4, 7, 9, 12, 10, 8, 11, 14, 13, 10,
    6, 4, 7, 9, 11, 8, 6, 5, 4, 3, 2, 2,
  ];
  const cell = 12;
  const gap = 6;
  const cols = heights.length;
  const rows = 15;
  return (
    <svg
      viewBox={`0 0 ${cols * (cell + gap) + 40} 320`}
      className="w-full max-w-[520px]"
      aria-hidden
    >
      <rect
        x="0.5" y="0.5"
        width={cols * (cell + gap) + 39} height="319" rx="14"
        fill={DISPLAY_BG} stroke="var(--color-ink)"
      />
      <text
        x={cols * (cell + gap) + 20} y="34" textAnchor="end"
        fill={LED} fontFamily="var(--font-mono)" fontSize="18" letterSpacing="0.08em"
      >00:30</text>
      {heights.map((h, i) => (
        <g key={i}>
          {Array.from({ length: rows }).map((_, r) => {
            const active = rows - r <= h;
            return (
              <rect
                key={r}
                x={20 + i * (cell + gap)}
                y={60 + r * (cell + gap) - 4}
                width={cell} height={cell - 2}
                fill={active ? LED : "transparent"}
                stroke={LED_MUTED}
                strokeOpacity={active ? "0" : "0.28"}
                strokeWidth="0.6"
              />
            );
          })}
        </g>
      ))}
      <text
        x="20" y="308"
        fill={LED_MUTED} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.2em"
      >REC · A · LOG · 22 KHZ · 32 KBPS</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   StampFlow — REC → (TTS + MIC in parallel) → file → transcript
   ─────────────────────────────────────────────────────────── */
export function StampFlow() {
  return (
    <svg viewBox="0 0 620 280" className="w-full max-w-[620px]" aria-hidden>
      {/* REC circle */}
      <circle cx="40" cy="140" r="30" fill="var(--color-accent)" stroke="var(--color-ink)" />
      <text
        x="40" y="146" textAnchor="middle"
        fill="var(--color-paper)"
        fontFamily="var(--font-mono)" fontSize="13" fontWeight="600" letterSpacing="0.12em"
      >
        REC
      </text>

      {/* TTS lane */}
      <rect x="120" y="60" width="220" height="56" fill="none" stroke="var(--color-ink)" />
      <text
        x="132" y="80"
        fill="var(--color-ink-soft)"
        fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.14em"
      >
        TTS STAMP
      </text>
      <text
        x="132" y="102"
        fill="var(--color-ink)"
        fontFamily="var(--font-sans)" fontSize="13"
      >
        June 30 · 2026 · 3:47 PM · LOG
      </text>

      {/* Mic lane */}
      <rect x="120" y="164" width="220" height="56" fill="none" stroke="var(--color-ink)" />
      <text
        x="132" y="184"
        fill="var(--color-ink-soft)"
        fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.14em"
      >
        MIC
      </text>
      {[3, 6, 4, 8, 10, 12, 9, 7, 5, 8, 11, 6, 4, 3, 5, 7, 5, 3].map((h, i) => (
        <rect
          key={i}
          x={132 + i * 10}
          y={214 - h}
          width="6"
          height={h}
          fill="var(--color-ink-soft)"
        />
      ))}

      {/* Merge fan-in from REC */}
      <path
        d="M 70 140 L 116 88 M 70 140 L 116 192"
        stroke="var(--color-ink)" strokeWidth="1.2" fill="none"
      />
      {/* Fan-out to merged file */}
      <path
        d="M 344 88 L 388 132 M 344 192 L 388 148"
        stroke="var(--color-ink)" strokeWidth="1.2" fill="none"
      />

      {/* .m4a file */}
      <rect x="390" y="112" width="112" height="56" fill="none" stroke="var(--color-ink)" />
      <text
        x="446" y="136" textAnchor="middle"
        fill="var(--color-ink)"
        fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.06em"
      >
        REC_....m4a
      </text>
      <text
        x="446" y="154" textAnchor="middle"
        fill="var(--color-ink-soft)"
        fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.1em"
      >
        ≈ 140 KB
      </text>

      {/* Arrow to transcript */}
      <path
        d="M 506 140 L 526 140"
        stroke="var(--color-ink)" strokeWidth="1.2" fill="none"
        markerEnd=""
      />
      <path
        d="M 522 135 L 528 140 L 522 145"
        stroke="var(--color-ink)" strokeWidth="1.2" fill="none"
      />

      {/* Transcript block */}
      <rect x="528" y="88" width="88" height="104" fill="none" stroke="var(--color-ink)" />
      <text
        x="540" y="106"
        fill="var(--color-ink-soft)"
        fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.18em"
      >
        TEXT
      </text>
      {/* Simulated transcript lines (short dashes) */}
      {[124, 138, 152, 166, 180].map((y, i) => (
        <rect
          key={y}
          x="540"
          y={y}
          width={i === 4 ? 40 : 66}
          height="4"
          fill="var(--color-ink)"
          opacity="0.75"
        />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   TranscribeQuality — audio → text in three languages,
   showing that on-device Whisper actually produces good output.
   ─────────────────────────────────────────────────────────── */
export function TranscribeQuality() {
  const rows = [
    {
      lang: "EN",
      text: '"Meeting notes for the voice pipeline design review."',
    },
    {
      lang: "KO",
      text: '"회의 노트 — 보이스 파이프라인 디자인 리뷰."',
    },
    {
      lang: "JA",
      text: '"会議メモ — 音声パイプラインの設計レビュー。"',
    },
  ];
  return (
    <div className="border-t border-l border-[var(--color-line)]">
      {rows.map((r) => (
        <div
          key={r.lang}
          className="grid grid-cols-[auto_1fr] items-center gap-5 border-b border-r border-[var(--color-line)] px-6 py-5"
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-grid h-7 w-9 place-items-center border border-[var(--color-accent)]"
            >
              <span className="code-mono text-[11px] tracking-[0.1em] text-[var(--color-ink)]">
                {r.lang}
              </span>
            </span>
            {/* Mini "input" waveform */}
            <svg width="52" height="18" viewBox="0 0 52 18" aria-hidden>
              {[3, 6, 4, 8, 10, 7, 5, 8, 11, 6, 4, 3].map((h, i) => (
                <rect
                  key={i}
                  x={i * 4.4}
                  y={9 - h / 2}
                  width="2"
                  height={h}
                  fill="var(--color-ink-soft)"
                />
              ))}
            </svg>
          </div>
          <p className="text-[15px] leading-[1.5] text-[var(--color-ink)]">
            {r.text}
          </p>
        </div>
      ))}
      <div className="border-b border-r border-[var(--color-line)] px-6 py-3">
        <p className="code-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
          Whisper · on-device · no network call
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   LanguageMatrix — TTS × Transcribe crossed with 4 languages
   ─────────────────────────────────────────────────────────── */
export function LanguageMatrix() {
  const langs = ["English", "Korean", "Japanese", "Chinese"];
  const cols = ["TTS Stamp", "Transcription"];
  return (
    <svg viewBox="0 0 440 240" className="w-full max-w-[440px]" aria-hidden>
      {/* Column headers */}
      {cols.map((c, i) => (
        <text
          key={c}
          x={200 + i * 100}
          y="18"
          textAnchor="middle"
          fill="var(--color-ink-soft)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.14em"
        >
          {c.toUpperCase()}
        </text>
      ))}
      {/* Grid */}
      {langs.map((lang, r) => {
        const y = 40 + r * 44;
        return (
          <g key={lang}>
            <text
              x="0"
              y={y + 22}
              fill="var(--color-ink)"
              fontFamily="var(--font-sans)"
              fontSize="14"
              fontWeight="500"
            >
              {lang}
            </text>
            {cols.map((_, c) => (
              <g key={c}>
                <rect
                  x={160 + c * 100}
                  y={y}
                  width="80"
                  height="34"
                  fill="none"
                  stroke="var(--color-line)"
                />
                <circle
                  cx={160 + c * 100 + 40}
                  cy={y + 17}
                  r="6"
                  fill="var(--color-accent)"
                />
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   ExportGrid — 4 export formats as a spec block
   ─────────────────────────────────────────────────────────── */
export function ExportGrid() {
  const formats = [
    { ext: ".m4a", label: "Audio", body: "The original recording, unchanged." },
    { ext: ".txt", label: "Plain text", body: "Human-readable transcript + meta." },
    { ext: ".md", label: "Markdown", body: "Obsidian / Bear / Notion, with tags." },
    { ext: ".csv", label: "Spreadsheet", body: "Numbers · Excel · databases." },
  ];
  return (
    <div className="grid border-t border-l border-[var(--color-line)] sm:grid-cols-2">
      {formats.map((f) => (
        <div
          key={f.ext}
          className="border-b border-r border-[var(--color-line)] p-6"
        >
          <div className="code-mono text-[13px] text-[var(--color-accent)]">
            {f.ext}
          </div>
          <div className="mt-2 text-[17px] font-medium tracking-tight">
            {f.label}
          </div>
          <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
            {f.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PipelineDiagram — the recording → save → transcribe loop
   ─────────────────────────────────────────────────────────── */
export function PipelineDiagram() {
  const steps = [
    { n: "01", t: "REC", b: "Mic + TTS stamp start in parallel." },
    { n: "02", t: "Merge", b: "TTS head + mic tail → single PCM." },
    { n: "03", t: "AAC", b: "22 kHz mono, 32 kbps. ≈ 140 KB / 30 s." },
    { n: "04", t: "Transcribe", b: "Whisper on-device (optional)." },
  ];
  return (
    <div className="grid border-t border-l border-[var(--color-line)] sm:grid-cols-4">
      {steps.map((s) => (
        <div
          key={s.n}
          className="border-b border-r border-[var(--color-line)] p-6"
        >
          <div className="code-mono text-[13px] text-[var(--color-accent)]">
            {s.n}
          </div>
          <div className="mt-3 text-[18px] font-medium tracking-tight">
            {s.t}
          </div>
          <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">
            {s.b}
          </p>
        </div>
      ))}
    </div>
  );
}
