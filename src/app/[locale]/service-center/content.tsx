'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Phone, Calendar, CheckCircle, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ServiceCards from '@/components/sections/ServiceCards';
import ServiceQuoteForm from '@/components/forms/ServiceQuoteForm';

const steps = [
  { key: 'step1', icon: Phone },
  { key: 'step2', icon: Calendar },
  { key: 'step3', icon: CheckCircle },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function ServiceCenterContent() {
  const t = useTranslations('ServiceCenter');

  return (
    <main id="main-content">
      {/* Full-viewport Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/categories/service-center.jpg"
          alt="Service Center"
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
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Expert Care
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              Service <em>Center</em>
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {t('intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services bento */}
      <section className="py-20 md:py-32">
        <ServiceCards />
      </section>

      {/* Service everyone callout */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <Container>
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">{t('serviceEveryone')}</h2>
            <p className="text-on-surface-variant text-lg leading-[1.7]">{t('serviceEveryoneText')}</p>
          </motion.div>
        </Container>
      </section>

      {/* Process steps — large faded numbers */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              How It Works
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-primary -tracking-wide">
              {t('processHeading')}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="font-headline text-7xl text-outline-variant/20 italic leading-none mb-4 select-none">
                  0{index + 1}
                </div>
                <Icon className="w-6 h-6 text-secondary mx-auto mb-4" />
                <h3 className="font-headline text-xl text-primary mb-3">{t(key)}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t(`${key}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="py-12">
        <Container>
          <motion.div
            {...fadeUp}
            className="flex items-center justify-center gap-3 text-on-surface-variant"
          >
            <MapPin className="w-5 h-5 text-secondary" />
            <p className="text-lg font-body">
              <span className="font-medium text-primary">{t('areaHeading')}:</span> {t('areaText')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Quote form — split layout */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                Get a Quote
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                {t('quoteHeading')}
              </h2>
              <p className="text-on-surface-variant text-lg leading-[1.7] mb-8">
                Fill out the form and our team will get back to you within 24 hours with an estimate.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
            >
              <ServiceQuoteForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
