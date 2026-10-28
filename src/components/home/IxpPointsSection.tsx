import Link from "next/link";
import type { Ixp } from "@/lib/ixps";
import { SectionHeading, StatusBadge } from "@/components/ui";

export function IxpPointsSection({ ixps }: { ixps: Ixp[] }) {
  return (
    <section id="points" className="border-b border-line bg-slate-50/50 py-8 scroll-mt-20 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <SectionHeading
          title="The six exchange points"
          lede="Every region below links to a dedicated page with its status, facility details and peering contacts."
        />

        {/* Custom inline style for the shake animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes card-shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-3px) rotate(-0.5deg); }
            40% { transform: translateX(3px) rotate(0.5deg); }
            60% { transform: translateX(-2px) rotate(-0.3deg); }
            80% { transform: translateX(2px) rotate(0.3deg); }
            100% { transform: translateX(0); }
          }
          .group:hover {
            animation: card-shake 0.4s ease-in-out;
          }
        `}} />

        {/* Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ixps.map((ixp) => (
            <Link
              key={ixp.slug}
              href={`/ixp/${ixp.slug}/`}
              style={{
                borderColor: '#e8a93a',
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                {/* Header: Static Icon & Code Badge */}
                <div className="flex items-center justify-between">
                  {/* Server / Network Icon (Static background & Accent color) */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100" style={{ color: '#e8a93a' }}>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>

                  {/* IXP Code Badge */}
                  <span className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-sm font-semibold tracking-wider text-brand">
                    {ixp.code}
                  </span>
                </div>

                {/* Card Title (Static Blue) & Location */}
                <div className="mt-5">
                  <h3 className="font-display text-lg font-semibold text-blue-600">
                    {ixp.name}
                  </h3>

                  {/* Location Pin + Text */}
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      {ixp.city}, {ixp.region}
                    </span>
                  </p>
                </div>
              </div>

              {/* Card Footer: Status & Animated Arrow */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                <StatusBadge status={ixp.status} />

                <div className="flex items-center gap-1 text-sm font-medium text-brand">
                  <span>View details</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}