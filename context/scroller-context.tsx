"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useHorizontalScroller } from "@/hooks/use-horizontal-scroller";
import { useSearchParams } from "next/navigation";

interface ScrollerContextType {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    activeIndex: number;
    totalItems: number;
    scrollTo: (index: number) => void;
}

const ScrollerContext = createContext<ScrollerContextType | null>(null);

export function ScrollerProvider({ children }: { children: React.ReactNode }) {
    const scroller = useHorizontalScroller();
    const searchParams = useSearchParams();
    const initialSection = searchParams.get("section");

    useEffect(() => {
        if (initialSection) {
            const sections = ["home", "features", "about", "partners", "contact"];
            const index = sections.indexOf(initialSection);
            if (index !== -1) {
                // Short delay to ensure DOM is ready and scroller is attached
                const timer = setTimeout(() => {
                    scroller.scrollTo(index);
                }, 200);
                return () => clearTimeout(timer);
            }
        }
    }, [initialSection, scroller.scrollTo]);

    return (
        <ScrollerContext.Provider value={scroller}>
            {children}
        </ScrollerContext.Provider>
    );
}

export function useScroller() {
    const context = useContext(ScrollerContext);
    if (!context) {
        throw new Error("useScroller must be used within a ScrollerProvider");
    }
    return context;
}
