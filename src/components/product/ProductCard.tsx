'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import type { Product, Manufacturer } from '@/types';

interface ProductCardProps {
  product: Product;
}

const manufacturerBadgeVariant: Record<Manufacturer, 'presidential' | 'cl-bailey' | 'imperial'> = {
  presidential: 'presidential',
  'cl-bailey': 'cl-bailey',
  imperial: 'imperial',
};

const manufacturerLabel: Record<Manufacturer, string> = {
  presidential: 'Presidential',
  'cl-bailey': 'C.L. Bailey',
  imperial: 'Imperial',
};

const styleLabel: Record<string, string> = {
  traditional: 'Traditional',
  contemporary: 'Contemporary',
  rustic: 'Rustic',
  modern: 'Modern',
};

const ProductCard = ({ product }: ProductCardProps) => {
  const locale = useLocale();

  return (
    <Link href={product.category === 'pool-tables' ? '/pool-tables' : `/category/${product.category}`} className="group block">
      <div className="overflow-hidden transition-all duration-500">
        <div className="relative h-64 md:h-72 overflow-hidden rounded-sm">
          <Image
            src={product.images[0] || '/images/categories/pool-tables.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge variant={manufacturerBadgeVariant[product.manufacturer]}>
              {manufacturerLabel[product.manufacturer]}
            </Badge>
          </div>
        </div>
        <div className="pt-5">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
            {product.style ? styleLabel[product.style] : manufacturerLabel[product.manufacturer]}
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
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
