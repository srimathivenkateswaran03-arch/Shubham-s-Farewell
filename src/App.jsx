import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProtocolsSection from './components/ProtocolsSection';
import ArmorsSection from './components/ArmorsSection';
import MemoryFrameSection from './components/MemoryFrameSection';
import Footer from './components/Footer';
import { soundFX } from './utils/soundEffects';

export default function App() {
  const [audioMuted, setAudioMuted] = useState(false);
  const [suitingUp, setSuitingUp] = useState(false);

  // Trigger Avengers Marvel Confetti Celebration
  const triggerSuitUp = () => {
    soundFX.playRepulsor();
    setSuitingUp(true);

    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#e52521', '#ffd700', '#00f0ff', '#ffffff']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#e52521', '#ffd700', '#00f0ff', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      setSuitingUp(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 font-outfit relative">
      
      {/* Suit Up Fullscreen Armor HUD Overlay Modal */}
      {suitingUp && (
        <div className="fixed inset-0 z-50 bg-[#080b12]/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fadeIn px-4">
          <div className="w-24 h-24 rounded-full bg-[#0b1320] border-4 border-cyan-400 shadow-[0_0_60px_#00f0ff] flex items-center justify-center animate-arc-pulse mb-6">
            <div className="w-12 h-12 rounded-full bg-cyan-300 animate-ping shadow-[0_0_30px_#00f0ff]" />
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 tracking-wider mb-2 text-center">
            MARK 3000 ARMOR ENGAGED!
          </h2>
          <p className="font-rajdhani font-bold text-lg sm:text-xl text-cyan-300 uppercase tracking-widest text-center">
            SHUBHAM: THE HERO WE NEEDED • WE LOVE YOU 3000
          </p>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar 
        onSuitUp={triggerSuitUp} 
        audioMuted={audioMuted} 
        setAudioMuted={setAudioMuted} 
      />

      {/* Hero Header Section */}
      <HeroSection onSuitUp={triggerSuitUp} />

      {/* Shubham Core Superpowers */}
      <ProtocolsSection />

      {/* Iron Man Armors of Shubham Section */}
      <ArmorsSection />

      {/* Group Memory Photo Attachment Station */}
      <MemoryFrameSection />

      {/* Footer Memorial */}
      <Footer />

    </div>
  );
}
