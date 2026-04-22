"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { address, bookingUrl, openingHours, phoneNumber } from "@/constants";
import { ContactUs } from "@/components/sections/contact-us";
import { FaqSection } from "@/components/sections";
import { FAQS } from "@/components/faq";

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
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.city}`)}`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer"
              >
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
              <button
                onClick={() =>
                  window.open(
                    `tel:${phoneNumber}`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer"
              >
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
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold-400 font-medium mt-4 hover:underline cursor-pointer"
              >
                Book Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactUs
        heading="Send Us a Message"
        description="Have a question or ready to book? Send us a message and our team will be in touch shortly."
        className="bg-gray-50"
      />

      {/* Map Section */}
      <section className="bg-gray-50 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl bg-white p-4 shadow-md"
          >
            <div className="h-[400px] w-full overflow-hidden rounded-xl">
              <iframe
                title="Smile Star Dental Location Map"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.city}`)}&output=embed`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection
        items={FAQS}
        intro="Answers to common questions about our practice, treatments, bookings and costs."
      />

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
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gold-400 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 text-center"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gold-400 transition duration-300 text-center"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
