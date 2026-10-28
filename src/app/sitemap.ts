import type { MetadataRoute } from "next";
import { ixps, siteConfig } from "@/lib/ixps";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${siteConfig.domain}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const ixpRoutes = ixps.map((ixp) => ({
    url: `${siteConfig.domain}/ixp/${ixp.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...ixpRoutes];
}
