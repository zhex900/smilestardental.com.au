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
  Smile,
  Baby,
  Braces,
  Scissors,
  Star,
  ArrowRight,
} from "lucide-react";

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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/7f51b6f3c5-f3ca5b0e32e43b8ca2f4.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e6f4b5cadc-d7df1a2b2cd0e2ab5fc3.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e5ccd67cae-65b6efbd85c37a04e8d0.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f8c95d3baa-1d0d2a5f2e8dfd20b5b3.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6a7b4c2c15-0aee1b6c3ede6f75af0d.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c32a7428-2dce5c5e0a72c2cce1f4.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/7f51b6f3c5-f3ca5b0e32e43b8ca2f4.png",
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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e6f4b5cadc-d7df1a2b2cd0e2ab5fc3.png",
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

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    text: "The Invisalign treatment completely transformed my smile. The process was comfortable and the results exceeded my expectations!",
    rating: 5,
    service: "Invisalign & Orthodontics",
  },
  {
    id: 2,
    name: "Michael Chen",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    text: "I was nervous about getting dental implants, but the team made the entire process smooth and painless. My new teeth look and feel amazing!",
    rating: 5,
    service: "Dental Implants",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    text: "The teeth whitening treatment gave me the confidence boost I needed. Professional, quick, and the results are incredible!",
    rating: 5,
    service: "Teeth Whitening",
  },
];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 h-[300px] flex items-center">
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
              className="text-gray-600 text-lg max-w-2xl mx-auto"
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
          <div className="flex overflow-x-auto py-4 no-scrollbar space-x-4 mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="text-blue-600 text-xl mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="w-3 h-3 text-blue-600 mr-2 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              What Our Patients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Hear from our patients about their experiences with our services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 text-sm">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
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
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                View All Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
