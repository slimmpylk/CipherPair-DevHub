export default function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-black py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-orange-500 text-center mb-8">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md">
                        <video
                            className="w-full rounded-lg"
                            controls
                            src="/videos/ServoKaappi.mp4"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-orange-500">Arduino Servo Safe</h3>
                            <p className="text-white mt-2">
                                This Arduino project uses an RFID reader, a servo motor, a buzzer,
                                an LCD display, and a 3x4 keypad to create a lock and key system.
                            </p>
                            <a
                                href="https://github.com/slimmpylk/servo-safe-arduino"
                                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md">
                        <video
                            className="w-full rounded-lg"
                            controls
                            src="/videos/MineSweeperData.mp4"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-orange-500">MineSweeper_AI</h3>
                            <p className="text-white mt-2">
                                BombSquadron is a robust AI capable of consistently solving Minesweeper puzzles.
                            </p>
                            <a
                                href="https://github.com/slimmpylk/Minesweeper_AI_BombSquadron"
                                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
