"use client";
import ImplantsIcon from "../icons/implants.svg";
import OrthodonticsIcon from "../icons/orthodontics.svg";
import MouthguardsIcon from "../icons/mouthguards.svg";
import VeneersIcon from "../icons/veneers.svg";
import { ServiceCard } from "../ui/card/service-card";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/card/infinite-moving-cards";

export const servicesData = [
  {
    name: "Implants",
    tooltip: "Implants",
    icon: ImplantsIcon,
    image: "/images/implants.jpg",
  },
  {
    name: "Orthodontics",
    tooltip: "Orthodontics",
    icon: OrthodonticsIcon,
    image: "/images/braces.jpg",
  },
  {
    name: "Aligners",
    tooltip: "Aligners",
    icon: MouthguardsIcon,
    image: "/images/aligners.jpg",
  },
  {
    name: "Veneers",
    tooltip: "Veneers",
    icon: VeneersIcon,
    image: "/images/veneers.jpg",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-py bg-white scroll-mt-30 min-h-screen"
    >
      <div className="section-px max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center heading-mb">
            <h2 className="text-heading heading-mb">
              <span className="brand-yellow">Newcastle's</span> Top Rated Dental
              Services
            </h2>
            <p className="text-normal max-w-2xl mx-auto">
              Professional dental services designed to keep your smile healthy
              and beautiful with state-of-the-art technology and expert care
            </p>
          </div>
        </motion.h2>
      </div>

      <InfiniteMovingCards
        leftFadeWidthPercent={1}
        rightFadeWidthPercent={1}
        mdLeftFadeWidthPercent={10}
        mdRightFadeWidthPercent={10}
        speed="normal"
        className="w-full"
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </InfiniteMovingCards>
    </section>
  );
}
