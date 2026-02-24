"use client";

import Image from "next/image";
import { useHorizontalScroller } from "@/hooks/use-horizontal-scroller";
import ScrollerIndicator from "@/components/scroller-indicator";

type TeamMember = {
    name: string;
    role: string;
    designation: string;
    blurb: string;
    image: string;
};

const team: TeamMember[] = [
    {
        name: "Poornima Dunusingha",
        role: "Team Lead",
        designation: "Software Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/PoornimaDunusinghe.png",
    },
    {
        name: "Jude Bevan",
        role: "Team member",
        designation: "DevOps and R&D Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/JudeBevan.png",
    },
    {
        name: "Randeep Rudhra",
        role: "Team member",
        designation: "DevOps & Middleware Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/RandeepRudra.png",
    },
    {
        name: "Piyumi Wickramarathna",
        role: "Team member",
        designation: "QA Automation Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/PiyumiKavindya.png",
    },
    {
        name: "Gihan Pandula",
        role: "Team member",
        designation: "DevOps and R&D Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/GihanPandula.png",
    },
    {
        name: "Peenaka Wedamulla",
        role: "Team member",
        designation: "QA Automation and R&D Engineer",
        blurb: "3+ years in fin-tech and tech innovations",
        image: "/team/PeenakaWedamulla.png",
    },
];

export default function AboutSection() {
    const { scrollRef, handleKeyDown, activeIndex, totalItems, scrollTo } = useHorizontalScroller();

    return (
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
            {/* Hero / About copy */}
            <section className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col items-center">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
                    About Wash<span className="text-sky-500">L</span>i
                </h1>
                <p className="mt-4 max-w-3xl text-gray-800 text-base md:text-lg leading-relaxed text-center">
                    At WashLi, we believe laundry shouldn&apos;t be a chore. Our
                    innovative platform combines cutting-edge AI technology with
                    professional laundry services to deliver an experience that&apos;s
                    seamless, efficient, and environmentally conscious.
                </p>
            </section>

            {/* Team section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-2 md:-mt-4 relative">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                    Meet Our Team
                </h2>

                {/* Horizontal scroller like Features */}
                <div
                    ref={scrollRef}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="region"
                    aria-label="Team members scroller"
                    className="mt-6 md:mt-10 flex w-full max-w-[95vw] xl:max-w-7xl gap-4 md:gap-6 overflow-x-auto pb-12 px-2 md:px-4 snap-x snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain focus:outline-none"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {team.map((t) => (
                        <article
                            key={t.name}
                            data-card
                            className="shrink-0 group relative flex flex-col snap-center gap-3 w-72 sm:w-80 md:w-auto md:basis-1/3 lg:basis-1/4 min-h-[280px] p-5 md:p-6 rounded-3xl bg-white/25 backdrop-blur-md border border-white/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-300/40 items-center text-center touch-manipulation"
                        >
                            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-sky-300/60 mt-2">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-2 text-base md:text-lg font-semibold text-gray-900 px-2">
                                {t.name}
                            </h3>
                            <p className="text-sky-600 font-semibold text-sm">{t.role}</p>
                            <p className="text-gray-800 font-medium text-xs">{t.designation}</p>
                            <p className="text-gray-600 text-[10px] leading-tight px-2">{t.blurb}</p>
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 group-hover:ring-white/60 transition" />
                        </article>
                    ))}
                </div>

                <ScrollerIndicator
                    totalItems={totalItems}
                    activeIndex={activeIndex}
                    scrollTo={scrollTo}
                    className="mb-8"
                />
            </section>
        </div>
    );
}
