import Link from "next/link";
import type { Ixp } from "@/lib/ixps";
import { ContactForm } from "@/components/home/ContactForm";
import { SectionHeading } from "@/components/ui";

export function ContactSection({
  ixps,
  email,
}: {
  ixps: Ixp[];
  email: string;
}) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1440px] px-5 py-16 sm:py-20 lg:px-10 scroll-mt-20"
    >
      {/* Inline styles for signature card shake animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes card-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-0.5deg); }
          40% { transform: translateX(3px) rotate(0.5deg); }
          60% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px) rotate(0.3deg); }
          100% { transform: translateX(0); }
        }
        .address-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        
        {/* Left Column: Contact Form */}
        <div className="space-y-6">
          <SectionHeading title="Send an enquiry" />
          <ContactForm email={email} />
        </div>

        {/* Right Column: Facility Addresses Grid */}
        <div className="space-y-6">
          <SectionHeading title="Facility addresses" />
          
          <div className="space-y-3.5">
            {ixps.map((ixp) => (
              <div
                key={ixp.slug}
                style={{ borderColor: "#e8a93a" }}
                className="address-card-shake group flex items-center justify-between gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg">
                    {ixp.city}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {ixp.address}
                  </p>
                </div>

                <Link
                  href={`/ixp/${ixp.slug}/`}
                  className="group/link flex shrink-0 items-center gap-1.5 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-[#3853a4] transition-colors hover:bg-[#3853a4] hover:text-white"
                >
                  <span>Details</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}