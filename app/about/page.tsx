"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?section=about");
  }, [router]);

  return <div className="h-screen w-full bg-sky-50 animate-pulse" />;
}
