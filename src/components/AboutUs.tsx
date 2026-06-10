import { Truck, RotateCcw, Search, Target, Users, BadgeCheck } from 'lucide-react';
import { SmartLogo } from './GPLogo';
import { EditableText } from './EditableText';

export function AboutUs() {
  const services = [
    {
      title: "Livraison rapide",
      icon: Truck,
      desc: "Expédition rapide sur l'ensemble du territoire québécois pour répondre à vos besoins d'approvisionnement durant la saison des pneus."
    },
    {
      title: "Gestion active des stocks",
      icon: RotateCcw,
      desc: "Nous surveillons vos besoins et planifions les réapprovisionnements pour que vous ne soyez jamais en rupture de sacs lors des périodes de forte demande."
    },
    {
      title: "Recherche sur mesure",
      icon: Search,
      desc: "Vous avez d'autres besoins spécifiques en matière d'emballages ou de pellicules plastiques ? Notre réseau s'engage à les trouver au meilleur prix du marché."
    }
  ];

  return (
    <section id="a-propos" className="py-24 px-4 md:px-8 bg-linear-to-b from-[#e6eefd] via-[#f1f6fe] to-[#f8faff] border-t border-zinc-200 text-zinc-900 relative overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Description Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full inline-block">
              <EditableText id="about-tagline" defaultText="Notre ADN & Notre Histoire" />
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-zinc-900">
              <EditableText id="about-title" defaultText="L'expertise logistique derrière vos sacs à pneu" />
            </h2>
            <p className="text-zinc-705 font-light text-base md:text-lg leading-relaxed">
              <EditableText id="about-desc1" defaultText="Depuis plus de 30 ans, Distribution GP œuvre dans la fabrication et la distribution de produits de produits de plastique soufflé fabriqués ici même au Québec. Grâce à notre réseau de production situé à Montréal, nous sommes en mesure de concevoir et produire une vaste gamme de solutions plastiques adaptées aux besoins de nos clients." as="span" />
            </p>
            <p className="text-zinc-705 font-light text-base md:text-lg leading-relaxed">
              <EditableText id="about-desc2" defaultText="Aujourd'hui, l'entreprise est dirigée par trois jeunes entrepreneurs de la région de Québec qui partagent une vision commune : offrir un service exceptionnel, développer des solutions logistiques efficaces et contribuer à une utilisation plus responsable du plastique. Nous croyons que le plastique demeure une ressource précieuse lorsqu'il est utilisé intelligemment. C'est pourquoi nous investissons dans des programmes de récupération et revalorisation de nos produits afin de favoriser l'économie circulaire et de réduire l'empreinte environnementale de nos activités." as="span" />
            </p>

          </div>

          {/* Graphical representation / Badge Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative bg-white border border-zinc-200 rounded-3xl p-8 md:p-10 w-full max-w-md shadow-xl overflow-hidden group hover:border-emerald-450/40 transition-all duration-300">
              {/* Highlight flare */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-xl pointer-events-none" />
 
              <div className="flex flex-col gap-6 relative z-10 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-12 h-12 flex items-center justify-center border border-emerald-100 shadow-xs shrink-0">
                    <Target className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-black text-zinc-950 text-xl md:text-2xl tracking-tight">
                    <EditableText id="about-mission-title" defaultText="Notre Mission" />
                  </h3>
                </div>
                <div>
                  <p className="text-zinc-650 font-light text-base leading-relaxed">
                    <EditableText id="about-mission-desc" defaultText="Notre mission est simple, fournir des produits de qualité, un service fiable et des solutions innovantes qui simplifient les opérations de nos clients tout en repensant la façon dont le plastique est produit, utilisé et récupéré." as="span" />
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* Services / Value Inclusions Header & Grid */}
        <div className="border-t border-zinc-200/80 pt-12 mt-12">
          <div className="max-w-2xl text-left mb-12">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
              <EditableText id="about-service-header" defaultText="Nos services" />
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const ServiceIcon = srv.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-emerald-300/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="bg-emerald-50 text-emerald-600 w-10 h-10 rounded-xl flex items-center justify-center border border-emerald-100 shrink-0">
                      <ServiceIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="font-bold text-zinc-900 text-xl leading-tight">
                      <EditableText id={`about-service-title-${idx}`} defaultText={srv.title} />
                    </h4>
                  </div>
                  <p className="text-zinc-650 text-base leading-relaxed font-light">
                    <EditableText id={`about-service-desc-${idx}`} defaultText={srv.desc} as="span" />
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
