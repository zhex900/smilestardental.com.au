"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Lock,
  Cookie,
  Heart,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "Can I request a copy of my dental records?",
    answer:
      "Yes, you have the right to request a copy of your dental records. Please submit a written request to our office, and we will provide your records within the timeframe specified by applicable laws. A nominal fee may apply for copying and mailing physical records.",
  },
  {
    id: 2,
    question: "What happens if I miss an appointment?",
    answer:
      "If you miss an appointment without providing at least 24 hours' notice, a cancellation fee may be charged. Repeated missed appointments may affect our ability to reserve future appointments for you. We understand that emergencies happen, so please contact us as soon as possible if you cannot make your appointment.",
  },
  {
    id: 3,
    question: "How do I update my personal information?",
    answer:
      "You can update your personal information by logging into your account on our website, contacting our office by phone, or updating your information during your next visit. It's important to keep your contact information, insurance details, and medical history current to ensure proper care.",
  },
  {
    id: 4,
    question: "How is my dental information protected?",
    answer:
      "We comply with all applicable laws and regulations regarding the protection of patient information, including HIPAA in the United States. We implement physical, technical, and administrative safeguards to protect your information and only share it as permitted by law or with your explicit consent.",
  },
];

const relatedPolicies = [
  {
    id: 1,
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, and protect your personal information.",
    icon: Lock,
    href: "/privacy-policy",
  },
  {
    id: 2,
    title: "Cookie Policy",
    description:
      "Understand how we use cookies and similar technologies on our website.",
    icon: Cookie,
    href: "/cookie-policy",
  },
  {
    id: 3,
    title: "Patient Rights",
    description:
      "Review your rights as a patient and our commitment to your care.",
    icon: Heart,
    href: "/patient-rights",
  },
];

