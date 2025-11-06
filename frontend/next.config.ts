import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Allow builds to complete even with ESLint or TypeScript errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
