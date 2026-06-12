import React, { useState, useEffect } from 'react';
import { EditableText } from './EditableText';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Importations depuis les répertoires dédiés éditables (via Drag and Drop de l'utilisateur)
import partenaire1 from '../assets/images/partenaires/partenaire_1.png';
import partenaire2 from '../assets/images/partenaires/partenaire_2.png';
import partenaire3 from '../assets/images/partenaires/partenaire_3.png';
import partenaire4 from '../assets/images/partenaires/partenaire_4.png';
import partenaire5 from '../assets/images/partenaires/partenaire_5.png';
import partenaire6 from '../assets/images/partenaires/partenaire_6.png';
import partenaire7 from '../assets/images/partenaires/partenaire_7.png';
import partenaire8 from '../assets/images/partenaires/partenaire_8.png';
import partenaire9 from '../assets/images/partenaires/partenaire_9.png';
import partenaire10 from '../assets/images/partenaires/partenaire_10.png';
import partenaire11 from '../assets/images/partenaires/partenaire_11.png';
import partenaire12 from '../assets/images/partenaires/partenaire_12.png';

const PARTNERS_DATA = [
  { logo: partenaire1, url: 'https://pneusandreouellet.com/' }, // Remplacez '#' par l'URL du site (ex: 'https://site-client1.com')
  { logo: partenaire2, url: 'https://www.gmpaille.com/fr' }, // Remplacez '#' par l'URL du site (ex: 'https://site-client2.com')
  { logo: partenaire3, url: 'https://pieceseconomiques.com/a-propos/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire4, url: 'https://groupesaillant.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire5, url: 'https://www.kiaquebec.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire6, url: 'https://www.laplantegroupeauto.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire7, url: 'https://desharnais.ca/services/mecanique/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire8, url: 'https://www.theetgechevrolet.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire9, url: 'https://www.lamijunior.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire10, url: 'https://carrefour40640toyota.ca/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire11, url: 'https://www.carrefourvw.com/' }, // Remplacez '#' par l'URL du site
  { logo: partenaire12, url: 'https://www.pagesjaunes.ca/bus/Quebec/Quebec/Garage-Julien-Bedard-Inc/2283219.html' }, // Remplacez '#' par l'URL du site
];

const EXTENDED_PARTNERS = [
  ...PARTNERS_DATA,
  ...PARTNERS_DATA,
  ...PARTNERS_DATA,
];

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState(PARTNERS_DATA.length);
  const [visibleCount, setVisibleCount] = useState(4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= PARTNERS_DATA.length * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - PARTNERS_DATA.length);
    } else if (currentIndex < PARTNERS_DATA.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + PARTNERS_DATA.length);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      // Small timeout to let the state-driven transform recalculation render instantly
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section id="partenaires" className="pt-24 pb-12 bg-linear-to-b from-[#e6eefd] via-[#f1f6fe]/60 to-[#f2f7ff] border-t border-zinc-200 text-zinc-900 relative overflow-hidden selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4.5xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
            <EditableText id="partners-title" defaultText="QUELQUES UNS DE NOS CLIENTS" />
          </h2>
        </div>

        {/* Carousel Grid Layout with Controls */}
        <div className="relative max-w-5xl mx-auto px-10 md:px-14">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-zinc-200/95 shadow-md hover:shadow-lg flex items-center justify-center text-zinc-700 hover:text-blue-900 hover:border-blue-300 transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-zinc-200/95 shadow-md hover:shadow-lg flex items-center justify-center text-zinc-700 hover:text-blue-900 hover:border-blue-300 transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Viewport wrapper */}
          <div className="overflow-hidden py-4">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {EXTENDED_PARTNERS.map((partner, index) => {
                const hasLink = partner.url && partner.url !== '#';
                return (
                  <div
                    key={index}
                    className="w-1/2 sm:w-1/3 lg:w-1/4 shrink-0 px-3 transition-opacity duration-300"
                  >
                    <a
                      href={partner.url}
                      target={hasLink ? "_blank" : undefined}
                      rel={hasLink ? "noopener noreferrer" : "noreferrer"}
                      className={`group relative aspect-[3/2] rounded-2xl border flex items-center justify-center overflow-hidden transition-all duration-300 bg-white border-zinc-250/70 shadow-xs ${
                        hasLink 
                          ? 'hover:border-blue-900 hover:shadow-lg hover:shadow-blue-900/5 cursor-pointer transform hover:-translate-y-1' 
                          : 'cursor-default'
                      }`}
                      onClick={(e) => {
                        if (!hasLink) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {/* Logo wrapper */}
                      <div className="w-full h-full p-4.5 flex items-center justify-center relative bg-white">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={`Logo partenaire ${(index % PARTNERS_DATA.length) + 1}`}
                            referrerPolicy="no-referrer"
                            className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                          />
                        ) : null}
                        
                        {/* Subtle link overlay indicator on hover if link exists */}
                        {hasLink && (
                          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ExternalLink className="w-4 h-4 text-blue-900 stroke-[2.5]" />
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
