import Link from "next/link";
import type { Ixp } from "@/lib/ixps";
import { SplitHero } from "@/components/SplitHero";

export function IxpHeroSection({ ixp }: { ixp: Ixp }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-6 pb-12 sm:px-10 sm:pb-20">
      
      {/* Inline styles for signature card-shake animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes card-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-0.5deg); }
          40% { transform: translateX(3px) rotate(0.5deg); }
          60% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px) rotate(0.3deg); }
          100% { transform: translateX(0); }
        }
        .stats-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      

      {/* Split Hero Component matching Home Page Visual Language */}
      <SplitHero
        titleLines={[
          { text: ixp.code, accent: true },
          { text: ixp.city },
        ]}
        subtitle={ixp.tagline}
        ctaLabel={`Start peering at ${ixp.code}`}
        ctaHref="/#contact"
        imageSrc={ixp.heroImage}
        imageAlt={`${ixp.facility}, home of ${ixp.name}`}
        priority
        overlay
      />

      {/* Floating Quick Stats Locator Bar */}
      <div className="relative z-10 -mt-8 px-2 sm:-mt-10 sm:px-8 lg:-mt-12">
        <div 
          style={{ borderColor: "#e8a93a" }}
          className="stats-card-shake mx-auto flex max-w-3xl flex-col items-stretch gap-5 rounded-2xl border bg-white px-6 py-5 shadow-lg transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:gap-0 sm:py-4"
        >
          {/* Facility */}
          <div className="flex-1 sm:px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Facility
            </p>
            <p className="mt-1 text-[15px] font-semibold text-slate-900 truncate">
              {ixp.facility}
            </p>
          </div>

          <div className="hidden h-10 w-px bg-slate-100 sm:block" />

          {/* Region */}
          <div className="flex-1 sm:px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Region
            </p>
            <p className="mt-1 text-[15px] font-semibold text-slate-900 truncate">
              {ixp.region}
            </p>
          </div>

          <div className="hidden h-10 w-px bg-slate-100 sm:block" />

          {/* Status */}
          <div className="flex-1 sm:px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Status
            </p>
            <p className="mt-1 flex items-center gap-2 text-[15px] font-semibold text-slate-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{ixp.status}</span>
            </p>
          </div>

          {/* Action Link */}
          <a
            href="#location"
            style={{ backgroundColor: "#3853a4" }}
            className="mt-1 shrink-0 rounded-xl px-6 py-3 text-center text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95 sm:mt-0"
          >
            See location
          </a>
        </div>
      </div>

    </section>
  );
}