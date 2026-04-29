import type { FaqItem } from "@/lib/seo";
import { Reveal } from "../ui/reveal";
import { FaqList } from "./faq-list";

type FaqSectionProps = {
  heading?: string;
  intro?: string;
  items: FaqItem[];
  id?: string;
  className?: string;
};

/**
 * Server-rendered FAQ section. Heading and intro live in initial HTML, while
 * the accordion behaviour is delegated to the `FaqList` client island. All
 * Q&A text is always present in the rendered DOM (the closed panels collapse
 * via CSS) so search engines and AI crawlers can index every question and
 * answer — and the visible content matches the `FAQPage` JSON-LD payload,
 * which is required for Google's FAQ rich result eligibility.
 */
export function FaqSection({
  heading = "Frequently Asked Questions",
  intro,
  items,
  id = "faq",
  className = "",
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className={`container mx-auto px-4 py-16 scroll-mt-28 ${className}`}
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.1}>
            <p className="mb-10 text-center text-gray-600">{intro}</p>
          </Reveal>
        ) : (
          <div className="mb-10" />
        )}

        <FaqList items={items} id={id} />
      </div>
    </section>
  );
}
