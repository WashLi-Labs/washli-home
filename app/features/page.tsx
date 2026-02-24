"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FeaturesPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?section=features");
  }, [router]);

  return <div className="h-screen w-full bg-sky-50 animate-pulse" />;
}
