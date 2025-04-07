import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'tailwind-generator.b-cdn.net',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  /* config options here */
};

export default bundleAnalyzer(nextConfig);
