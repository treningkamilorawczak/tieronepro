import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AuthoritySection from './components/AuthoritySection';
import SocialProof from './components/SocialProof';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import LeadMagnet from './components/LeadMagnet';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-lime selection:text-brand-black">
      <Navbar />
      <main>
        <LeadMagnet />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AuthoritySection />
        <SocialProof />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;