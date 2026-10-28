import Link from "next/link";
import { TanzaniaMap } from "@/components/TanzaniaMap";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 py-24 text-center">
      <TanzaniaMap size="sm" linked={false} />
      <div>
        <h1 className="text-3xl font-semibold text-ink">
          This route doesn&apos;t exist on the exchange.
        </h1>
        <p className="mt-3 max-w-md text-[17px] text-muted">
          The page you&apos;re looking for isn&apos;t here. It may have moved,
          or the address was mistyped.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
