"use client";

import { motion, type Variant, type Transition } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in *from*. `none` is fade-only. */
  direction?: RevealDirection;
  /** Pixel offset for the slide-in. Defaults to 20. */
  distance?: number;
  /** Animation delay in seconds. */
  delay?: number;
  /** Animation duration in seconds. Defaults to 0.6. */
  duration?: number;
  /** Re-trigger on every viewport entry. Defaults to once. */
  once?: boolean;
  /**
   * When true, the element renders in its final visible state on the server
   * and animates only on subsequent re-entries. Use for above-the-fold
   * content where flashing in from `opacity: 0` would harm LCP. Defaults to
   * `false`.
   */
  noInitial?: boolean;
  as?: "div" | "section" | "article" | "header" | "ul" | "ol" | "li" | "span";
};

function offsetFor(direction: RevealDirection, distance: number): Variant {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "none":
    default:
      return {};
  }
}

/**
 * Server-friendly reveal animation wrapper. Lets pages stay server components
 * while providing in-view fade/slide animations via a small client island.
 *
 * Important: the children render server-side either way. Crawlers that don't
 * execute JS still see the content in the HTML tree.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  distance = 20,
  delay = 0,
  duration = 0.6,
  once = true,
  noInitial = false,
  as = "div",
}: RevealProps) {
  const Component = motion[as] as typeof motion.div;
  const transition: Transition = { duration, delay, ease: "easeOut" };
  const visible: Variant = { opacity: 1, x: 0, y: 0 };
  const hidden: Variant = { opacity: 0, ...offsetFor(direction, distance) };

  if (noInitial) {
    return (
      <Component
        className={cn(className)}
        initial={false}
        whileInView={visible}
        viewport={{ once, margin: "-80px" }}
        transition={transition}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cn(className)}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </Component>
  );
}
