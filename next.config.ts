import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  // For user/org pages (username.github.io), serve from root
  // The GitHub Actions workflow will handle basePath if needed
  trailingSlash: false,
};

export default nextConfig;
