import React, { useState } from 'react';
import { Wrench, Zap, Flame, Award, Heart } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function JugaadSection() {
  const [jugaadApprecCount, setJugaadApprecCount] = useState(3000);

  const handleAppreciate = () => {
    soundFX.playArcPower();
    setJugaadApprecCount(prev => prev + 1);
  };

  return (
    <section id="jugaad-lab" className="py-16 relative bg-[#070b14] border-t border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Section Header */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/90 border border-amber-400/40 text-amber-300 font-orbitron text-xs tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(255,183,3,0.3)]">
          <Wrench className="w-3.5 h-3.5 text-amber-400" />
          <span>STARK ATTRIBUTE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-red-500 mb-4">
          THE JUGAAD MASTER ⚡
        </h2>

        {/* High-Impact Hero Card (No Specific Code Methods or Technical Details) */}
        <div className="iron-card p-6 sm:p-10 rounded-3xl border-amber-500/40 bg-[#0e0a05] max-w-2xl mx-auto shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-950/90 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_25px_rgba(255,183,3,0.4)]">
            <Wrench className="w-8 h-8" />
          </div>

          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-yellow-300 mb-3">
            ALWAYS HAS A JUGAAD FOR EVERYTHING!
          </h3>

          <p className="font-outfit text-base text-slate-200 leading-relaxed mb-6">
            Whenever a situation seemed stuck, Shubham always came through with his famous <strong className="text-yellow-300">Jugaad approach</strong> — finding clever, positive, and out-of-the-box ways to solve any challenge with a smile.
          </p>

          {/* Interactive Appreciation Counter */}
          <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-rajdhani text-xs text-amber-400 font-semibold uppercase tracking-wider">
              SHUBHAM'S JUGAAD ENERGY: <strong className="text-yellow-300 text-sm">{jugaadApprecCount}%</strong>
            </span>

            <button
              onClick={handleAppreciate}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-orbitron font-bold text-xs uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(255,183,3,0.4)] hover:scale-105 transition-all flex items-center space-x-1.5"
            >
              <Flame className="w-4 h-4 fill-slate-950" />
              <span>APPRECIATE JUGAAD MASTER ⚡</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
