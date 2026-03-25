'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { BUSINESS } from '@/lib/utils';

const CTASection = () => {
  const t = useTranslations('CTA');

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cta-showroom.avif"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay with slight green tint */}
      <div className="absolute inset-0 bg-primary/85" />
      {/* Subtle background image at low opacity */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-container)_0%,_transparent_70%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-6">
            {t('eyebrow')}
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-surface leading-[1.1] mb-8 italic">
            {t('heading')}
          </h2>
          <p className="text-on-primary-container text-lg md:text-xl mb-12 leading-relaxed font-body max-w-2xl mx-auto font-light">
            {t('text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-4 bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              {t('directions')}
              <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 px-10 py-4 text-surface font-label text-xs uppercase tracking-widest border-b border-surface/30 pb-1 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {t('call')}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
