/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [360, 768, 1024, 1440, 2000],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

export default nextConfig
