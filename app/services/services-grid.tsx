"use client";

import { useState } from "react";
import { ServiceDetailCard } from "@/components/ui/card";
import { services } from "./services";

type ServiceCategory = { id: string; name: string };

type ServicesGridProps = {
  categories: ServiceCategory[];
};

/**
 * Client island that owns the category filter state for the Services page.
 *
 * The `services` data lives here (not on the page) because each service
 * carries a Lucide icon *component* in `service.icon`, and React component
 * functions can't be serialised across the server→client boundary. Importing
 * the data inside the client module keeps the page itself a server component
 * (so categories, hero, and surrounding copy still render in initial HTML)
 * while the icons render correctly.
 */
export function ServicesGrid({ categories }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <div
        className="flex overflow-x-auto py-4 no-scrollbar space-x-4 mb-8"
        role="tablist"
        aria-label="Filter services by category"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === category.id
                ? "bg-gold-400 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filteredServices.length === 0 ? (
        <p className="py-12 text-center text-gray-600">
          No services listed in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceDetailCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      )}
    </>
  );
}
