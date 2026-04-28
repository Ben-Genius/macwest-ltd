const WP = "https://i0.wp.com/macwest.com.gh/wp-content/uploads";
const WP2 = "https://macwest.com.gh/wp-content/uploads";

function wp(year: string, month: string, file: string) {
  return `${WP}/${year}/${month}/${file}`;
}
function wp2(year: string, month: string, file: string) {
  return `${WP2}/${year}/${month}/${file}`;
}

export type GalleryImage = {
  src: string;
  alt: string;
  orientation?: "landscape" | "portrait";
  category?: string; // used by nested collections for filter tabs
};

export type GallerySubAlbum = {
  title: string;
  slug: string;
  cover: string;
  images: GalleryImage[];
};

export type DisplayStyle = "kinetic" | "grid" | "drag";

export type GalleryCollection = {
  title: string;
  slug: string;
  cover: string;
  description?: string;
  type: "flat" | "nested";
  displayStyle?: DisplayStyle;
  featured?: boolean;
  span?: "normal" | "wide" | "tall";
  images?: GalleryImage[];
  subAlbums?: GallerySubAlbum[];
};

export const GALLERY_COLLECTIONS: GalleryCollection[] = [
  {
    title: "Site Visits",
    slug: "site-visits",
    cover: "/images/IMG_2760-scaled.jpg.jpeg",
    description: "Board and leadership site inspections across active construction projects.",
    type: "flat",
    displayStyle: "kinetic",
    featured: true,
    span: "tall",
    images: [
      { src: wp("2026", "04", "IMG_2760-scaled.jpg"), alt: "Site visit" },
      { src: wp("2026", "04", "IMG_2795-scaled.jpg"), alt: "Site visit" },
      { src: wp("2026", "04", "IMG_2784-scaled.jpg"), alt: "Site visit" },
      { src: wp("2026", "04", "IMG_2800-scaled.jpg"), alt: "Site visit" },
      { src: "/images/IMG_2805-scaled.jpg.jpeg", alt: "Site visit" },
      { src: "/images/IMG_2813-scaled.jpg.jpeg", alt: "Site inspection" },
      { src: "/images/IMG_2813-scaled.jpg_1.jpeg", alt: "Site inspection" },
      { src: "/images/IMG_2859-scaled.jpg.jpeg", alt: "On-site review" },
      { src: "/images/IMG_2859-scaled.jpg_1.jpeg", alt: "On-site review" },
      { src: "/images/IMG_2913-scaled.jpg.jpeg", alt: "Construction progress", orientation: "landscape" },
      { src: "/images/IMG_2913-scaled.jpg_1.jpeg", alt: "Construction progress" },
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg", alt: "Aerial site view" },
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Aerial site view" },
      { src: "/images/IMG_9528-scaled.jpg.jpeg", alt: "Project oversight" },
      { src: "/images/IMG_9528-scaled.jpg_1.jpeg", alt: "Project oversight" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Foundation works" },
    ],
  },
  {
    title: "Coastal Engagement — Sankofa",
    slug: "coastal-engagement",
    cover: wp("2025", "03", "1H6A4274.jpg"),
    description: "Community engagement across Ghana's coastal communities under the Sankofa programme.",
    type: "nested",
    span: "wide",
    subAlbums: [
      {
        title: "Ahantawest",
        slug: "ahantawest",
        cover: wp("2025", "03", "1H6A4274.jpg"),
        images: [
          { src: wp("2025", "03", "1H6A4274.jpg"), alt: "Ahantawest community engagement" },
          { src: wp("2025", "03", "1H6A4308.jpg"), alt: "Ahantawest engagement", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4348-scaled.jpg"), alt: "Ahantawest engagement", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4671.jpg"), alt: "Ahantawest community" },
          { src: wp("2025", "03", "1H6A4723.jpg"), alt: "Ahantawest community" },
          { src: wp("2025", "03", "1H6A4745-scaled.jpg"), alt: "Ahantawest community", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4629.jpg"), alt: "Ahantawest community" },
          { src: wp("2025", "03", "1H6A4410.jpg"), alt: "Ahantawest engagement" },
          { src: wp("2025", "03", "1H6A4833.jpg"), alt: "Ahantawest activities" },
          { src: wp("2025", "03", "1H6A4852.jpg"), alt: "Ahantawest activities" },
          { src: wp("2025", "03", "1H6A4257_1.jpg"), alt: "Ahantawest community" },
          { src: wp("2025", "03", "7F0A3646-scaled.jpg"), alt: "Coastal engagement", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3698.jpg"), alt: "Coastal engagement", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3766-scaled.jpg"), alt: "Coastal activities", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3770-scaled.jpg"), alt: "Coastal activities", orientation: "portrait" },
        ],
      },
      {
        title: "Anomabo",
        slug: "anomabo",
        cover: wp("2025", "03", "7F0A3698.jpg"),
        images: [
          { src: wp("2025", "03", "7F0A3646-scaled.jpg"), alt: "Anomabo coastal engagement", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3698.jpg"), alt: "Anomabo engagement", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3766-scaled.jpg"), alt: "Anomabo activities", orientation: "portrait" },
          { src: wp("2025", "03", "7F0A3770-scaled.jpg"), alt: "Anomabo community", orientation: "portrait" },
        ],
      },
      {
        title: "Ellembele",
        slug: "ellembele",
        cover: wp("2025", "03", "1H6A4671.jpg"),
        images: [
          { src: wp("2025", "03", "1H6A4671.jpg"), alt: "Ellembele engagement" },
          { src: wp("2025", "03", "1H6A4723.jpg"), alt: "Ellembele community" },
          { src: wp("2025", "03", "1H6A4745-scaled.jpg"), alt: "Ellembele engagement", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4629.jpg"), alt: "Ellembele activities" },
        ],
      },
      {
        title: "Elmina",
        slug: "elmina",
        cover: wp("2025", "03", "1H6A4833.jpg"),
        images: [
          { src: wp("2025", "03", "1H6A4833.jpg"), alt: "Elmina community engagement" },
          { src: wp("2025", "03", "1H6A4852.jpg"), alt: "Elmina activities" },
          { src: wp("2025", "03", "1H6A4629.jpg"), alt: "Elmina engagement" },
          { src: wp("2025", "03", "1H6A4410.jpg"), alt: "Elmina community" },
        ],
      },
      {
        title: "Jomoro",
        slug: "jomoro",
        cover: wp("2025", "03", "1H6A4308.jpg"),
        images: [
          { src: wp("2025", "03", "1H6A4308.jpg"), alt: "Jomoro engagement", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4348-scaled.jpg"), alt: "Jomoro community", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4274.jpg"), alt: "Jomoro activities" },
          { src: wp("2025", "03", "1H6A4257_1.jpg"), alt: "Jomoro community" },
        ],
      },
      {
        title: "Keta",
        slug: "keta",
        cover: wp("2025", "03", "1H6A4745-scaled.jpg"),
        images: [
          { src: wp("2025", "03", "1H6A4745-scaled.jpg"), alt: "Keta engagement", orientation: "portrait" },
          { src: wp("2025", "03", "1H6A4852.jpg"), alt: "Keta community" },
          { src: wp("2025", "03", "1H6A4723.jpg"), alt: "Keta activities" },
        ],
      },
    ],
  },
  {
    title: "Staff Annual Retreats",
    slug: "staff-annual-retreats",
    cover: "/images/0T6A0203-scaled.jpg.jpeg",
    description: "Annual staff retreats building team spirit, culture, and shared purpose.",
    type: "nested",
    span: "tall",
    subAlbums: [
      {
        title: "2026 Retreat",
        slug: "staff-annual-retreat-2026",
        cover: "/images/0T6A0203-scaled.jpg.jpeg",
        images: [
          { src: "/images/0T6A0203-scaled.jpg.jpeg", alt: "Staff retreat 2026" },
          { src: "/images/0T6A0203-scaled.jpg_1.jpeg", alt: "Staff retreat 2026" },
          { src: "/images/0T6A0334.jpg.jpeg", alt: "Team activities 2026" },
          { src: "/images/0T6A9963.jpg.jpeg", alt: "Team building 2026" },
          { src: "/images/0T6A9963.jpg_1.jpeg", alt: "Team building 2026" },
        ],
      },
      {
        title: "2025 Retreat",
        slug: "staff-annual-retreat-2025",
        cover: "/images/0T6A9136.jpg.jpeg",
        images: [
          { src: "/images/0T6A9136.jpg.jpeg", alt: "Staff retreat 2025" },
          { src: "/images/0T6A9895.jpg.jpeg", alt: "Team activities 2025" },
          { src: "/images/0T6A9949.jpg.jpeg", alt: "Team building 2025" },
        ],
      },
    ],
  },
  {
    title: "Staff Annual Thanksgiving Service",
    slug: "staff-annual-thanksgiving-service",
    cover: "/images/0T6A9136.jpg.jpeg",
    description: "Annual thanksgiving services bringing the Macwest family together in gratitude.",
    type: "nested",
    subAlbums: [
      {
        title: "2025",
        slug: "staff-annual-thanksgiving-service-2025",
        cover: "/images/0T6A9949.jpg.jpeg",
        images: [
          { src: "/images/0T6A9949.jpg.jpeg", alt: "Thanksgiving service 2025" },
          { src: "/images/0T6A9895.jpg.jpeg", alt: "Thanksgiving service 2025" },
          { src: "/images/0T6A9963.jpg.jpeg", alt: "Thanksgiving gathering 2025" },
          { src: "/images/0T6A9963.jpg_1.jpeg", alt: "Thanksgiving 2025" },
        ],
      },
      {
        title: "2024",
        slug: "staff-annual-thanksgiving-service-2024",
        cover: "/images/0T6A9136.jpg.jpeg",
        images: [
          { src: "/images/0T6A9136.jpg.jpeg", alt: "Thanksgiving service 2024" },
          { src: "/images/0T6A0334.jpg.jpeg", alt: "Thanksgiving service 2024" },
          { src: "/images/0T6A0203-scaled.jpg.jpeg", alt: "Thanksgiving gathering 2024" },
        ],
      },
    ],
  },
  {
    title: "Staff-board Engagement",
    slug: "staff-board-engagement",
    cover: "/images/IMG_8104-scaled.jpg.jpeg",
    description: "Internal engagement activities between staff and board members.",
    type: "flat",
    displayStyle: "drag",
    images: [
      { src: "/images/IMG_8104-scaled.jpg.jpeg", alt: "Staff board engagement" },
      { src: "/images/IMG_8104-scaled.jpg_1.jpeg", alt: "Board engagement session" },
      { src: "/images/IMG_8104-scaled.jpg_2.jpeg", alt: "Engagement activities" },
      { src: "/images/IMG_2813-scaled.jpg.jpeg", alt: "Staff engagement" },
      { src: "/images/IMG_2813-scaled.jpg_1.jpeg", alt: "Staff and board" },
      { src: "/images/IMG_2813-scaled.jpg_2.jpeg", alt: "Engagement session" },
    ],
  },
  {
    title: "ENI Ghana Training — Cleaning & Cooking Day 1",
    slug: "cleaning-cooking-training-by-eni-ghana",
    cover: wp("2025", "03", "E53A1491-scaled.jpg"),
    description: "Day 1 of the ENI Ghana sponsored cleaning and cooking skills training programme.",
    type: "flat",
    displayStyle: "kinetic",
    images: [
      { src: wp("2025", "03", "E53A1438.jpg"), alt: "ENI training session" },
      { src: wp("2025", "03", "E53A1440.jpg"), alt: "Training activity" },
      { src: wp("2025", "03", "E53A1445.jpg"), alt: "Participants at training" },
      { src: wp("2025", "03", "E53A1491-scaled.jpg"), alt: "Training participants", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1458.jpg"), alt: "ENI Ghana training" },
      { src: wp("2025", "03", "E53A1451.jpg"), alt: "Cooking demonstration" },
      { src: wp("2025", "03", "E53A1442.jpg"), alt: "Skills training" },
      { src: wp("2025", "03", "E53A1523.jpg"), alt: "Training session" },
      { src: wp("2025", "03", "E53A1517-scaled.jpg"), alt: "Training session", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1529.jpg"), alt: "Community training" },
      { src: wp("2025", "03", "E53A1538-scaled.jpg"), alt: "Community training", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1553.jpg"), alt: "Participants" },
      { src: wp("2025", "03", "E53A1558.jpg"), alt: "Training participants" },
      { src: wp("2025", "03", "E53A1560.jpg"), alt: "Training participants" },
      { src: wp("2025", "03", "E53A1563-scaled.jpg"), alt: "Training", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1572-scaled.jpg"), alt: "Training", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1573.jpg"), alt: "Training activity" },
      { src: wp("2025", "03", "E53A1568.jpg"), alt: "Participants" },
      { src: wp("2025", "03", "E53A1499-scaled.jpg"), alt: "Training session", orientation: "portrait" },
    ],
  },
  {
    title: "ENI Ghana Training — Cleaning & Cooking Day 2",
    slug: "cleaning-cooking-training-by-eni-ghana-day-2",
    cover: wp("2025", "03", "E53A1529.jpg"),
    description: "Day 2 of the ENI Ghana sponsored cleaning and cooking skills training programme.",
    type: "flat",
    displayStyle: "kinetic",
    images: [
      { src: wp("2025", "03", "E53A1529.jpg"), alt: "ENI training day 2" },
      { src: wp("2025", "03", "E53A1538-scaled.jpg"), alt: "Day 2 training", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1553.jpg"), alt: "Community participants" },
      { src: wp("2025", "03", "E53A1558.jpg"), alt: "Training session day 2" },
      { src: wp("2025", "03", "E53A1560.jpg"), alt: "Skills development" },
      { src: wp("2025", "03", "E53A1563-scaled.jpg"), alt: "Training day 2", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1572-scaled.jpg"), alt: "Training activity", orientation: "portrait" },
      { src: wp("2025", "03", "E53A1573.jpg"), alt: "Day 2 participants" },
    ],
  },
  {
    title: "VIS Training by ENI Ghana",
    slug: "vis-training-by-eni-ghana",
    cover: "/images/IMG_4737-scaled.jpg.jpeg",
    description: "Vendor Integrity Screening training programme delivered in partnership with ENI Ghana.",
    type: "flat",
    displayStyle: "grid",
    images: [
      { src: "/images/IMG_4737-scaled.jpg.jpeg", alt: "VIS training" },
      { src: "/images/IMG_4738-scaled.jpg.jpeg", alt: "VIS training session" },
      { src: "/images/IMG_4741-scaled.jpg.jpeg", alt: "VIS participants" },
    ],
  },
  {
    title: "LDPJ Community Engagement — Bakanta Palace",
    slug: "ldpj-community-engagement-bakanta-palace",
    cover: "/images/IMG_4738-scaled.jpg.jpeg",
    description: "LDPJ community engagement event held at Bakanta Palace.",
    type: "flat",
    displayStyle: "grid",
    images: [
      { src: "/images/IMG_4738-scaled.jpg.jpeg", alt: "Bakanta Palace engagement" },
      { src: "/images/IMG_4741-scaled.jpg.jpeg", alt: "Community engagement" },
      { src: "/images/IMG_4737-scaled.jpg.jpeg", alt: "Community activities" },
    ],
  },
  {
    title: "LDPJ Community Engagement — Sanzule Palace",
    slug: "ldpj-community-engagement-sanzule-palace",
    cover: "/images/IMG_4741-scaled.jpg.jpeg",
    description: "LDPJ community engagement event held at Sanzule Palace.",
    type: "flat",
    displayStyle: "grid",
    images: [
      { src: "/images/IMG_4741-scaled.jpg.jpeg", alt: "Sanzule Palace engagement" },
      { src: "/images/IMG_4737-scaled.jpg.jpeg", alt: "Community engagement" },
      { src: "/images/IMG_4738-scaled.jpg.jpeg", alt: "Community activities" },
    ],
  },
  {
    title: "Inter Schools Competition",
    slug: "inter-schools-competition",
    cover: wp2("2025", "03", "8D4A2129.jpg"),
    description: "Macwest-sponsored inter-schools sports and skills competition.",
    type: "flat",
    displayStyle: "drag",
    span: "wide",
    images: [
      { src: wp2("2025", "03", "8D4A2129.jpg"), alt: "Inter schools competition" },
      { src: wp("2025", "03", "8D4A2135.jpg"), alt: "School competition" },
      { src: wp("2025", "03", "8D4A2136.jpg"), alt: "Students competing" },
      { src: wp2("2025", "03", "8D4A2138.jpg"), alt: "Competition activities" },
      { src: wp("2025", "03", "8D4A2143.jpg"), alt: "Inter schools event" },
      { src: wp("2025", "03", "8D4A2146.jpg"), alt: "School participants" },
      { src: wp("2025", "03", "8D4A2157.jpg"), alt: "Competition event" },
      { src: wp("2025", "03", "8D4A2167.jpg"), alt: "Students" },
      { src: wp("2025", "03", "8D4A2170.jpg"), alt: "Competition" },
      { src: wp("2025", "03", "8D4A2303-scaled.jpg"), alt: "Schools competition", orientation: "portrait" },
      { src: wp2("2025", "03", "8D4A2305.jpg"), alt: "Competition event" },
      { src: wp("2025", "03", "8D4A2339.jpg"), alt: "Inter schools" },
      { src: wp("2025", "03", "8D4A2343.jpg"), alt: "Participants" },
      { src: wp("2025", "03", "8D4A2353.jpg"), alt: "Students" },
      { src: wp2("2025", "03", "8D4A2379.jpg"), alt: "Competition" },
      { src: wp2("2025", "03", "8D4A2415.jpg"), alt: "Inter schools event" },
      { src: wp("2025", "03", "8D4A2813.jpg"), alt: "Competition closing" },
    ],
  },
  {
    title: "Enrico Mattei Week Celebration",
    slug: "enrico-mattei-week-celebration",
    cover: "/images/0T6A9895.jpg.jpeg",
    description: "Celebrations marking Enrico Mattei Week in partnership with ENI Ghana.",
    type: "flat",
    displayStyle: "kinetic",
    images: [
      { src: "/images/0T6A9895.jpg.jpeg", alt: "Enrico Mattei week celebration" },
      { src: "/images/0T6A9949.jpg.jpeg", alt: "Celebration event" },
      { src: "/images/0T6A9963.jpg.jpeg", alt: "ENI Ghana celebration" },
      { src: "/images/0T6A9963.jpg_1.jpeg", alt: "Celebration activities" },
      { src: "/images/0T6A0334.jpg.jpeg", alt: "Celebration" },
    ],
  },
  {
    title: "Handing Over Ceremony — Astroturf",
    slug: "handing-over-ceremony-for-astroturf",
    cover: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg",
    description: "Official handing over ceremony for the completed AstroTurf construction project.",
    type: "flat",
    displayStyle: "kinetic",
    images: [
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg", alt: "AstroTurf aerial view" },
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Handover ceremony" },
      { src: "/images/IMG_9528-scaled.jpg.jpeg", alt: "Ceremony" },
      { src: "/images/IMG_9528-scaled.jpg_1.jpeg", alt: "AstroTurf completion" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Handover event" },
    ],
  },
];

export function getCollection(slug: string): GalleryCollection | undefined {
  return GALLERY_COLLECTIONS.find((c) => c.slug === slug);
}

export function getSubAlbum(
  collectionSlug: string,
  albumSlug: string,
): GallerySubAlbum | undefined {
  return getCollection(collectionSlug)?.subAlbums?.find(
    (a) => a.slug === albumSlug,
  );
}
