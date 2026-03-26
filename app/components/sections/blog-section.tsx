import { getAllBlogListCards } from "@/lib/blogs";
import { BlogSectionClient } from "./blog-section-client";

const HOMEPAGE_BLOG_LIMIT = 6;

export async function BlogSection() {
  const posts = getAllBlogListCards().slice(0, HOMEPAGE_BLOG_LIMIT);
  return <BlogSectionClient posts={posts} />;
}
