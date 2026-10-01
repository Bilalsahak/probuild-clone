"use client";

import { useConsent } from "@/components/consent/ConsentProvider";

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie settings
    </button>
  );
}
