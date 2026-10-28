import Link from "next/link";

export function CTASection({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-[#3853a4] py-16 sm:py-20">
      
      {/* Network Animation Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes route-pulse {
          0%, 100% { opacity: 0.2; stroke-dashoffset: 0; }
          50% { opacity: 0.7; stroke-dashoffset: -20; }
        }
        .animate-route-flow {
          stroke-dasharray: 4 8;
          animation: route-pulse 3s linear infinite;
        }
      `}} />

      {/* Background Graphic to Fill Empty Right Space */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-25">
        <svg className="h-full w-full" viewBox="0 0 500 300" fill="none">
          {/* Interconnecting Network Mesh Lines */}
          <g stroke="#e8a93a" strokeWidth="1.5">
            <path d="M 50 150 Q 200 50 380 120" className="animate-route-flow" />
            <path d="M 120 250 Q 300 180 450 220" className="animate-route-flow" />
            <path d="M 220 30 Q 350 200 480 80" className="animate-route-flow" />
          </g>

          {/* Network Nodes */}
          <circle cx="380" cy="120" r="5" fill="#e8a93a" className="animate-ping" />
          <circle cx="380" cy="120" r="4" fill="#e8a93a" />
          <circle cx="220" cy="30" r="3" fill="#ffffff" />
          <circle cx="450" cy="220" r="3" fill="#ffffff" />
          <circle cx="120" cy="250" r="4" fill="#e8a93a" />
        </svg>
      </div>

      {/* Glowing Ambient Radial Backgrounds */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#e8a93a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline & Body (Covers 7 Columns) */}
          <div className="space-y-4 lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>

            <p className="max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-white/90">
              {body}
            </p>
          </div>

          {/* Right Column: CTA Buttons (Covers 5 Columns) */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 lg:col-span-5 lg:justify-end">
            {/* Primary Action Button */}
            <Link
              href={primary.href}
              style={{ backgroundColor: "#e8a93a" }}
              className="group relative flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-sm font-bold text-slate-900 shadow-lg transition-all duration-200 hover:brightness-105 hover:shadow-yellow-500/20 active:scale-95"
            >
              <span>{primary.label}</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Optional Secondary Action Button */}
            {secondary && (
              <Link
                href={secondary.href}
                className="flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/60 active:scale-95"
              >
                {secondary.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}