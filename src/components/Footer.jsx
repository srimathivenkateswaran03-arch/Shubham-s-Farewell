import React from 'react';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function Footer() {
  return (
    <footer className="bg-[#030509] border-t border-cyan-500/20 py-16 relative overflow-hidden text-center">
      {/* Background Arc Reactor Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Arc Reactor Core Badge */}
        <div className="inline-flex flex-col items-center mb-8">
          <div 
            onClick={() => soundFX.playArcPower()}
            className="w-16 h-16 rounded-full bg-[#0b1320] border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:shadow-[0_0_50px_rgba(255,215,0,0.9)] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer mb-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_15px_#00f0ff] group-hover:bg-yellow-300" />
          </div>
          <span className="font-orbitron font-bold text-xs tracking-widest text-cyan-300 uppercase">
            PROOF THAT SHUBHAM HAS A HEART
          </span>
        </div>

        {/* Big Heartfelt Sign-Off */}
        <h3 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 mb-4">
          THANK YOU SHUBHAM!
        </h3>

        <p className="font-outfit text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          You answered every question, lifted every spirit, never made anyone feel small, and inspired us with your poetic heart.
        </p>

        {/* We Love You 3000 Badge */}
        <div className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-2xl bg-red-950/80 border border-yellow-400/50 text-yellow-300 font-orbitron font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(229,37,33,0.4)] mb-8">
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
          <span>WE LOVE YOU 3000 • FOREVER OUR TONY STARK</span>
        </div>

        {/* Footer Credit */}
        <div className="pt-8 border-t border-slate-900 text-xs font-rajdhani text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>STARK ENTERPRISES FAREWELL MEMORIAL • 2026</span>
          <span>CRAFTED WITH ♥ BY YOUR AVENGERS TEAM</span>
        </div>

      </div>
    </footer>
  );
}
