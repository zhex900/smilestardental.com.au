"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  description: string;
  features: string[];
};

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={service.image}
          alt={service.title}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          <service.icon className="text-blue-600 text-xl mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <Star className="w-3 h-3 text-blue-600 mr-2 fill-current" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
