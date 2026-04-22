import type { Metadata } from "next";
import {
  getAllBlogListCards,
  getBlogCategoriesFromPosts,
} from "@/lib/blogs";
import BlogPageClient from "./BlogPageClient";
import { JsonLd } from "../components/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dental Health Blog — Tips from Warners Bay Dentists",
  description:
    "Expert dental advice, oral health tips and the latest cosmetic and restorative dentistry insights from the team at Smile Star Dental in Warners Bay.",
  path: "/blogs",
  keywords: [
    "dental blog",
    "oral health tips",
    "dental advice Warners Bay",
    "Newcastle dental health",
    "cosmetic dentistry blog",
    "Invisalign advice",
    "teeth whitening tips",
    "children dental care blog",
  ],
});

export default function BlogPage() {
  const sorted = getAllBlogListCards();
  const featured = sorted[0] ?? null;
  const recentArticles = sorted.slice(1);
  const categories = getBlogCategoriesFromPosts(sorted);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blogs" },
        ])}
      />
      <BlogPageClient
        categories={categories}
        featured={featured}
        recentArticles={recentArticles}
      />
    </>
  );
}
