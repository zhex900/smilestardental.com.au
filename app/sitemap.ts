import type { MetadataRoute } from "next";
import { getAllBlogListCards } from "@/lib/blogs";
import { absUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absUrl("/services"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/blogs"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllBlogListCards().map((post) => {
    const parsed = Date.parse(post.date);
    const lastModified = Number.isFinite(parsed) ? new Date(parsed) : now;
    return {
      url: absUrl(`/blogs/${post.slug}`),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  return [...staticPages, ...blogPages];
}
