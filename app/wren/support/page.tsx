import type { Metadata } from "next";
import { LegalShell } from "../../../components/legal/LegalShell";
import { company } from "../../../content/company";

export const metadata: Metadata = {
  title: "Wren Words — Support",
  alternates: { canonical: "https://wren.doie.cc/support" },
};

const UPDATED = "October 7, 2026";
const CONTACT = company.supportEmail;

export default function Page() {
  return (
    <LegalShell
      title="Support"
      updated={UPDATED}
      backLabel="Back to Wren"
      backHref="/"
      intro="Wren Words is a speaking coach for learning a language, on iOS and Mac. It's built by DOIE LLC. We read every message."
      sections={[
        {
          heading: "Contact",
          paragraphs: [
            `Email ${CONTACT} for help or to report a problem. It helps to include your device model, the iOS or macOS version, and the Wren Words version.`,
          ],
          links: [{ label: CONTACT, href: `mailto:${CONTACT}` }],
        },
        {
          heading: "Do I need an account or an API key?",
          paragraphs: [
            "There's no Wren Words account. To generate AI replies, you use your own API key from Anthropic (Claude), OpenAI, or Google (Gemini) and choose which provider to use. Your key is stored in the device Keychain.",
          ],
        },
        {
          heading: "How do I back up or restore my data?",
          paragraphs: [
            "Your sessions, vocabulary cards, notes, and progress are stored on your device. You can export a single backup file and restore it on another device. That file is only ever handled by you.",
          ],
        },
        {
          heading: "How do I delete my data?",
          paragraphs: [
            "Your sessions, vocabulary cards, notes, and progress live on your own device, so deleting the app removes them. You can also delete profiles inside the app. Saved API keys are kept in the device Keychain, which iOS may not clear when an app is deleted.",
          ],
        },
        {
          heading: "Where does my data go?",
          paragraphs: [
            "DOIE does not receive or store your data. Conversation text is sent from your device to the AI provider you chose, under that provider's own terms. The full details are in the privacy policy.",
          ],
          links: [
            { label: "Privacy Policy", href: "https://wren.doie.cc/privacy" },
          ],
        },
        {
          heading: "Something isn't working",
          paragraphs: [
            `Send us a note at ${CONTACT} describing what happened and what you expected. Screenshots are welcome.`,
          ],
        },
      ]}
    />
  );
}
