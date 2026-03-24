import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BuyingGuideContent from './content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BuyingGuide' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function BuyingGuidePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BuyingGuideContent />;
}
