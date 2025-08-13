"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";

interface IconWheelProps {
  icons: {
    component: React.ComponentType<{
      width?: number;
      height?: number;
      className?: string;
    }>;
    tooltip: string;
  }[];
  className?: string;
  radius?: number;
  iconSize?: number;
}

export const IconWheel: React.FC<IconWheelProps> = ({
  icons,
  className,
  radius = 120,
  iconSize = 32,
}) => {
  const totalIcons = icons.length;
  const angleStep = Math.PI / (totalIcons - 1); // Semi-circle spread

  // Convert icons to AnimatedTooltip format
  const tooltipItems = icons.map((icon, index) => ({
    id: index,
    name: `icon-${index}`,
    designation: icon.tooltip,
    image: `/api/icon-placeholder/${index}`, // Placeholder for AnimatedTooltip requirement
  }));

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative"
        style={{
          width: radius * 2,
          height: radius,
        }}
      >
        <AnimatedTooltip items={tooltipItems}>
          {icons.map((icon, index) => {
            const angle = index * angleStep + Math.PI; // Start from left (90 degrees clockwise)
            const x = radius + radius * Math.cos(angle);
            const y = radius + radius * Math.sin(angle);
            const IconComponent = icon.component;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:scale-125 hover:z-10"
                style={{
                  left: x,
                  top: y,
                }}
              >
                <IconComponent
                  width={iconSize}
                  height={iconSize}
                  className="transition-all duration-300 ease-in-out hover:drop-shadow-lg cursor-pointer"
                />
              </div>
            );
          })}
        </AnimatedTooltip>
      </div>
    </div>
  );
};

export default IconWheel;
