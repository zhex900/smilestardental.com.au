"use client";
import { motion } from "framer-motion";

export function LogoIcon() {
  return (
    <div className="flex items-center">
      <motion.img
        src="/images/logo.png"
        alt="Logo"
        className="w-10 h-10 mt-1 hidden md:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 },
        }}
      />
      <img
        src="/images/logo-text.png"
        alt="Logo Text"
        className={`w-40 h-15`}
      />
    </div>
  );
}
