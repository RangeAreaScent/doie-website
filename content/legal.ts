import type { LegalSection } from "../components/legal/LegalShell";
import { company } from "./company";
import type { AppContent } from "./types";

// Standard legal copy, templated per app. Reflects the common SNAP pattern:
// offline, no account, no data collection (SITE_ARCHITECTURE.md §8). If an app
// ever diverges (e.g. a paid subscription), give it its own overrides here.

export const LAST_UPDATED = "July 6, 2026";

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export function appPrivacy(app: AppContent): LegalDoc {
  return {
    title: "Privacy Policy",
    updated: LAST_UPDATED,
    intro: `${app.name} is built by ${company.legalName} (${company.state}). This policy explains what data ${app.name} handles. In short: it collects nothing.`,
    sections: [
      {
        heading: "Data we collect",
        paragraphs: [
          `${app.name} does not collect, transmit, or store any personal data. The app runs entirely on your device and makes no network requests for its core lookup features.`,
          "There are no user accounts, no sign-in, and no analytics or advertising SDKs.",
        ],
      },
      {
        heading: "Data stored on your device",
        paragraphs: [
          `Any content you create in ${app.name} — such as favorites or collections — is stored locally on your device and is never sent to us or to any third party. Removing the app removes this data.`,
        ],
      },
      {
        heading: "Third parties",
        paragraphs: [
          "We do not share data with third parties because we do not collect any. The app is distributed through app stores — the Apple App Store, and on desktop the Mac App Store and Microsoft Store — whose own privacy terms govern the download and any purchase.",
          "If you make an optional in-app purchase or activate a desktop license, that transaction is handled by the app store or payment processor, not by us; we receive no personal data from it beyond what the store provides for order fulfillment.",
        ],
      },
      ...(app.attribution && app.attribution.length > 0
        ? [
            {
              heading: "Data source & attribution",
              paragraphs: app.attribution,
            },
          ]
        : []),
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this policy? Email ${company.supportEmail}.`,
        ],
      },
    ],
  };
}

export function appTerms(app: AppContent): LegalDoc {
  return {
    title: "Terms of Use",
    updated: LAST_UPDATED,
    intro: `These terms govern your use of ${app.name}, an application published by ${company.legalName}.`,
    sections: [
      {
        heading: "License",
        paragraphs: [
          `${company.legalName} grants you a personal, non-transferable license to use ${app.name} on devices you own or control, subject to the terms of service of the app store you obtained it from.`,
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          `You agree not to reverse-engineer, resell, or redistribute ${app.name} or its bundled data except as permitted by law.`,
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          `${app.name} is provided "as is," without warranty of any kind. It is a reference and productivity utility for trained professionals. It is not a substitute for professional, clinical, legal, or regulatory judgment, and ${company.legalName} is not liable for decisions made using the app.`,
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms? Email ${company.supportEmail}.`],
      },
    ],
  };
}

export function appSupport(app: AppContent): LegalDoc {
  return {
    title: "Support",
    updated: LAST_UPDATED,
    intro: `Need help with ${app.name}? We read every message.`,
    sections: [
      {
        heading: "Email us",
        paragraphs: [
          `Email ${company.supportEmail} and we'll get back to you. To help us respond quickly, include your device model, OS version, and the ${app.name} version (Settings → About in the app).`,
        ],
      },
      {
        heading: "Feature requests & data corrections",
        paragraphs: [
          `Spotted an error in the data or want a feature? Send it to ${company.supportEmail} — feedback from working professionals directly shapes each update.`,
        ],
      },
    ],
  };
}

// --- company-level (doie.cc) --------------------------------------------------

export function companyPrivacy(): LegalDoc {
  return {
    title: "Privacy Policy",
    updated: LAST_UPDATED,
    intro: `This policy covers ${company.domain}, the website of ${company.legalNameLong}. Each app has its own privacy policy linked from its page.`,
    sections: [
      {
        heading: "The website",
        paragraphs: [
          `${company.domain} is a static marketing site. We do not use tracking cookies, analytics, or advertising on it, and we do not collect personal information from visitors.`,
        ],
      },
      {
        heading: "Our apps",
        paragraphs: [
          "Our applications are offline utilities that collect no personal data. Each app links to its own privacy policy from its product page.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions? Email ${company.supportEmail}.`],
      },
    ],
  };
}

export function companyTerms(): LegalDoc {
  return {
    title: "Terms of Use",
    updated: LAST_UPDATED,
    intro: `These terms govern your use of ${company.domain}, operated by ${company.legalNameLong}.`,
    sections: [
      {
        heading: "Use of this site",
        paragraphs: [
          `${company.domain} is provided for informational purposes about our products. Content is provided "as is" without warranty of any kind.`,
        ],
      },
      {
        heading: "App terms",
        paragraphs: [
          "Each application is governed by its own terms of use, linked from its product page.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions? Email ${company.supportEmail}.`],
      },
    ],
  };
}

export function companySupport(): LegalDoc {
  return {
    title: "Support",
    updated: LAST_UPDATED,
    intro: `Get in touch with ${company.legalName}.`,
    sections: [
      {
        heading: "Email",
        paragraphs: [
          `For help with any of our apps or general inquiries, email ${company.supportEmail}. If your question is about a specific app, please name it and include your device and OS version.`,
        ],
      },
    ],
  };
}
