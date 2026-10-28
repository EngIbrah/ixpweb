"use client";

import { useState } from "react";
import Image from "next/image";
import type { Ixp, Category } from "@/lib/ixps";
import { SectionHeading } from "@/components/ui";

export function IxpPeersSection({ ixp }: { ixp: Ixp }) {
  // Default active tab starts on "peering"
  const [activeTab, setActiveTab] = useState<Category>("peering");

  // Dynamically pull members directly from the passed IXP object
  const regionMembers = ixp.members ?? [];
  const filteredMembers = regionMembers.filter(
    (member) => member.category === activeTab
  );

  return (
    <section id="peers" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-20 lg:px-10 scroll-mt-20">
      
      {/* Inline styles for custom scrollbar hiding and card-shake hover animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
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
        title={`Peers connected at ${ixp.code}`}
        lede={`Organizations exchanging local traffic directly at the ${ixp.city} facility.`}
      />

      {/* Filter Tabs in Brand Yellow */}
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

      {/* Region-Specific Member Logo Grid */}
      {filteredMembers.length > 0 ? (
        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              style={{ borderColor: "#e8a93a" }}
              title={member.name}
              className="logo-card-shake group relative flex h-20 sm:h-24 items-center justify-center rounded-xl border bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md"
            >
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
      ) : (
        /* Clean Empty State Placeholder */
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
          No {activeTab} partners currently listed for {ixp.code}. Contact us to set up peering.
        </div>
      )}
    </section>
  );
}