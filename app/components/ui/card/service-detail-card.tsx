"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  description: string;
  features: string[];
};

type ServiceDetailCardProps = {
  service: Service;
  index?: number;
};

export function ServiceDetailCard({
  service,
  index = 0,
}: ServiceDetailCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group/card relative min-h-[440px] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <img
        src={service.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover/card:scale-110 group-hover/card:grayscale-0"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute  bottom-0 z-10 ">
        <div className="pointer-events-auto w-full rounded-xl border border-white/15 bg-black/25 px-4 pb-5 pt-5 shadow-lg backdrop-blur-lg backdrop-saturate-150 md:px-5 md:pb-6 md:pt-6">
          <div className="flex items-start gap-3">
            <Icon className="mt-0.5 h-7 w-7 shrink-0 text-gold-400" />
            <h3 className="text-xl font-semibold leading-snug text-white">
              {service.title}
            </h3>
          </div>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover/card:grid-rows-[1fr]">
            <div className="min-h-0 overflow-hidden">
              <div className="translate-y-2 opacity-0 transition duration-300 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-white/95"
                    >
                      <Star className="mr-2 h-3.5 w-3.5 shrink-0 fill-gold-400 text-gold-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
