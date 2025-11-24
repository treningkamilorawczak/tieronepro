import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-24 flex items-center justify-center overflow-hidden border-b border-white/5 bg-brand-black">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-graphite/20 to-transparent"></div>
      </div>

      {/* HUD / Tactical Elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5"></div>
        <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <div className="mb-4 font-mono text-brand-lime text-sm tracking-widest uppercase">
            // Misja TierOne PRO
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1] tracking-tighter mb-6 text-white">
            ZBUDUJ CIAŁO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ATLETY.</span><br />
            WYTRENUJ UMYSŁ <span className="text-brand-lime">WOJOWNIKA.</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-lg mb-8 leading-relaxed">
            Większość "liderów" to zmęczeni ludzie w drogich garniturach. My to zmieniamy.
            TierOne PRO™ to nie kurs online. To jedyny w Polsce system mentoringowy łączący dyscyplinę sił specjalnych, zaawansowany biohacking i automatyzację biznesu AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">POZNAJ NASZĄ METODĘ</Button>
          </div>
        </div>

        {/* Image / Visualization */}
        <div className="relative">
           <div className="absolute inset-0 bg-brand-lime/10 translate-x-4 translate-y-4 border border-brand-lime/20 hidden md:block"></div>
           <img 
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop" 
            alt="Tactical Training Man" 
            className="relative w-full h-auto grayscale contrast-125 border border-white/10 shadow-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-brand-black/80 backdrop-blur px-4 py-2 border-l-2 border-brand-lime">
             <div className="text-xs font-mono text-gray-400">OPERATOR ID:</div>
             <div className="text-white font-heading font-bold tracking-wider">T1-ALPHA</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;