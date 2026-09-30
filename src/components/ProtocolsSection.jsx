import React from 'react';
import { HelpCircle, Shield, Zap } from 'lucide-react';

export default function ProtocolsSection() {
  return (
    <section id="protocols" className="py-16 relative bg-[#060910]">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 font-orbitron text-xs tracking-widest uppercase mb-3">
            <span>STARK ARCHIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 mb-2">
            SHUBHAM'S SUPERPOWERS
          </h2>
        </div>

        {/* 3 Main Superpower Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* TRAIT 1 */}
          <div className="iron-card p-6 rounded-2xl border-cyan-500/40 relative">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="font-orbitron text-[10px] text-cyan-400 tracking-widest uppercase block mb-1">SUPERPOWER 01</span>
            <h3 className="font-orbitron font-bold text-xl text-white mb-2">ANSWERS ALL QUESTIONS</h3>
            <p className="font-outfit text-sm text-slate-300 leading-relaxed">
              No matter how simple or basic the question, Shubham always helped with infinite patience and warmth.
            </p>
          </div>

          {/* TRAIT 2 */}
          <div className="iron-card p-6 rounded-2xl border-yellow-500/40 relative">
            <div className="w-10 h-10 rounded-xl bg-yellow-950 border border-yellow-400 flex items-center justify-center text-yellow-300 mb-4 shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-orbitron text-[10px] text-yellow-400 tracking-widest uppercase block mb-1">SUPERPOWER 02</span>
            <h3 className="font-orbitron font-bold text-xl text-white mb-2">ZERO-JUDGEMENT SHIELD</h3>
            <p className="font-outfit text-sm text-slate-300 leading-relaxed">
              Never made anyone feel silly or small. Made every teammate feel valued, confident, and empowered.
            </p>
          </div>

          {/* TRAIT 3 */}
          <div className="iron-card p-6 rounded-2xl border-red-500/40 relative">
            <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-400 flex items-center justify-center text-red-300 mb-4 shadow-[0_0_15px_rgba(229,37,33,0.4)]">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-orbitron text-[10px] text-red-400 tracking-widest uppercase block mb-1">SUPERPOWER 03</span>
            <h3 className="font-orbitron font-bold text-xl text-white mb-2">3000% OPTIMIST</h3>
            <p className="font-outfit text-sm text-slate-300 leading-relaxed">
              His relentless positive energy turned stressful deadlines into cheerful, victorious team moments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
