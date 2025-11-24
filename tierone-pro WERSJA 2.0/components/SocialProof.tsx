import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-brand-graphite border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">
          
          <StatItem number="15" suffix="LAT" label="Doświadczenia" />
          <StatItem number="100+" suffix="" label="Transformacji" />
          <StatItem number="0" suffix="" label="Wymówek" />

        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ number: string, suffix: string, label: string }> = ({ number, suffix, label }) => (
  <div className="flex flex-col items-center justify-center p-4 text-center">
    <div className="font-heading text-6xl font-bold text-brand-lime mb-2 flex items-baseline gap-1">
      {number} <span className="text-2xl text-white">{suffix}</span>
    </div>
    <div className="text-gray-400 font-mono uppercase tracking-widest text-sm">
      {label}
    </div>
  </div>
);

export default SocialProof;