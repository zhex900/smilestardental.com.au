"use client";

import { CSSProperties } from "react";

type MarqueeSpeed = "slow" | "normal" | "fast";

type AnnouncementBarProps = {
  /** Marquee message. */
  message?: string;
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
  className?: string;
};

const DEFAULT_MESSAGE =
  "Bay Arcade Dental is moving to a new location — scheduled to open July 2026.";

const SPEED_DURATIONS: Record<MarqueeSpeed, string> = {
  slow: "80s",
  normal: "40s",
  fast: "20s",
};

export function AnnouncementBar({
  message = DEFAULT_MESSAGE,
  speed = "slow",
  duration,
  repeatPerHalf = 4,
  className = "",
}: AnnouncementBarProps) {
  const halfItems = Array.from({ length: repeatPerHalf });
  const resolvedDuration = duration ?? SPEED_DURATIONS[speed];

  return (
    <div
      aria-label="Announcements"
      className={`relative z-[150] overflow-hidden bg-gold-400  text-white shadow-sm ${className}`}
    >
      <div
        className="flex w-max gap-8 whitespace-nowrap py-2 text-sm font-medium tracking-wide animate-scroll hover:[animation-play-state:paused]"
        style={{ "--animation-duration": resolvedDuration } as CSSProperties}
      >
        {[...halfItems, ...halfItems].map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{message}</span>
            <span aria-hidden className="opacity-70">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
