import Image from "next/image";
import { cn } from "@/lib/utils";

/** Shared fallback hero asset (Next.js remotePatterns already allow unsplash). */
export const PAGE_HERO_DEFAULT_IMAGE = "/images/eating-fruit.avif";

/** Default scrim: cools the photo slightly; keeps light hero text readable. */
export const PAGE_HERO_DEFAULT_OVERLAY = "bg-gray-900/30";

type PageHeroProps = {
  title: string;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  /** `left` matches blog-style copy; `center` for standard inner pages */
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  /** Extra section classes (defaults include text white → black on hover) */
  className?: string;
  /** Scrim over the image; defaults to {@link PAGE_HERO_DEFAULT_OVERLAY} */
  overlayClassName?: string;
};

/**
 * Server-renderable hero for inner pages. The H1 is plain SSR HTML (no
 * `framer-motion` wrapping) so it's available immediately for LCP and for
 * non-JS crawlers (Perplexity, ClaudeBot, etc.). The entrance "lift" is
 * achieved with CSS animations from `tailwindcss-animate`, which run
 * client-side without blocking the initial paint.
 */
export function PageHero({
  title,
  description,
  imageSrc = PAGE_HERO_DEFAULT_IMAGE,
  imageAlt = "",
  align = "left",
  titleClassName,
  descriptionClassName,
  children,
  className,
  overlayClassName,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "group relative flex h-[400px] items-center overflow-hidden bg-primary text-white transition-colors duration-500",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        aria-hidden={!imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          overlayClassName ?? PAGE_HERO_DEFAULT_OVERLAY,
        )}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div
          className={cn(
            isCenter && "text-center",
            !isCenter && "max-w-2xl",
            isCenter && "mx-auto max-w-2xl",
          )}
        >
          <h1
            className={cn(
              "mb-4 text-4xl font-bold text-inherit md:text-5xl",
              "animate-in fade-in slide-in-from-bottom-3 duration-700",
              titleClassName,
            )}
          >
            {title}
          </h1>
          {description ? (
            <div
              className={cn(
                "text-normal text-inherit",
                children ? "mb-6" : "mb-0",
                "animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:150ms]",
                descriptionClassName,
              )}
            >
              {description}
            </div>
          ) : null}
          {children ? (
            <div
              className={cn(
                "animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms]",
                isCenter && "flex justify-center",
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
