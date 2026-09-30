import React, { useState } from 'react';
import { Heart, Zap } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function TributesSection() {
  const [tributes, setTributes] = useState([
    {
      id: 1,
      name: "Steve Rogers",
      role: "Team Lead",
      badge: "Go-To Oracle",
      message: "Shubham, you were truly the Tony Stark of our team. Always answered every question with brilliant solutions. Farewell legend!",
      reactions: { love: 24, repulsor: 30 }
    },
    {
      id: 2,
      name: "Natasha Romanoff",
      role: "Frontend Dev",
      badge: "Zero-Judgement",
      message: "Thank you for never making me feel silly when asking simple questions. Your patience and kindness empowered us all. We'll miss you 3000!",
      reactions: { love: 35, repulsor: 40 }
    },
    {
      id: 3,
      name: "Bruce Banner",
      role: "Backend Architect",
      badge: "3000% Optimist",
      message: "Your infectious optimism turned chaos into victory! Thank you for always bringing high energy to our sprint retros.",
      reactions: { love: 19, repulsor: 28 }
    },
    {
      id: 4,
      name: "Peter Parker",
      role: "Junior Engineer",
      badge: "Jugaad Master",
      message: "You taught me that asking questions is a superpower, and your clever Jugaad ways saved us so many times. Thank you Shubham!",
      reactions: { love: 42, repulsor: 36 }
    }
  ]);

  const handleReact = (id, type) => {
    soundFX.playHudClick();
    setTributes(tributes.map(t => {
      if (t.id === id) {
        return {
          ...t,
          reactions: {
            ...t.reactions,
            [type]: (t.reactions[type] || 0) + 1
          }
        };
      }
      return t;
    }));
  };

  return (
    <section id="tributes" className="py-16 relative bg-[#070912] border-t border-cyan-500/20">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/40 text-yellow-300 font-orbitron text-xs uppercase mb-3">
            <Heart className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>AVENGERS TRIBUTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-amber-300 mb-2">
            TEAMMATE FAREWELL WALL
          </h2>
          <p className="font-outfit text-sm text-slate-300">
            Messages of love, admiration, and gratitude from the team Shubham inspired!
          </p>
        </div>

        {/* Full Width Tribute Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tributes.map(item => (
            <div key={item.id} className="iron-card p-6 rounded-2xl border-yellow-500/30 bg-slate-900/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-orbitron font-bold text-base text-yellow-200">{item.name}</h4>
                    <span className="font-outfit text-xs text-slate-400">{item.role}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-950 border border-red-500/40 text-red-300 text-[10px] font-orbitron uppercase">
                    {item.badge}
                  </span>
                </div>

                <p className="font-outfit text-sm text-slate-200 leading-relaxed italic mb-4">
                  "{item.message}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center space-x-2 text-xs">
                <button onClick={() => handleReact(item.id, 'love')} className="px-3 py-1.5 rounded-lg bg-red-950 border border-red-500/30 text-red-300 flex items-center space-x-1.5 cursor-pointer hover:scale-105 transition-all">
                  <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                  <span>{item.reactions?.love || 0}</span>
                </button>
                <button onClick={() => handleReact(item.id, 'repulsor')} className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-300 flex items-center space-x-1.5 cursor-pointer hover:scale-105 transition-all">
                  <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  <span>{item.reactions?.repulsor || 0}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
