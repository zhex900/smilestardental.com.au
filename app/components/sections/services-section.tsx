"use client";
import { useRouter } from "next/navigation";
import { HoverEffect } from "../ui/card/card-hover-effect";
import { ButtonGradient } from "../ui/button-gradient";
import { servicesData } from "../services-wheel";
import { motion } from "framer-motion";

export function ServicesSection() {
  const router = useRouter();

  return (
    <section
      id="services"
      className="section-px section-py bg-white scroll-mt-30 min-h-screen"
    >
      <div className="max-w-6xl mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // className="text-4xl font-bold text-slate-800 mb-6"
        >
          <div className="text-center heading-mb">
            <h2 className="text-heading heading-mb">
              <span className="brand-yellow">Newcastle's</span> Top Rated Dental
              Services
            </h2>
            <p className="text-normal max-w-2xl mx-auto">
              Professional dental services designed to keep your smile healthy
              and beautiful with state-of-the-art technology and expert care
            </p>
          </div>
        </motion.h2>

        <div className="mx-auto">
          <HoverEffect items={servicesData} />
        </div>
      </div>
    </section>
  );
}
