'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS } from '@/lib/utils';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  key: string;
  href: string;
  children?: { key: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    key: 'collection',
    href: '/collection',
    children: [
      { key: 'poolTables', href: '/pool-tables' },
      { key: 'usedTables', href: '/category/used-pool-tables' },
      { key: 'gameTables', href: '/category/game-tables' },
      { key: 'gameRoomFurniture', href: '/category/game-room-furniture' },
      { key: 'darts', href: '/category/darts' },
      { key: 'accessories', href: '/category/accessories' },
      { key: 'cueSticks', href: '/category/cue-sticks' },
    ],
  },
  { key: 'heritage', href: '/about' },
  { key: 'serviceCenter', href: '/service-center' },
  { key: 'contact', href: '/contact-us' },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const isActive = (href: string) => {
    const strippedPath = pathname.replace(/^\/(en|es)/, '') || '/';
    return strippedPath === href || strippedPath.startsWith(href + '/');
  };

  const toggleSection = (key: string) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-surface lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t('menu')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/15">
                <span className="font-headline text-2xl text-primary tracking-tighter">
                  Regal Billiards
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t('close')}
                  className="p-2 -mr-2 text-on-surface-variant hover:text-primary transition-colors rounded-md"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item.href);

                    if (item.children) {
                      return (
                        <li key={item.key}>
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              className={cn(
                                'flex-1 py-3 font-headline text-3xl transition-colors',
                                active ? 'text-secondary' : 'text-primary',
                              )}
                            >
                              {t(item.key)}
                            </Link>
                            <button
                              type="button"
                              onClick={() => toggleSection(item.key)}
                              aria-expanded={expandedSection === item.key}
                              aria-label={`${t(item.key)} submenu`}
                              className="p-2 text-on-surface-variant hover:text-secondary transition-colors"
                            >
                              <ChevronDown
                                className={cn(
                                  'h-5 w-5 transition-transform duration-200',
                                  expandedSection === item.key && 'rotate-180',
                                )}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {expandedSection === item.key && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="overflow-hidden pl-4 border-l border-secondary/20 ml-2"
                              >
                                {item.children.map((child) => (
                                  <li key={child.key}>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        'block py-2.5 font-label text-sm uppercase tracking-widest transition-colors',
                                        isActive(child.href)
                                          ? 'text-secondary font-semibold'
                                          : 'text-on-surface-variant hover:text-secondary',
                                      )}
                                    >
                                      {t(child.key)}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    }

                    return (
                      <li key={item.key}>
                        <Link
                          href={item.href}
                          className={cn(
                            'block py-3 font-headline text-3xl transition-colors',
                            active ? 'text-secondary' : 'text-primary hover:text-secondary',
                          )}
                        >
                          {t(item.key)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="px-6 py-6 border-t border-outline-variant/15 space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-primary font-label text-sm uppercase tracking-widest"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-on-surface-variant font-body text-sm"
                >
                  <MapPin className="h-4 w-4 text-secondary" />
                  {BUSINESS.address}
                </a>
                <div className="flex items-center justify-between pt-2">
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
