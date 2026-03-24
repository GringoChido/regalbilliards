'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'es' : 'en';
  const label = nextLocale.toUpperCase();

  const switchLocale = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={`Switch to ${nextLocale === 'en' ? 'English' : 'Spanish'}`}
      className={cn(
        'px-2 py-1 text-xs font-semibold font-body uppercase tracking-wide rounded border border-border text-text-muted hover:text-primary hover:border-primary transition-colors',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default LocaleSwitcher;
