"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, Mail, Send } from "lucide-react";
import { address, openingHours, phoneNumber } from "@/constants";

const faqs = [
  {
    id: 1,
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage before your appointment. We also offer flexible payment options for patients without insurance.",
  },
  {
    id: 2,
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend scheduling regular dental checkups and cleanings every six months. However, depending on your specific oral health needs, we may suggest more frequent visits.",
  },
  {
    id: 3,
    question: "What should I do in a dental emergency?",
    answer:
      "If you're experiencing a dental emergency, call our emergency line immediately at (123) 456-7899. For severe bleeding or injuries, please go to the nearest emergency room. We reserve time in our daily schedule for emergency patients.",
  },
  {
    id: 4,
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans to help make dental care more affordable. We work with several financing options and can discuss payment arrangements that fit your budget.",
  },
  {
    id: 5,
    question: "What are your office hours?",
    answer:
      "We are open Monday through Friday from 8AM to 6PM, and Saturdays from 9AM to 2PM. We are closed on Sundays and major holidays.",
  },
  {
    id: 6,
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office at (123) 456-7890, using our online booking system, or by filling out the contact form on this page. We'll get back to you within 24 hours.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Have questions or ready to schedule your appointment? Reach out to
              our friendly team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visit Our Office
              </h3>
              <p className="text-gray-600">
                {address.street}
                <br />
                {address.city}
              </p>
              <button className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer">
                Get Directions
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600">{phoneNumber}</p>
              <button className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer">
                Call Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Opening Hours
              </h3>
              <div className="text-gray-600">
                <ul className="space-y-3">
                  {openingHours.map((schedule) => (
                    <li key={schedule.day} className="flex justify-between">
                      <span>{schedule.day}</span> <span>{schedule.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer">
                Book Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="cleaning">Dental Cleaning & Checkups</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="orthodontics">
                      Invisalign & Orthodontics
                    </option>
                    <option value="crowns">Crowns & Bridges</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gold-400 hover:bg-gold-400 text-white font-medium py-3 px-6 rounded-xl transition duration-300 w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full bg-white p-4 rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-full w-full rounded-xl overflow-hidden">
                <iframe
                  title="Smile Star Dental Location Map"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.city}`)}&output=embed`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Find answers to our most commonly asked questions. If you don't
              see what you're looking for, please contact us directly.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
              >
                <div
                  className="flex justify-between items-center p-5 bg-blue-50 cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-gold-400 transition-transform duration-300 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-white"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Don't wait to achieve the smile you've always wanted. Contact us
              today to schedule your consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-gold-400 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Appointment
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gold-400 transition duration-300">
                Call Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
