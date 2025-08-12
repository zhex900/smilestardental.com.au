/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "storage.googleapis.com"],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
