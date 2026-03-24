'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Phone, Calendar, CheckCircle, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCards from '@/components/sections/ServiceCards';
import ServiceQuoteForm from '@/components/forms/ServiceQuoteForm';

const steps = [
  { key: 'step1', icon: Phone },
  { key: 'step2', icon: Calendar },
  { key: 'step3', icon: CheckCircle },
] as const;

export default function ServiceCenterContent() {
  const t = useTranslations('ServiceCenter');

  return (
    <main id="main-content">
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading as="h1" className="mb-4">{t('title')}</SectionHeading>
          <p className="text-center text-text-muted max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            {t('intro')}
          </p>
        </Container>

        <ServiceCards />

        <Container>
          {/* Service everyone callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-accent/10 rounded-xl p-8 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-2xl text-primary mb-3">{t('serviceEveryone')}</h2>
            <p className="text-text-muted text-lg">{t('serviceEveryoneText')}</p>
          </motion.div>

          {/* Process steps */}
          <div className="mt-20">
            <h2 className="font-heading text-2xl md:text-3xl text-primary text-center mb-12">
              {t('processHeading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map(({ key, icon: Icon }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm font-medium text-accent mb-2">Step {index + 1}</div>
                  <h3 className="font-heading text-lg text-primary mb-2">{t(key)}</h3>
                  <p className="text-sm text-text-muted">{t(`${key}Desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-3 text-text-muted"
          >
            <MapPin className="w-5 h-5 text-accent" />
            <p className="text-lg">
              <span className="font-medium text-primary">{t('areaHeading')}:</span> {t('areaText')}
            </p>
          </motion.div>

          {/* Quote form */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-primary text-center mb-8">
              {t('quoteHeading')}
            </h2>
            <div className="bg-surface rounded-xl border border-border p-8">
              <ServiceQuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
