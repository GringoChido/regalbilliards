import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ServiceCenterContent from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServiceCenter' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function ServiceCenterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServiceCenterContent />;
}
