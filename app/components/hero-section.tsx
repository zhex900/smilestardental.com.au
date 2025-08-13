"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { BlinkingStar } from "./blinking-star";
import AnimatedText from "./ui/animated-text";
import { ReviewStack } from "./ui/review-stack";
import { ButtonGradient } from "./ui/button-gradient";
import Carousel from "./ui/carousel";
import { useEffect, useState } from "react";

// Common carousel configuration
const heroCarouselSlides = [
  {
    title: "",
    button: ".",
    description: "",
    src: "/images/g-1.png",
  },
];

const heroCarouselConfig = {
  showButton: false,
  autoplay: true,
  autoplayInterval: 6000,
  showDots: false,
  showProgress: false,
};

export function HeroSection() {
  const router = useRouter();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);

    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-gray-800 px-6"
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r to-sky-300 via-sky-400 from-blue-500 opacity-20" />

      <div className="relative max-w-6xl mx-auto flex items-center  h-full">
        {/* Decorative blinking stars */}
        <BlinkingStar className="absolute top-20 left-20" />

        <div className="flex flex-col max-w-lg justify-evenly h-full">
          <div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Your Smile is Our
                <AnimatedText
                  text={`Star Priority`}
                  className="font-bold"
                  animationType="letters"
                  staggerDelay={0.08}
                  duration={0.6}
                  initialY={10}
                  initialOpacity={0}
                  animateY={0}
                  animateOpacity={1}
                  multiline={true}
                  wordStyles={{
                    Star: "text-yellow-600  animate-pulse",
                    Priority: "",
                  }}
                />
              </h1>
              <p className="text-justify text-lg mb-8 leading-relaxed">
                Experience exceptional dental care, proudly serving the{" "}
                <span className="border-b-2 border-cyan-500">Newcastle</span>{" "}
                community where every patient receives star treatment for a
                brighter, healthier smile.
              </p>
            </div>{" "}
            <div className="flex justify-center md:justify-start pt-6">
              <ButtonGradient onClick={() => router.push("/contact")}>
                Make a booking
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonGradient>
            </div>
          </div>
          {/* Mobile Carousel - shown after button */}
          <div className="block md:hidden mt-8 w-full h-64">
            <Carousel
              className="h-full"
              slides={heroCarouselSlides}
              {...heroCarouselConfig}
            />
          </div>
          <div className="hidden md:flex flex-wrap items-center p-2 mt-6 justify-center md:justify-start">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 pr-10">
              <ReviewStack />
            </div>
            <span className="hidden text-black md:block mb-[41px] whitespace-nowrap">
              More then 1000+ happy patients
            </span>
          </div>
        </div>
        <div className="md:block hidden flex-1 relative h-full items-center">
          <Carousel
            className="pb-6"
            slides={heroCarouselSlides}
            {...heroCarouselConfig}
          />
        </div>
      </div>
    </section>
  );
}
