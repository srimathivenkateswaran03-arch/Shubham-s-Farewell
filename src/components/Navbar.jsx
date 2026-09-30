import React from 'react';
import { Volume2, VolumeX, Zap, Image as ImageIcon } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function Navbar({ onSuitUp, audioMuted, setAudioMuted }) {
  const toggleSound = () => {
    const isMuted = soundFX.toggleMute();
    setAudioMuted(isMuted);
    if (!isMuted) soundFX.playHudClick();
  };

  const handleNavClick = () => {
    soundFX.playHudClick();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080b12]/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Arc Reactor Badge */}
          <a 
            href="#hero" 
            onClick={handleNavClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-11 h-11 flex items-center justify-center rounded-full bg-[#0b1320] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] transition-all duration-300">
              <div className="w-5 h-5 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_10px_#00f0ff]" />
              <div className="absolute inset-0 rounded-full border border-yellow-400/40 transform rotate-45" />
            </div>
            <div>
              <span className="font-orbitron font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 tracking-wider">
                SHUBHAM
              </span>
              <span className="block font-rajdhani font-semibold text-xs text-cyan-400 tracking-widest uppercase">
                STARK PROTOCOL • 3000
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-rajdhani font-semibold text-xs tracking-wider">
            <a 
              href="#protocols" 
              onClick={handleNavClick}
              className="text-slate-300 hover:text-cyan-400 transition-colors py-1 uppercase border-b-2 border-transparent hover:border-cyan-400"
            >
              01. TRAITS
            </a>
            <a 
              href="#armors" 
              onClick={handleNavClick}
              className="text-slate-300 hover:text-red-400 transition-colors py-1 uppercase border-b-2 border-transparent hover:border-red-400"
            >
              02. IRON ARMORS
            </a>
            <a 
              href="#group-memory" 
              onClick={handleNavClick}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] uppercase"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>03. TEAM PHOTO</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Audio FX Toggle */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] cursor-pointer"
              title={audioMuted ? "Enable HUD Sound FX" : "Mute HUD Sound FX"}
            >
              {audioMuted ? <VolumeX className="w-5 h-5 text-slate-500" /> : <Volume2 className="w-5 h-5 animate-pulse text-cyan-400" />}
            </button>

            {/* Suit Up Repulsor Button */}
            <button
              onClick={() => {
                soundFX.playRepulsor();
                onSuitUp();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 font-orbitron font-bold text-xs text-white tracking-wider uppercase shadow-[0_0_20px_rgba(229,37,33,0.5)] hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] hover:scale-105 transition-all cursor-pointer border border-yellow-300/40 flex items-center space-x-2"
            >
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300 animate-bounce" />
              <span className="hidden sm:inline">SUIT UP!</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
