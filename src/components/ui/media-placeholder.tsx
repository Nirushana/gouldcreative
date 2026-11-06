type MediaPlaceholderProps = {
  label?: string;
  className?: string;
  tone?: "default" | "light";
};

/**
 * Neutral image stand-in until real photography is supplied.
 * Swap instances for <Image> without changing surrounding layout.
 */
export function MediaPlaceholder({
  label = "Image",
  className = "",
  tone = "default",
}: MediaPlaceholderProps) {
  const bg = tone === "light" ? "bg-placeholder-light" : "bg-placeholder";
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${bg} ${className}`}
      aria-hidden
    >
      <span className="absolute inset-3 border border-line-strong/40" />
      <span className="relative px-4 text-center text-[0.65rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}
