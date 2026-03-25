import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ShieldCheck, Building2, Wrench } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Warranty' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function WarrantyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Warranty' });

  return (
    <main id="main-content" className="py-16 md:py-24">
      <Container>
        <SectionHeading as="h1" className="mb-6">{t('title')}</SectionHeading>
        <p className="text-on-surface-variant text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          The manufacturers we carry — Presidential, C.L. Bailey, and Imperial — stand behind their tables with a lifetime warranty. Here's what that means for you.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-sm border border-outline-variant/15 p-6 text-center">
              <ShieldCheck className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-headline text-lg text-primary mb-2">Lifetime structural warranty</h3>
              <p className="text-sm text-on-surface-variant">Covers the frame, slate, and structural components against defects in materials and workmanship for the life of the table.</p>
            </div>
            <div className="bg-surface rounded-sm border border-outline-variant/15 p-6 text-center">
              <Building2 className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-headline text-lg text-primary mb-2">Manufacturer backed</h3>
              <p className="text-sm text-on-surface-variant">Each manufacturer handles warranty claims directly. We work with them on your behalf to make the process simple.</p>
            </div>
            <div className="bg-surface rounded-sm border border-outline-variant/15 p-6 text-center">
              <Wrench className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-headline text-lg text-primary mb-2">Local service support</h3>
              <p className="text-sm text-on-surface-variant">Because we're local, warranty service is handled quickly. Our factory-trained technicians do the work on-site.</p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-sm p-8">
            <h2 className="font-headline text-2xl text-primary mb-4">What's typically covered</h2>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">&#10003;</span>
                Frame and cabinet structural integrity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">&#10003;</span>
                Slate integrity (cracking or warping under normal use)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">&#10003;</span>
                Cushion rubber (bounce performance)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">&#10003;</span>
                Hardware and pocket assemblies
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-sm border border-outline-variant/15 p-8">
            <h2 className="font-headline text-2xl text-primary mb-4">What's typically not covered</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Normal wear items like cloth, leather pockets, and finish are not covered by warranty — these are expected to wear over time with regular use. The good news: our service team handles all of these replacements and repairs, whether your table is under warranty or not.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
