import React from "react";
import Link from "next/link";
import NavLinks from "@/components/nav-links";

export default function PartnersPage() {
    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Background image + blur layer (Matching Contact Page) */}
            <div
                className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
                aria-hidden
            />
            {/* Light overlay to soften */}
            <div className="absolute inset-0 bg-white/30" aria-hidden />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                {/* Navigation Bar */}
                <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="text-3xl font-bold text-black">
                            Wash<span className="text-sky-500">L</span>i
                        </Link>
                    </div>
                    <NavLinks />
                    {/* Spacer to preserve navbar alignment on desktop */}
                    <div className="hidden md:block min-w-[120px] md:min-w-[140px]" aria-hidden="true" />
                </nav>

                {/* content content centered */}
                <div className="flex-1 flex items-center justify-center px-4 pb-20">
                    <div className="bg-white/50 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl overflow-hidden text-center p-8 md:p-12 max-w-lg w-full">
                        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Partner With Us
                        </h1>

                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Join our ever-growing community to increase your earnings and elevate your
                            business to new heights.
                        </p>

                        <Link
                            href="/sign-up"
                            className="inline-block w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg rounded-full transition-colors duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
