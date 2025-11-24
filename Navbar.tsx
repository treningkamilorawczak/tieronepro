
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funkcja do płynnego przewijania bez zmiany URL (zapobiega przeładowaniom)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Zatrzymaj domyślne działanie linku
    const element = document.getElementById(id);
    if (element) {
        // Oblicz pozycję z uwzględnieniem wysokości paska nawigacji (ok. 80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    setIsMobileMenuOpen(false); // Zamknij menu mobilne po kliknięciu
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={scrollToTop} className="font-heading font-bold text-2xl tracking-tighter group">
          TIERONE <span className="text-brand-lime group-hover:text-white transition-colors">PRO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-heading text-sm tracking-wider uppercase">
          <a href="#ebook" onClick={(e) => handleNavClick(e, 'ebook')} className="text-brand-lime hover:text-white transition-colors cursor-pointer">Darmowa Wiedza</a>
          <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="text-gray-300 hover:text-brand-lime transition-colors cursor-pointer">Problem</a>
          <a href="#solution" onClick={(e) => handleNavClick(e, 'solution')} className="text-gray-300 hover:text-brand-lime transition-colors cursor-pointer">Metoda</a>
          <a href="#authority" onClick={(e) => handleNavClick(e, 'authority')} className="text-gray-300 hover:text-brand-lime transition-colors cursor-pointer">Mentor</a>
          <a href="#apply" onClick={(e) => handleNavClick(e, 'apply')} className="px-6 py-2 border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-black transition-all cursor-pointer">
            Aplikuj
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6 text-center font-heading uppercase tracking-wider shadow-2xl">
           <a href="#ebook" onClick={(e) => handleNavClick(e, 'ebook')} className="text-brand-lime cursor-pointer">Ebook</a>
           <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="cursor-pointer">Problem</a>
           <a href="#solution" onClick={(e) => handleNavClick(e, 'solution')} className="cursor-pointer">Metoda</a>
           <a href="#authority" onClick={(e) => handleNavClick(e, 'authority')} className="cursor-pointer">Mentor</a>
           <a href="#apply" onClick={(e) => handleNavClick(e, 'apply')} className="text-white border border-white/20 py-2 cursor-pointer">Dołącz do elity</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
