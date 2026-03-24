import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/pool-table-gallery',
      destination: '/gallery',
      permanent: true,
    },
    {
      source: '/es/pool-table-gallery',
      destination: '/es/gallery',
      permanent: true,
    },
  ],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
