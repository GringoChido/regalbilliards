'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavChild {
  key: string;
  href: string;
}

interface NavItem {
  key: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    key: 'heritage',
    href: '/about',
  },
  {
    key: 'collections',
    href: '/pool-tables',
    children: [
      { key: 'poolTables', href: '/pool-tables' },
      { key: 'usedTables', href: '/pool-tables/used' },
      { key: 'gameTables', href: '/category/game-tables' },
      { key: 'gameRoomFurniture', href: '/category/game-room-furniture' },
      { key: 'darts', href: '/category/darts' },
      { key: 'accessories', href: '/category/accessories' },
      { key: 'cueSticks', href: '/category/cue-sticks' },
    ],
  },
  { key: 'services', href: '/service-center' },
  {
    key: 'atelier',
    href: '/contact-us',
    children: [
      { key: 'contact', href: '/contact-us' },
      { key: 'gallery', href: '/gallery' },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
};

interface NavigationProps {
  scrolled?: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => {
    const strippedPath = pathname.replace(/^\/(en|es)/, '') || '/';
    return strippedPath === href || strippedPath.startsWith(href + '/');
  };

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <nav aria-label={t('menu')} className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const active = isActive(item.href);

        if (item.children) {
          return (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1.5 px-4 py-2 font-label text-xs uppercase tracking-widest transition-colors duration-300',
                  scrolled
                    ? active
                      ? 'text-secondary font-semibold'
                      : 'text-on-surface-variant hover:text-secondary'
                    : active
                      ? 'text-surface font-semibold'
                      : 'text-surface/70 hover:text-secondary',
                )}
                aria-expanded={openDropdown === item.key}
                aria-haspopup="true"
              >
                {t(item.key)}
                <ChevronDown
                  className={cn(
                    'h-3 w-3 transition-transform duration-200',
                    openDropdown === item.key && 'rotate-180',
                  )}
                />
              </Link>

              <AnimatePresence>
                {openDropdown === item.key && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.15, ease: 'easeOut' as const }}
                    className="absolute left-0 top-full pt-2 z-50"
                  >
                    <div className="w-60 bg-surface/95 backdrop-blur-lg shadow-[0_20px_40px_rgba(28,28,26,0.08)] py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className={cn(
                            'block px-6 py-2.5 font-label text-xs uppercase tracking-widest transition-all duration-300',
                            isActive(child.href)
                              ? 'text-secondary font-semibold'
                              : 'text-on-surface-variant hover:text-secondary hover:translate-x-2',
                          )}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              'inline-flex items-center px-4 py-2 font-label text-xs uppercase tracking-widest transition-colors duration-300',
              scrolled
                ? active
                  ? 'text-secondary font-semibold'
                  : 'text-on-surface-variant hover:text-secondary'
                : active
                  ? 'text-surface font-semibold'
                  : 'text-surface/70 hover:text-secondary',
            )}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
