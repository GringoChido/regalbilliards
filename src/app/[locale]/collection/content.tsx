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

      {/* Category Bento Grid */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Pool Tables — hero card */}
            <motion.div {...fadeUp} className="md:col-span-8 md:row-span-2">
              <CollectionCard
                slug="pool-tables"
                name={categories.find((c) => c.slug === 'pool-tables')?.name[locale as 'en' | 'es'] || 'Pool Tables'}
                description={tCat('poolTablesDesc')}
                image={categories.find((c) => c.slug === 'pool-tables')?.image || ''}
                count={getProductCount('pool-tables')}
                countLabel={t('productCount', { count: getProductCount('pool-tables') })}
                viewLabel={t('viewCategory')}
                className="h-80 md:h-full md:min-h-[560px]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>

            {/* Used Pool Tables */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
              className="md:col-span-4"
            >
              <CollectionCard
                slug="used-pool-tables"
                name={categories.find((c) => c.slug === 'used-pool-tables')?.name[locale as 'en' | 'es'] || 'Used Pool Tables'}
                description={tCat('usedPoolTablesDesc')}
                image={categories.find((c) => c.slug === 'used-pool-tables')?.image || ''}
                count={getProductCount('used-pool-tables')}
                countLabel={t('productCount', { count: getProductCount('used-pool-tables') })}
                viewLabel={t('viewCategory')}
                className="h-64 md:h-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* Game Room Furniture */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
              className="md:col-span-4"
            >
              <CollectionCard
                slug="game-room-furniture"
                name={categories.find((c) => c.slug === 'game-room-furniture')?.name[locale as 'en' | 'es'] || 'Game Room Furniture'}
                description={tCat('gameRoomFurnitureDesc')}
                image={categories.find((c) => c.slug === 'game-room-furniture')?.image || ''}
                count={getProductCount('game-room-furniture')}
                countLabel={t('productCount', { count: getProductCount('game-room-furniture') })}
                viewLabel={t('viewCategory')}
                className="h-64 md:h-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* Game Tables, Darts, Cue Sticks — row of 3 */}
            {(['game-tables', 'darts', 'cue-sticks'] as const).map((slug, index) => {
              const cat = categories.find((c) => c.slug === slug);
              const catKey = slug === 'game-tables' ? 'gameTables' : slug === 'darts' ? 'darts' : 'cueSticks';
              return (
                <motion.div
                  key={slug}
                  {...fadeUp}
                  transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.2 + index * 0.05 }}
                  className="md:col-span-4"
                >
                  <CollectionCard
                    slug={slug}
                    name={cat?.name[locale as 'en' | 'es'] || ''}
                    description={tCat(`${catKey}Desc`)}
                    image={cat?.image || ''}
                    count={getProductCount(slug)}
                    countLabel={t('productCount', { count: getProductCount(slug) })}
                    viewLabel={t('viewCategory')}
                    className="h-64 md:h-72"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              );
            })}

            {/* Accessories — wider bottom */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.35 }}
              className="md:col-span-12"
            >
              <CollectionCard
                slug="accessories"
                name={categories.find((c) => c.slug === 'accessories')?.name[locale as 'en' | 'es'] || 'Accessories'}
                description={tCat('accessoriesDesc')}
                image={categories.find((c) => c.slug === 'accessories')?.image || ''}
                count={getProductCount('accessories')}
                countLabel={t('productCount', { count: getProductCount('accessories') })}
                viewLabel={t('viewCategory')}
                className="h-64 md:h-80"
                sizes="100vw"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface CollectionCardProps {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
  count: number;
  countLabel: string;
  viewLabel: string;
  className?: string;
  sizes?: string;
}

const CollectionCard = ({ slug, name, description, image, count, countLabel, viewLabel, className, sizes }: CollectionCardProps) => (
  <Link href={getCategoryHref(slug)} className="group block relative overflow-hidden h-full rounded-sm">
    <div className={className}>
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        sizes={sizes || '(max-width: 768px) 100vw, 40vw'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

      {/* Hover reveal label */}
      <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
          {viewLabel}
        </span>
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <p className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
        {countLabel}
      </p>
      <h2 className="font-headline text-2xl md:text-3xl text-surface mb-1 leading-tight">
        {name}
      </h2>
      <p className="text-surface/50 text-sm font-body line-clamp-2 max-w-md">
        {description}
      </p>
    </div>
  </Link>
);
