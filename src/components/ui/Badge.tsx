import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'presidential' | 'cl-bailey' | 'imperial' | 'secondary';

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-primary/10 text-primary',
  presidential: 'bg-accent/20 text-accent-hover',
  'cl-bailey': 'bg-secondary/20 text-secondary',
  imperial: 'bg-primary/15 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
};

const Badge = ({ children, variant = 'default', className }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </span>
);

export default Badge;
