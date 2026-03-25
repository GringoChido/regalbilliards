'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Building2, Wrench, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const warrantyCards = [
  { icon: ShieldCheck, titleKey: 'structuralTitle', textKey: 'structuralText' },
  { icon: Building2, titleKey: 'manufacturerTitle', textKey: 'manufacturerText' },
  { icon: Wrench, titleKey: 'serviceTitle', textKey: 'serviceText' },
] as const;

const coveredKeys = ['coveredFrame', 'coveredSlate', 'coveredCushion', 'coveredHardware'] as const;

export default function WarrantyContent() {
  const t = useTranslations('Warranty');

  return (
    <main id="main-content">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-container">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-surface -tracking-wide leading-[1.05]">
              {t('title')}
            </h1>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <motion.p {...fadeUp} className="text-on-surface-variant text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t('intro')}
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warrantyCards.map(({ icon: Icon, titleKey, textKey }, index) => (
                <motion.div
                  key={titleKey}
                  {...fadeUp}
                  transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
                  className="bg-surface-container-low p-8 text-center"
                >
                  <Icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-headline text-lg text-primary mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{t(textKey)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} className="bg-primary text-surface p-10 md:p-12">
              <h2 className="font-headline text-2xl md:text-3xl mb-6">{t('coveredTitle')}</h2>
              <ul className="space-y-3">
                {coveredKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-on-primary-container">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="bg-surface-container-low p-10 md:p-12">
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-4">{t('notCoveredTitle')}</h2>
              <p className="text-on-surface-variant leading-relaxed">{t('notCoveredText')}</p>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
