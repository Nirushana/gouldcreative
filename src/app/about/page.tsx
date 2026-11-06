import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberBadge } from "@/components/ui/number-badge";
import { Reveal } from "@/components/ui/reveal";
import { offer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gould Creative shapes premium brands using innovation, industry expertise and seamless production. A one-stop-shop for accessories, luggage and footwear.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line pt-36 pb-20 md:pt-44 md:pb-28">
        <Container>
          <Reveal>
            <Eyebrow className="mb-8">About Us</Eyebrow>
            <h1 className="display max-w-4xl text-[2.5rem] leading-none text-foreground sm:text-5xl md:text-[4.25rem]">
              Shaping premium brands from concept to delivery.
            </h1>
          </Reveal>
          <div className="mt-14 grid gap-10 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-16">
            <Reveal delay={0.05}>
              <p>
                Founded and led by industrial design expert Dan Gould, formerly
                head designer at Paul Smith, Gould Creative is an agile team of
                specialists who work closely with premium manufacturers in
                mainland Europe and throughout Asia. We are known for our
                one-stop-shop approach, managing the process comprehensively
                from design and development to production and delivery.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Our priority is to exceed clients&apos; expectations,
                delivering the highest quality product, cost and time
                effectively. Brands with existing design capability can also
                access our manufacturing network directly, drawing on vetted
                factory relationships across {site.network.join(", ")}.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Based-in band */}
      <section className="border-b border-line bg-panel py-16 text-panel-ink md:py-20">
        <Container>
          <Eyebrow as="h2" className="text-accent-on-dark!">
            Based in · Since {site.established}
          </Eyebrow>
          <p className="display mt-6 text-3xl text-panel-ink md:text-5xl">
            {site.locations.join("  /  ")}
          </p>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-panel-muted">
            Sourcing from premium manufacturers in {site.sourcing.join(", ")},
            we provide the best solution for any brief or challenge.
          </p>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading title="What we do" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offer.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.07}>
                <div className="card card-interactive flex h-full flex-col border border-line p-8">
                  <NumberBadge value={item.n} />
                  <h3 className="display mt-8 text-lg text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-band py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="font-serif text-2xl italic leading-snug text-foreground md:text-4xl">
                &ldquo;To exceed our clients&apos; expectations by delivering the
                highest quality product, cost and time effectively.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
