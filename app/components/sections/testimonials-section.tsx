"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialCard } from "../ui/card";
import { InfiniteMovingCards } from "../ui/card";
import { GoogleIcon } from "../icons/google-icon";
import { useGoogleReviews } from "@/hooks/use-google-reviews";

const fallbackTestimonials = [
  {
    id: 1,
    name: "Emily C.",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    rating: 5,
    text: "The team made my dental anxiety disappear — professional, gentle and the results speak for themselves. The clinic is spotless and the staff are incredibly welcoming.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael T.",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    rating: 5,
    text: "Best dental experience I have had in years. Modern clinic, skilled and thorough. I had my teeth whitened and the results exceeded my expectations.",
    timeAgo: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah W.",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    rating: 5,
    text: "My whole family loves coming here. The team is wonderful with kids and adults alike, booking online was simple and they are always on time for appointments.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 4,
    name: "David T.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding service from start to finish. The digital 3D scanning was impressive and the treatment plan was explained clearly. My smile has never looked better.",
    timeAgo: "1 month ago",
  },
  {
    id: 5,
    name: "Lisa W.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Professional, caring and excellent results. The Invisalign treatment went exactly as planned and the team was always available to answer my questions. Highly recommend.",
    timeAgo: "2 months ago",
  },
];

export function TestimonialsSection() {
  const { data, loading } = useGoogleReviews();

  const hasLiveReviews = data?.ok && data.reviews.length > 0;
  const testimonials = hasLiveReviews
    ? data.reviews.map((r, i) => ({
        id: r.id || `g-${i}`,
        name: r.name,
        avatar: r.avatar,
        rating: r.rating,
        text: r.text,
        timeAgo: r.timeAgo || "Google review",
      }))
    : fallbackTestimonials;

  const displayRating = data?.rating ?? 4.9;
  const displayCount = data?.userRatingCount ?? 127;

  return (
    <section
      id="testimonials"
      className="section-px section-py bg-white scroll-mt-28 "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-heading heading-mb">What Our Patients Say</h2>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i <= Math.round(displayRating) ? "fill-current" : ""
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-900 text-normal">
              {loading && !data ? "…" : displayRating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-2 text-normal">
              ({loading && !data ? "…" : displayCount}{" "}
              {hasLiveReviews ? "Google reviews" : "reviews"})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center text-gray-600 text-normal">
          <GoogleIcon className="w-6 h-6 mr-2" />
          <span>
            {hasLiveReviews ? "Showing live Google reviews" : "Google Reviews"}
          </span>
        </div>
      </motion.div>

      <div className="w-full overflow-hidden">
        <InfiniteMovingCards speed="normal" className="">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={String(testimonial.id)}
              testimonial={testimonial}
              index={index}
              className="w-[85vw] max-w-[320px] h-[360px] sm:w-[320px] sm:max-w-[320px] sm:h-[340px] md:w-[350px] md:max-w-[350px] md:h-[350px]"
            />
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}
