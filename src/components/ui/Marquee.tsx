"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function TradeMarquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  // Pause when scrolled off-screen: no point animating a trade list nobody sees.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const animate = !reduce && !paused && inView;
  const row = animate || !reduce ? [...items, ...items] : items;

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-bronze-deep/20 bg-bronze-light text-ink">
      <ul
        className={`flex gap-0 whitespace-nowrap py-4 ${reduce ? "" : "marquee-track"}`}
        style={animate ? undefined : { animationPlayState: "paused" }}
        aria-label="Trades we work in"
      >
        {row.map((item, i) => {
          const dup = !reduce && i >= items.length;
          return (
            <li
              key={`${item}-${i}`}
              aria-hidden={dup || undefined}
              className="inline-flex items-center gap-8 px-8 text-eyebrow font-semibold uppercase tracking-[0.28em] text-ink"
            >
              <span aria-hidden className="text-bronze-deep">◆</span>
              {item}
            </li>
          );
        })}
      </ul>
      {!reduce ? (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[2px] border border-ink/60 bg-parchment px-3 py-1.5 text-micro font-semibold uppercase tracking-[0.16em] text-ink hover:bg-white"
        >
          {paused ? "Play scrolling text" : "Pause scrolling text"}
        </button>
      ) : null}
    </div>
  );
}
