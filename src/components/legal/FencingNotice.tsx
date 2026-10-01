export function FencingNotice() {
  return (
    <aside
      aria-labelledby="fence-notice-title"
      className="rounded-[2px] border border-ink/15 bg-parchment p-6"
    >
      <h2 id="fence-notice-title" className="font-display text-2xl text-ink">
        Property lines and utilities
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
        You are responsible for confirming where your property line is; a survey may help if it is
        unclear. Before digging, utility locates are requested through Washington&rsquo;s
        &ldquo;811&rdquo; call-before-you-dig service.
      </p>
    </aside>
  );
}
