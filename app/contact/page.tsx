"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { address, bookingUrl, openingHours, phoneNumber } from "@/constants";
import { PageHero } from "@/components/page-hero";
import { ContactUs } from "@/components/sections/contact-us";
import { FaqSection } from "@/components/sections";
import { FAQS } from "@/components/faq";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contact Us"
        imageSrc="/images/open-teeths.jpg"
        description="Have questions or ready to schedule your appointment? Reach out to our friendly team today."
      />

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-xl p-8 text-center"
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
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold-400 font-medium mt-4 hover:underline"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600">{phoneNumber}</p>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block text-gold-400 font-medium mt-4 hover:underline"
              >
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary rounded-xl p-8 text-center"
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
