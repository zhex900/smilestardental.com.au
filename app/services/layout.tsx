import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";
import { services as serviceList } from "./services";
import { absUrl } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dental Services Warners Bay & Newcastle | Smile Star Dental",
  description:
    "Explore dental services at Smile Star Dental in Warners Bay, serving Newcastle. From routine check-ups to implants, clear aligners and more. Book online.",
  path: "/services",
  keywords: [
    "dental services Warners Bay",
    "dental implants Newcastle",
    "clear aligners Warners Bay",
    "teeth whitening Warners Bay",
    "cosmetic dentistry Newcastle",
    "children's dentist Warners Bay",
    "airway development children",
    "ceramic crowns Warners Bay",
    "full mouth rehabilitation Newcastle",
    "root canal treatment Warners Bay",
    "fillings Warners Bay",
    "gum health maintenance",
  ],
});

function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absUrl("/services")}#services`,
    name: "Dental Services",
    itemListElement: serviceList.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: service.slug
          ? absUrl(`/services/${service.slug}`)
          : absUrl("/services"),
        serviceType: service.category,
        provider: { "@id": `${absUrl("/")}#dentist` },
        areaServed: [
          { "@type": "City", name: "Warners Bay" },
          { "@type": "City", name: "Newcastle" },
        ],
      },
    })),
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={servicesItemListJsonLd()} />
      {children}
    </>
  );
}
