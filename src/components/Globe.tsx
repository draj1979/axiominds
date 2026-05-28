/**
 * Hero visual — a stylized globe with global tech hubs connected to
 * Bangalore via animated arcs. The arcs all flow INTO India, with
 * pulse dots traveling along them. India itself sits under a soft
 * saffron glow and a couple of pulsing rings.
 *
 * SVG + SMIL animation. No JS runtime — works on any browser the
 * design system already supports.
 */
export function Globe() {
  // viewBox is 0 0 400 400. Coordinates roughly match a top-down globe
  // with India offset slightly east of center.
  const india = { x: 248, y: 200, code: "BLR", name: "Bangalore" };
  const cities = [
    { code: "SFO", x: 78, y: 152 },
    { code: "NYC", x: 132, y: 122 },
    { code: "LDN", x: 198, y: 92 },
    { code: "BER", x: 232, y: 108 },
    { code: "DXB", x: 232, y: 184 },
    { code: "TYO", x: 332, y: 152 },
    { code: "SGP", x: 308, y: 248 },
    { code: "SYD", x: 332, y: 304 },
  ];

  // Quadratic Bézier control point — pull each arc up toward the
  // viewer for a sense of flight curvature. Arcs that come from
  // below India bend down instead.
  const arcPath = (c: { x: number; y: number }) => {
    const mx = (c.x + india.x) / 2;
    const my = (c.y + india.y) / 2;
    // perpendicular offset: pull arcs outward (away from the globe center)
    const dx = india.x - c.x;
    const dy = india.y - c.y;
    const len = Math.hypot(dx, dy) || 1;
    const offset = Math.min(50, len * 0.35);
    const cx = mx + (-dy / len) * offset;
    const cy = my + (dx / len) * offset;
    return `M ${c.x} ${c.y} Q ${cx} ${cy} ${india.x} ${india.y}`;
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <defs>
          {/* Soft glow under India */}
          <radialGradient id="india-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ax-saffron-500)" stopOpacity="0.45" />
            <stop offset="60%" stopColor="var(--ax-saffron-500)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--ax-saffron-500)" stopOpacity="0" />
          </radialGradient>

          {/* Arc gradient — fades from origin spruce to India saffron */}
          <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ax-spruce-700)" stopOpacity="0.15" />
            <stop offset="60%" stopColor="var(--ax-spruce-700)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--ax-saffron-600)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* India ambient glow (behind everything) */}
        <circle cx={india.x} cy={india.y} r="72" fill="url(#india-glow)" />

        {/* Globe outline */}
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="var(--ax-border-strong)"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Latitude ellipses (curved horizontal lines) */}
        {[55, 110].map((ry) => (
          <ellipse
            key={`lat-${ry}`}
            cx="200"
            cy="200"
            rx="168"
            ry={ry}
            fill="none"
            stroke="var(--ax-border-strong)"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="2 5"
          />
        ))}

        {/* Longitude ellipses (curved vertical lines) */}
        {[55, 110].map((rx) => (
          <ellipse
            key={`lng-${rx}`}
            cx="200"
            cy="200"
            rx={rx}
            ry="168"
            fill="none"
            stroke="var(--ax-border-strong)"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="2 5"
          />
        ))}

        {/* Equator (slightly stronger) */}
        <line
          x1="32"
          y1="200"
          x2="368"
          y2="200"
          stroke="var(--ax-border-strong)"
          strokeWidth="1"
          strokeOpacity="0.28"
        />

        {/* Connection arcs (drawn beneath the city/India dots) */}
        {cities.map((c, i) => {
          const d = arcPath(c);
          return (
            <g key={`arc-${c.code}`}>
              <path
                d={d}
                fill="none"
                stroke="url(#arc-grad)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              {/* Traveling pulse dot */}
              <circle r="2.6" fill="var(--ax-saffron-500)">
                <animateMotion
                  dur={`${3.4 + (i % 3) * 0.5}s`}
                  begin={`${i * 0.45}s`}
                  repeatCount="indefinite"
                  path={d}
                  rotate="auto"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${3.4 + (i % 3) * 0.5}s`}
                  begin={`${i * 0.45}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* India pulse rings (two, staggered) */}
        {[0, 1.4].map((delay, i) => (
          <circle
            key={`pulse-${i}`}
            cx={india.x}
            cy={india.y}
            r="10"
            fill="none"
            stroke="var(--ax-saffron-500)"
            strokeWidth="1.4"
          >
            <animate
              attributeName="r"
              from="10"
              to="36"
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.7"
              to="0"
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* India pin — saffron filled circle */}
        <circle
          cx={india.x}
          cy={india.y}
          r="9"
          fill="var(--ax-saffron-500)"
          stroke="var(--ax-saffron-700)"
          strokeWidth="1.5"
        />
        <circle cx={india.x} cy={india.y} r="3" fill="var(--ax-paper)" />

        {/* India label */}
        <g transform={`translate(${india.x + 16}, ${india.y + 4})`}>
          <text
            fontSize="13"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            fill="var(--ax-spruce-800)"
          >
            Bangalore
          </text>
          <text
            y="14"
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="1.4"
            fill="var(--ax-fg-2)"
          >
            BLR · INDIA
          </text>
        </g>

        {/* City dots + labels */}
        {cities.map((c) => {
          const labelLeft = c.x > 200; // place label opposite side of globe center
          return (
            <g key={`city-${c.code}`}>
              <circle
                cx={c.x}
                cy={c.y}
                r="3.5"
                fill="var(--ax-spruce-800)"
              />
              <circle
                cx={c.x}
                cy={c.y}
                r="6"
                fill="none"
                stroke="var(--ax-spruce-800)"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              <text
                x={labelLeft ? c.x + 9 : c.x - 9}
                y={c.y + 3}
                fontSize="9"
                fontFamily="var(--font-mono)"
                letterSpacing="1.2"
                fill="var(--ax-fg-2)"
                textAnchor={labelLeft ? "start" : "end"}
              >
                {c.code}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
