'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
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
    <Card>
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.images[0] || '/images/placeholder-table.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={manufacturerBadgeVariant[product.manufacturer]}>
            {manufacturerLabel[product.manufacturer]}
          </Badge>
          {product.style && (
            <Badge variant="secondary">{styleLabel[product.style]}</Badge>
          )}
        </div>
        <h3 className="font-heading text-xl text-primary mb-2">{product.name}</h3>
        <p className="text-sm text-text-muted line-clamp-2 mb-3">
          {product.description[locale as 'en' | 'es']}
        </p>
        {product.priceRange && (
          <p className="text-sm font-medium text-accent mb-3">{product.priceRange}</p>
        )}
        <Link
          href={`/pool-tables/${product.slug}`}
          className="text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          View details &rarr;
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
