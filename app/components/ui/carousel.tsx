"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  showButton = true,
  showDots = true,
  showProgress = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, nextSlide]);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-visible rounded-2xl",
        className
      )}
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
            className="w-full h-full object-contain scale-150 transform-gpu"
          />

          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" /> */}

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-start p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white max-w-lg"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[currentIndex].title}
              </h2>
              {slides[currentIndex].description && (
                <p className="text-lg md:text-xl mb-6 text-white/90">
                  {slides[currentIndex].description}
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {showButton && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === currentIndex
                  ? "bg-amber-300 scale-110"
                  : "bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-amber-200"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoplayInterval / 1000,
              ease: "linear",
              repeat: Infinity,
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
