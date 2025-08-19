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
import { LogoIcon } from "./ui/logo-icon";
import { GoogleReview } from "./ui/google-review";

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

const background = "bg-gradient-to-tl from-black via-gray-700 to-gray-900";
export function Footer() {
  return (
    <footer className={`px-6 md:px-12 ${background} text-white py-16 text-sm`}>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <LogoIcon />
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
              <GoogleReview variant="compact" />
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
