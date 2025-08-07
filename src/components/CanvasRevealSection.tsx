"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Shield, Sparkles, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CanvasRevealSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Advanced Dental Technology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Experience the future of dental care with our cutting-edge technology and innovative treatments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Digital Diagnostics"
            icon={<Search className="w-8 h-8 text-slate-600" />}
            description="Advanced 3D imaging and digital X-rays for precise diagnosis and treatment planning"
            delay={0}
          >
            <CanvasRevealEffect
              animationSpeed={1.5}
              containerClassName="bg-emerald-900/20"
              colors={[[125, 211, 252], [34, 197, 94]]}
            />
          </Card>

          <Card
            title="Laser Dentistry"
            icon={<Sparkles className="w-8 h-8 text-slate-600" />}
            description="Minimally invasive laser treatments for faster healing and reduced discomfort"
            delay={0.2}
          >
            <CanvasRevealEffect
              animationSpeed={2}
              containerClassName="bg-purple-900/20"
              colors={[[236, 72, 153], [232, 121, 249], [147, 51, 234]]}
              dotSize={2}
            />
          </Card>

          <Card
            title="Preventive Care"
            icon={<Shield className="w-8 h-8 text-slate-600" />}
            description="Comprehensive preventive treatments to maintain your oral health for life"
            delay={0.4}
          >
            <CanvasRevealEffect
              animationSpeed={1.8}
              containerClassName="bg-sky-900/20"
              colors={[[125, 211, 252], [59, 130, 246], [37, 99, 235]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
  delay?: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-slate-700/50 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl overflow-hidden bg-slate-800/50 backdrop-blur-sm"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-slate-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-slate-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-slate-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-slate-400" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <motion.div 
          className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center"
          animate={hovered ? { y: -16, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center backdrop-blur-sm">
            {icon}
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-white text-xl mt-4 font-bold"
          animate={hovered ? { y: -8, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-sm text-slate-300 mt-4 px-2"
          animate={hovered ? { y: -8, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};