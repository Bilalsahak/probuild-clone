import { site } from "@/config/site";
import { services } from "@/content/services";

/**
 * LocalBusiness structured data — verified facts only.
 *  - No aggregateRating / review markup (there are no first-party verified reviews).
 *  - Address, service area and legal name are included ONLY after the owner flips
 *    the matching `...Confirmed` flag in src/config/site.ts.
 */
export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    legalName: site.registeredName,
    url: `${site.url}/`,
    telephone: site.phoneE164,
    email: site.email,
    logo: `${site.url}/logos/smpc-logo-cropped.png`,
    identifier: `WA Contractor Registration ${site.registrationNo}`,
    sameAs: [site.linkedin],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}/` },
    })),
  };

  if (site.addressConfirmed) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    };
  }
  if (site.serviceAreaConfirmed) data.areaServed = site.serviceArea;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
