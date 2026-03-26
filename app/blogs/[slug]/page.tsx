import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getBlogBySlug,
  getBlogSlugs,
  getRelatedPosts,
} from "@/lib/blogs";
import { BlogPostShell } from "./BlogPostShell";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog" };
  const { frontmatter } = post;
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const loaded = getBlogBySlug(slug);
  if (!loaded) notFound();

  const { frontmatter, content } = loaded;
  const relatedPosts = getRelatedPosts(frontmatter.relatedSlugs, slug);

  return (
    <BlogPostShell post={frontmatter} relatedPosts={relatedPosts}>
      <MDXRemote source={content} />
    </BlogPostShell>
  );
}
