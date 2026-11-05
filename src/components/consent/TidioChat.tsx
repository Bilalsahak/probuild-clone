"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * Tidio live chat, loaded only after the visitor allows third-party embedded
 * content — the same consent gate as the Calendly embed. Before this change
 * the script loaded on every page regardless of cookie choice, while the
 * privacy policy said embedded content loads only with permission.
 * When embeds are off, there is no chat bubble at all.
 */
export function TidioChat() {
  const { ready, choices } = useConsent();
  if (!ready || !choices.embeds) return null;
  return (
    <Script
      src="https://code.tidio.co/uijyzmn5bisfm77pabupidugeqjy1skl.js"
      strategy="lazyOnload"
    />
  );
}
