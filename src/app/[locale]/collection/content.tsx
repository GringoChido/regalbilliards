'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import type { ProductCategory } from '@/types';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const getCategoryHref = (slug: ProductCategory): string =>
  slug === 'pool-tables' ? '/pool-tables' : `/category/${slug}`;

const getProductCount = (slug: ProductCategory): number =>
  products.filter((p) => p.category === slug).length;

const categoryKeys: Record<string, string> = {
  'pool-tables': 'poolTables',
  'used-pool-tables': 'usedPoolTables',
  'game-room-furniture': 'gameRoomFurniture',
  'game-tables': 'gameTables',
  'darts': 'darts',
  'accessories': 'accessories',
  'cue-sticks': 'cueSticks',
};

export default function CollectionContent() {
  const t = useTranslations('Collection');
  const tCat = useTranslations('CategoryGrid');
  const locale = useLocale();

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/categories/pool-tables-hero.jpg"
          alt="Regal Billiards Collection"
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
            className="max-w-3xl"
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-4">
              {t('eyebrow')}
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              {t('title')}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Blocks — alternating left/right */}
      {categories.map((category, index) => {
        const imageLeft = index % 2 === 0;
        const count = getProductCount(category.slug);
        const catKey = categoryKeys[category.slug] || category.slug;
        const bgClass = index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low';

        return (
          <section key={category.slug} className={`py-20 md:py-32 ${bgClass}`}>
            <Container>
              <motion.div
                {...fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Link href={getCategoryHref(category.slug)} className="block relative h-72 md:h-96 lg:h-[28rem] rounded-sm overflow-hidden group">
                    <Image
                      src={category.image}
                      alt={category.name[locale as 'en' | 'es']}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </Link>
                </div>

                {/* Text + CTA */}
                <div className={`lg:col-span-5 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                    {t('productCount', { count })}
                  </p>
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary -tracking-wide mb-6">
                    {category.name[locale as 'en' | 'es']}
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-[1.7] mb-10 font-body">
                    {category.description[locale as 'en' | 'es']}
                  </p>
                  <Link
                    href={getCategoryHref(category.slug)}
                    className="group inline-flex items-center gap-4 px-10 py-4 bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all duration-300"
                  >
                    {t('viewCategory')}
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            </Container>
          </section>
        );
      })}
    </main>
  );
}
