"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare: React.FC<CompareProps> = ({
  firstImage,
  secondImage,
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 0,
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}) => {
  const [sliderXPercent, setSliderXPercent] = useState<number>(
    initialSliderPercentage,
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      setSliderXPercent((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, autoplayDuration / 50);
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [autoplay, startAutoplay, stopAutoplay]);

  const handleStart = useCallback(() => {
    setIsDragging(true);
    stopAutoplay();
  }, [stopAutoplay]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    startAutoplay();
  }, [startAutoplay]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (isDragging) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      }
    },
    [isDragging],
  );

  const handleMouseDown = useCallback(() => {
    handleStart();
  }, [handleStart]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handleMove(e.clientX);
    },
    [handleMove],
  );

  // Global mouse handlers so drags that leave the element still resolve.
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseUp = () => handleEnd();
    const handleGlobalMouseMove = (e: MouseEvent) => handleMove(e.clientX);

    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging, handleEnd, handleMove]);

  const handleClick = useCallback(() => {
    stopAutoplay();
  }, [stopAutoplay]);

  return (
    <div
      ref={sliderRef}
      className={cn(
        "relative w-full cursor-pointer overflow-hidden select-none",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <AnimatePresence>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div className="w-3 h-3 rounded-full bg-indigo-500 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-30 border-2 border-white shadow-lg">
              <div className="w-full h-full rounded-full bg-indigo-500" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="overflow-hidden absolute top-0 left-0 right-0 w-full h-full select-none">
        <motion.div
          className="absolute top-0 left-0 right-0 w-full h-full select-none"
          style={{
            clipPath: `polygon(0 0, ${sliderXPercent}% 0, ${sliderXPercent}% 100%, 0 100%)`,
          }}
        >
          <Image
            alt="Before treatment"
            src={firstImage}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 90vw, 820px"
            quality={100}
            priority
            loading="eager"
            draggable={false}
            className={cn(
              "rounded-xl absolute inset-0 z-20 h-full w-full object-cover object-center",
              firstImageClassName,
            )}
          />
        </motion.div>
      </div>
      <div className="overflow-hidden absolute top-0 left-0 right-0 w-full h-full">
        <motion.div
          className="absolute top-0 left-0 right-0 w-full h-full"
          style={{
            clipPath: `polygon(${sliderXPercent}% 0, 100% 0, 100% 100%, ${sliderXPercent}% 100%)`,
          }}
        >
          <Image
            alt="After treatment"
            src={secondImage}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 90vw, 820px"
            quality={100}
            priority
            loading="eager"
            draggable={false}
            className={cn(
              "absolute rounded-xl inset-0 z-20 h-full w-full object-cover object-center",
              secondImageClassname,
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};
