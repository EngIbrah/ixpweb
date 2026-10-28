import type { Ixp } from "@/lib/ixps";
import { ContactMap, SectionHeading } from "@/components/ui";

export function IxpContactSection({ ixp }: { ixp: Ixp }) {
  return (
    <section
      id="location"
      className="mx-auto max-w-[1440px] px-5 py-12 sm:py-16 lg:px-10 scroll-mt-20"
    >
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
        .contact-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      <div className="space-y-8">
        {/* Section Heading */}
        <SectionHeading title="Facility & Contact" />

        {/* Main Grid: Left Details Card & Right Interactive Map */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Facility Details Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              style={{ borderColor: "#e8a93a" }}
              className="contact-card-shake rounded-2xl border bg-white p-6 sm:p-7 shadow-sm transition-shadow hover:shadow-md flex-1 flex flex-col justify-between"
            >
              <dl className="space-y-4 text-[15px]">
                <div className="flex items-start gap-3 border-b border-slate-100 pb-3.5">
                  <div className="mt-0.5 text-[#3853a4]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Facility</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">{ixp.facility}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-slate-100 pb-3.5">
                  <div className="mt-0.5 text-[#3853a4]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</dt>
                    <dd className="font-medium text-slate-700 mt-0.5">{ixp.address}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-slate-100 pb-3.5">
                  <div className="mt-0.5 text-[#3853a4]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</dt>
                    <dd className="font-medium text-slate-700 mt-0.5">
                      <a href={`mailto:${ixp.contactEmail}`} className="hover:text-[#3853a4] transition-colors underline">
                        {ixp.contactEmail}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#3853a4]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</dt>
                    <dd className="font-medium text-slate-700 mt-0.5">
                      <a href={`tel:${ixp.contactPhone}`} className="hover:text-[#3853a4] transition-colors">
                        {ixp.contactPhone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Side: Interactive Map Container (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-[360px] lg:h-full min-h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm flex flex-col">
              <div className="relative w-full h-full rounded-xl overflow-hidden flex-1">
                <ContactMap lat={ixp.lat} lng={ixp.lng} label={ixp.name} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}