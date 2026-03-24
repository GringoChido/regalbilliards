import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Construction' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

const sections = [
  {
    title: 'Slate',
    content: "A quality pool table uses a genuine slate playing surface — typically 3/4\" to 1\" thick. Slate is ground and honed to be perfectly flat, giving you a true, consistent roll. The best tables use three-piece slate, which is easier to transport and level precisely. Avoid tables with MDF or synthetic surfaces — they warp over time and don't play true.",
  },
  {
    title: 'Frame and cabinet',
    content: 'Look for solid hardwood construction in the frame and cabinet. The frame supports the slate and needs to be rigid and strong. Cheap tables use particle board or MDF, which can sag, crack, or absorb moisture. A well-built frame uses cross beams and corner blocks for structural integrity.',
  },
  {
    title: 'Cushion rubber',
    content: "The cushion rubber (also called \"rails\") is what the ball bounces off. Quality tables use K-66 profile natural gum rubber, which provides a consistent, lively bounce. Lower-quality synthetic rubber hardens over time and deadens ball response. This is one of the components we can replace during service.",
  },
  {
    title: 'Cloth',
    content: "Pool table cloth (or \"felt\") comes in two main types: woolen and worsted. Woolen cloth is more affordable and works well for casual play. Worsted cloth — like Simonis — is faster, more durable, and preferred by serious players. The cloth wears over time and can be replaced, so it's not a permanent decision.",
  },
  {
    title: 'Pockets',
    content: 'Pockets come in leather, plastic, or rubber. Leather pockets are traditional and durable when properly maintained. Look for reinforced pocket irons (the metal frame under the pocket) made from cast iron, not stamped steel. This is the part that takes the most abuse over time.',
  },
  {
    title: 'Legs and leveling',
    content: "Table legs should be solid and well-attached — not just screwed in. Quality tables use bolt-through construction with leg levelers that allow precise adjustment. Leveling is critical for fair play, and it's one of the services we provide after every installation.",
  },
];

export default async function ConstructionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Construction' });

  return (
    <main id="main-content" className="py-16 md:py-24">
      <Container>
        <SectionHeading as="h1" className="mb-6">{t('title')}</SectionHeading>
        <p className="text-text-muted text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          When you're spending thousands on a pool table, you want to know what you're getting. Here's what to look for — and what we look for when choosing the tables we carry.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-border pb-8 last:border-0">
              <h2 className="font-heading text-2xl text-primary mb-3">{section.title}</h2>
              <p className="text-text-muted leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
