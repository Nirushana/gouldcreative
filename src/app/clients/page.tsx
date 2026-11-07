import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberBadge } from "@/components/ui/number-badge";
import Image from "next/image";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { WorkGallery } from "@/components/work-gallery";
import { clients, clientLogos, work, type Client } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "A hand-picked selection of clients Gould Creative is proud to work with, from heritage fashion houses and Savile Row tailors to automotive and technology brands.",
};

export default function ClientsPage() {
  const featured = clients.filter((c) => c.featured);
  const rest = clients.filter((c) => !c.featured);

  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title={
          <>
            Trusted by
            <br />
            the Best.
          </>
        }
        description="From established names expanding their offer to new brands producing their best products, we shape premium goods across fashion, luggage, automotive and technology."
        stat={{ value: clients.length.toString(), label: "Global Partners" }}
      />

      {/* Featured partnerships: editorial rows with image space */}
      <section className="border-b border-line bg-band py-20 md:py-28">
        <Container>
          <SectionHeading title="Featured partnerships" />
          <div className="mt-16 space-y-16 md:space-y-24">
            {featured.map((client, i) => (
              <FeaturedRow
                key={client.name}
                client={client}
                index={i}
                flip={i % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Selected work gallery */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading title="Selected work" />
          <WorkGallery items={work} />
        </Container>
      </section>

      {/* All clients roster */}
      <section className="border-b border-line bg-band py-20 md:py-28">
        <Container>
          <SectionHeading title="All clients" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((client, i) => (
              <Reveal
                key={client.name}
                delay={(i % 3) * 0.06}
                className="h-full"
              >
                <ClientRow client={client} index={featured.length + i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Logo wall */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading title="A few names" />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.map(({ name, logo }) => (
              <li
                key={name}
                className="card card-interactive flex h-32 items-center justify-center border border-line px-6 text-center text-sm font-semibold uppercase tracking-wide text-muted"
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={name}
                    width={240}
                    height={80}
                    className="h-auto max-h-16 w-auto max-w-full object-contain mix-blend-multiply"
                  />
                ) : (
                  name
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-contrast py-24 md:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-4xl leading-[1.02] text-foreground md:text-6xl">
              Ready to craft something extraordinary?
            </h2>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Button href="/inquire">Inquire</Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/** Large alternating showcase row with room for real client photography. */
function FeaturedRow({
  client,
  index,
  flip,
}: {
  client: Client;
  index: number;
  flip: boolean;
}) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <Reveal>
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <Media
          src={client.image}
          label={`${client.name} · selected work`}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`aspect-4/3 w-full ${flip ? "md:order-2" : ""}`}
        />
        <div className={flip ? "md:order-1" : ""}>
          <div className="flex items-center gap-4">
            <NumberBadge value={n} size="md" variant="solid" />
            <span className="eyebrow">{client.sector}</span>
          </div>
          <h3 className="display mt-6 text-3xl text-foreground md:text-4xl">
            {client.name}
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {client.body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/** Compact elevated card for the wider roster. */
function ClientRow({ client, index }: { client: Client; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article className="card card-interactive flex h-full gap-5 border border-line p-6">
      <NumberBadge value={n} size="sm" />
      <div className="flex-1">
        <p className="eyebrow">{client.sector}</p>
        <h3 className="display mt-1 text-lg text-foreground">{client.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{client.body}</p>
      </div>
    </article>
  );
}
