"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

interface TestimonialCardProps {
  testimonial: {
    id: number | string;
    name: string;
    avatar: string;
    rating: number;
    text: string;
    timeAgo: string;
  };
  className?: string;
  index?: number;
}

export function TestimonialCard({
  testimonial,
  className,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "rounded-3xl border-l-4 border-yellow-600 group",
        className,
      )}
    >
      <div className="relative w-full h-full">
        <Card
          className={cn(
            "transition-[background] duration-300",
            "group-hover:!bg-gradient-to-b group-hover:!from-beige-300 group-hover:!to-gold-600",
            "group-hover:text-white",
            "[&_h4]:group-hover:text-white [&_p]:group-hover:text-white/95 [&_span]:group-hover:text-white/70",
          )}
        >
          <div className="flex items-center mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <div className="flex text-yellow-400 text-sm mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {testimonial.timeAgo}
              </span>
            </div>
            <svg
              className="w-5 h-5 shrink-0 text-blue-500 transition-colors group-hover:text-gold-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <p className="text-normal">"{testimonial.text}"</p>
        </Card>
      </div>
    </motion.div>
  );
}
