'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS } from '@/lib/utils';
import Navigation from '@/components/layout/Navigation';
import MobileNav from '@/components/layout/MobileNav';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';

const Header = () => {
  const t = useTranslations('Nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
          scrolled
            ? 'bg-surface/80 backdrop-blur-md shadow-[0_20px_40px_rgba(28,28,26,0.05)]'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-headline text-2xl lg:text-[1.65rem] tracking-tighter transition-colors duration-300',
                scrolled ? 'text-primary' : 'text-surface',
              )}
              aria-label={BUSINESS.name}
            >
              Regal Billiards
            </Link>

            {/* Desktop navigation — centered */}
            <Navigation scrolled={scrolled} />

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  'flex items-center gap-2 font-label text-xs uppercase tracking-widest transition-colors duration-300',
                  scrolled
                    ? 'text-on-surface-variant hover:text-secondary'
                    : 'text-surface/70 hover:text-surface',
                )}
                aria-label={`${t('callUs')}: ${BUSINESS.phone}`}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{BUSINESS.phone}</span>
              </a>

              <LocaleSwitcher scrolled={scrolled} />

              <Link
                href="/contact-us"
                className={cn(
                  'inline-flex items-center px-6 py-2.5 font-label text-xs uppercase tracking-widest rounded-sm transition-all duration-300',
                  scrolled
                    ? 'bg-secondary text-on-secondary hover:brightness-110'
                    : 'bg-secondary text-on-secondary hover:brightness-110',
                )}
              >
                {t('visitShowroom') || 'Visit Showroom'}
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label={t('menu')}
              className={cn(
                'p-2 -mr-2 transition-colors lg:hidden',
                scrolled
                  ? 'text-primary hover:text-secondary'
                  : 'text-surface hover:text-surface/70',
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
};

export default Header;
