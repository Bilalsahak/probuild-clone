import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${site.name} website.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <LegalSection n={1} title="About these terms">
        <p>
          These terms cover your use of this website, operated by {site.registeredName}, doing
          business as {site.name}. By using the site you agree to them. If you do not agree,
          please do not use the site. These terms apply to the website only; they do not govern
          construction work, which is covered by a separate signed contract.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information only; no contract is formed here">
        <p>
          The content here is general information about our services. Nothing on the site, and no
          estimate, timeline, or scope discussed through the site&rsquo;s form, by email, or by
          phone, is a binding offer or contract. Estimates are non-binding and may change after a
          site visit. We begin work only after a written contract is signed by you and by us.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Our content and third-party content">
        <p>
          The text, layout, and logo on this site belong to {site.name} or are used with
          permission. Third-party names, trademarks and products that appear on the site or in
          photos belong to their owners, and their appearance does not mean they endorse us or we
          them. You may view and share links to the site, but you may not copy, republish, or
          misrepresent our content or branding without our written permission.
        </p>
        <p>
          Photos show job-site work by members of our crew. Some were taken before {site.shortName}
          {" "}began operating in Washington, and they are not a promise of any particular result on
          your project.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Not professional advice">
        <p>
          General information on this site, including pages about trades, timelines and cost drivers,
          is not architectural, engineering, legal, or other professional advice. Building codes and
          permit rules vary by jurisdiction and project. We do not provide architectural or
          engineering services; where drawings or engineering are required, they are prepared by
          independent licensed professionals.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Third-party links and services">
        <p>
          The site links to or can load services run by others, such as Calendly, Formspree and
          LinkedIn. Their terms and privacy policies apply to your use of them, and we are not
          responsible for their content or practices. See our{" "}
          <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Website provided as is; limitation of liability">
        <p>
          The website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We try to
          keep it accurate and available but do not promise that it will be error-free or
          uninterrupted. To the extent the law allows, we are not liable for indirect or
          consequential losses arising from your use of the website. This does not limit any
          liability that cannot be limited by law, and it does not apply to services we perform
          under a signed contract, which are governed by that contract.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Warranty, cancellation and disputes for construction work">
        <p>
          Warranty terms, cancellation rights, change orders, payment terms, and how disputes are
          handled for any project are set out in your signed contract and the notices Washington
          law requires, not on this website.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Governing law">
        <p>
          These terms are governed by the laws of the State of Washington. Any dispute about the
          website will be heard in the courts located in {site.venue}, unless the law requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Changes">
        <p>
          We may update these terms. The effective date above shows the latest version. Continued
          use of the site after a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Contact and accessibility">
        <p>
          Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
          {site.phone}, {site.address.full}. If you have difficulty using any part of this site,
          contact us and we will help you another way and work to fix the problem.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
