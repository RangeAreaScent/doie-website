import type { Metadata } from "next";
import { LegalShell } from "../../../../components/legal/LegalShell";
import { company } from "../../../../content/company";

export const metadata: Metadata = {
  title: "Wren Words — 개인정보 처리방침",
  alternates: {
    canonical: "https://wren.doie.cc/ko/privacy",
    languages: { en: "https://wren.doie.cc/privacy" },
  },
};

const EFFECTIVE = "2026년 11월 12일";
const CONTACT = company.supportEmail;

// Korean translation of app/wren/privacy/page.tsx. Keep the two in step.
export default function Page() {
  return (
    <LegalShell
      title="개인정보 처리방침"
      updated={EFFECTIVE}
      backLabel="Wren으로 돌아가기"
      backHref="/ko"
      intro={`Wren Words는 DOIE LLC(미국 조지아주)가 만듭니다. 이 방침은 ${EFFECTIVE}부터 적용되며 앱이 어떤 데이터를 다루는지 설명합니다. 한마디로, 계정도 광고도 분석도 추적도 없으며 DOIE는 사용자의 데이터를 받거나 저장하지 않습니다.`}
      sections={[
        {
          heading: "DOIE가 수집하는 정보",
          paragraphs: [
            "없습니다. Wren Words에는 계정, 광고, 분석·원격 측정, 추적이 없습니다. DOIE는 어떤 사용자 데이터도 받거나 저장하지 않습니다.",
          ],
        },
        {
          heading: "기기에 남는 정보",
          paragraphs: [
            "세션, 단어 카드, 노트, 학습 진도는 사용자의 기기에 저장됩니다. 선택 기능인 iCloud 동기화를 켜면 이 중 일부가 사용자 본인의 iCloud에도 보관됩니다. 아래 \"iCloud 동기화(선택)\"를 참고하세요.",
            "백업 파일을 하나로 내보내 다른 기기에서 복원할 수 있습니다. 이 파일은 사용자만 다룹니다.",
            "입력한 API 키는 기기의 키체인에 저장됩니다.",
          ],
        },
        {
          heading: "iCloud 동기화(선택)",
          paragraphs: [
            "iCloud 동기화는 선택 기능입니다. 기본값은 꺼짐이며, 사용자가 설정에서 직접 켜야만 작동합니다.",
            "켜면 학습 프로파일(이름, 언어쌍, 학습 설정), 단어 카드, 표현 노트, 컬렉션이 사용자 본인의 iCloud 개인 데이터베이스(Apple CloudKit private database)를 통해 사용자의 Mac과 iPhone 사이에서 동기화됩니다. 대화 기록은 동기화되지 않습니다.",
            "DOIE는 이 데이터를 받거나 열람할 수 없으며, 별도의 DOIE 서버도 없습니다. 데이터는 사용자 본인의 iCloud 계정에 있으며 Apple의 iCloud 약관과 보호 아래 있습니다.",
            "동기화를 끄면 새 동기화가 멈춥니다. 이미 iCloud에 있는 데이터는 사용자가 iCloud 설정에서 삭제할 때까지 남아 있습니다. 동기화가 켜진 상태에서 프로파일을 삭제하면 연결된 모든 기기에서 삭제됩니다.",
          ],
          links: [
            {
              label: "Apple iCloud 약관",
              href: "https://www.apple.com/legal/internet-services/icloud/",
            },
          ],
        },
        {
          heading: "AI 답변",
          paragraphs: [
            "Apple Intelligence를 지원하는 기기에서는 대화와 노트의 텍스트가 답변을 만들기 위해 Apple의 Private Cloud Compute로 전송될 수 있습니다. DOIE는 이를 받지 않습니다.",
            "그 외에는 답변을 만들기 위해 Wren Words는 대화 텍스트, 단어 조회 질의, 세션 요약을 사용자의 기기에서 사용자가 고른 AI 제공업체(Anthropic(Claude), OpenAI, Google(Gemini))로 직접 보냅니다. 이때 사용자 본인의 API 키를 사용합니다.",
            "해당 제공업체는 자체 약관과 개인정보 처리방침에 따라 텍스트를 처리합니다. Wren Words는 이를 위한 자체 서버를 운영하지 않으므로 텍스트는 DOIE를 거치지 않습니다.",
          ],
          links: [
            {
              label: "Apple Private Cloud Compute",
              href: "https://security.apple.com/blog/private-cloud-compute/",
            },
            {
              label: "Anthropic 개인정보 처리방침",
              href: "https://www.anthropic.com/legal/privacy",
            },
            {
              label: "OpenAI 정책",
              href: "https://openai.com/policies/",
            },
            {
              label: "Google 개인정보 처리방침",
              href: "https://policies.google.com/privacy",
            },
            {
              label: "Gemini API 약관",
              href: "https://ai.google.dev/gemini-api/terms",
            },
          ],
        },
        {
          heading: "음성",
          paragraphs: [
            "기본값으로 음성은 Apple의 온디바이스 음성 인식을 사용해 기기에서 텍스트로 변환됩니다. 설정에서 이전 방식의 Apple 인식 엔진을 고르면, 온디바이스 전용을 켜지 않은 경우 Apple이 서버에서 오디오를 처리할 수 있으며 이때는 Apple의 개인정보 처리방침이 적용됩니다. Mac에서는 선택 사항으로 온디바이스 Whisper 모델도 쓸 수 있습니다.",
            "오디오는 사용자가 고른 AI 제공업체로 전송되지 않으며, 텍스트로 변환된 내용만 전송됩니다. 음성 재생은 Apple 시스템 음성을 사용하고, Mac에서는 선택 사항으로 온디바이스 음성 모델도 쓸 수 있습니다.",
            "마이크와 음성 인식 권한은 말하기 연습에만 사용됩니다.",
          ],
          links: [
            {
              label: "Apple 개인정보 처리방침",
              href: "https://www.apple.com/legal/privacy/",
            },
          ],
        },
        {
          heading: "어린이",
          paragraphs: ["Wren Words는 만 13세 미만 어린이를 대상으로 하지 않습니다."],
        },
        {
          heading: "방침의 변경",
          paragraphs: [
            "이 방침이 바뀌면 이 페이지 상단의 적용일도 함께 바뀝니다.",
          ],
        },
        {
          heading: "문의",
          paragraphs: [`이 방침에 대한 문의는 ${CONTACT}로 보내 주세요.`],
          links: [{ label: "English", href: "/privacy" }],
        },
      ]}
    />
  );
}
