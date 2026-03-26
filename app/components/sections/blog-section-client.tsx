"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ButtonGradient } from "../ui/button-gradient";
import { BlogCard } from "../ui/card";
import type { BlogListCard } from "@/lib/blog-types";

type BlogSectionClientProps = {
  posts: BlogListCard[];
};

export function BlogSectionClient({ posts }: BlogSectionClientProps) {
  const router = useRouter();

  return (
    <section id="blog" className="section-px section-py bg-primary">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
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
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard article={post} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="mt-6 flex justify-center">
            <ButtonGradient onClick={() => router.push("/blogs")}>
              <span className=""> View All Blog Posts</span>
            </ButtonGradient>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
