"use client";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { LogoIcon } from "./logo-icon";

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent relative">
      <Link href="/" className="flex items-center space-x-3">
        <LogoIcon />
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/services"
          className="text-slate-700 hover:text-slate-900 font-medium"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-slate-700 hover:text-slate-900 font-medium"
        >
          About Us
        </Link>
        <Link
          href="/blog"
          className="text-slate-700 hover:text-slate-900 font-medium"
        >
          Blog
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-600">
          <Phone className="w-4 h-4" />
          <a href="tel:0249488589">02 4948 8589</a>
        </div>
        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Button onClick={() => router.push("/contact")}>Contact Us</Button>
        </BackgroundGradient>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mx-6 mt-2 p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-slate-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
