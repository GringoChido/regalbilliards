import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Dimensions' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

const dimensions = [
  { table: '7-foot', playfield: '39" x 78"', room: "13' x 16'", roomMetric: '3.9m x 4.9m' },
  { table: '8-foot', playfield: '44" x 88"', room: "13'6\" x 17'", roomMetric: '4.1m x 5.2m' },
  { table: '8-foot (oversized)', playfield: '46" x 92"', room: "13'6\" x 17'4\"", roomMetric: '4.1m x 5.3m' },
  { table: '9-foot', playfield: '50" x 100"', room: "14'2\" x 18'", roomMetric: '4.3m x 5.5m' },
];

export default async function DimensionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Dimensions' });

  return (
    <main id="main-content" className="py-16 md:py-24">
      <Container>
        <SectionHeading as="h1" className="mb-6">{t('title')}</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <p className="text-text-muted text-lg text-center mb-12 leading-relaxed">
            The most important thing to know before buying a pool table is whether it will fit in your room. You need enough space around the table for a full cue stroke — typically 5 feet on every side.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 px-4 font-heading text-primary">Table size</th>
                  <th className="py-3 px-4 font-heading text-primary">Playing surface</th>
                  <th className="py-3 px-4 font-heading text-primary">Minimum room size</th>
                </tr>
              </thead>
              <tbody>
                {dimensions.map((row) => (
                  <tr key={row.table} className="border-b border-border">
                    <td className="py-3 px-4 font-medium">{row.table}</td>
                    <td className="py-3 px-4 text-text-muted">{row.playfield}</td>
                    <td className="py-3 px-4 text-text-muted">{row.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-text-muted mt-6">
            * Room sizes assume a standard 58&quot; cue. Shorter cues are available for tighter spaces. Come visit the showroom and we can help you figure out the best fit.
          </p>

          <div className="mt-12 bg-surface rounded-xl border border-border p-8">
            <h2 className="font-heading text-2xl text-primary mb-4">Not sure about your room?</h2>
            <p className="text-text-muted leading-relaxed">
              Bring your room measurements to the showroom, and we'll help you find the right table size. We've been doing this for over 40 years — we can usually tell you what will work just from the dimensions.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
