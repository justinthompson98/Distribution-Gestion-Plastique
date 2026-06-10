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
    <section id="contact" className="py-24 px-4 md:px-8 bg-linear-to-b from-[#e6eefd] via-[#f1f6fe] to-[#f8faff] border-t border-zinc-200 text-zinc-900 relative overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Visual blueprint/grid pattern acting as a professional textured veil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,44,141,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,44,141,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,var(--color-emerald-100)_15%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Direct Toll-Free Phone Call desk */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 shadow-inner">
              <Phone className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-mono">Téléphone (Sans Frais)</span>
              <a 
                href="tel:18886661996" 
                className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-zinc-950 hover:text-emerald-600 transition-colors"
              >
                1-888-666-1996
              </a>
            </div>
          </div>

          {/* Card 2: Email Desk of Distribution GP */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 shadow-inner">
              <Mail className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="flex flex-col text-left overflow-hidden min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-mono">Courriel</span>
              <a 
                href="mailto:info@distributiongp.ca" 
                className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 hover:text-emerald-600 transition-colors truncate"
              >
                info@distributiongp.ca
              </a>
            </div>
          </div>

        </div>



      </div>

      {/* Styled minimalistic B2B footer */}
      <footer className="mt-20 border-t border-zinc-200 pt-10 text-center text-xs text-zinc-500 space-y-4">
        <div className="flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto px-4 font-semibold text-center">
          <p>© {currentYear} Distribution Gestion Plastique (Distribution GP). Tous droits réservés.</p>
        </div>
      </footer>

    </section>
  );
}
