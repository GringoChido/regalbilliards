import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import CategoryGrid from '@/components/sections/CategoryGrid';
import StoryTeaser from '@/components/sections/StoryTeaser';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <StoryTeaser />
      <Testimonials />
      <CTASection />
    </main>
  );
}
