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
            Orthodontic <span className="brand-yellow">care</span> &amp; examples
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

        <div className="heading-mb grid grid-cols-1 lg:grid-cols-3 items-stretch gap-5 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group block h-full w-full lg:col-span-1"
          >
            <div className="absolute inset-0 h-full w-full bg-neutral-200 bg-gold-400/[0.8] block rounded-xl" />

            <Card className="text-white bg-gradient-to-b from-gold-600 to-gold-400">
              <CardTitle className="flex items-center">
                <div className="w-16 h-16 md:w-18 md:h-18">
                  <OrthodonticsIcon />
                </div>
                <div className="text-xl md:text-2xl">Orthodontic</div>
              </CardTitle>
              <CardDescription className="flex-1 text-normal md:text-base">
                Braces and clear aligners are options for many alignment and
                bite concerns. Your dentist will advise what is appropriate for
                you, including risks, duration and costs.
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Digital planning and discussion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Comfort-focused approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Clear aligners or fixed braces</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Ongoing oral health support</span>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group h-full w-full lg:col-span-2"
          >
            <div className="flex h-full w-full flex-col justify-center rounded-xl p-3 bg-gold-600/[0.2] shadow-xl">
              <Compare
                firstImage="/images/braces-after.png"
                secondImage="/images/braces-before.png"
                firstImageClassName="object-cover object-center"
                secondImageClassname="object-cover object-center"
                className="w-full h-[300px]"
                showHandlebar={true}
                autoplay
                autoplayDuration={5000}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-slate-600 mb-2">
              3D Digital
            </div>
            <div className="text-slate-600">Scanning</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              Invisible
            </div>
            <div className="text-slate-600">Aligners</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-slate-600 mb-2">
              Advanced
            </div>
            <div className="text-slate-600">Technology</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
