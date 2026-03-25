import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductDetailContent from './content';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return products
    .filter((p) => p.category === 'pool-tables')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug && p.category === 'pool-tables');
  if (!product) return {};

  return {
    title: `${product.name} | Regal Billiards`,
    description: product.description[locale as 'en' | 'es'],
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductDetailContent />;
}
