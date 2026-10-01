import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-ink pb-24 pt-36 text-parchment md:pt-44">
      <Container>
        <Eyebrow light>404</Eyebrow>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">That page isn&rsquo;t here.</h1>
        <p className="mt-5 max-w-xl text-parchment/80">
          The link may be old or mistyped. You can head back to the homepage, browse our services,
          or call us at {site.phone}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="primary">Home</Button>
          <Button href="/services/" variant="ghost">Services</Button>
          <Button href="/contact/" variant="ghost">Contact</Button>
        </div>
      </Container>
    </section>
  );
}
