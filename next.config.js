const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  trailingSlash: false,

  // Pin workspace root when multiple lockfiles exist (e.g. ~/package-lock.json).
  turbopack: {
    root: path.join(__dirname),
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  experimental: {
    inlineCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

module.exports = nextConfig;
