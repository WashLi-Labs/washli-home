"use client";

import Image from "next/image";
// Removed unused Link import after extracting NavLinks component.
import { Button } from "@/components/ui/button";
// Removed unused lucide-react icons after replacing download buttons.
import { FaGooglePlay, FaApple, FaAppStore } from "react-icons/fa";
import NavLinks from "@/components/nav-links";

export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="text-3xl font-bold">
              Wash<span className="text-sky-500">L</span>i
            </a>
          </div>

          <NavLinks />

          {/* Spacer to preserve navbar alignment on desktop */}
          <div className="hidden md:block min-w-[120px] md:min-w-[140px]" aria-hidden="true" />
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Making Your
                  <br />
                  Laundry Smart
                </h2>
                <p className="text-base sm:text-lg text-gray-1000 leading-relaxed max-w-xl">
                  Revolutionizing everyday laundry with AI-powered convenience -
                  connecting you to nearby laundries, predicting delivery times,
                  and keeping your clothes fresh effortlessly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                {/* Google Play Button */}
                <Button className="bg-sky-300 hover:bg-sky-400 text-black font-bold px-6 py-6 rounded-[25px] shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto min-h-[56px]">
                  <span className="flex items-center justify-center text-black font-bold hover:text-black">
                    Download Now <FaGooglePlay className="ml-3 h-5 w-5" />
                  </span>
                </Button>

                {/* Apple App Store Button */}
                <Button className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-6 rounded-[25px] shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto min-h-[56px]">
                  <span className="flex items-center justify-center">
                    Download Now <FaAppStore className="ml-3 h-5 w-5" />
                  </span>
                </Button>
              </div>
            </div>

            <div className="relative">
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
    </main>
  );
}
