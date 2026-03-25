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

export default function PoolTablesPage() {
  const t = useTranslations('PoolTables');
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
      {/* Full-bleed Hero */}
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
            <p className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-4">
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

      {/* Products */}
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
