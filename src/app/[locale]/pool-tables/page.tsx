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
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/categories/pool-tables.jpg"
          alt="Pool tables"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-dark/10" />

        <Container className="relative z-10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm font-body text-white/50">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-white/80">{t('title')}</li>
              </ol>
            </nav>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
              {t('title')}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted max-w-3xl text-lg leading-relaxed mb-10"
          >
            {t('intro')}
          </motion.p>

          <div className="mb-10">
            <ProductFilter onFilterChange={setFilters} />
          </div>

          <ProductGrid products={filtered} />

          <p className="text-center text-text-muted mt-16 text-lg font-body">
            {t('bottomCta')}
          </p>
        </Container>
      </section>
    </main>
  );
}
