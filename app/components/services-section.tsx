"use client";
import { useRouter } from "next/navigation";
import { HoverEffect } from "./ui/card-hover-effect";
import { ButtonGradient } from "./ui/button-gradient";
import { servicesData } from "./services-wheel";
import { motion } from "framer-motion";

export function ServicesSection() {
  const router = useRouter();

  return (
    <section id="services" className="px-6 py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800 mb-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-800 mb-4">
              <span className="text-yellow-600">Newcastle's</span> Top Rated
              Dental Services
            </h2>
            <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto">
              Professional dental services designed to keep your smile healthy
              and beautiful with state-of-the-art technology and expert care
            </p>
          </div>
        </motion.h2>

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
