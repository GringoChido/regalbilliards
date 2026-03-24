'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Clock, Shield, Wrench, Users } from 'lucide-react';
import Container from '@/components/ui/Container';

const trustItems = [
  { key: 'years', icon: Clock },
  { key: 'veteran', icon: Shield },
  { key: 'service', icon: Wrench },
  { key: 'consultations', icon: Users },
] as const;

const TrustStrip = () => {
  const t = useTranslations('TrustStrip');

  return (
    <section className="bg-primary py-5 border-b border-white/5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {trustItems.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-2.5 text-surface/80"
            >
              <Icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-sm font-medium font-body tracking-wide uppercase">
                {t(key)}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline ml-8 text-surface/20">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
