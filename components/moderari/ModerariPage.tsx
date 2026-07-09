import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { company } from "../../content/company";
import { Kicker } from "../snap/Kicker";
import {
  HeroTimeline,
  CadenceEngine,
  TriageBuckets,
  RecapObject,
  ReviewObject,
  Heatmap,
  ProgressRing,
  RecurringDeadline,
  OverviewShot,
  type Lang,
} from "./objects";

// Shared bespoke Moderari page, rendered by /moderari (en) and /moderari/ko.
// Chrome themes on a single green accent; the four Moderari status colors are
// functional product signal, scoped as --m-* and used only inside objects.
const brand = {
  "--color-accent": "#1e6e63",
  "--color-accent-deep": "#155248",
  "--m-overdue": "#bf4a32",
  "--m-soon": "#c68a2a",
  "--m-normal": "#3e9070",
  "--m-deadline": "#3e7cb1",
} as CSSProperties;

/* All page prose, keyed by language. Object labels live inside each object. */
const COPY = {
  en: {
    buy: "Buy",
    heroKicker: "Portfolio management · macOS + iOS",
    heroTitleA: "Every project,",
    heroTitleB: "on its own clock.",
    heroSub:
      "Moderari keeps every project you run — apps, side businesses, clients — on its own update cadence. Open it and know in ten seconds what's overdue, what's due this week, and what can safely wait.",
    ctaBuy: "Buy for $4.99",
    ctaHow: "How it works",
    spec: ["macOS + iOS native", "Offline-first", "No account", "One-time purchase", "iCloud sync"],
    appKicker: "The app",
    appTitle: "Grey until something needs you.",
    appIntro:
      "Everything grouped by status — overdue, due this week, on track — with a live count in each header. Calm by default; color only where it's a signal.",
    gapKicker: "The gap",
    gapTitle: "The tools you tried aren't built for this.",
    gapIntro:
      "You're not running one big project with a team. You're running many small ones, each on a different rhythm — a weekly app update here, a quarterly filing there, a client every two weeks. The hard part was never a single deadline. It's keeping twenty different clocks in your head at once.",
    gapCards: [
      { t: "To-do apps", b: "Flat lists of tasks. They don't tell you which project is quietly drifting out of rhythm." },
      { t: "Kanban / Gantt", b: "Built for one team project with dependencies — not a portfolio of many, each on its own clock." },
      { t: "Calendars", b: "Show fixed dates, not “it's been too long since I touched this.” Cadence is the whole point." },
    ],
    coreKicker: "The core idea",
    coreTitle: "Tell it the rhythm. It does the math.",
    coreIntro:
      "For each project you set just two things — when you last touched it, and how often it needs attention. Moderari computes the rest: the next due date, whether it's overdue, how urgent it is, when it's time for a review. Nothing is tracked by hand, so nothing goes stale.",
    featKicker: "What it does",
    featTitle: "A portfolio view nothing else gives you.",
    featIntro:
      "The same data, seen through the lens each moment needs — the day's agenda, the whole timeline, the week in review.",
    features: [
      { t: "Today — start here", b: "Just what's overdue or due today, most urgent first. Handle one and you're done in thirty seconds. When nothing's pressing, it simply reads 'all clear' — no forced ritual, glance and close." },
      { t: "Timeline — the big picture", b: "Every project on one fixed, scrollable time axis. Due dates as colored dots, hard deadlines as filled diamonds, milestones as hollow ones. Scan twenty projects — and their whole journeys — in a single glance." },
      { t: "Weekly Recap — your Monday ritual", b: "The app shows you what changed this week — how many updates, across which projects — before you export anything. A review ritual that isn't a chore." },
      { t: "Review — decide on purpose", b: "Surfaces projects that have gone too long untouched, so you decide keep / pause / archive deliberately — instead of letting them fade by neglect." },
    ],
    progKicker: "Progress",
    progTitle: "A rhythm, or a finish line.",
    progIntro:
      "Pick whichever fits each project. Both draw only the computed value — never a number you maintain by hand.",
    cadenceT: "Cadence",
    cadenceB: "For things you tend to on a regular rhythm. A mini heatmap shows recent activity; one tap of “Mark updated” keeps it going and rolls the next date forward.",
    checklistT: "Checklist",
    checklistB: "For work with a finish line. Check items off and the ring fills to match — completion you can read at a glance, computed from the list.",
    howKicker: "How it works",
    howTitle: "One loop, every day.",
    howIntro: "The two inputs carry the everyday. This is the whole rhythm of using it — nothing to configure.",
    steps: [
      ["Open Today", "Just what's overdue or due today. Handle one, and you're done."],
      ["Mark updated", "Once you've dealt with something, one tap rolls the next date forward. Add a line to your activity log."],
      ["Glance at Recap", "Once a week, see what you moved and where things stand — surfaced for you."],
      ["Tidy with Review", "Now and then, keep or pause the projects that have gone quiet."],
    ],
    beyondKicker: "Beyond the basics",
    beyondTitle: "More when you need it. None of it required.",
    beyondIntro: "The two inputs cover the everyday. When a project is more involved, these are waiting.",
    beyondCards: [
      ["Importance, not just urgency", "Pin what matters even when it isn't pressing — pinned items rise to their own section, so “important but not urgent” never gets buried."],
      ["One project, many dates", "Add milestones — Draft, Review, Final — each with its own date, apart from the project's rhythm. They line up as hollow diamonds on the Timeline."],
      ["Calendar & Reminders", "Push an item's next date to Calendar or Reminders, in a dedicated “Moderari” list, carrying its notes and tags. Tap it there to deep-link back."],
      ["An honest record", "Backdate a project already in flight; skip a cycle you're deliberately passing without faking the heatmap. A streak counts the cycles you've kept."],
      ["Flat tags, light nest", "Tag freely — no folder trees. Nest with a slash when you want a little structure: pick Client and every Client/Acme comes with it."],
      ["Handle many at once", "Multi-select in Overview, then Pin, Mark updated, or Archive the whole set in one move — the weekly tidy-up."],
    ],
    recurT: "Deadlines that come back",
    recurB: "Quarterly taxes, annual renewals. Turn on a deadline's repeat, and one “Mark done” rolls it to the next occurrence — only when it's actually due.",
    dataKicker: "Your data",
    dataTitle: "Everything stays on your devices.",
    dataBody:
      "Projects live in local storage and sync through your own iCloud — no account to make, no Moderari server holding your data. Export any project, or your whole portfolio, to Markdown, PDF, or calendar (.ics) anytime. Leaving is always an option, which is why you won't want to.",
    buyKicker: "Buy once",
    buyTitle: "Stop holding twenty clocks in your head.",
    buyBody:
      "One universal purchase for Mac, iPhone, and iPad. No subscription, no servers — which is exactly why there's no monthly bill to pass to you.",
    buyOneTime: "One-time",
    buyPrice: "$4.99 · App Store",
    buyUniversal: "Universal",
    buyRequires: "Requires",
    buyReqVal: "macOS + iOS",
    buySilicon: "Apple silicon",
    buyFine: "No subscription · no account · your data exports anytime",
    footTag: "Cadence-based portfolio management",
    footLatin: "Moderari — Latin, “to guide.”",
  },
  ko: {
    buy: "구매",
    heroKicker: "포트폴리오 관리 · macOS + iOS",
    heroTitleA: "프로젝트마다,",
    heroTitleB: "저마다의 리듬으로.",
    heroSub:
      "여러 프로젝트—앱, 사이드 비즈니스, 클라이언트—를 저마다의 업데이트 주기로 관리합니다. 열자마자 10초 안에 무엇이 지연됐고, 이번 주에 챙겨야 하고, 미뤄도 되는지 파악하세요.",
    ctaBuy: "$4.99에 구매",
    ctaHow: "작동 방식",
    spec: ["macOS + iOS 네이티브", "오프라인 우선", "계정 없음", "원타임 구매", "iCloud 동기화"],
    appKicker: "앱",
    appTitle: "필요할 때만 색이 켜집니다.",
    appIntro:
      "모든 항목을 상태별로—지연·이번 주·정상—묶고, 헤더마다 실시간 개수를 보여줍니다. 기본은 차분하게, 색은 신호가 필요한 곳에만.",
    gapKicker: "빈틈",
    gapTitle: "써본 도구들은 이 일을 위해 만들어지지 않았습니다.",
    gapIntro:
      "팀과 함께 하나의 큰 프로젝트를 하는 게 아닙니다. 저마다 리듬이 다른 여러 작은 프로젝트를 굴리죠—주간 앱 업데이트, 분기 세금 신고, 격주로 챙기는 클라이언트. 어려운 건 마감 하나가 아니라, 스무 개의 서로 다른 시계를 동시에 머릿속에 이고 있는 겁니다.",
    gapCards: [
      { t: "할 일 앱", b: "평평한 할 일 목록. 어떤 프로젝트가 조용히 리듬에서 벗어나는지는 알려주지 않습니다." },
      { t: "칸반 / 간트", b: "의존 관계가 있는 하나의 팀 프로젝트용이지, 저마다의 주기를 가진 여러 개의 포트폴리오용이 아닙니다." },
      { t: "캘린더", b: "고정된 날짜만 보여줄 뿐, '이거 손댄 지 너무 오래됐다'는 못 보여줍니다. 핵심은 주기인데 말이죠." },
    ],
    coreKicker: "핵심 아이디어",
    coreTitle: "리듬만 알려주면, 계산은 맡기세요.",
    coreIntro:
      "프로젝트마다 딱 두 가지만 정하면 됩니다—마지막으로 손댄 때와, 얼마나 자주 챙겨야 하는지. 다음 예정일, 지연 여부, 긴급도, 리뷰 시점은 전부 Moderari가 계산합니다. 손으로 추적하는 게 없으니, 낡을 것도 없습니다.",
    featKicker: "무엇을 하나",
    featTitle: "다른 어디에도 없는 포트폴리오 뷰.",
    featIntro: "같은 데이터를, 순간마다 필요한 렌즈로—오늘의 할 일, 전체 타임라인, 이번 주 회고.",
    features: [
      { t: "오늘 — 여기서 시작", b: "지연됐거나 오늘 예정인 것만, 긴급한 순서로. 하나 처리하면 30초면 끝. 급한 게 없으면 그냥 '오늘은 여유롭습니다'—강제 의식 없이, 훑고 닫으면 됩니다." },
      { t: "타임라인 — 큰 그림", b: "모든 프로젝트를 하나의 고정된 시간축에 올립니다. 예정일은 색 점, 하드 마감은 채운 다이아, 마일스톤은 빈 다이아. 스무 개 프로젝트의 여정 전체를 한눈에 훑으세요." },
      { t: "주간 회고 — 월요일의 리추얼", b: "이번 주에 무엇이 바뀌었는지—몇 번 업데이트했고 어떤 프로젝트였는지—앱이 먼저 보여줍니다. 내보낼 필요도 없이. 부담스럽지 않은 회고 리추얼." },
      { t: "리뷰 — 의식적으로 결정", b: "너무 오래 손대지 않은 프로젝트를 모아 보여줍니다. 방치로 흐지부지되게 두지 말고, 유지·보류·보관을 의식적으로 결정하세요." },
    ],
    progKicker: "진척",
    progTitle: "리듬, 아니면 결승선.",
    progIntro: "프로젝트마다 맞는 쪽으로. 둘 다 계산된 값만 그립니다—손으로 관리하는 숫자는 없습니다.",
    cadenceT: "주기 (Cadence)",
    cadenceB: "일정한 리듬으로 챙기는 것들에. 미니 히트맵이 최근 활동을 보여주고, '업데이트함' 한 번이면 다음 날짜가 앞으로 굴러갑니다.",
    checklistT: "체크리스트",
    checklistB: "결승선이 있는 일에. 항목을 체크하면 링이 채워집니다—목록에서 계산된 완료율을 한눈에.",
    howKicker: "작동 방식",
    howTitle: "매일, 하나의 루프.",
    howIntro: "두 입력이 일상을 다 감당합니다. 이게 사용의 전부—설정할 것도 없습니다.",
    steps: [
      ["오늘 열기", "지연됐거나 오늘 예정인 것만. 하나 처리하면 끝."],
      ["업데이트함 누르기", "처리했으면 한 번 눌러 다음 날짜를 앞으로. 활동 로그에 한 줄 남겨도 좋습니다."],
      ["회고 훑기", "주 1회, 무엇을 움직였고 어디쯤인지—앱이 알아서 보여줍니다."],
      ["리뷰로 정리", "가끔, 조용해진 프로젝트를 유지할지 멈출지."],
    ],
    beyondKicker: "기본 그 너머",
    beyondTitle: "필요할 때 더. 어느 것도 필수는 아닙니다.",
    beyondIntro: "두 입력이 일상을 덮습니다. 프로젝트가 더 복잡해지면, 이것들이 기다리고 있습니다.",
    beyondCards: [
      ["긴급함만이 아니라, 중요함", "급하지 않아도 중요한 건 핀으로. 핀한 항목은 맨 위 전용 섹션으로 올라가, '중요하지만 급하지 않은' 것이 묻히지 않습니다."],
      ["한 프로젝트, 여러 날짜", "마일스톤을 더하세요—초안·검토·최종—각자의 날짜로, 프로젝트 리듬과 별개로. 타임라인엔 빈 다이아로 늘어섭니다."],
      ["캘린더 & 미리 알림", "항목의 다음 날짜를 캘린더나 미리 알림으로—전용 'Moderari' 목록에, 메모와 태그까지. 거기서 탭하면 앱으로 딥링크됩니다."],
      ["정직한 기록", "이미 진행 중인 프로젝트는 실제 날짜로 소급 입력. 일부러 건너뛰는 주기는 히트맵을 속이지 않고 스킵. 스트릭이 연속으로 지킨 주기를 셉니다."],
      ["평평한 태그, 가벼운 중첩", "자유롭게 태그—폴더 트리는 없습니다. 살짝 구조가 필요하면 슬래시로 중첩: Client를 고르면 Client/Acme가 전부 따라옵니다."],
      ["여러 개를 한 번에", "오버뷰에서 다중 선택 후, 핀·업데이트·보관을 통째로 한 번에—주간 정리용."],
    ],
    recurT: "돌아오는 마감",
    recurB: "분기 세금, 연간 갱신. 마감의 반복을 켜면, '완료' 한 번으로 다음 회차로 굴러갑니다—실제로 도래했을 때만.",
    dataKicker: "내 데이터",
    dataTitle: "모든 것은 내 기기에 머뭅니다.",
    dataBody:
      "프로젝트는 로컬에 저장되고 내 iCloud로 동기화됩니다—만들 계정도, 데이터를 쥔 Moderari 서버도 없습니다. 프로젝트 하나든 포트폴리오 전체든 언제든 Markdown·PDF·캘린더(.ics)로 내보내세요. 떠나는 건 늘 열려 있고, 그래서 떠나고 싶지 않을 겁니다.",
    buyKicker: "한 번 구매",
    buyTitle: "스무 개의 시계를 머릿속에 이고 있지 마세요.",
    buyBody:
      "Mac·iPhone·iPad를 아우르는 한 번의 구매. 구독도, 서버도 없습니다—그래서 당신에게 넘길 월 청구서도 없습니다.",
    buyOneTime: "원타임",
    buyPrice: "$4.99 · App Store",
    buyUniversal: "유니버설",
    buyRequires: "요구 사양",
    buyReqVal: "macOS + iOS",
    buySilicon: "Apple Silicon",
    buyFine: "구독 없음 · 계정 없음 · 데이터는 언제든 내보내기",
    footTag: "주기 기반 포트폴리오 관리",
    footLatin: "Moderari — 라틴어로 '이끌다.'",
  },
} as const;

function ModerariMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/moderari/moderari-icon.png"
      alt="Moderari"
      width={size}
      height={size}
      quality={90}
      className="rounded-[6px] border border-[var(--color-line)]"
      style={{ width: size, height: size }}
    />
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      Moderari<span className="text-[var(--color-accent)]">.</span>
    </span>
  );
}

/* EN | KO switch — links to the sibling route, current locale emphasized. */
function LangSwitch({ lang }: { lang: Lang }) {
  const opts: { code: Lang; href: string; label: string }[] = [
    { code: "en", href: "/moderari", label: "EN" },
    { code: "ko", href: "/moderari/ko", label: "KO" },
  ];
  return (
    <div className="flex items-center gap-1.5 code-mono text-[11px] uppercase tracking-[0.1em]">
      {opts.map((o, i) => (
        <span key={o.code} className="flex items-center gap-1.5">
          {o.code === lang ? (
            <span className="text-[var(--color-ink)]">{o.label}</span>
          ) : (
            <Link href={o.href} className="text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]">
              {o.label}
            </Link>
          )}
          {i === 0 && <span className="text-[var(--color-line)]">/</span>}
        </span>
      ))}
    </div>
  );
}

function SectionHeader({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">{title}</h2>
      {intro && <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">{intro}</p>}
    </div>
  );
}

function FeatureRow({
  index,
  title,
  body,
  object,
  flip = false,
}: {
  index: string;
  title: string;
  body: string;
  object: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 border-b border-[var(--color-line)] py-14 sm:grid-cols-2 sm:gap-14">
      <div className={flip ? "sm:order-2" : ""}>
        <div className="code-mono text-[13px] text-[var(--color-accent)]">{index}</div>
        <h3 className="mt-3 text-[22px] font-medium tracking-tight sm:text-[24px]">{title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">{body}</p>
      </div>
      <div className={flip ? "sm:order-1" : ""}>{object}</div>
    </div>
  );
}

export function ModerariPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <main className="min-h-screen" style={brand}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={lang === "ko" ? "/moderari/ko" : "/moderari"} className="flex items-center gap-2.5">
            <ModerariMark />
            <Wordmark className="text-[15px] font-medium tracking-tight" />
          </Link>
          <div className="flex items-center gap-4">
            <LangSwitch lang={lang} />
            <a
              href="#buy"
              className="rounded-md border border-[var(--color-ink)] px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              {c.buy}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--color-line)] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Kicker>{c.heroKicker}</Kicker>
              <h1 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[54px] lg:text-[60px]">
                {c.heroTitleA}
                <br />
                <span className="text-[var(--color-accent)]">{c.heroTitleB}</span>
              </h1>
              <p className="mt-7 max-w-md text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[19px]">
                {c.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-[var(--color-ink)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-paper)] transition hover:brightness-125">
                  {c.ctaBuy}
                </a>
                <a href="#how" className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-5 py-3 code-mono text-[13px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)] transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
                  {c.ctaHow}
                </a>
              </div>
            </div>
            <div className="lg:pl-4">
              <HeroTimeline lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:justify-between">
          {c.spec.map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              {s}
              {i < arr.length - 1 && <span className="hidden text-[var(--color-line)] sm:inline">/</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Product shot */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>{c.appKicker}</Kicker>
              <h2 className="mt-5 text-[26px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[32px]">{c.appTitle}</h2>
            </div>
            <p className="max-w-xs text-[14px] leading-[1.55] text-[var(--color-ink-soft)]">{c.appIntro}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <OverviewShot lang={lang} />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.gapKicker} title={c.gapTitle} intro={c.gapIntro} />
          <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
            {c.gapCards.map((card, i) => (
              <div key={card.t} className="border-b border-r border-[var(--color-line)] p-8">
                <div className="code-mono text-[13px] text-[var(--color-accent)]">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 text-[18px] font-medium tracking-tight">{card.t}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">{card.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core idea */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.coreKicker} title={c.coreTitle} intro={c.coreIntro} />
          <div className="mt-12">
            <CadenceEngine lang={lang} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.featKicker} title={c.featTitle} intro={c.featIntro} />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-6xl border-t border-[var(--color-line)]">
          <FeatureRow index="01" title={c.features[0].t} body={c.features[0].b} object={<TriageBuckets lang={lang} />} />
          <FeatureRow index="02" title={c.features[1].t} body={c.features[1].b} object={<HeroTimeline lang={lang} />} flip />
          <FeatureRow index="03" title={c.features[2].t} body={c.features[2].b} object={<RecapObject lang={lang} />} />
          <FeatureRow index="04" title={c.features[3].t} body={c.features[3].b} object={<ReviewObject lang={lang} />} flip />
        </div>
      </section>

      {/* Progress modes */}
      <section className="border-b border-t border-[var(--color-line)] bg-[var(--color-paper-soft)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.progKicker} title={c.progTitle} intro={c.progIntro} />
          <div className="mt-12 grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <div className="border-b border-r border-[var(--color-line)] p-8">
              <div className="flex items-baseline gap-3">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">01</span>
                <h3 className="text-[20px] font-medium tracking-tight">{c.cadenceT}</h3>
              </div>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">{c.cadenceB}</p>
              <div className="mt-6">
                <Heatmap />
              </div>
            </div>
            <div className="border-b border-r border-[var(--color-line)] p-8">
              <div className="flex items-baseline gap-3">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">02</span>
                <h3 className="text-[20px] font-medium tracking-tight">{c.checklistT}</h3>
              </div>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-[var(--color-ink-soft)]">{c.checklistB}</p>
              <div className="mt-6">
                <ProgressRing percent={62} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.howKicker} title={c.howTitle} intro={c.howIntro} />
          <div className="mt-12 grid gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map(([t, b], i) => (
              <div key={t} className="border-b border-r border-[var(--color-line)] p-6">
                <span className="code-mono text-[13px] text-[var(--color-accent)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[16px] font-medium tracking-tight">{t}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-ink-soft)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the basics */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker={c.beyondKicker} title={c.beyondTitle} intro={c.beyondIntro} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-1 gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
              {c.beyondCards.map(([t, b]) => (
                <div key={t} className="border-b border-r border-[var(--color-line)] p-5">
                  <h3 className="text-[15px] font-medium tracking-tight">{t}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-ink-soft)]">{b}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="code-mono text-[13px] text-[var(--color-accent)]">{c.recurT}</div>
              <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">{c.recurB}</p>
              <div className="mt-6">
                <RecurringDeadline lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Kicker>{c.dataKicker}</Kicker>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[34px]">{c.dataTitle}</h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">{c.dataBody}</p>
          </div>
        </div>
      </section>

      {/* Buy / CTA */}
      <section id="buy" className="border-b border-[var(--color-line)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Kicker>{c.buyKicker}</Kicker>
          <h2 className="mt-5 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[42px]">{c.buyTitle}</h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">{c.buyBody}</p>
          <div className="mt-9 grid max-w-lg gap-px border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] bg-[var(--color-ink)] px-5 py-4 text-[var(--color-paper)]">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] opacity-70">{c.buyOneTime}</div>
                <div className="mt-1 text-[15px] font-medium">{c.buyPrice}</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] opacity-70">{c.buyUniversal}</span>
            </div>
            <div className="flex items-center justify-between border-b border-r border-[var(--color-line)] px-5 py-4">
              <div>
                <div className="code-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">{c.buyRequires}</div>
                <div className="mt-1 text-[15px] font-medium">{c.buyReqVal}</div>
              </div>
              <span className="code-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">{c.buySilicon}</span>
            </div>
          </div>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">{c.buyFine}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2.5 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
          <span className="flex items-center gap-2.5">
            <ModerariMark size={20} />
            <Wordmark className="text-[var(--color-ink)] normal-case tracking-tight" />
            <span className="text-[var(--color-line)]">·</span>
            <span>{c.footTag}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span>© {company.legalName}</span>
            <span className="text-[var(--color-line)]">·</span>
            <span className="normal-case">{c.footLatin}</span>
            <span className="text-[var(--color-line)]">·</span>
            <a href={`mailto:${company.supportEmail}`} aria-label="Email support" className="inline-flex items-center transition hover:text-[var(--color-ink)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 7.5 L12 13 L20 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
