import React, { useState } from 'react';
import { Truck, Recycle, Factory, TrendingUp, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EditableText } from './EditableText';
import { siteImages } from '../config/images';
import { GPLogo, SmartLogo } from './GPLogo';

export function RecoveryProgram() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const mainStep1Img = siteImages.step1Delivery;
  const mainStep2Img = siteImages.step2Collection;
  const mainStep4Img = siteImages.step4Reports;
  const recyclingPhotos = siteImages.recyclingSteps;

  const handleNextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % recyclingPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + recyclingPhotos.length) % recyclingPhotos.length);
    }
  };

  return (
    <section id="recuperation" className="py-24 px-4 md:px-8 bg-linear-to-b from-emerald-850 via-emerald-900 to-emerald-950 text-white relative overflow-hidden selection:bg-emerald-800 selection:text-white font-sans">
      
      {/* Dynamic Background Elements for Ecological Vibe */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-[-100px] bottom-10 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center justify-center">
          <img 
            src="/logo-programme.png" 
            alt="Logo Programme" 
            className="max-h-24 max-w-[240px] mb-6 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const sibling = e.currentTarget.nextSibling as HTMLElement;
              if (sibling) {
                sibling.style.display = 'block';
              }
            }}
          />
          <svg 
            viewBox="0 0 512 512" 
            className="w-16 h-16 text-[#7ca8d2] mb-6 flex-shrink-0"
            fill="currentColor"
            style={{ display: 'none' }}
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4 0 51.1-23.7 96.7-60.8 126.9l27.1 24.6c8.5 7.7 9.8 20.8 2.8 30.1s-21.5 11.2-30.1 2.8l-72-65.5c-4.8-4.4-7.6-10.7-7.6-17.3s2.8-12.9 7.6-17.3l72-65.5c8.5-7.7 21.5-6.9 29.3 1.7 7.7 8.5 6.9 21.5-1.7 29.3l-20.9 19c25.4-21.6 41.5-53.7 41.5-89.6 0-9.8-1.2-19.3-3.5-28.4l-31.9 29.1c-8.5 7.7-21.5 6.9-29.3-1.7-7.7-8.5-6.9-21.5 1.7-29.3l43.3-39.4c8.5-7.7 21.5-6.9 29.3 1.7s6.9 21.5-1.7 29.3l-10.3 9.4 43.3-39.4c6.9-6.3 16.6-8.2 25.3-5zm-239.9 201.4c-8.7-3.2-18.4-.5-24.6 6.4l-39.4 43.3c-8.3-1.1-16.8-1.7-25.4-1.7-51.1 0-96.7 23.7-126.9 60.8l-24.6-27.1c-7.7-8.5-20.8-9.8-30.1-2.8s-11.2 21.5-2.8 30.1l65.5 72c4.4 4.8 10.7 7.6 17.3 7.6s12.9-2.8 17.3-7.6l65.5-72c7.7-8.5 6.9-21.5-1.7-29.3-8.5-7.7-21.5-6.9-29.3 1.7l-19 20.9c21.6-25.4 53.7-41.5 89.6-41.5 9.8 0 19.3 1.2 28.4 3.5l-29.1 31.9c-7.7 8.5-6.9 21.5 1.7 29.3 8.5 7.7 21.5 6.9 29.3-1.7l39.4-43.3c7.7-8.5 6.9-21.5-1.7-29.3s-21.5-6.9-29.3 1.7l-9.4 10.3 39.4-43.3c6.3-6.9 8.2-16.6 5-25.3zm-65.5-231.1l72 65.5c4.8 4.4 7.6 10.7 7.6 17.3s-2.8 12.9-7.6 17.3l-72 65.5c-8.5 7.7-21.5 6.9-29.3-1.7-7.7-8.5-6.9-21.5 1.7-29.3l20.9-19c-25.4 21.6-41.5 53.7-41.5 89.6 0 9.8 1.2 19.3 3.5 28.4l31.9-29.1c8.5-7.7 21.5-6.9 29.3 1.7 7.7 8.5 6.9 21.5-1.7 29.3l-43.3 39.4c-8.5 7.7-21.5 6.9-29.3-1.7s-6.9-21.5 1.7-29.3l10.3-9.4-43.3 39.4c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.3-1.7-16.8-1.7-25.4 0-51.1 23.7-96.7 60.8-126.9l-27.1-24.6c-8.5-7.7-9.8-20.8-2.8-30.1s21.5-11.2 30.1-2.8z"/>
          </svg>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight text-white uppercase whitespace-nowrap max-w-full">
            <EditableText id="recovery-program-title" defaultText="Programme - Gestion - Plastique" />
          </h2>

          {/* Horizontal line spanning the whole title area */}
          <div className="w-full h-px bg-emerald-500/35 mt-6 mb-6" />

          {/* Divided container for Left & Right text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full relative">
            {/* Left side */}
            <div className="flex items-center justify-center text-center px-4 py-2">
              <span className="text-sm sm:text-lg md:text-xl font-bold tracking-wider text-emerald-300 uppercase leading-snug">
                <EditableText id="recovery-left-subtitle-multiline" defaultText="Recyclage des<br />sacs à pneus usés" isHtml={true} />
              </span>
            </div>

            {/* Vertical separating line in the middle (only on md and up, not touching the horizontal line) */}
            <div className="hidden md:block absolute left-1/2 top-1.5 bottom-1.5 w-px bg-emerald-500/35 -translate-x-1/2" />

            {/* Right side */}
            <div className="flex items-center justify-center text-center px-4 py-2 border-t border-emerald-800/40 md:border-t-0">
              <span className="text-sm sm:text-lg md:text-xl font-bold tracking-wider text-emerald-300 uppercase leading-snug">
                <EditableText id="recovery-right-subtitle-multiline" defaultText="Gestion des<br />déchets plastique" isHtml={true} />
              </span>
            </div>
          </div>
        </div>

        {/* Process Roadmap divided into groups of 2 */}
        <div className="space-y-10 relative z-10">
          
          {/* GROUP 1: STEPS 01 & 02 (LOGISTICS & USAGE) */}
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* STEP 01 */}
              <div className="bg-emerald-900/35 border border-emerald-800/80 backdrop-blur-md rounded-2xl p-6.5 flex flex-col justify-between group hover:border-emerald-400 hover:bg-emerald-900/55 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 bg-emerald-800/80 text-emerald-300 rounded-2xl flex items-center justify-center font-bold group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                        <Truck className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <span className="absolute -bottom-2.5 -right-2.5 text-[15px] font-mono leading-none bg-emerald-400 text-emerald-955 font-black px-2.5 py-1.5 rounded-full shadow-md border border-emerald-300">
                        01
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wider">
                      <EditableText id="rec-step-title-01" defaultText="NOUS LIVRONS" />
                    </h3>
                  </div>

                  <div className="mb-4 overflow-hidden rounded-xl aspect-16/10 border border-emerald-850/80 bg-emerald-950/80 relative group/img">
                    {mainStep1Img ? (
                      <img
                        src={mainStep1Img}
                        alt="Nous livrons"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
                  </div>

                  <p className="text-emerald-100/90 text-sm leading-relaxed font-light">
                    <EditableText id="rec-step-desc-01" defaultText="Vos rouleaux de sacs à pneu sont livrés directement à votre garage juste avant les périodes critiques de l'année au printemps et à l'automne." as="span" />
                  </p>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="bg-emerald-900/35 border border-emerald-800/80 backdrop-blur-md rounded-2xl p-6.5 flex flex-col justify-between group hover:border-emerald-400 hover:bg-emerald-900/55 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 bg-emerald-800/80 text-emerald-300 rounded-2xl flex items-center justify-center font-bold group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                        <Recycle className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <span className="absolute -bottom-2.5 -right-2.5 text-[15px] font-mono leading-none bg-emerald-400 text-emerald-955 font-black px-2.5 py-1.5 rounded-full shadow-md border border-emerald-300">
                        02
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wider">
                      <EditableText id="rec-step-title-02" defaultText="VOUS RÉCUPÉREZ" />
                    </h3>
                  </div>

                  <div className="mb-4 overflow-hidden rounded-xl aspect-16/10 border border-emerald-850/80 bg-emerald-950/80 relative group/img">
                    {mainStep2Img ? (
                      <img
                        src={mainStep2Img}
                        alt="Vous récupérez"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
                  </div>

                  <div className="text-emerald-100/90 text-sm leading-relaxed font-light">
                    <p>
                      Vous récupérez les sacs à pneu usés de vos clients à l'aide de notre support sac conçu à cet effet. À la fin de chaque saison de pneu, nos équipes s'occuperont de faire le ramassage.
                    </p>
                    <p className="mt-4 text-xs text-emerald-300/85 font-medium flex items-start gap-1.5">
                      <span className="text-sky-400 font-black shrink-0">**</span>
                      <span>La fréquence peut varier selon le volume récupéré</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GROUP 2: STEPS 03 & 04 (RECYCLING - ENLARGED & REPORT) */}
          <div className="space-y-4 pt-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* STEP 03: ENLARGED FULL-WIDTH (lg:col-span-3) */}
              <div className="lg:col-span-3 bg-emerald-900/35 border border-emerald-800/80 backdrop-blur-md rounded-2xl p-6.5 flex flex-col justify-between group hover:border-emerald-450 hover:bg-emerald-900/55 transition-all duration-300">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 bg-emerald-800/80 text-emerald-300 rounded-2xl flex items-center justify-center font-bold">
                          <Factory className="w-7 h-7 stroke-[2.2]" />
                        </div>
                        <span className="absolute -bottom-2.5 -right-2.5 text-[15px] font-mono leading-none bg-emerald-400 text-emerald-955 font-black px-2.5 py-1.5 rounded-full shadow-md border border-emerald-300">
                          03
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase tracking-wider">
                        <EditableText id="rec-step-title-03" defaultText="NOUS RECYCLONS" />
                      </h3>
                    </div>
                  </div>

                  <div className="mb-6 max-w-4xl text-left">
                    <p className="text-emerald-100/90 text-sm leading-relaxed font-light">
                      <EditableText id="rec-step-desc-03" defaultText="Les sacs de plastique usés sont acheminés à notre usine pour être fondus. La matière brute est ensuite récupéré afin de produire de nouveaux sacs d'aussi bonne qualité pour la saison suivante." as="span" />
                    </p>
                  </div>

                  {/* 5 Landscape Photos Showcase Section - Large & Clear */}
                  <div className="pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
                      {recyclingPhotos.map((photo, index) => (
                        <div
                          key={index}
                          onClick={() => setActivePhotoIndex(index)}
                          className="group/photo relative aspect-[3/4] sm:aspect-[3/4] lg:aspect-[3/4.2] rounded-2xl overflow-hidden border border-emerald-800/60 bg-emerald-950/80 cursor-pointer shadow-lg hover:border-emerald-400 hover:shadow-emerald-950/40 transition-all duration-500 flex flex-col justify-end"
                        >
                          {photo.url ? (
                            <img
                              src={photo.url}
                              alt={`Étape ${index + 1}`}
                              referrerPolicy="no-referrer"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-110"
                            />
                          ) : null}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover/photo:opacity-90" />
                          
                          {/* Step Badge */}
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/85 text-xs font-mono font-black text-emerald-400 border border-emerald-850 shadow-md">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* STEP 04: FULL-WIDTH (lg:col-span-3) for structural balance */}
              <div className="lg:col-span-3 bg-emerald-900/35 border border-emerald-800/80 backdrop-blur-md rounded-2xl p-6.5 flex flex-col justify-between group hover:border-emerald-400 hover:bg-emerald-900/55 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 bg-emerald-800/80 text-emerald-300 rounded-2xl flex items-center justify-center font-bold group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                          <TrendingUp className="w-7 h-7 stroke-[2.2]" />
                        </div>
                        <span className="absolute -bottom-2.5 -right-2.5 text-[15px] font-mono leading-none bg-emerald-400 text-emerald-955 font-black px-2.5 py-1.5 rounded-full shadow-md border border-emerald-300">
                          04
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase tracking-wider">
                        <EditableText id="rec-step-title-04" defaultText="VOUS VALORISEZ" />
                      </h3>
                    </div>

                    <p className="text-emerald-100/90 text-sm leading-relaxed font-light">
                      <EditableText id="rec-step-desc-04" defaultText="Lorsque nous récupérons vos sacs usés, ceux-ci sont pesées afin de vous transmettre un rapport détaillé de votre contribution de récupération. Vous pouvez ainsi mettre de l'avant votre impact environnemental auprès de votre clientèle!" as="span" />
                    </p>
                  </div>

                  <div className="md:col-span-5 overflow-hidden rounded-xl aspect-video border border-emerald-850/80 bg-emerald-950/80 relative group/img">
                    {mainStep4Img ? (
                      <img
                        src={mainStep4Img}
                        alt="Suivi d'impact"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur-md p-4 transition-all"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div className="absolute top-4 right-4 z-60 flex items-center gap-3">
            <span className="text-zinc-400 font-mono text-xs">
              {activePhotoIndex + 1} / {recyclingPhotos.length}
            </span>
            <button
               type="button"
              onClick={() => setActivePhotoIndex(null)}
              className="bg-zinc-900/85 hover:bg-zinc-800 border border-zinc-800 p-2 rounded-full text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative max-w-4xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-2 md:-left-16 z-55 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 p-3 rounded-full text-white cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Main Image Container */}
            <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-2xl overflow-hidden shadow-2xl relative w-full aspect-16/10 flex items-center justify-center">
              {recyclingPhotos[activePhotoIndex]?.url ? (
                <img
                  src={recyclingPhotos[activePhotoIndex].url}
                  alt={`Étape ${activePhotoIndex + 1}`}
                  className="w-full h-full object-contain bg-zinc-950"
                  referrerPolicy="no-referrer"
                />
              ) : null}
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-2 md:-right-16 z-55 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 p-3 rounded-full text-white cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
