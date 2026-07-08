export function TrustBar({ items }: { items: string[] }) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-soft)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-5">
            {i > 0 && (
              <span aria-hidden className="text-[var(--color-line)]">
                /
              </span>
            )}
            <span>{t}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
