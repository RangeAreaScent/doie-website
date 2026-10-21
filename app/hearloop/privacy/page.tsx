import type { Metadata } from "next";
import { LegalShell } from "../../../components/legal/LegalShell";
import { company } from "../../../content/company";

export const metadata: Metadata = {
  title: "HearLoop: Privacy Policy",
  description: "HearLoop collects no data. Your audio and transcripts stay on your device.",
  alternates: { canonical: "https://hearloop.doie.cc/privacy" },
};

const LAST_UPDATED = "October 20, 2026";

export default function Page() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated={LAST_UPDATED}
      backLabel="Back to HearLoop"
      backHref="/"
      intro={`HearLoop is built by ${company.legalName} (${company.state}). This policy explains what data HearLoop handles. In short: it collects nothing, and shares nothing.`}
      sections={[
        {
          heading: "Data we collect",
          paragraphs: [
            "HearLoop does not collect, transmit, or store any personal data on any server. HearLoop has no server of its own. There are no user accounts, no analytics, no advertising, no tracking, and no third-party SDKs.",
          ],
        },
        {
          heading: "What stays on your device",
          paragraphs: [
            "You import audio files yourself, from the Files app or the share sheet. Your audio, its transcript, your settings, and your sentence markers stay on your device. Nothing is uploaded anywhere.",
          ],
        },
        {
          heading: "Transcription",
          paragraphs: [
            "Transcription runs on your device using Apple's Speech framework. No server of ours is involved, and we never receive your audio or transcripts.",
            "The first time you transcribe in a language, iOS may download that language's speech model from Apple. Your audio is not uploaded.",
          ],
          links: [
            {
              label: "Apple privacy policy",
              href: "https://www.apple.com/legal/privacy/",
            },
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            "Your data is not shared with anyone, because we do not collect it. HearLoop includes no third-party code that collects data. The app is distributed through the Apple App Store, whose own terms govern the download.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "HearLoop does not collect any data from anyone, including children.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If this policy changes, the last updated date at the top of this page will change with it.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`Questions about this policy? Email ${company.supportEmail}.`],
        },
      ]}
    />
  );
}
