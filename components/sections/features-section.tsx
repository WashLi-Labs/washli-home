"use client";

import FeatureScroller from "@/components/feature-scroller";

export default function FeaturesSection() {
    return (
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-4">
                Our Features
            </h1>
            <FeatureScroller />
        </div>
    );
}
