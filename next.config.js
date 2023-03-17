/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "flowbite.s3.amazonaws.com",
      },
      { hostname: "user-images.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
