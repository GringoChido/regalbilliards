'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { cn } from '@/lib/utils';

const galleryImages = [
  { src: '/images/gallery/install-kariba.jpg', alt: 'Presidential Kariba installation', category: 'installations' as const },
  { src: '/images/gallery/install-pierce.jpg', alt: 'Presidential Pierce installation', category: 'installations' as const },
  { src: '/images/gallery/install-kruger.jpg', alt: 'Presidential Kruger installation', category: 'installations' as const },
  { src: '/images/story-teaser.jpeg', alt: 'Showroom installation', category: 'showroom' as const },
  { src: '/images/gallery/install-resolute.jpg', alt: 'Imperial Resolute installation', category: 'installations' as const },
  { src: '/images/gallery/install-skylar.jpg', alt: 'Customer game room', category: 'game-rooms' as const },
  { src: '/images/cta-showroom.avif', alt: 'Showroom Capetown display', category: 'showroom' as const },
  { src: '/images/gallery/install-silverton.jpg', alt: 'Presidential Silverton installation', category: 'installations' as const },
  { src: '/images/gallery/install-turnbridge.jpg', alt: 'Customer game room setup', category: 'game-rooms' as const },
  { src: '/images/gallery/install-carter.jpg', alt: 'Presidential Carter installation', category: 'installations' as const },
  { src: '/images/hero-slide-3.avif', alt: 'Game room setup', category: 'game-rooms' as const },
  { src: '/images/hero-slide-1.jpeg', alt: 'Pool table close-up', category: 'showroom' as const },
];

const filters = ['all', 'showroom', 'installations', 'game-rooms'] as const;

export default function GalleryPage() {
  const t = useTranslations('Gallery');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-container">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-6">
              Our Work
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-surface -tracking-wide">
              {t('title')}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="flex justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-4 py-2 font-label text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer',
                  activeFilter === filter
                    ? 'bg-secondary text-on-secondary'
                    : 'text-on-surface-variant hover:text-secondary border-b border-transparent hover:border-secondary/30',
                )}
              >
                {t(filter === 'game-rooms' ? 'gameRooms' : filter)}
              </button>
            ))}
          </div>

          <GalleryGrid images={galleryImages} filter={activeFilter} />
        </Container>
      </section>
    </main>
  );
}
