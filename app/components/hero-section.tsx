"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedText from "./ui/animated-text";
import { ReviewStack } from "./review-stack";
import { ButtonGradient } from "./ui/button-gradient";
// import Carousel from "./ui/carousel";
import { useEffect, useState } from "react";
// import { ServicesWheel } from "./services-wheel";
import { GoogleReview } from "./ui/google-review";
import { Highlighter } from "./ui/highlighter";
import { backgroundColor } from "@/constants";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./ui/carousel"), { ssr: false });
const ServicesWheel = dynamic(() => import("./services-wheel"), { ssr: false });

const showCarousel = true;
// Carousel slides
const heroCarouselSlides = [
  {
    src: "/images/g-1.png",
    xOffset: 16,
    title: "",
    button: ".",
    description: "",
  },
  {
    src: "/images/boy-2.png",
    xOffset: -2,
    title: "",
    button: ".",
    description: "",
  },
];

const heroCarouselConfig = {
  autoplay: true,
  autoplayInterval: 3000,
};

export function HeroSection() {
  const router = useRouter();
  const [carouselXPosition, setCarouselXPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [renderAfterLoad, setRenderAfterLoad] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Defer rendering of some heavy UI until after page load/idle
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.readyState === "complete") {
      setRenderAfterLoad(true);
      return;
    }

    const onLoad = () => setRenderAfterLoad(true);
    window.addEventListener("load", onLoad);

    // Also schedule via requestIdleCallback as a fallback to not block TTI
    const idleId = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(() => setRenderAfterLoad(true), {
          timeout: 2000,
        })
      : setTimeout(() => setRenderAfterLoad(true), 2000);

    return () => {
      window.removeEventListener("load", onLoad);
      if ((window as any).cancelIdleCallback && idleId) {
        try {
          (window as any).cancelIdleCallback(idleId);
        } catch {}
      }
      if (typeof idleId === "number") clearTimeout(idleId);
    };
  }, []);

  // const HEADER_HEIGHT = 92;

  return (
    <section
      id="hero"
      className={`relative flex justify-center text-gray-800 px-2 md:px-6 ${backgroundColor} min-h-[calc(100vh-92px)]`}
    >
      <div
        className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-4"
        style={{ alignItems: "end" }}
      >
        {/* LEFT COLUMN (Text + Reviews) */}
        <div className="flex flex-col max-w-lg justify-between h-full order-2 md:order-1">
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
                  <Highlighter action="underline" color="#FF9800">
                    Newcastle
                  </Highlighter>{" "}
                  community where every patient receives star treatment for a
                  brighter,{" "}
                  <Highlighter action="highlight" color="#87CEFA">
                    healthier
                  </Highlighter>{" "}
                  smile.
                </p>
              </div>
              <div className="flex justify-between items-center pt-2 md:pt-6">
                <ButtonGradient onClick={() => router.push("/contact")}>
                  <span className="hidden md:block"> Make a booking</span>
                  <span className="block md:hidden">Book now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonGradient>
                <GoogleReview variant="compact" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-wrap items-center pl-7 justify-center md:justify-start">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 pr-10">
              <ReviewStack />
            </div>
            <span className="hidden text-black md:block mb-[41px] whitespace-nowrap">
              More than 1000+ happy patients
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN (Carousel, appears below text on mobile) */}
        {showCarousel && (
          <div className="relative flex mt-10 md:-mt-0 items-end justify-center md:justify-end order-2 md:order-1">
            {renderAfterLoad && carouselXPosition && (
              <ServicesWheel
                radius={isMobile ? 140 : 230}
                visibleIcons={isMobile ? 7 : undefined}
                className="absolute z-20"
                style={{
                  left: `${carouselXPosition}px`,
                  bottom: isMobile
                    ? "calc(100% - 100px)"
                    : "calc(100% - 170px)",
                  transform: "translateX(-50%)",
                }}
              />
            )}
            <Carousel
              slides={heroCarouselSlides}
              {...heroCarouselConfig}
              onXPositionChange={setCarouselXPosition}
              debug={false}
            />
          </div>
        )}
      </div>
    </section>
  );
}
