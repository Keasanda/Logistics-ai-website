/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/logistics-ai-website',
  trailingSlash: true
};

module.exports = nextConfig;
