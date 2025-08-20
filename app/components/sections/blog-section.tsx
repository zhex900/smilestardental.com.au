"use client";
import React from "react";
import { motion } from "framer-motion";
import { ButtonGradient } from "../ui/button-gradient";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BlogCard, BlogCardProps } from "../ui/card";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Daily Dental Care Tips",
    excerpt:
      "Discover the best practices for maintaining optimal oral health at home.",
    image:
      "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dental hygiene tips toothbrush and dental floss",
    slug: "essential-daily-dental-care-tips",
  },
  {
    id: 2,
    title: "The Complete Guide to Teeth Whitening",
    excerpt:
      "Everything you need to know about professional teeth whitening options.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "teeth whitening before and after comparison",
    slug: "complete-guide-teeth-whitening",
  },
  {
    id: 3,
    title: "Making Dental Visits Fun for Kids",
    excerpt: "Tips to help your children have positive dental experiences.",
    image:
      "https://images.unsplash.com/photo-1643660527098-559f89e45a92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "child at dentist office smiling",
    slug: "making-dental-visits-fun-kids",
  },
  {
    id: 4,
    title: "The Complete Guide to Teeth Whitening",
    excerpt:
      "Everything you need to know about professional teeth whitening options.",
    image:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21pbGV8ZW58MHx8MHx8fDA%3D",
    alt: "teeth whitening before and after comparison",
    slug: "complete-guide-teeth-whitening",
  },
  {
    id: 5,
    title: "The Complete Guide to Teeth Whitening",
    excerpt:
      "Everything you need to know about professional teeth whitening options.",
    image:
      "https://plus.unsplash.com/premium_photo-1679750867594-6dbd6a8ad203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "teeth whitening before and after comparison",
    slug: "complete-guide-teeth-whitening",
  },
  {
    id: 6,
    title: "The Complete Guide to Teeth Whitening",
    excerpt:
      "Everything you need to know about professional teeth whitening options.",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "teeth whitening before and after comparison",
    slug: "complete-guide-teeth-whitening",
  },
];

export function BlogSection() {
  const router = useRouter();
  return (
    <section id="blog" className="section-px section-py bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-heading mb-4"
          >
            Latest From Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-normal"
          >
            Stay informed about dental health and care tips
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard article={post as unknown as BlogCardProps} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center mt-6">
            <ButtonGradient onClick={() => router.push("/blogs")}>
              <span className=""> View All Blog Posts</span>
            </ButtonGradient>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
