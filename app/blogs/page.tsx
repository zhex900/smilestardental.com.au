import {
  getAllBlogListCards,
  getBlogCategoriesFromPosts,
} from "@/lib/blogs";
import BlogPageClient from "./BlogPageClient";

export default function BlogPage() {
  const sorted = getAllBlogListCards();
  const featured = sorted[0] ?? null;
  const recentArticles = sorted.slice(1);
  const categories = getBlogCategoriesFromPosts(sorted);

  return (
    <BlogPageClient
      categories={categories}
      featured={featured}
      recentArticles={recentArticles}
    />
  );
}
