import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        unoptimized: false, // Enable dynamic image optimization
    },
};

export default nextConfig;