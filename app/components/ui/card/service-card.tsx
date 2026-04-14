"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ComponentType } from "react";
import { CardTitle } from "./card";

export type ServiceCardItem = {
  name: string;
  tooltip?: string;
  description?: string;
  image: string;
  link?: string;
  icon: ComponentType<{
    width?: number;
    height?: number;
    className?: string;
  }>;
};

type ServiceCardProps = {
  service: ServiceCardItem;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = service.icon;
  const href = service.link ?? "#";

  return (
    <div
      className={cn("relative group block p-2", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gold-700/[0.8] block rounded-3xl"
            layoutId={`service-card-hover-${service.name}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "group relative flex h-[300px] w-[300px] flex-col justify-center overflow-hidden rounded-2xl",
          "border border-transparent text-white transition-colors",
          "group-hover:border-gold-100",
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 group-hover:bg-gradient-to-t from-gold-700/90  to-gold-100/25"
          aria-hidden
        />

        <a
          href={href}
          title={service.tooltip ?? service.name}
          className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-6 text-center"
        >
          <IconComponent className="h-10 w-10 text-white drop-shadow-md" />
          <CardTitle className="border-b-2 border-transparent group-hover:text-3xl text-lg text-white drop-shadow-sm group-hover:border-gold-400">
            {service.name}
          </CardTitle>
        </a>
      </div>
    </div>
  );
}
