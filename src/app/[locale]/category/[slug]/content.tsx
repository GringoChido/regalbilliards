'use client';

import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { BUSINESS } from '@/lib/utils';
import type { ProductCategory } from '@/types';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const subcategoryMap: Record<string, { namespace: string; subcategories: { key: string; value: string }[] }> = {
  'game-tables': {
    namespace: 'GameTables',
    subcategories: [
      { key: 'foosball', value: 'foosball' },
      { key: 'airHockey', value: 'air-hockey' },
      { key: 'shuffleboard', value: 'shuffleboard' },
      { key: 'tableTennis', value: 'table-tennis' },
    ],
  },
  'darts': {
    namespace: 'DartsPage',
    subcategories: [
      { key: 'cabinets', value: 'cabinets' },
      { key: 'dartboards', value: 'dartboards' },
      { key: 'dartSets', value: 'dart-sets' },
      { key: 'dartAccessories', value: 'dart-accessories' },
    ],
  },
  'accessories': {
    namespace: 'AccessoriesPage',
    subcategories: [
      { key: 'ballSets', value: 'ball-sets' },
      { key: 'cueRacks', value: 'cue-racks' },
      { key: 'pockets', value: 'pockets' },
      { key: 'covers', value: 'covers' },
      { key: 'cloth', value: 'cloth' },
      { key: 'lightFixtures', value: 'light-fixtures' },
      { key: 'otherAccessories', value: 'other-accessories' },
    ],
  },
  'game-room-furniture': {
    namespace: 'GameRoomFurniture',
    subcategories: [
      { key: 'presidentialHeading', value: 'presidential-collection' },
      { key: 'levelBestHeading', value: 'level-best-collection' },
      { key: 'ramHeading', value: 'ram-collection' },
    ],
  },
};

const categoryNamespaceMap: Record<string, string> = {
  'used-pool-tables': 'UsedPoolTables',
  'game-room-furniture': 'GameRoomFurniture',
  'game-tables': 'GameTables',
  'darts': 'DartsPage',
  'accessories': 'AccessoriesPage',
  'cue-sticks': 'CueSticksPage',
};

export default function CategoryContent() {
  const params = useParams();
  const tCategory = useTranslations('Category');
  const locale = useLocale();
  const slug = params.slug as string;

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug as ProductCategory);
  const namespace = categoryNamespaceMap[slug];
  const subcatConfig = subcategoryMap[slug];
  const useCompact = slug === 'accessories' || slug === 'darts';

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
      {/* ── Hero ── */}
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
              {tCategory('eyebrow')}
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

      {/* ── Category Intro ── */}
      {namespace && <CategoryIntro namespace={namespace} slug={slug} />}

      {/* ── Used Pool Tables: Buyer Education ── */}
      {slug === 'used-pool-tables' && <UsedTableEducation />}

      {/* ── Cue Sticks: Skill Guide ── */}
      {slug === 'cue-sticks' && <CueStickGuide />}

      {/* ── Subcategory Sections OR Full Grid ── */}
      {subcatConfig ? (
        <SubcategorySections
          config={subcatConfig}
          products={categoryProducts}
          compact={useCompact}
          slug={slug}
        />
      ) : (
        <section className="py-20 md:py-32">
          <Container>
            <ProductGrid products={categoryProducts} compact={useCompact} />
          </Container>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 md:py-32 bg-primary-container">
        <Container>
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl italic text-surface mb-6">
              {tCategory('bottomCta')}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-on-primary-container">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 font-body hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body hover:text-secondary transition-colors">
                <MapPin className="w-4 h-4 text-secondary" />
                {BUSINESS.address}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

/* ── Category Intro Section ── */
const CategoryIntro = ({ namespace, slug }: { namespace: string; slug: string }) => {
  const t = useTranslations(namespace);

  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-on-surface-variant text-lg md:text-xl leading-[1.7] font-body">
            {t('introText')}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

/* ── Used Pool Tables: Buyer Education ── */
const UsedTableEducation = () => {
  const t = useTranslations('UsedPoolTables');

  return (
    <>
      <section className="py-20 md:py-32 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">{t('pitfallsHeading')}</h2>
              <p className="text-on-surface-variant text-lg leading-[1.7]">{t('pitfallsText')}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">{t('differenceHeading')}</h2>
              <p className="text-on-surface-variant text-lg leading-[1.7]">{t('differenceText')}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 bg-primary text-surface">
        <Container>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl italic mb-8">{t('includesHeading')}</h2>
            <p className="text-on-primary-container text-lg leading-[1.7] font-light mb-10">{t('includesList')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Delivery', 'Professional Installation', 'Fresh Cloth Option', 'Accessories'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-surface/80 font-label text-xs uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <motion.p {...fadeUp} className="text-center text-on-surface-variant text-lg font-body">
            <span className="font-semibold text-primary">{t('brandsHeading')}:</span> {t('brandsText')}
          </motion.p>
        </Container>
      </section>
    </>
  );
};

/* ── Cue Stick Skill Guide ── */
const CueStickGuide = () => {
  const t = useTranslations('CueSticksPage');

  const levels = [
    { heading: 'beginnerHeading', text: 'beginnerText', num: '01' },
    { heading: 'intermediateHeading', text: 'intermediateText', num: '02' },
    { heading: 'advancedHeading', text: 'advancedText', num: '03' },
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-container-low">
      <Container>
        <motion.div {...fadeUp} className="mb-12">
          <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
            {t('brandsText')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {levels.map(({ heading, text, num }, index) => (
            <motion.div
              key={heading}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-headline text-7xl text-outline-variant/15 italic leading-none mb-4 select-none">
                {num}
              </div>
              <h3 className="font-headline text-xl text-primary mb-3">{t(heading)}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t(text)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ── Subcategory Sections ── */
const SubcategorySections = ({
  config,
  products: categoryProducts,
  compact,
  slug,
}: {
  config: { namespace: string; subcategories: { key: string; value: string }[] };
  products: typeof products;
  compact: boolean;
  slug: string;
}) => {
  const t = useTranslations(config.namespace);
  const isFurniture = slug === 'game-room-furniture';

  return (
    <>
      {config.subcategories.map(({ key, value }, index) => {
        const filtered = categoryProducts.filter((p) => p.subcategory === value);
        if (filtered.length === 0) return null;

        const bgClass = index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low';
        const descKey = isFurniture ? key.replace('Heading', 'Text') : undefined;

        return (
          <section key={value} className={`py-16 md:py-24 ${bgClass}`}>
            <Container>
              <motion.div {...fadeUp} className="mb-10">
                <h2 className="font-headline text-2xl md:text-3xl text-primary -tracking-wide">
                  {t(key)}
                </h2>
                {descKey && (
                  <p className="text-on-surface-variant text-lg leading-[1.7] mt-4 max-w-3xl">
                    {t(descKey)}
                  </p>
                )}
              </motion.div>
              <ProductGrid products={filtered} compact={compact} />
            </Container>
          </section>
        );
      })}
    </>
  );
};
