"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
  xOffset?: number;
}

interface CarouselProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  showButton?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
  debug?: boolean;
  onXPositionChange?: (xPosition: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoplay = true,
  autoplayInterval = 5000,
  className,
  debug = false,
  onXPositionChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, nextSlide]);

  // Calculate x position
  useEffect(() => {
    const updateXPosition = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const slideOffset = slides[currentIndex].xOffset || 0;

        // Calculate relative position (pixels) within the carousel container
        const relativeX = rect.width / 2 + slideOffset;
        const newXPosition = Math.round(relativeX);
        setXPosition(newXPosition);

        // Notify parent component of relative x position change
        if (onXPositionChange) {
          onXPositionChange(newXPosition);
        }
      }
    };

    updateXPosition();
    window.addEventListener("resize", updateXPosition);
    return () => window.removeEventListener("resize", updateXPosition);
  }, [currentIndex, slides, onXPositionChange]);

  return (
    <div
      ref={carouselRef}
      className={cn("relative w-full h-full rounded-xl", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              priority={currentIndex === 0}
              src={slides[currentIndex].src}
              alt={slides[currentIndex].title}
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`w-full h-full object-contain scale-130 transform-gpu ${
                debug ? "border-2 border-red-500" : ""
              }`}
            />

            {debug && (
              <>
                {/* Vertical center line overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                  <div
                    className="relative h-full"
                    style={{
                      transform: `translateX(${slides[currentIndex].xOffset}px)`,
                    }}
                  >
                    {/* Vertical line */}
                    <div className="w-0.5 h-full bg-red-600 "></div>
                    {/* X position indicator */}
                    <div className="absolute top-[200px] left-2 text-center text-black text-lg font-bold bg-white px-2 py-1 rounded">
                      x: {xPosition}px
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
