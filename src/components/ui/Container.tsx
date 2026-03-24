import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

const Container = ({ children, className, as: Component = 'div' }: ContainerProps) => (
  <Component className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </Component>
);

export default Container;
