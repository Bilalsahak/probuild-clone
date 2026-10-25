/**
 * GA4 event helper. Safe to call anytime: it does nothing unless gtag has been
 * loaded (which only happens after the visitor allows Analytics). Never pass PII.
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", event, { form_location: window.location.pathname, ...params });
  } catch {
    /* never break the page for analytics */
  }
}
