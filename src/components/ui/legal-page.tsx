import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

/** Shared shell for simple long-form legal / policy pages. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <Container>
        <Eyebrow className="mb-6">Last updated {updated}</Eyebrow>
        <h1 className="display text-4xl text-foreground md:text-5xl">{title}</h1>
        <div className="mt-12 max-w-2xl space-y-6 text-sm leading-relaxed text-muted [&_h2]:pt-4 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </Container>
    </section>
  );
}
