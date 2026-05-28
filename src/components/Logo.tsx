/**
 * Axiominds wordmark — the dual-mountain "AM" mark in spruce + saffron,
 * rendered as inline SVG so it inherits the theme palette and has no
 * background to wrestle with. Replaces the original orange/blue PNG.
 */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span
        className="text-[26px] tracking-[-0.01em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Axiominds
      </span>
    </div>
  );
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Axiominds"
      role="img"
    >
      {/* Left peak — spruce hollow triangle (larger, the "A") */}
      <path
        d="M 8 82 L 40 14 L 72 82 L 60 82 L 40 38 L 23 73 L 50 73 L 50 82 Z"
        fill="var(--ax-spruce-800)"
      />
      {/* Right peak — saffron hollow inverted-V (smaller, the "M" notch) */}
      <path
        d="M 56 82 L 78 24 L 92 82 L 83 82 L 78 64 L 65 82 Z"
        fill="var(--ax-saffron-500)"
      />
    </svg>
  );
}
