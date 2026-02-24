"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
            <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Making Your
                                <br />
                                <span className="text-sky-500">Laundry Smart</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-900 leading-relaxed max-w-xl">
                                Revolutionizing everyday laundry with AI-powered convenience -
                                connecting you to nearby laundries, predicting delivery times,
                                and keeping your clothes fresh effortlessly.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            {/* Google Play Button */}
                            <Button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-7 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto min-h-[64px]">
                                <span className="flex items-center justify-center">
                                    Get it on Google Play <FaGooglePlay className="ml-3 h-5 w-5" />
                                </span>
                            </Button>

                            {/* Apple App Store Button */}
                            <Button className="bg-slate-900 hover:bg-black text-white font-bold px-8 py-7 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto min-h-[64px]">
                                <span className="flex items-center justify-center">
                                    Download on App Store <FaAppStore className="ml-3 h-5 w-5" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className="relative animate-fade-in">
                        <div className="relative w-full max-w-2xl mx-auto md:translate-x-4 lg:translate-x-18">
                            <Image
                                src="/iphone.png"
                                alt="WashLi App Interface"
                                width={800}
                                height={600}
                                className="relative z-10 w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
