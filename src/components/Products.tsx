import { ShieldCheck, Layers, Sparkles, Printer, Check, ArrowDown, FileSpreadsheet, Percent, Info, HelpCircle } from 'lucide-react';
import { EditableText, useEditable } from './EditableText';

interface ProductsProps {
  onSelectProduct: (productName: string) => void;
}

export function Products({ onSelectProduct }: ProductsProps) {
  const { texts } = useEditable();

  const renderCell = (
    id: string,
    defaultText: string,
    baseClasses: string,
    borderRight: boolean = true,
    padding: string = "py-3 px-3"
  ) => {
    const currentText = texts[id] !== undefined ? texts[id] : defaultText;
    const isDash = currentText === "-" || currentText.trim() === "-" || currentText.trim() === "";
    
    const finalClasses = isDash
      ? `${padding} text-center ${borderRight ? 'border-r border-zinc-200' : ''} text-zinc-400 font-medium text-lg md:text-xl bg-zinc-50/10`
      : `${padding} text-center ${borderRight ? 'border-r border-zinc-200' : ''} ${baseClasses}`;

    return (
      <td className={finalClasses}>
        <EditableText id={id} defaultText={defaultText} />
      </td>
    );
  };

  const products = [
    {
      id: "ultra_eco",
      name: "Sacs de Pneu Ultra-Économiques",
      thickness: "0.9 MIL",
      dimensions: '36¨ x 8¨ x 47¨',
      badge: "Prix d'entrée imbattable",
      icon: Layers,
      color: "zinc",
      bestFor: "La solution ultime pour réduire les coûts au maximum. Des sacs transparents ou sans impression hautement compétitifs.",
      specs: ["Format Pratique : 200 sacs par rouleau", "Adaptabilité sacs transparents", "Le meilleur tarif de l'industrie"]
    },
    {
      id: "economique",
      name: "Sacs de Pneu Économiques",
      thickness: "1.0 MIL",
      dimensions: '36¨ x 8¨ x 47¨',
      badge: "Excellent rapport qualité/prix",
      icon: Percent,
      color: "emerald",
      bestFor: "Idéal pour les garages à gros volumes cherchant à maximiser leur budget sans aucun compromis sur la solidité fiscale.",
      specs: ["Format Pratique : 200 sacs par rouleau", "Haute résistance à l'étirement", "Couleur opaque premium d'ici"]
    },
    {
      id: "standard",
      name: "Sacs de Pneu Standards",
      thickness: "1.1 MIL",
      dimensions: '36¨ x 8¨ x 47¨',
      badge: "Recommandé / Choix Populaire",
      icon: ShieldCheck,
      color: "emerald",
      bestFor: "La taille passe-partout parfaite pour s'adapter à la quasi-totalité des pneus réguliers du marché du Québec.",
      specs: ["Format Pratique : 200 sacs par rouleau", "Souplesse et durabilité accrues", "Idéal pour SUV de taille moyenne"]
    },
    {
      id: "premium",
      name: "Sacs de Pneu Premium",
      thickness: "1.2 MIL",
      dimensions: '36¨ x 8¨ x 47¨',
      badge: "Épaisseur maximale / Robustesse",
      icon: Sparkles,
      color: "amber",
      bestFor: "Conçu pour les pneus lourds haut de gamme, les camions légers, camionnettes de livraison et jantes massives.",
      specs: ["Format Pratique : 200 sacs par rouleau", "Perforation ultra-robuste renforcée", "Adaptabilité maximale aux pneus XXL"]
    }
  ];

  const customizationOptions = [
    {
      title: "Impression 1 Couleur (Noir ou Blanc)",
      desc: "Idéal pour afficher votre logo, coordonnées et heures d'ouverture de façon nette et esthétique à prix d'usine."
    },
    {
      title: "Impression 2 Couleurs",
      desc: "Démarquez-vous de la concurrence ! Intégrez vos couleurs corporatives pour maximiser la mémorisation de marque."
    },
    {
      title: "Sacs Sans Impression (Neutres)",
      desc: "La simplicité par excellence. Des sacs transparents ou blancs très robustes, livrés en rouleaux compacts."
    }
  ];

  return (
    <section id="tarifs" className="py-20 px-4 md:px-8 bg-linear-to-b from-[#e6eefd] via-[#f1f6fe] to-[#f8faff] border-t border-b border-zinc-200 text-zinc-900 relative overflow-hidden selection:bg-emerald-100 selection:text-emerald-900 scroll-mt-22">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Official Pricing Grid Matrice Table */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-xl overflow-hidden mb-4">
          <div className="py-3 px-5 md:px-6 bg-zinc-950 text-white border-b border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-500 text-zinc-950 p-2 rounded-xl">
                <FileSpreadsheet className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  <EditableText id="price-title" defaultText="GRILLE TARIFAIRE OFFICIELLE" />
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 font-medium mt-0.5">
                  <EditableText id="price-subtitle" defaultText="** Les prix affichés sont selon les conditions ci-dessous" />
                </p>
                <div className="flex flex-wrap items-center gap-x-2 mt-1.5 text-sm md:text-base text-white font-black">
                  <EditableText id="price-specs-roll" defaultText="200 sacs par rouleau" />
                  <span className="text-emerald-400 font-black">•</span>
                  <EditableText id="price-specs-dimensions" defaultText="Sacs de 36¨ x 8¨ x 47¨" />
                </div>
              </div>
            </div>
            
            

          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Category split header style from picture */}
              <thead>
                {/* Global IMPRESSION label across cols */}
                <tr>
                  <th className="py-3 px-3 bg-zinc-100 text-zinc-500 text-sm md:text-base uppercase tracking-widest font-black text-center border-b border-zinc-200 w-1/4">
                    <EditableText id="col-thickness-label" defaultText="ÉPAISSEUR" />
                  </th>
                  <th colSpan={4} className="py-3 px-3 bg-emerald-500 text-white text-sm md:text-lg font-black tracking-widest uppercase text-center border-b border-emerald-600 shadow-inner">
                    <EditableText id="col-impression-label" defaultText="OPTIONS D'IMPRESSION SUR SACS" />
                  </th>
                </tr>
                
                {/* Specific option headers */}
                <tr className="bg-zinc-50 font-extrabold border-b border-zinc-200 text-sm md:text-base text-zinc-800">
                  <th className="py-2.5 px-3 border-r border-zinc-200 font-black text-zinc-955 text-center">
                    <EditableText id="subcol-thickness" defaultText="SPÉCIFICATION" />
                  </th>
                  <th className="py-2.5 px-3 text-center border-r border-zinc-200 text-emerald-900 bg-emerald-50/50 font-black">
                    <EditableText id="subcol-color2" defaultText="2 Couleurs" />
                  </th>
                  <th className="py-2.5 px-3 text-center border-r border-zinc-200 text-zinc-950 bg-zinc-50/30 font-black">
                    <EditableText id="subcol-color1" defaultText="Noir / 1 Couleur" />
                  </th>
                  <th className="py-2.5 px-3 text-center border-r border-zinc-200/60 text-zinc-950 font-black">
                    <EditableText id="subcol-none" defaultText="Aucune (Neutre blanc)" />
                  </th>
                  <th className="py-2.5 px-3 text-center bg-zinc-100 text-zinc-950 font-black">
                    <EditableText id="subcol-trans" defaultText="Aucune + Sac Transparent" />
                  </th>
                </tr>
              </thead>

              <tbody className="text-base md:text-lg font-bold text-zinc-900">
                
                {/* 0.9 MIL */}
                <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-zinc-950 bg-zinc-50/30 text-sm md:text-base">
                    <div className="flex items-center gap-1.5 justify-center">
                      <EditableText id="row-09-name" defaultText="0.9 MIL" />
                    </div>
                  </td>
                  {renderCell("val-09-c2", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-09-c1", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-09-none", "67.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-09-trans", "60.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", false, "py-2.5 px-3")}
                </tr>

                {/* 1.0 MIL */}
                <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-zinc-955 bg-zinc-50/30 text-sm md:text-base">
                    <div className="flex flex-col items-center gap-0.5 justify-center">
                      <EditableText id="row-10-name" defaultText="1.0 MIL" />
                      <span className="text-[10px] text-emerald-600 font-black bg-emerald-50 px-1.5 py-0.5 rounded leading-none">(Économique)</span>
                    </div>
                  </td>
                  {renderCell("val-10-c2", "90.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-10-c1", "80.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-10-none", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-10-trans", "-", "bg-zinc-100/30 text-zinc-950 font-black font-mono text-lg md:text-xl", false, "py-2.5 px-3")}
                </tr>

                {/* 1.1 MIL */}
                <tr className="border-b border-zinc-100 ring-2 ring-emerald-500/10 hover:bg-zinc-50/50 transition-colors bg-emerald-50/5">
                  <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-emerald-900 bg-emerald-50/20 text-sm md:text-base">
                    <div className="flex flex-col items-center gap-0.5 justify-center">
                      <EditableText id="row-11-name" defaultText="1.1 MIL" />
                      <span className="text-[10px] text-emerald-800 font-black bg-emerald-100 px-1.5 py-0.5 rounded leading-none uppercase">Standard</span>
                    </div>
                  </td>
                  {renderCell("val-11-c2", "102.00 $", "text-emerald-900 font-black font-mono text-lg md:text-xl bg-emerald-55/15", true, "py-2.5 px-3")}
                  {renderCell("val-11-c1", "88.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-11-none", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-11-trans", "-", "bg-zinc-100/30 text-zinc-950 font-black font-mono text-lg md:text-xl", false, "py-2.5 px-3")}
                </tr>

                {/* 1.2 MIL */}
                <tr className="border-b border-zinc-200 hover:bg-zinc-50/50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-zinc-950 bg-zinc-50/30 text-sm md:text-base">
                    <div className="flex flex-col items-center gap-0.5 justify-center">
                      <EditableText id="row-12-name" defaultText="1.2 MIL" />
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-black leading-none">(Premium)</span>
                    </div>
                  </td>
                  {renderCell("val-12-c2", "108.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-12-c1", "95.00 $", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-12-none", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-12-trans", "-", "bg-zinc-100/30 text-zinc-950 font-black font-mono text-lg md:text-xl", false, "py-2.5 px-3")}
                </tr>

                {/* Plaque d'impression */}
                <tr className="border-b border-zinc-200 bg-zinc-50/40 hover:bg-zinc-100/80 transition-colors">
                  <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-zinc-950 bg-zinc-50/30 text-sm md:text-base text-center">
                    <div className="flex flex-col items-center justify-center">
                      <EditableText id="row-plate-name" defaultText="Plaque d'impression" />
                    </div>
                  </td>
                  <td colSpan={2} className="py-2.5 px-3 border-r border-zinc-200 text-center text-zinc-950 font-extrabold text-sm md:text-base bg-zinc-50/10">
                    <EditableText id="row-plate-cost" defaultText="Coût unique de 300$" />
                  </td>
                  {renderCell("val-plate-none", "-", "text-zinc-950 font-black font-mono text-lg md:text-xl bg-zinc-50/5", true, "py-2.5 px-3")}
                  {renderCell("val-plate-trans", "-", "bg-zinc-100/30 text-zinc-950 font-black font-mono text-lg md:text-xl", false, "py-2.5 px-3")}
                </tr>



              </tbody>

            </table>
          </div>

          {/* Matrix footer notes from the user document */}
          <div className="bg-zinc-50 border-t border-zinc-200">
            {/* Deuxième section - Centered row */}
            <div className="py-4 px-4 bg-zinc-50/50 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
              {/* Prix par rouleau */}
              <div className="flex gap-2 items-center">
                <span className="text-emerald-500 text-sm font-black shrink-0">**</span>
                <p className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Prix par rouleau</p>
              </div>

              {/* Vente à la palette */}
              <div className="flex gap-2 items-center">
                <span className="text-emerald-500 text-sm font-black shrink-0">**</span>
                <p className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Vente à la palette</p>
              </div>

              {/* Frais de transport variable */}
              <div className="flex gap-2 items-center">
                <span className="text-emerald-500 text-sm font-black shrink-0">**</span>
                <p className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Frais de transport variable</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
