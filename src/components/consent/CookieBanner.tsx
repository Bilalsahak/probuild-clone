"use client";

import Link from "next/link";
import { useConsent } from "@/components/consent/ConsentProvider";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useConsent();
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/20 bg-ink px-4 supports-[backdrop-filter]:bg-ink/90 supports-[backdrop-filter]:backdrop-blur-md py-5 text-parchment shadow-[0_-16px_50px_rgba(20,41,63,0.35)] md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-lg text-parchment sm:text-xl">Your privacy choices</h2>
          <p className="mt-1.5 text-[13px] leading-snug text-parchment/85 sm:text-sm sm:leading-relaxed">
            This site only uses what it needs to work. With your permission, we can also load
            third-party embedded content, such as the Calendly scheduling calendar, live chat, and Google
            Analytics to understand how the site is used. We do not use advertising trackers. You can change your choice any time from
            &ldquo;Cookie settings&rdquo; in the footer. See our{" "}
            <Link href="/privacy/" className="underline decoration-bronze-light underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        {/* All three choices are equal-weight buttons through the shared
            Button component — Reject and Preferences are not smaller than
            Accept. */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <Button onClick={acceptAll} className="col-span-2 sm:col-span-1">
            Accept all
          </Button>
          <Button onClick={rejectNonEssential} variant="ghost">
            Reject non-essential
          </Button>
          <Button onClick={openPreferences} variant="ghost">
            Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
