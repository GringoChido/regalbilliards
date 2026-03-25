export interface BilingualContent {
  en: string;
  es: string;
}

export type Manufacturer =
  | 'presidential'
  | 'cl-bailey'
  | 'imperial'
  | 'ram'
  | 'tornado'
  | 'viper'
  | 'cuetec'
  | 'lucasi'
  | 'players'
  | 'viking'
  | 'aramith'
  | 'simonis'
  | 'level-best'
  | 'brunswick'
  | 'olhausen'
  | 'connelly'
  | 'gandy'
  | 'generic';

export type ProductCategory =
  | 'pool-tables'
  | 'used-pool-tables'
  | 'game-room-furniture'
  | 'game-tables'
  | 'darts'
  | 'accessories'
  | 'cue-sticks';

export type TableStyle = 'traditional' | 'contemporary' | 'rustic' | 'modern';

export interface Product {
  id: string;
  slug: string;
  name: string;
  manufacturer: Manufacturer;
  category: ProductCategory;
  description: BilingualContent;
  features: string[];
  style: TableStyle;
  images: string[];
  priceRange?: string;
  isOutdoor?: boolean;
  isUsed?: boolean;
  subcategory?: string;
  brand?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: BilingualContent;
  description: BilingualContent;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: BilingualContent;
  rating: number;
}

export interface NavItem {
  label: BilingualContent;
  href: string;
  children?: NavItem[];
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: BilingualContent;
  description: BilingualContent;
  image: string;
}
