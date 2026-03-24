'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
    <Link href={`/pool-tables/${product.slug}`} className="group block">
      <div className="bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={product.images[0] || '/images/categories/pool-tables.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge variant={manufacturerBadgeVariant[product.manufacturer]}>
              {manufacturerLabel[product.manufacturer]}
            </Badge>
            {product.style && (
              <Badge variant="secondary">{styleLabel[product.style]}</Badge>
            )}
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-heading text-xl md:text-2xl text-primary mb-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2 mb-3 font-body">
                {product.description[locale as 'en' | 'es']}
              </p>
              {product.priceRange && (
                <p className="text-base font-semibold text-accent font-body">{product.priceRange}</p>
              )}
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 mt-1">
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
