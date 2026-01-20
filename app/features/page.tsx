"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/nav-links";
import FeatureScroller from "@/components/feature-scroller";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background layer with the same image, blurred 15px */}
      <div
        className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
        aria-hidden
      />
      {/* Lighten overlay to counter blur darkening */}
      <div className="absolute inset-0 bg-white/30" aria-hidden />

      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-3xl font-bold">
              Wash<span className="text-sky-500">L</span>i
            </Link>
          </div>

          <NavLinks />

          {/* Spacer to preserve navbar alignment on desktop */}
          <div className="hidden md:block min-w-[120px] md:min-w-[140px]" aria-hidden="true" />
        </nav>
        <FeatureScroller />
        
        {/* Transparent background image at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 pointer-events-none">
          <div 
            className="absolute inset-0 bg-[url('/Woman%20doing%20laundry%20in%20washing%20machine.png')] bg-contain bg-bottom bg-no-repeat opacity-30"
            aria-hidden
          />
        </div>
      </div>
    </main>
  );
}
