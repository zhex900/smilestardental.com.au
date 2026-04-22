"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: "letters" | "words";
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  initialY?: number;
  initialOpacity?: number;
  animateY?: number;
  animateOpacity?: number;
  color?: string;
  multiline?: boolean;
  wordStyles?: Record<string, string>;
}

export default function AnimatedText({
  text,
  className = "text-4xl font-bold",
  animationType = "letters",
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.05,
  initialY = 10,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
  color,
  multiline = false,
  wordStyles = {},
}: AnimatedTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: initialY,
      opacity: initialOpacity,
    },
    visible: {
      y: animateY,
      opacity: animateOpacity,
      transition: {
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };

  const renderLetters = () => {
    if (multiline) {
      return text.split("\n").map((line, lineIndex) => (
        <div key={`line-${lineIndex}`} className="block">
          {renderSingleLineLetters(line)}
        </div>
      ));
    }
    return renderSingleLineLetters(text);
  };

  const renderSingleLineLetters = (lineText: string) => {
    const words = lineText.split(" ");

    return words.map((word, wordIndex) => (
      <span
        key={`word-${wordIndex}`}
        className="inline-block whitespace-nowrap"
      >
        {word.split("").map((char, charIndex) => {
          const customStyle = wordStyles[word] || "";
          return (
            <motion.span
              key={`letter-${wordIndex}-${charIndex}`}
              variants={itemVariants}
              className={`inline-block ${color || ""} ${customStyle}`}
            >
              {char}
            </motion.span>
          );
        })}
        {wordIndex < words.length - 1 && (
          <motion.span
            key={`space-${wordIndex}`}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {" "}
          </motion.span>
        )}
      </span>
    ));
  };

  const renderWords = () => {
    if (multiline) {
      return text.split("\n").map((line, lineIndex) => (
        <div key={`line-${lineIndex}`} className="block">
          {renderSingleLineWords(line)}
        </div>
      ));
    }
    return renderSingleLineWords(text);
  };

  const renderSingleLineWords = (lineText: string) => {
    return lineText.split(" ").map((word, index) => {
      const customStyle = wordStyles[word] || "";
      return (
        <motion.span
          key={`word-${index}`}
          variants={itemVariants}
          className={`mr-2 inline-block ${color || ""} ${customStyle}`}
        >
          {word}
        </motion.span>
      );
    });
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {animationType === "letters" ? renderLetters() : renderWords()}
    </motion.div>
  );
}
