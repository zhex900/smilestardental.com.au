"use client";

import { Compare } from "../ui/compare";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "../ui/card";
import OrthodonticsIcon from "../icons/orthodontics.svg";

export function BeforeAfterSection() {
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
            Examples of orthodontic treatment outcomes — individual results
            vary; your dentist will discuss what is achievable in your case.
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
                *Results may vary between individuals.
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
            { title: "3D Digital", subtitle: "Scanning", accent: "text-slate-600" },
            { title: "Invisible", subtitle: "Aligners", accent: "text-yellow-600" },
            { title: "Advanced", subtitle: "Technology", accent: "text-slate-600" },
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
    </section>
  );
}
