import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Card, CardTitle } from "./card";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    link?: string;
    icon: React.ComponentType<{
      width?: number;
      height?: number;
      className?: string;
    }>;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2",
          className
        )}
      >
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                    layoutId="hoverBackground"
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

              <Card className="group flex justify-center items-center">
                <a href={item?.link}>
                  <div className="flex items-center justify-center">
                    <IconComponent className="w-10 h-10" />
                  </div>

                  <CardTitle className="group-hover:border-b-2 text-lg justify-center group-hover:border-cyan-500">
                    {item.name}
                  </CardTitle>
                </a>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
