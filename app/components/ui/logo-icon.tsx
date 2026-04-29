"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export function LogoIcon() {
  return (
    <div className="flex items-center -mt-[15px]">
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
      <div className="flex flex-col items-end justify-center">
        <Image
          src="/images/logo-text.png"
          alt="Logo Text"
          className={`w-40 h-15`}
          width={160}
          height={60}
        />
        <div className="-mt-[5px] text-[0.625rem] leading-none text-gold-500">
          Warners Bay
        </div>
      </div>
    </div>
  );
}
