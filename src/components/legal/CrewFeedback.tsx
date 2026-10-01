import { SHOW_CREW_FEEDBACK } from "@/config/features";
import { crewFeedback } from "@/content/crewFeedback";
import { Container, Eyebrow } from "@/components/Section";

/**
 * OPTIONAL, DISABLED BY DEFAULT. Renders nothing unless
 * NEXT_PUBLIC_SHOW_CREW_FEEDBACK=true AND at least one item has
 * `consentObtained: true` with a real year and source.
 *
 * Deliberately has no star graphics, no rating, no Google logo/link, and is
 * never described as "reviews" or "clients". Only items with written consent
 * are rendered; each card carries state, year, and "Not a Seattle MasterFix
 * customer".
 */
export function CrewFeedback() {
  if (!SHOW_CREW_FEEDBACK) return null;
  const items = crewFeedback.filter(
    (i) => i.consentObtained && !i.year.includes("OWNER") && !i.source.includes("OWNER")
  );
  if (items.length === 0) return null;

  return (
    <section className="bg-paper py-16 md:py-24" aria-labelledby="crew-feedback-title">
      <Container>
        <Eyebrow>About this feedback</Eyebrow>
        <h2 id="crew-feedback-title" className="mt-4 font-display text-3xl text-ink md:text-4xl">
          Comments about our crew&rsquo;s earlier work
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal/85">
          The comments below concern work performed by members of our crew in{" "}
          {Array.from(new Set(items.map((i) => i.state))).join(", ")} in{" "}
          {Array.from(new Set(items.map((i) => i.year))).join(", ")}, before Seattle MasterFix
          began operating in Washington. They are not reviews of Seattle MasterFix and were not
          posted on our Google Business Profile. Published with the writer&rsquo;s written
          permission.
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((i) => (
            <li key={i.quote} className="rounded-[2px] border border-ink/15 bg-parchment p-6">
              <blockquote className="text-base leading-relaxed text-charcoal">
                &ldquo;{i.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-charcoal/85">
                {i.role}, {i.state}, {i.year}. Not a Seattle MasterFix customer.
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
