import { ixps, siteConfig } from "@/lib/ixps";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/CTASection";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { IxpPointsSection } from "@/components/home/IxpPointsSection";
import { MembersSection } from "@/components/home/MembersSection";

// Same order as the top nav: Dar, Arusha, Zanzibar, Mbeya, Mwanza, Dodoma.
const displayOrder = ["tix", "arusha", "zanzibar", "mbeya", "mwanza", "dodoma"];
const orderedIxps = displayOrder
  .map((slug) => ixps.find((i) => i.slug === slug))
  .filter(Boolean) as typeof ixps;

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <IxpPointsSection ixps={orderedIxps} />
      <AboutSection />
      <MembersSection />

      <CTASection
        title="Bring your network's traffic home."
        body="If your ISP, content platform, or enterprise network wants to reduce latency and transit costs, connecting at your nearest TISPA exchange is the fastest way to do it."
        primary={{ href: "#contact", label: "Start the peering process" }}
        secondary={{ href: "#points", label: "Find your nearest point" }}
      />

      <ContactSection ixps={orderedIxps} email={siteConfig.email} />
    </>
  );
}
