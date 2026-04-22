"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/seo";

type FaqSectionProps = {
  heading?: string;
  intro?: string;
  items: FaqItem[];
  id?: string;
  className?: string;
};

/**
 * Accessible FAQ accordion. Content is always present in the DOM (the answer
 * is just visually hidden when collapsed) so search and AI crawlers can read
 * the Q&A text even though users see a toggleable UI.
 */
export function FaqSection({
  heading = "Frequently Asked Questions",
  intro,
  items,
  id = "faq",
  className = "",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={id}
      className={`container mx-auto px-4 py-16 scroll-mt-28 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          {heading}
        </h2>
        {intro ? (
          <p className="mb-10 text-center text-gray-600">{intro}</p>
        ) : (
          <div className="mb-10" />
        )}

        <ul className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `${id}-panel-${i}`;
            const buttonId = `${id}-button-${i}`;
            return (
              <li
                key={i}
                className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 md:text-lg"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
