"use client";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { Stars } from "@/components/Stars";
import { googleListing, reviews } from "@/content/reviews";

const KEY = "mf-review-badge-dismissed";

const listeners = new Set<() => void>();
let dismissed = false;
function subscribe(cb: () => void) { listeners.add(cb); return () => { listeners.delete(cb); }; }
function readShow() {
  if (dismissed) return false;
  try { return sessionStorage.getItem(KEY) !== "1"; } catch { return true; }
}
function dismiss() {
  dismissed = true;
  try { sessionStorage.setItem(KEY, "1"); } catch {}
  listeners.forEach((l) => l());
}

/**
 * Small fixed rating pill, bottom-left on tablet/desktop only.
 * Hidden on small screens and on /contact/: at ~640px it floated over the
 * estimate form fields, the Calendly month header and footer text (live
 * browser check, Nov 2026). The rating is still shown in the Reviews
 * section on the homepage. Fixed-position = no layout shift.
 */
export function ReviewBadge() {
  const pathname = usePathname();
  const show = useSyncExternalStore(subscribe, readShow, () => false);
  if (!show || reviews.length === 0 || googleListing.reviewCount < 1) return null;
  if (pathname?.startsWith("/contact")) return null;
  const { rating, reviewCount, url } = googleListing;
  return (
    <div className="fixed bottom-5 left-5 z-40 hidden items-center rounded-full border border-bronze/40 bg-ink/85 text-paper shadow-lg backdrop-blur-md md:flex">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 pl-3.5 pr-1 text-xs">
        <span className="font-bold text-bronze">{rating.toFixed(1)}</span>
        <Stars rating={rating} size={12} className="text-paper" />
        <span className="text-paper/75">{`${reviewCount} Google ${reviewCount === 1 ? "review" : "reviews"}`}</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <button type="button" aria-label="Dismiss reviews badge" onClick={() => { dismiss(); }} className="grid h-8 w-8 place-items-center rounded-full text-paper/60 hover:text-paper">
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" /></svg>
      </button>
    </div>
  );
}
