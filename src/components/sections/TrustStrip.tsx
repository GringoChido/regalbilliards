'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Clock, Shield, Wrench, Users } from 'lucide-react';
import Container from '@/components/ui/Container';

const trustItems = [
  { key: 'years', icon: Clock, stat: '40+' },
  { key: 'veteran', icon: Shield, stat: '' },
  { key: 'service', icon: Wrench, stat: '' },
  { key: 'consultations', icon: Users, stat: '' },
] as const;

const TrustStrip = () => {
  const t = useTranslations('TrustStrip');

  return (
    <section className="relative -mt-16 z-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-secondary py-6 px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {trustItems.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <Icon className="w-4 h-4 text-on-secondary/70 flex-shrink-0" />
                <span className="font-label text-xs uppercase tracking-[0.2em] text-on-secondary font-medium">
                  {t(key)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
