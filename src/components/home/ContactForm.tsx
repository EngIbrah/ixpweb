"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const org = String(data.get("org") ?? "");
    const exchange = String(data.get("exchange") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Peering enquiry - ${exchange || "TISPA"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nExchange of interest: ${exchange}\n\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name & Organization Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Your Name
            </span>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Julia Ngoma"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#3853a4] focus:bg-white focus:ring-2 focus:ring-[#3853a4]/10"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Organization
            </span>
            <input
              required
              name="org"
              type="text"
              placeholder="e.g. Telecom Ltd"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#3853a4] focus:bg-white focus:ring-2 focus:ring-[#3853a4]/10"
            />
          </label>
        </div>

        {/* Exchange Dropdown with Custom Arrow */}
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Exchange of Interest
          </span>
          <div className="relative mt-2">
            <select
              name="exchange"
              defaultValue="TIX - Dar es Salaam"
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 pr-10 text-[15px] text-slate-900 outline-none transition-all focus:border-[#3853a4] focus:bg-white focus:ring-2 focus:ring-[#3853a4]/10"
            >
              <option>TIX - Dar es Salaam</option>
              <option>AIXP - Arusha</option>
              <option>DIXP - Dodoma</option>
              <option>MBIXP - Mbeya</option>
              <option>MIXP - Mwanza</option>
              <option>ZIXP - Zanzibar</option>
              <option>Not sure yet</option>
            </select>

            {/* Custom Select Chevron Icon */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </label>

        {/* Message Field */}
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Message
          </span>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell us about your network requirements or peering query..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#3853a4] focus:bg-white focus:ring-2 focus:ring-[#3853a4]/10 resize-none"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#e8a93a" }}
          className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-slate-900 shadow-md transition-all duration-200 hover:brightness-105 active:scale-95"
        >
          <span>Send Enquiry</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Sent Banner Info */}
        {sent && (
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-50 p-4 border border-amber-200/80 text-amber-900 text-sm">
            <svg className="h-5 w-5 shrink-0 text-[#e8a93a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              Opening your default email client with your enquiry pre-filled. Please click send from your email app to finish sending.
            </p>
          </div>
        )}

      </form>
    </div>
  );
}