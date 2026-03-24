import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AboutContent from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}
