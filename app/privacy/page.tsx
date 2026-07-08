import type { Metadata } from "next";
import { companyPrivacy } from "../../content/legal";
import { LegalShell } from "../../components/legal/LegalShell";

export const metadata: Metadata = { title: "DOIE — Privacy Policy" };

export default function Page() {
  const doc = companyPrivacy();
  return <LegalShell {...doc} backLabel="Back to DOIE" backHref="/" />;
}
