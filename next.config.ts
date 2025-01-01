// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,  // fixes problem creating index.html to out/ files
    images: {
        unoptimized: true,  // disabling image optimization for static websites
    },
};

export default nextConfig;
