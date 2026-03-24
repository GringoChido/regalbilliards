import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ExternalLink, Phone, Mail, MapPin, Clock, Shield, Award, CreditCard, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import { BUSINESS } from '@/lib/utils';

const quickLinks = [
  { key: 'poolTables', href: '/pool-tables' },
  { key: 'gameRoomFurniture', href: '/game-room-furniture' },
  { key: 'gameTables', href: '/game-tables' },
  { key: 'darts', href: '/darts' },
  { key: 'accessories', href: '/accessories' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact-us' },
];

const serviceLinks = [
  { key: 'buyingGuide', href: '/pool-tables/buying-guide' },
  { key: 'newTables', href: '/pool-tables/new' },
  { key: 'usedTables', href: '/pool-tables/used' },
  { key: 'services', href: '/service-center' },
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
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-heading text-2xl text-surface hover:text-accent transition-colors"
            >
              Regal Billiards
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-surface/50 font-body">
              {t('about')}
            </p>

            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface/8 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-accent">
                <Shield className="h-4 w-4" />
                <span className="font-semibold font-body">{t('veteranOwned')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-surface/40">
                <Award className="h-4 w-4" />
                <span className="font-body">{t('bcaMember')}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-lg text-surface mb-6">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-surface/50 hover:text-accent transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg text-surface mb-6">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-surface/50 hover:text-accent transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-lg text-surface mb-6">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 text-sm font-body text-surface/50 hover:text-accent transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm font-body text-surface/50 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-surface/50 hover:text-accent transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <span>{BUSINESS.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-body text-surface/50">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>{BUSINESS.hours}</p>
                  <p className="text-surface/30 mt-0.5">{BUSINESS.hoursAppointment}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface/8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-body text-surface/30">
              {t('copyright', { year: currentYear })}
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs font-body text-surface/30 hover:text-accent transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href="#"
                className="text-xs font-body text-surface/30 hover:text-accent transition-colors"
              >
                {t('terms')}
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs font-body text-surface/25">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Visa / MC / Discover / Amex / Cash</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
