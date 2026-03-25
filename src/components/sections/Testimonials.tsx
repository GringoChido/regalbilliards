'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 md:py-40 bg-surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="font-headline text-4xl md:text-5xl text-primary -tracking-wide">
            {t('heading')}
          </h2>
        </motion.div>

        {/* Large featured testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Large quote mark */}
              <div className="font-headline text-8xl md:text-[10rem] text-secondary/15 leading-none mb-4 select-none">
                &ldquo;
              </div>

              <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed mb-8 -mt-16 px-4 italic font-light">
                {testimonial.text[locale as 'en' | 'es']}
              </blockquote>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary">
                {testimonial.name}
              </p>
              {testimonial.location && (
                <p className="text-on-surface-variant text-sm font-body mt-1">
                  {testimonial.location}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Testimonial ${index + 1}`}
                  className={`h-[1px] rounded-full transition-all duration-300 cursor-pointer ${
                    index === current
                      ? 'w-10 bg-secondary'
                      : 'w-4 bg-outline-variant hover:bg-on-surface-variant'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
