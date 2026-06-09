import React, { useState } from 'react';
import { EditableText } from './EditableText';
import { Calculator, Recycle, ArrowRight, Wind } from 'lucide-react';
import { siteImages } from '../config/images';

export function ImpactStats() {
  const [rollsInput, setRollsInput] = useState<string>("50");

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
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-zinc-200/65 relative overflow-hidden">
      {/* Grid subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
         {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-955 tracking-tight leading-none uppercase">
            <EditableText id="impact-head-title" defaultText="Notre impact en chiffres" />
          </h2>
        </div>

        {/* Vertical List of Wide Stats - Balanced Stack format */}
        <div className="flex flex-col gap-5 md:gap-6 mb-14 w-full">
          {stats.map((item) => {
            return (
              <div 
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 bg-zinc-50 border border-zinc-150/70 p-4.5 md:p-6 rounded-2xl hover:shadow-md hover:border-zinc-250 transition-all duration-300 group"
              >
                
                {/* Visual block - Elegant Image */}
                <div className="w-full md:w-3/12 md:max-w-[180px] aspect-video md:aspect-square overflow-hidden rounded-xl bg-zinc-100 border border-zinc-250/50 shadow-xs relative shrink-0 group/img">
                  {item.img ? (
                    <img 
                      src={item.img} 
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Text and Statistic block */}
                <div className="w-full md:w-9/12 flex flex-col justify-center text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 mb-2">
                    {/* Large Number Accent */}
                    <div className="text-3xl md:text-4xl font-extrabold text-emerald-700 tracking-tight leading-none font-mono shrink-0">
                      <EditableText id={`${item.id}-number`} defaultText={item.number} />
                    </div>

                    <h3 className="text-base md:text-lg font-black text-zinc-950 tracking-tight leading-snug">
                      <EditableText id={`${item.id}-title`} defaultText={item.title} />
                    </h3>
                  </div>

                  <p className="text-zinc-650 text-xs md:text-sm leading-relaxed font-normal">
                    <EditableText id={`${item.id}-desc`} defaultText={item.desc} as="span" />
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Calculator Block */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 text-left shadow-md max-w-4xl mx-auto relative overflow-hidden group/calc">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left instructions block */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-emerald-700">
                <Calculator className="w-4 h-4" />
                <span className="text-xs uppercase font-extrabold tracking-wider font-mono">Calculateur d'impact</span>
              </div>
              
              <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                Estimez l'impact environnemental de votre garage
              </h3>
              
              <p className="text-zinc-650 text-sm md:text-base leading-relaxed font-normal">
                Saisissez votre volume annuel de rouleaux de sacs à pneus afin de simuler l'impact de réduction d'empreinte carbone potentielle.
              </p>
              
              <div className="pt-4 border-t border-zinc-200 text-xs md:text-sm text-zinc-650 space-y-3">
                <div className="flex items-start gap-2.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <p className="leading-snug">
                    <span className="font-semibold text-zinc-900">Standard technique :</span> Un rouleau de 200 sacs représente une masse nette d'environ <span className="font-extrabold text-emerald-600">28 lbs</span> (12,7 kg) de plastique.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-1.5 shrink-0" />
                  <p className="leading-snug">
                    <span className="font-semibold text-zinc-900">Facteur de réduction CO₂ :</span> La valorisation de 1 lbs de plastique permet d'éviter l'émission de <span className="font-extrabold text-sky-600">1,13 kg</span> de CO₂e équivalent dans l'atmosphère.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive inputs / result block */}
            <div className="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-5">
              
              {/* Input section */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-bold text-zinc-700 uppercase tracking-wider">
                  Quantité de rouleaux par an :
                </label>
                <div className="relative flex items-center rounded-xl bg-white border border-zinc-200 px-3 py-2.5 focus-within:border-emerald-650 focus-within:ring-2 focus-within:ring-emerald-500/10 hover:border-emerald-600 transition-all shadow-xs">
                  <input 
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={rollsInput}
                    onChange={(e) => handleRollsChange(e.target.value)}
                    placeholder="Nombre de rouleaux (ex: 50)"
                    className="w-full text-center bg-transparent border-0 text-zinc-900 font-extrabold text-xl placeholder-zinc-400 focus:outline-hidden py-1.5 focus:ring-0"
                  />
                </div>
              </div>

              {/* Animated conversion bridge arrow */}
              <div className="flex justify-center items-center">
                <div className="h-px bg-zinc-200 flex-1" />
                <div className="mx-3 w-7 h-7 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-emerald-600 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className="h-px bg-zinc-200 flex-1" />
              </div>

              {/* Computed Live Result Display - Two Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 select-none">
                {/* LBS Plastic Card */}
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 text-center relative overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-1">
                      Plastique recyclé
                    </span>
                    <div className="text-2xl md:text-3xl font-black text-emerald-700 tracking-tight leading-none font-mono">
                      {computedLbs.toLocaleString('fr-CA')} <span className="text-zinc-800 text-sm font-sans font-extrabold">LBS</span>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold inline-flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-emerald-100">
                    <Recycle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    Valorisé localement
                  </div>
                </div>

                {/* CO2 Saved Card */}
                <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 text-center relative overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-sky-800 block mb-1">
                      Émissions CO₂ évitées
                    </span>
                    <div className="text-2xl md:text-3xl font-black text-sky-700 tracking-tight leading-none font-mono">
                      {computedCO2.toLocaleString('fr-CA')} <span className="text-zinc-800 text-sm font-sans font-extrabold">KG</span>
                    </div>
                  </div>
                  <div className="text-xs text-sky-700 font-semibold inline-flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-sky-100">
                    <Wind className="w-4.5 h-4.5 text-sky-600 shrink-0" style={{ transform: 'scaleX(-1)' }} />
                    Bilan carbone préservé
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
