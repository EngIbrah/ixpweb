import { HeroLocatorBar } from "@/components/home/HeroLocatorBar";
import { SplitHero } from "@/components/SplitHero";

export function HomeHeroSection() {
  return (
    <section className="px-4p pt-6 pb-12 sm:px-10 sm:pb-20">
      <SplitHero
        titleLines={[
          { text: "Keep Tanzania's" },
          { text: "internet traffic", accent: true },
          { text: "at home." },
        ]}
        subtitle="Six Internet Exchange Points where local networks connect directly: faster, cheaper, and more resilient than routing through servers abroad."
        ctaLabel="Explore the points"
        ctaHref="#points"
        imageSrc="/images/hero1.jpg"
        imageAlt="Network infrastructure representing a TISPA internet exchange point"
        priority
        overlay
      />
      <HeroLocatorBar />
    </section>
  );
}
