import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { FaqList } from "@/components/sections/faq-list";
import { bookingUrl, phoneNumber } from "@/constants";
import type {
  ServiceFrontmatter,
  ServiceFaqItem,
  ServiceListCard,
} from "@/lib/service-types";
import type { BlogListCard } from "@/lib/blog-types";

type ServicePageShellProps = {
  service: ServiceFrontmatter;
  relatedServices: ServiceListCard[];
  relatedBlogs: BlogListCard[];
  children: React.ReactNode;
};

const FAQ_ID = "service-faq";

export function ServicePageShell({
  service,
  relatedServices,
  relatedBlogs,
  children,
}: ServicePageShellProps) {
  const faq: ServiceFaqItem[] = service.faq ?? [];

  return (
    <article className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate flex h-[460px] items-center overflow-hidden bg-slate-900 text-white">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40"
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-3 text-xs uppercase tracking-widest text-gold-200/90 animate-in fade-in duration-700"
            >
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white">{service.title}</li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:150ms]">
              {service.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms]">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
              >
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Main column */}
            <div className="lg:col-span-2">
              {service.signs && service.signs.length > 0 ? (
                <Reveal className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Signs you may benefit
                  </h2>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.signs.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                          aria-hidden
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}

              <Reveal className="prose prose-slate max-w-none prose-h2:scroll-mt-28 prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-lg prose-a:text-gold-600 hover:prose-a:text-gold-700">
                {children}
              </Reveal>

              {service.process && service.process.length > 0 ? (
                <Reveal className="mt-12">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    What to expect
                  </h2>
                  <ol className="mt-5 space-y-4">
                    {service.process.map((step, index) => (
                      <li
                        key={step.step}
                        className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div
                          aria-hidden
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400 text-sm font-semibold text-white"
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">
                            {step.step}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ) : null}

              {service.considerations && service.considerations.length > 0 ? (
                <Reveal className="mt-12 rounded-2xl border border-amber-300/60 bg-amber-50/80 p-6">
                  <h2 className="text-lg font-semibold text-amber-900">
                    What to consider
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-900/90">
                    {service.considerations.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-amber-900/70">
                    All dental procedures carry risks. Suitability, treatment
                    options, duration, costs and potential complications should
                    be discussed with a registered dental practitioner.
                    Individual results vary. Information on this page is general
                    and not a substitute for personalised clinical advice.
                  </p>
                </Reveal>
              ) : null}

              {faq.length > 0 ? (
                <Reveal className="mt-12">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Frequently asked questions
                  </h2>
                  <div className="mt-5">
                    <FaqList items={faq} id={FAQ_ID} />
                  </div>
                </Reveal>
              ) : null}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {service.features && service.features.length > 0 ? (
                  <div className="rounded-2xl bg-gradient-to-br from-gold-50 to-white p-6 ring-1 ring-gold-200">
                    <h2 className="text-base font-semibold text-slate-900">
                      What we offer
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {service.priceFrom ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-base font-semibold text-slate-900">
                      Indicative pricing
                    </h2>
                    <p className="mt-2 text-2xl font-bold text-gold-600">
                      {service.priceFrom}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Final fees depend on clinical findings, materials and
                      treatment plan complexity. A written quote is provided
                      after consultation. Health-fund rebates may apply.
                    </p>
                  </div>
                ) : null}

                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-md">
                  <h2 className="text-base font-semibold">
                    Speak with our team
                  </h2>
                  <p className="mt-2 text-sm text-white/85">
                    Discuss whether this treatment is appropriate for you, along
                    with any questions on costs, risks and timing.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
                    >
                      Book online
                    </a>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      Call {phoneNumber}
                    </a>
                  </div>
                </div>

                {service.reviewedBy && service.reviewedDate ? (
                  <p className="text-xs text-slate-500">
                    Last clinically reviewed on{" "}
                    <time dateTime={service.reviewedDate}>
                      {new Date(service.reviewedDate).toLocaleDateString(
                        "en-AU",
                        { day: "numeric", month: "long", year: "numeric" },
                      )}
                    </time>{" "}
                    by {service.reviewedBy}.
                  </p>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {(relatedServices.length > 0 || relatedBlogs.length > 0) && (
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 py-14">
            <div className="mx-auto max-w-6xl">
              {relatedServices.length > 0 ? (
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Related services
                  </h2>
                  <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-gold-300 hover:bg-gold-50/40"
                        >
                          <h3 className="text-base font-semibold text-slate-900 group-hover:text-gold-700">
                            {s.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                            {s.intro}
                          </p>
                          <span className="mt-3 inline-flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700">
                            Read more
                            <ArrowRight
                              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                              aria-hidden
                            />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {relatedBlogs.length > 0 ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    From our blog
                  </h2>
                  <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {relatedBlogs.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="group flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-gold-300 hover:bg-gold-50/40"
                        >
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={84}
                              height={84}
                              className="h-20 w-20 shrink-0 rounded-lg object-cover"
                            />
                          ) : null}
                          <div>
                            <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-gold-700">
                              {post.title}
                            </h3>
                            <p className="mt-1 text-xs text-slate-500">
                              {post.date}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-gold-400 py-14 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to discuss {service.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base opacity-95">
            Book a consultation with our Warners Bay team. We&apos;ll talk
            through your goals, the options available and any risks before you
            decide.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-50"
            >
              Book consultation
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
              All services
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
