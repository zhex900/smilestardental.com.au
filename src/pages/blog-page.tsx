"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Tag,
  Eye
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Regular Dental Checkups for Long-term Health",
    excerpt: "Regular dental checkups are crucial for maintaining optimal oral health and preventing serious dental issues. Learn why these routine visits are essential for your overall well-being.",
    author: "Dr. Michael Brown",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    date: "August 11, 2023",
    readTime: "8 min read",
    category: "Oral Health",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ac9674656b-2956843eb45f265c872f.png",
    views: "2.4k",
    slug: "importance-regular-dental-checkups"
  },
  {
    id: 2,
    title: "Understanding the Different Types of Dental Implants",
    excerpt: "Dental implants come in various forms and materials. Discover the different types available and which might be best suited for your specific dental needs.",
    author: "Dr. Sarah Johnson",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    date: "August 8, 2023",
    readTime: "6 min read",
    category: "Dental Implants",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7f51b6f3c5-f3ca5b0e32e43b8ca2f4.png",
    views: "1.8k",
    slug: "different-types-dental-implants"
  },
  {
    id: 3,
    title: "How to Maintain Your Invisalign Treatment for Best Results",
    excerpt: "Proper care and maintenance are essential for successful Invisalign treatment. Get expert tips on how to ensure your treatment progresses smoothly.",
    author: "Dr. Emily Chen",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    date: "August 5, 2023",
    readTime: "5 min read",
    category: "Orthodontics",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e6f4b5cadc-d7df1a2b2cd0e2ab5fc3.png",
    views: "3.1k",
    slug: "maintain-invisalign-treatment"
  },
  {
    id: 4,
    title: "The Truth About Teeth Whitening: Myths vs. Facts",
    excerpt: "There are many misconceptions about teeth whitening. We debunk common myths and provide accurate information about professional whitening treatments.",
    author: "Dr. David Kim",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    date: "August 2, 2023",
    readTime: "7 min read",
    category: "Cosmetic Dentistry",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e5ccd67cae-65b6efbd85c37a04e8d0.png",
    views: "2.7k",
    slug: "teeth-whitening-myths-facts"
  },
  {
    id: 5,
    title: "Pediatric Dentistry: Making Dental Visits Fun for Kids",
    excerpt: "Creating positive dental experiences for children is crucial for their long-term oral health. Learn how we make dental visits enjoyable for young patients.",
    author: "Dr. Sarah Johnson",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    date: "July 30, 2023",
    readTime: "4 min read",
    category: "Pediatric Dentistry",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f8c95d3baa-1d0d2a5f2e8dfd20b5b3.png",
    views: "1.5k",
    slug: "pediatric-dentistry-fun-kids"
  },
  {
    id: 6,
    title: "Emergency Dental Care: What to Do When You Need Immediate Help",
    excerpt: "Dental emergencies can happen at any time. Learn what constitutes a dental emergency and the steps you should take to get immediate care.",
    author: "Dr. Michael Rodriguez",
    authorImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    date: "July 27, 2023",
    readTime: "6 min read",
    category: "Emergency Care",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6a7b4c2c15-0aee1b6c3ede6f75af0d.png",
    views: "2.9k",
    slug: "emergency-dental-care-immediate-help"
  }
];

const categories = [
  "All Posts",
  "Oral Health",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Emergency Care"
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 h-[400px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Dental Health Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6"
            >
              Stay informed with the latest dental care tips, treatment innovations, and oral health advice from our expert team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src={filteredPosts[0].authorImage}
                      alt={filteredPosts[0].author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{filteredPosts[0].author}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {filteredPosts[0].date}
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${filteredPosts[0].slug}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                        <Clock className="w-3 h-3 ml-2 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Stay Updated with Dental Health Tips
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Subscribe to our newsletter for the latest dental care tips, treatment updates, and oral health advice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
