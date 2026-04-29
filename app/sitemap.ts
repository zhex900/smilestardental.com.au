import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllBlogListCards } from "@/lib/blogs";
import { absUrl } from "./lib/seo";

/**
 * Best-effort `lastModified` for a page, derived from the source file's mtime
 * relative to the project root. Falls back to the build time so we never emit
 * an invalid sitemap entry.
 */
function fileMTime(...relativePathSegments: string[]): Date {
  try {
    const filePath = path.join(process.cwd(), ...relativePathSegments);
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date();
  }
}

function safeDate(raw: string | undefined, fallback: Date): Date {
  if (!raw) return fallback;
  const parsed = Date.parse(raw);
  return Number.isFinite(parsed) ? new Date(parsed) : fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absUrl("/"),
      lastModified: fileMTime("app", "page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absUrl("/services"),
      lastModified: fileMTime("app", "services", "page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/about"),
      lastModified: fileMTime("app", "about", "page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absUrl("/contact"),
      lastModified: fileMTime("app", "contact", "page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/blogs"),
      lastModified: fileMTime("app", "blogs", "page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllBlogListCards().map((post) => {
    const published = safeDate(post.date, buildTime);
    const lastModified = safeDate(post.dateModified, published);
    return {
      url: absUrl(`/blogs/${post.slug}`),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  return [...staticPages, ...blogPages];
}
