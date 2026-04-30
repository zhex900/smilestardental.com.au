"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, type ComponentType } from "react";
import { CardTitle } from "./card";

export type ServiceCardItem = {
  name: string;
  tooltip?: string;
  description?: string;
  image: string;
  href?: string;
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
  const layoutKey = service.href ?? service.name;

  const surface = (
    <>
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="pointer-events-none absolute inset-0 block h-full w-full rounded-xl bg-neutral-200 dark:bg-gold-400/[0.8]"
            layoutId={`service-card-hover-${layoutKey}`}
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
          "group relative flex h-[300px] w-[300px] flex-col justify-center overflow-hidden rounded-xl",
          "border border-transparent text-white transition-colors",
          "group-hover:border-gold-100",
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-end gap-3 p-6 text-center">
          <CardTitle className="border-b-2 border-transparent text-lg text-white drop-shadow-sm group-hover:border-white group-hover:text-3xl">
            {service.name}
          </CardTitle>
        </div>
      </div>
    </>
  );

  if (service.href) {
    return (
      <Link
        href={service.href}
        className={cn(
          "relative block cursor-pointer rounded-[calc(0.75rem+0.25rem)] p-2 outline-none transition-opacity group focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950",
          className,
        )}
        aria-label={`${service.name}. Learn more.`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {surface}
      </Link>
    );
  }

  return (
    <div
      className={cn("relative block p-2", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {surface}
    </div>
  );
}
