"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface IconsWheelProps {
  items: {
    name: string;
    designation: string;
    component: React.ComponentType<{
      width?: number;
      height?: number;
      className?: string;
    }>;
  }[];
  radius?: number;
  iconSize?: number;
  className?: string;
  scrollSpeed?: number; // Speed in milliseconds (lower = faster)
  visibleIcons?: number; // Number of icons visible on the wheel at once
}

export const IconsWheel: React.FC<IconsWheelProps> = ({
  items,
  radius = 150,
  iconSize = 45,
  className = "",
  scrollSpeed = 2500,
  visibleIcons = 10, // Default to 10 visible icons
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  // Calculate how many icons can fit in the semi-circle
  const totalIcons = items.length;
  const angleStep = Number((Math.PI / (visibleIcons - 1)).toFixed(6)); // Semi-circle spread based on visible icons

  // Continuous clockwise scrolling
  useEffect(() => {
    console.log("Setting up interval with speed:", scrollSpeed); // Debug log
    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollOffset((prev) => (prev + 1) % totalIcons);
      }
    }, scrollSpeed); // Use configurable speed

    return () => clearInterval(interval);
  }, [totalIcons, scrollSpeed, isPaused]); // Include isPaused to restart interval when pause state changes

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative"
        style={{
          width: radius * 2,
          height: radius,
        }}
      >
        {items.map((item, index) => {
          // Calculate the actual position with scroll offset
          const actualIndex = (index + scrollOffset) % totalIcons;

          // Use fixed decimal precision to prevent hydration mismatches
          const angle = Number((actualIndex * angleStep + Math.PI).toFixed(6)); // Start from left (90 degrees clockwise)
          const x = Number((radius + radius * Math.cos(angle)).toFixed(2));
          const y = Number((radius + radius * Math.sin(angle)).toFixed(2));
          const IconComponent = item.component;

          // Calculate visibility based on angle position with fixed precision
          // Show icons only in the visible semi-circle (π to 2π radians)
          // Hide icons when they move from end to start across the invisible part
          // Add a buffer zone to hide icons before they reach the edge
          const bufferZone = 0.2; // radians
          const minAngle = Number((Math.PI + bufferZone).toFixed(6));
          const maxAngle = Number((2 * Math.PI - bufferZone).toFixed(6));
          const isVisible = angle >= minAngle && angle <= maxAngle;

          // Debug: Log when icons are at the edges (with fixed precision)
          if (
            Math.abs(angle - minAngle) < 0.1 ||
            Math.abs(angle - maxAngle) < 0.1
          ) {
            console.log(
              `Icon ${item.name} at buffer edge: angle=${angle.toFixed(6)}, visible=${isVisible}`
            );
          }

          return (
            <div
              key={item.name}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in-out hover:scale-125 hover:z-10 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                left: x,
                top: y,
              }}
            >
              <div
                className="group relative"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsPaused(false);
                }}
                onMouseMove={handleMouseMove}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 1 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 10,
                        },
                      }}
                      exit={{ opacity: 0, y: 20, scale: 1 }}
                      style={{
                        translateX: translateX,
                        rotate: rotate,
                        whiteSpace: "nowrap",
                      }}
                      className="absolute -bottom-12  z-[9999] flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-gray-800 px-4 py-2 shadow-xl max-w-100 h-10"
                    >
                      <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                      <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                      <div className="text-white text-center text-sm md:text-md overflow-scroll text-ellipsis whitespace-nowrap w-full">
                        {item.designation}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <IconComponent
                  width={iconSize}
                  height={iconSize}
                  className="transition-all duration-300 ease-in-out cursor-pointer hover:scale-150"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsWheel;
