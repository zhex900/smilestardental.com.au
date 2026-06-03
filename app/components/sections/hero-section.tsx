import { ArrowRight } from "lucide-react";
import { ButtonGradient } from "../ui/button-gradient";
import { GoogleReview } from "../ui/google-review";
import HeroCarousel from "../hero-carousel";
import { bookingUrl } from "@/constants";

export function HeroSection() {
  //
  return (
    <section
      id="hero"
      className="relative flex justify-center section-px bg-primary min-h-[calc(100vh-var(--header-height))]"
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        style={{ alignItems: "end" }}
      >
        {/* LEFT COLUMN (Text + Reviews) */}
        <div className="flex flex-col max-w-lg justify-between h-full order-2 md:order-1">
          <div className="flex-1 flex items-center p-6 md:p-8">
            <div>
              <div className="text-center md:text-left">
                <h1 className="text-heading heading-mb animate-in fade-in slide-in-from-bottom-3 duration-700">
                  Your Smile is Our{" "}
                  <span className="brand-yellow animate-pulse">Star</span>{" "}
                  Priority
                </h1>
                <p className="text-justify text-normal heading-mb animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:150ms]">
                  Experience exceptional dental care, proudly serving the
                  Newcastle and Lake Macquarie community where every patient
                  receives star treatment for a brighter, healthier smile.
                </p>
              </div>
              <div className="flex justify-between items-center pt-2 md:pt-6 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms]">
                <ButtonGradient asChild>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an appointment online (opens in a new tab)"
                  >
                    <span className="hidden md:block">Make a booking</span>
                    <span className="block md:hidden">Book now</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </ButtonGradient>
                <GoogleReview variant="compact" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Carousel) */}
        <div className="relative order-2 flex w-full items-center justify-center self-auto [@media(min-height:1000px)]:self-center md:order-1">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
