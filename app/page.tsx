import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { BeforeAfterSection } from "./components/before-after-section";
import { BlogSection } from "./components/blog-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
