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
      { hostname: "see.fontimg.com" },
    ],
  },
};

module.exports = nextConfig;
