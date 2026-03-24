import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'pool-table-move',
    slug: 'pool-table-move',
    name: {
      en: 'Pool Table Move',
      es: 'Mudanza de Mesa de Billar',
    },
    description: {
      en: 'Professional pool table moving service across Long Island and the greater New York area. We fully disassemble, transport, and reassemble your table at the new location, ensuring a perfect level every time.',
      es: 'Servicio profesional de mudanza de mesas de billar en Long Island y el area metropolitana de Nueva York. Desarmamos completamente, transportamos y reensamblamos su mesa en la nueva ubicacion, asegurando un nivel perfecto cada vez.',
    },
    icon: 'Truck',
  },
  {
    id: 'assembly',
    slug: 'assembly',
    name: {
      en: 'Assembly',
      es: 'Ensamblaje',
    },
    description: {
      en: 'Expert pool table assembly for new purchases or tables that need to be set up. Our technicians handle slate seaming, leveling, and cloth installation to factory specifications.',
      es: 'Ensamblaje experto de mesas de billar para compras nuevas o mesas que necesitan ser instaladas. Nuestros tecnicos manejan la union de pizarra, nivelacion e instalacion de pano segun especificaciones de fabrica.',
    },
    icon: 'Wrench',
  },
  {
    id: 'cushion-replacement',
    slug: 'cushion-replacement',
    name: {
      en: 'Cushion Replacement',
      es: 'Reemplazo de Bandas',
    },
    description: {
      en: 'Dead cushions kill your game. We replace worn-out rail rubber with premium K-66 profile cushions that restore true, consistent bounce across all six rails.',
      es: 'Las bandas muertas arruinan tu juego. Reemplazamos la goma de riel desgastada con bandas premium perfil K-66 que restauran un rebote consistente y verdadero en los seis rieles.',
    },
    icon: 'RefreshCw',
  },
  {
    id: 'pocket-repair',
    slug: 'pocket-repair',
    name: {
      en: 'Pocket Repair',
      es: 'Reparacion de Bolsillos',
    },
    description: {
      en: 'Torn leather, broken shields, or sagging nets? We repair and replace all pocket styles including leather fringe, shield, and drop pockets to restore your table\'s look and function.',
      es: 'Cuero roto, escudos danados o redes caidas? Reparamos y reemplazamos todos los estilos de bolsillos incluyendo flecos de cuero, escudo y bolsillos de caida para restaurar la apariencia y funcion de su mesa.',
    },
    icon: 'Pocket',
  },
  {
    id: 'breakdown',
    slug: 'breakdown',
    name: {
      en: 'Breakdown',
      es: 'Desarmado',
    },
    description: {
      en: 'Need your table disassembled for storage, renovation, or disposal? We carefully break down your pool table, label all components, and wrap slate for safe storage or transport.',
      es: 'Necesita desarmar su mesa para almacenamiento, renovacion o disposicion? Desarmamos cuidadosamente su mesa de billar, etiquetamos todos los componentes y envolvemos la pizarra para almacenamiento o transporte seguro.',
    },
    icon: 'PackageOpen',
  },
  {
    id: 'recovery-re-felting',
    slug: 'recovery-re-felting',
    name: {
      en: 'Recovery / Re-Felting',
      es: 'Retapizado / Cambio de Pano',
    },
    description: {
      en: 'Give your table a fresh look and improved play with new cloth. We install Simonis, Championship, and other premium billiard fabrics on the bed and rails for a smooth, consistent playing surface.',
      es: 'Dale a tu mesa un aspecto fresco y un juego mejorado con pano nuevo. Instalamos Simonis, Championship y otras telas de billar premium en la cama y rieles para una superficie de juego suave y consistente.',
    },
    icon: 'Paintbrush',
  },
  {
    id: 're-level',
    slug: 're-level',
    name: {
      en: 'Re-Level',
      es: 'Re-Nivelacion',
    },
    description: {
      en: 'Floors shift and tables settle over time. Our precision leveling service uses machinist-grade levels to ensure your slate is perfectly flat, eliminating roll-off and drift.',
      es: 'Los pisos se mueven y las mesas se asientan con el tiempo. Nuestro servicio de nivelacion de precision utiliza niveles de grado maquinista para asegurar que su pizarra este perfectamente plana, eliminando desvios.',
    },
    icon: 'Ruler',
  },
];
