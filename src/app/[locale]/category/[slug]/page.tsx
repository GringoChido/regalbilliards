'use client';

import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
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
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading as="h1" className="mb-6">
            {category.name[locale as 'en' | 'es']}
          </SectionHeading>
          <p className="text-center text-text-muted max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {category.description[locale as 'en' | 'es']}
          </p>

          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">
                Visit our showroom to see our full selection.
              </p>
            </div>
          )}

          <p className="text-center text-text-muted mt-12 text-lg">
            {t('bottomCta')}
          </p>
        </Container>
      </section>
    </main>
  );
}
