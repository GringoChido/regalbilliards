import type { MetadataRoute } from 'next';

const baseUrl = 'https://regalbilliards.com';

const routes = [
  '',
  '/pool-tables',
  '/buying-a-pool-table',
  '/table-dimensions-and-room-size-requirements',
  '/table-construction-features',
  '/lifetime-warranty',
  '/category/used-pool-tables',
  '/category/game-room-furniture',
  '/category/game-tables',
  '/category/darts',
  '/category/accessories',
  '/category/cue-sticks',
  '/service-center',
  '/about',
  '/contact-us',
  '/gallery',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          es: `${baseUrl}/es${route}`,
        },
      },
    });
  }

  return entries;
}
