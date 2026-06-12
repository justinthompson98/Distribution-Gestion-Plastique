import React, { useState } from 'react';
import { EditableText } from './EditableText';
import { Calculator, Recycle, ArrowRight, Wind } from 'lucide-react';
import { siteImages } from '../config/images';

export function ImpactStats() {
  const [rollsInput, setRollsInput] = useState<string>("20");

  const imgPlasticsLoop = siteImages.statPlasticsLoop;
  const imgBagsRecycled = siteImages.statBagsRecycled;
  const imgGarageAverage = siteImages.statGarageAverage;

  const stats = [
    {
      id: "stat-plastics-loop",
      number: "45%",
      title: "Plastique récupéré & réutilisé",
      desc: "Proportion du plastique produit qui est récupéré et réutilisé, réduisant considérablement la mise en marché du nouveau plastique.",
      img: imgPlasticsLoop,
      alt: "Sac de plastique GP Plastique rempli",
      badge: "Économie Circulaire Directe"
    },
    {
      id: "stat-bags-recycled",
      number: "150 000",
      title: "Sacs détournés des dépotoirs",
      desc: "Nombres de sacs à pneu récupérés et recyclés dans la dernière année qui éviteront les sites d'enfouissement à déchets.",
      img: imgBagsRecycled,
      alt: "Évitement d'enfouissement",
      badge: "Avenir Sans Déchets"
    },
    {
      id: "stat-garage-average",
      number: "600 lbs",
      title: "Plastique recyclé par garage",
      desc: "Quantité moyenne de livres de plastique recyclé par garage par an grâce à l'adhésion au programme de récupération Distribution GP.",
      img: imgGarageAverage,
      alt: "Cycle vertueux de recyclage",
      badge: "Performance Éco-Locale"
    }
  ];

  const handleRollsChange = (val: string) => {
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      setRollsInput(val);
    }
  };

  const parsedRolls = parseFloat(rollsInput) || 0;
  const computedLbs = Math.round(parsedRolls * 28);
  // 700 lbs of plastic avoids 794 kg of CO2
  const computedCO2 = Math.round(computedLbs * (794 / 700));

  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-b from-[#e6eefd] via-[#f1f6fe] to-[#f8faff] border-t border-zinc-200 text-zinc-900 relative overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
         {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-955 tracking-tight leading-none uppercase">
            <EditableText id="impact-head-title" defaultText="Notre impact en chiffres" />
          </h2>
        </div>

        {/* Side-by-side Layout: Compact Stats on Left (lg:col-span-7), Calculator on Right (lg:col-span-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch w-full">
          
          {/* Left Column: 3 Rich Stats Cards with Photos */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full h-full justify-between">
            {stats.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/75 backdrop-blur-md border border-zinc-200/90 p-5 rounded-2xl hover:shadow-md hover:border-emerald-600/40 hover:bg-white transition-all duration-300 group text-left h-full"
                >
                  {/* Elegant Image on the Left */}
                  <div className="w-full sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-video sm:aspect-square overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200 shadow-2xs relative shrink-0 group-hover:border-emerald-500/50 transition-colors">
                    {item.img ? (
                      <img 
                        src={item.img} 
                        alt={item.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Text block */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <div className="text-3xl md:text-4.5xl font-black text-emerald-750 tracking-tight leading-none font-sans">
                        <EditableText id={`${item.id}-number`} defaultText={item.number} />
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-black text-zinc-950 tracking-tight leading-snug mb-1.5">
                      <EditableText id={`${item.id}-title`} defaultText={item.title} />
                    </h3>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                      <EditableText id={`${item.id}-desc`} defaultText={item.desc} as="span" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Calculator Block (Compact & Professional) */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 text-left shadow-md relative overflow-hidden group/calc w-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="space-y-5 relative z-10 w-full">
              {/* Header block */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/90 px-3 py-0.5 rounded-full text-emerald-700">
                  <Calculator className="w-3.5 h-3.5 animate-pulse" />
                  <span className="text-[10px] uppercase font-extrabold tracking-wider font-mono">Calculateur d'impact</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-zinc-900 tracking-tight leading-tight">
                  Estimez l'impact environnemental de votre garage
                </h3>
                
                <p className="text-zinc-650 text-xs leading-relaxed font-normal">
                  Saisissez votre volume annuel de rouleaux de sacs à pneus afin de simuler l'impact de réduction d'empreinte carbone potentielle.
                </p>
              </div>

              {/* Input section & Results split */}
              <div className="space-y-4 pt-4 border-t border-zinc-150">
                
                {/* Inputs & explanatory points */}
                <div className="flex flex-col gap-3">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-zinc-700 uppercase tracking-widest font-mono">
                      Quantité de rouleaux par an :
                    </label>
                    <div className="relative flex items-center rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-1.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/10 hover:border-emerald-500 transition-all shadow-2xs">
                      <input 
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={rollsInput}
                        onChange={(e) => handleRollsChange(e.target.value)}
                        placeholder="Ex: 20"
                        className="w-full text-center bg-transparent border-0 text-zinc-900 font-extrabold text-lg placeholder-zinc-400 focus:outline-hidden py-1 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-[10px] text-zinc-600 pt-2 border-t border-zinc-100/60">
                    <p className="leading-snug">
                      <span className="font-semibold text-zinc-900">Standard technique :</span> Un rouleau de 200 sacs représente une masse nette d'environ <span className="font-bold text-emerald-600">28 lbs</span> (12,7 kg) de plastique.
                    </p>
                    <p className="leading-snug">
                      <span className="font-semibold text-zinc-900">Facteur de réduction CO₂ :</span> La valorisation de 1 lbs de plastique permet d'éviter l'émission de <span className="font-bold text-sky-600">1,13 kg</span> de CO₂e équivalent dans l'atmosphère.
                    </p>
                  </div>
                </div>

                {/* Live Results side */}
                <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100/80">
                  {/* LBS Plastic Card */}
                  <div className="bg-emerald-50/50 border border-emerald-150 rounded-xl p-5 pb-4 text-center relative overflow-hidden flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[9px] uppercase font-extrabold tracking-widest text-emerald-800 block mb-3">
                        Plastique recyclé
                      </span>
                      <div className="text-2xl md:text-3xl font-black text-emerald-700 tracking-tight leading-none font-sans">
                        {computedLbs.toLocaleString('fr-CA')} <span className="text-zinc-800 text-xs font-sans font-extrabold">LBS</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-emerald-750 font-semibold inline-flex items-center justify-center gap-1 mt-4 pt-2.5 border-t border-emerald-100">
                      <Recycle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Valorisé localement
                    </div>
                  </div>

                  {/* CO2 Saved Card */}
                  <div className="bg-sky-50/50 border border-sky-150 rounded-xl p-5 pb-4 text-center relative overflow-hidden flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[9px] uppercase font-extrabold tracking-widest text-sky-800 block mb-3">
                        Émissions CO₂ évitées
                      </span>
                      <div className="text-2xl md:text-3xl font-black text-sky-700 tracking-tight leading-none font-sans">
                        {computedCO2.toLocaleString('fr-CA')} <span className="text-zinc-800 text-xs font-sans font-extrabold">KG</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-sky-750 font-semibold inline-flex items-center justify-center gap-1 mt-4 pt-2.5 border-t border-sky-100">
                      <Wind className="w-3.5 h-3.5 text-sky-600 shrink-0" style={{ transform: 'scaleX(-1)' }} />
                      Bilan carbone préservé
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
