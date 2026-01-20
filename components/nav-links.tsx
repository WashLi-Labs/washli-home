"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface NavLinkItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  links?: NavLinkItem[];
  className?: string;
  spacingClass?: string; // Tailwind space-x-* utility override
}

// Reusable navigation links group with consistent styling.
export const NavLinks: React.FC<NavLinksProps> = ({
  links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Contact us", href: "/contact" },
  ],
  className = "hidden md:flex items-center",
  spacingClass = "space-x-25",
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className={`${className} ${spacingClass}`}>
        {links.map((l) => {
          const isActive =
            pathname === l.href || (l.href.startsWith("#") && pathname === "/");
          const base = "font-bold transition-colors text-center whitespace-nowrap";
          const activeCls = "text-sky-500 hover:text-sky-600";
          const inactiveCls = "text-black hover:text-sky-500";
          return (
            <Link
              key={l.href + l.label}
              href={l.href}
              className={`${base} ${isActive ? activeCls : inactiveCls}`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/20 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-Screen Mobile Slide-Out Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop with blur - hero section remains visible */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden transition-opacity duration-300 ease-in-out"
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white/95 backdrop-blur-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out rounded-l-2xl shadow-2xl ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {/* WashLi Logo */}
              <Link href="/" onClick={closeMenu} className="text-2xl font-bold">
                Wash<span className="text-sky-500">L</span>i
              </Link>

              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-2">
              {links.map((l) => {
                const isActive =
                  pathname === l.href || (l.href.startsWith("#") && pathname === "/");
                return (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    onClick={closeMenu}
                    className={`font-semibold text-lg py-4 px-5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-sky-500 bg-sky-50 shadow-sm"
                        : "text-gray-800 hover:bg-gray-50 hover:text-sky-500"
                    }`}
                    style={{ lineHeight: "1.5" }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Footer Section with Icon */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                {/* N Icon */}
                <div className="flex items-center justify-center w-5 h-5 bg-sky-500 text-white rounded text-xs font-bold">
                  N
                </div>
                <p className="text-sm text-gray-500">
                  © 2026 WashLi. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavLinks;
