'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Truck, Wrench, Scissors, Target, Package, Paintbrush, Ruler, RefreshCw, PackageOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Truck, Wrench, Scissors, Target, Package, Paintbrush, Ruler, RefreshCw, PackageOpen, Pocket: Target,
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const ServiceCards = () => {
  const locale = useLocale();
  const featured = services.slice(0, 2);
  const rest = services.slice(2);

  return (
    <Container>
      {/* Featured services — larger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((service, index) => {
          const Icon = iconMap[service.icon] || Wrench;
          return (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
            >
              <div className="bg-surface-container-low p-8 md:p-10 h-full transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-[0_20px_40px_rgba(28,28,26,0.05)] group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl md:text-2xl text-primary mb-3">
                      {service.name[locale as 'en' | 'es']}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {service.description[locale as 'en' | 'es']}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Remaining services — compact grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {rest.map((service, index) => {
          const Icon = iconMap[service.icon] || Wrench;
          return (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.2 + index * 0.05 }}
            >
              <div className="bg-surface-container-low p-6 h-full transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-[0_20px_40px_rgba(28,28,26,0.05)] group">
                <Icon className="w-5 h-5 text-secondary mb-4 group-hover:text-secondary transition-colors" />
                <h3 className="font-headline text-lg text-primary mb-2">
                  {service.name[locale as 'en' | 'es']}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {service.description[locale as 'en' | 'es']}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default ServiceCards;
