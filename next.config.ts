// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",             // for static export
    images: {
        unoptimized: true,         // disable image optimization
    },
    // other config if needed
};

export default nextConfig;