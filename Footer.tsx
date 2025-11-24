import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div>
          <div className="font-heading font-bold text-xl tracking-tighter text-white mb-2">
            TIERONE <span className="text-brand-lime">PRO</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            System operacyjny dla nowoczesnego lidera.
            Ciało. Umysł. Technologia.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-400 font-heading uppercase tracking-wide">
          <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs font-mono">
        &copy; {new Date().getFullYear()} TIERONE PRO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;