import Image from "next/image";

/**
 * Axiominds wordmark — canonical dual-mountain "AM" mark (spruce + saffron,
 * transparent background) from `public/logo.png`, paired with the wordmark
 * in display serif.
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
    <Image
      src="/logo.png"
      alt="Axiominds"
      width={size}
      height={size}
      priority
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}
