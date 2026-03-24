'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { cn } from '@/lib/utils';

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: '/images/placeholder-showroom.jpg',
  alt: `Gallery image ${i + 1}`,
  category: (['showroom', 'installations', 'game-rooms'] as const)[i % 3],
}));

const filters = ['all', 'showroom', 'installations', 'game-rooms'] as const;

export default function GalleryPage() {
  const t = useTranslations('Gallery');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main id="main-content" className="py-16 md:py-24">
      <Container>
        <SectionHeading as="h1" className="mb-8">{t('title')}</SectionHeading>

        <div className="flex justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-primary text-surface'
                  : 'bg-surface text-text-muted border border-border hover:border-primary',
              )}
            >
              {t(filter === 'game-rooms' ? 'gameRooms' : filter)}
            </button>
          ))}
        </div>

        <GalleryGrid images={galleryImages} filter={activeFilter} />
      </Container>
    </main>
  );
}
