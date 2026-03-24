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
      'bg-surface rounded-2xl border border-border overflow-hidden',
      hover && 'transition-all duration-500',
      className,
    )}
    whileHover={hover ? { y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' } : undefined}
  >
    {children}
  </motion.div>
);

export default Card;
