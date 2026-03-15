import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@mulagroup/content-models",
    "@mulagroup/design-system",
    "@mulagroup/ui",
    "@mulagroup/utils"
  ]
};

export default nextConfig;
