'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Badge, { getManufacturerVariant } from '@/components/ui/Badge';
import type { Product, Manufacturer } from '@/types';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

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

const getDisplayBrand = (product: Product): string =>
  product.brand || manufacturerLabel[product.manufacturer] || '';

const ProductCard = ({ product, compact }: ProductCardProps) => {
  const locale = useLocale();
  const href = product.category === 'pool-tables' ? '/pool-tables' : `/category/${product.category}`;
  const brand = getDisplayBrand(product);

  if (compact) {
    return (
      <Link href={href} className="group block">
        <div className="overflow-hidden">
          <div className="relative h-40 overflow-hidden rounded-sm">
            <Image
              src={product.images[0] || '/images/categories/accessories.webp'}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="pt-3">
            {brand && (
              <p className="font-label text-[9px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">
                {brand}
              </p>
            )}
            <h3 className="font-headline text-base text-primary leading-tight mb-1">
              {product.name}
            </h3>
            {product.priceRange && (
              <p className="text-sm text-on-surface-variant font-body">{product.priceRange}</p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden transition-all duration-500">
        <div className="relative h-64 md:h-72 overflow-hidden rounded-sm">
          <Image
            src={product.images[0] || '/images/categories/pool-tables.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {brand && (
            <div className="absolute top-4 left-4">
              <Badge variant={getManufacturerVariant(product.manufacturer)}>
                {brand}
              </Badge>
            </div>
          )}
        </div>
        <div className="pt-5">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
            {product.subcategory?.replace(/-/g, ' ') || brand}
          </p>
          <h3 className="font-headline text-xl md:text-2xl text-primary mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-on-surface-variant line-clamp-2 mb-3 font-body">
            {product.description[locale as 'en' | 'es']}
          </p>
          <div className="flex items-center justify-between">
            {product.priceRange && (
              <p className="text-base font-semibold text-primary font-body">{product.priceRange}</p>
            )}
            <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] border-b border-secondary/20 pb-0.5 group-hover:border-secondary transition-colors">
              See in Showroom
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
