"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * Tidio live chat — always-visible brand launcher, real Tidio panel on demand.
 *
 * Root cause of the missing bot (PR #7, Nov 2026): two stacked causes.
 * 1. Consent gate: this component returned null until the visitor allowed
 *    third-party embedded content, so undecided visitors saw no chat at all.
 * 2. CSP: public/_headers set `frame-src https://calendly.com` with no
 *    'self'. Tidio renders inside srcdoc / about:blank iframes, which need
 *    'self' in frame-src, so even after Accept All the widget frame was
 *    refused and no bubble appeared. The loader script itself loaded fine
 *    (script-src already allowed code.tidio.co) — only the visible widget
 *    was blocked.
 *
 * Fix, per Bill's approved placement (bottom-right, above the sticky bar):
 * - A brand launcher button (ink navy #14293F, white chat icon, bronze dot,
 *   52px) is always visible, even before cookie consent. It is the bubble.
 * - The Tidio script still loads only after embeds consent — tapping the
 *   launcher is an explicit request, so it grants embeds consent first and
 *   then loads Tidio. Consented visitors load Tidio lazily (first scroll or
 *   6s), so the greeting can never cover the hero on load.
 * - Once Tidio is ready its own bubble is hidden (documented Tidio
 *   custom-button pattern: hide() on ready, show() + open() on tap,
 *   hide() again on close) and the panel is recoloured navy via
 *   tidioChatApi.setColorPalette. Positioning goes through adjustStyles.
 * - A small greeting pill appears after the same delay/scroll, once per
 *   session, and never re-pops after it is dismissed or the chat is opened.
 * - The open panel is dismissed with Tidio's own close button and leaves
 *   just the launcher. Nothing here is a fake chat UI: every tap opens the
 *   real Tidio / Lyro panel.
 */

const TIDIO_SRC = "https://code.tidio.co/uijyzmn5bisfm77pabupidugeqjy1skl.js";
const TIDIO_NAVY = "#14293F";
const GREETED_KEY = "mf_tidio_greeted";
const LOAD_DELAY_MS = 6000;

type TidioApi = {
  on: (event: "ready" | "open" | "close", cb: () => void) => void;
  hide: () => void;
  show: () => void;
  open: () => void;
  close: () => void;
  setColorPalette: (color: string) => void;
  adjustStyles: (css: string) => void;
  display: (show: boolean) => void;
};

declare global {
  interface Window {
    tidioChatApi?: TidioApi;
  }
}

function readFlag(key: string): boolean {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(key: string): void {
  try {
    sessionStorage.setItem(key, "1");
  } catch {
    /* storage unavailable: flag applies for this page view only */
  }
}

function getApi(): TidioApi | undefined {
  return typeof window !== "undefined" ? window.tidioChatApi : undefined;
}

export function TidioChat() {
  const { ready, choices, save } = useConsent();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingDismissed, setGreetingDismissed] = useState(false);
  const openQueued = useRef(false);

  const loadTidio = useCallback(() => setShouldLoad(true), []);

  // Read the per-session greeting flag after mount (no sessionStorage in SSR).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (readFlag(GREETED_KEY)) setGreetingDismissed(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Consented visitors: load Tidio lazily — first scroll or 6s, whichever is
  // first — so nothing from the widget can cover the hero on load.
  useEffect(() => {
    if (!ready || !choices.embeds || shouldLoad) return;
    const timer = window.setTimeout(loadTidio, LOAD_DELAY_MS);
    const onScroll = () => loadTidio();
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ready, choices.embeds, shouldLoad, loadTidio]);

  // Greeting pill: same delay/scroll trigger, once per session, never while
  // the panel is open.
  useEffect(() => {
    if (greetingDismissed || chatOpen) return;
    const timer = window.setTimeout(() => setShowGreeting(true), LOAD_DELAY_MS);
    const onScroll = () => setShowGreeting(true);
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [greetingDismissed, chatOpen]);

  const applyBrand = useCallback(() => {
    const t = getApi();
    if (!t) return;
    try {
      // Brand colour for the panel; position for bubble + panel. The loader
      // queues calls made before 'ready', so this is safe to call early.
      t.setColorPalette(TIDIO_NAVY);
      t.adjustStyles("#tidio { bottom: 20px !important; right: 20px !important; }");
      t.adjustStyles(
        "@media only screen and (max-width: 767px) { #tidio { bottom: 88px !important; right: 12px !important; } }"
      );
      // Hide Tidio's own (blue, full-size) bubble: our launcher is the bubble.
      t.hide();
    } catch {
      /* Tidio not ready yet; queued calls apply when it is */
    }
  }, []);

  const handleReady = useCallback(() => {
    const t = getApi();
    if (!t) return;
    try {
      t.on("ready", () => {
        setApiReady(true);
        applyBrand();
      });
      t.on("open", () => setChatOpen(true));
      t.on("close", () => {
        setChatOpen(false);
        try {
          t.hide();
        } catch {
          /* ignore */
        }
      });
    } catch {
      /* ignore */
    }
    applyBrand();
  }, [applyBrand]);

  // If the visitor tapped chat before the script finished loading, open it
  // as soon as the widget is ready.
  useEffect(() => {
    if (!apiReady || !openQueued.current) return;
    openQueued.current = false;
    const t = getApi();
    try {
      t?.show();
      t?.open();
    } catch {
      /* ignore */
    }
  }, [apiReady]);

  const openChat = useCallback(() => {
    setShowGreeting(false);
    setGreetingDismissed(true);
    writeFlag(GREETED_KEY);
    if (!choices.embeds) {
      // Tapping chat is an explicit request for live chat: turn on embedded
      // content for chat. The Tidio script still never loads before this.
      save({ embeds: true, analytics: choices.analytics });
    }
    openQueued.current = true;
    loadTidio();
    const t = getApi();
    try {
      t?.show();
      t?.open();
    } catch {
      /* not loaded yet; the effect above opens it once ready */
    }
  }, [choices, save, loadTidio]);

  const dismissGreeting = useCallback(() => {
    setShowGreeting(false);
    setGreetingDismissed(true);
    writeFlag(GREETED_KEY);
  }, []);

  return (
    <>
      {shouldLoad && (
        <Script
          src={TIDIO_SRC}
          strategy="lazyOnload"
          onReady={handleReady}
          onError={() => setLoadFailed(true)}
        />
      )}

      {/* Brand launcher — the chat bubble. Always visible, even before
          consent; bottom-right, lifted above the sticky mobile CTA bar. */}
      {!chatOpen && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Chat with us — open live chat"
          aria-expanded={chatOpen}
          className="fixed bottom-[88px] right-3 z-[70] grid h-[52px] w-[52px] place-items-center rounded-full bg-ink text-parchment shadow-lg ring-1 ring-bronze/60 transition hover:bg-ink-mid md:bottom-5 md:right-5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3.5c-4.97 0-9 3.13-9 7 0 2.2 1.21 4.16 3.09 5.46-.08.9-.4 2.04-1.09 3.04 1.5-.1 3.06-.72 4.1-1.5.6.11 1.24.18 1.9.18 4.97 0 9-3.13 9-7s-4.03-7-9-7Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M8 10.5h.01M12 10.5h.01M16 10.5h.01"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <span
            aria-hidden
            className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-bronze ring-2 ring-ink"
          />
        </button>
      )}

      {/* Small greeting pill: after a few seconds / on scroll, once per
          session, restrained — never covering the hero on load. */}
      {showGreeting && !chatOpen && !loadFailed && (
        <div
          role="status"
          className="fixed bottom-[148px] right-3 z-[70] w-[240px] rounded-[2px] border-l-2 border-bronze bg-paper p-3 text-left shadow-lg md:bottom-[84px] md:right-5"
        >
          <button
            type="button"
            onClick={dismissGreeting}
            aria-label="Dismiss chat greeting"
            className="absolute right-1 top-1 grid h-11 w-11 place-items-center rounded-full text-charcoal/60 hover:text-charcoal"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <p className="pr-5 font-display text-lg leading-tight text-ink">
            Questions about a project?
          </p>
          <button
            type="button"
            onClick={openChat}
            className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink underline decoration-bronze decoration-2 underline-offset-2 hover:text-ink-mid"
          >
            Chat with us
          </button>
        </div>
      )}

      {/* If Tidio itself cannot load, the button still has to do something. */}
      {loadFailed && !chatOpen && (
        <div
          role="status"
          className="fixed bottom-[148px] right-3 z-[70] w-[240px] rounded-[2px] border-l-2 border-bronze bg-paper p-3 text-left shadow-lg md:bottom-[84px] md:right-5"
        >
          <p className="font-display text-lg leading-tight text-ink">Chat isn&rsquo;t loading</p>
          <p className="mt-1 text-xs leading-relaxed text-charcoal/80">
            Please call us instead:{" "}
            <a href="tel:+12065504576" className="font-semibold text-ink underline underline-offset-2">
              (206) 550-4576
            </a>
          </p>
        </div>
      )}
    </>
  );
}
