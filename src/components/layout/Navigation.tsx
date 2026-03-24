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
    key: 'poolTables',
    href: '/pool-tables',
    children: [
      { key: 'newTables', href: '/pool-tables/new' },
      { key: 'usedTables', href: '/pool-tables/used' },
      { key: 'buyingGuide', href: '/pool-tables/buying-guide' },
    ],
  },
  {
    key: 'gameRoom',
    href: '/category/game-room-furniture',
    children: [
      { key: 'gameRoomFurniture', href: '/category/game-room-furniture' },
      { key: 'gameTables', href: '/category/game-tables' },
      { key: 'darts', href: '/category/darts' },
      { key: 'accessories', href: '/category/accessories' },
    ],
  },
  { key: 'services', href: '/service-center' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact-us' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.96 },
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

  const linkColor = cn(
    'transition-colors duration-300',
    scrolled
      ? 'text-surface/80 hover:text-surface'
      : 'text-surface/80 hover:text-surface',
  );

  const activeLinkColor = 'text-surface';

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
                  'inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium font-body rounded-full',
                  linkColor,
                  active && activeLinkColor,
                )}
                aria-expanded={openDropdown === item.key}
                aria-haspopup="true"
              >
                {t(item.key)}
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-200',
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
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 top-full pt-2 z-50"
                  >
                    <div className="w-56 rounded-xl bg-primary-light/95 backdrop-blur-lg shadow-2xl ring-1 ring-white/10 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2.5 text-sm font-body transition-colors',
                            isActive(child.href)
                              ? 'text-accent bg-white/5'
                              : 'text-surface/70 hover:text-surface hover:bg-white/5',
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
              'inline-flex items-center px-3.5 py-2 text-sm font-medium font-body rounded-full',
              linkColor,
              active && activeLinkColor,
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
