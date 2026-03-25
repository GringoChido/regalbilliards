'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  centered?: boolean;
}

const SectionHeading = ({
  children,
  className,
  as: Tag = 'h2',
  centered = true,
}: SectionHeadingProps) => {
  const sizes = {
    h1: 'text-5xl md:text-6xl lg:text-7xl -tracking-wide',
    h2: 'text-4xl md:text-5xl -tracking-wide',
    h3: 'text-3xl md:text-4xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Tag
        className={cn(
          'font-headline text-primary leading-tight',
          sizes[Tag],
          centered && 'text-center',
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default SectionHeading;
