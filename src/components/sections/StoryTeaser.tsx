'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const StoryTeaser = () => {
  const t = useTranslations('StoryTeaser');

  return (
    <section className="py-24 md:py-40 bg-primary-container overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative h-80 lg:h-[36rem] rounded-sm overflow-hidden">
              <Image
                src="/images/story-teaser.jpeg"
                alt="Regal Billiards showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </motion.div>

          {/* Text — spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-6">
              Our story
            </p>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-surface leading-[1.1] mb-4">
              {t('heading')}
            </h2>
            <p className="font-headline text-xl md:text-2xl text-secondary italic font-light mb-10">
              {t('subheading')}
            </p>

            {/* Pull quote */}
            <blockquote className="border-l border-secondary/30 pl-8 py-4 mb-10">
              <p className="font-headline text-xl md:text-2xl text-surface/80 italic leading-relaxed font-light">
                &ldquo;When you buy from Regal, you&rsquo;re getting a team that knows every table inside and out.&rdquo;
              </p>
            </blockquote>

            <p className="text-on-primary-container text-lg leading-[1.7] mb-12 font-body">
              {t('text')}
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-4 text-surface font-label text-xs uppercase tracking-widest border-b border-surface/30 pb-1 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              {t('cta')}
              <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StoryTeaser;
