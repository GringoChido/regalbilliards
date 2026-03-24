'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const categories = [
  { key: 'poolTables', href: '/pool-tables', image: '/images/placeholder-table.jpg' },
  { key: 'gameRoomFurniture', href: '/category/game-room-furniture', image: '/images/placeholder-table.jpg' },
  { key: 'gameTables', href: '/category/game-tables', image: '/images/placeholder-table.jpg' },
  { key: 'darts', href: '/category/darts', image: '/images/placeholder-table.jpg' },
  { key: 'accessories', href: '/category/accessories', image: '/images/placeholder-table.jpg' },
  { key: 'cueSticks', href: '/category/cue-sticks', image: '/images/placeholder-table.jpg' },
  { key: 'usedPoolTables', href: '/category/used-pool-tables', image: '/images/placeholder-table.jpg' },
  { key: 'serviceCenter', href: '/service-center', image: '/images/placeholder-service.jpg' },
] as const;

const CategoryGrid = () => {
  const t = useTranslations('CategoryGrid');

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading className="mb-12">{t('heading')}</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ key, href, image }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={href}>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={t(key)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-primary mb-1">{t(key)}</h3>
                    <p className="text-sm text-text-muted">{t(`${key}Desc`)}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGrid;
