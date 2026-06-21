"use client";

import type { ComponentProps } from "react";
import { bookingUrl } from "@/constants";
import { reportBookingConversion } from "@/lib/gtag";

type BookLinkProps = Omit<ComponentProps<"a">, "href" | "target" | "rel">;

/** Booking link that reports a Google Ads conversion before opening the scheduler. */
export function BookLink({ onClick, ...props }: BookLinkProps) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        reportBookingConversion();
      }}
      {...props}
    />
  );
}
