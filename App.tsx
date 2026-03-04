import React from 'react';
import { MenuItem as MenuItemType } from '../data/menu';

interface MenuItemProps {
  item: MenuItemType;
  variant?: 'default' | 'featured' | 'compact';
}

export default function MenuItem({ item, variant = 'default' }: MenuItemProps) {
  // Featured variant (like the Thali)
  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-primary/5">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              className="h-48 w-full object-cover md:h-full" 
              src={item.image} 
              alt={item.name} 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`h-3 w-3 rounded-full border border-white ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                  <h4 className="text-xl font-bold">{item.name}</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
              <span className="text-xl font-black text-primary">₹{item.price}</span>
            </div>
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Compact variant (no image, like Vada/Chinese items in grid)
  if (!item.image || variant === 'compact') {
    return (
      <div className="rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border border-primary/5 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full border border-white ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
              <h4 className="font-bold">{item.name}</h4>
            </div>
            <span className="font-bold text-primary">₹{item.price}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <div className={`flex gap-4 rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border ${item.isChefSpecial ? 'border-2 border-primary/30' : 'border-primary/5'} relative group`}>
      {item.isChefSpecial && (
        <div className="absolute -right-2 -top-2 z-10 rounded-lg bg-primary px-3 py-1 text-[10px] font-black text-white shadow-lg">
          CHEF'S SPECIAL
        </div>
      )}
      
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
        <img 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={item.image} 
          alt={item.name}
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full border border-white ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
              <h4 className="font-bold">{item.name}</h4>
            </div>
            <span className="font-bold text-primary">₹{item.price}</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{item.description}</p>
        </div>
        
        {item.isBestseller && (
          <div className="mt-2">
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">BESTSELLER</span>
          </div>
        )}
      </div>
    </div>
  );
}
