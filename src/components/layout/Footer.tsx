import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ExternalLink, Phone, Mail, MapPin, Clock, Shield, Award, CreditCard, Globe, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/utils';

const quickLinks = [
  { key: 'poolTables', href: '/pool-tables' },
  { key: 'gameTables', href: '/category/game-tables' },
  { key: 'gameRoomFurniture', href: '/category/game-room-furniture' },
  { key: 'darts', href: '/category/darts' },
  { key: 'accessories', href: '/category/accessories' },
  { key: 'cueSticks', href: '/category/cue-sticks' },
];

const serviceLinks = [
  { key: 'buyingGuide', href: '/pool-tables/buying-guide' },
  { key: 'newTables', href: '/pool-tables/new' },
  { key: 'usedTables', href: '/pool-tables/used' },
  { key: 'services', href: '/service-center' },
  { key: 'gallery', href: '/gallery' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact-us' },
];

const socialLinks = [
  { label: 'Facebook', href: BUSINESS.facebook, icon: ExternalLink },
  { label: 'Google', href: 'https://g.page/regal-billiards', icon: Globe },
  { label: 'Yelp', href: 'https://www.yelp.com/biz/regal-billiards-hicksville', icon: ExternalLink },
];

const Footer = () => {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low" role="contentinfo">
      {/* Main footer content */}
      <div className="mx-auto max-w-screen-2xl px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-headline text-2xl italic text-primary hover:text-secondary transition-colors"
            >
              Regal Billiards
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-on-surface-variant font-body">
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
                  className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 text-secondary" />
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                  {t('veteranOwned')}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="h-4 w-4 text-on-surface-variant" />
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  {t('bcaMember')}
                </span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-headline italic text-lg text-primary mb-6">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-0 text-sm font-body text-on-surface-variant hover:text-secondary hover:translate-x-2 transition-all duration-300"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline italic text-lg text-primary mb-6">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-on-surface-variant hover:text-secondary hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-headline italic text-lg text-primary mb-6">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 text-sm font-body text-on-surface-variant hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm font-body text-on-surface-variant hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-on-surface-variant hover:text-secondary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span>{BUSINESS.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-body text-on-surface-variant">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p>{BUSINESS.hours}</p>
                  <p className="text-outline mt-0.5">{BUSINESS.hoursAppointment}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/15 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">
              {t('copyright', { year: currentYear })}
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="font-label text-[10px] uppercase tracking-[0.3em] text-outline hover:text-secondary transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href="#"
                className="font-label text-[10px] uppercase tracking-[0.3em] text-outline hover:text-secondary transition-colors"
              >
                {t('terms')}
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-label uppercase tracking-[0.2em] text-outline">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Visa / MC / Discover / Amex / Cash</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
