"use client";
import { Calendar, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonGradient } from "./ui/button-gradient";
import { useState, useEffect } from "react";
import { LogoIcon } from "./logo-icon";
import { backgroundColor, phoneNumber } from "@/constants";

const menuItemClassName =
  "hover:text-gray-500 transition-all hover:border-b-2 hover:border-cyan-500";

const MenuItems = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link href="/services" className={menuItemClassName} onClick={onClick}>
      Services
    </Link>
    <Link href="/about" className={menuItemClassName} onClick={onClick}>
      About Us
    </Link>
    <Link href="/blog" className={menuItemClassName} onClick={onClick}>
      Blog
    </Link>
  </>
);

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-gray-800 font-medium text-md px-6 py-4 md:px-12 sticky top-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <LogoIcon />
        </Link>

        <nav
          className={`hidden md:flex items-center space-x-8 shadow-lg p-2 px-6 rounded-xl ${backgroundColor}`}
        >
          <MenuItems />
        </nav>

        <div className="flex items-center space-x-4">
          <div className="sm:flex items-center space-x-2">
            <ButtonGradient
              className="w-10 h-10 md:w-auto md:h-auto"
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              aria-label={`Call ${phoneNumber}`}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href={`tel:${phoneNumber}`} className="hidden md:block">
                  {phoneNumber}
                </a>
              </div>
            </ButtonGradient>
          </div>
          <div className="sm:flex items-center space-x-2 hidden">
            <ButtonGradient
              className="w-10 h-10 md:w-auto md:h-auto"
              onClick={() => router.push("/contact")}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="hidden md:block">Book an appointment</span>
              </div>
            </ButtonGradient>
          </div>
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
          <div className="absolute top-full left-0 right-0 text-white bg-gray-800/100 z-10 shadow-lg rounded-lg mx-6 mt-2 p-4 md:hidden">
            <nav className="flex flex-col space-y-4 ">
              <MenuItems onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
