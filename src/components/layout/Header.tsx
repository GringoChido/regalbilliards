'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
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
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-sm'
            : 'bg-surface',
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="font-heading text-xl lg:text-2xl text-primary hover:text-accent transition-colors"
              aria-label={BUSINESS.name}
            >
              Regal Billiards
            </Link>

            <Navigation />

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-sm font-medium font-body text-primary hover:text-accent transition-colors"
                aria-label={`${t('callUs')}: ${BUSINESS.phone}`}
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS.phone}</span>
              </a>

              <LocaleSwitcher />

              <Button as="a" href="/contact" size="sm">
                Visit showroom
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label={t('menu')}
              className="p-2 -mr-2 text-primary hover:text-accent transition-colors lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <div className="h-16 lg:h-20" aria-hidden="true" />

      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
};

export default Header;
