"use client";

import React from "react";

interface ScrollerIndicatorProps {
    totalItems: number;
    activeIndex: number;
    scrollTo: (index: number) => void;
    className?: string;
}

export default function ScrollerIndicator({
    totalItems,
    activeIndex,
    scrollTo,
    className = "",
}: ScrollerIndicatorProps) {
    if (totalItems <= 1) return null;

    return (
        <div className={`flex items-center justify-center gap-2 mt-4 ${className}`}>
            {Array.from({ length: totalItems }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                            ? "w-8 bg-sky-500 shadow-lg shadow-sky-400/30"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
    );
}
