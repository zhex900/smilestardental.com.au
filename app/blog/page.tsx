"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Mail,
  Heart,
  Baby,
  Smile,
  Users,
  Clock,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/b8be7b7c2e-cf140c84b160aa7a8cff.png",
    author: {
      name: "Dr. Robert Garcia",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    slug: "dental-implants-complete-guide",
  },
];

const popularTopics = [
  {
    id: 1,
    title: "Preventive Care",
    description:
      "Tips for maintaining optimal oral health between dental visits.",
    icon: Heart,
    articleCount: 12,
  },
  {
    id: 2,
    title: "Cosmetic Solutions",
    description: "Treatments to enhance your smile and boost confidence.",
    icon: Smile,
    articleCount: 9,
  },
  {
    id: 3,
    title: "Kids' Dental Health",
    description: "Guidance for parents on children's oral health development.",
    icon: Baby,
    articleCount: 7,
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Information about braces, aligners, and teeth straightening.",
    icon: Users,
    articleCount: 8,
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
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleAskDentistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Ask dentist form submitted:", askDentistForm);
    setAskDentistForm({ name: "", email: "", question: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", newsletterEmail);
    setNewsletterEmail("");
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
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={article.image}
                  alt={article.title}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-600 text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm">{article.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.article>
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

      {/* Popular Topics */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Popular Topics
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <topic.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {topic.description}
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  {topic.articleCount} Articles →
                </span>
              </motion.div>
            ))}
          </div>
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

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border rounded-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Stay updated with the latest dental health tips, clinic news, and
            special offers delivered straight to your inbox.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
