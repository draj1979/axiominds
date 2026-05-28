/**
 * The hero "orbit" visual — three rotating dashed/solid rings around a
 * central deep-spruce hub with a saffron "A". City node chips pinned at
 * specific angles around the orbit. Pure CSS animations.
 */
export function Orbit() {
  const nodes = [
    { label: "SFO", top: "8%", left: "32%" },
    { label: "LDN", top: "22%", right: "6%" },
    {
      label: "BLR",
      bottom: "18%",
      right: "24%",
      highlighted: true,
    },
    { label: "SYD", bottom: "8%", left: "22%" },
    { label: "BER", top: "44%", left: "0%" },
  ];

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      aria-hidden="true"
    >
      {/* Rings */}
      <div
        className="ax-orbit-2 absolute rounded-full"
        style={{
          inset: "4%",
          border: "1px solid rgba(10,61,68,0.12)",
          opacity: 0.5,
        }}
      />
      <div
        className="ax-orbit-1 absolute rounded-full"
        style={{
          inset: "14%",
          border: "1px dashed var(--ax-border-strong)",
          opacity: 0.5,
        }}
      />
      <div
        className="ax-orbit-3 absolute rounded-full"
        style={{
          inset: "24%",
          border: "1px dashed var(--ax-border-strong)",
          opacity: 0.5,
        }}
      />

      {/* Central hub */}
      <div
        className="absolute left-1/2 top-1/2 grid h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
        style={{
          background: "var(--ax-spruce-800)",
          boxShadow:
            "0 24px 60px rgba(10,61,68,0.28), 0 0 0 12px rgba(10,61,68,0.05)",
        }}
      >
        <div
          className="grid h-full w-full place-items-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--ax-spruce-700), var(--ax-spruce-900))",
          }}
        >
          <span
            className="text-[56px] leading-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--ax-saffron-500)",
            }}
          >
            A
          </span>
        </div>
      </div>

      {/* City nodes */}
      {nodes.map((n) => (
        <span
          key={n.label}
          className="absolute rounded-full border px-3 py-1.5"
          style={{
            top: n.top,
            left: n.left,
            right: n.right,
            bottom: n.bottom,
            background: n.highlighted ? "var(--ax-saffron-500)" : "#fff",
            borderColor: n.highlighted ? "transparent" : "var(--ax-paper-line)",
            color: n.highlighted ? "var(--ax-spruce-900)" : "var(--ax-spruce-800)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            boxShadow: "0 2px 6px rgba(29,22,18,0.06), 0 1px 2px rgba(29,22,18,0.04)",
          }}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
}
