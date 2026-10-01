import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/Section";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { site } from "@/config/site";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-parchment pb-20 pt-32 md:pb-28 md:pt-40">
      <Container className="max-w-4xl">
        <div className="rounded-[2px] border border-ink/10 bg-paper p-8 md:p-14">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-charcoal/80">Effective date: {site.policyEffectiveDate}</p>
          <div className="legal mt-10 space-y-9 leading-relaxed text-charcoal/90">{children}</div>
          <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-charcoal/85">
            <LicenseLine />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LegalSection({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-ink">
        {n}. {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
