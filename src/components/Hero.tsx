import { Award, ShieldCheck, CheckCircle2, Check } from 'lucide-react';
import { EditableText } from './EditableText';
import { siteImages } from '../config/images';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen bg-linear-to-b from-[#e6eefd] via-[#f1f6fe] to-[#f8faff] pt-20 pb-8 px-4 md:px-8 overflow-hidden selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-center">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 md:space-y-10 w-full pt-4 md:pt-6">
        
        {/* Upper columns: Interactive preview & headlines copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (lg:col-span-6): Image Showcase */}
          <div className="lg:col-span-6 w-full animate-fade-in flex flex-col gap-4">
            <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-xl p-2 relative overflow-hidden group transition-all duration-300 hover:shadow-emerald-600/5 hover:border-zinc-300">
              <div className="w-full aspect-[16/11] rounded-2xl relative overflow-hidden flex items-center justify-center bg-zinc-50">
                <img 
                  src={siteImages.heroBagWithTire} 
                  alt="Sacs de pneu Distribution GP Robustes et durables" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Micro-hover visual feedback */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Trust Banner inside Hero - Moved under the main image */}
            <div className="w-full bg-white/85 rounded-2xl border border-zinc-200/70 p-3.5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100/90 rounded-xl text-emerald-800 shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="text-left">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-none mb-1">
                    <EditableText id="hero-commitment-title" defaultText="Votre confiance, notre engagement" />
                  </p>
                  <p className="text-zinc-800 text-xs sm:text-sm font-black leading-tight">
                    <EditableText id="hero-commitment-text" defaultText="Distribution GP  —  Depuis 30 ans !" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-6): Primary Headlines & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start pt-1 lg:pt-4">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-4">
              <EditableText id="hero-title-main" defaultText="Les sacs à pneu personnalisés" /> <br />
              <span className="text-emerald-600">
                <EditableText id="hero-title-highlight" defaultText="les moins chers" />
              </span>{" "}
              <EditableText id="hero-title-end" defaultText="sur le marché." />
            </h1>

            <div className="text-sm sm:text-base text-zinc-650 mb-6 leading-relaxed font-normal font-sans">
              <EditableText id="hero-desc" defaultText="Profitez de prix ultra-compétitifs sur des sacs personnalisés qui feront rayonner votre concession." as="p" />
            </div>



          </div>

        </div>

        {/* Specifications horizontal grid at the bottom - Balanced, optimized height! */}
        <div className="w-full bg-white rounded-3xl border border-zinc-200/95 shadow-lg p-5 md:p-6 relative overflow-hidden text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <h4 className="text-xs md:text-sm font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                <EditableText id="hero-specifications-title" defaultText="SPÉCIFICATIONS" />
              </h4>
            </div>
            <div className="self-start sm:self-center flex items-center gap-1 text-[11px] text-emerald-800 font-extrabold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Manufacturé au Québec
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-200/80 rounded-2xl overflow-hidden shadow-xs divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            
            {/* QUALITÉ / ÉPAISSEURS SECTION */}
            <div className="bg-white flex flex-col min-h-[140px] text-center">
              <div className="bg-blue-900 py-3.5 px-4 border-b border-blue-950/20 shadow-xs">
                <h5 className="text-sm font-black text-white uppercase tracking-wider">
                  Qualité / Épaisseurs
                </h5>
              </div>
              <div id="editable-spec-qualite-pneu" className="p-5 flex-1 flex flex-col justify-center items-center">
                <div className="w-fit mx-auto flex flex-col items-start justify-start space-y-3">
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-qualite-eco" defaultText="Économique 1.0 MIL" />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-qualite-std" defaultText="Standard 1.1 MIL" />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-qualite-prem" defaultText="Premium 1.2 MIL" />
                  </div>
                </div>
              </div>
            </div>

            {/* DIMENSIONS SECTION */}
            <div className="bg-white flex flex-col min-h-[140px] text-center">
              <div className="bg-blue-900 py-3.5 px-4 border-b border-blue-950/20 shadow-xs">
                <h5 className="text-sm font-black text-white uppercase tracking-wider">
                  Dimensions
                </h5>
              </div>
              <div id="editable-spec-dimensions-pneu" className="p-5 flex-1 flex flex-col justify-center items-center">
                <div className="w-fit mx-auto flex flex-col items-start justify-start space-y-3">
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight session-edit-dimensions flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-dimension-large" defaultText='Large 30" x 12" x 40"' />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-dimension-xl" defaultText='Extra Large 36" x 8" x 47"' />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-dimension-allonge" defaultText='Allongé 36" x 12" x 47"' />
                  </div>
                </div>
              </div>
            </div>

            {/* IMPRESSION SECTION */}
            <div className="bg-white flex flex-col min-h-[140px] text-center">
              <div className="bg-blue-900 py-3.5 px-4 border-b border-blue-950/20 shadow-xs">
                <h5 className="text-sm font-black text-white uppercase tracking-wider">
                  Impression
                </h5>
              </div>
              <div id="editable-spec-impression-pneu" className="p-5 flex-1 flex flex-col justify-center items-center">
                <div className="w-fit mx-auto flex flex-col items-start justify-start space-y-3">
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-impression-2col" defaultText="2 couleurs" />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-impression-1col" defaultText="1 couleur / noir" />
                  </div>
                  
                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-impression-sans-blanc" defaultText="Sans impression (blanc)" />
                  </div>

                  <div className="text-sm md:text-base text-zinc-650 font-normal leading-tight flex items-center gap-3 justify-start text-left">
                    <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <EditableText id="pneu-impression-sans-trans" defaultText="Sans impression (transparent)" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modern background blur visualizers */}
      <div className="absolute top-[20%] right-[-100px] w-96 h-96 bg-emerald-400/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-100px] w-96 h-96 bg-zinc-200/40 rounded-full filter blur-[100px] pointer-events-none" />

    </section>
  );
}
