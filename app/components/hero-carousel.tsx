import Carousel from "./ui/carousel";
import ServicesWheel from "./services-wheel";
import { useEffect, useState } from "react";

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

const HeroCarousel = () => {
  const [carouselXPosition, setCarouselXPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showWheel, setShowWheel] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowWheel(true);
    }, 500);
  }, []);

  return (
    <>
      {showWheel && carouselXPosition && (
        <ServicesWheel
          radius={isMobile ? 140 : 230}
          visibleIcons={isMobile ? 7 : undefined}
          className="absolute z-20 -top-10 md:bottom-auto"
          style={{
            left: `${carouselXPosition}px`,
            transform: "translateX(-50%)",
            transition: "left 0.3s ease-out 0.9s",
          }}
        />
      )}
      {
        <div className="absolute inset-0 md:inset-x-0 md:bottom-0 md:top-auto">
          <Carousel
            slides={heroCarouselSlides}
            {...heroCarouselConfig}
            onXPositionChange={setCarouselXPosition}
            debug={false}
          />
        </div>
      }
    </>
  );
};

export default HeroCarousel;
