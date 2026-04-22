import Carousel from "./ui/carousel";

const heroCarouselSlides = [
  {
    src: "/images/g-1.webp",
    xOffset: 16,
    title: "Smile Star Dental — patient smiling in Warners Bay clinic",
    button: ".",
    description: "",
  },
  {
    src: "/images/boy-2.webp",
    xOffset: -2,
    title: "Young patient receiving gentle dental care at Smile Star Dental",
    button: ".",
    description: "",
  },
];

const heroCarouselConfig = {
  autoplay: true,
  autoplayInterval: 3000,
};

const HeroCarousel = () => {
  return (
    <div className="relative mx-auto min-h-[300px] w-full max-w-[min(100%,520px)] md:min-h-[min(52vh,540px)] md:max-w-none">
      <div className="absolute inset-0 md:inset-x-0 md:bottom-0 md:top-auto">
        <Carousel
          slides={heroCarouselSlides}
          {...heroCarouselConfig}
          debug={false}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
