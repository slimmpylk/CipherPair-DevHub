// src/api/stravaApi.ts

// Fetch the latest workout data
export async function fetchLatestWorkout() {
    try {
        const response = await fetch(
            "https://strava-rest-api-f6acfrawc0bbg7a2.northeurope-01.azurewebsites.net/api/strava/latest-workout"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch latest workout data");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching latest workout data:", error);
        throw error;
    }
}
