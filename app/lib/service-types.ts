/**
 * Frontmatter shape for a service detail page (`app/contents/services/{slug}.mdx`).
 *
 * Treatment-related claims must remain compliant with AHPRA's advertising
 * guidelines and section 133 of the National Law:
 *   - No patient testimonials.
 *   - Treatment outcomes described as "may", "can help", "supports" rather
 *     than "guaranteed" / "fixes" / "cures".
 *   - Suitability and risks must be flagged for clinically significant
 *     procedures.
 */
export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  step: string;
  description: string;
};

export type ServiceFrontmatter = {
  /** URL slug under `/services/{slug}` — must match the filename. */
  slug: string;

  /** Concise display name (used on cards, breadcrumbs, sitemap). */
  title: string;

  /** Locality-bearing H1 for the detail page (primary keyword in copy). */
  h1: string;

  /** Short body intro (first paragraph below the hero). */
  intro: string;

  /** Existing service category from the home/services taxonomy. */
  category: string;

  /** Above-the-fold hero image (LCP candidate). Path under /public. */
  heroImage: string;

  /** Required descriptive alt text for the hero image. */
  heroImageAlt: string;

  /** Optional bullet list rendered as "Suitable for / Signs you may benefit". */
  signs?: string[];

  /** Bullet list rendered under "What we offer". */
  features?: string[];

  /** Step-by-step process timeline. */
  process?: ServiceProcessStep[];

  /** Risk / suitability statements (AHPRA-aligned). */
  considerations?: string[];

  /** Optional indicative starting price text (e.g. "from $X"). */
  priceFrom?: string;

  /** Optional FAQs specific to this service. Becomes both UI + JSON-LD. */
  faq?: ServiceFaqItem[];

  /** schema.org type — defaults to "Service" if omitted. */
  schemaType?: "Service" | "MedicalProcedure";

  /** When `schemaType === "MedicalProcedure"`, the procedure category. */
  procedureType?: string;

  /** Other service slugs to surface as related links. */
  relatedServiceSlugs?: string[];

  /** Blog slugs to surface as related reading. */
  relatedBlogSlugs?: string[];

  /** Override metadata title (defaults to `${title}` via template). */
  metaTitle?: string;

  /** Plain-language meta description (155 chars ideal). */
  metaDescription: string;

  /** Per-page keyword set (extends sitewide). */
  keywords?: string[];

  /** ISO date the page was last clinically reviewed. */
  reviewedDate?: string;

  /** Display name of the reviewing clinician. */
  reviewedBy?: string;
};

export type ServiceListCard = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  heroImage: string;
};
