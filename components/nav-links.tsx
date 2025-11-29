import Link from "next/link";
import React from "react";

export interface NavLinkItem {
  label: string;
  href: string;
  accent?: boolean; // for primary colored link (e.g., Home)
}

interface NavLinksProps {
  links?: NavLinkItem[];
  className?: string;
  spacingClass?: string; // Tailwind space-x-* utility override
}

// Reusable navigation links group with consistent styling.
export const NavLinks: React.FC<NavLinksProps> = ({
  links = [
    { label: "Home", href: "#", accent: true },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ],
  className = "hidden md:flex items-center",
  spacingClass = "space-x-25",
}) => {
  return (
    <div className={`${className} ${spacingClass}`}>
      {links.map((l) => (
        <Link
          key={l.href + l.label}
          href={l.href}
          className={
            l.accent
              ? "text-sky-500 font-bold hover:text-sky-600 transition-colors"
              : "text-gray-1000 font-bold hover:text-sky-500 transition-colors"
          }
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
