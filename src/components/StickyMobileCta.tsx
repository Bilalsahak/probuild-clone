import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function StickyMobileCta() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-parchment/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(20,41,63,0.14)] supports-[backdrop-filter]:bg-parchment/85 supports-[backdrop-filter]:backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <Button href={site.phoneHref} variant="secondary" compact className="w-full text-center">
          Call<span className="sr-only"> {site.phone}</span>
        </Button>
        <Button href={site.calendly} external variant="secondary" compact className="w-full text-center">
          Book free<span className="sr-only"> estimate (opens Calendly in a new tab)</span>
        </Button>
        <Button href="/contact/" compact className="w-full text-center">
          Get quote
        </Button>
      </div>
    </nav>
  );
}
