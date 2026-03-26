"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "../ui/card";
import { GoogleReview } from "../ui/google-review";
import { InfiniteMovingCards } from "../ui/card";
import { GoogleIcon } from "../icons/google-icon";
import { ButtonGradient } from "../ui/button-gradient";

const testimonials = [
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
  // {
  //   id: 6,
  //   name: "James Wilson",
  //   avatar:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "After years of being self-conscious about my teeth, I finally have the confidence to smile. The treatment was comfortable and the results exceeded my expectations.",
  //   timeAgo: "3 months ago",
  // },
  // {
  //   id: 7,
  //   name: "Maria Garcia",
  //   avatar:
  //     "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "The team here is absolutely wonderful! They made my daughter's first orthodontic experience so positive. The office is beautiful and the technology is state-of-the-art.",
  //   timeAgo: "4 months ago",
  // },
  // {
  //   id: 8,
  //   name: "Robert Kim",
  //   avatar:
  //     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "I was amazed by how quickly I saw results. The advanced technology and expertise of the team made my treatment both effective and comfortable. Thank you!",
  //   timeAgo: "5 months ago",
  // },
  // {
  //   id: 9,
  //   name: "Jennifer Lee",
  //   avatar:
  //     "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "From the consultation to the final result, everything was perfect. The staff is knowledgeable, friendly, and truly cares about their patients. My smile transformation is incredible!",
  //   timeAgo: "6 months ago",
  // },
  // {
  //   id: 10,
  //   name: "Thomas Brown",
  //   avatar:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "The best decision I made for my dental health. The treatment was painless, the results are amazing, and the entire team is professional and caring. Highly recommend!",
  //   timeAgo: "7 months ago",
  // },
  // {
  //   id: 11,
  //   name: "Amanda Davis",
  //   avatar:
  //     "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "I'm so happy with my results! The invisible aligners were comfortable and discreet. The team was always supportive and the treatment went exactly as planned.",
  //   timeAgo: "8 months ago",
  // },
  // {
  //   id: 12,
  //   name: "Christopher Martinez",
  //   avatar:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  //   rating: 5,
  //   text: "Exceptional service and outstanding results. The 3D scanning made the process so smooth and the treatment plan was perfectly executed. My confidence has skyrocketed!",
  //   timeAgo: "9 months ago",
  // },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-px section-py bg-white scroll-mt-30 "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-heading heading-mb">What Our Patients Say</h2>

        {/* Google Review Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex text-yellow-400">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-semibold text-gray-900 text-normal">
              4.9
            </span>
            <span className="text-gray-600 ml-2 text-normal">
              (127 reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center text-gray-600 text-normal">
            <GoogleIcon className="w-6 h-6 mr-2" />
            <span>Verified Google Reviews</span>
          </div>
        </div>
      </motion.div>

      {/* Full width testimonials container  w-[calc(25%-0.75rem)] */}
      <div className="w-full overflow-hidden">
        <InfiniteMovingCards speed="normal" className="">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
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
