import React from 'react';
import { Dumbbell, Brain, Cpu } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-brand-graphite relative overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-10 bg-[size:40px_40px] bg-grid-pattern"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-4">
            TIERONE <span className="text-brand-lime">PRO</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-bold">
            Twoja Przewaga Operacyjna - 3 Filary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <SolutionCard 
            icon={<Dumbbell className="w-8 h-8" />}
            title="CIAŁO (Bio-Machine)"
            subtitle="Trening Hybrydowy"
            features={[
              'Siła funkcjonalna według standardów wysokiej sprawności',
              'Metabolizm 2.0 – stabilna energia, zero zjazdów',
              'Architektura regeneracji – rytm, który odbudowuje organizm'
            ]}
          />
           <SolutionCard 
            icon={<Brain className="w-8 h-8" />}
            title="UMYSŁ (Mindset)"
            subtitle="Stoicki Spokój"
            features={[
              'Regulacja układu nerwowego – stabilność zamiast przebodźcowania',
              'Głęboki fokus – koncentracja, która nie ucieka',
              'Decyzyjność pod presją – klarowność, gdy stawka jest wysoka'
            ]}
            highlight
          />
           <SolutionCard 
            icon={<Cpu className="w-8 h-8" />}
            title="SYSTEM (AI)"
            subtitle="Automatyzacja"
            features={[
              'Osobisty asystent AI – porządek, plan i powtarzalność',
              'Więcej czasu – mniej chaosu, optymalne działania',
              'Delegowanie cyfrowe – systemy, które pracują za Ciebie'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SolutionCard: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, features: string[], highlight?: boolean }> = ({ icon, title, subtitle, features, highlight }) => (
  <div className={`relative p-8 backdrop-blur-sm border transition-all duration-300 group hover:-translate-y-2 
    ${highlight ? 'bg-white/5 border-brand-lime/50 shadow-[0_0_30px_rgba(204,255,0,0.1)]' : 'bg-brand-black/40 border-white/10 hover:border-brand-lime/30'}`}>
    
    {/* Top Accent Line */}
    <div className={`absolute top-0 left-0 w-full h-1 ${highlight ? 'bg-brand-lime' : 'bg-gray-800 group-hover:bg-brand-lime transition-colors'}`}></div>

    <div className={`mb-6 inline-flex p-4 rounded-none ${highlight ? 'text-brand-black bg-brand-lime' : 'text-brand-lime bg-brand-lime/10'}`}>
      {icon}
    </div>

    <h3 className="font-heading text-2xl font-bold uppercase mb-1">{title}</h3>
    <p className="text-brand-lime font-mono text-sm mb-8 uppercase tracking-wider">{subtitle}</p>

    <ul className="space-y-4">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
          <span className="w-1.5 h-1.5 bg-brand-lime rounded-full shadow-[0_0_5px_#CCFF00] mt-1.5 flex-shrink-0"></span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SolutionSection;