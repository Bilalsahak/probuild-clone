"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * Click-to-load Calendly.
 *  - No Calendly script or iframe is requested until the visitor (1) has allowed
 *    third-party embedded content AND (2) clicks "Load calendar".
 *  - A plain link that opens calendly.com in a new tab is always available.
 */
export function CalendlyEmbed() {
  const { choices, openPreferences } = useConsent();
  const [loaded, setLoaded] = useState(false);

  const linkCls =
    "inline-flex min-h-11 items-center justify-center rounded-[2px] bg-ink px-5 text-xs font-semibold uppercase tracking-[0.14em] text-parchment hover:bg-ink-mid";
  const ghostCls =
    "inline-flex min-h-11 items-center justify-center rounded-[2px] border border-ink/40 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:bg-ink/5";

  return (
    <div>
      <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={`${linkCls} w-full`}>
        Book on Calendly<span className="sr-only"> (opens in a new tab)</span>
      </a>
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
            <button type="button" onClick={() => setLoaded(true)} className={`${ghostCls} mt-3`}>
              Load calendar
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-charcoal/80">
              The embedded calendar is off because third-party embedded content is not allowed in
              your cookie settings.
            </p>
            <button type="button" onClick={openPreferences} className={`${ghostCls} mt-3`}>
              Open cookie settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
