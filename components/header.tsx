"use client";

import Link from "next/link";
import NavLinks from "./nav-links";

interface HeaderProps {
    centered?: boolean;
}

export default function Header({ centered = false }: HeaderProps) {
    return (
        <header className="relative z-50">
            <nav className={`w-full max-w-7xl mx-auto px-6 py-4 flex items-center ${centered ? 'justify-center' : 'justify-between'}`}>
                {/* Logo container with fixed min-width on desktop to balance the spacer and enable perfect centering for middle items */}
                <div className={`flex items-center ${!centered ? 'md:min-w-[140px]' : ''}`}>
                    <Link href="/" className="text-3xl font-bold">
                        Wash<span className="text-sky-500">L</span>i
                    </Link>
                </div>

                {!centered && (
                    <>
                        <NavLinks />
                        {/* Spacer to preserve navbar alignment on desktop */}
                        <div className="hidden md:block min-w-[120px] md:min-w-[140px]" aria-hidden="true" />
                    </>
                )}
            </nav>
        </header>
    );
}
