import type { ElementType } from "react";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

/** Small tracked mono label used above titles and beside section headings. */
export function Eyebrow({ children, className = "", as }: EyebrowProps) {
  const Tag = as ?? "p";
  return <Tag className={`eyebrow ${className}`}>{children}</Tag>;
}
