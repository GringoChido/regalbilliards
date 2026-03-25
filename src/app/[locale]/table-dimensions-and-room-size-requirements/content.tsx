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

const dimensions = [
  { table: '7-foot', playfield: '39" x 78"', room: "13' x 16'" },
  { table: '8-foot', playfield: '44" x 88"', room: "13'6\" x 17'" },
  { table: '8-foot (oversized)', playfield: '46" x 92"', room: "13'6\" x 17'4\"" },
  { table: '9-foot', playfield: '50" x 100"', room: "14'2\" x 18'" },
];

export default function DimensionsContent() {
  const t = useTranslations('Dimensions');

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
          <div className="max-w-4xl mx-auto">
            <motion.p {...fadeUp} className="text-on-surface-variant text-lg text-center mb-12 leading-relaxed">
              {t('intro')}
            </motion.p>

            <motion.div {...fadeUp} className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-headline text-primary">{t('tableSize')}</th>
                    <th className="py-3 px-4 font-headline text-primary">{t('playingSurface')}</th>
                    <th className="py-3 px-4 font-headline text-primary">{t('minimumRoom')}</th>
                  </tr>
                </thead>
                <tbody>
                  {dimensions.map((row) => (
                    <tr key={row.table} className="border-b border-outline-variant/15">
                      <td className="py-3 px-4 font-medium">{row.table}</td>
                      <td className="py-3 px-4 text-on-surface-variant">{row.playfield}</td>
                      <td className="py-3 px-4 text-on-surface-variant">{row.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p {...fadeUp} className="text-sm text-on-surface-variant mt-6">
              * {t('footnote')}
            </motion.p>

            <motion.div {...fadeUp} className="mt-12 bg-surface-container-low p-8">
              <h2 className="font-headline text-2xl text-primary mb-4">{t('helpTitle')}</h2>
              <p className="text-on-surface-variant leading-relaxed">{t('helpText')}</p>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
