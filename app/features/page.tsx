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

          <Button className="bg-sky-300 hover:bg-sky-400 text-black font-bold px-4 py-3 rounded-[25px] shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
            Get Now
          </Button>
        </nav>
        <FeatureScroller />
      </div>
    </main>
  );
}
