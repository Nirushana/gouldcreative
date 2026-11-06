import type { ReactNode } from "react";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { CountUp } from "./count-up";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Optional oversized stat shown to the right (e.g. 8 / GLOBAL PARTNERS). */
  stat?: { value: string; label: string };
};

/**
 * Shared top-of-page hero: eyebrow, oversized title, lede, and an
 * optional stat. Reused on every interior page for a consistent entrance.
 */
export function PageHero({ eyebrow, title, description, stat }: PageHeroProps) {
  return (
    <section className="border-b border-line pt-32 pb-16 md:pt-40 md:pb-24">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
        </Reveal>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Reveal delay={0.05}>
              <h1 className="display text-5xl leading-[0.98] text-foreground sm:text-6xl md:text-[5.25rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          </div>
          {stat ? (
            <Reveal delay={0.15} className="shrink-0 md:text-right">
              <div className="display text-6xl text-accent md:text-8xl">
                <CountUp value={stat.value} />
              </div>
              <div className="eyebrow mt-3">{stat.label}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
