'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'tertiary';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-secondary text-on-secondary font-label uppercase tracking-widest hover:brightness-110 rounded-sm',
  ghost: 'text-surface border-b border-surface/30 pb-1 font-label uppercase tracking-widest hover:border-secondary hover:text-secondary rounded-none',
  tertiary: 'text-secondary font-label uppercase tracking-[0.2em] border-b border-secondary/20 pb-1 hover:border-secondary rounded-none',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-6 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-sm',
};

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  as,
  href,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) => {
  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
