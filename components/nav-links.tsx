"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScroller } from "@/context/scroller-context";

export interface NavLinkItem {
  label: string;
  href: string;
  index?: number;
}

const DEFAULT_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/", index: 0 },
  { label: "Features", href: "/features", index: 1 },
  { label: "About", href: "/about", index: 2 },
  { label: "Partners", href: "/partners", index: 3 },
  { label: "Contact us", href: "/contact", index: 4 },
];

interface NavLinksProps {
  links?: NavLinkItem[];
  className?: string;
  spacingClass?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  links = DEFAULT_LINKS,
  className = "hidden md:flex items-center",
  spacingClass = "space-x-12",
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let scroller: any = null;
  try {
    scroller = useScroller();
  } catch (e) {
    // Context might be missing on some pages
  }

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

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

  const handleLinkClick = (e: React.MouseEvent, l: NavLinkItem) => {
    if (scroller && l.index !== undefined && pathname === "/") {
      e.preventDefault();
      scroller.scrollTo(l.index);
      closeMenu();
    }
  };

  return (
    <>
      <div className={`${className} ${spacingClass}`}>
        {links.map((l) => {
          const isScrollerActive = scroller && pathname === "/";
          const isActive = isScrollerActive ? scroller.activeIndex === l.index : pathname === l.href;

          const base = "font-bold transition-colors text-center whitespace-nowrap cursor-pointer";
          const activeCls = "text-sky-500 hover:text-sky-600";
          const inactiveCls = "text-black hover:text-sky-500";

          return (
            <Link
              key={l.href + l.label}
              href={l.href}
              onClick={(e) => handleLinkClick(e, l)}
              className={`${base} ${isActive ? activeCls : inactiveCls}`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

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

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden transition-opacity duration-300 ease-in-out"
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white/95 backdrop-blur-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out rounded-l-2xl shadow-2xl translate-x-0`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/" onClick={closeMenu} className="text-2xl font-bold">
                Wash<span className="text-sky-500">L</span>i
              </Link>
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

            <nav className="flex flex-col p-6 space-y-2">
              {links.map((l) => {
                const isScrollerActive = scroller && pathname === "/";
                const isActive = isScrollerActive ? scroller.activeIndex === l.index : pathname === l.href;

                return (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l)}
                    className={`font-semibold text-lg py-4 px-5 rounded-xl transition-all duration-200 ${isActive
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

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
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
