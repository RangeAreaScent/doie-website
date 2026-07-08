import type { Metadata } from "next";
import { companyTerms } from "../../content/legal";
import { LegalShell } from "../../components/legal/LegalShell";

export const metadata: Metadata = { title: "DOIE — Terms of Use" };

export default function Page() {
  const doc = companyTerms();
  return <LegalShell {...doc} backLabel="Back to DOIE" backHref="/" />;
}
