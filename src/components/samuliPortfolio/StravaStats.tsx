import React from "react";

type Workout = {
    name: string;
    distance: string;
    movingTime: string;
    totalElevationGain: string;
    type: string;
    date: string;
};

type WeeklySummary = {
    totalDistance: string;
    totalTime: string;
    totalElevationGain: string;
};

// Fetch the latest workout data
async function fetchLatestWorkout(): Promise<Workout | null> {
    try {
        const response = await fetch(
            "https://strava-rest-api-f6acfrawc0bbg7a2.northeurope-01.azurewebsites.net/api/strava/latest-workout",
            { cache: "no-store" }
        );
        if (!response.ok) throw new Error("Failed to fetch latest workout");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching latest workout:", error);
        return null;
    }
}

// Fetch the weekly summary data
async function fetchWeeklySummary(): Promise<WeeklySummary | null> {
    try {
        const response = await fetch(
            "https://strava-rest-api-f6acfrawc0bbg7a2.northeurope-01.azurewebsites.net/api/strava/last-week-summary",
            { cache: "no-store" }
        );
        if (!response.ok) throw new Error("Failed to fetch weekly summary");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weekly summary:", error);
        return null;
    }
}

const StravaStats = async () => {
    // Fetch data on the server
    const [latestWorkout, weeklySummary] = await Promise.all([
        fetchLatestWorkout(),
        fetchWeeklySummary(),
    ]);

    if (!latestWorkout || !weeklySummary) {
        return (
            <section id="strava-stats" className="bg-black py-10">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">
                        Unable to Load Strava Stats
                    </h2>
                    <p>Please check back later or try refreshing the page.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="strava-stats" className="bg-black py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-orange-500 text-center mb-8">
                    Strava RestApi
                </h2>
                <div className="flex flex-col md:flex-row md:gap-6 justify-center">
                    {/* Latest Workout Card */}
                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md flex-1">
                        <div> <h3 className="text-xl font-semibold text-orange-500">Latest Workout:</h3> <p>{latestWorkout.date}</p></div>
                        <p className="text-white mt-2">
                            <strong>Name:</strong> {latestWorkout.name}
                        </p>
                        <p className="text-white">
                            <strong>Distance:</strong> {latestWorkout.distance}
                        </p>
                        <p className="text-white">
                            <strong>Time:</strong> {latestWorkout.movingTime}
                        </p>
                        <p className="text-white">
                            <strong>Elevation Gain:</strong> {latestWorkout.totalElevationGain}
                        </p>
                        <p className="text-white">
                            <strong>Type:</strong> {latestWorkout.type}
                        </p>
                    </div>

                    {/* Weekly Summary Card */}
                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md flex-1">
                        <h3 className="text-xl font-semibold text-orange-500">
                            Stats from Last Week
                        </h3>
                        <p className="text-white mt-2">
                            <strong>Total Distance:</strong> {weeklySummary.totalDistance}
                        </p>
                        <p className="text-white">
                            <strong>Total Time:</strong> {weeklySummary.totalTime}
                        </p>
                        <p className="text-white">
                            <strong>Total Elevation Gain:</strong> {weeklySummary.totalElevationGain}
                        </p>
                        <a
                            href="https://github.com/slimmpylk/strava-rest-api"
                            className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link to GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const dynamic = "force-dynamic"; // Ensure dynamic rendering
export default StravaStats;
