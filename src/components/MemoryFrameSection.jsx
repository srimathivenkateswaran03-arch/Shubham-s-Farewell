import React, { useState, useRef } from 'react';
import { Download, ImageIcon, RefreshCw, Check } from 'lucide-react';
import { toPng } from 'html-to-image';
import { soundFX } from '../utils/soundEffects';
import defaultTeamPhoto from '../assets/shubham_avengers_team.jpg';

export default function MemoryFrameSection() {
  const frameRef = useRef(null);

  const [attachedImage, setAttachedImage] = useState(defaultTeamPhoto);
  const [frameStyle, setFrameStyle] = useState('hud');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    if (!frameRef.current) return;
    soundFX.playArcPower();
    setIsDownloading(true);

    try {
      const dataUrl = await toPng(frameRef.current, { cacheBust: true, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `Shubham_Avengers_Group_Memory.png`;
      link.href = dataUrl;
      link.click();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      alert("Take a screenshot to save your framed photo memory!");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="group-memory" className="py-16 relative bg-[#05070e] border-t border-cyan-500/20">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 font-orbitron text-xs uppercase mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE AVENGERS TEAM PHOTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-red-500 mb-2">
            SHUBHAM & THE AVENGERS ⚡
          </h2>
          <p className="font-outfit text-sm text-slate-300">
            Our unstoppable team assembled in full Stark suit glory!
          </p>
        </div>

        {/* Marvel Frame Style Selector Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          <span className="font-orbitron font-bold text-xs text-yellow-300 uppercase mr-2">FRAME STYLE:</span>
          {[
            { id: 'hud', name: 'Stark HUD' },
            { id: 'gold', name: 'Golden Armor' },
            { id: 'reactor', name: 'Arc Reactor' },
            { id: 'comic', name: 'Comic Book' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => {
                soundFX.playHudClick();
                setFrameStyle(f.id);
              }}
              className={`px-4 py-2 rounded-xl font-orbitron text-xs font-bold border transition-all cursor-pointer ${
                frameStyle === f.id
                  ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white border-yellow-300 shadow-md scale-105'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Featured Photo Display Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={frameRef}
            className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 transition-all ${
              frameStyle === 'hud'
                ? 'bg-[#071322] border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.4)]'
                : frameStyle === 'gold'
                ? 'bg-[#1c080b] border-4 border-amber-400 shadow-[0_0_40px_rgba(255,215,0,0.4)]'
                : frameStyle === 'reactor'
                ? 'bg-[#0c0d1a] border-4 border-red-500 shadow-[0_0_40px_rgba(229,37,33,0.5)]'
                : 'bg-yellow-400 border-4 border-slate-950 text-slate-950'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-orbitron font-bold text-xs text-cyan-300 uppercase tracking-wider">
                STARK ARCHIVES • FAREWELL MEMORY
              </span>
              <span className="font-orbitron font-bold text-xs text-yellow-300">
                WE LOVE YOU 3000
              </span>
            </div>

            {/* Photo Display */}
            <div className="relative rounded-2xl overflow-hidden border border-current/30 shadow-2xl bg-black flex items-center justify-center p-2 sm:p-3">
              <img 
                src={attachedImage} 
                alt="Shubham & The Avengers Team" 
                className="w-full h-auto max-h-[620px] object-contain rounded-xl" 
                style={{ objectPosition: 'center top' }}
              />
            </div>

            <div className="mt-5 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h4 className="font-orbitron font-black text-lg sm:text-xl text-yellow-300 uppercase tracking-wide">
                  SHUBHAM & THE AVENGERS TEAM
                </h4>
                <p className="font-outfit text-xs text-cyan-200">
                  "Genius problem solver, zero-judgement mentor, 3000% optimist & master poet."
                </p>
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-slate-950 font-orbitron font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center space-x-2 shadow-lg hover:scale-105 transition-all whitespace-nowrap"
              >
                {isDownloading ? <RefreshCw className="w-4 h-4 animate-spin" /> : downloadSuccess ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{downloadSuccess ? 'SAVED TO DOWNLOADS!' : 'DOWNLOAD MEMORY PHOTO'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
