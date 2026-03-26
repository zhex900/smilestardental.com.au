import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  BlogFrontmatter,
  BlogListCard,
  RelatedPostCard,
} from "./blog-types";

export type { BlogFrontmatter, BlogListCard, RelatedPostCard } from "./blog-types";

const BLOGS_DIR = path.join(process.cwd(), "app/contents/blogs");

function parsePostDate(dateStr: string): number {
  const t = Date.parse(dateStr);
  return Number.isNaN(t) ? 0 : t;
}

/** Newest first; skips invalid / missing files */
export function getAllBlogListCards(): BlogListCard[] {
  const slugs = getBlogSlugs();
  const items: BlogListCard[] = [];
  for (const slug of slugs) {
    const post = getBlogBySlug(slug);
    if (!post) continue;
    const fm = post.frontmatter;
    items.push({
      slug,
      title: fm.title,
      excerpt: fm.excerpt ?? "",
      category: fm.category,
      date: fm.date,
      image: fm.image ?? "",
      authorTitle: fm.authorTitle,
      author: { name: fm.author, avatar: fm.authorImage },
    });
  }
  items.sort(
    (a, b) => parsePostDate(b.date) - parsePostDate(a.date),
  );
  return items;
}

export function getBlogCategoriesFromPosts(posts: BlogListCard[]): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    if (p.category) set.add(p.category);
  }
  return ["All Topics", ...Array.from(set).sort()];
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(
  slug: string,
): { frontmatter: BlogFrontmatter; content: string } | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getRelatedPosts(
  relatedSlugs: string[] | undefined,
  currentSlug: string,
): RelatedPostCard[] {
  const slugs = relatedSlugs ?? [];
  const cards: RelatedPostCard[] = [];
  for (const s of slugs) {
    if (s === currentSlug) continue;
    const post = getBlogBySlug(s);
    if (!post) continue;
    cards.push({
      slug: s,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.excerpt ?? "",
      image: post.frontmatter.image ?? "",
      date: post.frontmatter.date,
    });
  }
  return cards;
}
