'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Shield, MapPin, Clock, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/utils';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function AboutContent() {
  const t = useTranslations('About');

  return (
    <main id="main-content">
      {/* ── 1. Full-Bleed Hero ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/story-teaser.jpeg"
          alt="Regal Billiards showroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-4">
              {t('veteranHeading')}
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              Our <em>Heritage</em>
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {t('heroSubtext')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Origin Story — editorial split ── */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              {...fadeUp}
              className="lg:col-span-7 relative h-80 lg:h-[32rem] rounded-sm overflow-hidden"
            >
              <Image
                src="/images/showroom-tile-1.jpg"
                alt="Inside the Regal Billiards showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                Since 1983
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                {t('originHeading')}
              </h2>
              <blockquote className="border-l border-secondary/30 pl-8 py-4 mb-8">
                <p className="font-headline text-xl text-primary/80 italic leading-relaxed font-light">
                  &ldquo;{t('originQuote')}&rdquo;
                </p>
              </blockquote>
              <p className="text-on-surface-variant text-lg leading-[1.7]">
                {t('originText')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 3. Mike Walsh — flipped layout ── */}
      <section className="py-24 md:py-40 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              {...fadeUp}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                {t('mikeHeading')}
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                {t('title')}
              </h2>
              <p className="text-on-surface-variant text-lg leading-[1.7]">
                {t('mikeText')}
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
              className="lg:col-span-7 relative h-80 lg:h-[32rem] rounded-sm overflow-hidden order-1 lg:order-2 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image
                src="/images/showroom-tile-3.jpg"
                alt="Mike Walsh at Regal Billiards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 4. Veteran + Philosophy — merged dark immersive ── */}
      <section className="py-24 md:py-40 bg-primary text-surface">
        <Container>
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <Shield className="w-10 h-10 text-secondary mx-auto mb-8" />
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-6">
              {t('veteranHeading')}
            </p>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl italic font-light leading-[1.15] mb-8">
              {t('veteranText')}
            </h2>
            <p className="text-on-primary-container text-lg leading-[1.7] font-light">
              {t('philosophyText')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── 5. Showroom Gallery — staggered grid ── */}
      <section className="py-24 md:py-40">
        <Container>
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
              Visit Us
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-primary -tracking-wide">
              {t('showroomHeading')}
            </h2>
          </motion.div>
          <p className="text-center text-on-surface-variant max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            {t('showroomText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              { src: '/images/showroom-tile-1.jpg', alt: 'Regal Billiards showroom interior' },
              { src: '/images/showroom-tile-2.jpg', alt: 'Regal Billiards pool table display' },
              { src: '/images/showroom-tile-3.jpg', alt: 'Regal Billiards game room setup' },
            ].map((img, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' as const, delay: (i + 1) * 0.1 }}
                className={`relative h-72 md:h-80 rounded-sm overflow-hidden group ${i === 1 ? 'md:mt-12' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-24 md:py-40 bg-primary-container">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl italic text-surface mb-10">
              {t('ctaHeading')}
            </h2>
            <div className="space-y-4 text-on-primary-container mb-12">
              <p className="flex items-center justify-center gap-3 font-body">
                <MapPin className="w-4 h-4 text-secondary" />
                {t('address')}
              </p>
              <p className="flex items-center justify-center gap-3 font-body">
                <Clock className="w-4 h-4 text-secondary" />
                {t('hours')}
              </p>
              <p className="text-on-primary-container/60 font-body">{t('hoursAppointment')}</p>
              <p className="flex items-center justify-center gap-3 font-body">
                <Phone className="w-4 h-4 text-secondary" />
                {BUSINESS.phone}
              </p>
            </div>
            <Button as="a" href={BUSINESS.googleMapsUrl} size="lg">
              <MapPin className="w-4 h-4 mr-3" />
              {t('ctaHeading')}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
