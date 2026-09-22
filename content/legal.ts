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
  if (app.slug === "hangar-snap") return hangarSnapPrivacy();
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

// Hangar Snap override — ported from the real PRIVACY.md in the app's own
// repo (github.com/RangeAreaScent/Aero-Snap — not yet renamed there), which
// documents actual on-device storage in more detail than the generic
// template above. That source doc predates the FAA+EASA merge, so the EASA/EU
// data-attribution paragraph here is added fresh to match the app as it
// actually ships today; everything else is carried over faithfully.
function hangarSnapPrivacy(): LegalDoc {
  return {
    title: "Privacy Policy",
    updated: LAST_UPDATED,
    intro: `Hangar Snap is built by ${company.legalName} (${company.state}) to be fully offline and tracking-free. This page exists because the App Store requires every app to publish a privacy policy, even one this short.`,
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Hangar Snap does not collect, transmit, or store any personal information on any server. It does not use analytics, advertising, tracking, or third-party SDKs of any kind, and it does not require an account.",
        ],
      },
      {
        heading: "What's stored on your device",
        paragraphs: [
          "The app keeps a few things in local storage: the FAA ADs and EASA sections you favorite, your per-tail \"My Aircraft\" collections and folders, the notes and compliance status you attach to entries, and app preferences like theme and citation style.",
          "This data is never sent off the device — there's no sync, no cloud backup managed by the app, and no telemetry. Removing the app removes this data.",
        ],
      },
      {
        heading: "What we don't do",
        paragraphs: [
          "No analytics framework, no advertising SDKs, and no tracking identifiers requested or used. No crash-reporting SDK that uploads data — only Apple's own anonymous, opt-in crash reports, which Apple manages, not us. No remote configuration, A/B testing, or feature flags, and no third-party fonts or web calls.",
          "The only network access the app makes is the optional in-app purchase (Apple StoreKit) and links you tap yourself — to the Federal Register, an official FAA PDF, or an EASA source page. Those open in your browser and are governed by its privacy settings, not ours.",
        ],
      },
      {
        heading: "The Supporter unlock",
        paragraphs: [
          "The optional one-time Supporter purchase runs through Apple StoreKit. Apple receives the standard purchase transaction; we receive only a confirmation that it happened — never your Apple ID, payment method, or billing address.",
          "The purchase is entirely optional. The core app — search across both authorities, favorites, collections, notes, and PDF/CSV export — is fully free with no time limits. The purchase only unlocks the accent-color themes and matching app icons.",
        ],
      },
      {
        heading: "Exported files",
        paragraphs: [
          "PDF and CSV exports are written to your device and handed to the system share sheet. From there you decide who sees the file — Mail, AirDrop, your own files, your shop's software. Hangar Snap does not upload exports anywhere.",
        ],
      },
      {
        heading: "Data source & attribution",
        paragraphs: [
          "US data — FAA Airworthiness Directives (Federal Register), 14 CFR (eCFR), Type Certificate Data Sheets (DRS), and Advisory Circulars — is public domain works of the US Federal Government under 17 U.S.C. § 105.",
          "EU data — EASA Easy Access Rules and TCDS — is reused under Commission Decision 2011/833/EU. Both datasets are bundled as offline snapshots for fast lookup; the in-app source links point at the authoritative live document, not a substitute for it. Hangar Snap is not affiliated with the FAA or EASA.",
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: [
          "Hangar Snap is designed for aviation maintenance professionals — US A&P mechanics, IAs, and owners/operators, and EU Part-66 engineers, Part-145 organisations, and CAMO staff. It is not directed at children under 13 and does not knowingly collect information from them.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this policy? Email ${company.supportEmail}. If you want to see what the app actually does under the hood, the source is at github.com/RangeAreaScent/Aero-Snap.`,
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
    intro: `Get in touch with ${company.legalName}. Each Snap app has its own support page, linked from its download page — this page covers our other products. Pick what you're writing about below and it'll open as a pre-filled email in your own mail app.`,
    sections: [
      {
        heading: "Prefer to email directly?",
        paragraphs: [`Reach us any time at ${company.supportEmail}.`],
      },
    ],
  };
}
