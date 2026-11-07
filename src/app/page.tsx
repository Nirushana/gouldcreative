import { ArrowRight, PenNibIcon, ArchiveIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Media } from "@/components/ui/media";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { clientLogos, offer, site, sustainability, whyUs } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero: asymmetric split ---------- */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow className="mb-8">Design &amp; Manufacture · Est. {site.established}</Eyebrow>
                <h1 className="display text-[2.85rem] leading-[0.98] text-foreground sm:text-6xl md:text-[5rem]">
                  From first sketch
                  <br />
                  to final SKU.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
                  {site.tagline}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <Button href="/inquire">
                      Inquire
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Button>
                  </Magnetic>
                  <Button href="/clients" variant="outline">
                    Our Work
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="md:col-span-5">
              <Media
                src="/images/work/paul-smith-weekender.jpg"
                label="Paul Smith striped wool weekender with leather handles"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority
                className="aspect-3/4 w-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Client marquee (trust) ---------- */}
      <section className="border-y border-line py-8 md:py-10">
        <Container className="mb-6">
          <Eyebrow>Selected clients</Eyebrow>
        </Container>
        <Marquee items={clientLogos.map((c) => c.name)} />
      </section>

      {/* ---------- Positioning: dramatic dark band ---------- */}
      <section className="bg-panel py-20 text-panel-ink md:py-32">
        <Container>
          <Reveal>
            <h2 className="display max-w-4xl text-3xl leading-[1.04] md:text-6xl">
              A one-stop-shop for premium production.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-panel-muted">
              Founded and led by industrial design expert Dan Gould, formerly
              head designer at Paul Smith, we are an agile team working closely
              with premium manufacturers across Europe and Asia. From design,
              research and development through prototyping, production and
              to-store delivery, we manage the whole process.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-panel-line bg-panel-line md:mt-20 md:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full bg-panel p-8 md:p-10">
                  <span className="font-mono text-xs tracking-widest text-accent-on-dark">
                    0{i + 1}
                  </span>
                  <h3 className="display mt-5 text-xl text-panel-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-panel-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Expertise: bento ---------- */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow className="mb-6">Expertise</Eyebrow>
            <h2 className="display max-w-2xl text-3xl leading-[1.04] text-foreground md:text-5xl">
              A complete discipline,
              <br />
              first spark to finished SKU.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-3 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2">
            {/* Design Development — dark */}
            <Reveal className="md:col-start-1 md:row-start-1">
              <div className="flex h-full min-h-60 flex-col bg-panel p-8 text-panel-ink md:p-10">
                <PenNibIcon size={26} weight="light" className="text-accent-on-dark" />
                <div className="mt-auto pt-8">
                  <h3 className="display text-xl text-panel-ink">{offer[0].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-panel-muted">{offer[0].body}</p>
                </div>
              </div>
            </Reveal>

            {/* Sourcing — olive */}
            <Reveal delay={0.06} className="md:col-start-1 md:row-start-2">
              <div className="flex h-full min-h-60 flex-col bg-accent p-8 text-accent-ink md:p-10">
                <ArchiveIcon size={26} weight="light" className="opacity-70" />
                <div className="mt-auto pt-8">
                  <h3 className="display text-xl">{offer[1].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{offer[1].body}</p>
                </div>
              </div>
            </Reveal>

            {/* Center image — spans both rows */}
            <div className="md:col-start-2 md:row-span-2">
              <Media
                src="/clients/belstaff-duffel-v2.jpg"
                label="Belstaff Trialmaster canvas and leather duffel"
                sizes="(max-width: 768px) 100vw, 25vw"
                className="h-full min-h-72 w-full"
              />
            </div>

            {/* Est. — dark info card */}
            <Reveal delay={0.08} className="md:col-start-3 md:row-start-1">
              <div className="flex h-full min-h-60 flex-col bg-panel-2 p-8 text-panel-ink md:p-10">
                <div className="mt-auto">
                  <p className="display text-2xl">Est. {site.established}</p>
                  <p className="mt-3 text-sm leading-relaxed text-panel-muted">
                    {site.locations.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Manufacture & Delivery — light */}
            <Reveal delay={0.1} className="md:col-start-3 md:row-start-2">
              <div className="flex h-full min-h-60 flex-col bg-contrast p-8 md:p-10">
                <div className="mt-auto">
                  <h3 className="display text-xl text-foreground">{offer[3].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{offer[3].body}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Sustainability & innovation: split ---------- */}
      <section className="bg-band py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Media
                src="/images/work/vyn-personalise.jpg"
                label="VYN personalisable leather and suede sneakers"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-7/5 w-full"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-3xl leading-[1.02] text-foreground md:text-5xl">
                Built to last,
                <br />
                not to replace.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted">
                We are committed to sustainability and innovation, from recycled
                PET yarn and 3D nesting for material efficiency to enlisting the
                best talent. Longevity is the most sustainable choice, and we
                source for durability at every step.
              </p>
              <ul className="mt-10 divide-y divide-line border-t border-line">
                {sustainability.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 py-4 text-foreground"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="bg-contrast py-24 md:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-4xl leading-[1.02] text-foreground md:text-6xl">
              Let&apos;s make something worth keeping.
            </h2>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Button href="/inquire">
                  Inquire
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
