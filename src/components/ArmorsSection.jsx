import React, { useState } from 'react';
import { Shield, Zap, Heart, Award, Cpu } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function ArmorsSection() {
  const armors = [
    {
      id: 'mk1',
      name: 'MARK I • JUGAAD PROTOTYPE',
      tag: 'JUGAAD MASTER',
      borderColor: 'border-amber-400',
      icon: Cpu,
      ability: 'Master of Jugaad — Always finds clever, out-of-the-box ways to solve any problem.'
    },
    {
      id: 'mk50',
      name: 'MARK L • NANOTECH OPTIMIST',
      tag: '3000% POSITIVITY',
      borderColor: 'border-red-400',
      icon: Zap,
      ability: 'Optimism Repulsor — Morphs deadline stress into smiles and high morale.'
    },
    {
      id: 'mk85',
      name: 'MARK 85 • THE MENTOR ARMOR',
      tag: 'ZERO-JUDGEMENT',
      borderColor: 'border-cyan-400',
      icon: Shield,
      ability: 'No-Judgement Shield — Answers all questions with infinite patience & kindness.'
    },
    {
      id: 'mk3000',
      name: 'MARK 3000 • FAREWELL LEGEND',
      tag: 'PROOF HE HAS A HEART',
      borderColor: 'border-yellow-300',
      icon: Heart,
      ability: 'Arc Heart Pulse — Leaves an unforgettable legacy of inspiration & team love.'
    }
  ];

  const [activeArmorId, setActiveArmorId] = useState('mk3000');
  const activeArmor = armors.find(a => a.id === activeArmorId) || armors[3];
  const IconComp = activeArmor.icon;

  return (
    <section id="armors" className="py-16 relative bg-[#050810] border-t border-cyan-500/20">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/90 border border-red-500/40 text-red-400 font-orbitron text-xs uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>STARK ARMOR VAULT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 mb-2">
            SHUBHAM's IRON SUITS
          </h2>
        </div>

        {/* Suit Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {armors.map((armor) => (
            <button
              key={armor.id}
              onClick={() => {
                soundFX.playHudClick();
                setActiveArmorId(armor.id);
              }}
              className={`p-3 rounded-xl border font-orbitron text-xs font-bold text-left transition-all cursor-pointer ${
                activeArmorId === armor.id
                  ? 'bg-slate-900 border-yellow-400 text-yellow-300 shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span className="block text-[10px] text-cyan-400 uppercase mb-1">{armor.tag}</span>
              <span>{armor.name.split('•')[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected Suit Card */}
        <div className={`iron-card p-6 sm:p-8 rounded-2xl border-2 ${activeArmor.borderColor} bg-[#0a0d18] flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-2xl bg-slate-950 border ${activeArmor.borderColor} flex items-center justify-center text-yellow-300 flex-shrink-0`}>
              <IconComp className="w-7 h-7" />
            </div>
            <div>
              <span className="font-orbitron text-[10px] text-cyan-400 uppercase block mb-1">{activeArmor.tag}</span>
              <h3 className="font-orbitron font-black text-xl text-white mb-1">{activeArmor.name}</h3>
              <p className="font-outfit text-sm text-slate-200">{activeArmor.ability}</p>
            </div>
          </div>

          <button
            onClick={() => soundFX.playRepulsor()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-slate-950 font-orbitron font-bold text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap shadow-lg hover:scale-105 transition-all"
          >
            FIRE REPULSOR ⚡
          </button>
        </div>

      </div>
    </section>
  );
}
