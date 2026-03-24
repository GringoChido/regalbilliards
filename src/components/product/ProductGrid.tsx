'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <ProductCard product={product} />
      </motion.div>
    ))}
  </div>
);

export default ProductGrid;
