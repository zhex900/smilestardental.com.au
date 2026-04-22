"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type FeaturedArticle = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    title?: string;
    avatar: string;
  };
  slug: string;
};

type FeatureCardProps = {
  article: FeaturedArticle;
};

export function FeatureCard({ article }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-xl overflow-hidden mb-12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[400px] object-cover"
            src={article.image}
            alt={article.title}
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-gold-400 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm ml-3">{article.date}</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
          <p className="text-gray-600 mb-6">{article.excerpt}</p>
          <Link
            href={`/blogs/${article.slug}`}
            className="inline-block px-6 py-3 bg-gold-400 text-white rounded-full font-medium hover:bg-gold-400 transition-colors"
          >
            Read Full Article
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
