"use client";

import ImplantsIcon from "../icons/implants.svg";
import OrthodonticsIcon from "../icons/orthodontics.svg";
import MouthguardsIcon from "../icons/mouthguards.svg";
import VeneersIcon from "../icons/veneers.svg";
import { ServiceCard } from "../ui/card/service-card";
import { InfiniteMovingCards } from "../ui/card/infinite-moving-cards";

/**
 * The home-page service marquee lives in a client island so the SVG icon
 * components (which can't cross the server→client boundary as props) can be
 * imported alongside the cards that consume them.
 */
const servicesData = [
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

export function ServicesMarquee() {
  return (
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
  );
}
