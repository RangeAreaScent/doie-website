"use client";

import { useMemo, useState } from "react";
import { company } from "../../content/company";

// Temporary catch-all for Snap — its 18 apps each have their own support page
// (/snap/<slug>/support), so this is just one entry here, not all 18.
const PRODUCTS = ["HiSS", "Wren", "Moderari", "Loot Marker", "Snap"];

// No backend on this static site, so this is a client-side "smart mailto":
// pick a product and (optionally) write a note, and it builds a pre-filled
// mailto: link. Sending still happens in the visitor's own mail app.
export function SupportMailTool() {
  const [app, setApp] = useState(PRODUCTS[0]);
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({ subject: `Support: ${app}` });
    if (message.trim()) params.set("body", message);
    return `mailto:${company.supportEmail}?${params.toString()}`;
  }, [app, message]);

  return (
    <div className="mt-8 border border-[var(--color-line)] p-6">
      <label className="block text-[13px] font-medium text-[var(--color-ink)]">
        Which product?
        <select
          value={app}
          onChange={(e) => setApp(e.target.value)}
          className="mt-2 block w-full border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 text-[15px] text-[var(--color-ink)]"
        >
          {PRODUCTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-[13px] font-medium text-[var(--color-ink)]">
        What's going on? (optional)
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="A sentence or two is plenty."
          className="mt-2 block w-full border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]"
        />
      </label>

      <a
        href={mailtoHref}
        className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 code-mono text-[14px] text-white transition hover:brightness-110"
      >
        Open in your email app →
      </a>
    </div>
  );
}
