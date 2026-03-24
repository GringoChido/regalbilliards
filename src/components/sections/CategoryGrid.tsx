'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { key: 'poolTables', href: '/pool-tables', image: '/images/placeholder-table.jpg', size: 'large' },
  { key: 'gameRoomFurniture', href: '/category/game-room-furniture', image: '/images/placeholder-table.jpg', size: 'medium' },
  { key: 'gameTables', href: '/category/game-tables', image: '/images/placeholder-table.jpg', size: 'medium' },
  { key: 'darts', href: '/category/darts', image: '/images/placeholder-table.jpg', size: 'small' },
  { key: 'accessories', href: '/category/accessories', image: '/images/placeholder-table.jpg', size: 'small' },
  { key: 'cueSticks', href: '/category/cue-sticks', image: '/images/placeholder-table.jpg', size: 'small' },
  { key: 'usedPoolTables', href: '/category/used-pool-tables', image: '/images/placeholder-table.jpg', size: 'medium' },
  { key: 'serviceCenter', href: '/service-center', image: '/images/placeholder-service.jpg', size: 'medium' },
] as const;

const CategoryGrid = () => {
  const t = useTranslations('CategoryGrid');

  return (
    <section className="py-20 md:py-32">
      {/* Marquee ticker */}
      <div className="overflow-hidden py-6 mb-16 border-y border-border">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dupeIndex) => (
            <div key={dupeIndex} className="flex items-center gap-8 mr-8">
              {['pool tables', 'game rooms', 'service', 'accessories', 'cue sticks', 'darts', 'game tables', 'used tables'].map((item) => (
                <span key={`${dupeIndex}-${item}`} className="flex items-center gap-8">
                  <span className="text-2xl md:text-3xl font-heading text-primary/30 uppercase tracking-wide">
                    {item}
                  </span>
                  <span className="text-accent text-xl">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-3">
            {t('heading')}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
            Everything for your game room
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Pool Tables — hero-sized card spanning 7 columns and 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 md:row-span-2"
          >
            <CategoryCard
              href={categories[0].href}
              image={categories[0].image}
              title={t(categories[0].key)}
              description={t(`${categories[0].key}Desc`)}
              tall
            />
          </motion.div>

          {/* Game Room Furniture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-5"
          >
            <CategoryCard
              href={categories[1].href}
              image={categories[1].image}
              title={t(categories[1].key)}
              description={t(`${categories[1].key}Desc`)}
            />
          </motion.div>

          {/* Game Tables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <CategoryCard
              href={categories[2].href}
              image={categories[2].image}
              title={t(categories[2].key)}
              description={t(`${categories[2].key}Desc`)}
            />
          </motion.div>

          {/* Row of 3 small cards */}
          {categories.slice(3, 6).map((cat, index) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="md:col-span-4"
            >
              <CategoryCard
                href={cat.href}
                image={cat.image}
                title={t(cat.key)}
                description={t(`${cat.key}Desc`)}
              />
            </motion.div>
          ))}

          {/* Bottom row — 2 medium cards */}
          {categories.slice(6).map((cat, index) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="md:col-span-6"
            >
              <CategoryCard
                href={cat.href}
                image={cat.image}
                title={t(cat.key)}
                description={t(`${cat.key}Desc`)}
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
  tall?: boolean;
}

const CategoryCard = ({ href, image, title, description, tall }: CategoryCardProps) => (
  <Link href={href} className="group block relative rounded-2xl overflow-hidden h-full">
    <div className={tall ? 'h-80 md:h-full min-h-[500px]' : 'h-64 md:h-72'}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={tall ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 40vw'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl text-white mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-white/60 text-sm font-body line-clamp-2 max-w-sm">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  </Link>
);

export default CategoryGrid;
