"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { googleBusinessProfileUrl } from "@/constants";

/**
 * AHPRA / National Law: patient testimonials and testimonial-based ratings must
 * not be used in advertising regulated health services on this site. Community
 * feedback is linked on Google only.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-px section-py scroll-mt-28 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-heading heading-mb">See What Others Say</h2>
        <p className="text-normal mb-6 text-gray-700">
          Our Google listing is where people often leave comments about their
          visit. You will also find opening hours, the phone number, and
          directions—all in one place on{" "}
          <span className="whitespace-nowrap">Google Maps</span>.
        </p>
        <a
          href={googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-white transition-colors hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
          aria-label="Open Smile Star Dental on Google Maps (opens in a new tab)"
        >
          Read reviews on Google
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
        </a>
      </motion.div>
    </section>
  );
}
