"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServicesWheel } from "../services-wheel";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
}

interface CarouselProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  showButton?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoplay = true,
  autoplayInterval = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, nextSlide]);

  return (
    <div
      className={cn("relative w-full h-full rounded-2xl", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].title}
            className="w-full h-full object-contain scale-130 transform-gpu"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
