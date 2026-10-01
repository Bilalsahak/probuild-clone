import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PermitNotice } from "@/components/legal/PermitNotice";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Preconstruction, permitting coordination, construction, and closeout: how a Seattle MasterFix project runs.",
  alternates: { canonical: "/how-we-work/" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Process</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              From first call to closeout
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              Four stages so you know what happens next, what we need from you, and when to expect
              updates.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <ProcessTimeline />
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink/10 pt-12">
            <PermitNotice />
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cost clarity"
              title="What an estimate is, and isn't"
              body="Estimates from this website, email, or a phone call are informational and non-binding. Work begins only after a written contract is signed. The contract sets the scope, price, schedule, warranty, and how changes and disputes are handled. If conditions change once work starts, we will tell you early."
            />
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.1}>
            <Button href="/contact/" variant="primary" className="!bg-ink !text-parchment">
              Request an estimate
            </Button>
            <Button href="/contact/#book" variant="secondary">
              Book a consultation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
