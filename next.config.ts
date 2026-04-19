import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/claim-orchestrator",
  assetPrefix: "/claim-orchestrator",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
