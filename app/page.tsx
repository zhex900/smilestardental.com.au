import {
  HeroSection,
  ServicesSection,
  BeforeAfterSection,
  BlogSection,
  TestimonialsSection,
} from "./components/sections";
import { ScrollNavigation } from "./components/ui/scroll-navigation";

export default async function HomePage() {
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
