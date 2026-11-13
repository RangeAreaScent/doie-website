import type { Metadata } from "next";
import { LegalShell } from "../../../components/legal/LegalShell";
import { company } from "../../../content/company";

export const metadata: Metadata = {
  title: "Wren Words — Privacy Policy",
  alternates: { canonical: "https://wren.doie.cc/privacy" },
};

const EFFECTIVE = "November 12, 2026";
const CONTACT = company.supportEmail;

export default function Page() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated={EFFECTIVE}
      backLabel="Back to Wren"
      backHref="/"
      intro={`Wren Words is built by DOIE LLC (Georgia, USA). This policy is effective ${EFFECTIVE} and explains what data the app handles. In short: there are no accounts, no ads, no analytics, and no tracking, and DOIE does not receive or store your data.`}
      sections={[
        {
          heading: "What DOIE collects",
          paragraphs: [
            "Nothing. Wren Words has no accounts, no ads, no analytics or telemetry, and no tracking. DOIE does not receive or store any user data.",
          ],
        },
        {
          heading: "What stays on your device",
          paragraphs: [
            "Your sessions, vocabulary cards, notes, and progress are stored on your own device. If you turn on the optional iCloud sync, some of this data is also kept in your own iCloud; see \"iCloud sync (optional)\" below.",
            "You can export a single backup file and restore it on another device. That file is only ever handled by you.",
            "The API keys you enter are stored in the device Keychain.",
          ],
        },
        {
          heading: "iCloud sync (optional)",
          paragraphs: [
            "iCloud sync is optional. It is off by default and turns on only if you switch it on yourself in Settings.",
            "When it is on, your learning profile (name, language pair, and learning settings), vocabulary cards, expression notes, and collections are synced between your Mac and iPhone through your own iCloud private database (Apple CloudKit). Conversation history is not synced.",
            "DOIE cannot receive or view this data, and there is no DOIE server involved. The data stays in your own iCloud account, under Apple's iCloud terms and protections.",
            "If you turn sync off, new syncing stops. Data already in iCloud stays there until you delete it in your iCloud settings. If you delete a profile while sync is on, it is deleted on all of your connected devices.",
          ],
          links: [
            {
              label: "Apple iCloud terms",
              href: "https://www.apple.com/legal/internet-services/icloud/",
            },
          ],
        },
        {
          heading: "AI replies",
          paragraphs: [
            "On devices that support Apple Intelligence, the text of your conversations and notes may be sent to Apple's Private Cloud Compute to generate replies. DOIE does not receive it.",
            "Otherwise, to generate a reply, Wren Words sends your conversation text, lookup queries, and session summaries directly from your device to the AI provider you choose: Anthropic (Claude), OpenAI, or Google (Gemini). This uses your own API key.",
            "That provider processes the text under its own terms and privacy policy. Wren Words does not run its own servers for this, so the text does not pass through DOIE.",
          ],
          links: [
            {
              label: "Apple Private Cloud Compute",
              href: "https://security.apple.com/blog/private-cloud-compute/",
            },
            {
              label: "Anthropic privacy policy",
              href: "https://www.anthropic.com/legal/privacy",
            },
            {
              label: "OpenAI policies",
              href: "https://openai.com/policies/",
            },
            {
              label: "Google privacy policy",
              href: "https://policies.google.com/privacy",
            },
            {
              label: "Gemini API terms",
              href: "https://ai.google.dev/gemini-api/terms",
            },
          ],
        },
        {
          heading: "Voice",
          paragraphs: [
            "By default, speech is converted to text on your device using Apple's on-device speech recognition. If you choose the older Apple recognition engine in Settings, Apple may process your audio on its servers unless you turn on on-device-only; Apple's privacy policy applies. On Mac, an optional on-device Whisper model is also available.",
            "Audio is never sent to the AI provider you choose — only the transcribed text. Voice playback uses Apple system voices; on Mac, an optional on-device voice model is also available.",
            "The Microphone and Speech Recognition permissions are used only for speaking practice.",
          ],
          links: [
            {
              label: "Apple privacy policy",
              href: "https://www.apple.com/legal/privacy/",
            },
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "Wren Words is not directed at children under 13.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If this policy changes, the effective date at the top of this page will change with it.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`Questions about this policy? Email ${CONTACT}.`],
          links: [{ label: "한국어 (Korean)", href: "/ko/privacy" }],
        },
      ]}
    />
  );
}
