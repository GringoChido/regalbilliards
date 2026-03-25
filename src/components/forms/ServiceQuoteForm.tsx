'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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

const inputClasses = 'w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-on-surface font-body focus:outline-none focus:border-secondary focus:ring-0 transition-colors';

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
      <div className="bg-surface-container-low p-12 text-center">
        <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
        <p className="text-lg font-headline text-primary">{t('formSuccess')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="sq-name" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formName')} *
          </label>
          <input id="sq-name" type="text" {...register('name')} className={inputClasses} />
          {errors.name && <p className="mt-2 text-sm text-error">{tv('nameRequired')}</p>}
        </div>

        <div>
          <label htmlFor="sq-email" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formEmail')} *
          </label>
          <input id="sq-email" type="email" {...register('email')} className={inputClasses} />
          {errors.email && <p className="mt-2 text-sm text-error">{tv('emailInvalid')}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="sq-phone" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formPhone')}
          </label>
          <input id="sq-phone" type="tel" {...register('phone')} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="sq-city" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formCity')}
          </label>
          <input id="sq-city" type="text" {...register('city')} className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="sq-service" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formServiceType')} *
          </label>
          <select id="sq-service" {...register('serviceType')} className={inputClasses}>
            <option value="">{t('formServiceType')}</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.serviceType && <p className="mt-2 text-sm text-error">{tv('serviceTypeRequired')}</p>}
        </div>

        <div>
          <label htmlFor="sq-size" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {t('formTableSize')}
          </label>
          <select id="sq-size" {...register('tableSize')} className={inputClasses}>
            <option value="">{t('formTableSize')}</option>
            {tableSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sq-message" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formMessage')} *
        </label>
        <textarea id="sq-message" rows={4} {...register('message')} className={`${inputClasses} resize-none`} />
        {errors.message && <p className="mt-2 text-sm text-error">{tv('messageTooShort')}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-error">
          <AlertCircle className="w-4 h-4" />
          <p className="text-sm">{t('formError')}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-on-secondary py-4 font-label text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <Send className="w-4 h-4 mr-2 inline" />
        {t('formSubmit')}
      </button>
    </form>
  );
};

export default ServiceQuoteForm;
