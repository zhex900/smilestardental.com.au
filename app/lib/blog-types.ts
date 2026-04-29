export type BlogFrontmatter = {
  title: string;
  excerpt?: string;
  author: string;
  authorImage: string;
  authorTitle?: string;
  date: string;
  /**
   * ISO date string of last meaningful content edit. Optional — falls back to
   * `date` when omitted. Used by the sitemap and `dateModified` JSON-LD.
   */
  dateModified?: string;
  readTime: string;
  category: string;
  image?: string;
  tags?: string[];
  authorBio?: string;
  relatedSlugs?: string[];
};

export type RelatedPostCard = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

/** Shape expected by `BlogCard` on the listing page */
export type BlogListCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** Optional last-modified date (ISO). Falls back to `date` when missing. */
  dateModified?: string;
  image: string;
  authorTitle?: string;
  author: { name: string; avatar: string };
};
