'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import type { Manufacturer, TableStyle } from '@/types';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const manufacturers = [
  { key: 'presidentialHeading', desc: 'presidentialDesc', filter: 'presidential' as Manufacturer },
  { key: 'clBaileyHeading', desc: 'clBaileyDesc', filter: 'cl-bailey' as Manufacturer },
  { key: 'imperialHeading', desc: 'imperialDesc', filter: 'imperial' as Manufacturer },
];

export default function PoolTablesPage() {
  const t = useTranslations('PoolTables');
  const tp = useTranslations('PoolTablesPage');
  const [filters, setFilters] = useState<{ manufacturer: Manufacturer | null; style: TableStyle | null }>({
    manufacturer: null,
    style: null,
  });

  const poolTables = products.filter((p) => p.category === 'pool-tables');

  const filtered = poolTables.filter((p) => {
    if (filters.manufacturer && p.manufacturer !== filters.manufacturer) return false;
    if (filters.style && p.style !== filters.style) return false;
    return true;
  });

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/categories/pool-tables-hero.jpg"
          alt="Pool tables"
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
              Collection
            </p>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              {t('title')}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {t('intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Manufacturer Intro ── */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.p {...fadeUp} className="text-on-surface-variant text-lg md:text-xl leading-[1.7] font-body max-w-3xl mb-16">
            {tp('manufacturerIntro')}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {manufacturers.map(({ key, desc }, index) => (
              <motion.div
                key={key}
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
                className="bg-surface-container-low p-8 transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-[0_20px_40px_rgba(28,28,26,0.05)]"
              >
                <h3 className="font-headline text-xl md:text-2xl text-primary mb-4">{tp(key)}</h3>
                <p className="text-on-surface-variant leading-relaxed font-body">{tp(desc)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Construction Callout — dark immersive ── */}
      <section className="py-20 md:py-32 bg-primary text-surface">
        <Container>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl italic font-light mb-12">
              {tp('constructionHeading')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {(['constructionPoint1', 'constructionPoint2', 'constructionPoint3', 'constructionPoint4'] as const).map((key, i) => (
                <motion.div
                  key={key}
                  {...fadeUp}
                  transition={{ duration: 0.6, ease: 'easeOut' as const, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-headline text-4xl text-secondary/60 italic mb-3">0{i + 1}</div>
                  <p className="font-label text-xs uppercase tracking-widest text-surface/70">{tp(key)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Products with Filters ── */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mb-12">
            <ProductFilter onFilterChange={setFilters} />
          </div>

          <ProductGrid products={filtered} />

          <p className="text-center text-on-surface-variant mt-20 text-lg font-body">
            {t('bottomCta')}
          </p>
        </Container>
      </section>
    </main>
  );
}
