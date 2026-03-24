'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const serviceQuoteSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceType: z.string().min(1),
  tableSize: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(10),
});

type ServiceQuoteData = z.infer<typeof serviceQuoteSchema>;

const serviceTypes = [
  'Pool Table Move',
  'Assembly',
  'Cushion Replacement',
  'Pocket Repair',
  'Breakdown',
  'Recovery / Re-Felting',
  'Re-Level',
];

const tableSizes = ['7ft', '8ft', '9ft', 'Other'];

const ServiceQuoteForm = () => {
  const t = useTranslations('ServiceCenter');
  const tv = useTranslations('Validation');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServiceQuoteData>({
    resolver: zodResolver(serviceQuoteSchema),
  });

  const onSubmit = async (data: ServiceQuoteData) => {
    try {
      const res = await fetch('/api/service-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-secondary/10 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
        <p className="text-lg font-medium text-primary">{t('formSuccess')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sq-name" className="block text-sm font-medium text-primary mb-1">
            {t('formName')} *
          </label>
          <input
            id="sq-name"
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{tv('nameRequired')}</p>}
        </div>

        <div>
          <label htmlFor="sq-email" className="block text-sm font-medium text-primary mb-1">
            {t('formEmail')} *
          </label>
          <input
            id="sq-email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{tv('emailInvalid')}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sq-phone" className="block text-sm font-medium text-primary mb-1">
            {t('formPhone')}
          </label>
          <input
            id="sq-phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="sq-city" className="block text-sm font-medium text-primary mb-1">
            {t('formCity')}
          </label>
          <input
            id="sq-city"
            type="text"
            {...register('city')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sq-service" className="block text-sm font-medium text-primary mb-1">
            {t('formServiceType')} *
          </label>
          <select
            id="sq-service"
            {...register('serviceType')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">{t('formServiceType')}</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.serviceType && <p className="mt-1 text-sm text-red-600">{tv('serviceTypeRequired')}</p>}
        </div>

        <div>
          <label htmlFor="sq-size" className="block text-sm font-medium text-primary mb-1">
            {t('formTableSize')}
          </label>
          <select
            id="sq-size"
            {...register('tableSize')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">{t('formTableSize')}</option>
            {tableSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sq-message" className="block text-sm font-medium text-primary mb-1">
          {t('formMessage')} *
        </label>
        <textarea
          id="sq-message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{tv('messageTooShort')}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="w-4 h-4" />
          <p className="text-sm">{t('formError')}</p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        <Send className="w-4 h-4 mr-2" />
        {t('formSubmit')}
      </Button>
    </form>
  );
};

export default ServiceQuoteForm;
