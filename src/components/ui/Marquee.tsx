"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

export function TradeMarquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const animate = !reduce && !paused;
  const row = animate || !reduce ? [...items, ...items] : items;

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink text-parchment">
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
              className="inline-flex items-center gap-8 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-parchment/85"
            >
              <span aria-hidden className="text-bronze">◆</span>
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
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[2px] border border-white/40 bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-parchment hover:bg-ink-soft"
        >
          {paused ? "Play scrolling text" : "Pause scrolling text"}
        </button>
      ) : null}
    </div>
  );
}
