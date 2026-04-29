import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  ServiceFrontmatter,
  ServiceListCard,
} from "./service-types";

export type {
  ServiceFrontmatter,
  ServiceListCard,
  ServiceFaqItem,
  ServiceProcessStep,
} from "./service-types";

const SERVICES_DIR = path.join(process.cwd(), "app/contents/services");

export function getServiceSlugs(): string[] {
  if (!fs.existsSync(SERVICES_DIR)) return [];
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getServiceBySlug(
  slug: string,
):
  | { frontmatter: ServiceFrontmatter; content: string; mtime: Date }
  | null {
  const filePath = path.join(SERVICES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stat = fs.statSync(filePath);
  return {
    frontmatter: data as ServiceFrontmatter,
    content,
    mtime: stat.mtime,
  };
}

export function getAllServiceListCards(): ServiceListCard[] {
  const slugs = getServiceSlugs();
  const cards: ServiceListCard[] = [];
  for (const slug of slugs) {
    const item = getServiceBySlug(slug);
    if (!item) continue;
    cards.push({
      slug,
      title: item.frontmatter.title,
      category: item.frontmatter.category,
      intro: item.frontmatter.intro,
      heroImage: item.frontmatter.heroImage,
    });
  }
  // Stable alphabetical order so the sitemap is deterministic.
  cards.sort((a, b) => a.title.localeCompare(b.title));
  return cards;
}

export function getRelatedServices(
  relatedSlugs: string[] | undefined,
  currentSlug: string,
): ServiceListCard[] {
  const slugs = relatedSlugs ?? [];
  const cards: ServiceListCard[] = [];
  for (const s of slugs) {
    if (s === currentSlug) continue;
    const item = getServiceBySlug(s);
    if (!item) continue;
    cards.push({
      slug: s,
      title: item.frontmatter.title,
      category: item.frontmatter.category,
      intro: item.frontmatter.intro,
      heroImage: item.frontmatter.heroImage,
    });
  }
  return cards;
}
