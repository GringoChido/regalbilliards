'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Phone, Calendar, CheckCircle, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ServiceCards from '@/components/sections/ServiceCards';
import ServiceQuoteForm from '@/components/forms/ServiceQuoteForm';
import { BUSINESS } from '@/lib/utils';

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
      {/* ── Hero ── */}
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
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-4">
              {t('areaHeading')}
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              {t('heroHeadline')}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {t('intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-12 bg-surface-container-low">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {(['statsYears', 'statsTables', 'statsAreas'] as const).map((key) => (
              <motion.div
                key={key}
                {...fadeUp}
                className="text-center"
              >
                <p className="font-headline text-4xl md:text-5xl text-primary mb-1">
                  {t(key)}
                </p>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  {t(`${key}Label`)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service Cards (with hierarchy) ── */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div {...fadeUp} className="mb-12">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
              {t('areaHeading')}
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-primary -tracking-wide">
              {t('title')}
            </h2>
          </motion.div>
        </Container>
        <ServiceCards />
      </section>

      {/* ── "We Service Everyone" — dark immersive ── */}
      <section className="py-24 md:py-40 bg-primary text-surface">
        <Container>
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl italic font-light leading-[1.15] mb-8">
              {t('serviceEveryone')}
            </h2>
            <p className="text-on-primary-container text-lg leading-[1.7] font-light">
              {t('serviceEveryoneText')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Process Steps — more breathing room ── */}
      <section className="py-24 md:py-40 bg-surface-container-low">
        <Container>
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
              {t('processHeading')}
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-primary -tracking-wide">
              {t('processHeading')}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {steps.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="font-headline text-8xl md:text-9xl text-outline-variant/15 italic leading-none mb-6 select-none">
                  0{index + 1}
                </div>
                <Icon className="w-6 h-6 text-secondary mx-auto mb-4" />
                <h3 className="font-headline text-xl text-primary mb-3">{t(key)}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t(`${key}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service Area — expanded ── */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-6" />
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">
              {t('areaHeading')}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8">
              {(['areaNassau', 'areaSuffolk', 'areaBrooklyn', 'areaQueens', 'areaManhattan'] as const).map((key, i) => (
                <span key={key} className="flex items-center gap-3">
                  <span className="font-body text-lg text-on-surface-variant">{t(key)}</span>
                  {i < 4 && <span className="text-outline-variant">·</span>}
                </span>
              ))}
            </div>
            <p className="text-on-surface-variant font-body italic">
              {t('areaNote')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Quote Form — with warmth ── */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                {t('quoteHeading')}
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                {t('quoteHeading')}
              </h2>
              <p className="text-on-surface-variant text-lg leading-[1.7] mb-8">
                {t('quoteSubtext')}
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 text-secondary font-label text-xs uppercase tracking-widest border-b border-secondary/20 pb-1 hover:border-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
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
