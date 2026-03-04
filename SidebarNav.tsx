import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 bg-background-dark py-12 text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-sm">restaurant</span>
              </div>
              <h2 className="text-xl font-black tracking-tight text-white">SAI JYOTHI HOTEL</h2>
            </div>
            <p className="text-sm leading-relaxed">Experience the true essence of South Indian hospitality and flavors. Crafted with love and traditional recipes passed down through generations.</p>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>123 Temple Road, Heritage Block, Hyderabad</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>hello@saijyothihotel.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary" href="#">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg>
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary" href="#">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs">
          <p>© 2024 Sai Jyothi Hotel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