export default function TermsOfService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 h-[200px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our dental
              services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-500">Last Updated: August 1, 2023</p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to DentalCare. These Terms of Service ("Terms") govern
              your use of our website, mobile applications, and services
              (collectively, the "Services") operated by DentalCare ("we," "us,"
              or "our").
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Services, you agree to be bound by these
              Terms. If you disagree with any part of the Terms, you may not
              access our Services.
            </p>
          </motion.div>

          {/* Dental Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Dental Services
            </h2>
            <p className="text-gray-700 mb-4">
              DentalCare provides various dental services, including but not
              limited to preventive care, restorative dentistry, cosmetic
              dentistry, pediatric dentistry, orthodontics, and oral surgery.
              The specific services available may vary by location and provider
              availability.
            </p>
            <p className="text-gray-700 mb-4">
              All dental services are provided by licensed dental professionals
              in accordance with applicable laws and regulations. The provision
              of dental services is subject to professional judgment and may be
              declined if deemed inappropriate or unsafe for a patient.
            </p>
          </motion.div>

          {/* Appointments and Cancellations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Appointments and Cancellations
            </h2>
            <p className="text-gray-700 mb-4">
              Appointments can be scheduled through our website, mobile
              application, or by contacting our office directly. We require at
              least 24 hours' notice for appointment cancellations or
              rescheduling. Failure to provide adequate notice may result in a
              cancellation fee.
            </p>
            <p className="text-gray-700 mb-4">
              We strive to maintain our schedule and minimize wait times.
              However, dental emergencies may occasionally cause delays. We will
              make reasonable efforts to notify you if your appointment time
              needs to be adjusted.
            </p>
          </motion.div>

          {/* Payment and Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Payment and Insurance
            </h2>
            <p className="text-gray-700 mb-4">
              Payment for services is due at the time of treatment unless
              alternative arrangements have been made in advance. We accept
              various payment methods, including cash, credit cards, and
              approved financing options.
            </p>
            <p className="text-gray-700 mb-4">
              As a courtesy to our patients, we will submit insurance claims on
              your behalf if you provide the necessary information. However, you
              remain ultimately responsible for all charges, regardless of
              insurance coverage. We recommend verifying your benefits with your
              insurance provider before treatment.
            </p>
          </motion.div>

          {/* Website and Online Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Website and Online Services
            </h2>
            <p className="text-gray-700 mb-4">
              Our website and online services are provided "as is" and "as
              available" without warranties of any kind, either express or
              implied. We do not guarantee that our website will be
              uninterrupted, secure, or error-free.
            </p>
            <p className="text-gray-700 mb-4">
              The content on our website is for informational purposes only and
              should not be considered medical advice. Always consult with a
              dental professional regarding your specific dental health needs.
            </p>
          </motion.div>

          {/* User Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. User Accounts
            </h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              safeguarding your account credentials and for all activities that
              occur under your account.
            </p>
            <p className="text-gray-700 mb-4">
              We reserve the right to disable any user account if we believe you
              have violated these Terms or if we determine that your account
              activity poses a risk to our Services or other users.
            </p>
          </motion.div>

          {/* Privacy and Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how
              we collect, use, and protect your personal information. By using
              our Services, you consent to our collection and use of your data
              as described in our Privacy Policy.
            </p>
            <p className="text-gray-700 mb-4">
              We comply with all applicable privacy laws, including HIPAA
              (Health Insurance Portability and Accountability Act) in the
              United States, regarding the protection of your dental and health
              information.
            </p>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our Services,
              including but not limited to text, graphics, logos, icons, images,
              audio clips, and software, are owned by DentalCare and are
              protected by copyright, trademark, and other intellectual property
              laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any materials from our Services without our
              prior written consent.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, DentalCare shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              your access to or use of or inability to access or use the
              Services.
            </p>
            <p className="text-gray-700 mb-4">
              Our liability for any claim arising from these Terms or your use
              of our Services shall not exceed the amount you paid for the
              specific dental service giving rise to such claim.
            </p>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes by posting the updated Terms
              on our website and updating the "Last Updated" date at the top of
              these Terms.
            </p>
            <p className="text-gray-700 mb-4">
              Your continued use of our Services after any changes to these
              Terms constitutes your acceptance of such changes. We encourage
              you to review these Terms periodically for any updates.
            </p>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our Services
              immediately, without prior notice or liability, for any reason,
              including but not limited to a breach of these Terms.
            </p>
            <p className="text-gray-700 mb-4">
              Upon termination, your right to use our Services will immediately
              cease. All provisions of these Terms that by their nature should
              survive termination shall survive, including but not limited to
              ownership provisions, warranty disclaimers, indemnity, and
              limitations of liability.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the
              laws of the state where our main office is located, without regard
              to its conflict of law provisions.
            </p>
            <p className="text-gray-700 mb-4">
              Any disputes arising under or in connection with these Terms shall
              be subject to the exclusive jurisdiction of the courts located
              within the aforementioned state.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700">DentalCare</p>
              <p className="text-gray-700">
                123 Dental Way, Smile City, SC 12345
              </p>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Email: legal@dentalcare.com</p>
            </div>
          </motion.div>

          {/* Acknowledgement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 border-t border-gray-200 pt-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Acknowledgement
              </h3>
              <p className="text-gray-700 mb-6">
                By using DentalCare's services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of
                Service.
              </p>
              <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 cursor-pointer">
                I Accept the Terms of Service
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-gray-900 mb-6 text-center"
          >
            Related Policies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPolicies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <policy.icon className="text-blue-600 text-2xl mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {policy.title}
                </h3>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <Link
                  href={policy.href}
                  className="text-blue-600 font-medium hover:underline cursor-pointer"
                >
                  Read Policy →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full p-5 text-left font-medium"
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="text-blue-600 w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-blue-600 w-5 h-5" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="p-5 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
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
                Have Questions About Our Terms?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white opacity-90 text-lg"
              >
                Our team is here to help. Contact us for any clarification about
                our terms of service.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
