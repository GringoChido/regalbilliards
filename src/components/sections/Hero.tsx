'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero-pool-balls.jpg',
    headlineKey: 'headline',
    subKey: 'subheadline',
    ctaKey: 'cta',
    ctaHref: '/pool-tables',
  },
  {
    image: '/images/service-hero.jpg',
    headlineKey: 'headline2',
    subKey: 'subheadline2',
    ctaKey: 'cta2',
    ctaHref: '/service-center',
  },
  {
    image: '/images/hero-game-room.jpg',
    headlineKey: 'headline3',
    subKey: 'subheadline3',
    ctaKey: 'cta3',
    ctaHref: '/about',
  },
];

const Hero = () => {
  const t = useTranslations('Hero');
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6">
              {t(slide.headlineKey)}
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed font-body">
              {t(slide.subKey)}
            </p>
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center px-8 py-4 text-base font-semibold font-body rounded-full bg-accent text-white hover:bg-accent-hover transition-colors duration-300"
            >
              {t(slide.ctaKey)}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-8 right-6 sm:right-8 lg:right-16 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className="group relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: index === current ? 48 : 16 }}
            >
              <div className="absolute inset-0 bg-white/30 rounded-full" />
              {index === current && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
