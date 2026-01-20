"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import NavLinks from "@/components/nav-links";
import { FiUsers } from "react-icons/fi";
import { useRef, useCallback } from "react";

type TeamMember = {
  name: string;
  role: string;
  blurb: string;
};

const team: TeamMember[] = [
  {
    name: "Poornima Dunusingha",
    role: "Team Lead",
    blurb: "3+ years in fin-tech and tech innovations",
  },
  {
    name: "Jude Bevan",
    role: "Team member",
    blurb: "3+ years in fin-tech and tech innovations",
  },
  {
    name: "Randeep Rudhra",
    role: "Team member",
    blurb: "3+ years in fin-tech and tech innovations",
  },
  {
    name: "Piyumi Wickramarathna",
    role: "Team member",
    blurb: "3+ years in fin-tech and tech innovations",
  },
  {
    name: "Gihan Pandula",
    role: "Team member",
    blurb: "3+ years in fin-tech and tech innovations",
  },
  {
    name: "Peenaka Wedamulla",
    role: "Team member",
    blurb: "3+ years in fin-tech and tech innovations",
  },
];

export default function AboutPage() {
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
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with blur to match the app style */}
      <div
        className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/30" aria-hidden />

      <div className="relative z-10">
        {/* Top navigation */}
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

        {/* Hero / About copy */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
            About Wash<span className="text-sky-500">L</span>i
          </h1>
          <p className="mt-6 max-w-3xl text-gray-800 text-lg leading-relaxed text-center">
            At WashLi, we believe laundry shouldn&apos;t be a chore. Our
            innovative platform combines cutting-edge AI technology with
            professional laundry services to deliver an experience that&apos;s
            seamless, efficient, and environmentally conscious.
          </p>
        </section>

        {/* Team section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-6 md:-mt-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-2">
            Meet Our Team
          </h2>

          {/* Scroll Indicator - Mobile Only */}
          <div className="md:hidden flex items-center justify-center mb-6 gap-2 text-sm text-gray-600">
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
            <span>Swipe to see team</span>
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

          {/* Horizontal scroller like Features */}
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Team members scroller"
            className="mt-6 md:mt-10 flex w-full max-w-[95vw] xl:max-w-7xl gap-4 md:gap-6 overflow-x-auto pb-12 px-2 md:px-4 snap-x snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain focus:outline-none scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {team.map((t) => (
              <article
                key={t.name}
                data-card
                className="shrink-0 group relative flex flex-col snap-center gap-3 w-72 sm:w-80 md:w-auto md:basis-1/3 lg:basis-1/4 min-h-[280px] p-5 md:p-6 rounded-3xl bg-white/25 backdrop-blur-md border border-white/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-300/40 items-center text-center touch-manipulation"
              >
                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center ring-1 ring-sky-300/60 mt-2">
                  <FiUsers className="text-sky-500" size={36} />
                </div>
                <h3 className="mt-2 text-base md:text-lg font-semibold text-gray-900 px-2">
                  {t.name}
                </h3>
                <p className="text-sky-600 font-semibold text-sm">{t.role}</p>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed px-2">{t.blurb}</p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 group-hover:ring-white/60 transition" />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
