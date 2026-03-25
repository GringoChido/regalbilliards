import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'presidential' | 'cl-bailey' | 'imperial' | 'secondary';

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface/90 text-primary backdrop-blur-sm',
  presidential: 'bg-secondary/90 text-on-secondary backdrop-blur-sm',
  'cl-bailey': 'bg-primary-container/90 text-surface backdrop-blur-sm',
  imperial: 'bg-surface/90 text-primary backdrop-blur-sm',
  secondary: 'bg-surface/80 text-on-surface-variant backdrop-blur-sm',
};

const Badge = ({ children, variant = 'default', className }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center px-3 py-1 font-label text-[10px] uppercase tracking-[0.15em]',
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </span>
);

export default Badge;
