import Image from "next/image";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Axiominds"
        width={size}
        height={size}
        priority
        className="object-contain"
        style={{ width: size, height: size }}
      />
      <span
        className="text-[26px] tracking-[-0.01em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Axiominds
      </span>
    </div>
  );
}
