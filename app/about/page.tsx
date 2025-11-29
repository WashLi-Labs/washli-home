"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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

          <Button className="bg-sky-300 hover:bg-sky-400 text-black font-bold px-4 py-3 rounded-[25px] shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
            Get Now
          </Button>
        </nav>

        {/* Hero / About copy */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            About Wash<span className="text-sky-500">L</span>i
          </h1>
          <p className="mt-6 max-w-3xl text-gray-800 text-lg leading-relaxed">
            At WashLi, we believe laundry shouldn&apos;t be a chore. Our
            innovative platform combines cutting-edge AI technology with
            professional laundry services to deliver an experience that&apos;s
            seamless, efficient, and environmentally conscious.
          </p>
        </section>

        {/* Team section */}
        <section className="max-w-7xl mx-auto px-6 -mt-6 md:-mt-8 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">
            Meet Our Team
          </h2>

          {/* Horizontal scroller like Features */}
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Team members scroller"
            className="mt-10 flex w-full max-w-[95vw] xl:max-w-7xl gap-6 overflow-x-auto pb-12 px-1 md:px-2 snap-x snap-mandatory no-scrollbar scroll-smooth touch-pan-x overscroll-x-contain focus:outline-none"
          >
            {team.map((t) => (
              <article
                key={t.name}
                data-card
                className="shrink-0 group relative flex flex-col snap-center gap-3 w-72 md:w-80 h-64 p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-300/40 items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center ring-1 ring-sky-300/60">
                  <FiUsers className="text-sky-500" size={36} />
                </div>
                <h3 className="mt-2 text-base md:text-lg font-semibold text-gray-900">
                  {t.name}
                </h3>
                <p className="text-sky-600 font-semibold text-sm">{t.role}</p>
                <p className="text-gray-700 text-xs md:text-sm">{t.blurb}</p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 group-hover:ring-white/60 transition" />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
