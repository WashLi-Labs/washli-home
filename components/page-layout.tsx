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
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                            <span>© 2026 WashLi. All rights reserved.</span>
                            <div className="flex gap-4">
                                <a href="/terms" className="hover:text-sky-600 transition-colors">Terms</a>
                                <a href="/privacy" className="hover:text-sky-600 transition-colors">Privacy</a>
                                <a href="/refund" className="hover:text-sky-600 transition-colors">Refund Policy</a>
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        </main>
    );
}
