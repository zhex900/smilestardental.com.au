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
  MapPin,
  Phone,
  Clock,
  Mail,
  Linkedin,
  Twitter,
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
  {
    id: 4,
    name: "Dr. David Kim",
    role: "Oral Surgeon",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    description:
      "Expert in complex extractions, dental implants, and reconstructive procedures with a gentle approach.",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Dental Hygienist",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    description:
      "Experienced hygienist dedicated to preventive care and educating patients on maintaining optimal oral health.",
  },
  {
    id: 6,
    name: "Amanda Wilson",
    role: "Office Manager",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    description:
      "The heart of our practice, ensuring smooth operations and a welcoming experience for every patient.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "We put our patients first, listening to their concerns and tailoring treatments to their unique needs and preferences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our practice, from clinical procedures to patient communication and service.",
  },
  {
    icon: Microscope,
    title: "Innovation",
    description:
      "We continuously invest in advanced technology and techniques to provide the most effective and comfortable treatments.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We practice with honesty, transparency, and ethical standards that earn our patients' trust and confidence.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are committed to serving our community through education, outreach, and providing accessible dental care.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "We pursue ongoing education and professional development to remain at the forefront of dental medicine.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg",
    text: "I've always been anxious about dental visits, but Dr. Chen and her team made me feel completely at ease. The care I received was exceptional, and my smile has never looked better!",
    since: "Patient since 2018",
  },
  {
    id: 2,
    name: "Jennifer Williams",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    text: "My son used to be terrified of the dentist until we found Dr. Johnson. Her patience and gentle approach completely changed his perspective. Now he actually looks forward to his dental visits!",
    since: "Patient since 2020",
  },
  {
    id: 3,
    name: "Michael Thompson",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    text: "After years of being self-conscious about my smile, Dr. Rodriguez transformed it with Invisalign. The whole team was supportive throughout the process, and I couldn't be happier with the results!",
    since: "Patient since 2019",
  },
];

const facilityImages = [
  {
    id: 1,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c32a7428-2dce5c5e0a72c2cce1f4.png",
    alt: "Modern dental treatment room with advanced equipment, comfortable chair, and bright lighting",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7f51b6f3c5-f3ca5b0e32e43b8ca2f4.png",
    alt: "Dental office reception area with modern design, comfortable seating, and blue accent wall",
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e6f4b5cadc-d7df1a2b2cd0e2ab5fc3.png",
    alt: "Digital imaging equipment in dental office, panoramic x-ray machine and computer monitors",
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e5ccd67cae-65b6efbd85c37a04e8d0.png",
    alt: "Child-friendly pediatric dental treatment room with colorful decorations and toys",
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f8c95d3baa-1d0d2a5f2e8dfd20b5b3.png",
    alt: "Dental laboratory with technician working on prosthetics and dental models",
  },
  {
    id: 6,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6a7b4c2c15-0aee1b6c3ede6f75af0d.png",
    alt: "Sterilization area in dental clinic with modern equipment and organized instruments",
  },
];

const awards = [
  { id: 1, title: "Best Dental Practice 2022", icon: Award },
  { id: 2, title: "Excellence in Patient Care", icon: Award },
  { id: 3, title: "Top Cosmetic Dentistry", icon: Award },
  { id: 4, title: "Community Service Award", icon: Award },
];

export function AboutPage() {
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
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
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1c4e7a0e70-1e5e3a0a0be9acea3462.png"
                  alt="Modern dental clinic reception area with blue accents, friendly staff at reception desk, comfortable waiting area with patients"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Mission & Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Guided by our commitment to excellence and patient-centered care,
              we strive to make every dental visit a positive experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
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
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="text-gray-400 hover:text-blue-600 cursor-pointer w-5 h-5" />
                    <Twitter className="text-gray-400 hover:text-blue-600 cursor-pointer w-5 h-5" />
                    <Mail className="text-gray-400 hover:text-blue-600 cursor-pointer w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Modern Facility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Experience dental care in our state-of-the-art clinic designed for
              your comfort and equipped with the latest technology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md h-[250px]"
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </motion.div>
            ))}
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
              Hear from our patients about their experiences at DentalCare.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {[...Array(5)].map((_, i) => (
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
                    <p className="text-gray-600 text-sm">{testimonial.since}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Awards & Recognitions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Our commitment to excellence has been recognized by industry
              leaders.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-3 opacity-70">
                  <award.icon className="text-blue-600 text-6xl" />
                </div>
                <p className="font-medium text-gray-900">{award.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
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
              <button className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Your Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
