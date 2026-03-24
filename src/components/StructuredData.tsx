import { BUSINESS } from '@/lib/utils';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: "Long Island's most trusted name in pool tables and game rooms for over 40 years. Veteran-owned, family-operated.",
    url: 'https://regalbilliards.com',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '952 S Broadway',
      addressLocality: 'Hicksville',
      addressRegion: 'NY',
      postalCode: '11801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [BUSINESS.facebook],
    priceRange: '$$',
    image: 'https://regalbilliards.com/images/hero-showroom-install.jpg',
    areaServed: [
      { '@type': 'County', name: 'Nassau County' },
      { '@type': 'County', name: 'Suffolk County' },
      { '@type': 'City', name: 'Brooklyn' },
      { '@type': 'City', name: 'Queens' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Mike Walsh',
    },
    foundingDate: '1984',
    knowsAbout: ['Pool Tables', 'Billiards', 'Game Room Furniture', 'Pool Table Service'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbProps {
  items: { name: string; href: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://regalbilliards.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
