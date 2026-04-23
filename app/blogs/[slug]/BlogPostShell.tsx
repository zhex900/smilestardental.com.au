"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Mail, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SocialFacebook,
  SocialLinkedin,
  SocialX,
} from "@/components/social-brand-icons";
import type { BlogFrontmatter, RelatedPostCard } from "@/lib/blog-types";
import { bookingUrl } from "@/constants";

type BlogPostShellProps = {
  post: BlogFrontmatter;
  relatedPosts: RelatedPostCard[];
  children: React.ReactNode;
};

export function BlogPostShell({
  post,
  relatedPosts,
  children,
}: BlogPostShellProps) {
  const tags = post.tags ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative flex h-[400px] items-center overflow-hidden bg-gray-900">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-3xl font-bold text-white drop-shadow md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-3 text-white/85 sm:flex-row sm:gap-6">
                <div className="flex items-center">
                  <div className="text-left">
                    <div className="flex flex-wrap items-center text-sm">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="mx-2 hidden sm:inline">·</span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-black lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
                >
                  {children}
                </motion.div>

                {tags.length > 0 && (
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="mb-4 flex items-center">
                      <Tag className="mr-2 h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="sticky top-8"
                >
                  {relatedPosts.length > 0 && (
                    <div className="rounded-xl bg-gray-50 p-6">
                      <h3 className="mb-4 text-lg font-semibold text-gray-900">
                        Related Articles
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/blogs/${item.slug}`}
                            className="group block"
                          >
                            <div className="flex items-start space-x-3">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={64}
                                  height={64}
                                  className="h-16 w-16 shrink-0 rounded object-cover"
                                />
                              ) : null}
                              <div>
                                <h4 className="line-clamp-2 font-medium text-gray-900 transition-colors group-hover:text-gold-400">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {item.date}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold-400 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-white"
            >
              Ready to schedule your check-up?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white opacity-90"
            >
              Don&apos;t wait until you have a problem. Schedule your regular
              dental check-up today and take the first step toward optimal oral
              health.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-gold-400 transition duration-300 hover:bg-gray-100"
              >
                Book Appointment
              </a>
              <Link
                href="/blogs"
                className="flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-gold-400"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
