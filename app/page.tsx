"use client";

import PageLayout from "@/components/page-layout";
import { ScrollerProvider, useScroller } from "@/context/scroller-context";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import AboutSection from "@/components/sections/about-section";
import PartnersSection from "@/components/sections/partners-section";
import ContactSection from "@/components/sections/contact-section";

import { ChevronLeft, ChevronRight } from "lucide-react";

function MainScroller() {
  const { scrollRef, handleKeyDown, activeIndex, totalItems, scrollTo } = useScroller();

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Left Arrow */}
      {activeIndex > 0 && (
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-sky-600/50 hover:text-sky-600 hover:bg-white/20 transition-all duration-300 shadow-xl shadow-sky-500/5 group"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-8 h-8 transition-transform group-hover:-translate-x-1" />
        </button>
      )}

      {/* Right Arrow */}
      {activeIndex < totalItems - 1 && (
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-sky-600/50 hover:text-sky-600 hover:bg-white/20 transition-all duration-300 shadow-xl shadow-sky-500/5 group"
          aria-label="Next page"
        >
          <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
        </button>
      )}

      <div
        ref={scrollRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar focus:outline-none"
      >
        <section data-card className="min-w-full h-full snap-center overflow-hidden">
          <HeroSection />
        </section>
        <section data-card className="min-w-full h-full snap-center overflow-hidden">
          <FeaturesSection />
        </section>
        <section data-card className="min-w-full h-full snap-center overflow-hidden">
          <AboutSection />
        </section>
        <section data-card className="min-w-full h-full snap-center overflow-hidden">
          <PartnersSection />
        </section>
        <section data-card className="min-w-full h-full snap-center overflow-hidden">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-sky-50 animate-pulse" />}>
      <ScrollerProvider>
        <PageLayout showFooter={false}>
          <MainScroller />
        </PageLayout>
      </ScrollerProvider>
    </Suspense>
  );
}
