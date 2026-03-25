'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  compact?: boolean;
}

const ProductGrid = ({ products, compact }: ProductGridProps) => (
  <div className={compact
    ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
  }>
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      >
        <ProductCard product={product} compact={compact} />
      </motion.div>
    ))}
  </div>
);

export default ProductGrid;
