"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageHero } from "@/components/page-hero";
import { ContactUs } from "@/components/sections/contact-us";
import { bookingUrl } from "@/constants";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="About Us"
        imageSrc="/images/location1.jpg"
        description="Dedicated to providing high-quality dental care with compassion, professional skill, and current technology."
      />

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
                  Smile Star Dental was built on a simple mission: to provide
                  high-quality, patient-centred care in a comfortable and
                  welcoming environment. Dr Melody Healy began with a small
                  practice and a clear vision—to transform the way people
                  experience dentistry, especially for those who may feel
                  nervous or anxious. Today, we’ve grown into a modern dental
                  practice while staying true to our core values. We focus on
                  personalised care, gentle treatment approaches, and clear
                  communication to help every patient feel at ease, along with
                  tailored treatment plans and the latest technology to support
                  appropriate treatment outcomes. Smile Star Dental serves
                  families in the community with a strong commitment to
                  professional standards, compassion, and continuous
                  improvement.
                </p>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden shadow-lg h-[450px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern dental clinic reception area with friendly staff and comfortable waiting space"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
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
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/88d5056f1a-ae060504fb9eca0c99cb.png"
                alt="Dr. Melody Healy, principal dentist at Smile Star Dental"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Dr. Melody Healy
              </h2>
              <p>
                Dr Melody is a passionate and experienced dentist dedicated to
                providing high-quality, patient-centred care. She graduated from
                the University of Otago in New Zealand with a Bachelor of Dental
                Surgery in 2005. Following her graduation, she gained valuable
                experience at Sydney’s Westmead Hospital in the Emergency and
                General Dental Department, and regularly travelled to rural
                areas across NSW to deliver essential dental services to
                underserved communities. She has also spent many years working
                within one of Australia’s largest dental corporations,
                developing her skills in a fast-paced and highly professional
                environment. In 2012, she became the owner of Smile Star Dental,
                formerly known as Bay Arcade Dental.
              </p>
              <br />
              <p>
                Dr Melody has further advanced her clinical training by
                obtaining a Graduate Diploma of Clinical Dentistry from the
                University of Bolton, UK. She has a strong interest in the
                relationship between dental alignment, breathing, sleep, and
                overall wellbeing. In addition, she enjoys all aspects of
                dentistry, with a particular focus on cosmetic treatments such
                as veneers, helping patients feel more confident in their
                smiles.
              </p>{" "}
              <br />
              <p>
                Known for her gentle approach and commitment to professional
                standards, Dr Melody takes great pride in helping her patients
                achieve and maintain healthy smiles. She has cared for many
                families across multiple generations, building long-lasting
                relationships based on trust and personalised care. She is
                committed to ongoing professional development and continually
                integrates current evidence and techniques into her practice.
                The comfort, wellbeing, and experience of every patient remain
                at the heart of everything she and her team at Smile Star Dental
                do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs
        heading="Contact Us"
        description="Have a question or ready to book? Send us a message and our team will be in touch shortly."
      />

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
                Schedule your first visit today. New patients from Newcastle and
                Lake Macquarie are welcome.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gold-400 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Book Your Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
