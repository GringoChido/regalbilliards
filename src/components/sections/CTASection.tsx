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
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/showroom-capetown.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-surface leading-tight mb-6">
            {t('heading')}
          </h2>
          <p className="text-surface/70 text-lg md:text-xl mb-10 leading-relaxed font-body max-w-2xl mx-auto">
            {t('text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold font-body rounded-full bg-accent text-white hover:bg-accent-hover transition-colors duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              {t('directions')}
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center px-8 py-4 text-base font-semibold font-body rounded-full border-2 border-surface/30 text-surface hover:bg-surface/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('call')}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
