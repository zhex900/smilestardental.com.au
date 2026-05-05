"use client";

import { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type MarqueeSpeed = "slow" | "normal" | "fast";

type AnnouncementBarProps = {
  /** Marquee message. */
  message?: string | React.ReactNode;
  /**
   * Scroll speed preset. Ignored when `duration` is provided.
   * @default "normal"
   */
  speed?: MarqueeSpeed;
  /**
   * Explicit full loop duration. Accepts any valid CSS `<time>`
   * (e.g. "40s", "60s"). When set, this overrides `speed`.
   */
  duration?: string;
  /**
   * How many times to repeat the message inside each half of the marquee.
   * Higher values keep the bar dense on very wide viewports.
   */
  repeatPerHalf?: number;
  /**
   * When false, the message is centered and wraps; no horizontal scroll.
   * Ignored when `fixed` is true.
   * @default true
   */
  marquee?: boolean;
  /**
   * When true, always use fixed layout (wrapped, 33vh min height).
   * When false, never use fixed layout.
   * When omitted, fixed layout is used on the home page when `marquee` is true
   * (all viewport sizes). Other routes use the marquee.
   */
  fixed?: boolean;
  className?: string;
};

const DEFAULT_MESSAGE = (
  <div className="flex items-center gap-2">
    <span>
      Formerly known as{" "}
      <a
        href="https://bayarcadedental.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline hover:underline"
      >
        Bay Arcade Dental
      </a>
      , scheduled to open in June 2026
    </span>
  </div>
);

const SPEED_DURATIONS: Record<MarqueeSpeed, string> = {
  slow: "150s",
  normal: "40s",
  fast: "20s",
};

function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "";
}

export function AnnouncementBar({
  message = DEFAULT_MESSAGE,
  speed = "slow",
  duration,
  repeatPerHalf = 4,
  marquee = true,
  fixed,
  className = "",
}: AnnouncementBarProps) {
  const pathname = usePathname();
  const halfItems = Array.from({ length: repeatPerHalf });
  const resolvedDuration = duration ?? SPEED_DURATIONS[speed];

  const fixedSection = (
    <div
      aria-label="Announcements"
      className={cn(
        "relative z-[150] flex w-full min-h-[33vh] items-center justify-center overflow-hidden bg-gold-400 px-4 py-4 text-center text-xl font-medium leading-normal tracking-wide text-white shadow-sm",
        className,
      )}
    >
      <div className="max-w-4xl text-pretty break-words whitespace-normal text-xl md:text-3xl">
        {message}
      </div>
    </div>
  );

  const marqueeSection = (
    <div
      aria-label="Announcements"
      className={cn(
        "relative z-[150] overflow-hidden bg-gold-400 text-white shadow-sm",
        className,
      )}
    >
      <div
        className="flex w-max items-center gap-8 whitespace-nowrap py-2 text-sm font-medium leading-normal tracking-wide animate-scroll hover:[animation-play-state:paused]"
        style={{ "--animation-duration": resolvedDuration } as CSSProperties}
      >
        {[...halfItems, ...halfItems].map((_, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8">
            <span>{message}</span>
            <span aria-hidden className="opacity-70">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );

  if (fixed) {
    return fixedSection;
  }

  if (fixed === undefined && isHomePath(pathname) && marquee) {
    return fixedSection;
  }

  if (!marquee) {
    return (
      <div
        aria-label="Announcements"
        className={cn(
          "relative z-[150] flex w-full items-center justify-center overflow-hidden bg-gold-400 px-4 py-2 text-center text-sm font-medium leading-normal tracking-wide text-white shadow-sm",
          className,
        )}
      >
        <p className="max-w-4xl text-pretty break-words whitespace-normal">
          {message}
        </p>
      </div>
    );
  }

  return marqueeSection;
}
