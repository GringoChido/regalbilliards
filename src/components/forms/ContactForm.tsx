'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
      <div className="bg-secondary/10 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
        <p className="text-lg font-medium text-primary">{t('formSuccess')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
          {t('formName')} *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{tv('nameRequired')}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
          {t('formEmail')} *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{tv('emailInvalid')}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
          {t('formPhone')}
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-primary mb-1">
          {t('formInterest')} *
        </label>
        <select
          id="interest"
          {...register('interest')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">{t('formInterest')}</option>
          <option value="new-table">{t('interestNewTable')}</option>
          <option value="used-table">{t('interestUsedTable')}</option>
          <option value="furniture">{t('interestFurniture')}</option>
          <option value="service">{t('interestService')}</option>
          <option value="general">{t('interestGeneral')}</option>
        </select>
        {errors.interest && <p className="mt-1 text-sm text-red-600">{tv('interestRequired')}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
          {t('formMessage')} *
        </label>
        <textarea
          id="message"
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

export default ContactForm;
