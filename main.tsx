import React from 'react';
import { MenuSection as MenuSectionType } from '../data/menu';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
}

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-2">
        <span className="material-symbols-outlined text-primary">{section.icon}</span>
        <h3 className="text-2xl font-bold">{section.title}</h3>
      </div>
      
      <div className={`grid gap-4 ${
        section.id === 'chinese' ? 'md:grid-cols-2 lg:grid-cols-3' : 
        section.id === 'meals' ? 'grid-cols-1' : 
        'md:grid-cols-2'
      }`}>
        {section.items.map((item) => {
          // Determine variant based on item properties or section
          let variant: 'default' | 'featured' | 'compact' = 'default';
          
          if (section.id === 'meals' && item.id === 'south-indian-thali') {
            return (
              <div key={item.id} className="w-full">
                <MenuItem item={item} variant="featured" />
              </div>
            );
          }
          
          if (!item.image) {
            variant = 'compact';
          }

          return <MenuItem key={item.id} item={item} variant={variant} />;
        })}
      </div>
    </section>
  );
}
