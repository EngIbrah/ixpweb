import type { Ixp } from "@/lib/ixps";
import { SectionHeading } from "@/components/ui";
import "../../styles/home-why-binary.css";
import Image from "next/image";

export function IxpAboutSection({ ixp }: { ixp: Ixp }) {
  // Map ixp.about points or summary into the 4 structured principles matching the reference pattern
  const aboutPoints = [
    {
      number: "01",
      title: "Local Traffic Retention",
      description: ixp.about[0] || ixp.summary,
      theme: "navy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home-why__icon" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Reduced Latency & Cost",
      description: ixp.about[1] || "Removing extra hops out of the country for efficient local peering and lower costs.",
      theme: "gold",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home-why__icon" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Neutral Peering Facility",
      description: `Hosted at ${ixp.facility}, providing a reliable and open interconnection ecosystem for network operators.`,
      theme: "gold",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home-why__icon" aria-hidden="true">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Connected Regional Ecosystem",
      description: `Serving ${ixp.city} and the wider ${ixp.region} with robust infrastructure and stable peering ports.`,
      theme: "navy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home-why__icon" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="home-why" aria-labelledby="why-ixp-title">
      
      {/* Inline style for signature card-shake hover effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes card-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-0.5deg); }
          40% { transform: translateX(3px) rotate(0.5deg); }
          60% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px) rotate(0.3deg); }
          100% { transform: translateX(0); }
        }
        .about-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      <div className="home-why__wrapper">
        
        {/* Header Section */}
        <div className="home-why__heading">
          <div className="home-why__heading-left">
            <div className="home-why__eyebrow">
              <span />
              <p>About {ixp.code}</p>
            </div>
            <h2 id="why-ixp-title">
              {ixp.name} ({ixp.code}).{" "}
              <span>{ixp.tagline}</span>
            </h2>
          </div>

          <p className="home-why__intro">
            {ixp.summary}
          </p>
        </div>

        {/* Asymmetric 3-Column Layout */}
        <div className="home-why__layout">
          
          {/* Column 1: 2x2 Feature Cards Grid */}
          <div className="home-why__cards-grid">
            {aboutPoints.map((principle) => (
              <article
                key={principle.number}
                className={`home-why__card home-why__card--${principle.theme} about-card-shake`}
              >
                <div className="home-why__badge-top">
                  <div className="home-why__icon-circle">
                    {principle.icon}
                  </div>
                </div>

                <div className="home-why__card-content">
                  <h3 className="home-why__card-title">
                    {principle.title}
                  </h3>
                  <p className="home-why__card-desc">
                    {principle.description}
                  </p>
                </div>

                <div className="home-why__card-footer">
                  <span>#{principle.number}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Column 2: Center Column (Dark Box & image1.png) */}
          <div className="home-why__center-col">
            <div className="home-why__dark-box">
              <h3>
                Keeping local internet traffic local, faster, and cheaper.
              </h3>
              <p>
                Established as a {ixp.established}, located at {ixp.facility}. 
                Connected address: {ixp.address}.
              </p>
            </div>

            <div className="home-why__img-wrapper home-why__img-wrapper--secondary relative">
              <Image
                src="/image2.jpg"
                alt={`${ixp.code} facility infrastructure`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 3: Right Column (Primary Image image2.png) */}
          <div className="home-why__right-col">
            <div className="home-why__img-wrapper home-why__img-wrapper--primary relative">
              <Image
                src="/image.jpg"
                alt={`${ixp.code} peering community session`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}