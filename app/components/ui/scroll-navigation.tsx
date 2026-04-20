"use client";

import { useState, useEffect } from "react";
import { ArrowDown, ArrowUpToLine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonGradient } from "./button-gradient";

interface ScrollNavigationProps {
  sections: string[];
  className?: string;
  /**
   * Extra breathing room (in px) above the section once it's scrolled into
   * view, in addition to the sticky header height read from
   * `--header-height`.
   */
  topGap?: number;
}

export function ScrollNavigation({
  sections,
  className = "",
  topGap = 0,
}: ScrollNavigationProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [shouldShowUpArrow, setShouldShowUpArrow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Remove hash from URL and scroll to top on page load/refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 100);

      // Detect which section is currently in view
      const sectionElements = sections.map((id) => document.getElementById(id));
      let currentIndex = 0;

      // Simplified detection: find the section closest to the top of the viewport
      let minDistance = Infinity;

      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);

          if (distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            currentIndex = i;
          }
        }
      }

      setCurrentSectionIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Update shouldShowUpArrow when currentSectionIndex or isAtTop changes
  useEffect(() => {
    const isAtLastSection = currentSectionIndex >= sections.length - 1;

    setShouldShowUpArrow(isAtLastSection);
  }, [currentSectionIndex, isAtTop, sections.length]);

  const getHeaderOffset = () => {
    if (typeof window === "undefined") return 0;
    const raw = getComputedStyle(document.documentElement).getPropertyValue(
      "--header-height",
    );
    const parsed = parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const scrollToSection = (index: number) => {
    const targetId = sections[index];
    const element = document.getElementById(targetId);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      getHeaderOffset() -
      topGap;

    window.scrollTo({ top, behavior: "smooth" });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const handleClick = () => {
    if (currentSectionIndex >= sections.length - 1) {
      // If at last section, go back to top
      setCurrentSectionIndex(0);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Remove hash from URL when going to top
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      // Move to next section
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      scrollToSection(nextIndex);
    }
  };

  const handleUpClick = () => {
    setCurrentSectionIndex(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <motion.div
      className={`fixed z-50 block ${className}`}
      style={{
        bottom: "16px",
        right: "16px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
    >
      <div className="flex flex-col gap-2">
        {/* Up Arrow Button - Shows on hover/touch */}
        <AnimatePresence>
          {isHovered && !isAtTop && !shouldShowUpArrow && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ButtonGradient onClick={handleUpClick} className="w-10 h-10">
                  <div className="flex items-center space-x-2">
                    <ArrowUpToLine className="w-5 h-5" />
                  </div>
                </ButtonGradient>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ButtonGradient onClick={handleClick} className="w-10 h-10">
            <div className="flex items-center space-x-2">
              {shouldShowUpArrow ? (
                <ArrowUpToLine className="w-5 h-5" />
              ) : (
                <ArrowDown className="w-5 h-5 animate-bounce" />
              )}
            </div>
          </ButtonGradient>
        </motion.div>
      </div>
    </motion.div>
  );
}
