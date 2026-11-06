import type { Metadata } from "next";
import { Factory, PenNib, Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberBadge } from "@/components/ui/number-badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { approach, engagementModels, pipeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "We work with clients at whatever stage they need us. The entry point is determined by the brief, not a fixed process, from factory matching to full service, concept through to delivery.",
};

const modelIcons = [Factory, PenNib];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title={
          <>
            How We
            <br />
            Work.
          </>
        }
        description="We work with clients at whatever stage they need us. The entry point is determined by the brief, not a fixed process."
        stat={{ value: pipeline.length.toString(), label: "Key Stages" }}
      />

      {/* Two engagement models */}
      <section className="border-b border-line bg-band py-20 md:py-28">
        <Container>
          <SectionHeading title="Two ways to work" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {engagementModels.map((model, i) => {
              const Icon = modelIcons[i] ?? Factory;
              return (
                <Reveal key={model.n} delay={i * 0.08} className="h-full">
                  <div className="card card-interactive group flex h-full flex-col border border-line p-8 md:p-10">
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink">
                        <Icon size={24} weight="light" />
                      </span>
                      <span className="font-mono text-4xl font-light text-line transition-colors group-hover:text-accent">
                        {model.n}
                      </span>
                    </div>
                    <p className="eyebrow mt-8">{model.subtitle}</p>
                    <h3 className="display mt-2 text-2xl text-foreground">
                      {model.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {model.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pipeline stepper */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading title="The pipeline" />
          <ol className="relative mt-16">
            {/* connectors */}
            <span
              aria-hidden
              className="absolute left-10 top-10 bottom-10 w-px bg-line lg:hidden"
            />
            <span
              aria-hidden
              className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-line lg:block"
            />
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
              {pipeline.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.08}>
                  <div className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                    <NumberBadge
                      value={String(i + 1).padStart(2, "0")}
                      size="lg"
                      variant="solid"
                      className="relative z-10 shadow-[0_0_0_6px_var(--color-background)] lg:shadow-[0_0_0_8px_var(--color-background)]"
                    />
                    <div className="lg:mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[16rem]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </ol>
        </Container>
      </section>

      {/* Detailed approach */}
      <section className="bg-band py-20 md:py-28">
        <Container>
          <SectionHeading title="Our approach" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ApproachColumn
              n="01"
              title="Manufacturing Only"
              subtitle="Bring your own design"
              items={approach.manufacturingOnly}
            />
            <ApproachColumn
              n="02"
              title="Full Service"
              subtitle="Concept through to delivery"
              items={approach.fullService}
              highlight
            />
          </div>

          <Reveal className="mt-12 flex justify-center">
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
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ApproachColumn({
  n,
  title,
  subtitle,
  items,
  highlight = false,
}: {
  n: string;
  title: string;
  subtitle: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <Reveal className="h-full">
      <div
        className={`card flex h-full flex-col border border-line p-8 md:p-10 ${
          highlight ? "border-t-2 border-t-accent" : ""
        }`}
      >
        <div className="flex items-baseline justify-between">
          <div>
            <p className="eyebrow">{subtitle}</p>
            <h3 className="display mt-2 text-xl text-foreground">{title}</h3>
          </div>
          <span className="font-mono text-3xl font-light text-line">{n}</span>
        </div>
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <Check
                size={16}
                weight="bold"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
