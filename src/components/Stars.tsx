/** SVG stars (no glyphs). Supports fractional ratings. */
export function Stars({ rating, size = 14, className = "" }: { rating: number; size?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`s${i}-${fill}`}>
                <stop offset={`${fill}%`} stopColor="#C79248" />
                <stop offset={`${fill}%`} stopColor="currentColor" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path fill={`url(#s${i}-${fill})`} d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L10 14.8l-5.4 2.9 1.2-5.9L1.4 7.7l6-.7z" />
          </svg>
        );
      })}
    </span>
  );
}
