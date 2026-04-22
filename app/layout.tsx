import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AnnouncementBar } from "./components/announcement-bar";
import { JsonLd } from "./components/json-ld";
import Script from "next/script";

import {
  baseMetadata,
  dentistJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "./lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <head>
        {process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
            defer
          />
        ) : null}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={dentistJsonLd()} />
      </head>
      <body>
        <Header />
        <AnnouncementBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
