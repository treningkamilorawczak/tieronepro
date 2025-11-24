import React from 'react';
import { CheckCircle2, Quote } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  return (
    <section id="authority" className="py-24 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-widest">
              Head Coach / Mentor
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              Nazywam się <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Kamil Orawczak</span>
            </h2>
            
            <blockquote className="border-l-4 border-brand-lime pl-6 py-2 mb-8 bg-brand-graphite/20 italic text-gray-300 font-sans text-lg">
              "Wierzę, że życie można trenować tak samo jak mięśnie. Dyscyplina to nie kara. To waluta, za którą kupujesz wolność."
            </blockquote>

            <p className="text-gray-400 mb-12 leading-relaxed">
              Nie jestem teoretykiem z YouTube'a. Łączę surową dyscyplinę sportu wyczynowego z najnowszymi osiągnięciami technologii AI i biohackingu. Pomagam liderom stać się jednostkami elitarnymi na każdym polu walki – w biznesie i w domu.
            </p>

            {/* Case Studies / Opinions */}
            <div className="mt-12">
              <h3 className="font-heading text-xl text-brand-lime mb-6 uppercase tracking-wide flex items-center gap-2">
                <Quote className="w-5 h-5" /> Case Study: Opinie Liderów
              </h3>
              
              <div className="space-y-6">
                <div className="bg-brand-graphite/30 p-6 border border-white/5 hover:border-brand-lime/30 transition-colors relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-lime"></div>
                  <p className="text-gray-300 italic text-sm mb-4">
                    "W 3 miesiące zredukowałem wagę o 12kg i odzyskałem 15h tygodniowo dzięki automatyzacji. Kamil to gamechanger dla każdego CEO, który tonie w chaosie."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm">Michał K.</p>
                      <p className="text-xs text-gray-500 uppercase">CEO Software House</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-graphite/30 p-6 border border-white/5 hover:border-brand-lime/30 transition-colors relative">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gray-700"></div>
                  <p className="text-gray-300 italic text-sm mb-4">
                    "Myślałem, że nie mam czasu na trening. Kamil pokazał mi, że nie mam czasu, żeby NIE trenować. Moja efektywność w firmie wzrosła dwukrotnie."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm">Piotr R.</p>
                      <p className="text-xs text-gray-500 uppercase">Founder FinTech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 border-2 border-brand-lime/20 translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
               {/* 
                   ================================================================================
                   INSTRUKCJA ZMIANY ZDJĘCIA:
                   1. Znajdź poniższą linijkę zaczynającą się od 'src='
                   2. Skasuj obecny link (ten długi zaczynający się od https://images.unsplash...)
                   3. Wklej link do swojego zdjęcia (musi być publicznie dostępne w internecie)
                   ================================================================================
               */}
               <img 
                src="https://images.unsplash.com/photo-1517836357463-c25dfe929258?q=80&w=2070&auto=format&fit=crop" 
                alt="Kamil Orawczak Training" 
                className="w-full h-auto shadow-2xl clip-diagonal"
              />
               {/* Digital Overlay Effect */}
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-black to-transparent opacity-80"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;