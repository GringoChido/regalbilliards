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
          <p className="text-center text-on-surface-variant">Category not found</p>
        </Container>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* Full-bleed Category Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={category.image}
          alt={category.name[locale as 'en' | 'es']}
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
              {category.name[locale as 'en' | 'es']}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {category.description[locale as 'en' | 'es']}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-20 md:py-32">
        <Container>
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-20 bg-surface-container-low">
              <p className="text-on-surface-variant text-lg font-body">
                Visit our showroom to see our full selection.
              </p>
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-on-surface-variant mt-20 text-lg font-body"
          >
            {t('bottomCta')}
          </motion.p>
        </Container>
      </section>
    </main>
  );
}
