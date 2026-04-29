import { ServicesMarquee } from "./services-marquee";
import { Reveal } from "../ui/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="section-py bg-white scroll-mt-28">
      <div className="section-px max-w-6xl mx-auto">
        <Reveal className="text-center heading-mb">
          <h2 className="text-heading heading-mb">
            <span className="brand-yellow">
              Newcastle &amp; Lake Macquarie
            </span>{" "}
            Dental Services
          </h2>
          <p className="text-normal max-w-2xl mx-auto">
            Professional dental services designed to keep your smile healthy,
            using current technology and an experienced clinical team
          </p>
        </Reveal>
      </div>

      <ServicesMarquee />
    </section>
  );
}
