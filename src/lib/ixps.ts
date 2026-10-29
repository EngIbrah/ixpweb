export type Stat = {
  label: string;
  value: string;
};

export type Peer = {
  name: string;
};

export type Category = "peering" | "colocation" | "connectivity" | "cdn";

export type Member = {
  name: string;
  category: Category;
  logo: string;
};

export type Ixp = {
  slug: string;
  code: string;
  name: string;
  city: string;
  region: string;
  status: "Operational" | "Planned";
  tagline: string;
  summary: string;
  about: string[];
  established: string;
  facility: string;
  address: string;
  lat: number;
  lng: number;
  stats: Stat[];
  peers: Peer[];
  members?: Member[]; // Region-specific members array
  heroImage: string;
  facilityImage: string;
  contactEmail: string;
  contactPhone: string;
};

// Approximate coordinates per city centre - replace with the exact facility
// coordinates when available.
export const ixps: Ixp[] = [
  {
    slug: "tix",
    code: "TIX",
    name: "Tanzania Internet Exchange",
    city: "Dar es Salaam",
    region: "Dar es Salaam Region",
    status: "Operational",
    tagline: "Where Tanzania's internet traffic comes home.",
    summary:
      "TIX is TISPA's founding exchange and the busiest interconnection point in the country, keeping local traffic between Tanzanian networks inside Tanzania.",
    about: [
      "TIX is currently the main and most successful project of the Tanzania Internet Service Providers Association (TISPA). It was built to give local networks a place to exchange traffic without routing it through servers outside the country.",
      "Every extra hop out of Tanzania adds latency and cost. TIX removes that hop for any two Tanzanian networks that choose to peer here, which is why it carries the largest share of domestic traffic of any TISPA exchange.",
    ],
    established: "TISPA founding project",
    facility: "Dar es Salaam",
    address: "Dar es Salaam, Tanzania",
    lat: -6.7924,
    lng: 39.2083,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "12" },
      { label: "Peering ports", value: "100+" },
      { label: "Peak traffic", value: "32 Gbps" },
    ],
    peers: [],
    members: [
      { name: "Airtel", category: "peering", logo: "/images/members/airtel.svg" },
      { name: "Vodacom", category: "peering", logo: "/images/members/vodacom.svg" },
      { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
      { name: "CRDB Bank", category: "peering", logo: "/images/members/crdb.svg" },
      { name: "Google", category: "cdn", logo: "/images/cdn/google.svg" },
      { name: "Meta", category: "cdn", logo: "/images/cdn/meta.svg" },
      { name: "SEACOM", category: "connectivity", logo: "/images/connectivity/seacom.svg" },
    ],
    heroImage: "/images/server3.jpg",
    facilityImage: "/images/dar.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
  {
    slug: "arusha",
    code: "AIXP",
    name: "Arusha Internet Exchange Point",
    city: "Arusha",
    region: "Arusha Region",
    status: "Operational",
    tagline: "A local peering point for Tanzania's northern circuit.",
    summary:
      "AIXP keeps traffic between Arusha-based and northern-zone networks local, cutting the latency and cost of routing through Dar es Salaam or abroad.",
    about: [
      "AIXP is the internet exchange point for Arusha City. It is a Tanzania Internet Service Providers Association (TISPA) project, initially funded by the Tanzania Communications Regulatory Authority (TCRA).",
      "By giving networks in the north a nearby exchange, AIXP shortens the path between local ISPs, enterprises, and content platforms serving Arusha and the surrounding region.",
    ],
    established: "TCRA-funded TISPA project",
    facility: "Arusha",
    address: "Arusha, Tanzania",
    lat: -3.3869,
    lng: 36.6829,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "12" },
      { label: "Peering ports", value: "100+" },
      { label: "Peak traffic", value: "32 Gbps" },
    ],
    peers: [],
    members: [
      { name: "Habari Node", category: "connectivity", logo: "/images/connectivity/habari.png" },
      { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
      { name: "Cybernet", category: "connectivity", logo: "/images/connectivity/cyber.png" },
      { name: "Cloudflare", category: "cdn", logo: "/images/cdn/cloudflare.png" },
    ],
    heroImage: "/images/arusha.jpg",
    facilityImage: "/images/arusha.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
  {
    slug: "dodoma",
    code: "DIXP",
    name: "Dodoma Internet Exchange Point",
    city: "Dodoma",
    region: "Dodoma Region",
    status: "Operational",
    tagline: "Local peering at the seat of government.",
    summary:
      "DIXP serves Dodoma Town, hosted at the TTCL Head Office on Railway Street, keeping traffic for the capital's networks and institutions inside the region.",
    about: [
      "DIXP is the internet exchange point for Dodoma Town. It is a Tanzania Internet Service Providers Association (TISPA) project, initially funded by the Tanzania Communications Regulatory Authority (TCRA), and hosted at the Dodoma TTCL Head Office on Railway Street, Dodoma.",
      "As Dodoma has grown into Tanzania's administrative capital, a local exchange point reduces the distance government, enterprise, and residential traffic has to travel to reach another Dodoma-based network.",
    ],
    established: "TCRA-funded TISPA project",
    facility: "TTCL Head Office, Railway Street, Dodoma",
    address: "Railway Street, Dodoma, Tanzania",
    lat: -6.163,
    lng: 35.7516,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "12" },
      { label: "Peering ports", value: "100+" },
      { label: "Peak traffic", value: "32 Gbps" },
    ],
    peers: [],
    members: [
      { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
      { name: "Halotel", category: "peering", logo: "/images/members/halotel.png" },
      { name: "Google", category: "cdn", logo: "/images/cdn/google.svg" },
    ],
    heroImage: "/images/dodoma.png",
    facilityImage: "/images/dodoma.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
  {
    slug: "mbeya",
    code: "MBIXP",
    name: "Mbeya Internet Exchange Point",
    city: "Mbeya",
    region: "Mbeya Region",
    status: "Operational",
    tagline: "Open peering for Tanzania's southern highlands.",
    summary:
      "MBIXP is open to any network operator that can make its network more efficient through peering, hosted at TTCL Telephone House, Mbeya.",
    about: [
      "The Mbeya Internet Exchange Point (MBIXP) is an internet exchange point in Mbeya. It is open to any network operator that believes it can make its network more efficient through peering.",
      "MBIXP is located at TTCL Telephone House, Mbeya, giving networks across the southern highlands a shared, neutral point to exchange traffic close to home.",
    ],
    established: "TISPA project",
    facility: "TTCL Telephone House, Mbeya",
    address: "TTCL Telephone House, Mbeya, Tanzania",
    lat: -8.9094,
    lng: 33.4608,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "Add count" },
      { label: "Peering ports", value: "Add count" },
      { label: "Peak traffic", value: "Add figure" },
    ],
    peers: [],
    members: [
      { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
      { name: "Airtel", category: "peering", logo: "/images/members/airtel.svg" },
    ],
    heroImage: "/images/mbeya.png",
    facilityImage: "/images/mbeya.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
  {
    slug: "mwanza",
    code: "MIXP",
    name: "Mwanza Internet Exchange Point",
    city: "Mwanza",
    region: "Mwanza Region",
    status: "Operational",
    tagline: "A neutral peering point on the shores of Lake Victoria.",
    summary:
      "MIXP was created in cooperation between TCRA and TISPA, and is operated by TISPA to provide a neutral peering point for IP networks in Mwanza.",
    about: [
      "The Mwanza IXP was created in cooperation between the Tanzania Communications Regulatory Authority (TCRA) and TISPA. It is operated by TISPA in order to provide a neutral peering point for IP networks in Mwanza, Tanzania.",
      "As the main commercial hub on Lake Victoria, Mwanza's networks benefit from a local exchange that keeps regional traffic off long-haul links to Dar es Salaam.",
    ],
    established: "TCRA & TISPA cooperation",
    facility: "Mwanza",
    address: "Mwanza, Tanzania",
    lat: -2.5164,
    lng: 32.9175,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "12" },
      { label: "Peering ports", value: "100+" },
      { label: "Peak traffic", value: "32 Gbps" },
    ],
    peers: [],
    members: [
      { name: "Vodacom", category: "peering", logo: "/images/members/vodacom.svg" },
      { name: "TTCL", category: "peering", logo: "/images/members/ttcl.svg" },
      { name: "Cloudflare", category: "cdn", logo: "/images/cdn/cloudflare.png" },
    ],
    heroImage: "/images/hero1.jpg",
    facilityImage: "/images/mwanza.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
  {
    slug: "zanzibar",
    code: "ZIXP",
    name: "Zanzibar Internet Exchange Point",
    city: "Zanzibar",
    region: "Zanzibar",
    status: "Operational",
    tagline: "Keeping the isles' traffic on the isles.",
    summary:
      "ZIXP is a TISPA project located at Kilimani, Zanzibar, giving island-based networks a local peering point instead of routing across the channel.",
    about: [
      "ZIXP is a project of TISPA. The Zanzibar Internet Exchange Point is an internet exchange point in Zanzibar, located at Kilimani, Mianzini, in the former Tritel building and current ComNet office.",
      "For an island economy built on tourism and trade, keeping local traffic local matters: ZIXP shortens the path between Zanzibar-based networks instead of sending it across the channel and back.",
    ],
    established: "TISPA project",
    facility: "Kilimani, Mianzini, Zanzibar (former Tritel building / ComNet office)",
    address: "Kilimani, Mianzini, Zanzibar, Tanzania",
    lat: -6.1659,
    lng: 39.2026,
    stats: [
      { label: "Status", value: "Operational" },
      { label: "Connected networks", value: "12" },
      { label: "Peering ports", value: "100+" },
      { label: "Peak traffic", value: "32 Gbps" },
    ],
    peers: [],
    members: [
      { name: "Zanlink", category: "connectivity", logo: "/images/members/zanlink.svg" },
      { name: "Zantel", category: "peering", logo: "/images/members/zantel.svg" },
      { name: "Comnet", category: "peering", logo: "/images/members/comnet.png" },
    ],
    heroImage: "/images/hero1.jpg",
    facilityImage: "/images/zanzibar.png",
    contactEmail: "info@tispa.or.tz",
    contactPhone: "+255 XX XXX XXXX",
  },
];

export function getIxpBySlug(slug: string) {
  return ixps.find((i) => i.slug === slug);
}

export const siteConfig = {
  name: "IXP Tanzania",
  legalName: "Tanzania Internet Service Providers Association (TISPA)",
  domain: "https://ixp.tz",
  description:
    "Internet Exchange Points operated by TISPA across Tanzania - TIX, AIXP, DIXP, MBIXP, MIXP and ZIXP - keeping local internet traffic local, faster and cheaper.",
  email: "info@tispa.or.tz",
  parentSite: "https://tispa.or.tz",
};