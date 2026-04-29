import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllBlogListCards } from "@/lib/blogs";
import { getAllServiceListCards, getServiceBySlug } from "@/lib/services-content";
import { absUrl } from "./lib/seo";

/**
 * Best-effort `lastModified` for a page, derived from the source file's mtime
 * relative to the project's `app/` directory. Falls back to the build time so
 * we never emit an invalid sitemap entry.
 *
 * The argument is intentionally a single string (not a rest spread) so that
 * Turbopack / Node File Trace can statically scope this to `app/` instead of
 * pessimistically tracing the entire project.
 */
function fileMTime(appRelativePath: string): Date {
  try {
    return fs.statSync(
      path.join(process.cwd(), "app", appRelativePath),
    ).mtime;
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
      lastModified: fileMTime("page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absUrl("/services"),
      lastModified: fileMTime("services/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/about"),
      lastModified: fileMTime("about/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absUrl("/contact"),
      lastModified: fileMTime("contact/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absUrl("/blogs"),
      lastModified: fileMTime("blogs/page.tsx"),
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

  const servicePages: MetadataRoute.Sitemap = getAllServiceListCards().map(
    (card) => {
      const detail = getServiceBySlug(card.slug);
      const lastModified = detail?.mtime ?? buildTime;
      return {
        url: absUrl(`/services/${card.slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.85,
      };
    },
  );

  return [...staticPages, ...servicePages, ...blogPages];
}
