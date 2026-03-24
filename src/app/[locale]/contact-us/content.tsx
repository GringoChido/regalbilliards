'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS } from '@/lib/utils';

export default function ContactPageContent() {
  const t = useTranslations('Contact');

  return (
    <main id="main-content" className="py-16 md:py-24">
      <Container>
        <SectionHeading as="h1" className="mb-16">{t('title')}</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl text-primary mb-6">{t('formHeading')}</h2>
            <div className="bg-surface rounded-xl border border-border p-8">
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-heading text-2xl text-primary mb-6">{t('infoHeading')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">{t('address')}</p>
                  <a
                    href={BUSINESS.googleMapsUrl}
                    className="text-sm text-accent hover:text-accent-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href={BUSINESS.phoneHref} className="font-medium text-primary hover:text-accent transition-colors">
                  {t('phone')}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="font-medium text-primary hover:text-accent transition-colors">
                  {t('email')}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">{t('hoursHeading')}</h3>
                  <p className="text-text-muted">{t('hours')}</p>
                  <p className="text-text-muted">{t('hoursAppointment')}</p>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 h-64 bg-border/30 rounded-xl flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5!2d-73.525!3d40.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI0LjUiTiA3M8KwMzEnMjkuNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Regal Billiards location"
              />
            </div>

            {/* Appointment callout */}
            <div className="mt-8 bg-accent/10 rounded-xl p-6">
              <p className="text-text-muted leading-relaxed">
                {t('appointmentNote')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
