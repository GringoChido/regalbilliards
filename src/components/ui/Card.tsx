'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = true }: CardProps) => (
  <motion.div
    className={cn(
      'bg-surface-container-low overflow-hidden',
      hover && 'transition-all duration-500',
      className,
    )}
    whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(28,28,26,0.05)' } : undefined}
  >
    {children}
  </motion.div>
);

export default Card;
