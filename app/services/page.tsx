"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Search,
  Heart,
  Zap,
  Award,
  Baby,
  Braces,
} from "lucide-react";
import { ServiceDetailCard } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/sections";

const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "preventive", name: "Preventive Care" },
  { id: "restorative", name: "Restorative Dentistry" },
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "pediatric", name: "Pediatric Dentistry" },
  { id: "orthodontics", name: "Orthodontics" },
  { id: "surgery", name: "Oral Surgery" },
];

const services = [
  {
    id: 1,
    title: "Dental Cleaning & Checkups",
    category: "preventive",
    icon: Shield,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/ac9674656b-2956843eb45f265c872f.png",
    description:
      "Regular cleanings and comprehensive checkups to maintain optimal oral health and catch issues early.",
    features: [
      "Professional cleaning",
      "Cavity detection",
      "Gum health assessment",
      "Oral cancer screening",
    ],
  },
  {
    id: 2,
    title: "Teeth Whitening",
    category: "cosmetic",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1611166819595-ac34987dfa57?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Professional teeth whitening treatments to brighten your smile and boost your confidence.",
    features: [
      "In-office treatment",
      "Take-home kits",
      "Long-lasting results",
      "Safe for enamel",
    ],
  },
  {
    id: 3,
    title: "Dental Implants",
    category: "restorative",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    features: [
      "Titanium posts",
      "Natural appearance",
      "Permanent solution",
      "Improved chewing",
    ],
  },
  {
    id: 4,
    title: "Invisalign & Orthodontics",
    category: "orthodontics",
    icon: Braces,
    image:
      "https://images.unsplash.com/photo-1609840113929-b130355987e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Modern orthodontic solutions including clear aligners and traditional braces for a perfect smile.",
    features: [
      "Clear aligners",
      "Traditional braces",
      "Digital planning",
      "Comfortable treatment",
    ],
  },
  {
    id: 5,
    title: "Crowns & Bridges",
    category: "restorative",
    icon: Award,
    image:
      "https://plus.unsplash.com/premium_photo-1663011739118-413a35a33c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Restore damaged or missing teeth with custom-made crowns and bridges for natural function.",
    features: [
      "Custom fabrication",
      "Natural appearance",
      "Durable materials",
      "Improved function",
    ],
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    category: "pediatric",
    icon: Baby,
    image:
      "https://plus.unsplash.com/premium_photo-1681997120629-4d260166640c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Specialized dental care for children in a fun, comfortable environment designed for young patients.",
    features: [
      "Child-friendly environment",
      "Gentle approach",
      "Education focus",
      "Preventive care",
    ],
  },
  {
    id: 7,
    title: "Root Canal Therapy",
    category: "restorative",
    icon: Search,
    image:
      "https://plus.unsplash.com/premium_photo-1722873143643-ea42854f97d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Advanced endodontic treatment to save severely damaged teeth and relieve pain.",
    features: [
      "Pain relief",
      "Tooth preservation",
      "Advanced technology",
      "Comfortable procedure",
    ],
  },
  {
    id: 8,
    title: "Emergency Dental Care",
    category: "preventive",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1635247187021-ad5ab658bc5e?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immediate dental care for urgent situations including pain, broken teeth, and injuries.",
    features: [
      "24/7 availability",
      "Quick response",
      "Pain management",
      "Temporary solutions",
    ],
  },
  {
    id: 9,
    title: "Gum Disease Treatment",
    category: "preventive",
    icon: Heart,
    image:
      "https://plus.unsplash.com/premium_photo-1664304894567-5329b85a2e6f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Comprehensive periodontal care to treat and prevent gum disease for optimal oral health.",
    features: [
      "Deep cleaning",
      "Gum surgery",
      "Maintenance plans",
      "Health education",
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gold-50 h-[300px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-900 text-lg max-w-2xl mx-auto"
            >
              Comprehensive dental care solutions tailored to meet your unique
              needs with the latest technology and experienced professionals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="flex overflow-x-auto py-4 no-scrollbar space-x-4 mb-8"
            role="tablist"
            aria-label="Filter services by category"
          >
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gold-600 text-white"
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our Services?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              We combine advanced technology with compassionate care to deliver
              exceptional results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Highly qualified and experienced dental professionals dedicated
                to your care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                State-of-the-art equipment and techniques for precise,
                comfortable treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patient-Centered
              </h3>
              <p className="text-gray-600">
                Personalized care plans tailored to your unique needs and
                preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Safe & Comfortable
              </h3>
              <p className="text-gray-600">
                Relaxing environment with strict safety protocols for your peace
                of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gold-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Ready to Transform Your Smile?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Schedule your consultation today and discover how our
              comprehensive dental services can improve your oral health and
              confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-gold-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
