"use client";

import { StarIcon } from "@radix-ui/react-icons";

import { useEffect, useState, useRef } from "react";

interface BlinkingStarProps {
  className?: string;
  delay?: number;
}

export function BlinkingStar({ className = "", delay = 0 }: BlinkingStarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState("text-slate-400");
  const [size, setSize] = useState(Math.floor(Math.random() * 40) + 5);
  const sizeDirectionRef = useRef(1); // 1 for up, -1 for down
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [glowScale, setGlowScale] = useState(1);

  const colors = [
    "text-slate-400",
    "text-blue-400",
    "text-yellow-400",
    "text-orange-400",
    "text-pink-400",
    "text-purple-400",
    "text-green-400",
    "text-red-400",
  ];

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    const colorInterval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);

    const sizeInterval = setInterval(() => {
      setSize((prev) => {
        if (prev >= 40) {
          sizeDirectionRef.current = -1; // Start going down
          return prev - 1;
        } else if (prev <= 5) {
          sizeDirectionRef.current = 1; // Start going up
          return prev + 1;
        } else {
          return prev + sizeDirectionRef.current; // Continue in current direction
        }
      });
    }, 200);

    const moveInterval = setInterval(() => {
      setIsMoving(true);
      setPosition({
        x: -(Math.random() - 1.5) * 100, // Random movement between -50px and 50px
        y: (Math.random() - 0.5) * 100,
      });
    }, 1000); // Random interval between 3-8 seconds

    const glowInterval = setInterval(() => {
      // Create a pulsing glow effect
      setGlowScale(1.3);
      setTimeout(() => setGlowScale(1), 800);
    }, 1000); // Random interval between 1-2.5 seconds

    // Initial delay
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(colorInterval);
      clearInterval(sizeInterval);
      clearInterval(moveInterval);
      clearInterval(glowInterval);
      clearTimeout(initialDelay);
    };
  }, [delay]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0.2,
        filter: isVisible
          ? `brightness(${0.8 + Math.random() * 0.4})`
          : "brightness(0.3)",
        transform: isMoving
          ? `translate(${position.x}px, ${position.y}px) scale(${glowScale})`
          : `translate(0px, 0px) scale(${glowScale})`,
        transition: isMoving
          ? "transform 2s ease-in-out, opacity 300ms ease-in-out, filter 300ms ease-in-out"
          : "transform 800ms ease-in-out, opacity 300ms ease-in-out, filter 300ms ease-in-out",
      }}
    >
      <StarIcon
        className={`${color}  drop-shadow-lg`}
        width={size}
        height={size}
      />
    </div>
  );
}
