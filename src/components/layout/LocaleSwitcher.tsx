'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps {
  className?: string;
  scrolled?: boolean;
}

const LocaleSwitcher = ({ className, scrolled }: LocaleSwitcherProps) => {
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
        'px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.2em] border transition-colors duration-300 cursor-pointer',
        scrolled
          ? 'border-outline-variant/30 text-on-surface-variant hover:text-secondary hover:border-secondary/30'
          : 'border-surface/30 text-surface/70 hover:text-surface hover:border-surface/60',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default LocaleSwitcher;
