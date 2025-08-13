"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  address,
  copyright,
  email,
  phoneNumber,
  socialMedia,
  yearEstablished,
} from "@/constants";
import { LogoIcon } from "./logo-icon";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "General Dentistry", href: "/services" },
  { name: "Cosmetic Dentistry", href: "/services" },
  { name: "Results", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
];

const openingHours = [
  { day: "Monday - Friday:", time: "9AM - 5PM" },
  { day: "Weekend:", time: "Closed" },
  //   { day: "Sunday:", time: "Closed" },
];

const areasServed = ["Newcastle", "Lake Macquarie", "Warners Bay"];

export function Footer() {
  return (
    <footer className="bg-gradient-to-l to-sky-300 via-sky-400 from-blue-500 text-white py-16 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <LogoIcon alwaysShowText />
            </div>
            <p className="leading-relaxed">
              Since {yearEstablished}, formerly known as Bay Arcade Dental,{" "}
              <span className="font-bold">Smile Star Dental</span> has been
              helping Newcastle and surrounding communities smile with
              confidence for over {new Date().getFullYear() - yearEstablished}{" "}
              years.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white rounded-full p-2 text-black hover:opacity-100 transition-opacity cursor-pointer ${social.hoverColor}  `}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6 max-w-xs">
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              {openingHours.map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Area We Serve</h3>
            <ul className="space-y-3">
              {areasServed.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="hover:text-gray-300 transition-colors cursor-pointer">
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="hover:text-gray-300 transition-colors cursor-pointer">
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="hover:text-gray-300 transition-colors cursor-pointer">
                  <a
                    href={`https://maps.google.com/maps?saddr=home&daddr=${encodeURIComponent(`${address.street}, ${address.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address.street}
                    <br />
                    {address.city}
                  </a>
                </p>
              </li>
            </ul>

            <div className="flex justify-start">
              <div className="flex flex-col items-center space-x-2 justify-start">
                <div className="flex flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 272 92"
                    width="120"
                  >
                    <path
                      fill="#EA4335"
                      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    ></path>
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"></path>
                    <path
                      fill="#EA4335"
                      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="ml-2 text-lg font-semibold">4.9</span>
                  </div>
                  <span>152 Google reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-slate-100">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="mb-4 md:mb-0">{copyright}</p>
              <div className="flex items-center space-x-6 ">
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
