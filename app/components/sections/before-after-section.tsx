"use client";

import { useEffect, useState } from "react";
import { Compare } from "../ui/compare";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import OrthodonticsIcon from "../icons/orthodontics.svg";
import { ButtonGradient } from "../ui/button-gradient";

export function BeforeAfterSection() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    if (!disclaimerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDisclaimerOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [disclaimerOpen]);

  return (
    <section
      id="before-after"
      className="section-px section-py scroll-mt-28 bg-primary"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center heading-mb">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-heading heading-mb"
          >
            Orthodontic <span className="brand-yellow">Care</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-normal max-w-3xl mx-auto"
          >
            An example of an orthodontic treatment outcome from an actual
            patient. Individual results vary, and all dental procedures carry
            risks. Your dentist will discuss what is suitable, achievable and
            appropriate in your case.
          </motion.p>
        </div>

        <div className="heading-mb grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Mobile: slider first; lg: copy on the left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex h-full min-h-0 w-full flex-col lg:order-1"
          >
            <Card className="h-full min-h-0 border-gold-200/25 bg-gradient-to-b from-gold-600 to-gold-400 text-white shadow-lg !shadow-black/10">
              <CardTitle className="flex items-center gap-3 text-left !text-lg md:!text-xl">
                <div className="h-12 w-12 shrink-0 md:h-14 md:w-14">
                  <OrthodonticsIcon />
                </div>
                <span>Orthodontic care</span>
              </CardTitle>
              <CardDescription className="!text-sm md:!text-[0.9375rem]">
                Braces and clear aligners can suit many alignment and bite
                concerns. Your dentist will advise what is appropriate for you,
                including risks, duration and costs.
                <ul className="mt-3 space-y-1.5">
                  {[
                    "Digital planning and discussion",
                    "Comfort-focused approach",
                    "Clear aligners or fixed braces",
                    "Ongoing oral health support",
                  ].map((line) => (
                    <li key={line} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 flex h-full min-h-0 w-full flex-col lg:order-2"
          >
            <div className="flex h-full min-h-0 flex-col rounded-xl border border-gold-400/25 bg-gold-600/15 p-4 shadow-md">
              {/* PNGs 451×166 — max-w avoids upscaling blur; ~900×332+ for larger retina-safe display */}
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
                <Compare
                  firstImage="/images/braces-after.png"
                  secondImage="/images/braces-before.png"
                  firstImageClassName="object-cover object-center"
                  secondImageClassname="object-cover object-center"
                  className="mx-auto aspect-[451/166] w-full max-w-[451px]"
                  showHandlebar={true}
                  autoplay
                  autoplayDuration={5000}
                />
              </div>
              <p className="shrink-0 pt-3 text-center text-xs text-slate-600">
                *Individual results vary.{" "}
                <button
                  type="button"
                  onClick={() => setDisclaimerOpen(true)}
                  className="underline underline-offset-2 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded"
                  aria-haspopup="dialog"
                  aria-expanded={disclaimerOpen}
                  aria-controls="before-after-disclaimer"
                >
                  Read full disclaimer
                </button>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
        >
          {[
            {
              title: "3D Digital",
              subtitle: "Scanning",
              accent: "text-slate-600",
            },
            {
              title: "Invisible",
              subtitle: "Aligners",
              accent: "text-yellow-600",
            },
            {
              title: "Advanced",
              subtitle: "Technology",
              accent: "text-slate-600",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white/20 px-4 py-4 text-center shadow-md sm:py-5"
            >
              <div
                className={`text-xl font-bold sm:text-2xl ${item.accent} mb-1`}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-600">{item.subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {disclaimerOpen && (
          <motion.div
            key="disclaimer-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setDisclaimerOpen(false)}
            aria-hidden={false}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="before-after-disclaimer-title"
              id="before-after-disclaimer"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col rounded-2xl bg-white p-5 text-slate-700 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setDisclaimerOpen(false)}
                aria-label="Close disclaimer"
                autoFocus
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              <h3
                id="before-after-disclaimer-title"
                className="shrink-0 pr-8 text-base font-semibold text-slate-900 sm:text-xl"
              >
                Before &amp; after — important information
              </h3>

              <div className="-mr-2 mt-4 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-2 text-sm leading-relaxed sm:text-[0.9375rem]">
                <p>
                  The image shown is of an actual patient who has provided
                  written consent for its use. The image has not been digitally
                  enhanced or altered, and the before and after photos are taken
                  with similar lighting, angle, framing and exposure.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-medium text-slate-900">
                      Individual results vary.
                    </span>{" "}
                    The outcome shown is specific to this patient and is not a
                    guarantee or prediction of the result you may achieve.
                  </li>
                  <li>
                    All dental and orthodontic procedures, including braces and
                    clear aligners, carry risks. Suitability, treatment options,
                    duration, costs, side effects and potential complications
                    should be discussed with a registered dental practitioner
                    before proceeding.
                  </li>
                  <li>
                    Before making any decisions, we encourage you to seek a
                    second opinion from an appropriately qualified health
                    practitioner.
                  </li>
                  <li>
                    This information is general in nature and is not a
                    substitute for personalised clinical advice based on your
                    individual circumstances.
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  Provided in accordance with the Australian Health Practitioner
                  Regulation Agency (AHPRA) Guidelines for advertising a
                  regulated health service and section 133 of the Health
                  Practitioner Regulation National Law.
                </p>
              </div>

              <div className="mt-5 flex shrink-0 justify-end">
                <ButtonGradient onClick={() => setDisclaimerOpen(false)}>
                  Got it
                </ButtonGradient>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
