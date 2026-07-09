import type { Metadata } from "next";
import { ModerariPage } from "../../../components/moderari/ModerariPage";

export const metadata: Metadata = {
  title: "Moderari — 주기 기반 포트폴리오 관리, Mac & iOS",
  description:
    "여러 프로젝트를 저마다의 업데이트 주기로 관리하세요 — 지연·이번 주·정상을 한눈에. Mac & iOS 네이티브. 원타임 구매, 구독 없음, 서버 없음.",
  alternates: {
    canonical: "/moderari/ko",
    languages: { en: "/moderari", ko: "/moderari/ko" },
  },
};

export default function Page() {
  return <ModerariPage lang="ko" />;
}
