'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const StoryTeaser = () => {
  const t = useTranslations('StoryTeaser');

  return (
    <section className="py-20 md:py-32 bg-primary overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-[32rem] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-showroom-install.jpg"
                alt="Regal Billiards showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent detail */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-4">
              Our story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-surface leading-tight mb-8">
              {t('heading')}
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-accent pl-6 mb-8">
              <p className="font-heading text-xl md:text-2xl text-surface/80 italic leading-relaxed">
                &ldquo;When you buy from Regal, you&rsquo;re getting a team that knows every table inside and out.&rdquo;
              </p>
            </blockquote>

            <p className="text-surface/60 text-lg leading-relaxed mb-10 font-body">
              {t('text')}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-body rounded-full border-2 border-surface/30 text-surface hover:bg-surface/10 transition-all duration-300"
            >
              {t('cta')}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StoryTeaser;
