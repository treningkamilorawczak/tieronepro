import React from 'react';
import { XCircle, BatteryWarning, Clock, BrainCircuit } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 border border-brand-lime/50 text-brand-lime text-xs font-bold tracking-widest uppercase mb-6">
          System Failure Detected
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 uppercase">
          Sukces w biznesie. <span className="text-brand-lime">Chaos w życiu.</span><br />
          Znasz ten scenariusz?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard 
            icon={<BatteryWarning className="w-12 h-12 text-white" />}
            title="CIAŁO SŁABNIE"
            description="Twoja energia spada po 14:00. Brzuch rośnie, testosteron maleje. Czujesz się jak wrak w luksusowym samochodzie."
          />
          <ProblemCard 
            icon={<BrainCircuit className="w-12 h-12 text-white" />}
            title="UMYSŁ PRZEBODŹCOWANY"
            description="Brain fog, brak koncentracji, ciągły stres. Podejmujesz decyzje wolniej, tracisz przewagę nad konkurencją."
          />
          <ProblemCard 
            icon={<Clock className="w-12 h-12 text-white" />}
            title="CZAS PRZECIEKA"
            description="Jesteś niewolnikiem swojego kalendarza. Gaszenie pożarów zamiast strategii. Zero czasu na regenerację."
          />
        </div>

        <div className="mt-16 p-6 bg-brand-graphite/30 border border-white/5 inline-block max-w-2xl">
            <p className="font-heading text-xl text-gray-400 uppercase tracking-wide">
                "System, który doprowadził Cię tutaj, <span className="text-white font-bold">nie wystarczy</span>, byś poszedł dalej."
            </p>
        </div>
      </div>
    </section>
  );
};

const ProblemCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 bg-brand-graphite/20 border border-white/5 hover:border-brand-lime/50 transition-all duration-300 text-left relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
      <XCircle className="text-brand-lime w-6 h-6" />
    </div>
    <div className="mb-6 bg-brand-black w-20 h-20 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-brand-lime/50 transition-colors">
      {icon}
    </div>
    <h3 className="font-heading text-xl font-bold mb-4 uppercase text-white group-hover:text-brand-lime transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

export default ProblemSection;