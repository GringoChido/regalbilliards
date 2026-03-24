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
      'bg-surface rounded-xl border border-border overflow-hidden',
      hover && 'transition-shadow duration-300',
      className,
    )}
    whileHover={hover ? { scale: 1.02, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' } : undefined}
  >
    {children}
  </motion.div>
);

export default Card;
