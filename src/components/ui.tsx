import type { Stat } from "@/lib/ixps";

export function StatusBadge({ status }: { status: "Operational" | "Planned" }) {
  const live = status === "Operational";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink">
      <span className="relative flex h-2 w-2">
        {live && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
        )}
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{
            background: live ? "var(--color-live)" : "var(--color-muted)",
          }}
        />
      </span>
      {status}
    </span>
  );
}

export function SectionHeading({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
        {title}
        <span
          className="mt-2 block h-[3px] w-12 rounded-full bg-accent"
          style={{
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        />
      </h2>
      {lede && (
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{lede}</p>
      )}
    </div>
  );
}

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white px-5 py-6">
          <dt className="text-xs font-medium uppercase tracking-wide text-muted">
            {s.label}
          </dt>
          <dd className="mt-2 font-display text-xl font-semibold text-ink">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PeerLogos({ peers }: { peers: { name: string }[] }) {
  if (!peers.length) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-white px-6 py-10 text-center">
        <p className="text-sm text-muted">
          Peer and member networks for this exchange will be listed here. If
          your network peers at this point, let us know via the contact page.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {peers.map((p) => (
        <div
          key={p.name}
          className="flex h-20 items-center justify-center rounded-lg border border-line bg-white px-4 text-center text-sm font-medium text-ink"
        >
          {p.name}
        </div>
      ))}
    </div>
  );
}

export function ContactMap({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  const delta = 0.06;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <iframe
        title={`Map showing ${label}`}
        src={src}
        className="h-80 w-full grayscale-[15%]"
        loading="lazy"
      />
    </div>
  );
}
