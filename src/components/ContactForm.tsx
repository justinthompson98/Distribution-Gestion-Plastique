import { useEffect } from 'react';
import { Phone, Mail, CheckCircle2, Award, Clock, ShieldCheck, Factory } from 'lucide-react';
import { EditableText } from './EditableText';

interface ContactFormProps {
  selectedBagType: string;
}

export function ContactForm({ selectedBagType }: ContactFormProps) {
  // Sync selected bag type from Products list and scroll to contact area
  useEffect(() => {
    if (selectedBagType) {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedBagType]);

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-zinc-50 relative selection:bg-emerald-950 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic product selection alert banner */}
        {selectedBagType && (
          <div className="mb-10 max-w-4xl mx-auto p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs animate-fade-in text-zinc-950">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 font-mono">Modèle d'intérêt sélectionné</p>
                <p className="text-zinc-900 font-black text-base">{selectedBagType}</p>
              </div>
            </div>
            <div className="text-xs text-zinc-600 font-semibold max-w-md md:text-right leading-relaxed">
              Excellent choix ! Mentionnez <span className="text-emerald-700 font-bold">"{selectedBagType}"</span> lors de votre appel ou dans votre courriel pour obtenir instantanément vos tarifs d'usine.
            </div>
          </div>
        )}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight leading-none uppercase">
            <EditableText id="contact-main-heading" defaultText="NOUS JOINDRE" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Card 1: Direct Toll-Free Phone Call desk */}
          <div className="lg:col-span-6 bg-zinc-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[220px]">
            {/* Design accents */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none transition-all group-hover:scale-110 duration-500" />
            
            <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10 w-full">
              <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 border border-emerald-900 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 stroke-[2.5]" />
              </div>
              <a 
                href="tel:18886661996" 
                className="text-2xl sm:text-3.5xl font-mono font-black tracking-tight text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                1-888-666-1996
              </a>
            </div>
          </div>

          {/* Card 2: Email Desk of Distribution GP */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[220px]">
            {/* Design accents */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none transition-all group-hover:scale-110 duration-500" />

            <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10 w-full">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 stroke-[2.5]" />
              </div>
              <a 
                href="mailto:info@distributiongp.ca" 
                className="text-xl sm:text-2xl font-mono font-black tracking-tight text-emerald-700 hover:text-emerald-850 transition-colors break-all"
              >
                info@distributiongp.ca
              </a>
            </div>
          </div>

        </div>



      </div>

      {/* Styled minimalistic B2B footer */}
      <footer className="mt-20 border-t border-zinc-200 pt-10 text-center text-xs text-zinc-500 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-4 font-semibold">
          <p>© {currentYear} Distribution Gestion Plastique (Distribution GP). Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#produits" className="hover:text-emerald-600 transition-colors">Sacs à pneu</a>
            <a href="#recuperation" className="hover:text-emerald-600 transition-colors">Politique Écologique</a>
            <a href="#a-propos" className="hover:text-emerald-600 transition-colors">Mentions Légales</a>
          </div>
        </div>
      </footer>

    </section>
  );
}
