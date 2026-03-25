'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { BUSINESS } from '@/lib/utils';
import type { Manufacturer } from '@/types';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const brands: { manufacturer: Manufacturer; nameKey: string; descKey: string; image: string }[] = [
  { manufacturer: 'cl-bailey', nameKey: 'clBaileyHeading', descKey: 'clBaileyDesc', image: '/images/products/addison.jpg' },
  { manufacturer: 'presidential', nameKey: 'presidentialHeading', descKey: 'presidentialDesc', image: '/images/products/hamilton.jpg' },
  { manufacturer: 'imperial', nameKey: 'imperialHeading', descKey: 'imperialDesc', image: '/images/products/penelope.jpg' },
];

export default function PoolTablesPage() {
  const t = useTranslations('PoolTables');
  const tp = useTranslations('PoolTablesPage');
  const td = useTranslations('ProductDetail');

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/categories/pool-tables-hero.jpg"
          alt="Pool tables"
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
              {t('eyebrow')}
            </p>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl text-surface -tracking-widest leading-[0.95] mb-6">
              {t('title')}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl leading-relaxed font-body font-light">
              {tp('manufacturerIntro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Blocks ── */}
      {brands.map(({ manufacturer, nameKey, descKey, image }, index) => {
        const brandProducts = products.filter((p) => p.category === 'pool-tables' && p.manufacturer === manufacturer);
        const imageLeft = index % 2 === 0;
        const bgClass = index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low';

        return (
          <section key={manufacturer} className={`py-20 md:py-32 ${bgClass}`}>
            <Container>
              {/* Brand Header — editorial split */}
              <motion.div
                {...fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center mb-16"
              >
                <div className={`lg:col-span-7 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-sm overflow-hidden group">
                    <Image
                      src={image}
                      alt={tp(nameKey)}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                    {td('authorizedDealer')}
                  </p>
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary -tracking-wide mb-6">
                    {tp(nameKey)}
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-[1.7] font-body">
                    {tp(descKey)}
                  </p>
                </div>
              </motion.div>

              {/* Product Grid for this brand */}
              <ProductGrid products={brandProducts} />
            </Container>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-32 bg-primary-container">
        <Container>
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl italic text-surface mb-6">
              {t('bottomCta')}
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
