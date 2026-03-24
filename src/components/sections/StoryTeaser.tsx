'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const StoryTeaser = () => {
  const t = useTranslations('StoryTeaser');

  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 lg:h-[28rem] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/placeholder-showroom.jpg"
              alt="Regal Billiards showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              {t('heading')}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {t('text')}
            </p>
            <Link href="/about">
              <Button variant="secondary">{t('cta')}</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StoryTeaser;
