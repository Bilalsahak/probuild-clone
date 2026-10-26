import { Container } from "@/components/Section";
import { Stars } from "@/components/Stars";
import { googleListing, reviews, type Review } from "@/content/reviews";

function isValid(r: Review) {
  return (
    !!r.author.trim() &&
    (r.platform === "Google" || r.platform === "Yelp") &&
    /^https:\/\//.test(r.url) &&
    !!r.text.trim() &&
    r.rating >= 1 &&
    r.rating <= 5
  );
}
export const validReviews = reviews.filter(isValid);
const monthYear = (d: string) =>
  new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long" });

/** Rating summary + genuine review cards. Renders nothing unless real, linked reviews exist. */
export function Reviews() {
  const list = validReviews.slice(0, 3);
  if (list.length === 0) return null;
  const { rating, reviewCount, url } = googleListing;
  const cols = list.length === 1 ? "md:grid-cols-[17rem_1fr]" : list.length === 2 ? "md:grid-cols-[17rem_1fr_1fr]" : "md:grid-cols-2 lg:grid-cols-[17rem_1fr_1fr_1fr]";
  return (
    <section className="bg-ink py-16 text-paper md:py-20" aria-labelledby="reviews-h">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze">Reviews from Google</p>
        <h2 id="reviews-h" className="mt-2 font-display text-2xl md:text-3xl">What clients wrote publicly</h2>
        <div className={`mt-8 grid gap-4 ${cols}`}>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-bronze/30 bg-white/[0.05] p-6 text-center backdrop-blur-md">
            <p className="font-display text-5xl font-bold text-bronze">{rating.toFixed(1)}</p>
            <Stars rating={rating} size={18} className="mt-2 text-paper" />
            <p className="mt-2 text-xs text-paper/70">
              {`${reviewCount} Google ${reviewCount === 1 ? "review" : "reviews"}`}
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full border border-bronze/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-bronze hover:bg-bronze hover:text-ink">
              Leave a review on Google<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          {list.map((r) => (
            <figure key={r.author + r.date} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-bronze font-semibold text-ink">{r.author.charAt(0)}</span>
                <figcaption>
                  <span className="block text-sm font-semibold">{r.author}</span>
                  <span className="block text-xs text-paper/60">{`${monthYear(r.date)} · on ${r.platform}`}</span>
                </figcaption>
                <span className="ml-auto" role="img" aria-label={`${r.rating} out of 5`}><Stars rating={r.rating} className="text-paper" /></span>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-paper/85">{r.text}</blockquote>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs text-bronze underline underline-offset-2">
                {`Read on ${r.platform}`}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
