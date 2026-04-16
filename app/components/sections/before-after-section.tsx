"use client";

import { Compare } from "../ui/compare";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "../ui/card";
import OrthodonticsIcon from "../icons/orthodontics.svg";

export function BeforeAfterSection() {
  return (
    <section
      id="before-after"
      className="section-px section-py scroll-mt-30 bg-primary"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center heading-mb">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-heading heading-mb"
          >
            Transforming <span className="brand-yellow">Smiles</span> Every Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-normal max-w-3xl mx-auto"
          >
            See the incredible results our patients achieve with our advanced
            orthodontic treatments
          </motion.p>
        </div>

        <div className="heading-mb grid grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-20 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group block h-full w-full"
          >
            <div className="absolute inset-0 h-full w-full bg-neutral-200 bg-gold-400/[0.8] block rounded-3xl" />

            <Card className="text-white bg-gradient-to-b from-gold-600 to-gold-400">
              <CardTitle className="flex items-center heading-mb">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-16 h-16 md:w-20 md:h-20">
                    <OrthodonticsIcon />
                  </div>
                </div>
                <div className="text-xl md:text-2xl">
                  Advanced <span className="brand-yellow">Orthodontic</span>{" "}
                  Treatment...
                </div>
              </CardTitle>
              <CardDescription className="flex-1 text-normal md:text-base">
                Our state-of-the-art braces and clear aligners can transform
                even the most complex cases, giving you the confident smile
                you've always wanted.
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Faster treatment times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">More comfortable experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Predictable results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="">Improved oral health</span>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative group p-2 h-full w-full"
          >
            <div className=" rounded-3xl p-3 bg-white/20 shadow-xl">
              <Compare
                firstImage="/images/after.png"
                secondImage="/images/before.png"
                firstImageClassName="object-cover object-center"
                secondImageClassname="object-cover object-center"
                className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                showHandlebar={true}
                autoplay={true}
                autoplayDuration={5000}
              />
              <div className=" text-center">
                <div className="flex justify-between text-md text-slate-600">
                  <span className="font-medium">Before Treatment</span>
                  <span className="font-medium">After Treatment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/20 rounded-3xl shadow-lg">
            <div className="text-3xl font-bold text-slate-600 mb-2">
              3D Digital
            </div>
            <div className="text-slate-600">Scanning</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-3xl shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              Invisible
            </div>
            <div className="text-slate-600">Aligners</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-3xl shadow-lg">
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
