"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Printer,
  Lock,
  Shield,
  Eye,
  Trash2,
  Cookie,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const tableOfContents = [
  "Introduction",
  "Information We Collect",
  "How We Use Your Information",
  "Information Sharing",
  "Data Security",
  "Your Rights",
  "Cookies Policy",
  "Changes to This Policy",
  "Contact Us",
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handlePrint = () => {
    window.print();
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
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Learn how we collect, use, and protect your personal information
              at DentalCare.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 bg-blue-50 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="text-blue-600 mr-2 w-4 h-4" />
                    <button
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                      }
                      className="text-gray-700 hover:text-blue-600 cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Introduction */}
            <motion.div
              id="introduction"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Last Updated: August 12, 2023
              </p>
              <p className="text-gray-700 mb-4">
                At DentalCare, we respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you visit our website, use our services, or communicate with us.
              </p>
              <p className="text-gray-700">
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access our
                website or use our services.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              id="information-we-collect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us,
                information we collect automatically when you use our services,
                and information from third parties.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 mb-3">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Contact information (name, email address, phone number, postal
                  address)
                </li>
                <li>Demographic information (date of birth, gender)</li>
                <li>
                  Health information (dental history, current conditions,
                  medications)
                </li>
                <li>Insurance information</li>
                <li>
                  Payment details (credit card information, billing address)
                </li>
                <li>Appointment scheduling information</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-3">
                When you use our website, we may automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Device information (IP address, browser type, operating
                  system)
                </li>
                <li>
                  Usage information (pages visited, time spent on pages, links
                  clicked)
                </li>
                <li>Location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              id="how-we-use-your-information"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Providing and managing our dental services</li>
                <li>Processing and managing appointments</li>
                <li>Processing payments and billing</li>
                <li>
                  Communicating with you about your care, appointments, and
                  services
                </li>
                <li>
                  Sending administrative information, such as changes to our
                  terms or policies
                </li>
                <li>
                  Sending marketing and promotional communications (with your
                  consent)
                </li>
                <li>Personalizing your experience on our website</li>
                <li>Improving our website, services, and patient experience</li>
                <li>Conducting research and analysis</li>
                <li>Complying with legal obligations</li>
                <li>Protecting our rights, privacy, safety, or property</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              id="information-sharing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Service Providers
              </h3>
              <p className="text-gray-700 mb-4">
                We may share your information with third-party service providers
                who perform services on our behalf, such as payment processing,
                data analysis, email delivery, hosting services, and customer
                service.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Healthcare Providers
              </h3>
              <p className="text-gray-700 mb-4">
                We may share your information with other healthcare providers
                who are involved in your care, such as specialists or
                laboratories.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Insurance Companies
              </h3>
              <p className="text-gray-700 mb-4">
                We may share your information with your insurance company to
                verify coverage and process claims.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required to do so by law or
                in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">
                Business Transfers
              </h3>
              <p className="text-gray-700 mb-4">
                If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as
                part of that transaction.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              id="data-security"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We have implemented appropriate technical and organizational
                measures to protect the security of your personal information.
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure.
              </p>
              <p className="text-gray-700">
                We comply with applicable data protection laws, including the
                Health Insurance Portability and Accountability Act (HIPAA) for
                health information.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              id="your-rights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The right to access your personal information</li>
                <li>
                  The right to correct inaccurate or incomplete information
                </li>
                <li>
                  The right to request deletion of your personal information
                </li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section.
              </p>
            </motion.div>

            {/* Cookies Policy */}
            <motion.div
              id="cookies-policy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with a small amount of data that may include an
                anonymous unique identifier.
              </p>
              <p className="text-gray-700 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Necessary for the website
                  to function properly
                </li>
                <li>
                  <strong>Preference cookies:</strong> Enable the website to
                  remember your preferences
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors interact with our website
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to track visitors
                  across websites to display relevant advertisements
                </li>
              </ul>
              <p className="text-gray-700">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                website.
              </p>
            </motion.div>

            {/* Changes to This Policy */}
            <motion.div
              id="changes-to-this-policy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-700">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              id="contact-us"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="mb-4 text-gray-700 space-y-2">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <strong>By email:</strong> privacy@dentalcare.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <strong>By phone:</strong> (123) 456-7890
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <strong>By mail:</strong> 123 Dental Way, Smile City, SC 12345
                </li>
              </ul>
            </motion.div>

            {/* Policy Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-between items-center mt-12 border-t border-gray-200 pt-8"
            >
              <Link
                href="/terms-of-service"
                className="text-blue-600 hover:text-blue-700 mb-4 sm:mb-0 flex items-center cursor-pointer"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Terms of Service
              </Link>
              <button
                onClick={handlePrint}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print This Policy
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
