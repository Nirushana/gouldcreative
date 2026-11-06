type NumberBadgeProps = {
  value: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid";
  className?: string;
};

const sizes = {
  sm: "h-12 w-12 text-xs",
  md: "h-16 w-16 text-sm",
  lg: "h-20 w-20 text-base",
};

const variants = {
  outline: "border border-line text-muted",
  solid: "bg-accent text-accent-ink",
};

/** The recurring circle holding a two-digit index. */
export function NumberBadge({
  value,
  size = "md",
  variant = "outline",
  className = "",
}: NumberBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-mono tracking-widest ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {value}
    </span>
  );
}
