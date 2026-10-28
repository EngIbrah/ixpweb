import Image from "next/image";
import Link from "next/link";

export function SplitHero({
  eyebrow,
  titleLines,
  subtitle,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  priority,
  overlay = false,
}: {
  eyebrow?: string;
  titleLines: { text: string; accent?: boolean }[];
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] sm:rounded-[28px] ${
        overlay
          ? "aspect-[1.35/1] sm:aspect-[2.8/1]"
          : "aspect-[1.35/1] sm:aspect-[2.35/1]"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 100vw"
          priority={priority}
        />
      </div>

      <div
        className={`relative z-10 flex h-full flex-col px-8 sm:px-12 lg:px-16 ${
          overlay
            ? "justify-start bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/15 py-10 sm:w-1/2 sm:bg-brand-dark/80 sm:py-12 lg:py-14"
            : "justify-center bg-brand-dark py-12 sm:py-10"
        }`}
      >
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-wide text-white/60">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-[3.5rem]">
          {titleLines.map((line, i) => (
            <span
              key={i}
              className={`block ${line.accent ? "text-accent" : ""}`}
            >
              {line.text}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
          {subtitle}
        </p>
        <Link
          href={ctaHref}
          className="mt-7 inline-flex w-fit items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
