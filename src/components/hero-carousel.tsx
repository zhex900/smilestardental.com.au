"use client";
import Carousel from "@/components/ui/carousel";
import { GlowingEffect } from "./ui/glowing-effect";
import { BackgroundGradient } from "./ui/background-gradient";

export function HeroCarousel() {
  const slideData = [
    {
      title: "",
      button: ".",
      description: "",
      src: "/images/boy-1.png", // Dental chair transparent
    },
    {
      title: "",
      button: "",
      description: "",
      src: "/images/b.png", // Braces transparent
    },
    // {
    //   title: "Gentle Family Care",
    //   button: "Meet Our Team",
    //   description:
    //     "Comprehensive dental care for patients of all ages in a comfortable environment",
    //   src: "https://cdn-icons-png.flaticon.com/512/1995/1995576.png", // Family dental care transparent
    // },
    // {
    //   title: "Emergency Dental Care",
    //   button: "Call Now",
    //   description:
    //     "24/7 emergency services when you need immediate dental attention",
    //   src: "https://cdn-icons-png.flaticon.com/512/1995/1995577.png", // Emergency dental transparent
    // },
  ];

  return (
    <>
      <GlowingEffect
        className="rounded-[50px] rounded-tl-[260px]"
        spread={70}
        glow={true}
        disabled={false}
        proximity={164}
        inactiveZone={0.01}
        borderWidth={4}
      />
      <div className="relative overflow-hidden w-full h-[500px] md:h-[600px] rounded-[50px] rounded-tl-[260px] shadow-2xl">
        <Carousel
          showButton={false}
          slides={slideData}
          autoplay={true}
          autoplayInterval={6000}
        />
      </div>
    </>
  );
}
