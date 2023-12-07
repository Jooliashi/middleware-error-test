/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/drain',
        headers: [
          {
            key: 'x-vercel-verify',
            value: '271b3dcf442dec05cb1daface89aa929a482a724',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
