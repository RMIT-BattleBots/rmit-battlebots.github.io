/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/rmit-battlebots.github.io",
  assetPrefix: "/rmit-battlebots.github.io",
};

module.exports = nextConfig;
