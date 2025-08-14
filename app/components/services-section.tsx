"use client";
import { useRouter } from "next/navigation";
import { HoverEffect } from "./ui/card-hover-effect";
import CrownsIcon from "./icons/crowns.svg";
import FillingsIcon from "./icons/fillings.svg";
import { ButtonGradient } from "./ui/button-gradient";
import { servicesData } from "./services-wheel";

export function ServicesSection() {
  const router = useRouter();

  return (
    <section id="services" className="px-6 py-16 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Dental Services in{" "}
            <span className="text-yellow-600">Newcastle</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto">
            Professional dental services designed to keep your smile healthy and
            beautiful with state-of-the-art technology and expert care
          </p>
        </div>

        <div className="mx-auto">
          <HoverEffect items={servicesData.slice(0, 6)} />
        </div>

        <div className="flex justify-center mt-6">
          <ButtonGradient onClick={() => router.push("/services")}>
            <span className=""> View All Services</span>
          </ButtonGradient>
        </div>
      </div>
    </section>
  );
}
