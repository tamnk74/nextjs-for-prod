import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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
      },
      {
        protocol: 'https',
        hostname: 'tailwind-generator.b-cdn.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  /* config options here */
};

export default withNextIntl(bundleAnalyzer(nextConfig));
