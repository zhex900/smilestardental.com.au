import React from "react";
import Link from "next/link";

export interface BlogPageCardAuthor {
  name: string;
  avatar: string;
}

export interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: BlogPageCardAuthor;
  slug: string;
}

export function BlogCard({ article }: { article: BlogCardProps }) {
  return (
    <article className="h-full rounded-lg bg-white overflow-hidden shadow-lg transition-shadow flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={article.image}
          alt={article.title}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-blue-600 text-sm font-medium">
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">{article.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 text-card">{article.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          {article.author && (
            <div className="flex items-center">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm">{article.author.name}</span>
            </div>
          )}
          <Link
            href={`/blogs/${article.slug}`}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
