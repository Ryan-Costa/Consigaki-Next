/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const path = require('path')

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    }
    return config
  },
})

module.exports = nextConfig
