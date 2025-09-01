/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    // Désactiver l'optimisation automatique qui casse les URLs Unsplash
    unoptimized: false,
    // Formats supportés
    formats: ['image/webp', 'image/avif'],
    // Tailles d'images personnalisées
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400, 512],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig