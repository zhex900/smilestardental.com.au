import Link from "next/link";
import { getAllBlogListCards } from "@/lib/blogs";
import { BlogCard } from "../ui/card";
import { ButtonGradient } from "../ui/button-gradient";
import { Reveal } from "../ui/reveal";

const HOMEPAGE_BLOG_LIMIT = 6;

/**
 * Server-rendered home-page blog teaser. The heading, intro, and full grid
 * of blog cards are all in initial HTML so AI crawlers and Google can read
 * the latest article titles without executing JS. The "View All" CTA is a
 * regular Next.js `<Link>` instead of a `useRouter().push()` — same UX, no
 * client island required.
 */
export async function BlogSection() {
  const posts = getAllBlogListCards().slice(0, HOMEPAGE_BLOG_LIMIT);

  return (
    <section id="blog" className="section-px section-py bg-primary">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="text-heading mb-4">Latest From Our Blog</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-normal">
              Stay informed about dental health and care tips
            </p>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <BlogCard article={post} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4} className="mt-12 text-center">
          <div className="mt-6 flex justify-center">
            <ButtonGradient asChild>
              <Link href="/blogs">View All Blog Posts</Link>
            </ButtonGradient>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
