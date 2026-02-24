"use client";

import Link from "next/link";

export default function PartnersSection() {
    return (
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 pb-10">
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
                    className="inline-block w-full py-4 md:py-5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-base md:text-lg rounded-full transition-colors duration-300 touch-manipulation"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
