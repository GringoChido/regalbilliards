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
    <section className="bg-primary py-6">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 text-surface/90"
            >
              <Icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{t(key)}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
