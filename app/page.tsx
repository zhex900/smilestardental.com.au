import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { BeforeAfterSection } from "./components/before-after-section";
import { BlogSection } from "./components/blog-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ScrollNavigation } from "./components/ui/scroll-navigation";

export default function HomePage() {
  const sections = ["hero", "services", "before-after", "testimonials", "blog"];

  return (
    <>
      <ScrollNavigation sections={sections} />

      <HeroSection />

      <ServicesSection />

      <BeforeAfterSection />

      <TestimonialsSection />

      <BlogSection />
    </>
  );
}
