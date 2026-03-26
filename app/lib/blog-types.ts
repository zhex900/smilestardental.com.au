export type BlogFrontmatter = {
  title: string;
  excerpt?: string;
  author: string;
  authorImage: string;
  authorTitle?: string;
  date: string;
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
  image: string;
  authorTitle?: string;
  author: { name: string; avatar: string };
};
