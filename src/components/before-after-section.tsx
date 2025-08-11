import React from "react";
import { Compare } from "./ui/compare";
import { motion } from "framer-motion";

export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-800 mb-6"
          >
            Transforming Smiles Every Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            See the incredible results our patients achieve with our advanced
            orthodontic treatments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Advanced Orthodontic Treatment
              </h3>
              <p className="text-slate-600 mb-6">
                Our state-of-the-art braces and clear aligners can transform
                even the most complex cases, giving you the confident smile
                you've always wanted.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Faster treatment times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">
                    More comfortable experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Predictable results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Improved oral health</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="p-4 border rounded-3xl bg-white border-slate-200 shadow-xl">
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
              <div className="mt-4 text-center">
                <div className="flex justify-between text-sm text-slate-600">
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              3D Digital
            </div>
            <div className="text-slate-600">Scanning</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              Invisible
            </div>
            <div className="text-slate-600">Aligners</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              Advanced
            </div>
            <div className="text-slate-600">Technology</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
