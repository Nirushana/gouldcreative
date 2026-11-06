import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Constrain to the site's standard reading width. */
  size?: "default" | "wide";
};

/**
 * The single horizontal rhythm for the whole site.
 * Every section pulls its gutters from here so the grid stays aligned.
 */
export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const max = size === "wide" ? "max-w-[1680px]" : "max-w-[1440px]";
  return (
    <div className={`mx-auto w-full ${max} px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
