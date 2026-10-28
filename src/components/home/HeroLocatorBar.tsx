"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ixps } from "@/lib/ixps";

export function HeroLocatorBar() {
  const router = useRouter();
  const [slug, setSlug] = useState(ixps[0].slug);
  const selected = ixps.find((i) => i.slug === slug) ?? ixps[0];

  return (
    <div className="relative z-20 -mt-9 px-4 sm:-mt-12 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-4 rounded-2xl border border-line bg-paper/95 p-4 shadow-[0_18px_40px_-18px_rgba(23,26,43,0.28)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-4">
        {/* Location Selector */}
        <div className="flex-1 sm:px-4">
          <label
            htmlFor="ixp-location-select"
            className="block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Location
          </label>
          <select
            id="ixp-location-select"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full appearance-none bg-transparent text-sm sm:text-[15px] font-semibold text-ink outline-none cursor-pointer"
          >
            {ixps.map((ixp) => (
              <option key={ixp.slug} value={ixp.slug}>
                {ixp.city}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden h-8 w-px bg-line sm:block" />

        {/* Exchange Details */}
        <div className="flex-1 sm:px-6">
          <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
            Exchange
          </span>
          <p className="mt-1 text-sm sm:text-[15px] font-semibold text-ink truncate">
            {selected.code} - {selected.name}
          </p>
        </div>

        <div className="hidden h-8 w-px bg-line sm:block" />

        {/* Status Indicator */}
        <div className="flex-1 sm:px-6">
          <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
            Status
          </span>
          <p className="mt-1 flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-live animate-pulse" />
            {selected.status}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => router.push(`/ixp/${slug}/`)}
          className="mt-2 shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark active:scale-[0.98] sm:mt-0 sm:ml-2"
        >
          View exchange →
        </button>
      </div>
    </div>
  );
}
