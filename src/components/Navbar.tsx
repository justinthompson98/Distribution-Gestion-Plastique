import { Phone, Menu, X, Recycle } from 'lucide-react';
import { useState } from 'react';
import { SmartLogo } from './GPLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-xs transition-all duration-350">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-22">
          
          {/* Left Side Group: Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group whitespace-nowrap">
              <div className="transition-all duration-300 group-hover:scale-105 select-none my-0.5 flex-shrink-0">
                <SmartLogo size={56} className="text-zinc-900" accentColor="currentColor" />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <span className="font-sans font-extrabold text-[15px] sm:text-[17px] text-zinc-900 tracking-tight leading-none uppercase group-hover:text-emerald-600 transition-colors">
                  DISTRIBUTION
                </span>
                <span className="font-sans font-black text-[15px] sm:text-[17px] text-emerald-600 tracking-tight leading-none uppercase mt-1">
                  GESTION PLASTIQUE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Grouped with Phone Number - Aligned to the Right */}
          <div className="hidden lg:flex items-center ml-auto bg-zinc-50 hover:bg-zinc-100/60 border border-zinc-150 rounded-full pl-6 pr-2.5 py-1.5 gap-6 xl:gap-8 transition-all duration-300 shadow-xs select-none">
            <a 
              href="#tarifs" 
              className="text-xs uppercase tracking-wider font-extrabold text-zinc-650 hover:text-emerald-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Tarifs
            </a>
            <a 
              href="#recuperation" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-zinc-650 hover:text-emerald-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap group/nav"
            >
              <Recycle className="w-3.5 h-3.5 text-emerald-500 shrink-0 transition-transform duration-700 ease-out group-hover/nav:rotate-45" />
              <span>Programme de récupération</span>
            </a>
            <a 
              href="#a-propos" 
              className="text-xs uppercase tracking-wider font-extrabold text-zinc-650 hover:text-emerald-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              À Propos
            </a>
            <a 
              href="tel:18886661996" 
              className="flex items-center gap-2 px-4.5 py-2 text-xs uppercase tracking-wider font-extrabold text-white bg-blue-900 border border-blue-950 hover:bg-blue-950 active:scale-[0.97] transition-all whitespace-nowrap rounded-full shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              1-888-666-1996
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-emerald-600 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#tarifs"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600"
            >
              Prix (grille tarifaire)
            </a>
            <a
              href="#recuperation"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600 group"
            >
              <Recycle className="w-4.5 h-4.5 text-emerald-500 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
              <span>Programme de récupération</span>
            </a>
            <a
              href="#a-propos"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600"
            >
              À Propos
            </a>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <a 
                href="tel:18886661996" 
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-base font-extrabold text-zinc-800 bg-zinc-50 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                1-888-666-1996
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
