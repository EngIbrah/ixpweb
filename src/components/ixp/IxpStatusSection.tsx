import type { Ixp } from "@/lib/ixps";
import { SectionHeading } from "@/components/ui";

export function IxpStatusSection({ ixp }: { ixp: Ixp }) {
  return (
    <section className="border-y border-line bg-white">
      
      {/* Inline styles for signature card-shake hover effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes card-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-0.5deg); }
          40% { transform: translateX(3px) rotate(0.5deg); }
          60% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px) rotate(0.3deg); }
          100% { transform: translateX(0); }
        }
        .stat-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <SectionHeading
          title="Current status"
          lede="Figures below are placeholders - send your live numbers and we'll wire them in."
        />

        {/* Stats Grid with Clean Yellow Icons */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ixp.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{ borderColor: "#e8a93a" }}
              className="stat-card-shake flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>

                {/* Plain Yellow Icon without background */}
                <div style={{ color: "#e8a93a" }} className="shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-bold tracking-tight text-[#3853a4] sm:text-4xl">
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}