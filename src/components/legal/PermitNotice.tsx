import { site } from "@/config/site";

/** Permit-coordination wording (audit snippet C). Owner to confirm who files permits. */
export function PermitNotice() {
  return (
    <aside
      aria-labelledby="permit-notice-title"
      className="rounded-[2px] border border-ink/15 bg-parchment p-6"
    >
      <h2 id="permit-notice-title" className="font-display text-2xl text-ink">
        Permits
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
        Where a permit is required for the work we perform, we prepare and submit the application
        and coordinate inspections, as set out in your written contract. {site.shortName} does not
        provide architectural or engineering services. If drawings or structural engineering are
        required, they are prepared by independent licensed professionals.
      </p>
    </aside>
  );
}
