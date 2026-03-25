'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { Manufacturer, TableStyle } from '@/types';

interface ProductFilterProps {
  onFilterChange: (filters: { manufacturer: Manufacturer | null; style: TableStyle | null }) => void;
}

const manufacturers: { value: Manufacturer; label: string }[] = [
  { value: 'presidential', label: 'Presidential' },
  { value: 'cl-bailey', label: 'C.L. Bailey' },
  { value: 'imperial', label: 'Imperial' },
];

const styles: { value: TableStyle; label: string }[] = [
  { value: 'traditional', label: 'Traditional' },
  { value: 'contemporary', label: 'Contemporary' },
  { value: 'rustic', label: 'Rustic' },
  { value: 'modern', label: 'Modern' },
];

const ProductFilter = ({ onFilterChange }: ProductFilterProps) => {
  const t = useTranslations('PoolTables');
  const [activeManufacturer, setActiveManufacturer] = useState<Manufacturer | null>(null);
  const [activeStyle, setActiveStyle] = useState<TableStyle | null>(null);

  const handleManufacturer = (value: Manufacturer | null) => {
    setActiveManufacturer(value);
    onFilterChange({ manufacturer: value, style: activeStyle });
  };

  const handleStyle = (value: TableStyle | null) => {
    setActiveStyle(value);
    onFilterChange({ manufacturer: activeManufacturer, style: value });
  };

  const filterButtonClasses = (isActive: boolean) =>
    cn(
      'px-4 py-2 font-label text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer',
      isActive
        ? 'bg-secondary text-on-secondary'
        : 'text-on-surface-variant hover:text-secondary border-b border-transparent hover:border-secondary/30',
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mr-2">
          {t('filterManufacturer')}:
        </span>
        <button
          onClick={() => handleManufacturer(null)}
          className={filterButtonClasses(activeManufacturer === null)}
        >
          {t('filterAll')}
        </button>
        {manufacturers.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleManufacturer(value)}
            className={filterButtonClasses(activeManufacturer === value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mr-2">
          {t('filterStyle')}:
        </span>
        <button
          onClick={() => handleStyle(null)}
          className={filterButtonClasses(activeStyle === null)}
        >
          {t('filterAll')}
        </button>
        {styles.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleStyle(value)}
            className={filterButtonClasses(activeStyle === value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
