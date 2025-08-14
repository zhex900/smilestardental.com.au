"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonGradient } from "./ui/button-gradient";
import router from "next/router";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Daily Dental Care Tips",
    excerpt:
      "Discover the best practices for maintaining optimal oral health at home.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e1399329a8-6a3d823a181092934ec7.png",
    alt: "dental hygiene tips toothbrush and dental floss",
    slug: "essential-daily-dental-care-tips",
  },
  {
    id: 2,
    title: "The Complete Guide to Teeth Whitening",
    excerpt:
      "Everything you need to know about professional teeth whitening options.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c862e7ea9e-8faffac90cb0fbb1c933.png",
    alt: "teeth whitening before and after comparison",
    slug: "complete-guide-teeth-whitening",
  },
  {
    id: 3,
    title: "Making Dental Visits Fun for Kids",
    excerpt: "Tips to help your children have positive dental experiences.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/8a22c2c0bd-56c3c66cbf8f81aaa921.png",
    alt: "child at dentist office smiling",
    slug: "making-dental-visits-fun-kids",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-r to-sky-300/20 via-sky-400/20 from-blue-700/20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Latest From Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Stay informed about dental health and care tips
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.alt}
              />
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline cursor-pointer font-medium"
                >
                  Read More
                </Link>
              </div>
            </motion.article>
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
