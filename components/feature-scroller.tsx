"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const el = scrollRef.current;
      if (!el) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const firstCard = el.querySelector<HTMLElement>("[data-card]");
        const style = getComputedStyle(el);
        const gapPx =
          parseFloat(style.columnGap || "0") ||
          parseFloat(style.gap || "0") ||
          0;
        const cardWidth = firstCard
          ? firstCard.offsetWidth
          : Math.max(280, el.clientWidth / 4);
        const delta = cardWidth + gapPx;
        el.scrollBy({
          left: e.key === "ArrowRight" ? delta : -delta,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <section className="mt-4 flex w-full items-center justify-center py-10">
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Features scroller"
        className="flex w-full max-w-[95vw] xl:max-w-7xl gap-6 overflow-x-auto pb-12 px-6 md:px-10 snap-x snap-mandatory no-scrollbar scroll-smooth touch-pan-x overscroll-x-contain focus:outline-none"
      >
        {features.map((f) => (
          <div
            key={f.title}
            data-card
            className="shrink-0 group relative flex flex-col snap-center gap-4 w-72 md:w-auto md:basis-1/3 lg:basis-1/4 h-96 md:h-112 lg:h-110 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400/40 hover:ring-sky-400 transition duration-300"
          >
            <h3 className="text-lg text-gray-1000 text-center pt-1">
              {f.title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={f.image}
                alt={f.alt}
                width={176}
                height={176}
                className="object-contain drop-shadow-md"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 leading-relaxed text-center">
              {f.description}
            </p>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 group-hover:ring-white/60 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
