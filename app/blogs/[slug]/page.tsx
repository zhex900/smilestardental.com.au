import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getBlogBySlug,
  getBlogSlugs,
  getRelatedPosts,
} from "@/lib/blogs";
import { BlogPostShell } from "./BlogPostShell";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_KEYWORDS,
  absUrl,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

function toIsoDate(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const ts = Date.parse(raw);
  return Number.isFinite(ts) ? new Date(ts).toISOString() : undefined;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog" };
  const { frontmatter } = post;

  const title = frontmatter.title;
  const description =
    frontmatter.excerpt ??
    `${frontmatter.title} — dental insights from the Smile Star Dental team.`;
  const published = toIsoDate(frontmatter.date);
  const keywords = [
    ...(frontmatter.tags ?? []),
    frontmatter.category,
    ...SITE_KEYWORDS.slice(0, 8),
  ].filter(Boolean);

  const base = buildMetadata({
    title,
    description,
    path: `/blogs/${slug}`,
    keywords,
    type: "article",
    images: frontmatter.image
      ? [
          {
            url: frontmatter.image,
            alt: frontmatter.title,
            width: 1200,
            height: 630,
          },
        ]
      : undefined,
  });

  return {
    ...base,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: published,
      modifiedTime: published,
      authors: [frontmatter.author],
      section: frontmatter.category,
      tags: frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const loaded = getBlogBySlug(slug);
  if (!loaded) notFound();

  const { frontmatter, content } = loaded;
  const relatedPosts = getRelatedPosts(frontmatter.relatedSlugs, slug);
  const url = absUrl(`/blogs/${slug}`);
  const published = toIsoDate(frontmatter.date);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: frontmatter.title,
          description: frontmatter.excerpt,
          url,
          image: frontmatter.image,
          datePublished: published,
          author: frontmatter.author,
          keywords: frontmatter.tags,
          category: frontmatter.category,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blogs" },
          { name: frontmatter.title, path: `/blogs/${slug}` },
        ])}
      />
      <BlogPostShell post={frontmatter} relatedPosts={relatedPosts}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </BlogPostShell>
    </>
  );
}
