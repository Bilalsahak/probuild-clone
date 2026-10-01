import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and shares information from this website.`,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection n={1} title="Who we are">
        <p>
          This website is operated by {site.registeredName}, doing business as {site.name}
          {" "}(&ldquo;we&rdquo;, &ldquo;us&rdquo;). We are a Washington-registered contractor
          (Contractor Registration No. {site.registrationNo}, UBI {site.ubi}). Our address is{" "}
          {site.address.full}. You can reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information we collect">
        <p>
          <strong>Information you give us.</strong> When you submit the estimate request form we
          collect the details you enter: your name, email address, phone number, project
          address and company (both optional), the kinds of work you are interested in, project
          details, budget range, desired timeline and property type. We also record whether you
          agreed to be contacted by phone or email, whether you separately opted in to text
          messages, and when. If you email or call us, we keep what you send or say to us.
        </p>
        <p>
          <strong>Information sent automatically with the form.</strong> When you submit the form,
          your browser also sends us the web address of the page you were on, the page you came
          from (the referrer, if your browser provides one), and the time of submission.
        </p>
        <p>
          <strong>Technical and log data.</strong> Like most websites, our hosting and content
          delivery provider (Cloudflare, see below) processes technical data when you load the
          site, including your IP address, browser and device type, and the pages requested. An IP
          address can identify you or your household, and we treat it as personal information.
        </p>
        <p>
          <strong>Scheduling data.</strong> If you choose to book a consultation through Calendly,
          Calendly collects the information you enter there (such as your name, email address and
          the time you choose) under its own privacy policy. We receive that booking information.
        </p>
        <p>
          Please do not send us Social Security numbers, bank or card details, or other sensitive
          information through the form.
        </p>
      </LegalSection>

      <LegalSection n={3} title="How we use information">
        <ul>
          <li>To respond to your request, prepare estimates, and schedule site visits or calls.</li>
          <li>To manage our business records and, if you hire us, perform and document the work.</li>
          <li>To comply with legal, licensing, tax and insurance obligations, and to protect our rights.</li>
          <li>To keep the website secure and working, and to prevent spam and abuse.</li>
        </ul>
        <p>
          We use your information for these purposes because you asked us to contact you about a
          project, because we need it to run our business and meet legal obligations, and, for
          optional text messages, because you consented. We do not use it for advertising.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Service providers that process information for us">
        <ul>
          <li>
            <strong>Formspree</strong> receives and relays estimate form submissions to us. See{" "}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Formspree&rsquo;s privacy policy<span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </li>
          <li>
            <strong>Cloudflare</strong> provides hosting/content delivery and security for this
            site, and processes IP addresses and request data as described above. See{" "}
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
              Cloudflare&rsquo;s privacy policy<span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </li>
          <li>
            <strong>Calendly</strong> provides scheduling. Calendly&rsquo;s embedded calendar is
            not loaded on this site unless you allow third-party embedded content in your cookie
            settings and click &ldquo;Load calendar&rdquo;. A plain link to calendly.com is always
            available. See{" "}
            <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
              Calendly&rsquo;s privacy policy<span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </li>
        </ul>
        <p>
          Our fonts and styles are served from our own site, not from third-party networks. We do not use analytics or advertising trackers.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Cookies and similar technologies">
        <p>
          This site is essential-only by default. It stores one item in your browser&rsquo;s local
          storage to remember your cookie choice. It does not set tracking cookies of its own.
          Third-party embedded content (currently only the Calendly calendar) loads only if you
          allow it and then click to load it, and it may set its own cookies once loaded. Our
          hosting provider may set cookies needed for security and performance; we have not
          confirmed which, if any, and will update this policy if that changes.
        </p>
        <p>
          You can change your choice at any time:{" "}
          <CookieSettingsButton className="font-semibold text-ink underline underline-offset-2" />.
          Your browser settings can also block or delete cookies and stored data.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Sharing">
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>with the service providers listed above, to operate the site and handle your request;</li>
          <li>
            with subcontractors, suppliers, permit offices and licensed professionals, only as needed
            to estimate or carry out work you have asked us to do;
          </li>
          <li>
            when required by law, legal process, or to protect our rights or the safety of others;
          </li>
          <li>in connection with a sale or reorganization of our business.</li>
        </ul>
      </LegalSection>

      <LegalSection n={7} title="Retention">
        <p>
          We keep estimate requests and related communications for as long as we need them to respond to
          you, prepare estimates and manage our business, and as long as the law or our legitimate
          record-keeping needs (such as tax, insurance and licensing) require. Signed contracts,
          required notices and related records are kept for the periods the law requires. We then
          delete or de-identify them.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Security">
        <p>
          We use reasonable measures to protect information, including encrypted (HTTPS)
          connections to this site. No method of transmission or storage is completely secure, so we
          cannot promise absolute security. If a breach affecting your personal information
          occurs, we will notify you and regulators as required by law.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Your choices and rights">
        <p>
          You can ask us to tell you what personal information we hold about you, correct it,
          delete it, or stop using it for a purpose by emailing{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or calling {site.phone}. We may need to
          verify your identity first and may keep information we are legally required or permitted
          to keep.
        </p>
        <p>
          <strong>Calls and email.</strong> Tell us at any time that you do not want to be
          contacted by phone or email and we will stop, except for messages about work already
          under contract.
        </p>
        <p>
          <strong>Text messages.</strong> Text messages are sent only if you opted in on the form.
          Message frequency varies, and message and data rates may apply. Reply STOP to opt out or
          HELP for help. Consent to texts is not a condition of buying anything. We do not share
          mobile numbers or text-message consent with third parties for their marketing.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Children">
        <p>
          This website is not directed to children under 13 and we do not knowingly collect their
          personal information. If you believe a child has sent us information, contact us and we
          will delete it.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Changes to this policy">
        <p>
          We may update this policy. The effective date above shows the latest version. If a change
          is significant we will say so on this page.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Contact us">
        <p>
          Questions about this policy or your information: <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
          {site.phone}, {site.address.full}. See also our{" "}
          <Link href="/terms/">Terms of Use</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
