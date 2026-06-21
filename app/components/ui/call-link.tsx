"use client";

import type { ComponentProps } from "react";
import { reportCallConversion, telHref } from "@/lib/gtag";

type CallLinkProps = Omit<ComponentProps<"a">, "href">;

/** Phone link that reports a Google Ads call conversion before dialling. */
export function CallLink({ onClick, ...props }: CallLinkProps) {
  return (
    <a
      href={telHref}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        reportCallConversion();
      }}
      {...props}
    />
  );
}
