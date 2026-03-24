'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev],
  );

  useEffect(() => {
    if (currentIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null) return null;

  const image = images[currentIndex];
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 text-white/80 hover:text-white z-10 p-2"
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-[90vw] h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </motion.div>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 text-white/80 hover:text-white z-10 p-2"
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="absolute bottom-4 text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
