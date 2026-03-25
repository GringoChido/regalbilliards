import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import CategoryContent from './content';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return categories
    .filter((c) => c.slug !== 'pool-tables')
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  const name = category.name[locale as 'en' | 'es'];
  const description = category.description[locale as 'en' | 'es'];

  return {
    title: `${name} | Regal Billiards`,
    description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CategoryContent />;
}
