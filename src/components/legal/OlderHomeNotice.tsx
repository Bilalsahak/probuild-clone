/**
 * Short pre-1978 lead / asbestos notice shown on trade pages.
 * We deliberately do NOT claim EPA RRP certification. If the owner holds EPA/WA
 * lead-safe renovation firm certification, add the sentence in README "Owner to-do".
 */
export function OlderHomeNotice() {
  return (
    <aside
      aria-labelledby="older-home-title"
      className="rounded-[2px] border border-bronze-deep/40 bg-parchment p-6"
    >
      <h2 id="older-home-title" className="font-display text-2xl text-ink">
        Homes built before 1978
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
        Older homes may contain lead-based paint, and older materials such as siding, flooring,
        joint compound and texture may contain asbestos. If your home was built before 1978,
        tell us when you request an estimate. We will go over the lead-safety information required
        before work begins on a covered older home and discuss testing before disturbing
        suspect materials.
      </p>
    </aside>
  );
}
