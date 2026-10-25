"use client";

import { useEffect } from "react";
import { getGa4Id } from "@/config/site";
import { track } from "@/lib/analytics";

/**
 * Loads Google Analytics 4 only when the visitor has allowed Analytics and a
 * Measurement ID is configured. Consent Mode defaults are "denied"; we grant
 * analytics_storage only on opt-in. Ads signals stay denied.
 * Also tracks clicks on tel: links (call_click) and Calendly links (calendly_click).
 */
export function Analytics({ enabled }: { enabled: boolean }) {
  const id = getGa4Id();

  useEffect(() => {
    if (!id || typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
    if (!enabled) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
      return;
    }
    window.gtag("consent", "update", { analytics_storage: "granted" });
    if (!document.getElementById("ga4-src")) {
      const s = document.createElement("script");
      s.id = "ga4-src";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
      document.head.appendChild(s);
      window.gtag("js", new Date());
      window.gtag("config", id, { anonymize_ip: true, allow_google_signals: false });
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.closest("header") ? "header" : a.closest("footer") ? "footer" : "page";
      if (href.startsWith("tel:")) track("call_click", { link_location: where });
      else if (/calendly\.com/i.test(href)) track("calendly_click", { link_location: where });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [enabled, id]);

  return null;
}
