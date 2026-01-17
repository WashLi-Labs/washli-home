"use client";
import Link from "next/link";
import React from "react";
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
  return (
    <div className={`${className} ${spacingClass}`}>
      {links.map((l) => {
        const isActive =
          pathname === l.href || (l.href.startsWith("#") && pathname === "/");
        const base = "font-bold transition-colors";
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
  );
};

export default NavLinks;
