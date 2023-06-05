/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'photos.demandstudios.com',
      },
    ],
  },
};

module.exports = nextConfig
