import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-20 py-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
          <h1 className="text-xl font-black tracking-tight text-primary">SAI JYOTHI HOTEL</h1>
        </div>
        <div className="hidden md:flex flex-1 justify-center max-w-md px-4">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/60">search</span>
            <input 
              className="w-full rounded-xl border-none bg-primary/10 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-primary/40 outline-none" 
              placeholder="Search for dishes..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-lg">chat</span>
            <span className="hidden sm:inline">Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
