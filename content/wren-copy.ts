// All Wren marketing-page prose, keyed by language. Rendered by
// components/wren/WrenPage.tsx (server) and the client WrenGallery /
// WrenLangSwitch. Source language is English; the six translations follow the
// Wren app's own localization canon (SpeakUp/Wren/Localizable.xcstrings) for
// tone and terminology. Product / AI / method names stay in English by design:
// Wren, Claude, Claude Pro/Max, macOS, Daily Talk, recasts, Active Recall,
// i+1, Recasting, Modeled output, Anti-avoidance, Affective filter, OAuth,
// system prompt, .dmg, Apple silicon. The hand-built diagrams in objects.tsx
// keep their English labels (deliberate — technical canon), so they are NOT in
// this dict.

export type Lang = "en" | "ko" | "es" | "pt" | "ja" | "fr" | "it";

export const LANGS: Lang[] = ["en", "ko", "es", "pt", "ja", "fr", "it"];

// Wren lives on its own subdomain, wren.doie.cc. Public paths are
// subdomain-ROOT (en = "/", the rest = "/<lang>"); a host rewrite in
// middleware.ts maps them onto the /wren route tree internally. So in-page
// nav (<Link>, the switcher) uses these root-relative paths, while metadata
// canonical/alternate URLs must be ABSOLUTE — metadataBase is https://doie.cc,
// so a relative path would wrongly resolve back to the apex.
export const SITE = "https://wren.doie.cc";

// Native label for the switcher + the public (subdomain-root) path each locale
// lives at. Used for in-page <Link> navigation.
export const LOCALES: { code: Lang; short: string; label: string; href: string }[] = [
  { code: "en", short: "EN", label: "English", href: "/" },
  { code: "ko", short: "KO", label: "한국어", href: "/ko" },
  { code: "es", short: "ES", label: "Español", href: "/es" },
  { code: "pt", short: "PT", label: "Português", href: "/pt" },
  { code: "ja", short: "JA", label: "日本語", href: "/ja" },
  { code: "fr", short: "FR", label: "Français", href: "/fr" },
  { code: "it", short: "IT", label: "Italiano", href: "/it" },
];

