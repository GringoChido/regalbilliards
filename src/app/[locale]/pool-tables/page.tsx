'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';
import CTASection from '@/components/sections/CTASection';
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
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading as="h1" className="mb-6">{t('title')}</SectionHeading>
          <p className="text-center text-text-muted max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {t('intro')}
          </p>

          <div className="mb-8">
            <ProductFilter onFilterChange={setFilters} />
          </div>

          <ProductGrid products={filtered} />

          <p className="text-center text-text-muted mt-12 text-lg">
            {t('bottomCta')}
          </p>
        </Container>
      </section>
    </main>
  );
}
