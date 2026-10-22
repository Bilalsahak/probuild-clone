import { Container, SectionHeading } from "@/components/Section";
import { reviews, type Review } from "@/content/reviews";

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

/** Renders nothing unless src/content/reviews.ts holds genuine, linked reviews. */
export function Reviews() {
  const list = reviews.filter(isValid);
  if (list.length === 0) return null;
  return (
    <section className="bg-gradient-to-b from-paper to-parchment py-20 md:py-28" aria-labelledby="reviews-h">
      <Container>
        <SectionHeading eyebrow="Reviews" title="What customers wrote publicly" />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <li key={r.url} className="flex h-full flex-col rounded-[2px] border border-ink/10 bg-paper p-7">
              <p className="text-bronze-deep" aria-label={`${r.rating} out of 5 stars on ${r.platform}`}>
                {"\u2605".repeat(r.rating)}
                <span aria-hidden className="text-ink/20">{"\u2605".repeat(5 - r.rating)}</span>
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/90">{r.text}</blockquote>
              <p className="mt-5 text-xs text-charcoal/80">
                {r.author} · {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })} ·{" "}
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Read on {r.platform}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
