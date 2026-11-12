import type { Metadata } from "next";
import { LegalShell } from "../../../components/legal/LegalShell";
import { company } from "../../../content/company";

export const metadata: Metadata = {
  title: "HearLoop: Support",
  description: "Help with HearLoop, the sentence-by-sentence speech audio player for iPhone and Mac.",
  alternates: { canonical: "https://hearloop.doie.cc/support" },
};

const UPDATED = "November 12, 2026";

export default function Page() {
  return (
    <LegalShell
      title="Support"
      updated={UPDATED}
      backLabel="Back to HearLoop"
      backHref="/"
      intro="HearLoop plays any recording one sentence at a time, on iPhone and Mac. It's built by DOIE LLC. We read every message."
      sections={[
        {
          heading: "Contact",
          paragraphs: [
            `Email ${company.supportEmail} for help or to report a problem. It helps to include your device model, your iOS or macOS version, and the HearLoop version.`,
          ],
          links: [
            { label: company.supportEmail, href: `mailto:${company.supportEmail}` },
          ],
        },
        {
          heading: "How do I add audio?",
          paragraphs: [
            "Import a recording from the Files app, or send one to HearLoop from the share sheet. HearLoop then splits it into sentences at the silences.",
          ],
        },
        {
          heading: "How does the shadowing pause work?",
          paragraphs: [
            "After each sentence, HearLoop can leave a silent gap so you can repeat the sentence aloud before the next one starts.",
            "The pause can be Off, Auto (sized to the sentence you just heard), or a fixed 3, 5, 7, 10, or 15 seconds. Set it in Settings (the gear icon). There is also a quick On/Off button on the main screen.",
          ],
        },
        {
          heading: "Does it work in the background and in the car?",
          paragraphs: [
            "Yes. Playback continues in the background, and the previous and next buttons in your car move by sentence.",
          ],
        },
        {
          heading: "Why don't I see a transcript?",
          paragraphs: [
            "Transcription needs iOS 26 or later (macOS 26 or later on Mac). The first time you use a language, Apple may download its speech model. Everything else works without it.",
          ],
        },
        {
          heading: "Where does my data go?",
          paragraphs: [
            "Nowhere. Your audio, transcripts, settings, and starred sentences stay on your device, and deleting the app removes them. The full details are in the privacy policy.",
          ],
          links: [
            { label: "Privacy Policy", href: "https://hearloop.doie.cc/privacy" },
          ],
        },
      ]}
    />
  );
}
