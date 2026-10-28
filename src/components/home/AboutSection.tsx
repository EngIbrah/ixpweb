"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import Image from "next/image";

// Interactive Map Pin component with region tooltip and yellow fill
function InteractivePin({
  name,
  code,
  style,
}: {
  name: string;
  code: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="group/pin absolute pointer-events-auto cursor-pointer z-20 -translate-x-1/2 -translate-y-1/2"
      style={style}
    >
      {/* Bouncing Yellow Vector Pin */}
      <svg
        className="h-7 w-7 animate-bounce text-[#e8a93a] drop-shadow-md transition-transform duration-200 hover:scale-125"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>

      {/* Floating Hover Tooltip */}
      <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 translate-y-1 z-30">
        <div className="whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-xl flex items-center gap-1.5 border border-slate-800">
          <span className="font-semibold text-[#e8a93a]">{code}</span>
          <span className="text-slate-300">•</span>
          <span>{name}</span>
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
}

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"performance" | "cost">("performance");

  // Region Pins overlay coordinates tuned for zoomed map container
  const exchangeRegions = [
    { code: "TIX", name: "Dar es Salaam", style: { top: "48%", left: "70%", animationDelay: "0.5s" } },
    { code: "AIXP", name: "Mwanza", style: { top: "22%", left: "57%", animationDelay: "0.4s" } },
    { code: "ZIXP", name: "Zanzibar", style: { top: "54%", left: "79%", animationDelay: "0.9s" } },
    { code: "MBIXP", name: "Mbeya", style: { top: "67%", left: "44%", animationDelay: "0.2s" } },
    { code: "MIXP", name: "Arusha", style: { top: "16%", left: "37%", animationDelay: "0.1s" } },
    { code: "DIXP", name: "Dodoma", style: { top: "49%", left: "60%", animationDelay: "0.7s" } },
  ];

  // Stat metrics data
  const stats = [
    {
      value: "37",
      label: "Peers",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: "100+",
      label: "GBPS Traffic",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      value: "6",
      label: "Locations",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      value: "100+",
      label: "Ports",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[1440px] px-5 py-16 sm:py-20 lg:px-10 scroll-mt-20"
    >
      {/* Inline styles for shake effect & network packet dash animation */}
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

        @keyframes network-dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-network-route {
          stroke-dasharray: 6 10;
          animation: network-dash 2s linear infinite;
        }
      `}} />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        
        {/* Left Side: Stats and Headings */}
        <div className="flex flex-col justify-between space-y-8 md:order-1">
          <div className="space-y-8">
            <SectionHeading
              title="Powering Tanzania's Digital Backbone"
              lede="TISPA manages Internet Exchange Points (IXPs): strategic facilities where diverse networks connect directly to exchange traffic."
            />

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{ borderColor: "#e8a93a" }}
                  className="stat-card-shake relative flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"
                      style={{ color: "#3853a4" }}
                    >
                      {stat.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-3xl font-bold tracking-tight text-[#3853a4] sm:text-4xl">
                      {stat.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Tabs */}
            <div className="space-y-6 pt-2">
              <div className="flex rounded-xl bg-slate-100 p-1.5 max-w-md">
                <button
                  type="button"
                  onClick={() => setActiveTab("performance")}
                  style={{
                    backgroundColor: activeTab === "performance" ? "#e8a93a" : "transparent",
                  }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all duration-200 ${
                    activeTab === "performance"
                      ? "text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Performance & Speed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cost")}
                  style={{
                    backgroundColor: activeTab === "cost" ? "#e8a93a" : "transparent",
                  }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all duration-200 ${
                    activeTab === "cost"
                      ? "text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Cost & Resilience
                </button>
              </div>

              <div className="min-h-[100px] text-[16px] leading-relaxed text-slate-600">
                {activeTab === "performance" ? (
                  <p className="animate-fadeIn">
                    Peer at Tanzania&lsquo;s largest Internet Exchange Points operated by TISPA. 
                    IXP&apos;s offer direct access to over 100+ ISP network ports, with services 
                    across 6 regions in Tanzania. Become a peer and enjoy efficient data transmission 
                    between ISPs, content providers, and other network operators.
                  </p>
                ) : (
                  <p className="animate-fadeIn">
                    By keeping local internet traffic local, TISPA reduces latency and costs while 
                    enhancing the overall performance of Tanzania’s internet ecosystem. Traffic reaches 
                    its destination in one hop instead of a round trip through international transit - which 
                    is faster, cheaper, and more resilient.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <a 
              href="http://internetsummit.tz" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: "#3853a4" }}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:brightness-110 active:scale-95"
            >
              Learn More
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Full-Bleed Enlarged Map Container */}
        <div className="flex md:order-2 h-full min-h-[550px] lg:min-h-[650px]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            
            {/* Map Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center scale-125 md:scale-135 transition-transform duration-300">
              <Image
                src="/images/footprint.svg"
                alt="Tanzania IXP Network Map"
                fill
                className="object-contain select-none p-2"
                draggable={false}
                priority
              />

              {/* Animated Network Lines overlay between IXP cities */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <g stroke="#e8a93a" strokeWidth="2.5" fill="none" strokeLinecap="round" className="opacity-80">
                  <path d="M 70% 48% L 60% 49%" className="animate-network-route" />
                  <path d="M 60% 49% L 57% 22%" className="animate-network-route" />
                  <path d="M 57% 22% L 37% 16%" className="animate-network-route" />
                  <path d="M 60% 49% L 44% 67%" className="animate-network-route" />
                  <path d="M 70% 48% L 79% 54%" className="animate-network-route" />
                </g>
              </svg>

              {/* Interactive Bouncing Yellow Pins Overlay */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="relative w-full h-full">
                  {exchangeRegions.map((region) => (
                    <InteractivePin
                      key={region.code}
                      code={region.code}
                      name={region.name}
                      style={{ ...region.style, animationDuration: "1.2s" }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}