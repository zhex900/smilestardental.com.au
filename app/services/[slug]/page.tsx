import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_KEYWORDS,
  absUrl,
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import {
  getRelatedServices,
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services-content";
import { getBlogBySlug } from "@/lib/blogs";
import type { BlogListCard } from "@/lib/blog-types";
import { ServicePageShell } from "./ServicePageShell";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  const { frontmatter } = service;

  const title = frontmatter.metaTitle ?? frontmatter.title;
  const keywords = [
    ...(frontmatter.keywords ?? []),
    frontmatter.title,
    frontmatter.category,
    ...SITE_KEYWORDS.slice(0, 6),
  ].filter(Boolean);

  return buildMetadata({
    title,
    description: frontmatter.metaDescription,
    path: `/services/${slug}`,
    keywords,
    images: frontmatter.heroImage
      ? [
          {
            url: frontmatter.heroImage,
            alt: frontmatter.heroImageAlt,
            width: 1200,
            height: 630,
          },
        ]
      : undefined,
  });
}

function loadRelatedBlogs(slugs: string[] | undefined): BlogListCard[] {
  if (!slugs?.length) return [];
  const cards: BlogListCard[] = [];
  for (const s of slugs) {
    const post = getBlogBySlug(s);
    if (!post) continue;
    const fm = post.frontmatter;
    cards.push({
      slug: s,
      title: fm.title,
      excerpt: fm.excerpt ?? "",
      category: fm.category,
      date: fm.date,
      dateModified: fm.dateModified,
      image: fm.image ?? "",
      authorTitle: fm.authorTitle,
      author: { name: fm.author, avatar: fm.authorImage },
    });
  }
  return cards;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const loaded = getServiceBySlug(slug);
  if (!loaded) notFound();

  const { frontmatter, content } = loaded;
  const url = absUrl(`/services/${slug}`);
  const relatedServices = getRelatedServices(
    frontmatter.relatedServiceSlugs,
    slug,
  );
  const relatedBlogs = loadRelatedBlogs(frontmatter.relatedBlogSlugs);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: frontmatter.title, path: `/services/${slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          type: frontmatter.schemaType ?? "Service",
          url,
          name: frontmatter.title,
          description: frontmatter.metaDescription,
          image: frontmatter.heroImage,
          serviceType: frontmatter.category,
          procedureType: frontmatter.procedureType,
        })}
      />
      {frontmatter.faq && frontmatter.faq.length > 0 ? (
        <JsonLd data={faqPageJsonLd(frontmatter.faq)} />
      ) : null}

      <ServicePageShell
        service={frontmatter}
        relatedServices={relatedServices}
        relatedBlogs={relatedBlogs}
      >
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </ServicePageShell>
    </>
  );
}
