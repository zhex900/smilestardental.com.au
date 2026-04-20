"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Star, Users } from "lucide-react";

export const CardCarousel = ({
  items,
  className,
  autoplay = true,
  autoplayInterval = 2000,
  pauseOnHover = true,
  showArrows = true,
  showIndicators = true,
  visibleCount = 3,
}: {
  items: {
    title: string;
    subtitle?: string;
    description: string;
    features?: string[];
    cta?: string;
    price?: string;
    rating?: number;
    patients?: string;
    icon?: React.ReactNode;
    className?: string;
    iconBg?: string;
  }[];
  className?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  visibleCount?: number;
}) => {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const directionRef = useRef<1 | -1>(1); // 1: right, -1: left

  const maxIndex = Math.max(0, items.length - visibleCount);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));

  useEffect(() => {
    if (!autoplay || items.length === 0 || maxIndex === 0) return;
    const id = setInterval(
      () => {
        if (pauseOnHover && isHovered) return;
        setCurrent((prev) => {
          let next = prev + directionRef.current;
          if (next > maxIndex) {
            directionRef.current = -1;
            next = prev - 1;
          } else if (next < 0) {
            directionRef.current = 1;
            next = prev + 1;
          }
          return next;
        });
      },
      Math.max(1000, autoplayInterval),
    );
    return () => clearInterval(id);
  }, [
    autoplay,
    autoplayInterval,
    pauseOnHover,
    isHovered,
    items.length,
    maxIndex,
  ]);

  return (
    <div
      className={cn("relative w-full py-10 overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="shrink-0 px-2"
            style={{ width: `${100 / visibleCount}%` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative group block p-1 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] block rounded-xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className={item?.className}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />

                {/* Icon Container */}
                <div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:animate-spin",
                    item.iconBg || "bg-white/20 backdrop-blur-sm",
                  )}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <CardTitle>{item.title}</CardTitle>
                {item.subtitle && (
                  <p className="text-sm text-white/80 mb-3 font-medium">
                    {item.subtitle}
                  </p>
                )}
                <CardDescription>{item.description}</CardDescription>

                {/* Features */}
                {item.features && (
                  <div className="mt-6 space-y-2">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-white/80 font-medium"
                      >
                        <div className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="mt-6 flex items-center justify-between text-sm text-white/90 font-semibold">
                  {item.rating && (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
                      {item.rating}
                    </div>
                  )}
                  {item.patients && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {item.patients}
                    </div>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="mt-6 flex items-center justify-between">
                  {item.price && (
                    <span className="text-base font-bold text-white">
                      {item.price}
                    </span>
                  )}
                  {item.cta && (
                    <button className="text-sm bg-white/25 hover:bg-white/35 text-white px-4 py-2 rounded-full transition-colors duration-200 font-semibold">
                      {item.cta}
                    </button>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          </li>
        ))}
      </ul>

      {showArrows && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2">
          <button
            aria-label="Previous"
            className="w-10 h-10 flex items-center justify-center bg-neutral-200/80 dark:bg-neutral-800/80 rounded-full hover:scale-105 transition"
            onClick={goPrev}
          >
            <ChevronRight className="rotate-180 text-neutral-700 dark:text-neutral-200" />
          </button>
          <button
            aria-label="Next"
            className="w-10 h-10 flex items-center justify-center bg-neutral-200/80 dark:bg-neutral-800/80 rounded-full hover:scale-105 transition"
            onClick={goNext}
          >
            <ChevronRight className="text-neutral-700 dark:text-neutral-200" />
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === idx
                  ? "bg-slate-800 dark:bg-slate-200 w-6"
                  : "bg-slate-300 dark:bg-slate-700",
              )}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-6 overflow-hidden border border-transparent relative z-20 text-center shadow-lg hover:shadow-xl hover:shadow-black/20 group-hover:scale-105 group-hover:-rotate-1 group-hover:ring-2 group-hover:ring-white/30 transition-all duration-300",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-bold tracking-wide text-2xl mb-4 transition-colors duration-200 leading-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-white/95 tracking-wide leading-relaxed text-base transition-colors duration-200 font-medium",
        className,
      )}
    >
      {children}
    </p>
  );
};
