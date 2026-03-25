'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const categories = [
  { key: 'poolTables', href: '/pool-tables', image: '/images/categories/pool-tables-hero.jpg' },
  { key: 'gameRoomFurniture', href: '/category/game-room-furniture', image: '/images/categories/game-room-furniture.jpg' },
  { key: 'gameTables', href: '/category/game-tables', image: '/images/categories/game-tables.jpg' },
  { key: 'darts', href: '/category/darts', image: '/images/categories/darts.jpg' },
  { key: 'accessories', href: '/category/accessories', image: '/images/categories/accessories.webp' },
  { key: 'cueSticks', href: '/category/cue-sticks', image: '/images/categories/cue-sticks.webp' },
  { key: 'usedPoolTables', href: '/category/used-pool-tables', image: '/images/categories/used-pool-tables.png' },
  { key: 'serviceCenter', href: '/service-center', image: '/images/categories/service-center.jpg' },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const CategoryGrid = () => {
  const t = useTranslations('CategoryGrid');

  return (
    <section className="py-24 md:py-40">
      {/* Marquee ticker */}
      <div className="overflow-hidden py-6 mb-20">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dupeIndex) => (
            <div key={dupeIndex} className="flex items-center gap-8 mr-8">
              {['pool tables', 'game rooms', 'service', 'accessories', 'cue sticks', 'darts', 'game tables', 'used tables'].map((item) => (
                <span key={`${dupeIndex}-${item}`} className="flex items-center gap-8">
                  <span className="text-2xl md:text-3xl font-headline italic text-on-surface/10 uppercase tracking-wide">
                    {item}
                  </span>
                  <span className="text-secondary/40 text-xl">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <motion.div {...fadeUp} className="mb-16">
          <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
            {t('heading')}
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary -tracking-wide">
            Everything for your <em>game room</em>
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Pool Tables — hero card col-span-8 row-span-2 */}
          <motion.div
            {...fadeUp}
            className="md:col-span-8 md:row-span-2"
          >
            <CategoryCard
              href={categories[0].href}
              image={categories[0].image}
              title={t(categories[0].key)}
              description={t(`${categories[0].key}Desc`)}
              className="h-80 md:h-full md:min-h-[560px]"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </motion.div>

          {/* Game Room Furniture — col-span-4 */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
            className="md:col-span-4"
          >
            <CategoryCard
              href={categories[1].href}
              image={categories[1].image}
              title={t(categories[1].key)}
              description={t(`${categories[1].key}Desc`)}
              className="h-64 md:h-full"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Game Tables — col-span-4 with mt offset */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
            className="md:col-span-4"
          >
            <CategoryCard
              href={categories[2].href}
              image={categories[2].image}
              title={t(categories[2].key)}
              description={t(`${categories[2].key}Desc`)}
              className="h-64 md:h-full"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Row of 3 small cards */}
          {categories.slice(3, 6).map((cat, index) => (
            <motion.div
              key={cat.key}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.2 + index * 0.05 }}
              className="md:col-span-4"
            >
              <CategoryCard
                href={cat.href}
                image={cat.image}
                title={t(cat.key)}
                description={t(`${cat.key}Desc`)}
                className="h-64 md:h-72"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}

          {/* Bottom row — 2 medium cards */}
          {categories.slice(6).map((cat, index) => (
            <motion.div
              key={cat.key}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.35 + index * 0.05 }}
              className="md:col-span-6"
            >
              <CategoryCard
                href={cat.href}
                image={cat.image}
                title={t(cat.key)}
                description={t(`${cat.key}Desc`)}
                className="h-64 md:h-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

interface CategoryCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  className?: string;
  sizes?: string;
}

const CategoryCard = ({ href, image, title, description, className, sizes }: CategoryCardProps) => (
  <Link href={href} className="group block relative overflow-hidden h-full rounded-sm">
    <div className={className}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        sizes={sizes || '(max-width: 768px) 100vw, 40vw'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

      {/* Floating label */}
      <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
          View Collection
        </span>
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <p className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
        Collection
      </p>
      <h3 className="font-headline text-2xl md:text-3xl text-surface mb-1 leading-tight">
        {title}
      </h3>
      <p className="text-surface/50 text-sm font-body line-clamp-2 max-w-sm">
        {description}
      </p>
    </div>
  </Link>
);

export default CategoryGrid;
