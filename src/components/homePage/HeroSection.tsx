import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <header className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-16">
            {/* Title in the Middle */}
            <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-12 text-center">
                CipherPair TESTi
            </h1>

            {/* Main Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full px-4 sm:px-16">
                {/* Left Section (Your Info) */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/photos/Samuli.jpg"
                        alt="Samuli's Profile Picture"
                        className="rounded-full border-4 border-orange-500 shadow-lg"
                        width={150}
                        height={150}
                    />
                    <h2 className="text-2xl font-bold mt-4">Samuli Pylkkönen (CEO)</h2>
                    <p className="text-gray-300 mt-2">Junior Developer & Cybersecurity Enthusiast</p>
                    <Link href="/samuliPortfolio">
                        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                            Samuli&apos;s Portfolio
                        </button>
                    </Link>
                </div>

                {/* Right Section (Friend's Info) */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/photos/Friend.jpg" // Replace this with your friend's picture path
                        alt="Friend's Profile Picture"
                        className="rounded-full border-4 border-orange-500 shadow-lg"
                        width={150}
                        height={150}
                    />
                    <h2 className="text-2xl font-bold mt-4">[Friends portfolio]</h2>
                    <p className="text-gray-300 mt-2">Under Construction.</p>
                    {/*<Link href="/leeviPortfolio">*/}
                    {/*    <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">*/}
                    {/*        Friend&apos;s Portfolio*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </header>
    );
}
