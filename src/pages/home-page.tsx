import { HeroSection } from "../components/hero-section";
import { MembershipSection } from "../components/membership-section";
import { ServicesSection } from "../components/services-section";
import { BeforeAfterSection } from "../components/before-after-section";
import { CanvasRevealSection } from "../components/canvas-reveal-section";
import { TreatmentsSection } from "../components/treatments-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MembershipSection />
      <ServicesSection />
      <BeforeAfterSection />
      <CanvasRevealSection />
      <TreatmentsSection />
    </>
  );
}
