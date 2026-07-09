import type { Metadata } from "next";
import { ModerariPage } from "../../components/moderari/ModerariPage";

export const metadata: Metadata = {
  title: "Moderari — cadence-based portfolio management for Mac & iOS",
  description:
    "Keep every project you run on its own update cadence — overdue, due this week, or on track, at a glance. Native Mac & iOS. Buy once, no subscription, no servers.",
  alternates: {
    canonical: "/moderari",
    languages: { en: "/moderari", ko: "/moderari/ko" },
  },
};

export default function Page() {
  return <ModerariPage lang="en" />;
}
