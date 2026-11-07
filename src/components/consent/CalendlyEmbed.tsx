"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { useConsent } from "@/components/consent/ConsentProvider";
import { Button } from "@/components/ui/Button";

/**
 * Click-to-load Calendly.
 *  - No Calendly script or iframe is requested until the visitor (1) has allowed
 *    third-party embedded content AND (2) clicks "Load calendar".
 *  - A plain link that opens calendly.com in a new tab is always available.
 */
export function CalendlyEmbed() {
  const { choices, openPreferences } = useConsent();
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <Button href={site.calendly} external variant="dark" className="w-full">
        Book on Calendly<span className="sr-only"> (opens in a new tab)</span>
      </Button>
      <p className="mt-3 text-xs leading-relaxed text-charcoal/80">
        Opens calendly.com in a new tab. Calendly&rsquo;s own terms and privacy policy apply there.
      </p>

      <div className="mt-5 border-t border-ink/10 pt-5">
        {loaded && choices.embeds ? (
          <iframe
            title="Calendly: book a consultation with Seattle MasterFix"
            src={`${site.calendly}?hide_gdpr_banner=1`}
            className="h-[640px] w-full rounded-[2px] border border-ink/15 bg-white"
            loading="lazy"
          />
        ) : choices.embeds ? (
          <div>
            <p className="text-sm text-charcoal/80">
              Prefer to book without leaving this page? Loading the calendar connects your browser
              to Calendly.
            </p>
            <Button onClick={() => setLoaded(true)} variant="secondary" className="mt-3">
              Load calendar
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-charcoal/80">
              The embedded calendar is off because third-party embedded content is not allowed in
              your cookie settings.
            </p>
            <Button onClick={openPreferences} variant="secondary" className="mt-3">
              Open cookie settings
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
