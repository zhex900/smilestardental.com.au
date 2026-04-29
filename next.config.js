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
    ];
  },

  // Pin workspace root when multiple lockfiles exist (e.g. ~/package-lock.json).
  turbopack: {
    root: __dirname,
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  /**
   * Explicitly tell Node File Trace which extra files belong to which routes.
   * Our content collections (`app/contents/blogs` and `app/contents/services`)
   * are read at request / build time via `fs.readdirSync` + `fs.readFileSync`
   * with a dynamic basename — NFT can statically scope the prefix but can't
   * see the individual `.mdx` files without this hint. Without this list,
   * NFT tends to either over-include the entire project (the warning we saw)
   * or under-include the content folder and break MDX rendering at runtime.
   */
  outputFileTracingIncludes: {
    "/sitemap.xml": [
      "./app/contents/**/*",
      "./app/**/page.tsx",
      "./app/**/layout.tsx",
    ],
    "/blogs": ["./app/contents/blogs/**/*"],
    "/blogs/[slug]": ["./app/contents/blogs/**/*"],
    "/services": ["./app/contents/services/**/*"],
    "/services/[slug]": ["./app/contents/services/**/*"],
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
