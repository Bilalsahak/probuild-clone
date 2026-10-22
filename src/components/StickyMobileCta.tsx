import Link from "next/link";
import { site } from "@/config/site";

export function StickyMobileCta() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-parchment/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(7,21,37,0.14)] supports-[backdrop-filter]:bg-parchment/85 supports-[backdrop-filter]:backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-ink/40 bg-paper px-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Call<span className="sr-only"> {site.phone}</span>
        </a>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-ink/40 bg-paper px-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-ink"
        >
          Book free<span className="sr-only"> estimate (opens Calendly in a new tab)</span>
        </a>
        <Link
          href="/contact/"
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-bronze px-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-ink"
        >
          Get quote
        </Link>
      </div>
    </nav>
  );
}
