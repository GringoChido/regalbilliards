'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS } from '@/lib/utils';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function ContactPageContent() {
  const t = useTranslations('Contact');

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-container">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-label text-xs tracking-[0.3em] uppercase text-surface/50 mb-6">
              Get in Touch
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-surface -tracking-wide leading-[1.05]">
              {t('title')}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div {...fadeUp}>
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                Send a Message
              </p>
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-8">{t('formHeading')}</h2>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
            >
              <p className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">
                Visit Our Showroom
              </p>
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-8">{t('infoHeading')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary font-body">{t('address')}</p>
                    <a
                      href={BUSINESS.googleMapsUrl}
                      className="font-label text-xs uppercase tracking-widest text-secondary border-b border-secondary/20 pb-0.5 hover:border-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <a href={BUSINESS.phoneHref} className="font-medium text-primary hover:text-secondary transition-colors font-body">
                    {t('phone')}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${BUSINESS.email}`} className="font-medium text-primary hover:text-secondary transition-colors font-body">
                    {t('email')}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary font-body">{t('hoursHeading')}</h3>
                    <p className="text-on-surface-variant font-body">{t('hours')}</p>
                    <p className="text-on-surface-variant font-body">{t('hoursAppointment')}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 h-64 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5!2d-73.525!3d40.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI0LjUiTiA3M8KwMzEnMjkuNiJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Regal Billiards location"
                />
              </div>

              {/* Appointment note */}
              <div className="mt-8 bg-surface-container-low p-8">
                <p className="text-on-surface-variant leading-relaxed font-body">
                  {t('appointmentNote')}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
