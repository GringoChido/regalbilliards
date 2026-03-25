import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import WarrantyContent from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Warranty' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function WarrantyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WarrantyContent />;
}
