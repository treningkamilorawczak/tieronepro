import React from 'react';
import Button from './ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section id="apply" className="py-32 bg-brand-black relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-8">
          Nie dla każdego. <br/>
          <span className="text-brand-lime">Tylko dla zdecydowanych.</span>
        </h2>
        
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Limitowana liczba miejsc w mentoringu. Wymagam zaangażowania. 
          Jeśli szukasz magicznej pigułki, opuść tę stronę. Jeśli szukasz wyników - aplikuj.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button className="w-full md:w-auto text-xl px-12 py-6">
            WYPEŁNIJ ANKIETĘ REKRUTACYJNĄ
          </Button>
          <p className="text-gray-500 text-xs uppercase tracking-widest mt-4">
            Średni czas odpowiedzi: 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;