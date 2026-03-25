import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

const Container = ({ children, className, as: Component = 'div' }: ContainerProps) => (
  <Component className={cn('mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12', className)}>
    {children}
  </Component>
);

export default Container;
