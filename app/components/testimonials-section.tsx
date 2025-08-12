"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "./ui/testimonial-card";

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
  {
    id: 6,
    name: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "After years of being self-conscious about my teeth, I finally have the confidence to smile. The treatment was comfortable and the results exceeded my expectations.",
    timeAgo: "3 months ago",
  },
  {
    id: 7,
    name: "Maria Garcia",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The team here is absolutely wonderful! They made my daughter's first orthodontic experience so positive. The office is beautiful and the technology is state-of-the-art.",
    timeAgo: "4 months ago",
  },
  {
    id: 8,
    name: "Robert Kim",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I was amazed by how quickly I saw results. The advanced technology and expertise of the team made my treatment both effective and comfortable. Thank you!",
    timeAgo: "5 months ago",
  },
  {
    id: 9,
    name: "Jennifer Lee",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "From the consultation to the final result, everything was perfect. The staff is knowledgeable, friendly, and truly cares about their patients. My smile transformation is incredible!",
    timeAgo: "6 months ago",
  },
  {
    id: 10,
    name: "Thomas Brown",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The best decision I made for my dental health. The treatment was painless, the results are amazing, and the entire team is professional and caring. Highly recommend!",
    timeAgo: "7 months ago",
  },
  {
    id: 11,
    name: "Amanda Davis",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I'm so happy with my results! The invisible aligners were comfortable and discreet. The team was always supportive and the treatment went exactly as planned.",
    timeAgo: "8 months ago",
  },
  {
    id: 12,
    name: "Christopher Martinez",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional service and outstanding results. The 3D scanning made the process so smooth and the treatment plan was perfectly executed. My confidence has skyrocketed!",
    timeAgo: "9 months ago",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>

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
              <span className="text-xl font-semibold text-gray-900">4.9</span>
              <span className="text-gray-600 ml-2">(127 reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Verified Google Reviews</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center mx-auto">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read More Reviews
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
