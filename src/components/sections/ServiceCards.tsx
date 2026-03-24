'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Truck, Wrench, Scissors, Target, Package, Paintbrush, Ruler } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Truck, Wrench, Scissors, Target, Package, Paintbrush, Ruler,
};

const ServiceCards = () => {
  const locale = useLocale();

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Wrench;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card hover={false} className="p-6 h-full">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg text-primary mb-2">
                  {service.name[locale as 'en' | 'es']}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description[locale as 'en' | 'es']}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default ServiceCards;
