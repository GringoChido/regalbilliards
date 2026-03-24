'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/utils';

const CTASection = () => {
  const t = useTranslations('CTA');

  return (
    <section className="py-16 md:py-24 bg-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-surface mb-4">
            {t('heading')}
          </h2>
          <p className="text-surface/80 text-lg mb-8 leading-relaxed">
            {t('text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href={BUSINESS.googleMapsUrl}
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              {t('directions')}
            </Button>
            <Button
              as="a"
              href={BUSINESS.phoneHref}
              variant="secondary"
              size="lg"
              className="border-surface/30 text-surface hover:bg-surface/10 hover:text-surface"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('call')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
