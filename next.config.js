/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = withImages({
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
