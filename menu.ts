@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --color-primary: #E8720C;
  --color-background-light: #FDF6EC;
  --color-background-dark: #1A1A1A;
  
  --color-saffron: #E8720C;
  --color-gold: #F5A623;
  --color-cream: #FDF6EC;
  --color-charcoal: #1A1A1A;

  --font-display: "Work Sans", sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-sans: "Poppins", sans-serif;
  
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}

@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .glow-effect {
    text-shadow: 0 0 15px rgba(245, 166, 35, 0.6);
  }
  
  .tab-active {
    background-color: #E8720C;
    color: white;
  }
  
  @keyframes pulse-green {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }
  
  .animate-whatsapp {
    animation: pulse-green 2s infinite;
  }
}
