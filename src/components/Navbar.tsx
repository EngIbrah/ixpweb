"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Top-level station links
const stationLinks = [
  { slug: "tix", label: "Dar" },
  { slug: "arusha", label: "Arusha" },
  { slug: "zanzibar", label: "Zanzibar" },
  { slug: "mbeya", label: "Mbeya" },
  { slug: "mwanza", label: "Mwanza" },
  { slug: "dodoma", label: "Dodoma" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
      {/* Added bottom padding (pb-5 lg:pb-6) */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 pt-4 pb-5 lg:px-10 lg:pt-5 lg:pb-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="IXP Tanzania"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-2 lg:flex xl:gap-4">
          {/* Home Link */}
          {(() => {
            const active = pathname === "/";
            return (
              <Link
                href="/"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active ? "text-[#3853a4]" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Home</span>
                {/* Yellow Animated Active Underline Bar */}
                <span
                  style={{ backgroundColor: "#e8a93a" }}
                  className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded-full transition-all duration-300 ${
                    active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })()}

          {/* Station Links */}
          {stationLinks.map((s) => {
            const href = `/ixp/${s.slug}/`;
            const active = pathname === href;
            return (
              <Link
                key={s.slug}
                href={href}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active ? "text-[#3853a4]" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{s.label}</span>
                {/* Yellow Animated Active Underline Bar */}
                <span
                  style={{ backgroundColor: "#e8a93a" }}
                  className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded-full transition-all duration-300 ${
                    active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/#contact"
            style={{ backgroundColor: "#e8a93a" }}
            className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition-all duration-200 hover:brightness-105 active:scale-95"
          >
            <span>Peer with us</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50/80 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-[#3853a4]" : "text-slate-700 hover:bg-slate-50"
              }`}
              onClick={() => setOpen(false)}
            >
              <span>Home</span>
              {pathname === "/" && (
                <span style={{ backgroundColor: "#e8a93a" }} className="h-1.5 w-1.5 rounded-full" />
              )}
            </Link>

            {stationLinks.map((s) => {
              const href = `/ixp/${s.slug}/`;
              const active = pathname === href;
              return (
                <Link
                  key={s.slug}
                  href={href}
                  className={`relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? "text-[#3853a4]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{s.label}</span>
                  {active && (
                    <span style={{ backgroundColor: "#e8a93a" }} className="h-1.5 w-1.5 rounded-full" />
                  )}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href="/#contact"
                style={{ backgroundColor: "#e8a93a" }}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-center text-sm font-bold text-slate-900 shadow-sm transition-all"
                onClick={() => setOpen(false)}
              >
                <span>Peer with us</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}