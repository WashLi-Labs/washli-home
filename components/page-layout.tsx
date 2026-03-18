"use client";

import React from "react";
import Header from "./header";

interface PageLayoutProps {
    children: React.ReactNode;
    showBlurBackground?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    allowScroll?: boolean;
}

export default function PageLayout({
    children,
    showBlurBackground = true,
    showHeader = true,
    showFooter = true,
    allowScroll = false
}: PageLayoutProps) {
    return (
        <main className={`w-full relative flex flex-col ${allowScroll ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
            {/* Shared Background logic */}
            {showBlurBackground && (
                <>
                    <div
                        className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
                        aria-hidden
                    />
                    <div className="absolute inset-0 bg-white/30" aria-hidden />
                </>
            )}

            <div className={`relative z-10 w-full flex flex-col ${allowScroll ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
                {showHeader && <Header />}
                <div className={`flex-1 ${allowScroll ? 'overflow-y-visible' : 'overflow-y-hidden'}`}>
                    {children}
                </div>
                {showFooter && (
                    <footer className="relative z-10 py-6 text-center text-slate-600 text-sm border-t border-black/5 shrink-0">
                        © 2026 WashLi. All rights reserved.
                    </footer>
                )}
            </div>
        </main>
    );
}