// Public (subdomain-root) path for in-page navigation.
export function hrefFor(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}`;
}

// Absolute canonical URL per locale — for metadata only (see SITE note above).
export function canonicalFor(lang: Lang): string {
  return lang === "en" ? `${SITE}/` : `${SITE}/${lang}`;
}

// For metadata.alternates.languages — every locale's absolute canonical URL.
export const ALTERNATES: Record<string, string> = Object.fromEntries(
  LOCALES.map((l) => [l.code, canonicalFor(l.code)]),
);

export type Card = { t: string; b: string };

export type WrenCopy = {
  // <title> + meta description
  metaTitle: string;
  metaDescription: string;
  // nav
  navDownload: string;
  // hero
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  ctaDownload: string;
  ctaHow: string;
  // spec strip
  spec: string[];
  // app / product shots
  appKicker: string;
  appTitle: string;
  appIntro: string;
  // the gap
  gapKicker: string;
  gapTitle: string;
  gapIntro: string;
  gapCards: Card[];
  // features
  featKicker: string;
  featTitle: string;
  featIntro: string;
  features: Card[];
  // how it works
  howKicker: string;
  howTitle: string;
  howIntro: string;
  // 8 protocols
  protoKicker: string;
  protoTitle: string;
  protoIntro: string;
  // multilingual
  mlKicker: string;
  mlTitle: string;
  mlIntro: string;
  // privacy
  privKicker: string;
  privTitle: string;
  privBody: string;
  // download / CTA
  dlKicker: string;
  dlTitle: string;
  dlBody: string;
  dlDownloadLabel: string;
  dlRequiresLabel: string;
  dlFree: string;
  // footer
  footerTagline: string;
  // gallery (client)
  galMore: string;
  galCaptions: string[];
};

const en: WrenCopy = {
  metaTitle: "Wren — the management layer for learning a language with AI",
  metaDescription:
    "Wren turns Claude into a real language tutor for your Mac: session memory, spaced-repetition cards, recast capture, and on-device speech — the management a raw chatbot can't do.",

  navDownload: "Download",

  heroKicker: "Language learning · macOS",
  heroTitleA: "A tutor that",
  heroTitleB: "remembers you.",
  heroSub:
    "You can already learn a language with Claude. What you can't do is manage it — track progress, resurface what you forgot, keep the expressions worth keeping. Wren is that layer, native on your Mac.",
  ctaDownload: "Download for Mac",
  ctaHow: "How it works",

  spec: [
    "macOS native",
    "On-device speech",
    "7 languages",
    "No account",
    "Runs on your Claude plan",
  ],

  appKicker: "The app",
  appTitle: "A real conversation, corrected as you go.",
  appIntro:
    "Pick a language, then page through the screens — recasts, session notes, and the vocabulary you build without noticing.",

  gapKicker: "The gap",
  gapTitle: "A chatbot teaches. It doesn't manage.",
  gapIntro:
    "Ask a general AI to be your tutor and it will — brilliantly, once. Then tomorrow you start from nothing: re-explaining the protocol, re-finding your words, with no memory of what you got wrong last week. The teaching was never the hard part. The management is.",
  gapCards: [
    {
      t: "Raw chatbot",
      b: "Re-prompt every session · no progress · words lost · summaries by hand · yesterday doesn't carry over.",
    },
    {
      t: "Wren",
      b: "Session memory · auto cards · spaced review · recasts captured · every day builds on the last.",
    },
    {
      t: "The difference",
      b: "Persistent state, deterministic logic, and the model orchestrated around them — not a better prompt.",
    },
  ],

  featKicker: "What it does",
  featTitle: "The management, automated.",
  featIntro:
    "Six mechanisms run underneath every conversation. Together they're why the same answer, on two different days, gets two different responses.",
  features: [
    {
      t: "Session memory",
      b: "The last three sessions are summarized and folded into the next conversation's system prompt — so the tutor picks up where you left off, not where a stranger would.",
    },
    {
      t: "Spaced repetition, on a half-life",
      b: "Every card tracks its own forgetting curve. Wren schedules the next review for the moment you're about to lose it — and each pass buys a longer interval.",
    },
    {
      t: "Recasts, captured",
      b: "When the tutor reformulates your slip into natural English inside its reply, that correction is highlighted and harvested into your review — the way real acquisition works.",
    },
    {
      t: "On-device speech",
      b: "Speech-to-text and text-to-speech run locally on your Mac. Talking costs nothing against your Claude quota — a voice-first app that doesn't bill you for voice.",
    },
  ],

  howKicker: "How it works",
  howTitle: "One loop, every day.",
  howIntro:
    "Talk, and Wren captures. What it captures becomes cards. Cards come due and get woven back into the next conversation. Nothing to configure — the loop just runs.",

  protoKicker: "Daily Talk",
  protoTitle: "Eight protocols, applied at once.",
  protoIntro:
    "Every conversation runs on evidence-backed acquisition patterns — not a personality, but a method, held consistently.",

  mlKicker: "Your language",
  mlTitle: "Managed in the language you think in.",
  mlIntro:
    "Wren teaches English to speakers of seven languages — and coaches each in their own, with interference-error correction tuned to how that language transfers into English.",

  privKicker: "Your data",
  privTitle: "Everything stays on this Mac.",
  privBody:
    "Sessions, cards, and progress live in local storage — nothing leaves except the text turns you send to Claude. No account, no tracking, no sync you didn't ask for. Export a single backup file whenever you want to move machines.",

  dlKicker: "Download",
  dlTitle: "Bring your Claude plan. Wren does the rest.",
  dlBody:
    "Native for macOS. Sign in with a Claude Pro or Max subscription, or an API key — Wren adds the memory, the cards, and the local voice on top.",
  dlDownloadLabel: "Download",
  dlRequiresLabel: "Requires",
  dlFree: "Free core · optional supporter extras",

  footerTagline: "Self-directed language-learning management",

  galMore: "More languages soon",
  galCaptions: [
    "Daily Talk — the tutor recasts your slips in-line and logs the correction, in your language.",
    "Session notes — expressions you tried and the tutor's best phrases, captured automatically.",
    "Vocabulary — look-ups become cards, sorted into collections and queued for spaced review.",
  ],
};

// The six translations, generated from the shipped-app localization canon.

const ko: WrenCopy = {
  "metaTitle": "Wren — AI로 언어를 배우는 걸 관리해 주는 레이어",
  "metaDescription": "Wren은 Claude를 Mac에서 진짜 언어 튜터로 바꿔 줘요. 세션 기억, 간격 반복 카드, recast 포착, 온디바이스 음성까지 — 그냥 챗봇은 못 하는 관리를 해요.",
  "navDownload": "다운로드",
  "heroKicker": "언어 학습 · macOS",
  "heroTitleA": "당신을 기억하는",
  "heroTitleB": "튜터.",
  "heroSub": "Claude로 언어를 배우는 건 이미 할 수 있어요. 못 하는 건 그걸 관리하는 거예요 — 진도를 추적하고, 잊어버린 걸 다시 꺼내 주고, 남길 만한 표현을 남기는 일. Wren이 바로 그 레이어예요. Mac에서 네이티브로 돌아가요.",
  "ctaDownload": "Mac용 다운로드",
  "ctaHow": "작동 방식",
  "spec": [
    "macOS 네이티브",
    "온디바이스 음성",
    "7개 언어",
    "계정 불필요",
    "내 Claude 플랜으로 실행"
  ],
  "appKicker": "앱",
  "appTitle": "대화하면서 그때그때 교정되는 진짜 대화.",
  "appIntro": "언어를 고르고 화면을 넘겨 보세요 — recast, 세션 정리, 그리고 나도 모르게 쌓이는 표현들.",
  "gapKicker": "그 간극",
  "gapTitle": "챗봇은 가르쳐요. 관리하진 않아요.",
  "gapIntro": "범용 AI에게 튜터가 되어 달라고 하면 그렇게 해 줘요 — 그 한 번은 훌륭하게. 그런데 내일이면 다시 맨바닥에서 시작해요. 방식을 또 설명하고, 내 표현을 또 찾아야 하고, 지난주에 뭘 틀렸는지는 하나도 기억하지 못한 채로요. 어려운 건 가르치는 일이 아니었어요. 관리하는 일이죠.",
  "gapCards": [
    {
      "t": "그냥 챗봇",
      "b": "매 세션 다시 프롬프트 · 진도 없음 · 표현 유실 · 정리는 손으로 · 어제가 이어지지 않음."
    },
    {
      "t": "Wren",
      "b": "세션 기억 · 자동 카드 · 간격 복습 · recast 포착 · 하루하루가 앞 위에 쌓임."
    },
    {
      "t": "차이",
      "b": "지속되는 상태, 정해진 로직, 그리고 그 위에서 오케스트레이션되는 모델 — 더 나은 프롬프트가 아니라."
    }
  ],
  "featKicker": "하는 일",
  "featTitle": "관리를, 자동으로.",
  "featIntro": "여섯 가지 장치가 모든 대화 밑에서 돌아가요. 이것들이 함께 있기에, 같은 대답도 서로 다른 날엔 서로 다른 반응을 받아요.",
  "features": [
    {
      "t": "세션 기억",
      "b": "최근 세 번의 세션이 요약되어 다음 대화의 system prompt에 녹아들어요 — 그래서 튜터가 낯선 사람이 아니라 당신이 멈춘 지점부터 이어 가요."
    },
    {
      "t": "반감기 위에서 도는 간격 반복",
      "b": "카드마다 자기만의 망각 곡선을 추적해요. Wren은 당신이 막 잊어버리려는 순간에 다음 복습을 잡아 주고 — 통과할 때마다 다음 간격이 더 길어져요."
    },
    {
      "t": "recast 포착",
      "b": "튜터가 답변 안에서 당신의 실수를 자연스러운 영어로 다시 풀어 주면, 그 교정이 하이라이트되어 복습으로 넘어가요 — 진짜 언어 습득이 일어나는 방식 그대로요."
    },
    {
      "t": "온디바이스 음성",
      "b": "음성 인식과 음성 합성이 Mac에서 로컬로 돌아가요. 말하는 데는 Claude 사용량이 전혀 들지 않아요 — 음성 우선 앱이면서 음성 값을 물리지 않아요."
    }
  ],
  "howKicker": "작동 방식",
  "howTitle": "하나의 루프, 매일.",
  "howIntro": "대화하면 Wren이 포착해요. 포착한 건 카드가 돼요. 카드는 때가 되면 다시 다음 대화 속으로 엮여 들어가요. 설정할 것도 없어요 — 루프가 그냥 돌아가요.",
  "protoKicker": "Daily Talk",
  "protoTitle": "여덟 가지 프로토콜을 한 번에.",
  "protoIntro": "모든 대화가 근거 있는 습득 패턴 위에서 돌아가요 — 성격이 아니라 방법, 그것도 일관되게 지켜지는 방법이에요.",
  "mlKicker": "당신의 언어",
  "mlTitle": "당신이 생각하는 언어로 관리돼요.",
  "mlIntro": "Wren은 일곱 개 언어 사용자에게 영어를 가르쳐요 — 그리고 각자의 언어로 코치해요. 그 언어가 영어로 넘어갈 때 생기는 간섭 오류에 맞춰 교정하면서요.",
  "privKicker": "당신의 데이터",
  "privTitle": "모든 게 이 Mac 안에 남아요.",
  "privBody": "세션, 카드, 진도는 전부 로컬 저장소에 있어요 — 밖으로 나가는 건 Claude에 보내는 텍스트 대화뿐이에요. 계정도, 추적도, 원하지 않은 동기화도 없어요. 기기를 옮기고 싶을 땐 언제든 백업 파일 하나로 내보내면 돼요.",
  "dlKicker": "다운로드",
  "dlTitle": "Claude 플랜만 가져오세요. 나머지는 Wren이 해요.",
  "dlBody": "macOS 네이티브. Claude Pro나 Max 구독, 또는 API 키로 로그인하세요 — Wren이 그 위에 기억과 카드, 로컬 음성을 더해 줘요.",
  "dlDownloadLabel": "다운로드",
  "dlRequiresLabel": "필요 사항",
  "dlFree": "핵심 기능 무료 · 후원자용 추가 기능은 선택",
  "footerTagline": "스스로 이끄는 언어 학습 관리",
  "galMore": "더 많은 언어가 곧",
  "galCaptions": [
    "Daily Talk — 튜터가 당신의 실수를 그 자리에서 recast하고 교정을 기록해요, 당신의 언어로.",
    "세션 정리 — 당신이 시도한 표현과 튜터의 가장 좋은 표현들이 자동으로 담겨요.",
    "표현 노트 — 찾아본 단어가 카드가 되고, 컬렉션으로 분류되어 간격 복습 대기열에 올라가요."
  ]
};

const es: WrenCopy = {
  "metaTitle": "Wren — la capa de gestión para aprender un idioma con AI",
  "metaDescription": "Wren convierte a Claude en un verdadero tutor de idiomas para tu Mac: memoria de sesión, tarjetas de repetición espaciada, captura de recasts y voz en el dispositivo — la gestión que un chatbot por sí solo no puede hacer.",
  "navDownload": "Descargar",
  "heroKicker": "Aprender idiomas · macOS",
  "heroTitleA": "Un tutor que",
  "heroTitleB": "te recuerda.",
  "heroSub": "Ya puedes aprender un idioma con Claude. Lo que no puedes hacer es gestionarlo — seguir tu progreso, recuperar lo que olvidaste, conservar las expresiones que vale la pena conservar. Wren es esa capa, nativa en tu Mac.",
  "ctaDownload": "Descargar para Mac",
  "ctaHow": "Cómo funciona",
  "spec": [
    "Nativa en macOS",
    "Voz en el dispositivo",
    "7 idiomas",
    "Sin cuenta",
    "Funciona con tu plan de Claude"
  ],
  "appKicker": "La app",
  "appTitle": "Una conversación real, corregida sobre la marcha.",
  "appIntro": "Elige un idioma y recorre las pantallas — recasts, notas de sesión y el vocabulario que construyes sin darte cuenta.",
  "gapKicker": "La brecha",
  "gapTitle": "Un chatbot enseña. No gestiona.",
  "gapIntro": "Pídele a una AI general que sea tu tutor y lo será — de forma brillante, una vez. Y mañana empiezas desde cero: volviendo a explicar el método, volviendo a buscar tus palabras, sin memoria de lo que fallaste la semana pasada. Enseñar nunca fue la parte difícil. La gestión lo es.",
  "gapCards": [
    {
      "t": "Chatbot por sí solo",
      "b": "Volver a instruirlo cada sesión · sin progreso · palabras perdidas · resúmenes a mano · lo de ayer no se traslada."
    },
    {
      "t": "Wren",
      "b": "Memoria de sesión · tarjetas automáticas · repaso espaciado · recasts capturados · cada día se apoya en el anterior."
    },
    {
      "t": "La diferencia",
      "b": "Estado persistente, lógica determinista y el modelo orquestado en torno a ellos — no un mejor prompt."
    }
  ],
  "featKicker": "Qué hace",
  "featTitle": "La gestión, automatizada.",
  "featIntro": "Seis mecanismos funcionan por debajo de cada conversación. Juntos son la razón por la que la misma respuesta, en dos días distintos, obtiene dos reacciones distintas.",
  "features": [
    {
      "t": "Memoria de sesión",
      "b": "Las últimas tres sesiones se resumen y se integran en el system prompt de la siguiente conversación — así el tutor retoma donde lo dejaste, no donde lo haría un desconocido."
    },
    {
      "t": "Repetición espaciada, sobre una vida media",
      "b": "Cada tarjeta sigue su propia curva del olvido. Wren programa el siguiente repaso para el momento en que estás a punto de perderlo — y cada pase te compra un intervalo más largo."
    },
    {
      "t": "Recasts, capturados",
      "b": "Cuando el tutor reformula tu desliz en inglés natural dentro de su respuesta, esa corrección se resalta y se recoge en tu repaso — como funciona la adquisición real."
    },
    {
      "t": "Voz en el dispositivo",
      "b": "El reconocimiento de voz y la síntesis de voz funcionan localmente en tu Mac. Hablar no cuesta nada de tu cuota de Claude — una app centrada en la voz que no te cobra por la voz."
    }
  ],
  "howKicker": "Cómo funciona",
  "howTitle": "Un ciclo, cada día.",
  "howIntro": "Habla, y Wren captura. Lo que captura se convierte en tarjetas. Las tarjetas vencen y se entretejen de nuevo en la siguiente conversación. Nada que configurar — el ciclo simplemente corre.",
  "protoKicker": "Daily Talk",
  "protoTitle": "Ocho protocolos, aplicados a la vez.",
  "protoIntro": "Cada conversación funciona sobre patrones de adquisición respaldados por evidencia — no una personalidad, sino un método, mantenido con constancia.",
  "mlKicker": "Tu idioma",
  "mlTitle": "Gestionado en el idioma en el que piensas.",
  "mlIntro": "Wren enseña inglés a hablantes de siete idiomas — y guía a cada uno en el suyo, con corrección de errores de interferencia ajustada a cómo ese idioma se transfiere al inglés.",
  "privKicker": "Tus datos",
  "privTitle": "Todo se queda en este Mac.",
  "privBody": "Las sesiones, las tarjetas y el progreso viven en el almacenamiento local — nada sale salvo los turnos de texto que envías a Claude. Sin cuenta, sin seguimiento, sin sincronización que no pediste. Exporta un único archivo de copia de seguridad cuando quieras cambiar de equipo.",
  "dlKicker": "Descargar",
  "dlTitle": "Trae tu plan de Claude. Wren hace el resto.",
  "dlBody": "Nativa para macOS. Inicia sesión con una suscripción a Claude Pro o Max, o con una clave de API — Wren añade la memoria, las tarjetas y la voz local por encima.",
  "dlDownloadLabel": "Descargar",
  "dlRequiresLabel": "Requiere",
  "dlFree": "Núcleo gratuito · extras opcionales para colaboradores",
  "footerTagline": "Gestión autónoma del aprendizaje de idiomas",
  "galMore": "Más idiomas pronto",
  "galCaptions": [
    "Daily Talk — el tutor reformula tus deslices en línea y registra la corrección, en tu idioma.",
    "Notas de sesión — las expresiones que intentaste y las mejores frases del tutor, capturadas automáticamente.",
    "Vocabulario — las consultas se convierten en tarjetas, ordenadas en colecciones y en cola para el repaso espaciado."
  ]
};

const pt: WrenCopy = {
  "metaTitle": "Wren — a camada de gerenciamento para aprender um idioma com IA",
  "metaDescription": "O Wren transforma o Claude num tutor de idiomas de verdade no seu Mac: memória das sessões, cartões de repetição espaçada, captura de recasts e fala no dispositivo — o gerenciamento que um chatbot comum não faz.",
  "navDownload": "Download",
  "heroKicker": "Aprendizado de idiomas · macOS",
  "heroTitleA": "Um tutor que",
  "heroTitleB": "lembra de você.",
  "heroSub": "Você já consegue aprender um idioma com o Claude. O que você não consegue é gerenciar isso — acompanhar o progresso, retomar o que esqueceu, guardar as expressões que valem a pena. O Wren é essa camada, nativa no seu Mac.",
  "ctaDownload": "Baixar para Mac",
  "ctaHow": "Como funciona",
  "spec": [
    "Nativo no macOS",
    "Fala no dispositivo",
    "7 idiomas",
    "Sem conta",
    "Roda no seu plano Claude"
  ],
  "appKicker": "O app",
  "appTitle": "Uma conversa de verdade, corrigida enquanto você fala.",
  "appIntro": "Escolha um idioma e percorra as telas — recasts, notas da sessão e o vocabulário que você constrói sem perceber.",
  "gapKicker": "A lacuna",
  "gapTitle": "Um chatbot ensina. Ele não gerencia.",
  "gapIntro": "Peça a uma IA genérica para ser seu tutor e ela será — de forma brilhante, uma vez. Aí amanhã você começa do zero: reexplicando o método, reencontrando suas palavras, sem nenhuma memória do que você errou na semana passada. O ensino nunca foi a parte difícil. O gerenciamento é.",
  "gapCards": [
    {
      "t": "Chatbot comum",
      "b": "Reinstruir a cada sessão · sem progresso · palavras perdidas · resumos na mão · o dia de ontem não continua."
    },
    {
      "t": "Wren",
      "b": "Memória das sessões · cartões automáticos · revisão espaçada · recasts capturados · cada dia se apoia no anterior."
    },
    {
      "t": "A diferença",
      "b": "Estado persistente, lógica determinística e o modelo orquestrado em torno deles — não um prompt melhor."
    }
  ],
  "featKicker": "O que ele faz",
  "featTitle": "O gerenciamento, automatizado.",
  "featIntro": "Seis mecanismos rodam por baixo de cada conversa. Juntos, são o motivo pelo qual a mesma resposta, em dois dias diferentes, recebe dois retornos diferentes.",
  "features": [
    {
      "t": "Memória das sessões",
      "b": "As três últimas sessões são resumidas e incorporadas ao system prompt da próxima conversa — para que o tutor continue de onde você parou, e não de onde um estranho começaria."
    },
    {
      "t": "Repetição espaçada, sobre uma meia-vida",
      "b": "Cada cartão acompanha a própria curva do esquecimento. O Wren agenda a próxima revisão para o momento em que você está prestes a esquecer — e cada acerto compra um intervalo mais longo."
    },
    {
      "t": "Recasts, capturados",
      "b": "Quando o tutor reformula seu deslize em inglês natural dentro da resposta, essa correção é destacada e colhida para a sua revisão — do jeito que a aquisição de verdade acontece."
    },
    {
      "t": "Fala no dispositivo",
      "b": "A conversão de fala em texto e de texto em fala roda localmente no seu Mac. Falar não custa nada da sua cota do Claude — um app que prioriza a voz e não cobra você pela voz."
    }
  ],
  "howKicker": "Como funciona",
  "howTitle": "Um ciclo, todos os dias.",
  "howIntro": "Fale, e o Wren captura. O que ele captura vira cartões. Os cartões vencem e são retecidos na próxima conversa. Nada para configurar — o ciclo simplesmente roda.",
  "protoKicker": "Daily Talk",
  "protoTitle": "Oito protocolos, aplicados de uma vez.",
  "protoIntro": "Cada conversa roda sobre padrões de aquisição comprovados por evidências — não uma personalidade, mas um método, mantido com consistência.",
  "mlKicker": "Seu idioma",
  "mlTitle": "Gerenciado no idioma em que você pensa.",
  "mlIntro": "O Wren ensina inglês a falantes de sete idiomas — e orienta cada um no seu próprio, com correção de erros de interferência ajustada a como aquele idioma transfere para o inglês.",
  "privKicker": "Seus dados",
  "privTitle": "Tudo fica neste Mac.",
  "privBody": "Sessões, cartões e progresso ficam no armazenamento local — nada sai além dos turnos de texto que você envia ao Claude. Sem conta, sem rastreamento, sem sincronização que você não pediu. Exporte um único arquivo de backup sempre que quiser trocar de máquina.",
  "dlKicker": "Download",
  "dlTitle": "Traga seu plano Claude. O Wren faz o resto.",
  "dlBody": "Nativo para macOS. Entre com uma assinatura Claude Pro ou Max, ou com uma chave de API — o Wren acrescenta a memória, os cartões e a voz local por cima.",
  "dlDownloadLabel": "Download",
  "dlRequiresLabel": "Requer",
  "dlFree": "Núcleo gratuito · extras opcionais para apoiadores",
  "footerTagline": "Gerenciamento autodirigido de aprendizado de idiomas",
  "galMore": "Mais idiomas em breve",
  "galCaptions": [
    "Daily Talk — o tutor reformula seus deslizes na hora e registra a correção, no seu idioma.",
    "Notas da sessão — as expressões que você tentou e as melhores frases do tutor, capturadas automaticamente.",
    "Vocabulário — as consultas viram cartões, organizados em coleções e enfileirados para revisão espaçada."
  ]
};

const ja: WrenCopy = {
  "metaTitle": "Wren — AIと言語を学ぶための、管理レイヤー",
  "metaDescription": "Wrenは、Claudeをあなたのマックで本物の語学チューターに変えます。セッションの記憶、間隔をあけた復習カード、recastsの記録、そしてオンデバイス音声 — ただのチャットボットにはできない管理を。",
  "navDownload": "ダウンロード",
  "heroKicker": "語学学習 · macOS",
  "heroTitleA": "あなたを覚えている、",
  "heroTitleB": "チューター。",
  "heroSub": "Claudeで言語を学ぶことは、もうできます。できないのは、それを管理すること — 進み具合を追い、忘れたことをもう一度出し、残す価値のある表現を残しておくこと。Wrenはそのレイヤーで、あなたのマックにネイティブに動きます。",
  "ctaDownload": "Macでダウンロード",
  "ctaHow": "仕組み",
  "spec": [
    "macOSネイティブ",
    "オンデバイス音声",
    "7言語",
    "アカウント不要",
    "お使いのClaudeプランで動作"
  ],
  "appKicker": "アプリ",
  "appTitle": "本物の会話を、話しながら直していく。",
  "appIntro": "言語を選んで、画面を順にめくってみてください — recasts、セッションノート、そして気づかないうちに積み上がる表現ノート。",
  "gapKicker": "足りないもの",
  "gapTitle": "チャットボットは教えてくれる。でも、管理はしてくれない。",
  "gapIntro": "汎用のAIにチューターになってと頼めば、なってくれます — 一度きりなら、見事に。でも次の日にはまたゼロから。やり方を説明し直し、言葉を探し直し、先週どこを間違えたかの記憶はどこにもありません。難しかったのは、教えることではなかったんです。管理することでした。",
  "gapCards": [
    {
      "t": "ただのチャットボット",
      "b": "毎回プロンプトを打ち直す · 進み具合は残らない · 言葉は消える · まとめは手作業 · 昨日は引き継がれない。"
    },
    {
      "t": "Wren",
      "b": "セッションの記憶 · カードを自動生成 · 間隔をあけた復習 · recastsを記録 · 毎日が前日の上に積み上がる。"
    },
    {
      "t": "違うのはここ",
      "b": "状態を持ち続けること、決まったとおりに動くロジック、そしてその周りに組み立てられたモデル — より良いプロンプト、ではありません。"
    }
  ],
  "featKicker": "できること",
  "featTitle": "管理を、自動で。",
  "featIntro": "6つの仕組みが、すべての会話の下で動いています。だから同じ答えでも、別の日には別の応答が返ってきます。",
  "features": [
    {
      "t": "セッションの記憶",
      "b": "直近3回のセッションが要約され、次の会話のsystem promptに織り込まれます — だからチューターは、初対面ではなく、あなたが前に止めたところから続けてくれます。"
    },
    {
      "t": "間隔をあけた復習、半減期に合わせて",
      "b": "どのカードも、それぞれの忘却曲線を追いかけています。Wrenは、あなたが忘れかけるちょうどその瞬間に次の復習を組みます — そして一回ごとに、次までの間隔が長くなっていきます。"
    },
    {
      "t": "recastsを、記録",
      "b": "チューターが返信の中であなたの言い間違いを自然なEnglishに言い直すと、その訂正がハイライトされ、あなたの復習に取り込まれます — 本物の習得が進むのと同じやり方で。"
    },
    {
      "t": "オンデバイス音声",
      "b": "音声認識と音声合成は、あなたのマックの中でローカルに動きます。話すことにClaudeのquotaは一切かかりません — 音声が先にあるアプリなのに、音声で課金しない。"
    }
  ],
  "howKicker": "仕組み",
  "howTitle": "ひとつのループを、毎日。",
  "howIntro": "話せば、Wrenが拾います。拾ったものはカードになります。カードは期限が来て、次の会話へと織り込まれていきます。設定するものは何もありません — ループはただ回り続けます。",
  "protoKicker": "Daily Talk",
  "protoTitle": "8つのプロトコルを、一度に。",
  "protoIntro": "どの会話も、根拠のある習得のパターンにもとづいて進みます — キャラクターではなく、ぶれずに保たれる方法として。",
  "mlKicker": "あなたの言語",
  "mlTitle": "あなたが考えるときの言語で、管理する。",
  "mlIntro": "Wrenは7つの言語の話し手にEnglishを教えます — そしてそれぞれを、その人自身の言語でコーチします。その言語がEnglishにどう干渉するかに合わせた、干渉エラーの訂正つきで。",
  "privKicker": "あなたのデータ",
  "privTitle": "すべては、このマックの中に。",
  "privBody": "セッション、カード、進み具合はローカルのストレージに保存されます — 外に出るのは、あなたがClaudeに送るテキストのやり取りだけです。アカウントもトラッキングもなく、頼んでいない同期もありません。マシンを移りたくなったら、いつでもバックアップファイルを1つ書き出せます。",
  "dlKicker": "ダウンロード",
  "dlTitle": "お使いのClaudeプランを。あとはWrenがやります。",
  "dlBody": "macOSネイティブ。Claude ProまたはMaxのサブスクリプション、あるいはAPIキーでサインインしてください — Wrenがその上に、記憶とカードとローカル音声を足します。",
  "dlDownloadLabel": "ダウンロード",
  "dlRequiresLabel": "必要なもの",
  "dlFree": "コア機能は無料 · サポーター向けの追加はお好みで",
  "footerTagline": "自分で進める語学学習の管理",
  "galMore": "対応言語は順次追加",
  "galCaptions": [
    "Daily Talk — チューターがあなたの言い間違いをその場でrecastして、訂正をあなたの言語で記録します。",
    "セッションノート — あなたが試した表現と、チューターのいちばん良い言い回しを、自動で記録します。",
    "表現ノート — 調べた言葉がカードになり、コレクションに分けられて、間隔をあけた復習に並びます。"
  ]
};

const fr: WrenCopy = {
  "metaTitle": "Wren — la couche de gestion pour apprendre une langue avec l'IA",
  "metaDescription": "Wren transforme Claude en véritable tuteur de langue sur ton Mac : mémoire des sessions, cartes à répétition espacée, capture des recasts et reconnaissance vocale sur l'appareil — la gestion qu'un simple chatbot ne sait pas faire.",
  "navDownload": "Télécharger",
  "heroKicker": "Apprentissage des langues · macOS",
  "heroTitleA": "Un tuteur qui",
  "heroTitleB": "se souvient de toi.",
  "heroSub": "Tu peux déjà apprendre une langue avec Claude. Ce que tu ne peux pas faire, c'est la gérer — suivre tes progrès, faire remonter ce que tu as oublié, garder les expressions qui valent la peine d'être gardées. Wren est cette couche, native sur ton Mac.",
  "ctaDownload": "Télécharger pour Mac",
  "ctaHow": "Comment ça marche",
  "spec": [
    "Native macOS",
    "Voix sur l'appareil",
    "7 langues",
    "Sans compte",
    "Fonctionne avec ton offre Claude"
  ],
  "appKicker": "L'application",
  "appTitle": "Une vraie conversation, corrigée au fil de l'eau.",
  "appIntro": "Choisis une langue, puis parcours les écrans — recasts, notes de session et le vocabulaire que tu construis sans t'en rendre compte.",
  "gapKicker": "Le manque",
  "gapTitle": "Un chatbot enseigne. Il ne gère pas.",
  "gapIntro": "Demande à une IA généraliste d'être ton tuteur et elle le sera — brillamment, une fois. Puis demain tu repars de zéro : à réexpliquer le protocole, à retrouver tes mots, sans aucun souvenir de ce que tu as raté la semaine dernière. Enseigner n'a jamais été le plus dur. La gestion, si.",
  "gapCards": [
    {
      "t": "Chatbot brut",
      "b": "Tout redemander à chaque session · aucun suivi · mots perdus · résumés à la main · hier ne se reporte pas sur aujourd'hui."
    },
    {
      "t": "Wren",
      "b": "Mémoire des sessions · cartes automatiques · révision espacée · recasts capturés · chaque jour s'appuie sur le précédent."
    },
    {
      "t": "La différence",
      "b": "Un état persistant, une logique déterministe et le modèle orchestré autour d'eux — pas un meilleur prompt."
    }
  ],
  "featKicker": "Ce que ça fait",
  "featTitle": "La gestion, automatisée.",
  "featIntro": "Six mécanismes tournent sous chaque conversation. Ensemble, ils expliquent pourquoi la même réponse, deux jours différents, reçoit deux réactions différentes.",
  "features": [
    {
      "t": "Mémoire des sessions",
      "b": "Les trois dernières sessions sont résumées et intégrées au system prompt de la conversation suivante — ainsi le tuteur reprend là où tu t'es arrêté, pas là où un inconnu commencerait."
    },
    {
      "t": "Répétition espacée, sur une demi-vie",
      "b": "Chaque carte suit sa propre courbe de l'oubli. Wren programme la prochaine révision au moment précis où tu es sur le point de l'oublier — et chaque passage t'offre un intervalle plus long."
    },
    {
      "t": "Recasts, capturés",
      "b": "Quand le tuteur reformule ton écart en anglais naturel au sein de sa réponse, cette correction est mise en évidence et récoltée dans ta révision — c'est ainsi que fonctionne la vraie acquisition."
    },
    {
      "t": "Voix sur l'appareil",
      "b": "La reconnaissance et la synthèse vocales tournent localement sur ton Mac. Parler ne coûte rien sur ton quota Claude — une application axée sur la voix qui ne te facture pas la voix."
    }
  ],
  "howKicker": "Comment ça marche",
  "howTitle": "Une seule boucle, chaque jour.",
  "howIntro": "Tu parles, et Wren capture. Ce qu'il capture devient des cartes. Les cartes arrivent à échéance et sont retissées dans la conversation suivante. Rien à configurer — la boucle tourne, tout simplement.",
  "protoKicker": "Daily Talk",
  "protoTitle": "Huit protocoles, appliqués d'un coup.",
  "protoIntro": "Chaque conversation repose sur des schémas d'acquisition étayés par des preuves — pas une personnalité, mais une méthode, tenue avec constance.",
  "mlKicker": "Ta langue",
  "mlTitle": "Gérée dans la langue dans laquelle tu penses.",
  "mlIntro": "Wren enseigne l'anglais à des locuteurs de sept langues — et accompagne chacun dans la sienne, avec une correction des erreurs d'interférence ajustée à la façon dont cette langue se transfère vers l'anglais.",
  "privKicker": "Tes données",
  "privTitle": "Tout reste sur ce Mac.",
  "privBody": "Les sessions, les cartes et les progrès vivent dans le stockage local — rien ne sort, hormis les tours de texte que tu envoies à Claude. Sans compte, sans suivi, sans synchronisation que tu n'aurais pas demandée. Exporte un unique fichier de sauvegarde quand tu veux changer de machine.",
  "dlKicker": "Télécharger",
  "dlTitle": "Apporte ton offre Claude. Wren fait le reste.",
  "dlBody": "Native pour macOS. Connecte-toi avec un abonnement Claude Pro ou Max, ou une clé API — Wren ajoute par-dessus la mémoire, les cartes et la voix locale.",
  "dlDownloadLabel": "Télécharger",
  "dlRequiresLabel": "Nécessite",
  "dlFree": "Cœur gratuit · extras optionnels pour les soutiens",
  "footerTagline": "Gestion autonome de l'apprentissage des langues",
  "galMore": "D'autres langues bientôt",
  "galCaptions": [
    "Daily Talk — le tuteur reformule tes écarts en ligne et enregistre la correction, dans ta langue.",
    "Notes de session — les expressions que tu as tentées et les meilleures formulations du tuteur, capturées automatiquement.",
    "Vocabulaire — les recherches deviennent des cartes, triées en collections et mises en file pour la révision espacée."
  ]
};

const it: WrenCopy = {
  "metaTitle": "Wren — il livello di gestione per imparare una lingua con l'AI",
  "metaDescription": "Wren trasforma Claude in un vero tutor di lingua per il tuo Mac: memoria delle sessioni, carte a ripetizione dilazionata, cattura dei recasts e voce on-device — la gestione che un chatbot da solo non sa fare.",
  "navDownload": "Scarica",
  "heroKicker": "Apprendimento delle lingue · macOS",
  "heroTitleA": "Un tutor che",
  "heroTitleB": "ti ricorda.",
  "heroSub": "Con Claude puoi già imparare una lingua. Quello che non puoi fare è gestirla — seguire i progressi, riportare a galla ciò che hai dimenticato, tenere le espressioni che vale la pena tenere. Wren è quel livello, nativo sul tuo Mac.",
  "ctaDownload": "Scarica per Mac",
  "ctaHow": "Come funziona",
  "spec": [
    "Nativo per macOS",
    "Voce on-device",
    "7 lingue",
    "Nessun account",
    "Funziona con il tuo piano Claude"
  ],
  "appKicker": "L'app",
  "appTitle": "Una vera conversazione, corretta man mano.",
  "appIntro": "Scegli una lingua, poi sfoglia le schermate — recasts, note della sessione e il vocabolario che costruisci senza accorgertene.",
  "gapKicker": "Il divario",
  "gapTitle": "Un chatbot insegna. Non gestisce.",
  "gapIntro": "Chiedi a un'AI generica di farti da tutor e lo farà — brillantemente, una volta. Poi domani riparti da zero: a rispiegare il metodo, a ritrovare le parole, senza memoria di quello che avevi sbagliato la settimana scorsa. Insegnare non è mai stata la parte difficile. La gestione lo è.",
  "gapCards": [
    {
      "t": "Chatbot da solo",
      "b": "Ripeti il prompt a ogni sessione · nessun progresso · parole perse · riepiloghi a mano · ieri non si porta dietro."
    },
    {
      "t": "Wren",
      "b": "Memoria delle sessioni · carte automatiche · ripasso dilazionato · recasts catturati · ogni giorno costruisce sul precedente."
    },
    {
      "t": "La differenza",
      "b": "Stato persistente, logica deterministica e il modello orchestrato attorno a essi — non un prompt migliore."
    }
  ],
  "featKicker": "Cosa fa",
  "featTitle": "La gestione, automatizzata.",
  "featIntro": "Sei meccanismi lavorano sotto ogni conversazione. Insieme sono il motivo per cui la stessa risposta, in due giorni diversi, ottiene due reazioni diverse.",
  "features": [
    {
      "t": "Memoria delle sessioni",
      "b": "Le ultime tre sessioni vengono riassunte e integrate nel system prompt della conversazione successiva — così il tutor riprende da dove eri rimasto, non da dove ripartirebbe uno sconosciuto."
    },
    {
      "t": "Ripetizione dilazionata, su un'emivita",
      "b": "Ogni carta segue la propria curva dell'oblio. Wren programma il ripasso successivo per il momento esatto in cui stai per dimenticare — e ogni passaggio ti fa guadagnare un intervallo più lungo."
    },
    {
      "t": "Recasts, catturati",
      "b": "Quando il tutor riformula la tua svista in inglese naturale dentro la sua risposta, quella correzione viene evidenziata e raccolta nel tuo ripasso — nel modo in cui funziona davvero l'acquisizione."
    },
    {
      "t": "Voce on-device",
      "b": "Il riconoscimento vocale e la sintesi vocale girano in locale sul tuo Mac. Parlare non costa nulla sulla tua quota Claude — un'app voice-first che non ti fa pagare per la voce."
    }
  ],
  "howKicker": "Come funziona",
  "howTitle": "Un unico ciclo, ogni giorno.",
  "howIntro": "Tu parli e Wren cattura. Ciò che cattura diventa carte. Le carte arrivano in scadenza e vengono ritessute nella conversazione successiva. Niente da configurare — il ciclo va da sé.",
  "protoKicker": "Daily Talk",
  "protoTitle": "Otto protocolli, applicati insieme.",
  "protoIntro": "Ogni conversazione si basa su schemi di acquisizione supportati da evidenze — non una personalità, ma un metodo, tenuto con coerenza.",
  "mlKicker": "La tua lingua",
  "mlTitle": "Gestita nella lingua in cui pensi.",
  "mlIntro": "Wren insegna l'inglese a chi parla sette lingue — e segue ciascuno nella propria, con una correzione degli errori di interferenza calibrata sul modo in cui quella lingua si trasferisce nell'inglese.",
  "privKicker": "I tuoi dati",
  "privTitle": "Tutto resta su questo Mac.",
  "privBody": "Sessioni, carte e progressi vivono nell'archivio locale — non esce nulla, tranne i turni di testo che invii a Claude. Nessun account, nessun tracciamento, nessuna sincronizzazione che non hai chiesto. Esporta un unico file di backup quando vuoi cambiare macchina.",
  "dlKicker": "Scarica",
  "dlTitle": "Porta il tuo piano Claude. Al resto pensa Wren.",
  "dlBody": "Nativo per macOS. Accedi con un abbonamento Claude Pro o Max, oppure una chiave API — Wren aggiunge la memoria, le carte e la voce locale sopra a tutto questo.",
  "dlDownloadLabel": "Scarica",
  "dlRequiresLabel": "Richiede",
  "dlFree": "Core gratuito · extra opzionali per i sostenitori",
  "footerTagline": "Gestione autonoma dell'apprendimento linguistico",
  "galMore": "Presto altre lingue",
  "galCaptions": [
    "Daily Talk — il tutor riformula le tue sviste in linea e registra la correzione, nella tua lingua.",
    "Note della sessione — le espressioni che hai provato e le frasi migliori del tutor, catturate automaticamente.",
    "Vocabolario — le ricerche diventano carte, ordinate in raccolte e messe in coda per il ripasso dilazionato."
  ]
};

export const COPY: Record<Lang, WrenCopy> = {
  en,
  ko,
  es,
  pt,
  ja,
  fr,
  it,
};
