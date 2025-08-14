"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedText from "./ui/animated-text";
import { ReviewStack } from "./review-stack";
import { ButtonGradient } from "./ui/button-gradient";
import Carousel from "./ui/carousel";
import { useEffect, useState } from "react";
import { ServicesWheel } from "./services-wheel";
import { GoogleReview } from "./ui/google-review";
// Common carousel configuration
const heroCarouselSlides = [
  {
    title: "",
    button: ".",
    description: "",
    src: "/images/g-1.png",
    xOffset: 16,
  },
  {
    title: "",
    button: ".",
    description: "",
    src: "/images/boy-2.png",
    xOffset: -2,
  },
  // {
  //   title: "",
  //   button: ".",
  //   description: "",
  //   src: "/images/2.png",
  // },
  // {
  //   title: "",
  //   button: ".",
  //   description: "",
  //   src: "/images/3.png",
  // },
];

const heroCarouselConfig = {
  autoplay: true,
  autoplayInterval: 6000,
};

export function HeroSection() {
  const router = useRouter();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [carouselXPosition, setCarouselXPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check initial size
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      id="hero"
      className="relative overflow-hidden text-gray-800 px-2 md:px-6"
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r to-sky-300 via-sky-400 from-blue-700 opacity-20" />

      <div className="max-w-6xl mx-auto flex items-end h-full justify-between">
        <div className="flex flex-col max-w-lg justify-between h-full">
          <div className="flex-1 flex items-center p-6 md:p-8">
            <div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 leading-tight">
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
                      Star: "text-yellow-600 animate-pulse",
                      Priority: "",
                    }}
                  />
                </h1>
                <p className="text-justify text-sm md:text-lg mb-4 md:mb-8 leading-relaxed">
                  Experience exceptional dental care, proudly serving the{" "}
                  <span className="border-b-2 border-cyan-500">Newcastle</span>{" "}
                  community where every patient receives star treatment for a
                  brighter, healthier smile.
                </p>
              </div>{" "}
              <div className="flex justify-between items-center pt-2 md:pt-6">
                <ButtonGradient onClick={() => router.push("/contact")}>
                  <span className="hidden md:block"> Make a booking</span>
                  <span className="block md:hidden">Book now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonGradient>

                <div>
                  <GoogleReview variant="compact" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel - shown after button */}
          <div className="relative block md:hidden w-full h-max items-end flex-col justify-end">
            <ServicesWheel
              radius={140}
              visibleIcons={7}
              className="absolute z-20"
              style={{
                left: `${carouselXPosition}px`,
                bottom: "calc(100% - 100px)", // Bottom of wheel 10px above top of carousel
                transform: "translateX(-50%)", // Center the wheel on the x position
              }}
            />
            <Carousel
              slides={heroCarouselSlides}
              {...heroCarouselConfig}
              onXPositionChange={isMobile ? setCarouselXPosition : undefined}
            />
          </div>

          <div className="hidden md:flex flex-wrap items-center pl-7 justify-center md:justify-start">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 pr-10">
              <ReviewStack />
            </div>
            <span className="hidden text-black md:block mb-[41px] whitespace-nowrap">
              More then 1000+ happy patients
            </span>
          </div>
        </div>
        {/* Desktop Carousel */}
        <div className="hidden relative h-max md:flex items-end flex-col justify-end">
          <ServicesWheel
            radius={230}
            className="absolute z-20"
            style={{
              left: `${carouselXPosition}px`,
              bottom: "calc(100% - 170px)", // Bottom of wheel 10px above top of carousel
              transform: "translateX(-50%)", // Center the wheel on the x position
            }}
          />
          <Carousel
            slides={heroCarouselSlides}
            {...heroCarouselConfig}
            onXPositionChange={!isMobile ? setCarouselXPosition : undefined}
            debug={false}
          />
        </div>
      </div>
    </section>
  );
}
