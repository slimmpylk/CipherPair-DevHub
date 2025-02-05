// src/api/stravaApi.ts

// 1. A type for your workout data (optional but nice)
export type Workout = {
    name: string;
    distance: string;
    movingTime: string;
    totalElevationGain: string;
    type: string;
    date: string;
};

export type WeeklySummary = {
    totalDistance: string;
    totalTime: string;
    totalElevationGain: string;
};

// 2. Grab the base URL from .env
const stravaBaseUrl = process.env.STRAVA_API_BASE_URL;

// 3. Fetch Latest Workout
export async function fetchLatestWorkout(): Promise<Workout | null> {
    if (!stravaBaseUrl) {
        throw new Error("Missing STRAVA_API_BASE_URL in .env");
    }

    try {
        // Revalidate every 5 hours (if you still want Next.js caching)
        const response = await fetch(`${stravaBaseUrl}/latest-workout`, {
            next: { revalidate: 3 * 60 * 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch latest workout data");
        }

        return (await response.json()) as Workout;
    } catch (error) {
        console.error("Error fetching latest workout data:", error);
        return null;
    }
}

// 4. Fetch Weekly Summary
export async function fetchWeeklySummary(): Promise<WeeklySummary | null> {
    if (!stravaBaseUrl) {
        throw new Error("Missing STRAVA_API_BASE_URL in .env");
    }

    try {
        // Revalidate every 3 hours (or whichever time you had)
        const response = await fetch(`${stravaBaseUrl}/last-week-summary`, {
            next: { revalidate: 3 * 60 * 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch weekly summary data");
        }

        return (await response.json()) as WeeklySummary;
    } catch (error) {
        console.error("Error fetching weekly summary:", error);
        return null;
    }
}
