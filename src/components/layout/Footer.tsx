import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Globe, ExternalLink, Phone, Mail, MapPin, Clock, Shield, Award, CreditCard } from 'lucide-react';
import Container from '@/components/ui/Container';
import { BUSINESS } from '@/lib/utils';

const quickLinks = [
  { key: 'poolTables', href: '/pool-tables' },
  { key: 'gameRoomFurniture', href: '/game-room-furniture' },
  { key: 'gameTables', href: '/game-tables' },
  { key: 'darts', href: '/darts' },
  { key: 'accessories', href: '/accessories' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

const serviceLinks = [
  { key: 'buyingGuide', href: '/pool-tables/buying-guide' },
  { key: 'newTables', href: '/pool-tables/new' },
  { key: 'usedTables', href: '/pool-tables/used' },
  { key: 'services', href: '/services' },
  { key: 'gallery', href: '/gallery' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: BUSINESS.facebook,
    icon: ExternalLink,
  },
  {
    label: 'Google',
    href: 'https://g.page/regal-billiards',
    icon: Globe,
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/regal-billiards-hicksville',
    icon: ExternalLink,
  },
];

const Footer = () => {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-surface/90" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <Link
              href="/"
              className="font-heading text-xl text-surface hover:text-accent transition-colors"
            >
              Regal Billiards
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-surface/70 font-body">
              {t('about')}
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-surface/10 hover:bg-accent hover:text-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-accent">
                <Shield className="h-3.5 w-3.5" />
                <span className="font-semibold font-body">{t('veteranOwned')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-surface/60">
                <Award className="h-3.5 w-3.5" />
                <span className="font-body">{t('bcaMember')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base text-surface mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-surface/70 hover:text-accent transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base text-surface mb-4">
              {t('services')}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-surface/70 hover:text-accent transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base text-surface mb-4">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 text-sm font-body text-surface/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm font-body text-surface/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-surface/70 hover:text-accent transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  {BUSINESS.address}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-body text-surface/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>{BUSINESS.hours}</p>
                  <p className="text-surface/50">{BUSINESS.hoursAppointment}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-body text-surface/50">
              {t('copyright', { year: currentYear })}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-xs font-body text-surface/50 hover:text-accent transition-colors"
              >
                {t('privacy')}
              </Link>
              <span className="text-surface/20">|</span>
              <Link
                href="#"
                className="text-xs font-body text-surface/50 hover:text-accent transition-colors"
              >
                {t('terms')}
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs font-body text-surface/40">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Visa / MasterCard / Discover / Amex / Cash</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
