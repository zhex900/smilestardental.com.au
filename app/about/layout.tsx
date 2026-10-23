import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our Dental Clinic in Warners Bay | Smile Star Dental",
  description:
    "Get to know Smile Star Dental, our Warners Bay dental clinic led by Dr Melody Healy. Providing personalised dental care to families across Newcastle and Lake Macquarie.",
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
