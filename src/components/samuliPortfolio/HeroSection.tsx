import Image from "next/image";
import DynamicText from "@/components/samuliPortfolio/DynamicTextForSamuli";

export default function HeroSection() {
    return (
        <header
            className=" hero-background
                    min-h-screen    // or h-screen if you want full viewport
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-16"
        >
            <div className="text-center">
                <h1
                    className="
      text-5xl sm:text-6xl font-extrabold
      bg-gradient-to-r
      from-orange-500 via-pink-600 to-orange-500
      bg-clip-text text-transparent
      mb-10
      leading-[1.25]
    "
                >
                    Slimmpylk&apos;s Portfolio
                </h1>

                {/* This wrapper holds your image and dynamic text */}
                <div>
                    <Image
                        src="/photos/Samuli.jpg"
                        alt="Profile Picture"
                        className="rounded-full border-4 border-orange-500 shadow-lg mb-8 mx-auto block"
                        width={150}
                        height={150}
                    />
                    <DynamicText/>
                </div>
            </div>
        </header>
    );
}
