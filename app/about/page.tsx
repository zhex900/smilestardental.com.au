"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Microscope,
  Users,
  GraduationCap,
  Star,
  Clock,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "Founder & Lead Dentist",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    description:
      "Specialized in cosmetic dentistry with over 15 years of experience transforming smiles and changing lives.",
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Orthodontist",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    description:
      "Expert in traditional braces and Invisalign with a passion for creating perfectly aligned, beautiful smiles.",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    role: "Pediatric Dentist",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    description:
      "Specialized in making dental visits fun and stress-free for children while ensuring optimal oral health.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary h-[300px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-heading text-gray-900 mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-normal max-w-2xl mx-auto"
            >
              Dedicated to providing exceptional dental care with compassion,
              expertise, and the latest technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-gray-600"
              >
                <p>
                  Founded in 2005, DentalCare began with a simple mission: to
                  provide the highest quality dental care in a comfortable,
                  patient-centered environment. Dr. Emily Chen started with a
                  small practice and a big dream - to transform how people
                  experience dental care.
                </p>
                <p>
                  Over the years, we've grown from a single-dentist practice to
                  a comprehensive dental care center with a team of specialists,
                  but our core values remain unchanged. We believe in treating
                  each patient as an individual, creating personalized treatment
                  plans, and using the latest technology to ensure optimal
                  outcomes.
                </p>
                <p>
                  Today, DentalCare is proud to be a trusted name in dental
                  health, serving thousands of patients and families across the
                  community. Our commitment to excellence, compassion, and
                  continuous improvement drives everything we do.
                </p>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-lg h-[450px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern dental clinic reception area with blue accents, friendly staff at reception desk, comfortable waiting area with patients"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-xl shadow-lg w-full"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/88d5056f1a-ae060504fb9eca0c99cb.png"
                alt="professional female dentist in white coat smiling, medical portrait"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Dr. Melody Healy
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                Dr Melody is a passionate and experienced dentist. She graduated
                from the University of Otago in New Zealand with a Bachelor of
                Dental Surgery in 2005. Since then she has worked at Sydney’s
                Westmead Hospital in the emergency and general dental department
                and frequently travelled to rural areas of NSW providing much
                needed services to rural Australians. She has also worked in one
                of the largest dental corporations in Australia for many years
                in a demanding and professional environment. Currently she is
                the principal dentist at Bay Arcade Dental. Dr Melody is
                passionate and has a great understanding about how crooked teeth
                in children and adults and its effect on breathing and sleep and
                general wellbeing of the individual. She finds satisfaction in
                helping people to be healthier and feel better about their
                smile. Because of this, she has treated many families across 3
                generations. Dr Melody strives to achieve excellence and
                continually researches and studies to apply leading edge
                techniques. The experience and welfare of patients is of utmost
                importance to the whole team at Bay Arcade Dental.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Our skilled professionals combine expertise with compassion to
              deliver exceptional dental care.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="text-gray-400 hover:text-gold-400 cursor-pointer w-5 h-5" />
                    <Twitter className="text-gray-400 hover:text-gold-400 cursor-pointer w-5 h-5" />
                    <Mail className="text-gray-400 hover:text-gold-400 cursor-pointer w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Ready to Experience Our Care?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white opacity-90 text-lg"
              >
                Schedule your first visit today and see why our patients choose
                DentalCare.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button className="inline-block bg-white text-gold-400 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Your Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
