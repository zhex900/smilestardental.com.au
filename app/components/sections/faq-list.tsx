"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/seo";

type FaqListProps = {
  items: FaqItem[];
  id: string;
};

/**
 * Controlled FAQ accordion. All question AND answer text is always present
 * in the rendered DOM (the closed panels are hidden via CSS height/opacity)
 * so AI crawlers and Google can extract every Q&A from the SSR HTML — even
 * the ones a visitor hasn't toggled open yet.
 */
export function FaqList({ items, id }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
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
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
