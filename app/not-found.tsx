import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { phoneNumber, bookingUrl } from "./constants";

export const metadata: Metadata = buildMetadata({
  title: "Page not found",
  description:
    "We couldn't find that page. Browse our dental services, blog, or contact Smile Star Dental in Warners Bay.",
  path: "/404",
  noIndex: true,
});

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Dental services" },
  { href: "/about", label: "About Smile Star Dental" },
  { href: "/blogs", label: "Dental health blog" },
  { href: "/contact", label: "Contact & opening hours" },
];

export default function NotFound() {
  return (
    <section className="section-px section-py min-h-[70vh] bg-gradient-to-b from-white to-gold-50/40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gold-500">
          404 — page not found
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          The page you were looking for may have moved or no longer exists.
          Here are some popular places to continue.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-gold-400 hover:text-gold-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-gold-600"
          >
            Book an appointment
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-gold-400 hover:text-gold-600"
          >
            Call {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
