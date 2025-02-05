import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * We read the secret from environment variables.
 * Make sure you have REFRESH_SECRET= in your .env file.
 */
const SECRET = process.env.REFRESH_SECRET;

// This is the route handler for POST requests to /api/refresh-strava
export async function POST(request: NextRequest) {
    // 1) Check if we even have a secret set on the server
    if (!SECRET) {
        return NextResponse.json(
            { error: "No REFRESH_SECRET found on the server" },
            { status: 500 }
        );
    }

    // 2) Read the header from the incoming request
    //    e.g., the cron job will send a header like x-refresh-secret: someLongRandomString
    const incomingSecret = request.headers.get("x-refresh-secret");

    // 3) Compare the incoming secret to what's in .env
    if (incomingSecret !== SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // 4) Revalidate the path that includes StravaStats
        revalidatePath("/samuliPortfolio");



        return NextResponse.json({ revalidated: true });
    } catch (err: unknown) {
        console.error("Revalidation error (non-Error):", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

// Optional: block GET requests to /api/refresh-strava
export async function GET() {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
