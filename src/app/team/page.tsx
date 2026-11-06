import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The specialists behind Gould Creative. Led by founder Dan Gould, an agile team of designers and product experts across London, Amsterdam and Shanghai.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title={
          <>
            The Hands
            <br />
            Behind It.
          </>
        }
        description="An agile team of specialists led by founder Dan Gould, spanning designers, a product director and sourcing experts working as a single point of contact from first sketch to final SKU."
        stat={{ value: team.length.toString(), label: "Specialists" }}
      />

      <section className="border-b border-line bg-band py-20 md:py-28">
        <Container>
          <SectionHeading title="The studio" />
          <div className="mt-12 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.07}>
                <article className="group">
                  <Media
                    src={member.image}
                    label={member.name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-4/5 w-full grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <h3 className="display mt-6 text-xl text-foreground">
                    {member.name}
                  </h3>
                  <p className="eyebrow mt-2">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                  <p className="mt-4 font-mono text-xs tracking-wider text-faint">
                    {member.location}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-contrast py-24 md:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-4xl leading-[1.02] text-foreground md:text-6xl">
              Craftspeople and designers, we&apos;d love to meet you.
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
