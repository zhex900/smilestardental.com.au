import type { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  BeforeAfterSection,
  TestimonialsSection,
} from "./components/sections";
import { BlogSection } from "./components/sections/blog-section";
import { ScrollNavigation } from "./components/ui/scroll-navigation";
import { JsonLd } from "./components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "./lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Smile Star Dental | Warners Bay & Newcastle Family Dentists",
  description:
    "Welcome to Smile Star Dental (formerly Bay Arcade Dental) in Warners Bay. Gentle family, cosmetic and restorative dentistry — implants, Invisalign, whitening, crowns, pediatric care and more.",
  path: "/",
  keywords: [
    "Smile Star Dental",
    "Bay Arcade Dental",
    "dentist Warners Bay",
    "dentist Newcastle",
    "family dentist Lake Macquarie",
    "cosmetic dentist Newcastle",
    "Invisalign Warners Bay",
    "dental implants Newcastle",
    "teeth whitening Warners Bay",
    "pediatric dentist Warners Bay",
    "emergency dentist Warners Bay",
  ],
});

export default async function HomePage() {
  const sections = ["hero", "testimonials", "services", "before-after", "blog"];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <ScrollNavigation sections={sections} />

      <HeroSection />

      <TestimonialsSection />

      <ServicesSection />

      <BeforeAfterSection />

      <BlogSection />
    </>
  );
}
