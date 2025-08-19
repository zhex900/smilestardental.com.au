"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Tag,
} from "lucide-react";
import Link from "next/link";

const blogPost = {
  title: "The Importance of Regular Dental Checkups for Long-term Health",
  excerpt:
    "Regular dental checkups are crucial for maintaining optimal oral health and preventing serious dental issues. Learn why these routine visits are essential for your overall well-being.",
  author: "Dr. Michael Brown",
  authorImage:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  date: "August 11, 2023",
  readTime: "8 min read",
  category: "Oral Health",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/ac9674656b-2956843eb45f265c872f.png",
  content: `
    <p>Regular dental checkups are a cornerstone of preventive healthcare that many people overlook. While brushing and flossing daily are essential habits, professional dental care plays a crucial role in maintaining optimal oral health and preventing serious dental issues.</p>
    
    <h2>Why Regular Checkups Matter</h2>
    <p>Dental checkups serve multiple purposes beyond just cleaning your teeth. During these visits, your dentist can:</p>
    <ul>
      <li>Detect early signs of cavities and gum disease</li>
      <li>Identify oral cancer and other serious conditions</li>
      <li>Assess your overall oral health and hygiene habits</li>
      <li>Provide personalized recommendations for improvement</li>
      <li>Address any concerns or questions you may have</li>
    </ul>
    
    <h2>What Happens During a Checkup</h2>
    <p>A comprehensive dental checkup typically includes:</p>
    <ol>
      <li><strong>Visual Examination:</strong> Your dentist will examine your teeth, gums, and mouth for any visible issues</li>
      <li><strong>X-rays:</strong> These help identify problems that aren't visible to the naked eye</li>
      <li><strong>Professional Cleaning:</strong> Removal of plaque and tartar buildup</li>
      <li><strong>Oral Cancer Screening:</strong> Checking for signs of oral cancer</li>
      <li><strong>Discussion:</strong> Reviewing your oral health and planning any necessary treatments</li>
    </ol>
    
    <h2>Prevention is Better Than Cure</h2>
    <p>Regular checkups can prevent minor issues from becoming major problems. For example, a small cavity detected early can be treated with a simple filling, while an untreated cavity may require a root canal or even tooth extraction.</p>
    
    <p>Gum disease, if caught early, can often be reversed with proper treatment and improved oral hygiene. However, advanced gum disease can lead to tooth loss and has been linked to other health issues such as heart disease and diabetes.</p>
    
    <h2>How Often Should You Visit?</h2>
    <p>Most people should visit their dentist every six months for a routine checkup and cleaning. However, some individuals may need more frequent visits based on their specific oral health needs:</p>
    <ul>
      <li>People with gum disease may need visits every 3-4 months</li>
      <li>Those with a history of cavities might benefit from more frequent checkups</li>
      <li>Individuals with certain medical conditions may require special attention</li>
    </ul>
    
    <h2>Cost-Effective in the Long Run</h2>
    <p>While some people avoid dental visits due to cost concerns, regular checkups are actually cost-effective in the long run. Preventive care is much less expensive than treating advanced dental problems. A simple cleaning and checkup costs significantly less than treating a cavity, root canal, or gum disease.</p>
    
    <h2>Conclusion</h2>
    <p>Regular dental checkups are an investment in your overall health and well-being. They help maintain your oral health, prevent serious problems, and can save you money in the long run. Don't wait until you have a problem to visit your dentist – make regular checkups a priority for a healthy, beautiful smile.</p>
  `,
  tags: ["Dental Health", "Preventive Care", "Oral Hygiene", "Dental Checkups"],
};

const relatedPosts = [
  {
    id: 1,
    title: "Understanding the Different Types of Dental Implants",
    excerpt:
      "Dental implants come in various forms and materials. Discover the different types available...",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/7f51b6f3c5-f3ca5b0e32e43b8ca2f4.png",
    date: "August 8, 2023",
    slug: "different-types-dental-implants",
  },
  {
    id: 2,
    title: "How to Maintain Your Invisalign Treatment for Best Results",
    excerpt:
      "Proper care and maintenance are essential for successful Invisalign treatment...",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e6f4b5cadc-d7df1a2b2cd0e2ab5fc3.png",
    date: "August 5, 2023",
    slug: "maintain-invisalign-treatment",
  },
  {
    id: 3,
    title: "The Truth About Teeth Whitening: Myths vs. Facts",
    excerpt:
      "There are many misconceptions about teeth whitening. We debunk common myths...",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e5ccd67cae-65b6efbd85c37a04e8d0.png",
    date: "August 2, 2023",
    slug: "teeth-whitening-myths-facts",
  },
];

interface BlogPostPageProps {
  slug: string;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 h-[300px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {blogPost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {blogPost.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{blogPost.author}</p>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPost.date}
                      <Clock className="w-4 h-4 ml-3 mr-1" />
                      {blogPost.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 text-black">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <Tag className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="font-medium text-gray-900">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <Share2 className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="font-medium text-gray-900">
                      Share this article:
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="sticky top-8"
                >
                  {/* Author Info */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src={blogPost.authorImage}
                        alt={blogPost.author}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {blogPost.author}
                        </h4>
                        <p className="text-gray-600 text-sm">Dental Expert</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Dr. Michael Brown is a leading dental professional with
                      over 15 years of experience in preventive dentistry and
                      patient education.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start space-x-3">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 rounded object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Ready to Schedule Your Checkup?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Don't wait until you have a problem. Schedule your regular dental
              checkup today and take the first step toward optimal oral health.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Appointment
              </button>
              <Link
                href="/blog"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
