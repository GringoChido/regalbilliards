import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ChatWidget';
import { LocalBusinessSchema } from '@/components/StructuredData';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://regalbilliards.com'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <LocalBusinessSchema />
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      {children}
      <Footer />
      <ChatWidget />
    </NextIntlClientProvider>
  );
}
