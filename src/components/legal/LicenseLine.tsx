import { site } from "@/config/site";

/**
 * The L&I registration line required next to the business name/address
 * (RCW 18.27.100). Renders the same facts everywhere from src/config/site.ts.
 *
 * variant="full"    -> name, registration, UBI, address, phone + verify + COI lines
 * variant="compact" -> one line (name · registration · UBI · phone)
 */
export function LicenseLine({
  variant = "full",
  className = "",
  linkClassName = "underline underline-offset-2",
}: {
  variant?: "full" | "compact";
  className?: string;
  linkClassName?: string;
}) {
  if (variant === "compact") {
    return (
      <p className={className}>
        {site.registeredName} · WA Contractor Registration No. {site.registrationNo} · UBI{" "}
        {site.ubi} · {site.phone}
      </p>
    );
  }
  return (
    <div className={className}>
      <p>
        {site.registeredName} · WA Contractor Registration No. {site.registrationNo} · UBI{" "}
        {site.ubi} · {site.address.full} · {site.phone}
      </p>
      <p className="mt-2">
        Verify registration, bond and workers&rsquo; comp status with{" "}
        <a href={site.lniVerifyUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          WA L&amp;I<span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Certificate of insurance available on request.
      </p>
    </div>
  );
}
