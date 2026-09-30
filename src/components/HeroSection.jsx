import React, { useEffect, useRef } from 'react';
import { Shield, HelpCircle, Heart, Zap, Wrench, Feather, ChevronDown } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export default function HeroSection({ onSuitUp }) {
  const canvasRef = useRef(null);

  // Background Arc Reactor Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#00f0ff' : '#ffd700',
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      alpha: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // HUD grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw glowing particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Holographic Glowing Pulse Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-r from-red-600/20 via-cyan-500/25 to-yellow-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Avengers Telemetry Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-orbitron tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span>AVENGERS INITIATIVE • FAREWELL EDITION</span>
        </div>

        {/* Hero Title */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-orbitron font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 drop-shadow-[0_10px_25px_rgba(229,37,33,0.5)] uppercase">
            SHUBHAM: OUR IRON MAN
          </h1>
          <p className="mt-3 text-lg sm:text-2xl font-rajdhani font-bold text-cyan-300 tracking-widest uppercase flex items-center justify-center space-x-3">
            <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400" />
            <span>WE LOVE YOU 3000</span>
            <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </p>
        </div>

        {/* 3 Core Superpower Cards (Minimal & Crisp) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          
          <div className="iron-card p-5 rounded-2xl border-red-500/40 hover:border-red-400 transition-all text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-red-950/80 border border-red-400 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(229,37,33,0.4)]">
              <Zap className="w-6 h-6 fill-red-400" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-yellow-300 mb-1">3000% OPTIMIST</h3>
            <p className="font-outfit text-xs text-slate-300">Pure positive energy in every sprint.</p>
          </div>

          <div className="iron-card p-5 rounded-2xl border-cyan-500/40 hover:border-cyan-400 transition-all text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-950/80 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-cyan-300 mb-1">ANSWERS ALL QUESTIONS</h3>
            <p className="font-outfit text-xs text-slate-300">Zero judgement. Helps even with basic questions.</p>
          </div>

          <div className="iron-card p-5 rounded-2xl border-amber-500/40 hover:border-amber-400 transition-all text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-950/80 border border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(255,183,3,0.4)]">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-amber-300 mb-1">GENIUS JUGAAD MASTER</h3>
            <p className="font-outfit text-xs text-slate-300">Solves complex bugs with clever, clean hacks.</p>
          </div>

        </div>

        {/* Big Avengers Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              soundFX.playRepulsor();
              onSuitUp();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 font-orbitron font-black text-sm text-slate-950 uppercase tracking-wider shadow-[0_0_35px_rgba(229,37,33,0.7)] hover:shadow-[0_0_50px_rgba(255,215,0,0.9)] hover:scale-105 transition-all cursor-pointer border-2 border-yellow-300 flex items-center justify-center space-x-3"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>TRIGGER SUIT UP CELEBRATION!</span>
          </button>
        </div>

        {/* Scroll Prompt */}
        <a 
          href="#protocols"
          onClick={() => soundFX.playHudClick()}
          className="inline-flex flex-col items-center mt-12 text-cyan-400/60 hover:text-cyan-300 transition-colors group cursor-pointer"
        >
          <span className="font-rajdhani text-xs tracking-widest uppercase mb-1">EXPLORE HERO TRAITS</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-cyan-400 group-hover:text-yellow-400" />
        </a>

      </div>
    </section>
  );
}
