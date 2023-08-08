/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = withImages({
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'consigaki.s3.sa-east-1.amazonaws.com',
      'consigaki.s3.amazonaws.com',
    ],
  },
})

module.exports = nextConfig
