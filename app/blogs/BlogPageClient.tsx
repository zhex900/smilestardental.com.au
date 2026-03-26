"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/ui/card";
import type { BlogListCard } from "@/lib/blogs";

const ARTICLES_PER_PAGE = 6;

type BlogPageClientProps = {
  categories: string[];
  featured: BlogListCard | null;
  recentArticles: BlogListCard[];
};

export default function BlogPageClient({
  categories,
  featured,
  recentArticles,
}: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");
  const [articlePage, setArticlePage] = useState(1);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const [askDentistForm, setAskDentistForm] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleAskDentistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE),
  );
  const safePage = Math.min(articlePage, totalPages);
  const pageStart = (safePage - 1) * ARTICLES_PER_PAGE;
  const pagedArticles = filteredArticles.slice(
    pageStart,
    pageStart + ARTICLES_PER_PAGE,
  );

  useEffect(() => {
    setArticlePage(1);
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    setArticlePage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const scrollCategoryRow = (direction: "left" | "right") => {
    const el = categoryScrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="flex h-[400px] items-center bg-blue-50 bg-[url(https://images.unsplash.com/photo-1585909085111-2c2f311643af?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
            >
              Dental Health Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-lg text-gray-900"
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
                  className="w-64 rounded-full border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <div
            ref={categoryScrollRef}
            className="flex min-w-0 flex-1 space-x-4 overflow-x-auto py-2 no-scrollbar"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              onClick={() => scrollCategoryRow("left")}
              className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="h-4 w-4 text-gray-500" />
            </button>
            <button
              type="button"
              onClick={() => scrollCategoryRow("right")}
              className="ml-2 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              aria-label="Scroll categories right"
            >
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="container mx-auto px-4 py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-2xl font-bold"
          >
            Featured Article
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 overflow-hidden rounded-xl bg-gray-50"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                {featured.image ? (
                  <img
                    className="h-[400px] w-full object-cover"
                    src={featured.image}
                    alt=""
                  />
                ) : (
                  <div className="flex h-[400px] w-full items-center justify-center bg-gray-200 text-gray-500">
                    No image
                  </div>
                )}
              </div>
              <div className="w-full p-8 md:w-1/2">
                <div className="mb-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    {featured.category}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">
                    {featured.date}
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-bold">{featured.title}</h3>
                <p className="mb-6 text-gray-600">{featured.excerpt}</p>
                <div className="mb-6 flex items-center">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="mr-3 h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{featured.author.name}</p>
                    {featured.authorTitle ? (
                      <p className="text-sm text-gray-500">
                        {featured.authorTitle}
                      </p>
                    ) : null}
                  </div>
                </div>
                <Link
                  href={`/blogs/${featured.slug}`}
                  className="inline-block rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      ) : null}

      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold"
          >
            Recent Articles
          </motion.h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {filteredArticles.length > 0 ? (
                <>
                  Page {safePage} of {totalPages}
                </>
              ) : null}
            </span>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setArticlePage((p) => Math.max(1, p - 1))}
                disabled={safePage <= 1 || filteredArticles.length === 0}
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 text-gray-500" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setArticlePage((p) => Math.min(totalPages, p + 1))
                }
                disabled={
                  safePage >= totalPages || filteredArticles.length === 0
                }
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pagedArticles.map((article, index) => (
            <motion.div
              key={`${article.slug}-${safePage}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <p className="mt-8 text-center text-gray-600">
            No articles match your filters.
          </p>
        ) : null}
      </section>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl bg-blue-50"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full p-8 md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">Ask Our Dentists</h2>
              <p className="mb-6 text-gray-600">
                Have a dental question? Our team of experts is here to help.
                Submit your question and we&apos;ll feature the answer in our
                upcoming blog posts.
              </p>

              <form onSubmit={handleAskDentistSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Submit Question
                </button>
              </form>
            </div>
            <div className="relative w-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
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
