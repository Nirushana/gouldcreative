import { Container } from "./container";

type SectionHeadingProps = {
  title: string;
  /** Optional small kicker rendered above the title. Use sparingly. */
  meta?: string;
  className?: string;
};

/**
 * Stacked section header: optional kicker, large display title, hairline.
 * Replaces the old "big title left / small meta right" split header.
 */
export function SectionHeading({
  title,
  meta,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`border-b border-line pb-6 ${className}`}>
      {meta ? <p className="eyebrow mb-4">{meta}</p> : null}
      <h2 className="display max-w-3xl text-[2rem] leading-[1.02] text-foreground md:text-[2.75rem]">
        {title}
      </h2>
    </div>
  );
}

/** Convenience wrapper that pads the heading inside a Container. */
export function SectionHeadingBlock(props: SectionHeadingProps) {
  return (
    <Container>
      <SectionHeading {...props} />
    </Container>
  );
}
