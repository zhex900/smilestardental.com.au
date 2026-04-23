import type { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  BeforeAfterSection,
  TestimonialsSection,
  FaqSection,
} from "./components/sections";
import { BlogSection } from "./components/sections/blog-section";
import { ScrollNavigation } from "./components/ui/scroll-navigation";
import { JsonLd } from "./components/json-ld";
import { breadcrumbJsonLd, buildMetadata, faqPageJsonLd } from "./lib/seo";
import { FAQS } from "./components/faq";

export const metadata: Metadata = buildMetadata({
  title:
    "Smile Star Dental | Newcastle, Lake Macquarie & Warners Bay — preventative, general & family dentistry",
  description:
    "We're in Warners Bay on Lake Macquarie (formerly Bay Arcade Dental). Family and general dentistry with digital technology — checkups, cosmetic care, implants, Invisalign, children's dentistry and more.",
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
    "children's dentist Warners Bay",
    "emergency dentist Warners Bay",
  ],
});

export default async function HomePage() {
  const sections = [
    "hero",
    "testimonials",
    "services",
    "before-after",
    "blog",
    "faq",
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <ScrollNavigation sections={sections} />

      <HeroSection />

      <TestimonialsSection />

      <ServicesSection />

      <BeforeAfterSection />

      <BlogSection />

      <FaqSection
        items={FAQS}
        intro="Answers to common questions about our practice, treatments, bookings and costs."
      />
    </>
  );
}
