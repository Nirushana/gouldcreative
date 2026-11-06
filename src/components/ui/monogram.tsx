type MonogramProps = {
  className?: string;
};

/**
 * The Gould Creative seal: square frame + circle + crosshair with the
 * wordmark centred. Pure SVG so it scales crisply and inherits currentColor.
 */
export function Monogram({ className = "" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Gould Creative"
      className={className}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.85">
        {/* square frame */}
        <rect x="18" y="18" width="84" height="84" />
        {/* circle */}
        <circle cx="60" cy="60" r="34" />
        {/* crosshair */}
        <line x1="60" y1="4" x2="60" y2="116" />
        <line x1="4" y1="60" x2="116" y2="60" />
      </g>
      <g
        fill="currentColor"
        fontFamily="var(--font-geist-mono), monospace"
        letterSpacing="1.2"
      >
        <text x="20" y="14" fontSize="5" opacity="0.7">
          DESIGN
        </text>
        <text x="100" y="14" fontSize="5" textAnchor="end" opacity="0.7">
          STUDIOS
        </text>
        <text
          x="60"
          y="58"
          fontSize="8"
          textAnchor="middle"
          letterSpacing="0.5"
          fontWeight="600"
        >
          GOULD
        </text>
        <text
          x="60"
          y="68"
          fontSize="8"
          textAnchor="middle"
          letterSpacing="0.5"
          fontWeight="600"
        >
          CREATIVE
        </text>
        <text x="20" y="112" fontSize="5" opacity="0.7">
          EST.
        </text>
        <text x="100" y="112" fontSize="5" textAnchor="end" opacity="0.7">
          2014
        </text>
      </g>
    </svg>
  );
}
