"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PartnersPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/?section=partners");
    }, [router]);

    return <div className="h-screen w-full bg-sky-50 animate-pulse" />;
}
