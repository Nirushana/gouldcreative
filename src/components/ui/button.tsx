import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "solid" | "outline";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-accent-ink hover:bg-accent-hover shadow-[0_1px_2px_rgba(29,28,18,0.08)]",
  outline:
    "border border-line-strong text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

/** Link-styled button, the site's primary call to action shape. */
export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type SubmitButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

/** Same shape as Button, for real form submissions. */
export function SubmitButton({
  children,
  variant = "solid",
  className = "",
  ...props
}: SubmitButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
