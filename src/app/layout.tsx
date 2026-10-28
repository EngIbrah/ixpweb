import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/ixps";

// Self-hosted, open-source (SIL OFL) variable fonts - chosen as the closest
// free equivalents to Avenir Roman's geometric-humanist feel.
const jost = localFont({
  src: "../fonts/Jost.ttf",
  variable: "--font-jost",
  display: "swap",
});

const workSans = localFont({
  src: "../fonts/WorkSans.ttf",
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Internet Exchange Points by TISPA`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Internet Exchange Point Tanzania",
    "TISPA",
    "TIX",
    "AIXP",
    "DIXP",
    "MBIXP",
    "MIXP",
    "ZIXP",
    "peering Tanzania",
    "internet exchange Dar es Salaam",
  ],
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Internet Exchange Points by TISPA`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Internet Exchange Points by TISPA`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: "IXP Tanzania",
    url: siteConfig.domain,
    sameAs: [siteConfig.parentSite],
    email: siteConfig.email,
    areaServed: "TZ",
  };

  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${workSans.variable} bg-brand antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <div className="relative px-2 py-2 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
          <div className="relative overflow-hidden rounded-[28px] bg-paper shadow-[0_30px_80px_-30px_rgba(23,26,43,0.45)] sm:rounded-[36px]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>

        
        </div>
      </body>
    </html>
  );
}
