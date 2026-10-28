import Link from "next/link";

export function IxpCtaSection({ code }: { code: string }) {
  return (
    <section className="relative overflow-hidden bg-[#3853a4] py-16 sm:py-24 text-white">
      
      {/* Inline styles for animated network mesh background paths */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes network-mesh-drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, -10px) scale(1.03); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-mesh-bg {
          animation: network-mesh-drift 12s ease-in-out infinite;
        }
      `}} />

      {/* Background Animated Vector Network Mesh Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="absolute w-full h-full animate-mesh-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" fill="none">
          <path d="M-100 100 Q 250 300 500 150 T 1100 200" stroke="#e8a93a" strokeWidth="3" />
          <path d="M-50 400 Q 300 100 700 450 T 1050 350" stroke="#ffffff" strokeWidth="2" />
          <path d="M100 600 Q 400 200 900 550" stroke="#e8a93a" strokeWidth="2.5" />
          <circle cx="250" cy="225" r="5" fill="#e8a93a" />
          <circle cx="500" cy="150" r="6" fill="#ffffff" />
          <circle cx="700" cy="450" r="4" fill="#e8a93a" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          
          

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Join the <span style={{ color: "#e8a93a" }}>{code}</span> peering fabric.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Bring an ASN, a router that supports BGP, and a link to our facility - our team will guide you through the rest of the peering setup.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              style={{ backgroundColor: "#e8a93a" }}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold text-slate-900 shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
            >
              Request to peer
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}