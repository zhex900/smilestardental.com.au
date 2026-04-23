"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Shared Unsplash asset for interior marketing heroes (Next remotePatterns already allow unsplash). */
export const PAGE_HERO_DEFAULT_IMAGE = "/images/eating-fruit.avif";

/** Default scrim: cools the photo slightly; keeps light hero text readable. */
export const PAGE_HERO_DEFAULT_OVERLAY = "bg-gray-900/30";

type PageHeroProps = {
  title: string;
  description?: React.ReactNode;
  /** Background photo */
  imageSrc?: string;
  imageAlt?: string;
  /** `left` matches blog-style copy; `center` for standard inner pages */
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  /** Extra section classes (defaults include text white → black on hover) */
  className?: string;
  /** Scrim over the image; defaults to {@link PAGE_HERO_DEFAULT_OVERLAY} */
  overlayClassName?: string;
};

export function PageHero({
  title,
  description,
  imageSrc = PAGE_HERO_DEFAULT_IMAGE,
  imageAlt = "",
  align = "left",
  titleClassName,
  descriptionClassName,
  children,
  className,
  overlayClassName,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "group relative flex h-[400px] items-center overflow-hidden bg-primary text-white transition-colors duration-500",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        aria-hidden={!imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          overlayClassName ?? PAGE_HERO_DEFAULT_OVERLAY,
        )}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div
          className={cn(
            isCenter && "text-center",
            !isCenter && "max-w-2xl",
            isCenter && "mx-auto max-w-2xl",
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "mb-4 text-4xl font-bold text-inherit md:text-5xl",
              titleClassName,
            )}
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-normal text-inherit",
                children ? "mb-6" : "mb-0",
                descriptionClassName,
              )}
            >
              {description}
            </motion.div>
          ) : null}
          {children ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={cn(isCenter && "flex justify-center")}
            >
              {children}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
