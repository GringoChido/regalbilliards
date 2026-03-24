'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { cn } from '@/lib/utils';

const galleryImages = [
  { src: '/images/gallery/install-kariba.jpg', alt: 'Presidential Kariba installation', category: 'installations' as const },
  { src: '/images/gallery/install-pierce.jpg', alt: 'Presidential Pierce installation', category: 'installations' as const },
  { src: '/images/gallery/install-kruger.jpg', alt: 'Presidential Kruger installation', category: 'installations' as const },
  { src: '/images/hero-showroom-install.jpg', alt: 'Showroom installation', category: 'showroom' as const },
  { src: '/images/gallery/install-resolute.jpg', alt: 'Imperial Resolute installation', category: 'installations' as const },
  { src: '/images/gallery/install-skylar.jpg', alt: 'Customer game room', category: 'game-rooms' as const },
  { src: '/images/showroom-capetown.jpg', alt: 'Showroom Capetown display', category: 'showroom' as const },
  { src: '/images/gallery/install-silverton.jpg', alt: 'Presidential Silverton installation', category: 'installations' as const },
  { src: '/images/gallery/install-turnbridge.jpg', alt: 'Customer game room setup', category: 'game-rooms' as const },
  { src: '/images/gallery/install-carter.jpg', alt: 'Presidential Carter installation', category: 'installations' as const },
  { src: '/images/hero-game-room.jpg', alt: 'Game room setup', category: 'game-rooms' as const },
  { src: '/images/hero-pool-balls.jpg', alt: 'Pool table close-up', category: 'showroom' as const },
];

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
