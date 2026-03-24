'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
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
  primary: 'bg-accent text-white font-semibold hover:bg-accent-hover',
  secondary: 'border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-surface',
  ghost: 'text-primary font-medium hover:text-accent',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
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
    'inline-flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
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
