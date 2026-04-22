import type { Metadata } from "next";
import { address, phoneNumber, email, socialMedia } from "@/constants";

/**
 * Tolerate a malformed NEXT_PUBLIC_SITE_URL (e.g. "https://http://..." with
 * extra protocol prefix, quoted values, trailing slash, or empty string).
 */
export function normalizeSiteUrl(raw: string | undefined): URL {
  const fallback = "https://smilestardental.com.au";
  if (!raw) return new URL(fallback);

  let s = raw.trim().replace(/^['"]|['"]$/g, "");
  s = s.replace(/^https?:\/\/(https?:\/\/)/i, "$1");
  s = s.replace(/\/+$/, "");
  try {
    return new URL(s);
  } catch {
    return new URL(fallback);
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
);

export const SITE_NAME = "Smile Star Dental";
export const SITE_LEGAL_NAME = "Smile Star Dental";
export const SITE_ALTERNATE_NAME = "Bay Arcade Dental";
export const SITE_LOCALE = "en_AU";
export const SITE_COUNTRY = "AU";
//1200×630
export const SITE_DEFAULT_OG_IMAGE = "/images/logo.png";

/**
 * Baseline keywords — per-page metadata extends these.
 */
export const SITE_KEYWORDS: string[] = [
  "Smile Star Dental",
  "Bay Arcade Dental",
  "dentist Warners Bay",
  "dentist Newcastle",
  "Lake Macquarie dentist",
  "family dentist",
  "children's dentist",
  "pediatric dentist",
  "cosmetic dentistry",
  "dental implants",
  "teeth whitening",
  "Invisalign",
  "clear aligners",
  "braces",
  "crowns and bridges",
  "ceramic crowns",
  "porcelain veneers",
  "root canal",
  "fillings",
  "dental cleaning",
  "gum disease treatment",
  "periodontal care",
  "emergency dentist",
  "Botox teeth grinding",
  "bruxism treatment",
  "airway development children",
  "sleep apnea dentist",
  "full mouth rehabilitation",
];

function toTelUri(display: string): string {
  const digits = display.replace(/\D/g, "");
  if (!digits) return display;
  if (digits.startsWith("61")) return `+${digits}`;
  if (digits.startsWith("0")) return `+61${digits.slice(1)}`;
  return `+${digits}`;
}

export const PHONE_URI = toTelUri(phoneNumber);

export const FULL_STREET_ADDRESS = `${address.street}`;
const [addressLocalityWithState, postalCode] = address.city.split(/\s+(?=\d)/);
const [addressLocality, addressRegion] = addressLocalityWithState
  .split(",")
  .map((s) => s.trim());

export const POSTAL_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: FULL_STREET_ADDRESS,
  addressLocality: addressLocality ?? "Warners Bay",
  addressRegion: addressRegion ?? "NSW",
  postalCode: (postalCode ?? "").trim() || "2282",
  addressCountry: SITE_COUNTRY,
};

export const OPENING_HOURS_SPEC = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
];

/** Absolute URL helper. */
export function absUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, siteUrl).toString();
}

/**
 * Site-wide default metadata. Individual pages override title/description/
 * openGraph/etc as needed. Title uses a template so brand is appended.
 */
export const baseMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${SITE_NAME} | Trusted Warners Bay & Newcastle Dentists`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Smile Star Dental (formerly Bay Arcade Dental) in Warners Bay provides family, cosmetic and restorative dentistry — implants, Invisalign, whitening, crowns, children's care and more.",
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  generator: "Next.js",
  authors: [{ name: SITE_NAME, url: siteUrl.toString() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "Health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: siteUrl.toString(),
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Trusted Warners Bay & Newcastle Dentists`,
    description:
      "Family, cosmetic and restorative dentistry in Warners Bay — implants, Invisalign, whitening, crowns and more.",
    images: [
      {
        url: SITE_DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Trusted Warners Bay & Newcastle Dentists`,
    description:
      "Family, cosmetic and restorative dentistry in Warners Bay — implants, Invisalign, whitening, crowns and more.",
    images: [SITE_DEFAULT_OG_IMAGE],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
};

/**
 * Compose page-level metadata with sensible defaults while still letting
 * callers override everything.
 */
export function buildMetadata(
  {
    title,
    description,
    path = "/",
    keywords,
    images,
    type = "website",
    noIndex = false,
    ...rest
  }: {
    title: string;
    description: string;
    path?: string;
    keywords?: string[];
    images?: { url: string; alt?: string; width?: number; height?: number }[];
    type?: "website" | "article";
    noIndex?: boolean;
  } & Omit<
    Metadata,
    "title" | "description" | "alternates" | "openGraph" | "twitter" | "robots"
  > = {} as never,
): Metadata {
  const url = absUrl(path);
  const og = images ?? [
    {
      url: SITE_DEFAULT_OG_IMAGE,
      alt: title,
      width: 1200,
      height: 630,
    },
  ];
  return {
    title,
    description,
    keywords: keywords ?? SITE_KEYWORDS,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : baseMetadata.robots,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: og,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og.map((i) => i.url),
    },
    ...rest,
  };
}

// ---------------------------------------------------------------------------
// JSON-LD builders
// ---------------------------------------------------------------------------

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl.toString()}#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: siteUrl.toString(),
    logo: {
      "@type": "ImageObject",
      url: absUrl("/images/logo.png"),
    },
    image: absUrl(SITE_DEFAULT_OG_IMAGE),
    email,
    telephone: PHONE_URI,
    sameAs: socialMedia.map((s) => s.url),
    address: POSTAL_ADDRESS,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl.toString()}#website`,
    url: siteUrl.toString(),
    name: SITE_NAME,
    inLanguage: "en-AU",
    publisher: { "@id": `${siteUrl.toString()}#organization` },
  };
}

/**
 * Local business / Dentist schema. Renders opening hours, address, phone,
 * service area, and — critically — `sameAs` links which help Google surface
 * sitelinks and rich local results.
 */
export function dentistJsonLd(opts?: {
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  const base = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    "@id": `${siteUrl.toString()}#dentist`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: siteUrl.toString(),
    image: absUrl(SITE_DEFAULT_OG_IMAGE),
    logo: absUrl("/images/logo.png"),
    telephone: PHONE_URI,
    email,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Credit Card, EFTPOS, HICAPS",
    address: POSTAL_ADDRESS,
    openingHoursSpecification: OPENING_HOURS_SPEC,
    sameAs: socialMedia.map((s) => s.url),
    areaServed: [
      { "@type": "City", name: "Warners Bay" },
      { "@type": "City", name: "Newcastle" },
      { "@type": "AdministrativeArea", name: "Lake Macquarie" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        "Dental cleaning & checkups",
        "Teeth whitening",
        "Dental implants",
        "Invisalign & orthodontics",
        "Crowns & bridges",
        "Ceramic onlays & crowns",
        "Pediatric dentistry",
        "Airway development for children",
        "Root canal therapy",
        "Emergency dental care",
        "Gum disease treatment",
        "Gum health maintenance",
        "Botox for teeth grinding",
        "Full mouth rehabilitation",
        "Fillings",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
  if (opts?.aggregateRating) {
    return {
      ...base,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: opts.aggregateRating.ratingValue,
        reviewCount: opts.aggregateRating.reviewCount,
      },
    };
  }
  return base;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author: string;
  keywords?: string[];
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    headline: opts.title,
    description: opts.description,
    image: opts.image ? absUrl(opts.image) : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Person", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absUrl("/images/logo.png"),
      },
    },
    keywords: opts.keywords?.join(", "),
    articleSection: opts.category,
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
