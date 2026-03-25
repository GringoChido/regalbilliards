'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero-slide-1.jpeg',
    headlineKey: 'headline',
    subKey: 'subheadline',
    ctaKey: 'cta',
    ctaHref: '/pool-tables',
  },
  {
    image: '/images/hero-slide-2.jpg',
    headlineKey: 'headline2',
    subKey: 'subheadline2',
    ctaKey: 'cta2',
    ctaHref: '/service-center',
  },
  {
    image: '/images/hero-slide-3.avif',
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images with Ken Burns zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 12, ease: 'linear' } }}
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
          {/* Gradient overlay — radial from center-bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Subtitle label */}
            <p className="font-label text-xs uppercase tracking-[0.3em] text-surface/50 mb-6">
              {t('label') || 'Since 1983 · Hicksville, New York'}
            </p>

            {/* Massive serif headline */}
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-surface leading-[0.95] -tracking-wide mb-8">
              <em>{t(slide.headlineKey)}</em>
            </h1>

            {/* Body text */}
            <p className="text-lg md:text-xl text-on-primary-container font-light mb-10 max-w-xl leading-relaxed font-body">
              {t(slide.subKey)}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={slide.ctaHref}
                className="group inline-flex items-center gap-4 px-10 py-4 bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all duration-300"
              >
                {t(slide.ctaKey)}
                <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center text-surface font-label text-xs uppercase tracking-widest border-b border-surface/30 pb-1 hover:border-secondary hover:text-secondary transition-all duration-300"
              >
                {t('visitShowroom') || 'Visit Our Showroom'}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicator lines — bottom left */}
        <div className="absolute bottom-8 left-6 sm:left-8 lg:left-16 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className="relative h-[1px] overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: index === current ? 48 : 24 }}
            >
              <div className="absolute inset-0 bg-surface/30" />
              {index === current && (
                <motion.div
                  className="absolute inset-0 bg-secondary origin-left"
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
