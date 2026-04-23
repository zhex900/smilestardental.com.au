import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About us — Smile Star Dental in Warners Bay",
  description:
    "Learn about Smile Star Dental (formerly Bay Arcade Dental) in Warners Bay on Lake Macquarie — our approach to family and general dentistry, technology and how to visit us.",
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
