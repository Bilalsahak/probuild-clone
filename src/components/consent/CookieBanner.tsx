"use client";

import Link from "next/link";
import { useConsent } from "@/components/consent/ConsentProvider";

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-[2px] px-5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors";

export function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useConsent();
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/15 bg-ink px-4 py-5 text-parchment shadow-[0_-16px_50px_rgba(7,21,37,0.35)] md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-xl text-parchment">Your privacy choices</h2>
          <p className="mt-2 text-sm leading-relaxed text-parchment/80">
            This site only uses what it needs to work. With your permission, we can also load
            third-party embedded content, such as the Calendly scheduling calendar. We do not use
            advertising or analytics trackers. You can change your choice any time from
            &ldquo;Cookie settings&rdquo; in the footer. See our{" "}
            <Link href="/privacy/" className="underline decoration-bronze-light underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={acceptAll}
            className={`${btn} bg-bronze text-ink hover:bg-bronze-light`}
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className={`${btn} border border-white/60 text-parchment hover:bg-white/10`}
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className={`${btn} border border-white/30 text-parchment hover:bg-white/10`}
          >
            Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
