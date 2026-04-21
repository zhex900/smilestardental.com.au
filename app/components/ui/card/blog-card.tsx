import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <Link
      href={`/blogs/${article.slug}`}
      aria-label={article.title}
      className="group block h-full rounded-xl bg-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col">
        <div className="relative h-48 overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gold-400 text-sm font-medium">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm">{article.date}</span>
          </div>
          <h3 className="font-bold text-xl mb-2 transition-colors group-hover:text-gold-400">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 text-card">{article.excerpt}</p>
          <div className="flex items-center justify-between mt-auto">
            {article.author && (
              <div className="flex items-center">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span className="text-sm">{article.author.name}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
