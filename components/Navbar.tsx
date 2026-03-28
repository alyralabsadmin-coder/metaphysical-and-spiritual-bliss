"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-bg-white/95 backdrop-blur-[20px] backdrop-saturate-[1.3] border-b border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "bg-transparent md:bg-[rgba(15,18,32,0.3)] md:backdrop-blur-[8px]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-2 md:px-10 lg:px-16 xl:px-20 flex items-center justify-start md:justify-between h-10 md:h-14">
          {/* Logo */}
          <Link
            href="/"
            className={`font-heading italic font-medium tracking-[0.02em] transition-colors duration-300 hidden md:block text-[16px] lg:text-[20px] xl:text-[22px] whitespace-nowrap ${
              scrolled ? "text-text-heading" : "text-white"
            }`}
          >
            <span className="hidden lg:inline">Metaphysical & Spiritual Bliss</span>
            <span className="lg:hidden">M&S Bliss</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body font-normal text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.04em] uppercase transition-colors duration-300 whitespace-nowrap ${
                  scrolled ? "text-text-body" : "text-white/90"
                } ${
                  isActive(link.href)
                    ? "!text-accent-primary"
                    : "hover:text-accent-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary" />
                )}
              </Link>
            ))}
            <CTAButton
              href="/contact"
              variant={scrolled ? "primary" : "ghost"}
              small
            >
              Book a Reading
            </CTAButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-3 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-text-heading" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-text-heading" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-bg-white/95 backdrop-blur-[24px] flex flex-col items-center justify-center gap-8 pt-20">
          <CTAButton href="/contact" variant="primary">
            Book a Reading
          </CTAButton>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-body font-normal text-lg tracking-[0.04em] uppercase transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-accent-primary"
                  : "text-text-body hover:text-accent-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
