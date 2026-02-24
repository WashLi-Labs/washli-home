"use client";

import Image from "next/image";
import { useHorizontalScroller } from "@/hooks/use-horizontal-scroller";
import ScrollerIndicator from "./scroller-indicator";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const features: FeatureItem[] = [
  {
    title: "AI Fabric Advisor",
    description:
      "Provides tailored wash cycle and detergent recommendations based on fabric type and clothing condition.",
    image: "/Robo-advisor working on holographic screen.png",
    alt: "AI advisor holographic interface",
  },
  {
    title: "Laundry Traffic Detection",
    description:
      "Monitor real-time demand and optimize laundry services for better efficiency.",
    image: "/Woman doing laundry in washing machine.png",
    alt: "Person loading washing machine",
  },
  {
    title: "Finder",
    description:
      "Quickly locate nearby laundries with ease using GPS-based location services.",
    image: "/geolocation app icon.png",
    alt: "Geolocation app icon",
  },
  {
    title: "Delivery Time Prediction",
    description:
      "Estimate laundry delivery times accurately through advanced machine learning models.",
    image:
      "/Task progress, Productivity tracking, Time management dashboard.png",
    alt: "Time prediction dashboard",
  },
  {
    title: "Reminders",
    description:
      "Sends personalized notifications and smart alerts based on users' laundry habits and schedules.",
    image: "/Checking notifications with earbuds in.png",
    alt: "Person checking notifications",
  },
  {
    title: "Split Bill",
    description:
      "Automatically divides bills for shared laundry usage, making cost management simple and fair.",
    image: "/bank cards stack, digital banking, payment method.png",
    alt: "Stack of bank cards",
  },
];

export default function FeatureScroller() {
  const { scrollRef, handleKeyDown, activeIndex, totalItems, scrollTo } = useHorizontalScroller();

  return (
    <section className="mt-4 flex w-full items-center justify-center py-8 md:py-10">
      <div className="w-full max-w-[95vw] xl:max-w-7xl relative">
        {/* Scroll Indicator - Mobile Only */}
        <div className="md:hidden flex items-center justify-center mb-4 gap-2 text-sm text-gray-600">
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to explore</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <div
          ref={scrollRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Features scroller"
          className="flex w-full gap-4 md:gap-6 overflow-x-auto pb-12 px-4 md:px-6 snap-x snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain focus:outline-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              data-card
              className="shrink-0 group relative flex flex-col snap-center gap-3 md:gap-4 w-72 sm:w-80 md:w-auto md:basis-1/3 lg:basis-1/4 h-[420px] md:h-112 lg:h-110 p-5 md:p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400/40 hover:ring-sky-400 transition duration-300 touch-manipulation"
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-900 text-center pt-1 min-h-[48px] flex items-center justify-center">
                {f.title}
              </h3>
              <div className="flex-1 flex items-center justify-center py-2">
                <Image
                  src={f.image}
                  alt={f.alt}
                  width={176}
                  height={176}
                  className="object-contain drop-shadow-md"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-relaxed text-center px-1">
                {f.description}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 group-hover:ring-white/60 transition" />
            </div>
          ))}
        </div>

        <ScrollerIndicator
          totalItems={totalItems}
          activeIndex={activeIndex}
          scrollTo={scrollTo}
          className="-mt-4 mb-4"
        />
      </div>
    </section>
  );
}
