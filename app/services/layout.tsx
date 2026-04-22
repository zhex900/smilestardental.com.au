import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";
import { services as serviceList } from "./services";
import { absUrl } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Dental Services in Warners Bay — Cosmetic, Implants, Invisalign & More",
  description:
    "Explore our full range of dental services in Warners Bay: general checkups, dental implants, Invisalign, cosmetic dentistry, whitening, crowns, children's dentistry, airway development, Botox for bruxism and full-mouth rehabilitation.",
  path: "/services",
  keywords: [
    "dental services Warners Bay",
    "dental implants Newcastle",
    "Invisalign Warners Bay",
    "teeth whitening Warners Bay",
    "cosmetic dentistry Newcastle",
    "children's dentist Warners Bay",
    "airway development children",
    "Botox teeth grinding",
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
        url: absUrl("/services"),
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
