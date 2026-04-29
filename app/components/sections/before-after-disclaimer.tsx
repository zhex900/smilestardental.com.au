"use client";

import { useEffect, useState } from "react";
import { Compare } from "../ui/compare";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ButtonGradient } from "../ui/button-gradient";

/**
 * Client island for the orthodontic before/after comparator. Owns:
 *   1. The interactive `Compare` slider.
 *   2. The "Read full disclaimer" modal trigger and the modal itself.
 *   3. Background scroll lock while the modal is open (incl. iOS Safari).
 *
 * Surrounding heading / supporting copy / supporting cards remain in the
 * server-rendered parent so they appear in raw SSR HTML.
 */
export function BeforeAfterDisclaimer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    if (!disclaimerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDisclaimerOpen(false);
    };

    const scrollY = window.scrollY;
    const { body, documentElement: html } = document;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [disclaimerOpen]);

  return (
    <>
      <div className="flex h-full min-h-0 flex-col rounded-xl border border-gold-400/25 bg-gold-600/15 p-4 shadow-md">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          <Compare
            firstImage="/images/braces-after.png"
            secondImage="/images/braces-before.png"
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="mx-auto aspect-[451/166] w-full max-w-[451px]"
            showHandlebar={true}
            autoplay
            autoplayDuration={5000}
          />
        </div>
        <p className="shrink-0 pt-3 text-center text-xs text-slate-600">
          *Individual results vary.{" "}
          <button
            type="button"
            onClick={() => setDisclaimerOpen(true)}
            className="underline underline-offset-2 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded"
            aria-haspopup="dialog"
            aria-expanded={disclaimerOpen}
            aria-controls="before-after-disclaimer"
          >
            Read full disclaimer
          </button>
        </p>
      </div>

      <AnimatePresence>
        {disclaimerOpen && (
          <motion.div
            key="disclaimer-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setDisclaimerOpen(false)}
            aria-hidden={false}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="before-after-disclaimer-title"
              id="before-after-disclaimer"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col rounded-2xl bg-white p-5 text-slate-700 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setDisclaimerOpen(false)}
                aria-label="Close disclaimer"
                autoFocus
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              <h3
                id="before-after-disclaimer-title"
                className="shrink-0 pr-8 text-base font-semibold text-slate-900 sm:text-xl"
              >
                Before &amp; after — important information
              </h3>

              <div className="-mr-2 mt-4 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-2 text-sm leading-relaxed sm:text-[0.9375rem]">
                <p>
                  The image shown is of an actual patient who has provided
                  written consent for its use. The image has not been
                  digitally enhanced or altered, and the before and after
                  photos are taken with similar lighting, angle, framing and
                  exposure.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-medium text-slate-900">
                      Individual results vary.
                    </span>{" "}
                    The outcome shown is specific to this patient and is not
                    a guarantee or prediction of the result you may achieve.
                  </li>
                  <li>
                    All dental and orthodontic procedures, including braces
                    and clear aligners, carry risks. Suitability, treatment
                    options, duration, costs, side effects and potential
                    complications should be discussed with a registered
                    dental practitioner before proceeding.
                  </li>
                  <li>
                    Before making any decisions, we encourage you to seek a
                    second opinion from an appropriately qualified health
                    practitioner.
                  </li>
                  <li>
                    This information is general in nature and is not a
                    substitute for personalised clinical advice based on
                    your individual circumstances.
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  Provided in accordance with the Australian Health
                  Practitioner Regulation Agency (AHPRA) Guidelines for
                  advertising a regulated health service and section 133 of
                  the Health Practitioner Regulation National Law.
                </p>
              </div>

              <div className="mt-5 flex shrink-0 justify-end">
                <ButtonGradient onClick={() => setDisclaimerOpen(false)}>
                  Got it
                </ButtonGradient>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
