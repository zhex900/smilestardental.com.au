"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/ui/card";

const categories = [
  "All Topics",
  "Oral Health",
  "Cosmetic Dentistry",
  "Children's Dental Care",
  "Dental Procedures",
  "Dental Technology",
];

const featuredArticle = {
  id: 1,
  title: "The Future of Dentistry: How Technology is Transforming Dental Care",
  excerpt:
    "Discover how AI-powered diagnostics, 3D printing, and virtual reality are revolutionizing dental treatments and improving patient experiences.",
  category: "Dental Technology",
  date: "June 15, 2023",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/6037874afb-0612d86f55a7f589a58f.png",
  author: {
    name: "Dr. Michael Chen",
    title: "Chief Technology Officer",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
  },
  slug: "future-of-dentistry-technology",
};

const recentArticles = [
  {
    id: 2,
    title: "5 Benefits of Professional Teeth Whitening",
    excerpt:
      "Learn why professional whitening treatments provide better, safer results than over-the-counter alternatives.",
    category: "Cosmetic Dentistry",
    date: "May 28, 2023",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c6f158e696-81dc99f9eb544526971b.png",
    author: {
      name: "Dr. Sarah Johnson",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    slug: "benefits-professional-teeth-whitening",
  },
  {
    id: 3,
    title: "Your Child's First Dental Visit: What to Expect",
    excerpt:
      "Prepare your child for a positive dental experience with these helpful tips and insights from our pediatric specialists.",
    category: "Children's Dental Care",
    date: "May 15, 2023",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/af1b3dcf26-dd3d146288250c133b86.png",
    author: {
      name: "Dr. Lisa Park",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    slug: "child-first-dental-visit",
  },
  {
    id: 4,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1681997203595-e45e06abe034?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 5,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 6,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1723187823945-bd116325da6a?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
  {
    id: 7,
    title: "Dental Implants: The Complete Guide",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Procedures",
    date: "May 3, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1699577272317-a64e1eaaa9c8?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");
  const [askDentistForm, setAskDentistForm] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleAskDentistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Ask dentist form submitted:", askDentistForm);
    setAskDentistForm({ name: "", email: "", question: "" });
  };

  const filteredArticles = recentArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Topics" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[url(https://images.unsplash.com/photo-1585909085111-2c2f311643af?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-blue-50 h-[400px] flex items-center">
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
              className="text-lg text-gray-900 mb-6"
            >
              Stay informed with the latest dental care tips, treatment
              innovations, and oral health advice from our expert team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-3 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
                <Search className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="container mx-auto px-4 overflow-x-auto py-6">
        <div className="flex space-x-4 py-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
          <div className="flex items-center">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-2">
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6"
        >
          Featured Article
        </motion.h2>
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
                src={featuredArticle.image}
                alt={featuredArticle.title}
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredArticle.category}
                </span>
                <span className="text-gray-500 text-sm ml-3">
                  {featuredArticle.date}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center mb-6">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{featuredArticle.author.name}</p>
                  <p className="text-sm text-gray-500">
                    {featuredArticle.author.title}
                  </p>
                </div>
              </div>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Articles */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold"
          >
            Recent Articles
          </motion.h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </section>

      {/* Ask the Dentist */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Ask Our Dentists</h2>
              <p className="text-gray-600 mb-6">
                Have a dental question? Our team of experts is here to help.
                Submit your question and we'll feature the answer in our
                upcoming blog posts.
              </p>

              <form onSubmit={handleAskDentistSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={askDentistForm.name}
                    onChange={(e) =>
                      setAskDentistForm({
                        ...askDentistForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={askDentistForm.email}
                    onChange={(e) =>
                      setAskDentistForm({
                        ...askDentistForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Question
                  </label>
                  <textarea
                    rows={4}
                    value={askDentistForm.question}
                    onChange={(e) =>
                      setAskDentistForm({
                        ...askDentistForm,
                        question: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/239826ec6c-b0e309cb07bff0003063.png"
                alt="friendly dentist team in discussion, professional dental office environment, smiling dental professionals"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
