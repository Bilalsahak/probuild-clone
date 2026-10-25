import { getWarrantyTerms, site } from "@/config/site";

/**
 * Trust line (RCW 18.27.100-safe wording: never "bonded and insured").
 * The warranty line renders only after the owner sets real `warrantyTerms` in site.ts.
 */
export function TrustLine({
  className = "",
  linkClassName = "underline underline-offset-2",
}: {
  className?: string;
  linkClassName?: string;
}) {
  const warranty = getWarrantyTerms();
  return (
    <div className={className}>
      <p>
        <a href={site.lniVerifyUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          WA-registered contractor #{site.registrationNo} · Bond &amp; insurance verifiable via WA
          L&amp;I<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
      {warranty ? <p className="mt-2">Warranty: {warranty}</p> : null}
    </div>
  );
}
