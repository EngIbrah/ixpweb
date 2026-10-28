import Link from "next/link";
import { ixps } from "@/lib/ixps";

// Linear projection of each station's lat/lng onto a 420x400 illustrative
// viewBox. The outline itself is a simplified, stylized silhouette of
// Tanzania (not a precise geographic trace) used as a recurring brand mark.
const points: Record<string, { x: number; y: number }> = {
  tix: { x: 355, y: 216 },
  arusha: { x: 277, y: 89 },
  dodoma: { x: 242, y: 192 },
  mbeya: { x: 156, y: 294 },
  mwanza: { x: 136, y: 56 },
  zanzibar: { x: 389, y: 184 },
};

const OUTLINE =
  "M330,15 C300,10 250,5 200,20 C150,35 110,20 90,55 C70,90 65,140 60,190 C58,230 70,270 90,300 C105,325 100,350 130,370 C160,388 190,395 230,392 C270,388 290,370 310,345 C330,320 320,290 345,270 C375,248 390,225 385,195 C380,165 360,150 365,120 C370,90 375,60 365,40 C358,25 345,18 330,15 Z";

export function TanzaniaMap({
  activeSlug,
  size = "md",
  linked = true,
}: {
  activeSlug?: string;
  size?: "sm" | "md" | "lg";
  linked?: boolean;
}) {
  const dims = size === "lg" ? 520 : size === "sm" ? 220 : 360;

  return (
    <svg
      viewBox="0 0 420 400"
      width={dims}
      height={(dims * 400) / 420}
      role="img"
      aria-label="Map of Tanzania showing TISPA's six internet exchange points"
    >
      <path
        d={OUTLINE}
        fill="var(--color-brand-tint)"
        stroke="var(--color-brand)"
        strokeWidth="2"
      />
      {ixps.map((ixp) => {
        const p = points[ixp.slug];
        const isActive = activeSlug === ixp.slug;
        const dot = (
          <g key={ixp.slug}>
            {isActive && (
              <circle
                cx={p.x}
                cy={p.y}
                r="13"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
              />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={isActive ? 7 : 5.5}
              fill={isActive ? "var(--color-accent)" : "var(--color-brand)"}
              stroke="var(--color-paper)"
              strokeWidth="2"
            />
            <text
              x={p.x}
              y={p.y - 14}
              textAnchor="middle"
              fontSize="13"
              fontFamily="var(--font-display)"
              fill="var(--color-ink)"
              fontWeight={isActive ? 600 : 500}
            >
              {ixp.code}
            </text>
          </g>
        );
        if (!linked) return dot;
        return (
          <Link
            key={ixp.slug}
            href={`/ixp/${ixp.slug}/`}
            aria-label={`View ${ixp.name}`}
          >
            {dot}
          </Link>
        );
      })}
    </svg>
  );
}
