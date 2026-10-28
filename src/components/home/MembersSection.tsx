"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui";

type Category = "peering" | "colocation" | "connectivity" | "cdn";

interface Member {
  name: string;
  category: Category;
  logo: string;
}

// Configured according to your actual file extensions in public/images/members/ and public/images/cdn/
const MEMBERS: Member[] = [
  // Content & CDN Partners (public/images/cdn/)
  { name: "Akamai", category: "cdn", logo: "/images/cdn/akamai.svg" },
  { name: "CDN77", category: "cdn", logo: "/images/cdn/cdn77.png" },
  { name: "Cloudflare", category: "cdn", logo: "/images/cdn/cloudflare.png" },
  { name: "Google", category: "cdn", logo: "/images/cdn/google.svg" },
  { name: "Meta", category: "cdn", logo: "/images/cdn/meta.svg" },
  { name: "Microsoft", category: "cdn", logo: "/images/cdn/microsoft.svg" },
  { name: "Netflix", category: "cdn", logo: "/images/cdn/netflix.svg" },

  // SVGs in public/images/members/
  { name: "dot TZ", category: "peering", logo: "/images/members/dottz.svg" },
  { name: "Airtel", category: "peering", logo: "/images/members/airtel.svg" },
  { name: "Airtel", category: "connectivity", logo: "/images/connectivity/airtel.png" },
  { name: "Ateb", category: "peering", logo: "/images/members/ateb.svg" },
  { name: "BEI", category: "peering", logo: "/images/members/bei.svg" },
  { name: "Blink", category: "peering", logo: "/images/members/blink.svg" },
  { name: "Capital Radio", category: "peering", logo: "/images/members/capital.svg" },
  { name: "Cybernet", category: "connectivity", logo: "/images/connectivity/cyber.png" },
  { name: "Citi Bank", category: "peering", logo: "/images/members/citi.svg" },
  { name: "CTV", category: "peering", logo: "/images/members/ctv.svg" },
  { name: "eGA", category: "peering", logo: "/images/members/ega.svg" },
  { name: "Geeznet", category: "peering", logo: "/images/members/geeznet.png" },
  { name: "GOT", category: "peering", logo: "/images/members/got.png" },
  { name: "Green Telecom", category: "peering", logo: "/images/members/greentelecom.jpeg" },
  { name: "Liquid Intelligent", category: "peering", logo: "/images/members/liquid.svg" },
  { name: "MOT", category: "peering", logo: "/images/members/mot.svg" },
  { name: "SatCoNet", category: "connectivity", logo: "/images/connectivity/satco.svg" },
  { name: "SEACOM", category: "connectivity", logo: "/images/connectivity/seacom.svg" },
  { name: "SimbaNet", category: "connectivity", logo: "/images/members/simbanet.svg" },
  { name: "Simply Connect", category: "connectivity", logo: "/images/members/simply.svg" },
  { name: "Smile", category: "peering", logo: "/images/members/smile.svg" },
  { name: "TCRA", category: "peering", logo: "/images/members/tcra.svg" },
  { name: "TERNET", category: "peering", logo: "/images/members/ternet.svg" },
  { name: "TPA", category: "peering", logo: "/images/members/tpa.svg" },
  { name: "TRA", category: "peering", logo: "/images/members/tra.svg" },
  { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
  { name: "Vodacom", category: "peering", logo: "/images/members/vodacom.svg" },
  { name: "WIA", category: "peering", logo: "/images/members/wia.svg" },
  { name: "Yas", category: "peering", logo: "/images/members/yas.webp" },
  { name: "Zanlink", category: "connectivity", logo: "/images/members/zanlink.svg" },
  { name: "Zantel", category: "peering", logo: "/images/members/zantel.svg" },

  // PNGs/JPEGs in public/images/members/
  { name: "Bank of Tanzania", category: "peering", logo: "/images/members/bot.jpeg" },
  { name: "Comnet", category: "peering", logo: "/images/members/comnet.png" },
  { name: "CRDB Bank", category: "peering", logo: "/images/members/crdb.svg" },
  { name: "Exim Bank", category: "peering", logo: "/images/members/exim.webp" },
  { name: "Habari Node", category: "connectivity", logo: "/images/connectivity/habari.png" },
  { name: "Halotel", category: "peering", logo: "/images/members/halotel.png" },
  { name: "Marlink", category: "connectivity", logo: "/images/connectivity/stelarix.png" },
  { name: "NESO", category: "peering", logo: "/images/members/neso.png" },
  { name: "NexusNet", category: "connectivity", logo: "/images/members/nexus.png" },
  { name: "NIDC", category: "colocation", logo: "/images/members/nidc.png" },
  { name: "Wingu Africa", category: "colocation", logo: "/images/connectivity/wingu.png" },
  { name: "TTCL", category: "colocation", logo: "/images/members/ttcl.svg" },
  { name: "Stelarix", category: "colocation", logo: "/images/connectivity/stelarix.png" },
  { name: "Habari", category: "colocation", logo: "/images/connectivity/habari.png" },

  { name: "NMB Bank", category: "peering", logo: "/images/members/nmb.png" },
  { name: "Savana Fibre", category: "connectivity", logo: "/images/members/savana.png" },
  { name: "Selcom", category: "peering", logo: "/images/members/selcom.png" },
];

export function MembersSection() {
  // Default tab starts directly on "peering"
  const [activeTab, setActiveTab] = useState<Category>("peering");

  const filteredMembers = MEMBERS.filter(
    (member) => member.category === activeTab
  );

  return (
    <section id="members" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-20 lg:px-10 scroll-mt-20">
      
      {/* Inline styles for custom scrollbar hiding and card shake animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes card-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-0.5deg); }
          40% { transform: translateX(3px) rotate(0.5deg); }
          60% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px) rotate(0.3deg); }
          100% { transform: translateX(0); }
        }
        .logo-card-shake:hover {
          animation: card-shake 0.4s ease-in-out;
        }
      `}} />

      <SectionHeading
        title="Peers and Members"
        lede="These organizations represent the forefront of internet service provision, working collaboratively to enhance connectivity across Tanzania."
      />

      {/* Single Horizontal Line Filter Tabs (Without "All Members") */}
      <div className="mt-8 w-full overflow-x-auto no-scrollbar pb-2">
        <div className="inline-flex items-center gap-1.5 rounded-2xl bg-slate-100 p-1.5 min-w-max">
          {[
            { id: "peering", label: "Peering Members" },
            { id: "colocation", label: "Colocation Partners" },
            { id: "connectivity", label: "Connectivity Partners" },
            { id: "cdn", label: "Content Delivery (CDN)" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as Category)}
                style={{
                  backgroundColor: isActive ? "#e8a93a" : "transparent",
                }}
                className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reduced Card Sizes (Logo Only) */}
      <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            style={{ borderColor: "#e8a93a" }}
            title={member.name}
            className="logo-card-shake group relative flex h-20 sm:h-24 items-center justify-center rounded-xl border bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Logo Image Only */}
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={member.logo}
                alt={member.name}
                fill
                className="object-contain p-1 transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}