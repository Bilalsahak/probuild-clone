"use client";

import { useRef, useState } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { useFocusTrap } from "@/lib/useFocusTrap";

export function PreferencesDialog({ onClose }: { onClose: () => void }) {
  const { choices, save, acceptAll, rejectNonEssential } = useConsent();
  const [embeds, setEmbeds] = useState(choices.embeds);
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true, onClose);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center bg-ink/80 p-3 sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        aria-describedby="cookie-prefs-desc"
        tabIndex={-1}
        className="max-h-[92svh] w-full max-w-xl overflow-y-auto rounded-[2px] bg-paper p-6 text-charcoal shadow-2xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-prefs-title" className="font-display text-3xl text-ink">
            Cookie settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cookie settings"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] border border-ink/30 text-ink hover:bg-ink/5"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>
        <p id="cookie-prefs-desc" className="mt-3 text-sm leading-relaxed text-charcoal/80">
          Choose which optional categories we may use. Your choice is saved in this browser only.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-[2px] border border-ink/15 bg-parchment p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-ink">Essential</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/80">
                Always on
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
              Needed for the site to work and to remember this choice. Our site does not set
              tracking cookies.
            </p>
          </div>

          <div className="rounded-[2px] border border-ink/15 bg-parchment p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 id="embeds-label" className="font-semibold text-ink">
                Third-party embedded content
              </h3>
              <label className="relative inline-flex h-11 min-w-11 cursor-pointer items-center">
                <input
                  type="checkbox"
                  role="switch"
                  aria-labelledby="embeds-label"
                  checked={embeds}
                  onChange={(e) => setEmbeds(e.target.checked)}
                  className="peer h-6 w-11 cursor-pointer appearance-none rounded-full border border-ink/50 bg-white transition-colors checked:border-ink checked:bg-ink"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[3px] h-4 w-4 rounded-full bg-ink transition-transform peer-checked:translate-x-5 peer-checked:bg-parchment"
                />
              </label>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
              Lets us offer the Calendly scheduling calendar on the Contact page. Calendly is run
              by a third party and may set its own cookies once loaded. It stays off until you
              allow it here <em>and</em> click &ldquo;Load calendar&rdquo;.
            </p>
          </div>

          <p className="text-sm text-charcoal/80">
            We do not use analytics or advertising trackers.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => save({ embeds })}
            className="inline-flex min-h-11 items-center justify-center rounded-[2px] bg-ink px-5 text-xs font-semibold uppercase tracking-[0.14em] text-parchment hover:bg-ink-mid"
          >
            Save choices
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex min-h-11 items-center justify-center rounded-[2px] border border-ink/40 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:bg-ink/5"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="inline-flex min-h-11 items-center justify-center rounded-[2px] border border-ink/40 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:bg-ink/5"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </div>
  );
}
