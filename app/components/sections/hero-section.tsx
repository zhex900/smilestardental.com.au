"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedText from "../ui/animated-text";
import { ButtonGradient } from "../ui/button-gradient";
import { GoogleReview } from "../ui/google-review";
import HeroCarousel from "../hero-carousel";

export function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className={`relative flex justify-center section-px bg-primary min-h-[calc(100vh-var(--header-height))]`}
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
                <h1 className="text-heading heading-mb">
                  Your Smile is Our
                  <AnimatedText
                    text={`Star Priority`}
                    className="text-inherit"
                    animationType="letters"
                    staggerDelay={0.08}
                    duration={0.6}
                    initialY={10}
                    initialOpacity={0}
                    animateY={0}
                    animateOpacity={1}
                    multiline={true}
                    wordStyles={{
                      Star: "brand-yellow animate-pulse",
                      Priority: "",
                    }}
                  />
                </h1>
                <p className="text-justify text-normal heading-mb">
                  Experience exceptional dental care, proudly serving the{" "}
                  Newcastle and Lake Macquarie community where every patient
                  receives star treatment for a brighter, healthier smile.
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
        </div>

        {/* RIGHT COLUMN (Carousel with reserved space, appears below text on mobile) */}
        <div className="relative order-2 flex w-full items-center justify-center self-auto [@media(min-height:1000px)]:self-center md:order-1">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
