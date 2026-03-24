'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading className="mb-12">{t('heading')}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={false} className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-text-muted leading-relaxed flex-1 mb-4">
                  &ldquo;{testimonial.text[locale as 'en' | 'es']}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-sm text-text-muted">{testimonial.location}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
