
import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { ShieldCheck, Loader2, CheckCircle, AlertCircle, RefreshCw, Activity, Crosshair, ChevronDown } from 'lucide-react';

// --- MATRIX TEXT COMPONENT ---
const MatrixText: React.FC<{ text: string, className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*<>[]{}";

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const startAnimation = () => {
      clearInterval(interval);
      iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3; // Speed of decoding
      }, 30);
    };

    startAnimation();

    // Re-run animation every few seconds for effect
    const loop = setInterval(startAnimation, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(loop);
    };
  }, [text]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
};

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // ==================================================================================
  // STREFA KONFIGURACJI (TUTAJ WKLEISZ SWÓJ LINK Z MAKE.COM)
  // ==================================================================================
  const WEBHOOK_URL = ""; 
  // ==================================================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email: email, 
            date: new Date().toISOString(),
            source: 'TierOne_LandingPage' 
          }),
        });

        if (!response.ok) {
          throw new Error('Błąd połączenia z serwerem');
        }
      } else {
        // Symulacja (jeśli brak URL)
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('SIMULATION: Email captured:', email);
      }

      setStatus('success');
      setEmail('');

    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="ebook" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-black border-b border-white/5">
      
      {/* 1. VIDEO BACKGROUND (Full Screen) */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-40"
         >
            {/* Tactical Battle Ropes - High Intensity */}
            <source src="https://videos.pexels.com/video-files/855828/855828-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         
         {/* Gradients & Overlays to ensure text readability */}
         <div className="absolute inset-0 bg-brand-black/70"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-transparent to-brand-black/90"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         
         {/* Grid Line Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#000_2px)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
      </div>

      {/* 2. TACTICAL UI OVERLAYS (Fixed positions relative to section) */}
      <div className="absolute top-28 left-6 md:left-10 z-10 flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
          <span className="text-xs font-mono text-red-500 uppercase font-bold tracking-[0.2em]">REC // LIVE FEED</span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 z-10 text-right hidden md:block">
           <div className="text-xs text-brand-lime font-mono flex items-center justify-end gap-2 mb-1">
               <Activity className="w-4 h-4" /> SYSTEM OPTIMAL
           </div>
           <div className="text-[10px] text-gray-500 font-mono uppercase">CAM-01 / TIERONE HQ / SECTOR 4</div>
      </div>

      {/* Frame Corners */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-white/10 pointer-events-none"></div>
      <div className="absolute top-24 right-4 w-16 h-16 border-r-2 border-t-2 border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-bottom-2 border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-bottom-2 border-white/10 pointer-events-none"></div>
      
      {/* Center Crosshair Faint Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
         <Crosshair className="w-[40vw] h-[40vw] text-white stroke-[0.5]" />
      </div>


      {/* 3. MAIN CONTENT (Centered) */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-10">
        
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 text-brand-lime mb-8 px-5 py-2 border border-brand-lime/30 bg-black/60 backdrop-blur-md rounded-full animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Darmowy Raport Strategiczny 2025</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-4 text-white leading-[1.1] tracking-tighter drop-shadow-2xl">
            ODZYSKAJ PRZEWAGĘ.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-lime to-green-700 text-3xl md:text-5xl lg:text-7xl mt-2 block">
              CIAŁO. UMYSŁ. SYSTEM.
            </span>
          </h1>
          
          {/* --- MATRIX CODE EFFECT --- */}
          <div className="mb-10 h-8 flex items-center justify-center">
             <div className="text-brand-lime font-mono text-lg md:text-xl tracking-widest bg-black/50 px-4 py-1 border-x border-brand-lime/30">
                {'>'} <MatrixText text="URUCHOM: RESET_SYSTEMU_EXE" /> <span className="animate-pulse">_</span>
             </div>
          </div>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
             Odbierz „Tajny Protokół 14 Zmian”: natychmiastowy wzrost energii, fokusu i kontroli nad dniem
          </p>

          {/* Form Section */}
          <div className="w-full max-w-lg mx-auto backdrop-blur-sm">
            {status === 'success' ? (
               // Success State
               <div className="bg-brand-lime/10 border border-brand-lime/50 p-8 rounded-sm animate-in zoom-in duration-300 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-lime/5 animate-pulse"></div>
                  <div className="relative flex flex-col items-center gap-4 z-10">
                    <CheckCircle className="w-12 h-12 text-brand-lime" />
                    <div>
                      <h3 className="font-heading text-2xl text-white font-bold uppercase">Dostęp Przyznany</h3>
                      <p className="text-gray-300 mt-2 text-sm">Sprawdź swoją skrzynkę mailową. Raport jest w drodze.</p>
                    </div>
                    <button onClick={() => setStatus('idle')} className="text-xs text-gray-500 uppercase mt-4 hover:text-white flex items-center gap-2 transition-colors">
                       <RefreshCw className="w-3 h-3" /> Wyślij ponownie
                    </button>
                  </div>
               </div>
            ) : status === 'error' ? (
                // Error State
                <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-sm animate-in fade-in backdrop-blur-md">
                   <div className="flex flex-col items-center gap-2 text-center">
                      <AlertCircle className="text-red-500 w-8 h-8 mb-2" />
                      <h3 className="text-white font-heading uppercase text-lg">Błąd Połączenia</h3>
                      <p className="text-gray-400 text-sm mb-4">Nie udało się połączyć z bazą. Spróbuj ponownie.</p>
                      <Button variant="outline" onClick={() => setStatus('idle')} className="py-2 px-6 text-sm h-auto">Spróbuj ponownie</Button>
                   </div>
                </div>
            ) : (
              // Form State
              <>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 relative">
                  <div className="relative w-full group">
                      <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      placeholder="Wpisz e-mail" 
                      className="w-full bg-black/60 border border-white/20 px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime backdrop-blur-md transition-all text-center sm:text-left rounded-sm"
                      />
                      {/* Corner Accents for Input */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 transition-all group-hover:border-brand-lime"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 transition-all group-hover:border-brand-lime"></div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="whitespace-nowrap shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.5)]"
                  >
                    {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'ODBIERZ RAPORT'}
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-6 font-mono uppercase tracking-wide flex items-center justify-center gap-2 opacity-70">
                   <ShieldCheck className="w-3 h-3" /> 100% Secure. Zero Spam.
                </p>
              </>
            )}
          </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] text-white font-mono tracking-[0.2em] uppercase">Initialize</span>
          <ChevronDown className="w-5 h-5 text-brand-lime" />
      </div>

    </section>
  );
};

export default LeadMagnet;
