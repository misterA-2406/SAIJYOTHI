import React, { useState, useEffect } from 'react';

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('breakfast');

  const sections = [
    { id: 'breakfast', label: 'Breakfast & Tiffins' },
    { id: 'meals', label: 'Traditional Meals' },
    { id: 'biryani', label: 'Biryani Specials' },
    { id: 'chinese', label: 'Chinese & Starters' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-colors text-left ${
            activeSection === section.id
              ? 'bg-primary text-white shadow-lg shadow-primary/20 font-bold'
              : 'bg-primary/10 text-slate-700 dark:text-slate-300 hover:bg-primary/20'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
