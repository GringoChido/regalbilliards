'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/placeholder-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />

      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-surface mb-6">
            {t('headline')}
          </h1>
          <p className="text-lg md:text-xl text-surface/80 mb-8 leading-relaxed">
            {t('subheadline')}
          </p>
          <Link href="/pool-tables">
            <Button size="lg">{t('cta')}</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
