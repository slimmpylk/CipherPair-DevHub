"use client";

import React, { useEffect, useState } from "react";

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

const StravaStats: React.FC = () => {
    const [latestWorkout, setLatestWorkout] = useState<Workout | null>(null);
    const [weeklySummary, setWeeklySummary] = useState<WeeklySummary | null>(null);

    useEffect(() => {
        const fetchWorkoutData = async () => {
            try {
                const response = await fetch(
                    "https://strava-rest-api-f6acfrawc0bbg7a2.northeurope-01.azurewebsites.net/api/strava/latest-workout"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Workout = await response.json();
                setLatestWorkout(data);
            } catch (error) {
                console.error("Error fetching latest workout data:", error);
            }
        };

        const fetchWeeklySummaryData = async () => {
            try {
                const response = await fetch(
                    "https://strava-rest-api-f6acfrawc0bbg7a2.northeurope-01.azurewebsites.net/api/strava/last-week-summary"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: WeeklySummary = await response.json();
                setWeeklySummary(data);
            } catch (error) {
                console.error("Error fetching weekly summary data:", error);
            }
        };

        fetchWorkoutData();
        fetchWeeklySummaryData();
    }, []);

    if (!latestWorkout || !weeklySummary) {
        return <div>Loading...</div>;
    }

    return (
        <section id="strava-stats" className="bg-black py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-orange-500 text-center mb-8">RestApi</h2>
                <div className="flex flex-col md:flex-row md:gap-6 justify-center">
                    {/* Card for Latest Workout */}
                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md flex-1">
                        <div className="mt-4">
                            <div>
                                <h3 className="text-xl font-semibold text-orange-500">Latest Workout</h3>
                                <h4 className="text-white">Date: {latestWorkout.date}</h4>
                            </div>
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
                    </div>

                    {/* Card for Weekly Summary */}
                    <div className="card-portfolio bg-gray-800 p-4 rounded-lg shadow-md flex-1">
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-orange-500">Stats from last week</h3>
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
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StravaStats;
