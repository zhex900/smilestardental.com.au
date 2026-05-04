"use client";
import { Calendar, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ButtonGradient } from "./ui/button-gradient";
import { useEffect, useRef, useState } from "react";
import { LogoIcon } from "./ui/logo-icon";
import { bookingUrl, phoneNumber } from "@/constants";
import { BackgroundGradient } from "./ui/background-gradient";

const menuItemClassName =
  "hover:text-gold-400 transition-all hover:border-b-2 hover:border-gold-400";

const MenuItems = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link href="/services" className={menuItemClassName} onClick={onClick}>
      Services
    </Link>
    <Link href="/about" className={menuItemClassName} onClick={onClick}>
      About
    </Link>
    <Link href="/blogs" className={menuItemClassName} onClick={onClick}>
      Blog
    </Link>
    <Link href="/contact" className={menuItemClassName} onClick={onClick}>
      Contact
    </Link>
  </>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-[200] font-normal text-md bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 md:px-12">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <LogoIcon />
        </Link>

        <nav
          className={`hidden md:flex items-center space-x-8 shadow-lg p-2 px-6 rounded-xl bg-primary`}
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
              onClick={() =>
                window.open(bookingUrl, "_blank", "noopener,noreferrer")
              }
              aria-label="Book an appointment online (opens in a new tab)"
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="hidden md:block">Book an appointment</span>
              </div>
            </ButtonGradient>
          </div>
          <Button
            ref={menuButtonRef}
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
          <div
            ref={menuRef}
            className="fixed left-0 right-0 z-[250] mx-6 rounded-xl text-white shadow-lg md:hidden"
            style={{ top: "var(--header-height)" }}
          >
            <BackgroundGradient>
              <nav className="flex flex-col space-y-4  p-4">
                <MenuItems onClick={() => setIsMenuOpen(false)} />
              </nav>{" "}
            </BackgroundGradient>
          </div>
        )}
      </div>
    </header>
  );
}
