'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Shield, MapPin, Clock, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/utils';

export default function AboutContent() {
  const t = useTranslations('About');

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-surface text-center max-w-3xl mx-auto"
          >
            {t('title')}
          </motion.h1>
        </Container>
      </section>

      {/* Origin story */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-primary mb-4">{t('originHeading')}</h2>
              <p className="text-text-muted text-lg leading-relaxed">{t('originText')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/placeholder-showroom.jpg"
                alt="Regal Billiards showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mike Walsh */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/images/placeholder-showroom.jpg"
                alt="Mike Walsh, owner of Regal Billiards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-3xl text-primary mb-4">{t('mikeHeading')}</h2>
              <p className="text-text-muted text-lg leading-relaxed">{t('mikeText')}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Veteran-owned */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl text-primary mb-4">{t('veteranHeading')}</h2>
            <p className="text-text-muted text-lg leading-relaxed">{t('veteranText')}</p>
          </motion.div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl text-primary mb-4 text-center">{t('philosophyHeading')}</h2>
            <p className="text-text-muted text-lg leading-relaxed text-center">{t('philosophyText')}</p>
          </motion.div>
        </Container>
      </section>

      {/* Showroom */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading className="mb-8">{t('showroomHeading')}</SectionHeading>
          <p className="text-center text-text-muted max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {t('showroomText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/placeholder-showroom.jpg"
                  alt={`Regal Billiards showroom ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl text-surface mb-8">{t('ctaHeading')}</h2>
            <div className="space-y-3 text-surface/80 mb-8">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                {t('address')}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                {t('hours')}
              </p>
              <p className="text-surface/60">{t('hoursAppointment')}</p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                {BUSINESS.phone}
              </p>
            </div>
            <Button as="a" href={BUSINESS.googleMapsUrl} size="lg">
              <MapPin className="w-5 h-5 mr-2" />
              Get directions
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
