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
    name: "Emily Chen",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    rating: 5,
    text: "Dr. Johnson made my dental anxiety disappear. Professional, gentle, and amazing results! The office is spotless and the staff is incredibly welcoming. Highly recommend!",
    timeAgo: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Torres",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    rating: 5,
    text: "Best dental experience I've ever had. The office is modern and Dr. Johnson is incredibly skilled. Got my teeth whitened and the results exceeded my expectations!",
    timeAgo: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah Williams",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    rating: 5,
    text: "My whole family loves coming here. Dr. Johnson is wonderful with kids and adults alike. Easy online booking and always on time for appointments.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Thompson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding service from start to finish. The 3D scanning technology was incredible and the treatment plan was explained perfectly. My smile has never looked better!",
    timeAgo: "1 month ago",
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Professional, caring, and excellent results. The invisible aligners worked perfectly and the staff was always available to answer my questions. Highly recommend!",
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
              className="md:max-w-[350px] max-w-[250px] md:h-[350px] h-[250px]"
            />
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}
