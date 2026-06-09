import React from 'react';
import { EditableText } from './EditableText';

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

const PARTNER_LOGOS = [
  partenaire1,
  partenaire2,
  partenaire3,
  partenaire4,
  partenaire5,
  partenaire6,
  partenaire7,
  partenaire8,
  partenaire9,
  partenaire10,
  partenaire11,
  partenaire12,
];

export function Partners() {
  return (
    <section id="partenaires" className="py-24 bg-zinc-50 border-t border-b border-zinc-150 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4.5xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
            <EditableText id="partners-title" defaultText="QUELQUES UNS DE NOS CLIENTS" />
          </h2>
        </div>

        {/* 12-Logo Minimal Grid Pattern */}
        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto gap-6">
          {PARTNER_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] rounded-2xl border flex items-center justify-center overflow-hidden transition-all duration-300 bg-white border-zinc-250/70"
            >
              {/* Logo wrapper */}
              <div className="w-full h-full p-4.5 flex items-center justify-center relative bg-white">
                {logo ? (
                  <img
                    src={logo}
                    alt={`Logo partenaire ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain filter hover:scale-103 transition-transform duration-300 select-none pointer-events-none"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
