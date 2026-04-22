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
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  trailingSlash: false,

  async headers() {
    const securityHeaders = [
      // Block MIME sniffing so browsers respect declared Content-Type.
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Limit the amount of referrer info leaked to third parties.
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      // Prevent clickjacking via iframes on other origins.
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Disable powerful browser features we don't need (dental site).
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
      },
      // Tell Chrome this site opts out of FLoC/Topics entirely.
      { key: "X-DNS-Prefetch-Control", value: "on" },
      // Long-lived HSTS (HTTPS already enforced by Vercel; this adds the
      // preload-ready policy on top).
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Cache local images, fonts and icons for a year at the edge.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

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
