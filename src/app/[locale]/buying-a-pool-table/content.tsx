'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Ruler, Wrench, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const resources = [
  { key: 'dimensions', href: '/table-dimensions-and-room-size-requirements', icon: Ruler },
  { key: 'construction', href: '/table-construction-features', icon: Wrench },
  { key: 'warranty', href: '/lifetime-warranty', icon: ShieldCheck },
] as const;

export default function BuyingGuideContent() {
  const t = useTranslations('BuyingGuide');

  return (
    <main id="main-content">
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading as="h1" className="mb-6">{t('title')}</SectionHeading>
          <p className="text-center text-text-muted max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            {t('intro')}
          </p>

          <div className="max-w-4xl mx-auto space-y-16">
            {(['challenge', 'manufacturer', 'service'] as const).map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                  {t(`${section}Heading`)}
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  {t(`${section}Text`)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="font-heading text-2xl md:text-3xl text-primary text-center mb-8">
              {t('resourcesHeading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map(({ key, href, icon: Icon }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={href}>
                    <Card className="p-6 h-full">
                      <Icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="font-heading text-lg text-primary mb-2">
                        {t(`${key}Card`)}
                      </h3>
                      <p className="text-sm text-text-muted">{t(`${key}Desc`)}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-text-muted text-lg mb-6">{t('bottomCta')}</p>
            <Link href="/contact-us">
              <Button size="lg">Visit the showroom</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
