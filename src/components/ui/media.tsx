import Image from "next/image";
import type { ReactNode } from "react";
import { MediaPlaceholder } from "./media-placeholder";

type MediaProps = {
  /** Path under /public. When absent, a neutral placeholder is shown. */
  src?: string;
  label: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Optional layer rendered over the image (e.g. hover overlay). */
  children?: ReactNode;
};

/**
 * Image slot. Renders real photography via next/image when `src` is set,
 * otherwise falls back to the placeholder so layouts never break.
 * Pass the aspect + width utilities through `className`.
 */
export function Media({
  src,
  label,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  children,
}: MediaProps) {
  if (!src) return <MediaPlaceholder label={label} className={className} />;
  return (
    <div className={`group relative overflow-hidden bg-placeholder ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-900 ease-out will-change-transform group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      {children}
    </div>
  );
}
