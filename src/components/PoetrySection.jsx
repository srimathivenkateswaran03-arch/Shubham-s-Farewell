import React, { useState } from 'react';
import { Feather, Copy, Check } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function PoetrySection() {
  const poem = {
    title: "Ode to Our Iron Man",
    author: "Team Avengers",
    verses: [
      "We know you write magic with words and rhymes,",
      "Bringing warmth and light in the busiest times.",
      "An optimist hero with a mind so bright,",
      "Turning every challenge into pure light.",
      "",
      "Though we don't have all your poems written down,",
      "Your poetic heart is famous across our town.",
      "We love you 3000, wherever you roam,",
      "In our hearts, you'll always have a home."
    ]
  };

  const [copied, setCopied] = useState(false);

  const handleCopyPoem = () => {
    const textToCopy = `${poem.title}\nBy: ${poem.author}\n\n${poem.verses.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    soundFX.playHudClick();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="poetry" className="py-16 relative bg-[#090b14] border-t border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-orbitron text-xs tracking-widest uppercase mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>THE POET OF OUR TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 mb-2">
            SHUBHAM THE POET ✍️
          </h2>
          <p className="font-outfit text-sm text-slate-300">
            We know Shubham is a poet at heart! A special poem dedicated to his creative soul.
          </p>
        </div>

        {/* Featured Dedicated Poem Display Card */}
        <div className="iron-card p-6 sm:p-10 rounded-3xl border-amber-500/50 bg-[#0d0905] relative shadow-2xl">
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-amber-500/20">
            <div>
              <span className="font-orbitron text-[10px] text-amber-400 tracking-widest uppercase block mb-1">DEDICATED STANZAS</span>
              <h3 className="font-orbitron font-bold text-2xl text-amber-200">{poem.title}</h3>
            </div>
            <button
              onClick={handleCopyPoem}
              className="px-3.5 py-1.5 rounded-xl bg-amber-950 border border-amber-400/40 text-amber-300 text-xs font-orbitron flex items-center space-x-1 cursor-pointer hover:bg-amber-500 hover:text-slate-950 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'COPY POEM'}</span>
            </button>
          </div>

          <div className="space-y-2.5 font-cinzel text-base sm:text-lg text-amber-100 italic leading-relaxed text-center sm:text-left">
            {poem.verses.map((verse, idx) => (
              <p key={idx} className={verse === "" ? "h-3" : ""}>
                {verse}
              </p>
            ))}
          </div>

          <div className="pt-6 mt-8 border-t border-amber-500/20 text-xs font-outfit text-amber-400/80 flex justify-between items-center">
            <span>DEDICATED TO SHUBHAM'S POETIC SOUL</span>
            <span>— {poem.author}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
