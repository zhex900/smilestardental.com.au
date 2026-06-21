import { PHONE_URI } from "@/lib/seo";
import { bookingUrl } from "@/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CALL_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION;
const BOOKING_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKING_CONVERSION;

export const telHref = `tel:${PHONE_URI}`;

function openBooking(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}

function reportConversion(
  sendTo: string | undefined,
  onComplete: () => void,
): void {
  if (!sendTo || typeof window.gtag !== "function") {
    onComplete();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "AUD",
    event_callback: onComplete,
  });
}

/** Fire the Google Ads "click to call" conversion, then open the dialler. */
export function reportCallConversion(url: string = telHref): void {
  if (typeof window === "undefined") return;
  reportConversion(CALL_CONVERSION, () => {
    window.location.href = url;
  });
}

/** Fire the Google Ads "book appointment" conversion, then open the booking URL. */
export function reportBookingConversion(url: string = bookingUrl): void {
  if (typeof window === "undefined") return;
  reportConversion(BOOKING_CONVERSION, () => openBooking(url));
}
