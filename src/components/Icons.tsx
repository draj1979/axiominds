/**
 * Inline SVG icons in the Lucide style — 24×24, stroke 1.75, currentColor.
 * Matches the design system spec without adding a dependency.
 */
type Props = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export function ArrowRight({ size = 18, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Briefcase({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function Cpu({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

export function ShieldCheck({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function TrendingUp({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M22 7 13.5 15.5l-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

export function Users({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Globe({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

export function Target({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function Award({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5" />
    </svg>
  );
}

export function Zap({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function MapPin({ size = 14, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Linkedin({ size = 16, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Mail({ size = 16, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}
