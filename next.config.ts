import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disabilita ESLint durante il build
  },
};

export default nextConfig;
