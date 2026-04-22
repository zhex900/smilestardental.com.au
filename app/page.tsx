import type { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  BeforeAfterSection,
  TestimonialsSection,
  FaqSection,
} from "./components/sections";
import { BlogSection } from "./components/sections/blog-section";
import { ScrollNavigation } from "./components/ui/scroll-navigation";
import { JsonLd } from "./components/json-ld";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  type FaqItem,
} from "./lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Smile Star Dental | Warners Bay & Newcastle Family Dentists",
  description:
    "Welcome to Smile Star Dental (formerly Bay Arcade Dental) in Warners Bay. Gentle family, cosmetic and restorative dentistry — implants, Invisalign, whitening, crowns, pediatric care and more.",
  path: "/",
  keywords: [
    "Smile Star Dental",
    "Bay Arcade Dental",
    "dentist Warners Bay",
    "dentist Newcastle",
    "family dentist Lake Macquarie",
    "cosmetic dentist Newcastle",
    "Invisalign Warners Bay",
    "dental implants Newcastle",
    "teeth whitening Warners Bay",
    "pediatric dentist Warners Bay",
    "emergency dentist Warners Bay",
  ],
});

const FAQS: FaqItem[] = [
  {
    question: "Where is Smile Star Dental located?",
    answer:
      "Smile Star Dental (formerly Bay Arcade Dental) is located at 4/12 King St, Warners Bay NSW 2282 — a short drive from Newcastle and central to Lake Macquarie.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 9:00 am to 5:00 pm. We are closed on weekends and public holidays. For after-hours emergencies please call us and leave a message; we'll return your call as soon as possible.",
  },
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes, we welcome new patients of all ages — from children to seniors. New patients can book an initial consultation online through our contact form or by calling 02 4948 8589.",
  },
  {
    question: "Do you offer Invisalign and orthodontic treatment?",
    answer:
      "Yes. We provide Invisalign clear aligners as well as traditional orthodontic options for teens and adults. Treatment begins with a digital scan and a personalised plan, so you know exactly what to expect before starting.",
  },
  {
    question: "How much do dental implants cost?",
    answer:
      "Dental implant pricing varies based on the number of teeth replaced, whether bone grafting is needed, and the type of crown used. We provide a detailed written quote after your consultation and help you understand any health-fund rebates that may apply.",
  },
  {
    question: "Do you see children and offer paediatric dentistry?",
    answer:
      "Absolutely. We offer gentle paediatric dentistry including checkups, fluoride, fissure sealants, and airway development assessments for children. We take time to build trust with young patients so appointments are a positive experience.",
  },
  {
    question: "Do you offer Botox for teeth grinding (bruxism)?",
    answer:
      "Yes. Targeted Botox injections into the jaw (masseter) muscles can significantly reduce clenching, grinding and related headaches. The treatment takes about 15 minutes in the chair and lasts around 3–4 months.",
  },
  {
    question: "Do you accept private health insurance?",
    answer:
      "Yes. We accept all major private health funds and have HICAPS on-site for instant rebates at the time of treatment. We also accept the Child Dental Benefits Schedule (CDBS) for eligible children.",
  },
  {
    question: "Do you see nervous or anxious patients?",
    answer:
      "We treat many patients who feel anxious about dental visits. Options include detailed pre-treatment conversations, stop signals during procedures, Penthrox (the 'green whistle') inhaled pain relief and longer appointments so nothing feels rushed.",
  },
  {
    question: "Is the practice wheelchair accessible and is parking available?",
    answer:
      "Yes. The practice has step-free access and our practice is wheelchair accessible. Free on-site parking is available.",
  },
];

export default async function HomePage() {
  const sections = [
    "hero",
    "testimonials",
    "services",
    "before-after",
    "blog",
    "faq",
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <ScrollNavigation sections={sections} />

      <HeroSection />

      <TestimonialsSection />

      <ServicesSection />

      <BeforeAfterSection />

      <BlogSection />

      <FaqSection
        items={FAQS}
        intro="Answers to common questions about our practice, treatments, bookings and costs."
      />
    </>
  );
}
