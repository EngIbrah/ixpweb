import Link from "next/link";
import Image from "next/image";
import { ixps, siteConfig } from "@/lib/ixps";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-900 text-white">
      {/* Yellow Top Border Accent */}
      <div 
        style={{ backgroundColor: "#e8a93a" }} 
        className="h-1 w-full" 
      />

      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="space-y-4 md:col-span-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logo.png"
                alt="IXP Tanzania"
                width={140}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Internet Exchange Points operated by TISPA, keeping Tanzania&apos;s
              internet traffic local, fast, and affordable.
            </p>

            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#e8a93a" }}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:underline"
            >
              <span>A project of TISPA</span>
              <svg 
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* IXP Points Links (Cols 5-7) */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              IXP Points
            </p>
            <ul className="mt-4 space-y-2.5">
              {ixps.map((ixp) => (
                <li key={ixp.slug}>
                  <Link
                    href={`/ixp/${ixp.slug}/`}
                    className="text-sm text-slate-300 transition-colors hover:text-[#e8a93a]"
                  >
                    {ixp.city} - <span className="font-mono text-xs opacity-75">{ixp.code}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links (Cols 8-9) */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/#points" className="text-sm text-slate-300 transition-colors hover:text-[#e8a93a]">
                  IXP Points
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-slate-300 transition-colors hover:text-[#e8a93a]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#members" className="text-sm text-slate-300 transition-colors hover:text-[#e8a93a]">
                  Peers &amp; Members
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-300 transition-colors hover:text-[#e8a93a]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#e8a93a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#e8a93a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dar es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="text-slate-400 font-medium">Six exchange points. One national network.</p>
        </div>

      </div>
    </footer>
  );
}