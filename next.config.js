/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/mentions-legales',
        destination: '/legal/mentions-legales',
        permanent: true,
      },
      {
        source: '/cgv',
        destination: '/legal/cgv',
        permanent: true,
      },
      {
        source: '/confidentialite',
        destination: '/legal/confidentialite',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
