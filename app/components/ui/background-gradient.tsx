"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  boxClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  boxClassName?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#D6C7B0,transparent),radial-gradient(circle_farthest-side_at_100%_0,#C9A646,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#DCC67A,transparent),radial-gradient(circle_farthest-side_at_0_0,#F5F0E6,#1E1B18)]",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400%" : undefined,
        }}
        className={cn(
          boxClassName,
          "absolute inset-0 z-[1] will-change-transform",
          "bg-[radial-gradient(circle_at_0%_100%,#D6C7B0_0%,transparent_65%),radial-gradient(circle_at_100%_0%,#C9A646_0%,transparent_50%),radial-gradient(circle_at_100%_100%,#F5E7B8_0%,transparent_65%),radial-gradient(circle_at_0%_0%,#FDFBF8_0%,#1E1B18_90%)]",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
