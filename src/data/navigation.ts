import type { NavItem } from '@/types';

export const navigation: NavItem[] = [
  {
    label: { en: 'Home', es: 'Inicio' },
    href: '/',
  },
  {
    label: { en: 'Pool Tables', es: 'Mesas de Billar' },
    href: '/pool-tables',
    children: [
      {
        label: { en: 'Presidential', es: 'Presidential' },
        href: '/pool-tables?manufacturer=presidential',
      },
      {
        label: { en: 'C.L. Bailey', es: 'C.L. Bailey' },
        href: '/pool-tables?manufacturer=cl-bailey',
      },
      {
        label: { en: 'Imperial', es: 'Imperial' },
        href: '/pool-tables?manufacturer=imperial',
      },
      {
        label: { en: 'Used Pool Tables', es: 'Mesas Usadas' },
        href: '/used-pool-tables',
      },
    ],
  },
  {
    label: { en: 'Game Room', es: 'Sala de Juegos' },
    href: '/game-room-furniture',
    children: [
      {
        label: { en: 'Game Room Furniture', es: 'Muebles para Sala de Juegos' },
        href: '/game-room-furniture',
      },
      {
        label: { en: 'Game Tables', es: 'Mesas de Juego' },
        href: '/game-tables',
      },
      {
        label: { en: 'Darts', es: 'Dardos' },
        href: '/darts',
      },
    ],
  },
  {
    label: { en: 'Accessories', es: 'Accesorios' },
    href: '/accessories',
    children: [
      {
        label: { en: 'Accessories', es: 'Accesorios' },
        href: '/accessories',
      },
      {
        label: { en: 'Cue Sticks', es: 'Tacos de Billar' },
        href: '/cue-sticks',
      },
    ],
  },
  {
    label: { en: 'Services', es: 'Servicios' },
    href: '/services',
  },
  {
    label: { en: 'About', es: 'Nosotros' },
    href: '/about',
  },
  {
    label: { en: 'Contact', es: 'Contacto' },
    href: '/contact',
  },
];
