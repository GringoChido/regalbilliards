'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const sectionKeys = [
  { title: 'slateTitle', text: 'slateText' },
  { title: 'frameTitle', text: 'frameText' },
  { title: 'cushionTitle', text: 'cushionText' },
  { title: 'clothTitle', text: 'clothText' },
  { title: 'pocketsTitle', text: 'pocketsText' },
  { title: 'legsTitle', text: 'legsText' },
] as const;

export default function ConstructionContent() {
  const t = useTranslations('Construction');

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
            {sectionKeys.map(({ title, text }, index) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.05 }}
              >
                <h2 className="font-headline text-2xl md:text-3xl text-primary mb-4">{t(title)}</h2>
                <p className="text-on-surface-variant leading-[1.7]">{t(text)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
