import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our Warners Bay Dentists — Our Team & Practice",
  description:
    "Meet the team at Smile Star Dental in Warners Bay. Learn about our experienced dentists, gentle approach to family and cosmetic dentistry, and how to reach us.",
  path: "/about",
  keywords: [
    "about Smile Star Dental",
    "about Bay Arcade Dental",
    "Warners Bay dentist team",
    "Newcastle dental practice",
    "Dr Melody Healy",
    "contact Warners Bay dentist",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
