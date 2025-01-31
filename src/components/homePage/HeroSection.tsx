"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
    const [loadingButton, setLoadingButton] = useState<string | null>(null);
    const router = useRouter();

    const handleNavigation = (path: string, buttonName: string) => {
        setLoadingButton(buttonName);
        router.push(path);
    };

    return (
        <header className="hero-background text-white min-h-screen flex flex-col items-center justify-center py-16">
            {/* Title in the Middle */}
            <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-12 text-center">
                CipherPair
            </h1>

            {/* Main Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full px-4 sm:px-16">
                {/* Left Section (Samuli Info) */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/photos/Samuli.jpg"
                        alt="Samuli's Profile Picture"
                        className="rounded-full border-4 border-orange-500 shadow-[0px_0px_12px_1px_rgba(255,215,0,1)] w-[150px] h-[170px] object-cover"
                        width={150}
                        height={150}
                    />
                    <h2 className="text-2xl font-bold mt-4">Samuli Pylkkönen (CEO)</h2>
                    <p className="text-gray-300 mt-2">Junior developer & Cybersecurity Enthusiast</p>
                    <button
                        onClick={() => handleNavigation("/samuliPortfolio", "samuli")}
                        className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 flex items-center justify-center"
                        disabled={loadingButton === "samuli"}
                    >
                        {loadingButton === "samuli" ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                Loading... please wait
                            </span>
                        ) : (
                            "Samuli's Portfolio"
                        )}
                    </button>
                </div>

                {/* Right Section (Leevi's Info) */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/photos/Leevi.jpg"
                        alt="Leevi's Profile Picture"
                        className="rounded-full border-4 border-orange-500 shadow-[0px_0px_12px_1px_rgba(255,215,0,1)] w-[150px] h-[170px] object-cover"
                        width={150}
                        height={150}
                    />
                    <h2 className="text-2xl font-bold mt-4">Leevi Ekdahl (Chairman)</h2>
                    <p className="text-gray-300 mt-2">Junior developer & Disciple of the Way</p>
                    <button
                        onClick={() => handleNavigation("/leeviPortfolio", "leevi")}
                        className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 flex items-center justify-center"
                        disabled={loadingButton === "leevi"}
                    >
                        {loadingButton === "leevi" ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                Loading... please wait
                            </span>
                        ) : (
                            "Leevi's Portfolio"
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
