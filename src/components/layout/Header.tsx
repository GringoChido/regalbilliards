'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Navigation from '@/components/layout/Navigation';
import MobileNav from '@/components/layout/MobileNav';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';

const Header = () => {
  const t = useTranslations('Nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent',
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-18 lg:h-22">
            <Link
              href="/"
              className={cn(
                'font-heading text-2xl lg:text-[1.65rem] tracking-tight transition-colors duration-300',
                scrolled ? 'text-surface' : 'text-surface',
              )}
              aria-label={BUSINESS.name}
            >
              Regal Billiards
            </Link>

            <Navigation scrolled={scrolled} />

            <div className="hidden lg:flex items-center gap-5">
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium font-body transition-colors duration-300',
                  scrolled
                    ? 'text-surface/80 hover:text-accent'
                    : 'text-surface/80 hover:text-surface',
                )}
                aria-label={`${t('callUs')}: ${BUSINESS.phone}`}
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS.phone}</span>
              </a>

              <LocaleSwitcher scrolled={scrolled} />

              <Link
                href="/contact-us"
                className={cn(
                  'inline-flex items-center px-5 py-2.5 text-sm font-semibold font-body rounded-full transition-all duration-300',
                  scrolled
                    ? 'bg-accent text-surface hover:bg-accent-hover'
                    : 'bg-surface/15 text-surface backdrop-blur-sm border border-surface/30 hover:bg-surface/25',
                )}
              >
                {t('visitShowroom') || 'Visit Showroom'}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label={t('menu')}
              className={cn(
                'p-2 -mr-2 transition-colors lg:hidden',
                scrolled
                  ? 'text-surface hover:text-accent'
                  : 'text-surface hover:text-surface/70',
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
};

export default Header;
