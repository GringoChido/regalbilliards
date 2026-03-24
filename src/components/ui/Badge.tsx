import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'presidential' | 'cl-bailey' | 'imperial' | 'secondary';

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-primary/10 text-primary',
  presidential: 'bg-accent/25 text-white backdrop-blur-sm',
  'cl-bailey': 'bg-secondary/25 text-white backdrop-blur-sm',
  imperial: 'bg-primary/25 text-white backdrop-blur-sm',
  secondary: 'bg-white/15 text-white backdrop-blur-sm',
};

const Badge = ({ children, variant = 'default', className }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body',
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </span>
);

export default Badge;
