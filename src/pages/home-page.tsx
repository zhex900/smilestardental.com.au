import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { BeforeAfterSection } from "../components/before-after-section";
import { TreatmentsSection } from "../components/treatments-section";
import { TestimonialsSection } from "../components/testimonials-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <TreatmentsSection />
    </>
  );
}
