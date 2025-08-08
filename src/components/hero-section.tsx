import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroCarousel } from "./hero-carousel";
import { BlinkingStar } from "./blinking-star";
import AnimatedText from "./ui/animated-text";
import { BackgroundGradient } from "./ui/background-gradient";
import { ReviewStack } from "./ui/review-stack";
import { Avatar, AvatarImage } from "./ui/avatar";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-300 opacity-50" />

      {/* Decorative blinking stars */}
      <BlinkingStar className="absolute top-20 left-20" delay={11110} />

      <div className="relative max-w-6xl mx-auto flex  items-center gap-12">
        <div className="flex-1 max-w-lg">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              DENTAL CARE{" "}
            </span>
            <Avatar className="size-10 animate-bounce">
              <AvatarImage src="/images/logo.png" alt="Dental Care" />
            </Avatar>
            <span className="relative">
              <span className="relative z-10">
                NEWCASTLE{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                  |
                </span>{" "}
                WARNERS BAY
              </span>
              <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-teal-400"></span>
            </span>
          </div>

          <BlinkingStar className="absolute top-30 left-70" delay={11110} />
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            <AnimatedText
              text={`Your Smile is Our Star
Priority`}
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
                Star: "text-blue-500 text-6xl ",
                Priority: "text-gray-500 font-bold animate-pulse",
              }}
            />
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Experience exceptional dental care with Smile Star Dental.
            <br />
            Where every patient receives star treatment for a brighter smile.
          </p>
          <div className="flex">
            <BackgroundGradient className="rounded-[22px]">
              <Button onClick={() => navigate("/contact")}>
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </BackgroundGradient>
          </div>
          <div className="flex flex-wrap items-center p-2 mt-15">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 pr-10">
              <ReviewStack />
            </div>
            <span className="hidden md:block mb-[41px] text-sm whitespace-nowrap">
              More then 1000+ happy patients
            </span>
          </div>
        </div>

        <div className="flex-1 relative">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
