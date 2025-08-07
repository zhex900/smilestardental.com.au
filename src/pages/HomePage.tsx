import { HeroSection } from "../components/HeroSection";
import { MembershipSection } from "../components/MembershipSection";
import { ServicesSection } from "../components/ServicesSection";
import { BeforeAfterSection } from "../components/BeforeAfterSection";
import { CanvasRevealSection } from "../components/CanvasRevealSection";
import { TreatmentsSection } from "../components/TreatmentsSection";

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
