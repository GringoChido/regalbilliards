'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'showroom' | 'installations' | 'game-rooms';
}

interface GalleryGridProps {
  images: GalleryImage[];
  filter: string;
}

const GalleryGrid = ({ images, filter }: GalleryGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((image, index) => (
            <motion.button
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square rounded-lg overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        images={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null))}
        onPrev={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null))}
      />
    </>
  );
};

export default GalleryGrid;
