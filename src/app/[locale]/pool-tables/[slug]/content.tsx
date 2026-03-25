'use client';

import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge, { getManufacturerVariant } from '@/components/ui/Badge';
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

const manufacturerLabel: Record<Manufacturer, string> = {
  presidential: 'Presidential',
  'cl-bailey': 'C.L. Bailey',
  imperial: 'Imperial',
  ram: 'RAM',
  tornado: 'Tornado',
  viper: 'Viper',
  cuetec: 'Cuetec',
  lucasi: 'Lucasi',
  players: 'Players',
  viking: 'Viking',
  aramith: 'Aramith',
  simonis: 'Simonis',
  'level-best': 'Level Best',
  brunswick: 'Brunswick',
  olhausen: 'Olhausen',
  connelly: 'Connelly',
  gandy: 'Gandy',
  generic: '',
};

const styleLabel: Record<string, string> = {
  traditional: 'Traditional',
  contemporary: 'Contemporary',
  rustic: 'Rustic',
  modern: 'Modern',
};

export default function ProductDetailContent() {
  const params = useParams();
  const t = useTranslations('ProductDetail');
  const locale = useLocale();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug && p.category === 'pool-tables');

  if (!product) {
    return (
      <main id="main-content" className="py-32">
        <Container>
          <p className="text-center text-on-surface-variant">Product not found</p>
        </Container>
      </main>
    );
  }

  const brand = manufacturerLabel[product.manufacturer] || product.brand || '';
  const related = products
    .filter((p) => p.category === 'pool-tables' && p.manufacturer === product.manufacturer && p.id !== product.id)
    .slice(0, 3);

  return (
    <main id="main-content">
      {/* ── Back nav ── */}
      <div className="pt-28 pb-4 px-6 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
        <Link
          href="/pool-tables"
          className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToPoolTables')}
        </Link>
      </div>

      {/* ── Product Hero ── */}
      <section className="py-8 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Image — 7 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative h-80 md:h-[28rem] lg:h-[32rem] rounded-sm overflow-hidden"
            >
              <Image
                src={product.images[0] || '/images/categories/pool-tables.jpg'}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>

            {/* Info — 5 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              {brand && (
                <Badge variant={getManufacturerVariant(product.manufacturer)} className="mb-4">
                  {brand}
                </Badge>
              )}

              <h1 className="font-headline text-4xl md:text-5xl text-primary -tracking-wide leading-tight mb-4">
                {product.name}
              </h1>

              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                {t('styleLabel')}: {styleLabel[product.style] || product.style}
              </p>

              {product.priceRange && (
                <p className="font-headline text-2xl text-primary mb-2">{product.priceRange}</p>
              )}
              <p className="text-sm text-on-surface-variant mb-8 font-body italic">
                {t('priceNote')}
              </p>

              <p className="text-on-surface-variant text-lg leading-[1.7] mb-10 font-body">
                {product.description[locale as 'en' | 'es']}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all"
                >
                  {t('visitShowroom')}
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 font-label text-xs uppercase tracking-widest text-primary border-b border-outline-variant/30 hover:border-secondary hover:text-secondary transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {t('callForDetails')}
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Features ── */}
      {product.features.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-container-low">
          <Container>
            <motion.div {...fadeUp}>
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-8">{t('features')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-on-surface-variant font-body">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="py-20 md:py-32">
          <Container>
            <motion.div {...fadeUp} className="mb-12">
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                {t('moreFrom', { manufacturer: brand })}
              </p>
            </motion.div>
            <ProductGrid products={related} />
          </Container>
        </section>
      )}
    </main>
  );
}
