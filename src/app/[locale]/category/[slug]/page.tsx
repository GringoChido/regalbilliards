'use client';

import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import type { ProductCategory } from '@/types';

export default function CategoryPage() {
  const params = useParams();
  const t = useTranslations('Category');
  const locale = useLocale();
  const slug = params.slug as string;

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug as ProductCategory);

  if (!category) {
    return (
      <main id="main-content" className="py-16">
        <Container>
          <p className="text-center text-text-muted">Category not found</p>
        </Container>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* Category Hero */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
        <Image
          src={category.image}
          alt={category.name[locale as 'en' | 'es']}
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
                <li className="text-white/80">{category.name[locale as 'en' | 'es']}</li>
              </ol>
            </nav>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
              {category.name[locale as 'en' | 'es']}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Products section */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted max-w-3xl text-lg leading-relaxed mb-12"
          >
            {category.description[locale as 'en' | 'es']}
          </motion.p>

          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-16 rounded-2xl bg-surface border border-border">
              <p className="text-text-muted text-lg font-body">
                Visit our showroom to see our full selection.
              </p>
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-muted mt-16 text-lg font-body"
          >
            {t('bottomCta')}
          </motion.p>
        </Container>
      </section>
    </main>
  );
}
