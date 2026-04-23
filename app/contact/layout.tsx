import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & book an appointment — Warners Bay",
  description:
    "Contact Smile Star Dental in Warners Bay on Lake Macquarie. Phone, address, opening hours and online booking for general and family dentistry.",
  path: "/contact",
  keywords: [
    "book dentist Warners Bay",
    "Smile Star Dental contact",
    "Lake Macquarie dentist appointment",
    "Warners Bay dental clinic address",
    "emergency dentist contact Newcastle",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
