import type { Metadata } from "next";
import { LegalShell } from "../../../components/legal/LegalShell";
import { company } from "../../../content/company";

export const metadata: Metadata = { title: "HiSS — Privacy Policy" };

const LAST_UPDATED = "July 29, 2026";

export default function Page() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated={LAST_UPDATED}
      backLabel="Back to HiSS"
      backHref="/"
      intro="HiSS is built by DOIE LLC. This policy explains what data HiSS handles. In short: it collects nothing."
      sections={[
        {
          heading: "Data we collect",
          paragraphs: [
            "HiSS does not collect, transmit, or store any personal data on our servers. There are no user accounts, no sign-in, and no analytics or advertising SDKs.",
          ],
        },
        {
          heading: "What stays on your device",
          paragraphs: [
            "Recordings, transcripts, and settings are stored in the app's own local storage. Transcription runs entirely on-device using Apple's Speech framework — no audio or text is ever sent over a network connection.",
          ],
        },
        {
          heading: "Optional location",
          paragraphs: [
            "If you turn on Location in Settings, HiSS stamps a city name into the recording. This happens entirely on your device and is never transmitted to us.",
          ],
        },
        {
          heading: "iCloud sync (Premium)",
          paragraphs: [
            "Premium unlocks optional syncing of your recordings and transcripts via iCloud, tied to your own Apple ID. This sync happens directly between your devices and Apple's iCloud service — we never receive or have access to this data.",
          ],
        },
        {
          heading: "In-app purchases",
          paragraphs: [
            "The one-time Premium purchase is processed by Apple through StoreKit. We do not receive your payment details.",
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
