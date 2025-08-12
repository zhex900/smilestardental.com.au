"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  FacebookIcon,
  Instagram,
  Twitter,
} from "lucide-react";

const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyCFzf8HPvkF1hnGRB-_jKtV5SbGRGS8zaQ";

export function Footer() {
  const address = {
    street: "Suite 10B The Bay Arcade, 478 The Esplanade",
    city: "Warners Bay, NSW 2282",
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🦷</span>
                </div>
                <span className="text-2xl font-bold">Odentrics</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Your trusted partner for comprehensive dental care and beautiful
                smiles. We provide exceptional dental services with the latest
                technology and a caring approach.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">{address.street}</p>
                    <p className="text-slate-300">{address.city}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-slate-300">+1 (718) 373 7701</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-slate-300">info@odentrics.com</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    General Dentistry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Restorative Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Emergency Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Dental Implants
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-medium mb-3">Stay Updated</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Subscribe to our newsletter for dental tips and updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Odentrics. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
