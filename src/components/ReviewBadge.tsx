"use client";
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

/** Small fixed rating pill, bottom-left. Fixed-position = no layout shift. Sits above the mobile sticky CTA. */
export function ReviewBadge() {
  const show = useSyncExternalStore(subscribe, readShow, () => false);
  if (!show || reviews.length === 0 || googleListing.reviewCount < 1) return null;
  const { rating, reviewCount, url } = googleListing;
  return (
    <div className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] left-3 z-40 flex items-center rounded-full border border-bronze/40 bg-ink/85 text-paper shadow-lg backdrop-blur-md md:bottom-5 md:left-5">
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
