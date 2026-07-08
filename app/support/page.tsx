import type { Metadata } from "next";
import { companySupport } from "../../content/legal";
import { LegalShell } from "../../components/legal/LegalShell";

export const metadata: Metadata = { title: "DOIE — Support" };

export default function Page() {
  const doc = companySupport();
  return <LegalShell {...doc} backLabel="Back to DOIE" backHref="/" />;
}
