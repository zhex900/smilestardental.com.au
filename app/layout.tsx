import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Smile Star Dental",
  description:
    "Your trusted partner for comprehensive dental care and beautiful smiles. We provide exceptional dental services with the latest technology and a caring approach.",
  keywords:
    "dental, orthodontics, braces, clear aligners, dental implants, cosmetic dentistry, Warners Bay, Newcastle",
  authors: [{ name: "Bay Arcade Dental" }],
  robots: "index, follow",
  openGraph: {
    title: "Smile Star Dental",
    description:
      "Your trusted partner for comprehensive dental care and beautiful smiles.",
    url: "https://bayarcadedental.com",
    siteName: "Smile Star Dental",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Smile Star Dental",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Star Dental",
    description:
      "Your trusted partner for comprehensive dental care and beautiful smiles.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://bayarcadedental.com" />
      </head>
      <body className={quicksand.className}>
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
