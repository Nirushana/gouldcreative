type MarqueeProps = {
  items: string[];
};

/**
 * Seamless horizontal marquee of client names. The list is rendered twice so
 * the CSS translate loop has no visible seam; pauses on hover, static under
 * reduced motion (handled in globals.css).
 */
export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee relative flex overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <ul className="marquee-track flex shrink-0 items-center gap-x-14">
        {doubled.map((name, i) => (
          <li
            key={`${name}-${i}`}
            className="display shrink-0 whitespace-nowrap text-2xl text-foreground/45 md:text-3xl"
            aria-hidden={i >= items.length}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
