import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ixps, getIxpBySlug, siteConfig } from "@/lib/ixps";
import { IxpAboutSection } from "@/components/ixp/IxpAboutSection";
import { IxpContactSection } from "@/components/ixp/IxpContactSection";
import { IxpCtaSection } from "@/components/ixp/IxpCtaSection";
import { IxpHeroSection } from "@/components/ixp/IxpHeroSection";
import { IxpPeersSection } from "@/components/ixp/IxpPeersSection";
import { IxpStatusSection } from "@/components/ixp/IxpStatusSection";

export function generateStaticParams() {
  return ixps.map((ixp) => ({ slug: ixp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ixp = getIxpBySlug(slug);
  if (!ixp) return {};

  const title = `${ixp.name} (${ixp.code})`;
  const description = `${ixp.summary} Facility: ${ixp.facility}.`;

  return {
    title,
    description,
    alternates: { canonical: `/ixp/${ixp.slug}/` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.domain}/ixp/${ixp.slug}/`,
      images: [{ url: ixp.heroImage }],
    },
  };
}

export default async function IxpPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ixp = getIxpBySlug(slug);
  if (!ixp) notFound();

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ixp.name,
    alternateName: ixp.code,
    description: ixp.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: ixp.city,
      addressRegion: ixp.region,
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ixp.lat,
      longitude: ixp.lng,
    },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.domain,
    },
    url: `${siteConfig.domain}/ixp/${ixp.slug}/`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IXP Points",
        item: `${siteConfig.domain}/#points`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ixp.name,
        item: `${siteConfig.domain}/ixp/${ixp.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <IxpHeroSection ixp={ixp} />
      <IxpAboutSection ixp={ixp} />
      <IxpStatusSection ixp={ixp} />
      <IxpPeersSection ixp={ixp} />
      <IxpCtaSection code={ixp.code} />
      <IxpContactSection ixp={ixp} />
    </>
  );
}
