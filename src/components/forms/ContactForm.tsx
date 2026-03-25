'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses = 'w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-on-surface font-body focus:outline-none focus:border-secondary focus:ring-0 transition-colors';

const ContactForm = () => {
  const t = useTranslations('Contact');
  const tv = useTranslations('Validation');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
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
      <div>
        <label htmlFor="name" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formName')} *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={inputClasses}
        />
        {errors.name && <p className="mt-2 text-sm text-error">{tv('nameRequired')}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formEmail')} *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={inputClasses}
        />
        {errors.email && <p className="mt-2 text-sm text-error">{tv('emailInvalid')}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formPhone')}
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="interest" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formInterest')} *
        </label>
        <select
          id="interest"
          {...register('interest')}
          className={inputClasses}
        >
          <option value="">{t('formInterest')}</option>
          <option value="new-table">{t('interestNewTable')}</option>
          <option value="used-table">{t('interestUsedTable')}</option>
          <option value="furniture">{t('interestFurniture')}</option>
          <option value="service">{t('interestService')}</option>
          <option value="general">{t('interestGeneral')}</option>
        </select>
        {errors.interest && <p className="mt-2 text-sm text-error">{tv('interestRequired')}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          {t('formMessage')} *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`${inputClasses} resize-none`}
        />
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

export default ContactForm;
