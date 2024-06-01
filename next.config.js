/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["amazing-watch.com"],
  },
}

module.exports = nextConfig
